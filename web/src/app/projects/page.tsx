import type { Metadata } from "next";
import type { GeographyScope, HazardType, ProjectStatus } from "@/data/types";
import {
  filterProjects,
  portfolioStats,
  uniqueFunders,
} from "@/lib/projects";
import { ProjectsView } from "./view";

export const metadata: Metadata = {
  title: "Project registry",
  description:
    "Sourced climate-finance records for Mauritius - multilateral projects, readiness lines, and regional programmes, each with public citations.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const get = (k: string) => {
    const v = sp[k];
    return Array.isArray(v) ? v[0] : v;
  };

  const filtered = filterProjects({
    q: get("q"),
    status: (get("status") as ProjectStatus | "all") || "all",
    hazard: (get("hazard") as HazardType | "all") || "all",
    funder: get("funder") || "all",
    objective: get("objective") || "all",
    geography: (get("geography") as GeographyScope | "all") || "all",
  });

  const stats = portfolioStats(filtered);
  const funders = uniqueFunders();

  return (
    <ProjectsView filtered={filtered} stats={stats} funders={funders} />
  );
}
