import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { DemoBanner } from "@/components/DemoBanner";
import { ProjectsMap } from "@/components/ProjectsMap";
import { getAllProjects } from "@/data/projects";
import { filterProjects } from "@/lib/projects";
import type { HazardType, ProjectStatus } from "@/data/types";

export const metadata: Metadata = {
  title: "Project map",
  description:
    "Map of demo climate finance projects in Mauritius — status-coloured markers.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function MapPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const get = (k: string) => {
    const v = sp[k];
    return Array.isArray(v) ? v[0] : v;
  };

  const focusId = get("focus");
  let projects = filterProjects({
    status: (get("status") as ProjectStatus | "all") || "all",
    hazard: (get("hazard") as HazardType | "all") || "all",
  });

  // If focus is set, ensure that project is included and prefer full list if empty
  if (focusId) {
    const all = getAllProjects();
    const focused = all.find((p) => p.id === focusId);
    if (focused && !projects.some((p) => p.id === focusId)) {
      projects = [...projects, focused];
    }
  }

  if (projects.length === 0) projects = getAllProjects();

  return (
    <>
      <DemoBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Geo explorer
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Project map
              </h1>
              <p className="mt-3 max-w-2xl text-muted">
                Click a marker for status and a link to the full project page.
                Marker colours match lifecycle status (delayed projects use the
                accent colour).
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Registry list
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <ProjectsMap projects={projects} />
          <p className="mt-4 text-center text-xs text-muted">
            Base map: MapLibre demo tiles · Coordinates are approximate for demo
            purposes ·{" "}
            <Link href="/methodology" className="font-semibold text-primary">
              Methodology
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
