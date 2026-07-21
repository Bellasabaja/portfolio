import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Birgit Prokot",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main id="inhalt" className="legal">
      <div className="container">
        <Link href="/" className="back-link">
          ← Zurück zur Startseite
        </Link>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortliche</h2>
        <p>
          Birgit Prokot
          <br />
          Landsknechtstr. 20
          <br />
          97332 Obervolkach
          <br />
          E-Mail:{" "}
          <a href="mailto:birgit.prokot@gmail.com">birgit.prokot@gmail.com</a>
        </p>

        <h2>2. Allgemeines</h2>
        <p>
          Diese Website ist ein persönliches Portfolio. Sie verwendet keine
          Cookies, keine Analyse- oder Tracking-Tools und enthält kein
          Kontaktformular. Es werden so wenige personenbezogene Daten wie
          möglich verarbeitet.
        </p>

        <h2>3. Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, USA, gehostet. Beim Aufruf der Website verarbeitet
          Vercel technisch notwendige Daten, insbesondere IP-Adresse, Datum
          und Uhrzeit des Zugriffs, Browsertyp und Betriebssystem
          (Server-Logfiles). Die Verarbeitung erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren
          und zuverlässigen Bereitstellung der Website). Vercel kann Daten in
          den USA verarbeiten; die Übermittlung stützt sich auf die
          EU-Standardvertragsklauseln bzw. das EU-US Data Privacy Framework.
          Weitere Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/legal/privacy-policy
          </a>
        </p>

        <h2>4. Kontaktaufnahme per E-Mail</h2>
        <p>
          Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben (E-Mail-
          Adresse, Inhalt der Nachricht) zur Bearbeitung der Anfrage
          verarbeitet (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und gelöscht, sobald
          sie nicht mehr erforderlich sind.
        </p>

        <h2>5. Externe Links</h2>
        <p>
          Diese Website verlinkt auf externe Angebote (z. B. GitHub,
          Live-Demos). Beim Aufruf dieser Links gelten die
          Datenschutzbestimmungen der jeweiligen Anbieter.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15),
          Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
          Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und
          Widerspruch gegen die Verarbeitung (Art. 21). Außerdem haben Sie das
          Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren –
          in Bayern ist das das Bayerische Landesamt für Datenschutzaufsicht
          (BayLDA), Ansbach.
        </p>

        <p className="stand">Stand: Juli 2026</p>
      </div>
    </main>
  );
}
