import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://birgit-prokot.de"),
  title: "Birgit Prokot | AI Mobile App Developer",
  description:
    "Portfolio von Birgit Prokot – AI Mobile App Developer mit Schwerpunkt Full-Stack-Webentwicklung. React, TypeScript, Next.js, Firebase, Flutter/Dart.",
  keywords: [
    "Birgit Prokot",
    "AI Mobile App Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Firebase",
    "Portfolio",
  ],
  openGraph: {
    title: "Birgit Prokot | AI Mobile App Developer",
    description:
      "Karrierewechslerin mit 25 Jahren Berufserfahrung – jetzt App-Entwicklerin mit React, TypeScript, Next.js, Firebase und Flutter.",
    url: "https://birgit-prokot.de",
    siteName: "Birgit Prokot – Portfolio",
    locale: "de_DE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1120",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
