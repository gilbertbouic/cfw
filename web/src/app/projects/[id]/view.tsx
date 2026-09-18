"use client";

import Link from "next/link";
import { BudgetBar } from "@/components/BudgetBar";
import { Container } from "@/components/Container";
import { SourceBanner } from "@/components/SourceBanner";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project, SpendPlace } from "@/data/types";
import type { DonorReport } from "@/data/reports";
import { useI18n } from "@/i18n/LanguageProvider";

export function ProjectDetailView({
  project,
  spendPlaces,
  reports,
}: {
  project: Project;
  spendPlaces: SpendPlace[];
  reports: DonorReport[];
}) {
  const { dict, t, plural, formatMoney } = useI18n();
  const copy = dict.projectDetail;

  return (
    <>
      <SourceBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/50 to-background">
        <Container className="py-10 sm:py-12">
          <Link
            href="/projects"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            {copy.allRecords}
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted shadow-sm">
              {dict.labels.objective[project.climateObjective]}
            </span>
            <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted shadow-sm">
              {dict.labels.kind[project.kind]}
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
                {copy.publishedAmounts}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {copy.publishedAmountsLead}
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
                      label: copy.cofinancing,
                      value: project.cofinancing,
                      note: project.cofinancingNote,
                      color: "bg-primary",
                    },
                    {
                      label: copy.totalValue,
                      value: project.totalValue,
                      note: project.totalValueNote,
                      color: "bg-success",
                    },
                    {
                      label: copy.disbursed,
                      value: project.disbursed,
                      note: project.disbursedNote,
                      color: "bg-accent",
                    },
                    {
                      label: copy.mauritiusAttributed,
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
                    {copy.start}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {project.startYear ?? dict.common.notPublished}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    {copy.end}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {project.endYear ?? dict.common.notPublished}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                {copy.whereMoney}
              </h2>
              <p className="mt-1 text-sm text-muted">{copy.whereMoneyLead}</p>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    {copy.disbursedToImplementer}
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
                    {copy.namedWorksSites}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {spendPlaces.length > 0
                      ? plural(
                          spendPlaces.length,
                          copy.placeOne,
                          copy.placeOther,
                        )
                      : dict.common.notReported}
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
                        {copy.siteLevelSpend}{" "}
                        {place.spendAmount == null
                          ? dict.common.notReported
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
                <p className="mt-4 text-sm text-muted">{copy.noNamedSite}</p>
              )}
              <Link
                href="/map"
                className="mt-4 inline-flex text-sm font-semibold text-primary"
              >
                {copy.openMap}
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                {copy.donorReports}
              </h2>
              <p className="mt-1 text-sm text-muted">{copy.donorReportsLead}</p>
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
                        {dict.labels.reportType[r.type]}
                        {r.reportingPeriod ? ` · ${r.reportingPeriod}` : ""}
                        {r.coverDate
                          ? ` · ${t(dict.common.cover, { date: r.coverDate })}`
                          : ""}
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
                <p className="mt-4 text-sm text-muted">{copy.noReports}</p>
              )}
              <Link
                href="/reports"
                className="mt-4 inline-flex text-sm font-semibold text-primary"
              >
                {copy.allReports}
              </Link>
            </div>

            {project.publishedResults.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground">
                  {copy.resultsTitle}
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
                        {dict.common.source}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                {copy.sourcesTitle}
              </h2>
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
                      {s.publisher} · {t(dict.common.asOf, { date: s.asOf })}
                      {s.notes ? ` · ${s.notes}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted">
                {t(copy.confidence, {
                  label: dict.labels.confidence[project.confidence],
                  date: project.lastReviewed,
                })}
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {copy.geography}
              </h2>
              <p className="mt-2 font-semibold text-foreground">
                {dict.labels.geography[project.geographyScope]}
              </p>
              <p className="mt-1 text-sm text-muted">{project.geographyNote}</p>
              <p className="mt-2 text-sm text-foreground">{project.district}</p>
              {spendPlaces.length > 0 ? (
                <Link
                  href="/map"
                  className="mt-3 inline-flex text-sm font-semibold text-primary"
                >
                  {copy.showPlaces}
                </Link>
              ) : (
                <p className="mt-3 text-xs text-muted">{copy.notPinned}</p>
              )}
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {copy.hazards}
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.hazards.map((h) => (
                  <span
                    key={h}
                    className="rounded-md bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary-dark"
                  >
                    {dict.labels.hazard[h]}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {copy.funders}
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
                  {copy.implementing}
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
