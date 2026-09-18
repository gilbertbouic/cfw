"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SourceBanner } from "@/components/SourceBanner";
import {
  domesticNotes,
  fmcpAgencyLines,
  headlines,
  integrityNotes,
  privateFinanceNotes,
} from "@/data/headlines";
import type { HeadlineId } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageProvider";

const DOMESTIC_KEYS = ["ccr", "csf", "undrr"] as const;
const INTEGRITY_KEYS = ["tm", "conversation", "taxonomy"] as const;
const PRIVATE_KEYS = ["absa"] as const;

export function LandscapeView() {
  const { dict } = useI18n();
  const copy = dict.landscape;
  const fmcpTotal = fmcpAgencyLines.reduce((s, r) => s + r.usdMillion, 0);
  const [beforeLink, afterLink] = copy.fmcpSourceNote.split("{link}");
  const [beforeRegistry, rest] = copy.footerNote.split("{registry}");
  const [afterRegistry, afterSources] = (rest ?? "").split("{sources}");

  return (
    <>
      <SourceBanner />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-12 sm:py-14">
        <Container className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {copy.needTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-muted">{copy.needLead}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {headlines.map((h) => {
                const local = dict.headlines[h.id as HeadlineId];
                return (
                  <article
                    key={h.id}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {local.label}
                    </p>
                    <p className="mt-1 text-xl font-semibold text-foreground">
                      {h.display}
                    </p>
                    <p className="mt-2 text-sm text-muted">{local.measures}</p>
                    <p className="mt-2 text-sm text-foreground">{local.detail}</p>
                    <a
                      href={h.source.url}
                      className="mt-3 inline-flex text-sm font-semibold text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {h.source.title} →
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {copy.fmcpTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{copy.fmcpLead}</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{copy.agency}</th>
                    <th className="px-4 py-3 font-semibold">{copy.usdMillion}</th>
                    <th className="px-4 py-3 font-semibold">{copy.instrument}</th>
                  </tr>
                </thead>
                <tbody>
                  {fmcpAgencyLines.map((r) => (
                    <tr key={r.agency} className="border-b border-border last:border-0">
                      <td className="px-4 py-2.5">{r.agency}</td>
                      <td className="px-4 py-2.5 font-medium">
                        {r.usdMillion.toFixed(2)}
                      </td>
                      <td className="px-4 py-2.5 text-muted">
                        {r.instrument === "loan"
                          ? dict.labels.instrument.loan
                          : dict.labels.instrument.grantOrUnspecified}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-primary-soft/30 font-semibold">
                    <td className="px-4 py-2.5">{copy.totalAsListed}</td>
                    <td className="px-4 py-2.5">{fmcpTotal.toFixed(2)}</td>
                    <td className="px-4 py-2.5 text-muted">
                      {dict.labels.instrument.grantAndLoan}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              {beforeLink}
              <a
                href="https://unfccc.int/sites/default/files/resource/Mauritius-FMCP3-Presentation.pdf"
                className="font-semibold text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.fmcpSourceLink}
              </a>
              {afterLink}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {copy.domesticTitle}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {domesticNotes.map((n, i) => {
                const local = copy.domesticNotes[DOMESTIC_KEYS[i]];
                return (
                  <article
                    key={n.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-foreground">
                      {local.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{local.body}</p>
                    <a
                      href={n.source.url}
                      className="mt-3 inline-flex text-sm font-semibold text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {n.source.title} →
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {copy.privateTitle}
            </h2>
            <div className="mt-6 grid gap-4">
              {privateFinanceNotes.map((n, i) => {
                const local = copy.privateNotes[PRIVATE_KEYS[i]];
                return (
                  <article
                    key={n.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-foreground">
                      {local.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{local.body}</p>
                    <a
                      href={n.source.url}
                      className="mt-3 inline-flex text-sm font-semibold text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {n.source.publisher}: {n.source.title} →
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {copy.integrityTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              {copy.integrityLead}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {integrityNotes.map((n, i) => {
                const local = copy.integrityNotes[INTEGRITY_KEYS[i]];
                return (
                  <article
                    key={n.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-foreground">
                      {local.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{local.body}</p>
                    <a
                      href={n.source.url}
                      className="mt-3 inline-flex text-sm font-semibold text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {n.source.title} →
                    </a>
                  </article>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-muted">
            {beforeRegistry}
            <Link href="/projects" className="font-semibold text-primary">
              {copy.registryWord}
            </Link>
            {afterRegistry}
            <Link href="/sources" className="font-semibold text-primary">
              {copy.sourcesWord}
            </Link>
            {afterSources}
          </p>
        </Container>
      </section>
    </>
  );
}
