"use client";

import { useState } from "react";
import FilterChips from "@/components/common/FilterChips";
import { BLOG_CATEGORIES, POSTS } from "@/data/blog";
import BlogCard from "./BlogCard";

const CATEGORIES = ["All", ...BLOG_CATEGORIES];

export default function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const q = query.toLowerCase();
  const posts = POSTS.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      `${post.title} ${post.excerpt}`.toLowerCase().includes(q),
  );

  return (
    <>
      <label htmlFor="bq">Search articles</label>
      <input id="bq" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <FilterChips options={CATEGORIES} selected={category} onSelect={setCategory} />
      {posts.length > 0 ? (
        <div className="cards">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No articles match</h3>
          <p>Clear the search or choose another category.</p>
        </div>
      )}
    </>
  );
}
