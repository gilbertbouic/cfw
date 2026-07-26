import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Climate Fund Watch is, who it serves, and how Mauritius anchors the first country pack.",
};

const audiences = [
  {
    title: "Citizens & residents",
    body: "Find projects near you, understand budgets in plain language, and submit field evidence when delivery fails.",
  },
  {
    title: "Media & researchers",
    body: "Use open project lists, budget chains, and (soon) machine-readable exports to audit claims independently.",
  },
  {
    title: "Local authorities",
    body: "Update milestones, see delay alerts, and respond to community reports under clear SLAs.",
  },
  {
    title: "National units & donors",
    body: "Portfolio oversight, transparency scorecards, and evidence for results-based climate finance.",
  },
  {
    title: "CSOs & verifiers",
    body: "Confirm or dispute field signals and strengthen independent oversight without gatekeeping public data.",
  },
  {
    title: "Whistleblowers",
    body: "Report integrity risks through a cryptographically isolated channel with case-code follow-up — never mixed with public identity graphs.",
  },
];

const principles = [
  "Two-zone architecture: public transparency and whistleblower data never share identity links.",
  "Open by default for public money; anonymous by default for integrity reports.",
  "Country-configurable, not country-forked — one codebase, country packs for law, language, and boundaries.",
  "Mobile-first and offline-aware so low-connectivity communities can participate.",
  "Security and privacy are product features, not compliance afterthoughts.",
  "Action over dashboards: every alert should have an owner, an SLA, and a public aggregate outcome.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A digital public good for climate finance accountability"
        description="Climate Fund Watch combines open project tracking, community verification, and a hard-isolated integrity channel. Mauritius is the reference pilot; the platform is designed for any country."
      />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="prose-cfw lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              What we are building
            </h2>
            <p className="mt-4 text-muted">
              Climate finance is mobilizing at speed worldwide, but delivery
              often fails for the same reasons: fragmented project reporting,
              weak budget-to-site traceability, limited local authority
              visibility, closed data, and unsafe or absent integrity channels.
            </p>
            <p className="mt-4 text-muted">
              Climate Fund Watch is the shared accountability layer: a{" "}
              <strong className="font-semibold text-foreground">
                multi-tenant, multi-country platform
              </strong>{" "}
              with a common core and configurable{" "}
              <strong className="font-semibold text-foreground">
                country packs
              </strong>{" "}
              (legal text, languages, admin boundaries, funder catalogs, hazard
              layers).
            </p>
            <p className="mt-4 text-muted">
              The product name is global —{" "}
              <strong className="font-semibold text-foreground">
                Climate Fund Watch
              </strong>
              . The first reference implementation is branded{" "}
              <strong className="font-semibold text-foreground">
                ClimateFunds Watch Mauritius
              </strong>
              , seeded from concept notes, active project research, and a
              proposed 12-month pilot in two councils.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              One-line definition
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              A mobile-first climate finance transparency platform with open
              project/budget tracking, community evidence, and a
              cryptographically isolated anonymous integrity channel —
              configurable for any country.
            </p>
            <hr className="my-5 border-border" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Product status
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Public narrative site (this site) — live in development</li>
              <li>• Demo registry &amp; map — next build phase</li>
              <li>• Full MVP modules — planned under product build plan</li>
            </ul>
            <Link
              href="/problem-solution"
              className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Read problem &amp; solution →
            </Link>
          </aside>
        </Container>
      </section>

      <section className="border-y border-border bg-card py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Who it serves
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Designed for the full accountability ecosystem — not only one
            ministry dashboard.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <article
                key={a.title}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{a.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Product principles
            </h2>
            <p className="mt-3 text-muted">
              Non-negotiables from the Climate Fund Watch product build plan.
              They guide engineering, governance, and country onboarding.
            </p>
            <ul className="mt-6 space-y-3">
              {principles.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-primary-soft/50 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Mauritius reference pilot
            </h2>
            <p className="mt-3 text-sm text-muted">
              Concept materials describe a 12-month implementation to publish a
              unified registry of adaptation projects in pilot councils, track
              budget flows and milestones, enable citizen oversight, establish
              confidential reporting workflows, and produce public transparency
              bulletins.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Indicative budget
                </dt>
                <dd className="mt-1 font-semibold text-foreground">USD 550,000</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Pilot geography
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  2 local councils
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Hazard focus
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  Floods &amp; cyclones
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Scale path
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  National + SIDS
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-muted">
              Pilot numbers and institutional arrangements are proposals for
              partnership discussions — not commitments of any government agency
              unless formally adopted.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm text-muted">
            Want the full architecture, modules, and security model? See the
            product build plan in the project repository.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Get involved
          </Link>
        </Container>
      </section>
    </>
  );
}
