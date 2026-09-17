import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Problem & Solution",
  description:
    "Why climate finance delivery fails communities — and how Climate Fund Watch closes the gap.",
  alternates: { canonical: "/problem-solution" },
  openGraph: { url: "/problem-solution" },
};

const failures = [
  {
    mode: "Fragmented reporting",
    impact: "No single source of truth for projects, budgets, and status.",
  },
  {
    mode: "Weak budget-to-site traceability",
    impact: "Money disappears between approval and community-visible works.",
  },
  {
    mode: "Limited local authority visibility",
    impact: "Delays and mis-prioritization at the places most at risk.",
  },
  {
    mode: "Unsafe or absent integrity channels",
    impact: "Corruption and greenwashing go unreported.",
  },
  {
    mode: "Closed data",
    impact: "Media and NGOs cannot audit independently.",
  },
  {
    mode: "Language & connectivity barriers",
    impact: "Excluded communities cannot participate in oversight.",
  },
];

const modules = [
  {
    id: "M1",
    name: "Project registry",
    detail:
      "Master records for climate projects: actors, locations, lifecycle status, documents, and public change logs.",
  },
  {
    id: "M2",
    name: "Budget & fund flows",
    detail:
      "Source → instrument → appropriation → disbursement → expenditure → remaining, with co-financing fields.",
  },
  {
    id: "M3",
    name: "Map & milestones",
    detail:
      "MapLibre/OSM explorer with filters by hazard, status, funder, and admin unit; plan vs actual milestones.",
  },
  {
    id: "M4",
    name: "Community evidence",
    detail:
      "Guided reports for delay, quality, non-delivery, exclusion, environmental harm, and greenwashing signals.",
  },
  {
    id: "M5",
    name: "Integrity safe channel",
    detail:
      "Anonymous intake, case codes, encrypted attachments, handler workflow — hard-isolated from public identity data.",
  },
  {
    id: "M6",
    name: "Government ops consoles",
    detail:
      "Local and national dashboards for portfolio health, inboxes, SLAs, and controlled contributor updates.",
  },
  {
    id: "M7",
    name: "Open data & API",
    detail:
      "REST/CSV/GeoJSON exports, data dictionary, open license for public datasets.",
  },
  {
    id: "M8+",
    name: "Scorecards & green integrity",
    detail:
      "Delay alerts, monthly public scorecards, and checklist-based anti-greenwashing scores.",
  },
];

const flow = [
  "Fund approved / project listed",
  "Budget chain & milestones published",
  "Citizens submit geotagged field evidence",
  "Issues flagged and escalated under SLAs",
  "Officials respond; status updated publicly",
  "Scorecards & open data for independent audit",
];

export default function ProblemSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Problem & Solution"
        title="Climate finance without accountability fails the people who need it most"
        description="Rising hazards and larger portfolios mean little if communities cannot see projects, track money, or safely report failures. The modules below describe the product being built. Only the sourced public ledger is live."
      />

      {/* Problem */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              The problem
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Delivery fails for universal reasons
            </h2>
            <p className="mt-4 text-muted">
              From SIDS to large economies, adaptation and mitigation portfolios
              share the same governance gaps. Mauritius faces frequent floods
              and cyclones while mobilizing domestic and international climate
              finance — making transparent, community-checked delivery urgent.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary-soft/60 text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold sm:px-5">
                    Failure mode
                  </th>
                  <th className="px-4 py-3 font-semibold sm:px-5">
                    Citizen impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {failures.map((f, i) => (
                  <tr
                    key={f.mode}
                    className={i % 2 === 0 ? "bg-card" : "bg-background/80"}
                  >
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      {f.mode}
                    </td>
                    <td className="px-4 py-3 text-muted sm:px-5">{f.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Theory of change */}
      <section className="border-y border-border bg-primary text-white">
        <Container className="py-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            Theory of change
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed sm:text-xl">
            <strong className="font-semibold">If</strong> governments and
            partners publish climate projects and budget flows, communities can
            submit field evidence, and whistleblowers can report integrity risks
            safely — <strong className="font-semibold">and</strong> local and
            national actors act under clear SLAs —{" "}
            <strong className="font-semibold">then</strong> delays and misuse
            are detected earlier, trust rises, and adaptation resources reach
            vulnerable communities more fairly.
          </p>
        </Container>
      </section>

      {/* Solution */}
      <section id="solution" className="scroll-mt-20 py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              The solution
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Modular platform, two security zones
            </h2>
            <p className="mt-4 text-muted">
              Climate Fund Watch is designed as pluggable modules on a
              multi-tenant core. Public transparency data is open by default.
              Integrity reports would live in a separate vault with no identity
              join keys to the public zone. Community evidence, the integrity
              channel, and government consoles are not operating on this site.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {modules.map((m) => (
              <article
                key={m.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary-soft px-2 py-1 text-xs font-bold text-primary">
                    {m.id}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {m.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted">{m.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* User flow */}
      <section className="border-t border-border bg-primary-soft/40 py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            How it works
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Intended loop from funding decision to community verification and
            public accountability — a product design, not a description of live
            workflows.
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {flow.map((step, i) => (
              <li
                key={step}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm font-medium text-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What ships when */}
      <section className="py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              What you can use now
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Public narrative site (mission, problem, solution)</li>
              <li>
                •{" "}
                <Link href="/projects" className="font-semibold text-primary">
                  Demo project registry
                </Link>
                ,{" "}
                <Link href="/map" className="font-semibold text-primary">
                  map
                </Link>
                , and open CSV/JSON
              </li>
              <li>• Product build plan and Mauritius research pack in the repo</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              What comes next
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Community evidence form (delivery issues)</li>
              <li>• Official data-sharing and live council updates</li>
              <li>• Integrity vault &amp; council consoles after legal/security gates</li>
            </ul>
          </div>
        </Container>
        <Container className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-primary px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-white/90 sm:text-base">
              Ready to pilot, fund, or co-design a country pack?
            </p>
            <Link
              href="/get-involved"
              className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              Get involved
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
