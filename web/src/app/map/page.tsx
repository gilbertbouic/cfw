import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectsMap } from "@/components/ProjectsMap";
import { SourceBanner } from "@/components/SourceBanner";
import { getMappableProjects, getProjectById } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project map",
  description:
    "Map pins only for climate-finance records with a sourced site or an explicitly labelled illustrative national centroid.",
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
  let projects = getMappableProjects();
  if (focusId) {
    const focused = getProjectById(focusId);
    if (
      focused?.showOnMap &&
      focused.lat != null &&
      focused.lng != null &&
      !projects.some((p) => p.id === focusId)
    ) {
      projects = [...projects, focused];
    }
  }

  return (
    <>
      <SourceBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Geo explorer
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Map of sourced locations
              </h1>
              <p className="mt-3 max-w-2xl text-muted">
                Most climate-finance records are national or multi-country and
                have no surveyed site. Only {projects.length} record
                {projects.length === 1 ? "" : "s"} meet the pin rule. Click a
                marker for the geography caveat.
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
          {projects.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted">
              No sourced coordinates in the current ledger.
            </p>
          ) : (
            <ProjectsMap projects={projects} />
          )}
          <p className="mt-4 text-center text-xs text-muted">
            Base map: MapLibre demo tiles · Pins are not surveyed works
            geometries ·{" "}
            <Link href="/sources" className="font-semibold text-primary">
              Sources
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
