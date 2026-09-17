import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BudgetBar } from "@/components/BudgetBar";
import { Container } from "@/components/Container";
import { SourceBanner } from "@/components/SourceBanner";
import { StatusBadge } from "@/components/StatusBadge";
import { getAllProjects, getProjectById } from "@/data/projects";
import { getReportsForProject, REPORT_TYPE_LABELS } from "@/data/reports";
import { getSpendPlacesForProject } from "@/data/spend-places";
import {
  CONFIDENCE_LABELS,
  formatMoney,
  GEOGRAPHY_LABELS,
  HAZARD_LABELS,
  KIND_LABELS,
  OBJECTIVE_LABELS,
} from "@/data/types";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Record not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${id}` },
    openGraph: { url: `/projects/${id}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  const spendPlaces = getSpendPlacesForProject(project.id);
  const reports = getReportsForProject(project.id);

  return (
    <>
      <SourceBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/50 to-background">
        <Container className="py-10 sm:py-12">
          <Link
            href="/projects"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            ← All records
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted shadow-sm">
              {OBJECTIVE_LABELS[project.climateObjective]}
            </span>
            <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted shadow-sm">
              {KIND_LABELS[project.kind]}
            </span>
            <span className="text-xs text-muted">{project.id}</span>
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-muted">{project.summary}</p>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                Published amounts
              </h2>
              <p className="mt-1 text-sm text-muted">
                Only lines a cited document publishes. Empty rows mean the
                source does not give a number, not that the amount is zero.
              </p>
              <div className="mt-5">
                <BudgetBar
                  currency={project.currency}
                  formatMoney={formatMoney}
                  rows={[
                    {
                      label: project.amountLabel,
                      value: project.amount,
                      note: project.amountNote,
                      color: "bg-sky",
                    },
                    {
                      label: "Co-financing (as published)",
                      value: project.cofinancing,
                      note: project.cofinancingNote,
                      color: "bg-primary",
                    },
                    {
                      label: "Total value (as published)",
                      value: project.totalValue,
                      note: project.totalValueNote,
                      color: "bg-success",
                    },
                    {
                      label: "Disbursed (as published)",
                      value: project.disbursed,
                      note: project.disbursedNote,
                      color: "bg-accent",
                    },
                    {
                      label: "Mauritius-attributed amount",
                      value: project.mauritiusShare,
                      note: project.mauritiusShareNote,
                      color: "bg-primary-dark",
                    },
                  ]}
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    Start
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {project.startYear ?? "Not published"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    End / estimated completion
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {project.endYear ?? "Not published"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                Where the money went
              </h2>
              <p className="mt-1 text-sm text-muted">
                Disbursement to an accredited entity is not the same as
                expenditure at a named site. Site-level rupees or dollars are
                shown only when a cited report publishes them.
              </p>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    Disbursed to implementer
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {formatMoney(project.disbursed, project.currency)}
                  </dd>
                  {project.disbursedNote && (
                    <p className="mt-1 text-xs text-muted">
                      {project.disbursedNote}
                    </p>
                  )}
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    Named works sites
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {spendPlaces.length > 0
                      ? `${spendPlaces.length} place${spendPlaces.length === 1 ? "" : "s"} in public reports`
                      : "Not reported"}
                  </dd>
                </div>
              </dl>
              {spendPlaces.length > 0 ? (
                <ul className="mt-4 space-y-3 border-t border-border pt-4">
                  {spendPlaces.map((place) => (
                    <li key={place.id} className="text-sm">
                      <p className="font-semibold text-foreground">
                        {place.name}
                      </p>
                      <p className="mt-0.5 text-muted">{place.worksNote}</p>
                      <p className="mt-1 text-xs font-medium text-foreground">
                        Site-level spend:{" "}
                        {place.spendAmount == null
                          ? "Not reported"
                          : formatMoney(place.spendAmount, place.spendCurrency)}
                      </p>
                      <a
                        href={place.sourceUrl}
                        className="mt-1 inline-flex text-xs font-semibold text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {place.sourceTitle} →
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  No named works site was found in the documents reviewed for
                  this record.
                </p>
              )}
              <Link
                href="/map"
                className="mt-4 inline-flex text-sm font-semibold text-primary"
              >
                Open spend geography map →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                Donor reports
              </h2>
              <p className="mt-1 text-sm text-muted">
                Public performance reports linked from the funder. GCF reporting
                for these projects is annual (APR), not a quarterly calendar
                unless a document says so. A missing year means it was not on
                the funder site we reviewed — not that we marked it overdue.
              </p>
              {reports.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {reports.map((r) => (
                    <li key={r.id} className="text-sm">
                      <a
                        href={r.url}
                        className="font-semibold text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {r.title}
                      </a>
                      <p className="mt-0.5 text-muted">
                        {REPORT_TYPE_LABELS[r.type]}
                        {r.reportingPeriod ? ` · ${r.reportingPeriod}` : ""}
                        {r.coverDate ? ` · cover ${r.coverDate}` : ""}
                        {` · ${r.publisher}`}
                      </p>
                      {r.geographyNote && (
                        <p className="mt-0.5 text-xs text-muted">
                          {r.geographyNote}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  No public APR, PPR or evaluation was listed on the funder
                  pages reviewed for this record.
                </p>
              )}
              <Link
                href="/reports"
                className="mt-4 inline-flex text-sm font-semibold text-primary"
              >
                All published reports →
              </Link>
            </div>

            {project.publishedResults.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground">
                  Results stated by sources
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {project.publishedResults.map((r) => (
                    <li key={r.label}>
                      {r.label}{" "}
                      <a
                        href={r.sourceUrl}
                        className="font-semibold text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Sources</h2>
              <ul className="mt-4 space-y-4">
                {project.sources.map((s) => (
                  <li key={s.url} className="text-sm">
                    <a
                      href={s.url}
                      className="font-semibold text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.title}
                    </a>
                    <p className="mt-0.5 text-muted">
                      {s.publisher} · as of {s.asOf}
                      {s.notes ? ` · ${s.notes}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">
                Confidence: {CONFIDENCE_LABELS[project.confidence]} · Last
                reviewed {project.lastReviewed}
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Geography
              </h2>
              <p className="mt-2 font-semibold text-foreground">
                {GEOGRAPHY_LABELS[project.geographyScope]}
              </p>
              <p className="mt-1 text-sm text-muted">{project.geographyNote}</p>
              <p className="mt-2 text-sm text-foreground">{project.district}</p>
              {spendPlaces.length > 0 ? (
                <Link
                  href="/map"
                  className="mt-3 inline-flex text-sm font-semibold text-primary"
                >
                  Show named places →
                </Link>
              ) : (
                <p className="mt-3 text-xs text-muted">
                  No named works site in the documents reviewed — not pinned.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Hazards
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.hazards.map((h) => (
                  <span
                    key={h}
                    className="rounded-md bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary-dark"
                  >
                    {HAZARD_LABELS[h]}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Funders
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-foreground">
                {project.funders.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {project.implementingEntities.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Implementing entities
                </h2>
                <ul className="mt-2 space-y-1 text-sm text-foreground">
                  {project.implementingEntities.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
