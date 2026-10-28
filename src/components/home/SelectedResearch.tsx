import Link from "next/link";
import ResearchCard from "@/components/research/ResearchCard";
import { RESEARCH } from "@/data/research";

export default function SelectedResearch() {
  return (
    <section className="alt">
      <div className="w">
        <span className="lab">Research projects</span>
        <h2>Selected Research</h2>
        <p className="lead">
          No verified publication list has been added yet, so these are documented research
          projects, not published papers.
        </p>
        <div className="cards" style={{ margin: "32px 0" }}>
          {RESEARCH.slice(0, 3).map((project) => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </div>
        <Link className="btn p" href="/research">
          View All Research
        </Link>
      </div>
    </section>
  );
}
