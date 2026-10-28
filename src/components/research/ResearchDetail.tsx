import Link from "next/link";
import { RESEARCH, type ResearchProject } from "@/data/research";

export default function ResearchDetail({ project }: { project: ResearchProject }) {
  const related = RESEARCH.filter((p) => p !== project).slice(0, 2);

  return (
    <section>
      <div className="w art">
        <Link href="/research">← Back to research</Link>
        <br />
        <br />
        <span className="tag">Research Project</span>
        <h1>{project.title}</h1>
        <p>
          <b>{project.institution}</b> · {project.years}
        </p>
        <p>{project.description}</p>
        <h2>What this work covers</h2>
        <ul>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          {project.areas.map((area) => (
            <span className="tag" key={area}>
              {area}
            </span>
          ))}
        </p>
        <div className="msg">
          Publication data (journal, DOI, authors) has not been added yet. This is a project
          description, not a published paper.
        </div>
        <h2 style={{ marginTop: 40 }}>Related research</h2>
        <div>
          {related.map((p) => (
            <p key={p.slug}>
              <Link href={`/research/${p.slug}`}>{p.title}</Link>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
