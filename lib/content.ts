/* ---------------------------------------------------------------------------
   Zentrale Inhalte – hier alles pflegen.
   Diese Datei wird von der Startseite und den Projekt-Detailseiten genutzt.
--------------------------------------------------------------------------- */

export const EMAIL = "birgit.prokot@gmail.com";
export const GITHUB = "https://github.com/Bellasabaja";
export const SITE_URL = "https://birgit-prokot.de";

export const skillGroups = [
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
    skills: [
      "Git / GitHub",
      "MCP-Server",
      "Java",
      "PHP",
      "Linux (Grundkenntnisse)",
    ],
  },
  {
    title: "Sprachen",
    skills: ["Deutsch (Muttersprache)", "Englisch (B1)"],
  },
];

export const strengths = [
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

export type Screenshot = {
  src: string;
  /** Beschreibung für Screenreader – bitte immer aussagekräftig füllen. */
  alt: string;
};

export type Project = {
  /** Teil der URL: /projekte/<slug> */
  slug: string;
  type: string;
  title: string;
  /** Kurzfassung für die Übersichtskarte auf der Startseite */
  teaser: string;
  /** Technologien als Tags für die Übersichtskarte */
  stack: string[];
  role: string;
  problem: string;
  challenge: string;
  solution: string;
  result?: string;
  learnings: string;
  github: string;
  demo?: string;
  frame?: "phone" | "browser";
  /** zeigt die interaktive Game-of-Life-Demo */
  live?: boolean;
  screenshots: Screenshot[];
};

export const projects: Project[] = [
  {
    slug: "pferdefluester-app",
    type: "Mobile App · Flutter · Google Play",
    title: "Pferdeflüster-App",
    teaser:
      "Echtzeit-Chat-App für die Reiter-Community – inklusive komplettem Weg zur Veröffentlichung im Google Play Store.",
    stack: ["Flutter", "Dart", "Firebase", "Google Play"],
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
      {
        src: "/screenshots/pferd-splash.png",
        alt: "Startbildschirm der Pferdeflüster-App mit Pferdekopf-Logo und der Schaltfläche „Jetzt starten“.",
      },
      {
        src: "/screenshots/pferd-chat.png",
        alt: "Chat-Ansicht der App: Nachrichten mehrerer Nutzerinnen über eine gemeinsame Ausreit-Verabredung.",
      },
      {
        src: "/screenshots/pferd-login.png",
        alt: "Login-Bildschirm mit Eingabefeldern für E-Mail und Passwort sowie Link zur Registrierung.",
      },
    ],
  },
  {
    slug: "mcp-server-zitate",
    type: "AI-Tooling · MCP-Server",
    title: "MCP-Server – Zitate-Sammlung",
    teaser:
      "Ein MCP-Server, dessen Werkzeuge Claude direkt nutzen kann: Zitate speichern, suchen und zufällig ausgeben.",
    stack: ["MCP", "TypeScript", "JSON", "AI-First"],
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
      {
        src: "/screenshots/mcp-1.png",
        alt: "Chat-Fenster, in dem der MCP-Server ein Werkzeug zum Speichern eines Zitats aufruft.",
      },
      {
        src: "/screenshots/mcp-2.png",
        alt: "Suchergebnis des MCP-Servers: gefundene Zitate zu einem Themen-Tag.",
      },
      {
        src: "/screenshots/mcp-3.png",
        alt: "Ausgabe eines zufälligen Zitats durch den MCP-Server im Chat.",
      },
    ],
  },
  {
    slug: "cellular-automaton",
    type: "Simulation · Rust + WebAssembly · Flutter Web",
    title: "Cellular Automaton",
    teaser:
      "Simulation zellularer Automaten mit Rust-Kern als WebAssembly und Flutter-Web-Oberfläche – mit Live-Demo auf der Detailseite.",
    stack: ["Rust", "WebAssembly", "Flutter Web", "Riverpod"],
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
    live: true,
    screenshots: [
      {
        src: "/screenshots/cellular-1.png",
        alt: "Simulation nach dem Regelwerk Game of Life: grüne lebende Zellen auf dunklem Raster.",
      },
      {
        src: "/screenshots/cellular-2.png",
        alt: "Weiteres Regelwerk der Simulation mit anderem Zellmuster.",
      },
      {
        src: "/screenshots/cellular-3.png",
        alt: "Bedienoberfläche der Simulation mit Anzeige von Generation und Anzahl lebender Zellen.",
      },
    ],
  },
  {
    slug: "mobile-massage-agent-ready",
    type: "Web App · Next.js · Abschlussprojekt",
    title: "Mobile Massage – Agent-ready Webpräsenz",
    teaser:
      "Komplette Webpräsenz mit Blog, Shop, Kundenlogin, Newsletter und Admin-Dashboard – für 0 € laufende Kosten und auch für KI-Agenten nutzbar.",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind", "Cal.com"],
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
      {
        src: "/screenshots/agent-1.png",
        alt: "Startseite der Massage-Webpräsenz mit der Überschrift „Massage – zu dir nach Hause“ und Schaltflächen zur Terminbuchung.",
      },
      {
        src: "/screenshots/agent-2.png",
        alt: "Leistungsübersicht mit sechs Massage-Angeboten wie Hot Stone, Ayurveda und Faszien.",
      },
      {
        src: "/screenshots/agent-3.png",
        alt: "Admin-Dashboard mit Statistiken zu Blogartikeln und Newsletter-Abonnenten.",
      },
    ],
  },
  {
    slug: "renten-countdown",
    type: "PWA · React · Persönliches Projekt",
    title: "Dein Weg in die Freiheit – Renten-Countdown",
    teaser:
      "Progressive Web App als persönliches Geschenk: Countdown zum Renteneintritt, installierbar auf dem iPhone-Home-Bildschirm.",
    stack: ["React 19", "Tailwind CSS", "TypeScript", "PWA"],
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
      {
        src: "/screenshots/countdown-1.png",
        alt: "Countdown-Ansicht der App mit verbleibenden Monaten, Wochen und Tagen bis zum Renteneintritt.",
      },
      {
        src: "/screenshots/countdown-2.png",
        alt: "Tägliches Highlight der App mit einem motivierenden Spruch für Lehrerinnen.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const timeline = [
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
