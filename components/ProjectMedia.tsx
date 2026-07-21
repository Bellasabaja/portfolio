import GameOfLife from "@/components/GameOfLife";
import type { Project } from "@/lib/content";

/** Screenshots eines Projekts – im Smartphone- oder Browser-Rahmen. */
export default function ProjectMedia({ project }: { project: Project }) {
  const { frame, live, screenshots } = project;

  if (frame === "browser") {
    return (
      <div className="browser-col">
        {live && (
          <div>
            <GameOfLife />
            <p className="gol-hint">
              Live-Demo: Game of Life im Browser – klicken Sie ins Raster, um
              eigene Zellen zu setzen.
            </p>
          </div>
        )}
        {screenshots.map((shot) => (
          <figure key={shot.src} className="browser">
            <div className="bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="bscreen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </div>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="phone-row">
      {screenshots.map((shot, i) => (
        <figure key={shot.src} className={`phone${i === 1 ? " center" : ""}`}>
          <div className="screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot.src} alt={shot.alt} loading="lazy" />
          </div>
        </figure>
      ))}
    </div>
  );
}
