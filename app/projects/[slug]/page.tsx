import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mayur Chaudhari`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="px-5 pb-24 pt-32 md:px-16">
      <div className="wrap !px-0 max-w-[900px]">
        <Link href="/#work" className="font-mono text-xs tracking-wide text-fg-faint hover:text-accent">
          ← BACK TO WORK
        </Link>

        <h1 className="mt-7 font-display text-[clamp(2rem,6vw,3.4rem)] font-semibold">{project.title}</h1>
        <p className="mt-2.5 font-mono text-xs tracking-wide text-accent">{project.category}</p>

        <Section heading="PROBLEM">{project.problem}</Section>
        <Section heading="SOLUTION">{project.solution}</Section>

        <div className="mt-9">
          <h4 className="mb-2.5 font-mono text-xs tracking-[0.1em] text-fg-faint">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border border-line px-2.5 py-1.5 font-mono text-xs text-fg-dim">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-9">
          <h4 className="mb-2.5 font-mono text-xs tracking-[0.1em] text-fg-faint">ARCHITECTURE</h4>
          <pre className="whitespace-pre-wrap font-mono text-[0.85rem] leading-loose text-fg-dim">
            {project.architecture}
          </pre>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border-b border-fg-faint hover:border-accent hover:text-accent">
              SOURCE ON GITHUB ↗
            </a>
          ) : (
            <span className="text-fg-faint opacity-60">GITHUB LINK NOT SET</span>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border-b border-fg-faint hover:border-accent hover:text-accent">
              LIVE DEMO ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Section({ heading, children }: { heading: string; children: string }) {
  return (
    <div className="mt-9">
      <h4 className="mb-2.5 font-mono text-xs tracking-[0.1em] text-fg-faint">{heading}</h4>
      <p className="max-w-[640px] text-fg-dim">{children}</p>
    </div>
  );
}
