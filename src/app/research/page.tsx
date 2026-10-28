import type { Metadata } from "next";
import ResearchExplorer from "@/components/research/ResearchExplorer";
import ResearchIntro from "@/components/research/ResearchIntro";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <section>
      <div className="w">
        <ResearchIntro />
        <ResearchExplorer />
      </div>
    </section>
  );
}
