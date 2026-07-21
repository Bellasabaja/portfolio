import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Nav from "@/components/Nav";
import ProjectMedia from "@/components/ProjectMedia";
import { getProject, projects } from "@/lib/content";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Projekt nicht gefunden" };

  return {
    title: `${project.title} | Birgit Prokot`,
    description: project.teaser,
    alternates: { canonical: `/projekte/${project.slug}` },
    openGraph: {
      title: `${project.title} – Case Study`,
      description: project.teaser,
      url: `/projekte/${project.slug}`,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="inhalt">
        <article className="project-page">
          <div className="container">
            <nav aria-label="Brotkrumen" className="crumbs">
              <Link href="/">Start</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/#projekte">Projekte</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{project.title}</span>
            </nav>

            <p className="section-label">{project.type}</p>
            <h1>{project.title}</h1>
            <p className="project-role">{project.role}</p>

            <div className="project-tags">
              {project.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live-Demo ansehen
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Code auf GitHub
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </div>

            <div className="project-body">
              <div className="project-text">
                <h2>Problem &amp; Ziel</h2>
                <p>{project.problem}</p>

                <h2>Herausforderung</h2>
                <p>{project.challenge}</p>

                <h2>Lösung</h2>
                <p>{project.solution}</p>

                {project.result && (
                  <>
                    <h2>Ergebnis</h2>
                    <p>{project.result}</p>
                  </>
                )}

                <h2>Learnings</h2>
                <p>{project.learnings}</p>
              </div>

              <div className="project-visuals">
                <h2 className="sr-only">Einblicke in das Projekt</h2>
                <ProjectMedia project={project} />
              </div>
            </div>

            <nav aria-label="Weitere Projekte" className="project-nav">
              <Link href="/#projekte" className="btn btn-secondary">
                ← Alle Projekte
              </Link>
              <Link
                href={`/projekte/${next.slug}`}
                className="btn btn-secondary"
              >
                Nächstes Projekt: {next.title} →
              </Link>
            </nav>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} Birgit Prokot
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
