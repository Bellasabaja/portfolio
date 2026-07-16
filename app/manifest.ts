import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Birgit Prokot – AI Mobile App Developer",
    short_name: "B. Prokot",
    description:
      "Portfolio von Birgit Prokot – AI Mobile App Developer mit Schwerpunkt Full-Stack-Webentwicklung.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0b1120",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
