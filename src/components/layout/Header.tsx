import Link from "next/link";
import { Suspense } from "react";
import MainNav, { ActiveMainNav } from "./MainNav";

export default function Header() {
  return (
    <header>
      <div className="w hb">
        <Link className="wm" href="/">
          <b>UMER DRAZ</b>
          <small>MATERIALS SCIENCE · CLEAN ENERGY</small>
        </Link>
        {/* The active link depends on the URL, which isn't known while prerendering unlisted slugs. */}
        <Suspense fallback={<MainNav />}>
          <ActiveMainNav />
        </Suspense>
      </div>
    </header>
  );
}
