import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Birgit Prokot",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main id="inhalt" className="legal">
      <div className="container">
        <Link href="/" className="back-link">
          ← Zurück zur Startseite
        </Link>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Birgit Prokot
          <br />
          Landsknechtstr. 20
          <br />
          97332 Obervolkach
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:birgit.prokot@gmail.com">birgit.prokot@gmail.com</a>
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>Birgit Prokot (Anschrift wie oben)</p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter (z. B.
          GitHub), auf deren Inhalte ich keinen Einfluss habe. Für diese
          fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
          rechtswidrigen Inhalte erkennbar.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die auf dieser Website erstellten Inhalte und Werke unterliegen dem
          deutschen Urheberrecht. Beiträge Dritter sind als solche
          gekennzeichnet.
        </p>
      </div>
    </main>
  );
}
