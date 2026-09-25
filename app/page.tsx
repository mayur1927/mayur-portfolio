import Hero from "@/components/hero/Hero";
import Intro from "@/components/about/Intro";
import SelectedWork from "@/components/projects/SelectedWork";
import Toolkit from "@/components/toolkit/Toolkit";
import GitHubActivity from "@/components/github/GitHubActivity";
import EducationTimeline from "@/components/education/EducationTimeline";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <Hero />
      <Intro />
      <SelectedWork />
      <Toolkit />
      <GitHubActivity />
      <EducationTimeline />
      <About />
      <Contact />
    </>
  );
}
