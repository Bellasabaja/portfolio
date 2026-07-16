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
  {
    title: "Sprachen",
    skills: ["Deutsch (Muttersprache)", "Englisch (B1)"],
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
type FeaturedProject = {
  type: string;
  title: string;
  role: string;
  problem: string;
  challenge: string;
  solution: string;
  result?: string; // optional – nur anzeigen, wenn vorhanden
  learnings: string;
  github: string;
  demo?: string; // optional – Live-Demo-Button
  frame?: "phone" | "browser"; // Rahmen für Screenshots (Standard: phone)
  screenshots: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    type: "Mobile App · Flutter · Google Play",
    title: "Pferdeflüster-App",
    role: "Alleinentwicklung · Flutter, Dart, Firebase",
    problem:
      "Eine Echtzeit-Chat-App für die Reiter-Community, gebaut mit Flutter und Firebase – und der komplette Weg zur Veröffentlichung im Google Play Store: vom Entwicklerkonto bis zur Einreichung zur Prüfung.",
    challenge:
      "Für neue persönliche Entwicklerkonten gelten seit 2023 strenge Auflagen: geschlossener Test mit mindestens 12 Testern über 14 Tage, dazu Code-Signierung, Datensicherheits-Erklärungen und ein vollständiges Store-Listing.",
    solution:
      "Kompletten Release-Prozess eigenständig umgesetzt: Google Play Developer-Konto eingerichtet, App-Inhalte und Datensicherheit deklariert, Store-Listing mit Assets erstellt, Gradle-Build und Code-Signierung konfiguriert (u. a. targetSdkVersion 34, Upload-Keystore), App Bundle gebaut, hochgeladen und zur Prüfung eingereicht.",
    learnings:
      "Der Weg von „Code fertig“ bis „App im Store“ ist ein eigenes Projekt: Compliance, Testrichtlinien, Signierung und Store-Präsentation gehören genauso zur App-Entwicklung wie der Code selbst.",
    github: `${GITHUB}/pferdefluester_app`,
    screenshots: [
      "/screenshots/pferd-splash.png",
      "/screenshots/pferd-chat.png",
      "/screenshots/pferd-login.png",
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
    github: `${GITHUB}/MCP-Server`,
    frame: "browser",
    screenshots: [
      "/screenshots/mcp-1.png",
      "/screenshots/mcp-2.png",
      "/screenshots/mcp-3.png",
    ],
  },
  {
    type: "Simulation · Rust + WebAssembly · Flutter Web",
    title: "Cellular Automaton",
    role: "Alleinentwicklung · Rust (wasm-bindgen, wasm-pack), Flutter Web, Riverpod, serde",
    problem:
      "Ein robuster Proof of Concept nach professionellen Standards (2000+ Zeilen Code): eine interaktive Browser-Simulation zellularer Automaten – als langlebige, modulare Software-Basis statt einfacher Bastelarbeit.",
    challenge:
      "Zwei Welten verbinden: ein performanter Simulationskern in Rust, der als WebAssembly-Modul im Browser läuft, angebunden an eine Flutter-Web-Oberfläche – inklusive Performance-Überlegungen bei der Übergabe größerer Datenmengen zwischen Rust und Dart/JavaScript.",
    solution:
      "Simulationskern „ca_core“ in Rust mit Strategy-Pattern für vier zur Laufzeit umschaltbare Regelwerke (Game of Life, High Life, Maze, Seeds), via wasm-pack zu WebAssembly kompiliert. Flutter-UI mit Riverpod-State-Management: Play/Step/Reset, einstellbare Geschwindigkeit, Live-Anzeige von Generation und lebenden Zellen, Export als CSV, JSON und PNG.",
    result:
      "Alle vier Regelwerke getestet und stabil im Browser lauffähig – modular erweiterbar um weitere Regelwerke und Exportformate.",
    learnings:
      "Integration von Rust und Flutter über WebAssembly, Architektur mit austauschbaren Regelwerken (Strategy-Pattern) und der Umgang mit Performance an der Sprachgrenze zwischen Rust und Dart/JavaScript.",
    github: `${GITHUB}/cellular-automaton-rust-flutter`,
    frame: "browser",
    screenshots: [
      "/screenshots/cellular-1.png",
      "/screenshots/cellular-2.png",
      "/screenshots/cellular-3.png",
    ],
  },
  {
    type: "Web App · Next.js · Abschlussprojekt",
    title: "Mobile Massage – Agent-ready Webpräsenz",
    role: "Alleinentwicklung · Next.js 16, TypeScript, Tailwind CSS v4, Firebase (Firestore, Auth, Storage), Brevo API, Cal.com, Vercel",
    problem:
      "Eine komplette Webpräsenz mit dem Funktionsumfang einer kleinen Webagentur – allein umgesetzt: Landing Page, Blog/CMS, kleiner Shop, Kundenlogin, Newsletter (CRM) und Admin-Dashboard. Entwickelt für die geplante mobile Massage-Praxis meines Sohnes.",
    challenge:
      "Strikte Budget- und Zeitvorgaben: maximal 2 €/Monat, ausschließlich Free-Tier-Dienste, keine laufenden Serverkosten. Zusätzlich als Agent-ready Website (GEO/AEO) ausgelegt – auffindbar und buchbar nicht nur für Menschen, sondern auch für KI-Agenten.",
    solution:
      "AI-First entwickelt: öffentlicher Bereich mit Terminbuchung über Cal.com (inkl. MCP-Schnittstelle für KI-Agenten), Blog mit dynamischem News-Feed aus Firestore, Shop mit Warenkorb, Kundenlogin/-registrierung und Newsletter-Anmeldung. Geschütztes Admin-Dashboard mit Statistiken, Blog-Verwaltung inkl. Bild-Upload und Newsletter-Versand über die Brevo API. Für KI-Auffindbarkeit: strukturierte Daten (schema.org LocalBusiness als JSON-LD) sowie llms.txt und ai.txt.",
    result:
      "Technisch fertig aufgebaut, Budgetziel erreicht (0 € laufende Kosten durch Free-Tier). Live-Gang geplant zum Start des Massage-Angebots nach der Physiotherapie-Ausbildung meines Sohnes (voraussichtlich 2027) – dann mit echten Daten in einem eigenen, nicht-öffentlichen Setup.",
    learnings:
      "Ein komplettes Produkt allein liefern – von Architektur über Auth und CRM bis zum Admin-Bereich – und Websites für die nächste Generation von Besuchern bauen: KI-Agenten, die Inhalte finden und Termine buchen können.",
    github: `${GITHUB}/Agent-ready-Website`,
    frame: "browser",
    screenshots: [
      "/screenshots/agent-1.png",
      "/screenshots/agent-2.png",
      "/screenshots/agent-3.png",
    ],
  },
  {
    type: "PWA · React · Persönliches Projekt",
    title: "Dein Weg in die Freiheit – Renten-Countdown",
    role: "Konzeption & Entwicklung im AI-First-Workflow (mit Manus) · React 19, Tailwind CSS 4, TypeScript, PWA/Service Worker",
    problem:
      "Ein persönliches Geschenk für eine Lehrerin in Bayern: ein eleganter Countdown zum Renteneintritt (03.08.2026, Ferienbeginn) – als App direkt auf dem iPhone-Home-Bildschirm, ohne Umweg über den App Store.",
    challenge:
      "Eine Web-App, die sich wie eine native App anfühlt: Installation über Safari („Zum Home-Bildschirm“), Offline-Funktionalität per Service Worker, responsive für alle iPhone-Größen – und ein Design, das Vorfreude transportiert statt Technik.",
    solution:
      "Progressive Web App mit React 19 und Tailwind CSS 4: Countdown-Logik in Monaten, Wochen und Tagen; in den letzten 4 Wochen täglich einer von 28 humorvoll-ermutigenden Lehrer-Sprüchen. Elegant-verspieltes Design mit Pastellpalette (Roségold, Lavendel, Minzgrün), Playfair Display/Poppins und Wellen-Animationen. PWA-Manifest und Service Worker für Offline-Nutzung – ohne externe Datenübertragungen.",
    result:
      "Live auf Vercel und im Einsatz – direkt vom iPhone-Home-Bildschirm startbar.",
    learnings:
      "PWA-Grundlagen (Manifest, Service Worker, iOS-Besonderheiten), emotionales UI-Design – und wie man im AI-First-Workflow mit einem KI-Agenten entwickelt: Ergebnisse prüfen, kuratieren und für den Praxiseinsatz polieren.",
    github: `${GITHUB}/Lehrer-Renten-Countdown`,
    demo: "https://lehrerin-renten-countdown.vercel.app",
    screenshots: [
      "/screenshots/countdown-1.png",
      "/screenshots/countdown-2.png",
    ],
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
                      {fp.result && (
                        <>
                          <dt>Ergebnis</dt>
                          <dd>{fp.result}</dd>
                        </>
                      )}
                      <dt>Learnings</dt>
                      <dd>{fp.learnings}</dd>
                    </dl>
                    <div className="foot">
                      {fp.demo && (
                        <a
                          href={fp.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          Live-Demo →
                        </a>
                      )}
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
                  {fp.frame === "browser" ? (
                    <div className="browser-col" aria-label="App-Screenshots">
                      {fp.screenshots.map((shot, i) => (
                        <div key={shot} className="browser">
                          <div className="bar">
                            <span />
                            <span />
                            <span />
                          </div>
                          <div className="bscreen">
                            {shot.startsWith("/") ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={shot} alt={`${fp.title} Screenshot ${i + 1}`} />
                            ) : (
                              shot
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="phone-row" aria-label="App-Screenshots">
                      {fp.screenshots.map((shot, i) => (
                        <div key={shot} className={`phone${i === 1 ? " center" : ""}`}>
                          <div className="screen">
                            {shot.startsWith("/") ? (
                              // Bildpfad (Datei in public/ ablegen, z. B. "/screenshots/app1.png")
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={shot} alt={`${fp.title} Screenshot ${i + 1}`} />
                            ) : (
                              shot
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}

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
            <a href="/impressum">Impressum</a> ·{" "}
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </footer>
    </>
  );
}
