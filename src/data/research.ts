export type ResearchProject = {
  slug: string;
  title: string;
  years: string;
  institution: string;
  areas: string[];
  keywords: string[];
  description: string;
  highlights: string[];
};

export const RESEARCH_CATEGORIES = [
  "All Research",
  "Published Papers",
  "Solid Oxide Cells",
  "CO2 Electrolysis",
  "Electrode Materials",
  "Stability and Degradation",
  "Research Projects",
];

export const RESEARCH: ResearchProject[] = [
  {
    slug: "cu-perovskite-electrodes",
    title: "Copper-Based Perovskite Electrodes",
    years: "2022–2025",
    institution: "University of Rome Tor Vergata",
    areas: ["Electrode Materials", "Solid Oxide Cells", "CO2 Electrolysis"],
    keywords: ["perovskite", "copper", "reversible solid oxide cell", "CO2 electrolysis"],
    description:
      "Low-cost, non-critical, multifunctional electrodes for CO2 electrolysis and reversible solid oxide cells, built from copper-based perovskites.",
    highlights: [
      "Fabricated reversible solid oxide cell devices with simplified laboratory processes.",
      "Targeted roughly fivefold lower material cost than selected nickel/cobalt-based alternatives.",
      "Showed more than 150 hours of stability under the specified redox and carbon-rich conditions.",
    ],
  },
  {
    slug: "interface-compatibility",
    title: "Electrode–Electrolyte Compatibility and Protective Layers",
    years: "2022–2025",
    institution: "University of Rome Tor Vergata",
    areas: ["Stability and Degradation", "Solid Oxide Cells"],
    keywords: ["interfaces", "fluorite", "perovskite", "degradation", "ohmic losses"],
    description:
      "How electrodes and electrolytes interact across fluorite- and perovskite-based interfaces, and how protective layers reduce degradation without adding ohmic loss.",
    highlights: [
      "Compared compatibility across fluorite-based and perovskite-based interfaces.",
      "Investigated protective-layer strategies against interfacial degradation.",
    ],
  },
  {
    slug: "ysz-gdc-cnr",
    title: "YSZ Electrolyte Pellets and GDC Interlayers",
    years: "2024–2025",
    institution: "CNR, Italy",
    areas: ["Stability and Degradation", "Solid Oxide Cells"],
    keywords: ["YSZ", "GDC", "interlayer", "electrolyte"],
    description:
      "Design and evaluation of YSZ electrolyte pellets, comparing lab-made and external pellets and studying GDC interlayers.",
    highlights: [
      "Compared laboratory-fabricated and externally produced pellets.",
      "Recommended material and processing improvements.",
    ],
  },
  {
    slug: "prometh2eus",
    title: "PROMETH2eus: Seawater Electrolysis Coupled to CO2 Hydrogenation",
    years: "2025–Present",
    institution: "University of Genoa",
    areas: ["Solid Oxide Cells", "CO2 Electrolysis"],
    keywords: ["seawater", "photovoltaic", "e-methanol", "e-methane", "catalyst"],
    description:
      "Solid oxide electrolysis powered by intermittent photovoltaic energy, coupled with flexible CO2 hydrogenation reactors for e-methanol and e-methane.",
    highlights: [
      "Seawater electrolysis with solid oxide technology.",
      "Flexible reactor design and coupling with hydrogen production.",
      "Promoter-based catalyst design for oxidizing environments.",
    ],
  },
];

export function getResearchProject(slug: string) {
  return RESEARCH.find((project) => project.slug === slug);
}
