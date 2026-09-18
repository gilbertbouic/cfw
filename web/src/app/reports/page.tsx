import type { Metadata } from "next";
import { ReportsView } from "./view";

export const metadata: Metadata = {
  title: "Donor reports",
  description:
    "Published GCF annual performance reports, Adaptation Fund report libraries, and evaluations - linked to the funder page. No assumed quarterly calendar.",
  alternates: { canonical: "/reports" },
  openGraph: { url: "/reports" },
};

export default function ReportsPage() {
  return <ReportsView />;
}
