import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section>
      <div className="w">
        <span className="lab">404</span>
        <h1>This page doesn’t exist</h1>
        <p>
          The link may be outdated. Go back to the{" "}
          <Link href="/">
            <b>home page</b>
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
