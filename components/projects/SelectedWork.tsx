import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import SkyLensVisual from "@/components/projects/SkyLensVisual";
import AtelierVisual, { AtelierFlow } from "@/components/projects/AtelierVisual";
import ResumeAnalyzerVisual from "@/components/projects/ResumeAnalyzerVisual";
import { getProjectBySlug } from "@/lib/projects";

export default function SelectedWork() {
  const skylens = getProjectBySlug("skylens")!;
  const atelier = getProjectBySlug("atelier")!;
  const resumeAnalyzer = getProjectBySlug("ai-resume-analyzer")!;

  return (
    <section id="work" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <SectionHeading kicker="SELECTED WORK" title="Things I've built." />

        <ProjectCard project={skylens} visual={<SkyLensVisual />} />
        <ProjectCard project={atelier} visual={<AtelierVisual />} flowDiagram={<AtelierFlow />} />
        <ProjectCard project={resumeAnalyzer} extra={<ResumeAnalyzerVisual />} />
      </div>
    </section>
  );
}
