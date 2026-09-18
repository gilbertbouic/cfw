"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SourceBanner } from "@/components/SourceBanner";
import { getAllProjects } from "@/data/projects";
import {
  getAllReports,
  projectsWithoutReports,
} from "@/data/reports";
import type { ReportType } from "@/data/reports";
import { useI18n } from "@/i18n/LanguageProvider";

export function ReportsView() {
  const { dict } = useI18n();
  const copy = dict.reports;
  const reports = getAllReports();
  const titles = Object.fromEntries(
    getAllProjects().map((p) => [p.id, p.title]),
  );
  const missing = projectsWithoutReports(getAllProjects().map((p) => p.id));

  return (
    <>
      <SourceBanner />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">{copy.colReport}</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    {copy.colType}
                  </th>
                  <th className="hidden px-4 py-3 font-semibold md:table-cell">
                    {copy.colPeriod}
                  </th>
                  <th className="px-4 py-3 font-semibold">{copy.colProject}</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <a
                        href={r.url}
                        className="font-semibold text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {r.title}
                      </a>
                      {r.geographyNote && (
                        <p className="mt-1 text-xs text-muted">
                          {r.geographyNote}
                        </p>
                      )}
                    </td>
                    <td className="hidden px-4 py-3 text-muted sm:table-cell">
                      {dict.labels.reportType[r.type as ReportType]}
                    </td>
                    <td className="hidden px-4 py-3 text-muted md:table-cell">
                      {r.reportingPeriod ?? "-"}
                      {r.coverDate ? ` · ${r.coverDate}` : ""}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/projects/${r.projectId}`}
                        className="text-foreground hover:text-primary"
                      >
                        {titles[r.projectId] ?? r.projectId}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {missing.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                {copy.noneTitle}
              </h2>
              <p className="mt-2 text-sm text-muted">{copy.noneLead}</p>
              <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
                {missing.map((id) => (
                  <li key={id} className="px-4 py-3">
                    <Link
                      href={`/projects/${id}`}
                      className="font-semibold text-foreground hover:text-primary"
                    >
                      {titles[id] ?? id}
                    </Link>
                    <span className="mt-1 block text-sm text-muted">
                      {copy.notOnFunderSite}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
