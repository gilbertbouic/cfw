import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Funding landscape",
  description:
    "How climate-finance channels for Mauritius appear in public documents: NDC need, budget tagging, multilateral funds, and private lending.",
  alternates: { canonical: "/landscape" },
  openGraph: { url: "/landscape" },
};

export default function LandscapePage() {
  const fmcpTotal = fmcpAgencyLines.reduce((s, r) => s + r.usdMillion, 0);

  return (
    <>
      <SourceBanner />
      <PageHero
        eyebrow="Landscape"
        title="Channels of climate money — and what each number actually measures"
        description="Public climate-finance figures for Mauritius come from different systems. This page lists those channels without adding them into a single total."
      />

      <section className="py-12 sm:py-14">
        <Container className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Need versus spend versus support received
            </h2>
            <p className="mt-3 max-w-3xl text-muted">
              The NDC, the World Bank CCDR, the national budget tag, and the
              ministry’s FMCP table answer different questions. Mixing them
              produces a number no source published.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {headlines.map((h) => (
                <article
                  key={h.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {h.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    {h.display}
                  </p>
                  <p className="mt-2 text-sm text-muted">{h.measures}</p>
                  <p className="mt-2 text-sm text-foreground">{h.detail}</p>
                  <a
                    href={h.source.url}
                    className="mt-3 inline-flex text-sm font-semibold text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {h.source.title} →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              International support listed by the ministry (from 2017)
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              Copied from the Ministry of Environment FMCP-3 presentation. The
              slide total is USD 118.05 million. The same slide says 8.4% of
              the NDC requirement has been mobilized; 118.05 / 6,500 is about
              1.8%. We do not choose between those two statements.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Agency</th>
                    <th className="px-4 py-3 font-semibold">USD million</th>
                    <th className="px-4 py-3 font-semibold">Instrument</th>
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
                        {r.instrument === "loan" ? "Loan" : "Grant / unspecified"}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-primary-soft/30 font-semibold">
                    <td className="px-4 py-2.5">Total as listed</td>
                    <td className="px-4 py-2.5">{fmcpTotal.toFixed(2)}</td>
                    <td className="px-4 py-2.5 text-muted">Grant and loan</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Source:{" "}
              <a
                href="https://unfccc.int/sites/default/files/resource/Mauritius-FMCP3-Presentation.pdf"
                className="font-semibold text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mauritius FMCP-3 presentation
              </a>
              . Agency lines are not always the same as a single project in
              the registry (for example GCF 38.51 vs FP033 grant 28.21).
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Domestic instruments
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {domesticNotes.map((n) => (
                <article
                  key={n.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{n.body}</p>
                  <a
                    href={n.source.url}
                    className="mt-3 inline-flex text-sm font-semibold text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {n.source.title} →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Private lending (not public expenditure)
            </h2>
            <div className="mt-6 grid gap-4">
              {privateFinanceNotes.map((n) => (
                <article
                  key={n.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{n.body}</p>
                  <a
                    href={n.source.url}
                    className="mt-3 inline-flex text-sm font-semibold text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {n.source.publisher}: {n.source.title} →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Tracking and integrity — published findings
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">
              These are survey and research claims, cited as such. They are
              not legal findings.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {integrityNotes.map((n) => (
                <article
                  key={n.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{n.body}</p>
                  <a
                    href={n.source.url}
                    className="mt-3 inline-flex text-sm font-semibold text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {n.source.title} →
                  </a>
                </article>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted">
            Project-level records live in the{" "}
            <Link href="/projects" className="font-semibold text-primary">
              registry
            </Link>
            . Citation rules are on{" "}
            <Link href="/sources" className="font-semibold text-primary">
              Sources
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
