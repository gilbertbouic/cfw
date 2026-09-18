"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { WorksSchematic } from "@/components/WorksSchematic";
import { SourceBanner } from "@/components/SourceBanner";
import { getAllProjects } from "@/data/projects";
import {
  getSpendPlaces,
  projectsWithoutSpendPlaces,
} from "@/data/spend-places";
import { useI18n } from "@/i18n/LanguageProvider";

export function MapView() {
  const { dict, t, formatMoney } = useI18n();
  const copy = dict.map;
  const places = getSpendPlaces();
  const onMap = places.filter((p) => p.includeInDefaultView);
  const offFrame = places.filter((p) => !p.includeInDefaultView);
  const withoutSites = projectsWithoutSpendPlaces();
  const projects = getAllProjects();
  const titleById = Object.fromEntries(projects.map((p) => [p.id, p.title]));
  const [beforeNotReported, afterCaveat] = copy.lead.split("{notReported}");
  const afterNotReported = (afterCaveat ?? "").replace(
    "{caveat}",
    copy.pinCaveat,
  );

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
              <p className="mt-3 max-w-2xl text-muted">
                {beforeNotReported}
                <strong className="font-semibold text-foreground">
                  {copy.notReportedStrong}
                </strong>
                {afterNotReported}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              {copy.registryList}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container className="space-y-10">
          <WorksSchematic places={places} />
          <p className="text-center text-xs text-muted">
            {t(copy.onMapCount, { count: onMap.length })}
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              {copy.namedTitle}
            </h2>
            <p className="mt-2 text-sm text-muted">{copy.namedLead}</p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{copy.colPlace}</th>
                    <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                      {copy.colIsland}
                    </th>
                    <th className="px-4 py-3 font-semibold">{copy.colSpend}</th>
                    <th className="hidden px-4 py-3 font-semibold md:table-cell">
                      {copy.colSource}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {places.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/projects/${p.projectId}`}
                          className="font-semibold text-foreground hover:text-primary"
                        >
                          {p.name}
                        </Link>
                        <p className="mt-1 text-xs text-muted">{p.worksNote}</p>
                      </td>
                      <td className="hidden px-4 py-3 text-muted sm:table-cell">
                        {dict.labels.island[p.island]}
                        {!p.includeInDefaultView ? copy.offMapFrame : ""}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {p.spendAmount == null
                          ? dict.common.notReported
                          : formatMoney(p.spendAmount, p.spendCurrency)}
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <a
                          href={p.sourceUrl}
                          className="text-xs font-semibold text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.sourcePublisher} →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {offFrame.length > 0 && (
              <p className="mt-3 text-xs text-muted">
                {t(copy.offThisFrame, {
                  names: offFrame.map((p) => p.name).join("; "),
                })}
              </p>
            )}
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              {copy.noSiteTitle}
            </h2>
            <p className="mt-2 text-sm text-muted">{copy.noSiteLead}</p>
            <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
              {withoutSites.map((p) => (
                <li
                  key={p.id}
                  className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <Link
                    href={`/projects/${p.id}`}
                    className="font-semibold text-foreground hover:text-primary"
                  >
                    {p.title}
                  </Link>
                  <span className="text-sm text-muted">
                    {copy.notReportedAtSite}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted">
            {copy.linkedRecords}{" "}
            {[...new Set(places.map((p) => titleById[p.projectId]))].join(" · ")}
          </p>
        </Container>
      </section>
    </>
  );
}
