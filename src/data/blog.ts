export const BLOG_CATEGORIES = [
  "Research Insights",
  "Electrochemistry Explained",
  "Clean Energy",
  "PhD and Scholarship Journey",
  "Academic Life in Italy",
  "Laboratory Methods",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "from-pakistan-to-italy",
    title: "From Pakistan to Italy: My Journey into Materials Science Research",
    category: "PhD and Scholarship Journey",
    excerpt: "The path from physics studies in Pakistan to doctoral research in Italy.",
  },
  {
    slug: "understanding-soec",
    title: "Understanding Solid Oxide Electrolysis Cells",
    category: "Electrochemistry Explained",
    excerpt: "How high-temperature electrolysis cells produce hydrogen.",
  },
  {
    slug: "electrode-electrolyte-compatibility",
    title: "Why Electrode–Electrolyte Compatibility Matters",
    category: "Research Insights",
    excerpt: "What happens at the interface, and why it decides cell lifetime.",
  },
  {
    slug: "copper-perovskites",
    title: "Copper-Based Perovskites as Alternatives to Critical Materials",
    category: "Research Insights",
    excerpt: "Exploring lower-cost electrode materials.",
  },
  {
    slug: "investigating-degradation",
    title: "How Researchers Investigate Degradation in Solid Oxide Cells",
    category: "Laboratory Methods",
    excerpt: "Methods used to find out why cells lose performance.",
  },
  {
    slug: "co2-hydrogenation",
    title: "CO2 Hydrogenation and the Potential of E-Methanol and E-Methane",
    category: "Clean Energy",
    excerpt: "Turning captured CO2 and green hydrogen into fuels.",
  },
  {
    slug: "long-term-stability-testing",
    title: "What Long-Term Electrochemical Stability Testing Can Reveal",
    category: "Laboratory Methods",
    excerpt: "What hundreds of hours of operation can show.",
  },
  {
    slug: "international-research-opportunities",
    title: "Preparing for International Research Opportunities: Lessons from My Journey",
    category: "PhD and Scholarship Journey",
    excerpt: "Practical preparation for applying abroad.",
  },
];

export function getPostIndex(slug: string) {
  return POSTS.findIndex((post) => post.slug === slug);
}
