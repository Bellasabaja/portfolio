"use client";

import { useState } from "react";

const links = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#skills", label: "Skills" },
  { href: "#projekte", label: "Projekte" },
  { href: "#werdegang", label: "Werdegang" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#top" className="nav-logo">
          birgit.prokot<span>()</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
