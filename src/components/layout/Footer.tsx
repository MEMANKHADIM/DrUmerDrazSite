import Link from "next/link";
import { LINKEDIN_URL, RESEARCHGATE_URL } from "@/data/site";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div>
            <h3>Umer Draz</h3>
            <p>Materials Science · Electrochemistry · Clean Energy.</p>
            <p style={{ maxWidth: "34ch" }}>
              Advancing materials research for a more sustainable energy future.
            </p>
          </div>
          <nav aria-label="Footer">
            <Link href="/">Home</Link>
            <Link href="/research">Research</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <nav aria-label="Profiles">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={RESEARCHGATE_URL} target="_blank" rel="noopener">
              ResearchGate
            </a>
          </nav>
        </div>
        <p style={{ marginTop: 36, fontSize: ".85rem" }}>
          © <CurrentYear /> Umer Draz
        </p>
      </div>
    </footer>
  );
}
