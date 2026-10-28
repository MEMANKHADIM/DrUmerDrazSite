import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogArticle from "@/components/blog/BlogArticle";
import { POSTS, getPostIndex } from "@/data/blog";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: POSTS[getPostIndex(slug)]?.title ?? "Page not found" };
}

async function ArticleContent({ params }: Pick<PageProps<"/blog/[slug]">, "params">) {
  const { slug } = await params;
  const index = getPostIndex(slug);
  if (index < 0) notFound();
  return <BlogArticle post={POSTS[index]} prev={POSTS[index - 1]} next={POSTS[index + 1]} />;
}

export default function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <Suspense>
      <ArticleContent params={params} />
    </Suspense>
  );
}
