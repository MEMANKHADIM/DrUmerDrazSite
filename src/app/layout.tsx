import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const SITE_TITLE = "Dr. Umer Draz — Materials Science & Clean Energy Research";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s — Dr. Umer Draz",
  },
  description:
    "Materials scientist and electrochemistry researcher working on solid oxide electrolysis, CO2 electrolysis and functional electrode materials.",
  openGraph: {
    title: SITE_TITLE,
    type: "website",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="btn p skip">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
