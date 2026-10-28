const EXPERIENCE = [
  {
    role: "Postdoctoral Research Fellow — Industrial Technological Chemistry",
    organization: "University of Genoa, Italy",
    period: "Feb 2025 – Present",
    highlights: [
      "Seawater electrolysis using solid oxide electrolysis technology and intermittent photovoltaic energy (PROMETH2eus project).",
      "Flexible reactor design for CO2 hydrogenation into e-methanol and e-methane.",
      "Coupling hydrogen-production systems with CO2 hydrogenation reactors.",
      "Catalyst design using promoters to support performance in oxidizing environments.",
    ],
  },
  {
    role: "Doctoral Researcher — Electrochemistry and Materials Science",
    organization: "University of Rome Tor Vergata, Italy",
    period: "Feb 2022 – Mar 2025",
    highlights: [
      "Developed low-cost, multifunctional solid oxide cell electrodes, targeting roughly fivefold lower material costs than selected nickel/cobalt-based state-of-the-art alternatives (a research target, not a commercial guarantee).",
      "Investigated electrode–electrolyte compatibility across fluorite-based and perovskite-based interfaces.",
      "Fabricated reversible solid oxide cell devices using simplified laboratory processes.",
      "Demonstrated more than 150 hours of stability under the specified redox and carbon-rich test conditions.",
      "Investigated protective-layer strategies to mitigate interfacial degradation while minimizing ohmic losses.",
    ],
  },
  {
    role: "Doctoral Researcher / Research Collaboration",
    organization: "CNR, Italy",
    period: "Jul 2024 – Jan 2025",
    highlights: [
      "Designed and evaluated YSZ electrolyte pellets.",
      "Compared laboratory-fabricated and externally produced pellets.",
      "Investigated GDC interlayers and electrochemical behavior.",
      "Recommended material and processing improvements for stability and performance.",
    ],
  },
  {
    role: "Visiting Researcher",
    organization: "ENEA, Italy",
    period: "Jul 2023",
    highlights: [],
  },
  {
    role: "Laboratory Specialist — SESE",
    organization: "Government of Punjab, Pakistan",
    period: "Mar 2018 – Mar 2022",
    highlights: [
      "Designed and executed laboratory experiments; developed low-cost setups and lab-scale prototypes.",
      "Established standard operating procedures and laboratory protocols.",
      "Prepared laboratory manuals and student training materials.",
      "Managed equipment maintenance, safety and experiment scheduling; supervised students.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="alt">
      <div className="w">
        <span className="lab">Experience</span>
        <h2>Research, Experimentation and Impact</h2>
        {EXPERIENCE.map((job, i) => (
          <details key={job.period} open={i === 0}>
            <summary>
              <span className="d">{job.period}</span>
              <span>
                <h3>{job.role}</h3>
                {job.organization}
              </span>
            </summary>
            {job.highlights.length > 0 && (
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
