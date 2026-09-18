import type { Metadata } from "next";
import { SourcesView } from "./view";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "How Climate Fund Watch cites Mauritius climate-finance figures, what we refuse to estimate, and the source list for every record.",
  alternates: { canonical: "/sources" },
  openGraph: { url: "/sources" },
};

export default function SourcesPage() {
  return <SourcesView />;
}
