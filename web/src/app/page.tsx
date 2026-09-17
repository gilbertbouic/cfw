import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SourceBanner } from "@/components/SourceBanner";
import { headlines } from "@/data/headlines";
import { getAllProjects } from "@/data/projects";
import {
  attributedMauritiusAmount,
  formatMoney,
  GEOGRAPHY_LABELS,
  LEDGER_REVIEWED,
} from "@/data/types";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  const records = getAllProjects();
  const mauritiusSpecific = records.filter(
    (p) => attributedMauritiusAmount(p) != null,
  );

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
            Public sources · last reviewed {LEDGER_REVIEWED}
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            What public documents say about{" "}
            <span className="text-primary">climate finance in Mauritius</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            Three different questions are often mixed together: how much is
            needed, what the budget tags as climate-related, and which
            international projects are published. This site keeps them apart
            and links every figure to a source.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              Open the sourced registry
            </Link>
            <Link
              href="/landscape"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:bg-primary-soft/40"
            >
              Funding landscape
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-card">
        <Container className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {headlines.map((h) => (
            <div key={h.id} className="bg-card px-4 py-6 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {h.label}
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
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Read the numbers separately
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Need, tagged spend, and donor projects are not one total.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {headlines.slice(0, 3).map((h, i) => (
              <article
                key={h.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {h.label}
                </h3>
                <p className="mt-1 text-lg font-semibold text-primary">
                  {h.display}
                </p>
                <p className="mt-2 text-sm text-muted">{h.measures}</p>
                <p className="mt-3 text-sm text-foreground">{h.detail}</p>
                <a
                  href={h.source.url}
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {h.source.title} →
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted">
            The ministry FMCP presentation also lists{" "}
            <strong className="font-semibold text-foreground">
              USD 118.05 million
            </strong>{" "}
            of international support from 2017 onwards, and says 8.4% of the
            NDC requirement has been mobilized. USD 118.05 million is about
            1.8% of USD 6.5 billion — that 8.4% line is published as-is and
            not reconciled here.{" "}
            <Link href="/landscape" className="font-semibold text-primary">
              Agency table
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
                Registry
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {records.length} sourced records. Mauritius amounts only where
                a document publishes them.
              </h2>
              <p className="mt-3 text-muted">
                {mauritiusSpecific.length} records have a published
                Mauritius-attributed amount. Multi-country GCF programmes are
                listed with programme totals and “Mauritius share: not
                published.”
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Full registry →
            </Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">Record</th>
                  <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                    Geography
                  </th>
                  <th className="px-4 py-3 font-semibold">Mauritius amount</th>
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
                      {GEOGRAPHY_LABELS[p.geographyScope]}
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
              What this site is
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              A public briefing, not a live government dashboard.
            </h2>
            <p className="mt-4 text-muted">
              Climate Fund Watch is also a proposed transparency platform
              (community evidence, integrity channel, council consoles). Those
              modules are not live. The pages here publish only what we could
              verify in public documents as of {LEDGER_REVIEWED}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/sources"
                className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                How we cite
              </Link>
              <Link
                href="/about"
                className="inline-flex rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-primary-soft/40"
              >
                About the product
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-foreground">
              We do not invent
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>Disbursement or expenditure when the source is silent</li>
              <li>Mauritius splits of regional programmes</li>
              <li>Local drainage or shelter projects without a public record</li>
              <li>“Delayed” status without a named document</li>
            </ul>
            <hr className="my-5 border-border" />
            <p className="text-sm text-muted">
              Machine-readable copy of the current ledger:{" "}
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
