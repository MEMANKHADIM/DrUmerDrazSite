import type { Metadata } from "next";
import BlogExplorer from "@/components/blog/BlogExplorer";
import BlogIntro from "@/components/blog/BlogIntro";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <section>
      <div className="w">
        <BlogIntro />
        <BlogExplorer />
      </div>
    </section>
  );
}
