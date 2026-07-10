# Portfolio – Birgit Prokot

Portfolio-Website als Next.js-Projekt (App Router, TypeScript, reines CSS – keine weiteren Abhängigkeiten). Vollständig statisch gerendert, mobile-first, Dark Theme mit Teal-Akzent.

## Lokal starten

```bash
npm install
npm run dev
```

Dann http://localhost:3000 öffnen.

## Auf Vercel veröffentlichen

1. Neues Repository auf GitHub anlegen (z. B. `portfolio`), dann in diesem Ordner:

   ```bash
   git init
   git add .
   git commit -m "Portfolio-Website"
   git remote add origin https://github.com/Bellasabaja/portfolio.git
   git push -u origin main
   ```

2. Auf https://vercel.com mit GitHub anmelden.
3. "Add New → Project" → das Repository `portfolio` importieren.
4. Alle Einstellungen unverändert lassen (Vercel erkennt Next.js automatisch) → **Deploy**.

Fertig – die Seite ist unter `portfolio-….vercel.app` erreichbar. Jeder Git-Push deployt automatisch neu. Eine eigene Domain kannst du später unter Project → Settings → Domains verbinden.

## Inhalte pflegen

Alle Texte und Daten liegen zentral in `app/page.tsx`:

- `projects` – die 4 Projekt-Platzhalter (Problem / Lösung / Stack / Learnings) durch echte Case Studies ersetzen; pro Projekt kann der GitHub-Link auf das jeweilige Repo zeigen.
- `timeline` – Werdegang.
- `skillGroups` / `strengths` – Skills und Stärken.
- Farben/Design: CSS-Variablen oben in `app/globals.css` (`--accent` für die Akzentfarbe).

## Farbpalette

| Rolle | Wert |
|---|---|
| Hintergrund | `#0B1120` |
| Flächen/Karten | `#16213B` |
| Text | `#E2E8F0` |
| Text gedämpft | `#94A3B8` |
| **Akzent (Teal)** | `#2DD4BF` |
| Akzent dunkel | `#14B8A6` |
