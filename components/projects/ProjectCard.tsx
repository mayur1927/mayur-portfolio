import Link from "next/link";
import type { ReactNode } from "react";
import type { ProjectData } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectData;
  visual?: ReactNode;
  flowDiagram?: ReactNode;
  extra?: ReactNode;
}

export default function ProjectCard({ project, visual, flowDiagram, extra }: ProjectCardProps) {
  return (
    <article
      id={`proj-${project.slug}`}
      data-skills={project.skillIds.join(",")}
      className="project-card border-t border-line py-[clamp(60px,10vw,120px)] last:border-b"
    >
      <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-fg-faint">{project.index}</p>
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <h3 className="project-title font-display text-[clamp(2.2rem,6vw,4.2rem)] font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LIVE ↗"
                className="inline-flex items-center gap-1.5 rounded-full border border-accent bg-accent/10 px-4 py-1.5 font-mono text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
              >
                LIVE DEMO ↗
              </a>
            ) : null}
          </div>
          <p className="mt-2.5 font-mono text-[0.72rem] tracking-wide text-fg-dim">{project.category}</p>
        </div>
      </div>

      {flowDiagram}

      <div className={visual ? "grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]" : ""}>
        <div>
          <p className="max-w-[460px] text-fg-dim">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border border-line px-2.5 py-1.5 font-mono text-xs text-fg-dim">
                {t}
              </span>
            ))}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            data-cursor="VIEW"
            className="group mt-7 inline-flex items-center gap-2 border-b border-fg-faint pb-1 font-mono text-[0.78rem] tracking-wide transition-colors hover:border-accent hover:text-accent"
          >
            VIEW CASE STUDY
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
        {visual && <div>{visual}</div>}
      </div>

      {extra && <div className="mt-9">{extra}</div>}
    </article>
  );
}
