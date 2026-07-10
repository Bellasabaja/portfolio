"use client";

import { useEffect, useRef } from "react";

/** Dezente Einblend-Animation beim Scrollen (respektiert prefers-reduced-motion). */
export default function Reveal({
  children,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component ref={ref} className="reveal">
      {children}
    </Component>
  );
}
