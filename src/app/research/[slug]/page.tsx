import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ResearchDetail from "@/components/research/ResearchDetail";
import { RESEARCH, getResearchProject } from "@/data/research";

export function generateStaticParams() {
  return RESEARCH.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/research/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: getResearchProject(slug)?.title ?? "Page not found" };
}

async function ResearchContent({ params }: Pick<PageProps<"/research/[slug]">, "params">) {
  const { slug } = await params;
  const project = getResearchProject(slug);
  if (!project) notFound();
  return <ResearchDetail project={project} />;
}

export default function ResearchProjectPage({ params }: PageProps<"/research/[slug]">) {
  return (
    <Suspense>
      <ResearchContent params={params} />
    </Suspense>
  );
}
