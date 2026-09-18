import type { Metadata } from "next";
import { LandscapeView } from "./view";

export const metadata: Metadata = {
  title: "Funding landscape",
  description:
    "How climate-finance channels for Mauritius appear in public documents: NDC need, budget tagging, multilateral funds, and private lending.",
  alternates: { canonical: "/landscape" },
  openGraph: { url: "/landscape" },
};

export default function LandscapePage() {
  return <LandscapeView />;
}
