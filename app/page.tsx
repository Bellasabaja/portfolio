import Link from "next/link";

import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  EMAIL,
  GITHUB,
  projects,
  skillGroups,
  strengths,
  timeline,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="inhalt">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <p className="hero-kicker">Hallo, ich bin</p>
            <h1 id="hero-title">Birgit Prokot</h1>
            <p className="hero-role">
              <strong>AI Mobile App Developer</strong> · Schwerpunkt
              Full-Stack-Webentwicklung
            </p>
            <p className="hero-pitch">
              Karrierewechslerin mit rund 25 Jahren Berufserfahrung in Pflege
              und eigener Unternehmung – jetzt App-Entwicklerin mit Projekten in
              React, TypeScript, Next.js, Firebase und Flutter/Dart. Schnelle
              Auffassungsgabe, strukturierte Arbeitsweise und hohe Motivation,
              mein Wissen in der Praxis einzusetzen.
            </p>
            <div className="hero-actions">
              <a href="#projekte" className="btn btn-primary">
                Projekte ansehen
              </a>
              <a href="#kontakt" className="btn btn-secondary">
                Kontakt
              </a>
            </div>
          </div>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" aria-labelledby="about-title">
          <div className="container">
            <Reveal>
              <p className="section-label">Über mich</p>
              <h2 id="about-title">
                Zwei Karrieren. Eine Stärke: Verantwortung übernehmen.
              </h2>
            </Reveal>
            <div className="about-grid">
              <Reveal>
                <div className="about-text">
                  <p>
                    Mein Weg in die Softwareentwicklung ist kein gerader – und
                    genau das ist meine Stärke. Rund{" "}
                    <strong>25 Jahre Berufserfahrung</strong> haben mich
                    geprägt: als examinierte Krankenschwester und
                    Pflegedienstleitung, als Pflegefachkraft in der Abtei
                    Münsterschwarzach und als{" "}
                    <strong>selbstständige Unternehmerin</strong> mit eigener
                    Eventagentur – insgesamt 10 Jahre Selbstständigkeit.
                  </p>
                  <p>
                    In der Pflege habe ich gelernt, unter Druck ruhig und
                    sorgfältig zu arbeiten, im Team zu funktionieren und
                    Verantwortung für Menschen zu tragen. Als Unternehmerin habe
                    ich Projekte von der Idee bis zur Umsetzung selbst gesteuert
                    – Planung, Budget, Kunden, alles in einer Hand.
                  </p>
                  <p>
                    Diese Erfahrung bringe ich heute in die App-Entwicklung ein:
                    Über eine Umschulung in der IT (HTML, CSS, Java, PHP) und
                    die Weiterbildung zur{" "}
                    <strong>AI Mobile App Developerin</strong> an der
                    AppAkademie habe ich mir einen modernen Full-Stack
                    erarbeitet – von React und Next.js über Firebase bis Flutter
                    und Rust/WebAssembly.
                  </p>
                  <p>
                    Ich suche ein Team, in dem ich dieses Wissen praktisch
                    einsetzen und weiter wachsen kann – verlässlich,
                    strukturiert und mit echter Begeisterung für gute Software.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <ul className="fact-cards">
                  <li className="fact-card">
                    <span className="num">25+</span>
                    <span className="label">Jahre Berufserfahrung</span>
                  </li>
                  <li className="fact-card">
                    <span className="num">10</span>
                    <span className="label">Jahre Selbstständigkeit</span>
                  </li>
                  <li className="fact-card">
                    <span className="num">4</span>
                    <span className="label">
                      Jahre IT-Ausbildung &amp; Weiterbildung
                    </span>
                  </li>
                  <li className="fact-card">
                    <span className="num">5</span>
                    <span className="label">Projekte als Case Studies</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" aria-labelledby="skills-title">
          <div className="container">
            <Reveal>
              <p className="section-label">Skills</p>
              <h2 id="skills-title">Mein Tech-Stack</h2>
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <Reveal key={group.title}>
                  <div className="skill-group">
                    <h3>
                      <span className="dot" aria-hidden="true" />
                      {group.title}
                    </h3>
                    <ul className="tags">
                      {group.skills.map((s) => (
                        <li key={s} className="tag">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="strengths">
              {strengths.map((s) => (
                <Reveal key={s.title}>
                  <div className="strength">
                    <strong>{s.title}</strong>
                    {s.text}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projekte – kompakte Übersicht */}
        <section id="projekte" aria-labelledby="projects-title">
          <div className="container">
            <Reveal>
              <p className="section-label">Projekte</p>
              <h2 id="projects-title">Case Studies</h2>
              <p className="section-intro">
                Fünf Projekte aus Ausbildung und Praxis – jeweils mit Problem,
                Herausforderung, Lösung und Learnings.
              </p>
            </Reveal>
            <ul className="project-grid">
              {projects.map((p) => (
                <Reveal key={p.slug} as="li">
                  <article className="project-teaser">
                    <p className="proj-type">{p.type}</p>
                    <h3>
                      <Link href={`/projekte/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p className="teaser-text">{p.teaser}</p>
                    <ul className="tags">
                      {p.stack.map((tech) => (
                        <li key={tech} className="tag muted">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <p className="teaser-more" aria-hidden="true">
                      Case Study lesen →
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Werdegang */}
        <section id="werdegang" aria-labelledby="cv-title">
          <div className="container">
            <Reveal>
              <p className="section-label">Werdegang</p>
              <h2 id="cv-title">Mein Weg</h2>
            </Reveal>
            <ol className="timeline">
              {timeline.map((t) => (
                <Reveal key={t.date} as="li">
                  <div className={`tl-item${t.past ? " past" : ""}`}>
                    <p className="tl-date">{t.date}</p>
                    <h3>{t.title}</h3>
                    <p className="org">{t.org}</p>
                    <p className="desc">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="contact" aria-labelledby="contact-title">
          <div className="container">
            <Reveal>
              <p className="section-label">Kontakt</p>
              <h2 id="contact-title">Lassen Sie uns sprechen</h2>
              <p>
                Ich freue mich über Nachrichten zu offenen Stellen, Praktika
                oder Projekten – ob React, Next.js, Flutter oder Firebase.
              </p>
              <div className="contact-actions">
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  E-Mail schreiben
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub-Profil
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
                <a
                  href="/cv/lebenslauf-birgit-prokot-de.pdf"
                  download
                  className="btn btn-secondary"
                >
                  Lebenslauf (PDF)
                </a>
                <a
                  href="/cv/lebenslauf-birgit-prokot-en.pdf"
                  download
                  className="btn btn-secondary"
                >
                  CV – English (PDF)
                </a>
              </div>
              <p className="contact-meta">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · Obervolkach, Bayern
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} Birgit Prokot · Gebaut mit{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>{" "}
          &amp; TypeScript · Gehostet auf Vercel
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
