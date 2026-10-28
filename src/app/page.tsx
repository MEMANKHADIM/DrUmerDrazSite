import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import ResearchFocus from "@/components/home/ResearchFocus";
import SelectedResearch from "@/components/home/SelectedResearch";
import Values from "@/components/home/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchFocus />
      <About />
      <Experience />
      <Education />
      <SelectedResearch />
      <Values />
      <Contact />
    </>
  );
}
