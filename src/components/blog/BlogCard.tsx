import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link className="card" href={`/blog/${post.slug}`}>
      <div className="cv" aria-hidden="true" />
      <span className="tag">{post.category}</span> <span className="tag">Draft</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <small>Umer Draz · Not yet published</small>
    </Link>
  );
}
