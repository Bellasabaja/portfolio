import type { Metadata } from "next";
import Link from "next/link";

import Nav from "@/components/Nav";
import { EMAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Barrierefreiheit | Birgit Prokot",
  description:
    "Erklärung zur Barrierefreiheit dieser Website – umgesetzte Maßnahmen nach WCAG 2.1 Stufe AA.",
  alternates: { canonical: "/barrierefreiheit" },
};

export default function Barrierefreiheit() {
  return (
    <>
      <Nav />
      <main id="inhalt" className="legal">
        <div className="container">
          <Link href="/" className="back-link">
            ← Zurück zur Startseite
          </Link>
          <h1>Erklärung zur Barrierefreiheit</h1>

          <p>
            Ich möchte, dass diese Website von möglichst allen Menschen genutzt
            werden kann – unabhängig von Sehvermögen, Motorik oder verwendetem
            Hilfsmittel. Die Seite ist nach den{" "}
            <a
              href="https://www.w3.org/Translations/WCAG21-de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>{" "}
            in Stufe AA gestaltet.
          </p>

          <h2>Umgesetzte Maßnahmen</h2>
          <ul className="legal-list">
            <li>
              <strong>Tastaturbedienung:</strong> Alle Inhalte und
              Bedienelemente sind ohne Maus erreichbar. Das aktive Element wird
              deutlich hervorgehoben, das Menü lässt sich mit der Escape-Taste
              schließen.
            </li>
            <li>
              <strong>Sprunglink:</strong> Ein Link „Zum Inhalt springen"
              erscheint beim ersten Tastendruck und überspringt die Navigation.
            </li>
            <li>
              <strong>Farbkontraste:</strong> Alle Text-Hintergrund-Kombinationen
              erreichen mindestens ein Kontrastverhältnis von 6:1 und liegen
              damit über der geforderten Stufe AA (4,5:1).
            </li>
            <li>
              <strong>Alternativtexte:</strong> Alle Screenshots sind mit
              beschreibenden Texten versehen, sodass Screenreader ihren Inhalt
              wiedergeben können.
            </li>
            <li>
              <strong>Struktur:</strong> Semantisches HTML mit klarer
              Überschriften-Hierarchie, ausgezeichneten Bereichen (Landmarks)
              und echten Listen – so können Screenreader gezielt navigieren.
            </li>
            <li>
              <strong>Bewegung:</strong> Animationen sind dezent gehalten. Ist
              im Betriebssystem „Bewegung reduzieren" aktiviert, werden sie
              abgeschaltet; die interaktive Simulation startet dann pausiert.
            </li>
            <li>
              <strong>Vergrößerung:</strong> Die Seite bleibt bei 200 % Zoom
              vollständig nutzbar und passt sich allen Bildschirmgrößen an.
            </li>
            <li>
              <strong>Sprache:</strong> Die Seitensprache ist als Deutsch
              ausgezeichnet, damit Screenreader korrekt vorlesen.
            </li>
          </ul>

          <h2>Stand und Prüfung</h2>
          <p>
            Diese Website wurde von mir selbst nach den genannten Kriterien
            entwickelt und geprüft – unter anderem mit Tastaturnavigation,
            Kontrastberechnung und automatisierten Prüfwerkzeugen. Eine
            Zertifizierung durch eine externe Prüfstelle liegt nicht vor.
          </p>

          <h2>Bekannte Einschränkungen</h2>
          <p>
            Die interaktive Game-of-Life-Simulation auf der Projektseite ist
            eine rein visuelle Darstellung. Sie ist als dekorativ ausgezeichnet
            und wird von Screenreadern übersprungen – alle Informationen dazu
            stehen im Text der Case Study. Die zum Download angebotenen
            Lebenslauf-PDFs sind nicht vollständig barrierefrei aufbereitet;
            alle darin enthaltenen Informationen finden sich auch als Text im
            Bereich „Werdegang".
          </p>

          <h2>Feedback</h2>
          <p>
            Sollten Sie auf Hürden stoßen oder Inhalte nicht nutzen können,
            schreiben Sie mir gern – ich bessere das nach:{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          <p className="stand">Stand: Juli 2026</p>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} Birgit Prokot
          <div className="footer-legal">
            <Link href="/impressum">Impressum</Link> ·{" "}
            <Link href="/datenschutz">Datenschutz</Link> ·{" "}
            <Link href="/barrierefreiheit">Barrierefreiheit</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
