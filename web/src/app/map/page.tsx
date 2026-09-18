import type { Metadata } from "next";
import { MapView } from "./view";

export const metadata: Metadata = {
  title: "Where works were reported",
  description:
    "Named places in public climate-finance reports for Mauritius, with site-level spend or not reported.",
  alternates: { canonical: "/map" },
  openGraph: { url: "/map" },
};

export default function MapPage() {
  return <MapView />;
}
