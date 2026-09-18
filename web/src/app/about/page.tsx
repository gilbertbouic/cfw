import type { Metadata } from "next";
import { AboutView } from "./view";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Climate Fund Watch is, who it serves, and how Mauritius anchors the first country pack.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
