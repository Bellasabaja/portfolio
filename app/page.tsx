import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";

/* ---------------------------------------------------------------------------
   Daten – hier kannst du Inhalte zentral pflegen
--------------------------------------------------------------------------- */

const EMAIL = "birgit.prokot@gmail.com";
const GITHUB = "https://github.com/Bellasabaja";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Cross-Platform",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase", "Firestore", "Node.js", "Rust", "WebAssembly"],
  },
  {
    title: "Tools & Weiteres",
    skills: ["Git / GitHub", "MCP-Server", "Java", "PHP", "Linux (Grundkenntnisse)"],
  },
];

const strengths = [
  {
    title: "Belastbarkeit & Resilienz",
    text: "Gelernt in 10 Jahren Pflege – Ruhe bewahren, auch wenn es hektisch wird.",
  },
  {
    title: "Strukturiert & eigenverantwortlich",
    text: "10 Jahre Selbstständigkeit: Projekte selbst organisieren und zu Ende bringen.",
  },
  {
    title: "Hohe Lernbereitschaft",
    text: "Vom Pflegeexamen zum Full-Stack: neue Technologien schnell erfassen und anwenden.",
  },
  {
    title: "Lösungsorientiert",
    text: "Probleme analysieren, priorisieren, lösen – im Code wie im echten Leben.",
  },
];

// Featured Case Studies
const featuredProjects = [
  {
    type: "Mobile App · Flutter · Google Play",
    title: "Pferdeflüster-App",
    role: "Alleinentwicklung · Flutter, Dart, Firebase",
    problem:
      "Eine fertig entwickelte und getestete Flutter-App produktionsreif machen und im Google Play Store veröffentlichen – vom Entwicklerkonto bis zur Einreichung zur Prüfung.",
    challenge:
      "Für neue persönliche Entwicklerkonten gelten seit 2023 strenge Auflagen: geschlossener Test mit mindestens 12 Testern über 14 Tage, dazu Code-Signierung, Datensicherheits-Erklärungen und ein vollständiges Store-Listing.",
    solution:
      "Kompletten Release-Prozess eigenständig umgesetzt: Google Play Developer-Konto eingerichtet, App-Inhalte und Datensicherheit deklariert, Store-Listing mit Assets erstellt, Gradle-Build und Code-Signierung konfiguriert (u. a. targetSdkVersion 34, Upload-Keystore), App Bundle gebaut, hochgeladen und zur Prüfung eingereicht.",
    learnings:
      "Der Weg von „Code fertig“ bis „App im Store“ ist ein eigenes Projekt: Compliance, Testrichtlinien, Signierung und Store-Präsentation gehören genauso zur App-Entwicklung wie der Code selbst.",
    github: GITHUB,
    screenshots: [
      "Screenshot 1 – folgt",
      "Screenshot 2 – folgt",
      "Screenshot 3 – folgt",
    ],
  },
  {
    type: "AI-Tooling · MCP-Server",
    title: "MCP-Server – Zitate-Sammlung",
    role: "Alleinentwicklung · MCP-Framework, JSON-Persistenz, AI-First-Workflow",
    problem:
      "Inspirierende Zitate sammeln, kategorisieren und gezielt oder zufällig wiederfinden – direkt im AI-Chat. Umgesetzt als MCP-Server, dessen Tools Claude als Werkzeuge nutzen kann.",
    challenge:
      "Eine robuste Tool-Schnittstelle bauen: case-insensitive Suche über Zitattext und drei Tag-Typen (Autor, Thema, Sprache), Batch-Import mehrerer Zitate, zuverlässige JSON-Persistenz und fehlertolerantes Verhalten bei ungültigen Eingaben.",
    solution:
      "Datenmodell mit eindeutiger ID, Text, Erstellungsdatum und Tags entworfen; Tools für Speichern, Batch-Import, Suche, gefiltertes Zufalls-Zitat und Löschen implementiert und über die MCP-Schnittstelle angebunden. Entwickelt nach dem AI-First-Ansatz und mit Claude als MCP-Client getestet.",
    learnings:
      "Wie MCP als Brücke zwischen KI-Assistenten und eigenen Daten funktioniert – vom Tool-Design über robuste Fehlerbehandlung bis zum Testen mit einem echten MCP-Client.",
    github: GITHUB,
    screenshots: [
      "Screenshot 1 – folgt",
      "Screenshot 2 – folgt",
      "Screenshot 3 – folgt",
    ],
  },
];

