import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SourceBanner } from "@/components/SourceBanner";
import { getAllProjects } from "@/data/projects";
import {
  getAllReports,
  projectsWithoutReports,
  REPORT_TYPE_LABELS,
} from "@/data/reports";

export const metadata: Metadata = {
  title: "Donor reports",
  description:
    "Published GCF annual performance reports, Adaptation Fund report libraries, and evaluations — linked to the funder page. No assumed quarterly calendar.",
  alternates: { canonical: "/reports" },
  openGraph: { url: "/reports" },
};

export default function ReportsPage() {
  const reports = getAllReports();
  const titles = Object.fromEntries(
    getAllProjects().map((p) => [p.id, p.title]),
  );
  const missing = projectsWithoutReports(getAllProjects().map((p) => p.id));

  return (
    <>
      <SourceBanner />
      <PageHero
        eyebrow="Reports"
        title="What funders have published"
        description="Disbursements are often gated on reports. For these Mauritius-linked GCF projects the public library is annual performance reports, not a quarterly calendar. We list documents that are on GCF, AF or UNDP pages — we do not invent due dates."
      />

      <section className="py-12 sm:py-14">
        <Container className="space-y-8">
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">Report</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    Type
                  </th>
                  <th className="hidden px-4 py-3 font-semibold md:table-cell">
                    Period
                  </th>
                  <th className="px-4 py-3 font-semibold">Project</th>
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
                      {REPORT_TYPE_LABELS[r.type]}
                    </td>
                    <td className="hidden px-4 py-3 text-muted md:table-cell">
                      {r.reportingPeriod ?? "—"}
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
                No public report listed
              </h2>
              <p className="mt-2 text-sm text-muted">
                These ledger records had no APR, PPR or evaluation on the
                funder pages reviewed.
              </p>
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
                      Not published on the funder site reviewed
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
