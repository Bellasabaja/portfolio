# Portfolio – Birgit Prokot

Persönliche Portfolio-Website: [birgit-prokot.de](https://birgit-prokot.de)

Gebaut mit Next.js (App Router) und TypeScript, ohne UI-Framework – reines CSS mit Design-Tokens. Alle Seiten werden statisch vorgerendert, es gibt keine Cookies und kein Tracking. Barrierefrei nach WCAG 2.1 Stufe AA.

## Tech-Stack

| Bereich | Verwendet |
|---|---|
| Framework | Next.js 14 (App Router), React 18 |
| Sprache | TypeScript |
| Styling | CSS mit Custom Properties, mobile-first |
| Interaktiv | Canvas-Simulation (Game of Life) als Client Component |
| Hosting | Vercel (statisch, automatisches Deployment bei Push) |

## Lokal starten

```bash
npm install
npm run dev
```

→ http://localhost:3000

Auf dem Handy im selben WLAN testen:

```bash
npm run dev -- -H 0.0.0.0
```

Dann `http://<lokale-IP-des-Rechners>:3000` aufrufen.

Produktions-Build prüfen:

```bash
npm run build
```

## Projektstruktur

```
app/
├── page.tsx                  Startseite (Hero, Über mich, Skills,
│                             Projektübersicht, Werdegang, Kontakt)
├── projekte/[slug]/page.tsx  Detailseite je Projekt (aus lib/content.ts erzeugt)
├── barrierefreiheit/         Erklärung zur Barrierefreiheit
├── impressum/                Impressum (§ 5 DDG)
├── datenschutz/              Datenschutzerklärung (DSGVO)
├── layout.tsx                Metadaten, Sprache, Theme-Farbe
├── manifest.ts               Web-App-Manifest (PWA-Basis)
├── icon.svg                  Favicon
└── globals.css               Design-Tokens und alle Styles

components/
├── Nav.tsx                   Navigation mit aktiver Sektion, Burger, Skip-Link
├── Reveal.tsx                Dezente Einblend-Animation beim Scrollen
├── ProjectMedia.tsx          Screenshots im Smartphone-/Browser-Rahmen
└── GameOfLife.tsx            Interaktive Canvas-Simulation

lib/
└── content.ts                ► Alle Inhalte zentral (Projekte, Skills, Werdegang)

public/
├── screenshots/              Projekt-Screenshots
├── cv/                       Lebenslauf DE + EN als PDF
└── icons/                    App-Icons für das Manifest
```

## Inhalte pflegen

Sämtliche Texte und Daten liegen in **`lib/content.ts`** – die Seiten lesen von dort:

- `projects` – die Case Studies. Übersichtskarte und Detailseite entstehen automatisch.
- `timeline` – Werdegang
- `skillGroups`, `strengths` – Skills und Stärken
- `EMAIL`, `GITHUB`, `SITE_URL` – Kontaktdaten

### Neues Projekt hinzufügen

Einen Eintrag im Array `projects` ergänzen:

```ts
{
  slug: "mein-projekt",          // ergibt /projekte/mein-projekt
  type: "Web App · Next.js",     // Kategorie über dem Titel
  title: "Mein Projekt",
  teaser: "Ein bis zwei Sätze für die Übersichtskarte.",
  stack: ["Next.js", "Firebase"],
  role: "Alleinentwicklung · …",
  problem: "…",
  challenge: "…",
  solution: "…",
  result: "…",                   // optional
  learnings: "…",
  github: `${GITHUB}/repo-name`,
  demo: "https://…",             // optional, ergibt einen Live-Demo-Button
  frame: "browser",              // "browser" (quer) oder "phone" (hoch, Standard)
  screenshots: [
    { src: "/screenshots/bild.png", alt: "Beschreibung für Screenreader" },
  ],
}
```

Screenshots nach `public/screenshots/` legen – Dateinamen **klein schreiben**, der Server unterscheidet Groß-/Kleinschreibung.

Der Alt-Text ist Pflicht: Er beschreibt, was auf dem Bild zu sehen ist, damit Screenreader ihn vorlesen können.

## Design

Farben und Abstände sind Custom Properties am Anfang von `app/globals.css`. Für ein anderes Farbschema reicht es, `--accent` zu ändern.

| Rolle | Wert | Kontrast auf Hintergrund |
|---|---|---|
| Hintergrund | `#0B1120` | – |
| Flächen/Karten | `#16213B` | – |
| Text | `#E8EEF7` | 16,1 : 1 |
| Text gedämpft | `#B2C0D4` | 10,2 : 1 |
| Text dezent | `#93A3BA` | 7,3 : 1 |
| **Akzent (Teal)** | `#2DD4BF` | 10,1 : 1 |

WCAG 2.1 AA verlangt mindestens 4,5 : 1 für Fließtext – alle Werte liegen darüber.

## Barrierefreiheit

Umgesetzt und unter `/barrierefreiheit` dokumentiert:

- Sprunglink „Zum Inhalt springen", sichtbarer Fokus auf allen Bedienelementen
- vollständige Tastaturbedienung, Menü schließt mit Escape
- semantisches HTML: Landmarks, Überschriften-Hierarchie, echte Listen
- Alternativtexte für alle Bilder
- `prefers-reduced-motion` wird respektiert (Animationen aus, Simulation pausiert)
- nutzbar bei 200 % Zoom

Beim Ändern von Inhalten bitte darauf achten: Alt-Texte füllen, Überschriften nicht überspringen, Kontraste beibehalten.

## Deployment

Das Repository ist mit Vercel verbunden – jeder Push auf `main` deployt automatisch:

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Die Domain `birgit-prokot.de` ist in den Vercel-Projekteinstellungen unter *Domains* verbunden; das SSL-Zertifikat wird automatisch ausgestellt und verlängert.

## Rechtliches

Impressum, Datenschutzerklärung und Barrierefreiheitserklärung liegen unter `/impressum`, `/datenschutz` und `/barrierefreiheit` und sind im Footer verlinkt. Die Seite setzt keine Cookies und bindet keine externen Dienste ein; verarbeitet werden lediglich die Server-Logs des Hosters.