// Platzhalter – Inhalte folgen im nächsten Schritt
const projects = [
  {
    type: "Web App · Next.js",
    title: "Projekt 2 – Titel folgt",
    problem: "Kurzbeschreibung der Ausgangslage und des Problems.",
    solution: "Wie die App das Problem löst, wichtigste Features.",
    stack: "Next.js, TypeScript, Firestore",
    learnings: "Was ich dabei gelernt habe.",
  },
  {
    type: "Performance · Rust/WASM",
    title: "Projekt 4 – Titel folgt",
    problem: "Kurzbeschreibung der Ausgangslage und des Problems.",
    solution: "Wie die App das Problem löst, wichtigste Features.",
    stack: "Rust, WebAssembly, TypeScript",
    learnings: "Was ich dabei gelernt habe.",
  },
];

const timeline = [
  {
    date: "2025 – 2026",
    title: "AI Mobile App Developer",
    org: "AppAkademie · Abschluss Juni 2026",
    desc: "React, TypeScript, Next.js, Firebase, Flutter, Rust/WebAssembly, MCP-Server – praxisnahe App-Entwicklung mit KI-Fokus.",
    past: false,
  },
  {
    date: "2022 – 2025",
    title: "Reha & Umschulung IT",
    org: "EH-Akademie",
    desc: "Grundlagen der Webentwicklung: HTML, CSS, Java, PHP.",
    past: false,
  },
  {
    date: "2012 – 2022",
    title: "Examinierte Pflegefachkraft",
    org: "Abtei Münsterschwarzach",
    desc: "10 Jahre Verantwortung für Menschen – Teamarbeit, Sorgfalt und Belastbarkeit im Alltag.",
    past: true,
  },
  {
    date: "2006 – 2012",
    title: "Selbstständige Unternehmerin · Eventmanagement",
    org: "u. a. Buschfeuer Eventagentur GmbH (gegr. 2007)",
    desc: "Eigenes Unternehmen aufgebaut und geführt: Planung, Budget, Kundenkontakt, Verantwortung.",
    past: true,
  },
  {
    date: "2005 – 2012",
    title: "Landschaftspflegerin",
    org: "EU-Pilotprojekt Würzburg",
    desc: "Mitarbeit in einem EU-geförderten Pilotprojekt.",
    past: true,
  },
  {
    date: "1997 – 2001",
    title: "Examinierte Krankenschwester / PDL",
    org: "Haus der Pflege Kitzingen",
    desc: "Pflege und Pflegedienstleitung – früh Führungsverantwortung übernommen.",
    past: true,
  },
];

