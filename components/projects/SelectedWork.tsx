import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import SkyLensVisual from "@/components/projects/SkyLensVisual";
import AtelierVisual, { AtelierFlow } from "@/components/projects/AtelierVisual";
import ResumeAnalyzerVisual from "@/components/projects/ResumeAnalyzerVisual";
import { PROJECTS } from "@/lib/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHeading kicker="SELECTED WORK" title="Things I've built." />

        {PROJECTS.map((project) => {
          if (project.slug === "ai-resume-analyzer") {
            return <ProjectCard key={project.slug} project={project} extra={<ResumeAnalyzerVisual />} />;
          }
          if (project.slug === "atelier") {
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                visual={<AtelierVisual />}
                flowDiagram={<AtelierFlow />}
              />
            );
          }
          if (project.slug === "skylens") {
            return <ProjectCard key={project.slug} project={project} visual={<SkyLensVisual />} />;
          }
          return <ProjectCard key={project.slug} project={project} />;
        })}
      </div>
    </section>
  );
}
