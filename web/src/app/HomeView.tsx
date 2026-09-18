"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { SourceBanner } from "@/components/SourceBanner";
import { headlines } from "@/data/headlines";
import { getAllProjects } from "@/data/projects";
import {
  attributedMauritiusAmount,
  LEDGER_REVIEWED,
} from "@/data/types";
import type { HeadlineId } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageProvider";

export function HomeView() {
  const { dict, t, formatMoney } = useI18n();
  const records = getAllProjects();
  const mauritiusSpecific = records.filter(
    (p) => attributedMauritiusAmount(p) != null,
  );
  const copy = dict.home;

  return (
    <>
      <SourceBanner />
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary-soft),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_#e8f2f6,_transparent_50%)]"
          aria-hidden
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            {t(copy.sourcesReviewed, { date: LEDGER_REVIEWED })}
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {copy.heroTitle}{" "}
            <span className="text-primary">{copy.heroTitleAccent}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            {copy.heroLead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              {copy.openRegistry}
            </Link>
            <Link
              href="/landscape"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:bg-primary-soft/40"
            >
              {copy.fundingLandscape}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-card">
        <Container className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {headlines.map((h) => {
            const local = dict.headlines[h.id as HeadlineId];
            return (
              <div key={h.id} className="bg-card px-4 py-6 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {local.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                  {h.display}
                </p>
                <a
                  href={h.source.url}
                  className="mt-2 inline-block text-xs font-semibold text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {h.source.publisher} →
                </a>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {copy.readSeparately}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {copy.notOneTotal}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {headlines.slice(0, 3).map((h, i) => {
              const local = dict.headlines[h.id as HeadlineId];
              return (
                <article
                  key={h.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">
                    {local.label}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-primary">
                    {h.display}
                  </p>
                  <p className="mt-2 text-sm text-muted">{local.measures}</p>
                  <p className="mt-3 text-sm text-foreground">{local.detail}</p>
                  <a
                    href={h.source.url}
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {h.source.title} →
                  </a>
                </article>
              );
            })}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted">
            {t(copy.fmcpNote, { amount: "USD 118.05 million" })}{" "}
            <Link href="/landscape" className="font-semibold text-primary">
              {copy.agencyTable}
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-primary-soft/35 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {copy.registryEyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t(copy.registryTitle, { count: records.length })}
              </h2>
              <p className="mt-3 text-muted">
                {t(copy.registryLead, { count: mauritiusSpecific.length })}
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              {copy.fullRegistry}
            </Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">{copy.tableRecord}</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    {copy.tableGeography}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {copy.tableMauritiusAmount}
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.slice(0, 6).map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <Link
                        href={`/projects/${p.id}`}
                        className="font-semibold text-foreground hover:text-primary"
                      >
                        {p.title}
                      </Link>
                    </td>
                    <td className="hidden px-4 py-3 text-muted sm:table-cell">
                      {dict.labels.geography[p.geographyScope]}
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground">
                      {formatMoney(
                        attributedMauritiusAmount(p),
                        p.currency,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {copy.whatThisIs}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {copy.briefingTitle}
            </h2>
            <p className="mt-4 text-muted">
              {t(copy.briefingBody, { date: LEDGER_REVIEWED })}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/sources"
                className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                {copy.howWeCite}
              </Link>
              <Link
                href="/about"
                className="inline-flex rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-primary-soft/40"
              >
                {copy.aboutProduct}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-foreground">
              {copy.weDoNotInvent}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {copy.doNotInvent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <hr className="my-5 border-border" />
            <p className="text-sm text-muted">
              {copy.machineReadable}{" "}
              <a href="/api/projects" className="font-semibold text-primary">
                JSON
              </a>{" "}
              ·{" "}
              <a href="/api/projects.csv" className="font-semibold text-primary">
                CSV
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
