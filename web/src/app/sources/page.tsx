import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SourceBanner } from "@/components/SourceBanner";
import { headlines } from "@/data/headlines";
import { getAllProjects } from "@/data/projects";
import { LEDGER_REVIEWED } from "@/data/types";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "How Climate Fund Watch cites Mauritius climate-finance figures, what we refuse to estimate, and the source list for every record.",
};

export default function SourcesPage() {
  const projects = getAllProjects();

  return (
    <>
      <SourceBanner />
      <PageHero
        eyebrow="Sources & methods"
        title="Every public number on this site has a URL"
        description="This is an independent compilation, last reviewed on the date in the banner. It is not an official government, GCF, or Adaptation Fund reporting system."
      />

      <section className="py-12 sm:py-14">
        <Container className="prose-cfw max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Rules
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              A money figure appears only if a cited public document contains
              that figure (or an official table from which it is copied).
            </li>
            <li>
              If a funder has not published disbursement or expenditure, the
              field is “Not published” — never zero, never estimated.
            </li>
            <li>
              Multi-country programmes keep programme totals and state that
              the Mauritius share is unpublished unless a document splits it
              (the Adaptation Fund coral component is the current exception).
            </li>
            <li>
              Need (NDC, CCDR), tagged domestic spend (Appendix H), and
              international support received (FMCP, funder pages) are not
              added together.
            </li>
            <li>
              Status is taken from the funder or UNDP page (under
              implementation, completed) or left unknown. We do not mark
              projects delayed for illustration.
            </li>
            <li>
              Map pins are named localities from CEB, UNDP, GCF or Adaptation
              Fund reports (battery substations, three AF coastal sites,
              island-level PV). Pins are approximate localities, not surveyed
              works polygons. Site-level spend is “Not reported” unless a
              document publishes a figure for that site. Batch grants are not
              divided across substations.
            </li>
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            Headline figures
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {headlines.map((h) => (
              <li key={h.id}>
                <span className="font-semibold text-foreground">
                  {h.display}
                </span>{" "}
                — {h.label}.{" "}
                <a
                  href={h.source.url}
                  className="font-semibold text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {h.source.title}
                </a>{" "}
                <span className="text-muted">
                  ({h.source.publisher}, {h.source.asOf})
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            Registry records
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            {projects.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/projects/${p.id}`}
                  className="font-semibold text-foreground hover:text-primary"
                >
                  {p.title}
                </Link>
                <ul className="mt-1 space-y-1 text-muted">
                  {p.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.title}
                      </a>{" "}
                      ({s.publisher}, {s.asOf})
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            Open downloads
          </h2>
          <p className="mt-3 text-sm text-muted">
            The CSV includes a <code>source_urls</code> column so a download
            stays verifiable offline.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/api/projects" className="font-semibold text-primary">
                JSON — /api/projects
              </a>
            </li>
            <li>
              <a href="/api/projects.csv" className="font-semibold text-primary">
                CSV — /api/projects.csv
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm text-muted">
            Ledger last reviewed {LEDGER_REVIEWED}. Corrections:{" "}
            <a href="mailto:support@mkweli.tech" className="font-semibold text-primary">
              support@mkweli.tech
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
