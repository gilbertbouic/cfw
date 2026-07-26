import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How Climate Fund Watch demo data is curated and what is not claimed.",
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Open data · trust"
        title="Data methodology & demo disclaimer"
        description="This site currently publishes curated sample data so citizens and media can experience the product. It is not an official government or funder reporting system."
      />

      <section className="py-12 sm:py-14">
        <Container className="prose-cfw max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-foreground">
            What the demo data is
          </h2>
          <p className="mt-3 text-muted">
            Project records are hand-built composites drawn from the Mauritius
            research pack in this repository (active climate projects,
            co-financing notes, public GCF/AF links) plus a set of clearly
            labelled synthetic local projects so the map and filters cover more
            districts and statuses.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              Budget figures may be rounded, split illustratively, or partially
              estimated when public sources are incomplete.
            </li>
            <li>
              Coordinates are approximate centroids for mapping, not surveyed
              site geometries.
            </li>
            <li>
              Status values (including “delayed”) are chosen to demonstrate
              product behaviour, not to accuse implementers.
            </li>
            <li>
              Contractor names and some entity labels are placeholders where
              public detail was unavailable.
            </li>
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            What we do not claim
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Real-time disbursement or expenditure from IFMIS or donors.</li>
            <li>Complete national coverage of all climate-tagged spending.</li>
            <li>
              Legal findings of misuse — integrity reporting is not live on this
              demo.
            </li>
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            Open access
          </h2>
          <p className="mt-3 text-sm text-muted">
            Machine-readable copies of the current demo dataset:
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

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            Path to official data
          </h2>
          <p className="mt-3 text-sm text-muted">
            When pilot agreements exist, records will be replaced or
            supplemented by council and ministry updates, imports from open
            standards (e.g. IATI / Open Contracting where available), and clear
            provenance fields on every project page.
          </p>

          <p className="mt-8">
            <Link
              href="/projects"
              className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Browse the registry
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
