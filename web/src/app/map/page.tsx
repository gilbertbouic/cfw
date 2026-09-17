import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WorksSchematic } from "@/components/WorksSchematic";
import { SourceBanner } from "@/components/SourceBanner";
import { getAllProjects } from "@/data/projects";
import {
  getSpendPlaces,
  projectsWithoutSpendPlaces,
} from "@/data/spend-places";
import { ISLAND_LABELS, PIN_CAVEAT } from "@/data/types";

export const metadata: Metadata = {
  title: "Where works were reported",
  description:
    "Named places in public climate-finance reports for Mauritius, with site-level spend or not reported.",
  alternates: { canonical: "/map" },
  openGraph: { url: "/map" },
};

export default function MapPage() {
  const places = getSpendPlaces();
  const onMap = places.filter((p) => p.includeInDefaultView);
  const offFrame = places.filter((p) => !p.includeInDefaultView);
  const withoutSites = projectsWithoutSpendPlaces();
  const projects = getAllProjects();
  const titleById = Object.fromEntries(projects.map((p) => [p.id, p.title]));

  return (
    <>
      <SourceBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Places
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Where public reports name a place
              </h1>
              <p className="mt-3 max-w-2xl text-muted">
                A schematic of Mauritius and Rodrigues — not a world map — with
                localities named in CEB, UNDP, GCF or Adaptation Fund documents.
                Site-level spend is almost never published, so those lines say{" "}
                <strong className="font-semibold text-foreground">
                  not reported
                </strong>
                . {PIN_CAVEAT}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
            >
              Registry list
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container className="space-y-10">
          <WorksSchematic places={places} />
          <p className="text-center text-xs text-muted">
            {onMap.length} places on the island figures · no tile server
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Named in reports
            </h2>
            <p className="mt-2 text-sm text-muted">
              Works or activity reported at these places. A batch grant (for
              example USD 7.5 million for 14 MW of batteries) is not divided
              across substations.
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-primary-soft/40 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Place</th>
                    <th className="hidden px-4 py-3 font-semibold sm:table-cell">
                      Island
                    </th>
                    <th className="px-4 py-3 font-semibold">Site-level spend</th>
                    <th className="hidden px-4 py-3 font-semibold md:table-cell">
                      Source
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
                        {ISLAND_LABELS[p.island]}
                        {!p.includeInDefaultView ? " · off map frame" : ""}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {p.spendAmount == null
                          ? "Not reported"
                          : `${p.spendCurrency} ${p.spendAmount.toLocaleString("en")}`}
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
                Off this map frame:{" "}
                {offFrame.map((p) => p.name).join("; ")}.
              </p>
            )}
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Site-level spend not reported
            </h2>
            <p className="mt-2 text-sm text-muted">
              These ledger records have no named works site in the documents
              reviewed. Money may still have been approved or disbursed to an
              implementer — see the project page.
            </p>
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
                    Not reported at site
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted">
            Linked records:{" "}
            {[...new Set(places.map((p) => titleById[p.projectId]))].join(" · ")}
          </p>
        </Container>
      </section>
    </>
  );
}
