"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { id: "ueber-mich", label: "Über mich" },
  { id: "skills", label: "Skills" },
  { id: "projekte", label: "Projekte" },
  { id: "werdegang", label: "Werdegang" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  /** Aktive Sektion beim Scrollen hervorheben (nur auf der Startseite). */
  useEffect(() => {
    if (!isHome) return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  /** Menü mit Escape schließen, Fokus zurück auf den Button. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="site-header">
      <a href="#inhalt" className="skip-link">
        Zum Inhalt springen
      </a>
      <div className="container nav">
        <Link href="/" className="nav-logo">
          birgit.prokot<span aria-hidden="true">()</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="hauptmenue"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>

        <nav id="hauptmenue" aria-label="Hauptnavigation">
          <ul className={`nav-links${open ? " open" : ""}`}>
            {links.map((l) => {
              const isActive = isHome && active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={href(l.id)}
                    onClick={() => setOpen(false)}
                    className={isActive ? "active" : undefined}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
