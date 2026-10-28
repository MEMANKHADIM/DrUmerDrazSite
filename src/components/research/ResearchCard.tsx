import Link from "next/link";
import type { ResearchProject } from "@/data/research";

export default function ResearchCard({ project }: { project: ResearchProject }) {
  return (
    <Link className="card" href={`/research/${project.slug}`}>
      <div className="cv" aria-hidden="true" />
      <span className="tag">Research Project</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <small>
        {project.years} · {project.institution}
      </small>
    </Link>
  );
}