/* ---------------------------------------------------------------------------
   Seite
--------------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <p className="hero-kicker">Hallo, ich bin</p>
            <h1>Birgit Prokot</h1>
            <p className="hero-role">
              <strong>AI Mobile App Developer</strong> · Schwerpunkt
              Full-Stack-Webentwicklung
            </p>
            <p className="hero-pitch">
              Karrierewechslerin mit rund 25 Jahren Berufserfahrung in Pflege
              und eigener Unternehmung – jetzt App-Entwicklerin mit Projekten
              in React, TypeScript, Next.js, Firebase und Flutter/Dart.
              Schnelle Auffassungsgabe, strukturierte Arbeitsweise und hohe
              Motivation, mein Wissen in der Praxis einzusetzen.
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
        <section id="ueber-mich">
          <div className="container">
            <Reveal>
              <p className="section-label">Über mich</p>
              <h2>Zwei Karrieren. Eine Stärke: Verantwortung übernehmen.</h2>
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
                    Verantwortung für Menschen zu tragen. Als Unternehmerin
                    habe ich Projekte von der Idee bis zur Umsetzung selbst
                    gesteuert – Planung, Budget, Kunden, alles in einer Hand.
                  </p>
                  <p>
                    Diese Erfahrung bringe ich heute in die App-Entwicklung
                    ein: Über eine Umschulung in der IT (HTML, CSS, Java, PHP)
                    und die Weiterbildung zur{" "}
                    <strong>AI Mobile App Developerin</strong> an der
                    AppAkademie habe ich mir einen modernen Full-Stack
                    erarbeitet – von React und Next.js über Firebase bis
                    Flutter und Rust/WebAssembly.
                  </p>
                  <p>
                    Ich suche ein Team, in dem ich dieses Wissen praktisch
                    einsetzen und weiter wachsen kann – verlässlich,
                    strukturiert und mit echter Begeisterung für gute Software.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="fact-cards">
                  <div className="fact-card">
                    <div className="num">25+</div>
                    <div className="label">Jahre Berufserfahrung</div>
                  </div>
                  <div className="fact-card">
                    <div className="num">10</div>
                    <div className="label">Jahre Selbstständigkeit</div>
                  </div>
                  <div className="fact-card">
                    <div className="num">4</div>
                    <div className="label">
                      Jahre IT-Ausbildung &amp; Weiterbildung
                    </div>
                  </div>
                  <div className="fact-card">
                    <div className="num">100%</div>
                    <div className="label">Motivation für den Praxiseinsatz</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="container">
            <Reveal>
              <p className="section-label">Skills</p>
              <h2>Mein Tech-Stack</h2>
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <Reveal key={group.title}>
                  <div className="skill-group">
                    <h3>
                      <span className="dot" />
                      {group.title}
                    </h3>
                    <div className="tags">
                      {group.skills.map((s) => (
                        <span key={s} className="tag">
                          {s}
                        </span>
                      ))}
                    </div>
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

        {/* Projekte */}
        <section id="projekte">
          <div className="container">
            <Reveal>
              <p className="section-label">Projekte</p>
              <h2>Case Studies aus der Ausbildung</h2>
            </Reveal>
            {/* Featured Case Studies */}
            {featuredProjects.map((fp) => (
              <Reveal key={fp.title}>
                <article className="project-featured">
                  <div>
                    <span className="proj-type">{fp.type}</span>
                    <h3>{fp.title}</h3>
                    <p className="role">{fp.role}</p>
                    <dl className="case">
                      <dt>Problem &amp; Ziel</dt>
                      <dd>{fp.problem}</dd>
                      <dt>Herausforderung</dt>
                      <dd>{fp.challenge}</dd>
                      <dt>Lösung</dt>
                      <dd>{fp.solution}</dd>
                      <dt>Learnings</dt>
                      <dd>{fp.learnings}</dd>
                    </dl>
                    <div className="foot">
                      <a
                        href={fp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Code auf GitHub →
                      </a>
                    </div>
                  </div>
                  <div className="phone-row" aria-label="Screenshot-Platzhalter">
                    {fp.screenshots.map((label, i) => (
                      <div key={label} className={`phone${i === 1 ? " center" : ""}`}>
                        <div className="screen">{label}</div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}

            <div className="projects-grid">
              {projects.map((p) => (
                <Reveal key={p.title}>
                  <article className="project-card">
                    <span className="proj-type">{p.type}</span>
                    <h3>{p.title}</h3>
                    <dl className="case">
                      <dt>Problem</dt>
                      <dd>{p.problem}</dd>
                      <dt>Lösung</dt>
                      <dd>{p.solution}</dd>
                      <dt>Stack</dt>
                      <dd>{p.stack}</dd>
                      <dt>Learnings</dt>
                      <dd>{p.learnings}</dd>
                    </dl>
                    <div className="foot">
                      <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                        Code auf GitHub →
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Werdegang */}
        <section id="werdegang">
          <div className="container">
            <Reveal>
              <p className="section-label">Werdegang</p>
              <h2>Mein Weg</h2>
            </Reveal>
            <div className="timeline">
              {timeline.map((t) => (
                <Reveal key={t.date}>
                  <div className={`tl-item${t.past ? " past" : ""}`}>
                    <div className="tl-date">{t.date}</div>
                    <h3>{t.title}</h3>
                    <div className="org">{t.org}</div>
                    <p className="desc">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="contact">
          <div className="container">
            <Reveal>
              <p className="section-label">Kontakt</p>
              <h2>Lassen Sie uns sprechen</h2>
              <p>
                Ich freue mich über Nachrichten zu offenen Stellen,
                Praktika oder Projekten – ob React, Next.js, Flutter oder
                Firebase.
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
                </a>
              </div>
              <p className="contact-meta">
                {EMAIL} · Obervolkach, Bayern
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
        </div>
      </footer>
    </>
  );
}
