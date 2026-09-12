import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import { SourceBanner } from "@/components/SourceBanner";
import { formatMoney } from "@/data/types";
import type { GeographyScope, HazardType, ProjectStatus } from "@/data/types";
import {
  filterProjects,
  portfolioStats,
  uniqueFunders,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project registry",
  description:
    "Sourced climate-finance records for Mauritius — multilateral projects, readiness lines, and regional programmes, each with public citations.",
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
    <>
      <SourceBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Public registry
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Sourced climate-finance records
              </h1>
              <p className="mt-3 max-w-2xl text-muted">
                Only records with at least one public URL. Regional programme
                totals are not treated as Mauritius receipts. Amounts that
                funders have not published are shown as “Not published.”
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/map"
                className="inline-flex rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-primary-soft/50"
              >
                Open map
              </Link>
              <a
                href="/api/projects.csv"
                className="inline-flex rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
              >
                Download CSV
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Records shown", value: String(stats.count) },
              {
                label: "Mauritius-attributed USD (sum)",
                value: formatMoney(stats.attributedSum),
              },
              {
                label: "With a Mauritius amount",
                value: String(stats.attributedCount),
              },
              { label: "Multi-country programmes", value: String(stats.regional) },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {s.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            The Mauritius-attributed USD sum adds only USD amounts a source
            assigns to Mauritius (GCF FP033 grant, AF coastal grant, AF coral
            Mauritius component, NDC NAP lines). It omits the EC farmer grant
            (€) and does not add regional GCF programme totals.
          </p>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container className="space-y-6">
          <Suspense
            fallback={
              <div className="h-24 animate-pulse rounded-2xl bg-primary-soft/40" />
            }
          >
            <ProjectFilters funders={funders} />
          </Suspense>

          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted">
              No records match these filters. Clear a filter and try again.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

          <p className="text-center text-xs text-muted">
            Also available as{" "}
            <a href="/api/projects" className="font-semibold text-primary">
              JSON API
            </a>{" "}
            ·{" "}
            <Link href="/sources" className="font-semibold text-primary">
              Sources and methods
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
