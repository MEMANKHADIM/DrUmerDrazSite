"use client";

import { useState } from "react";
import FilterChips from "@/components/common/FilterChips";
import { RESEARCH, RESEARCH_CATEGORIES } from "@/data/research";
import ResearchCard from "./ResearchCard";

const PAPERS = "Published Papers";

export default function ResearchExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(RESEARCH_CATEGORIES[0]);

  const q = query.toLowerCase();
  const projects =
    category === PAPERS
      ? []
      : RESEARCH.filter(
          (p) =>
            (category === "All Research" ||
              category === "Research Projects" ||
              p.areas.includes(category)) &&
            [p.title, p.description, ...p.keywords].join(" ").toLowerCase().includes(q),
        );

  return (
    <>
      <label htmlFor="rq">Search by title or keyword</label>
      <input id="rq" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <FilterChips options={RESEARCH_CATEGORIES} selected={category} onSelect={setCategory} />
      {projects.length > 0 ? (
        <div className="cards">
          {projects.map((project) => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </div>
      ) : category === PAPERS ? (
        <div className="empty">
          <h3>No published papers added yet</h3>
          <p>
            Verified publications (title, journal, DOI) will appear here once they are added to the
            data file.
          </p>
        </div>
      ) : (
        <div className="empty">
          <h3>No research matches</h3>
          <p>Clear the search or choose another category.</p>
        </div>
      )}
    </>
  );
}
