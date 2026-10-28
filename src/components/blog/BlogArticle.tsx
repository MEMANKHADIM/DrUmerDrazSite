import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import CopyLinkButton from "./CopyLinkButton";

type BlogArticleProps = {
  post: BlogPost;
  prev?: BlogPost;
  next?: BlogPost;
};

export default function BlogArticle({ post, prev, next }: BlogArticleProps) {
  return (
    <section>
      <div className="w art">
        <Link href="/blog">← Back to blog</Link>
        <br />
        <br />
        <span className="tag">{post.category}</span>
        <span className="tag">Draft</span>
        <h1>{post.title}</h1>
        <p>By Umer Draz · Not yet published</p>
        <p>
          <i>{post.excerpt}</i>
        </p>
        <div className="msg">
          This article is a planned draft. The full text, figures and references will be written by
          Dr. Draz before publication.
        </div>
        <CopyLinkButton />
        <hr style={{ border: 0, borderTop: "1px solid var(--ln)", margin: "32px 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          {prev ? <Link href={`/blog/${prev.slug}`}>← {prev.title}</Link> : <span />}
          {next && <Link href={`/blog/${next.slug}`}>{next.title} →</Link>}
        </div>
      </div>
    </section>
  );
}
