"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import { SourceBanner } from "@/components/SourceBanner";
import type { Project } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

type Stats = {
  count: number;
  attributedSum: number;
  attributedCount: number;
  regional: number;
};

export function ProjectsView({
  filtered,
  stats,
  funders,
}: {
  filtered: Project[];
  stats: Stats;
  funders: string[];
}) {
  const { dict, formatMoney } = useI18n();
  const copy = dict.projects;

  return (
    <>
      <SourceBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {copy.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {copy.title}
              </h1>
              <p className="mt-3 max-w-2xl text-muted">{copy.lead}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/map"
                className="inline-flex rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-primary-soft/50"
              >
                {copy.openMap}
              </Link>
              <a
                href="/api/projects.csv"
                className="inline-flex rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
              >
                {copy.downloadCsv}
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: copy.recordsShown, value: String(stats.count) },
              {
                label: copy.attributedSum,
                value: formatMoney(stats.attributedSum),
              },
              {
                label: copy.withAmount,
                value: String(stats.attributedCount),
              },
              { label: copy.multiCountry, value: String(stats.regional) },
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
          <p className="mt-3 text-xs text-muted">{copy.sumNote}</p>
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
              {copy.noMatch}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

          <p className="text-center text-xs text-muted">
            {copy.alsoAvailable}{" "}
            <a href="/api/projects" className="font-semibold text-primary">
              {copy.jsonApi}
            </a>{" "}
            ·{" "}
            <Link href="/sources" className="font-semibold text-primary">
              {copy.sourcesAndMethods}
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
