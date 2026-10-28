"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function MainNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        id="mb"
        type="button"
        aria-expanded={open}
        aria-controls="nv"
        onClick={() => setOpen((o) => !o)}
      >
        Menu
      </button>
      <nav id="nv" aria-label="Main" className={open ? "o" : undefined}>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.href === current ? "page" : undefined}
            onClick={close}
          >
            {link.label}
          </Link>
        ))}
        <Link className="btn" href="/#contact" onClick={close}>
          Let’s Collaborate
        </Link>
      </nav>
    </>
  );
}

// Highlights the top-level section, so /research/* keeps "Research" active.
export function ActiveMainNav() {
  const segment = useSelectedLayoutSegment();
  return <MainNav current={segment ? `/${segment}` : "/"} />;
}
