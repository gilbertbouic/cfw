import Link from "next/link";
import { Container } from "@/components/Container";

const pillars = [
  {
    title: "Public project & budget tracker",
    body: "See who funds what, where it sits, how much was approved, disbursed, and spent — and whether works are on track.",
  },
  {
    title: "Map of resilience investments",
    body: "Flood, cyclone, and coastal projects on a shared map: planned, in progress, delayed, or completed.",
  },
  {
    title: "Community field evidence",
    body: "Residents and CSOs can flag stalled or poor-quality works with photos, location, and structured categories.",
  },
  {
    title: "Integrity-safe channel",
    body: "A strictly isolated whistleblower path for misuse and greenwashing — designed so anonymity is the product, not an afterthought.",
  },
  {
    title: "Local & national dashboards",
    body: "Councils and climate finance units get the same live picture: delays, bottlenecks, and response SLAs.",
  },
  {
    title: "Open data & scorecards",
    body: "Media, universities, and NGOs can audit independently — APIs, exports, and monthly public performance views.",
  },
];

const stats = [
  { label: "Reference pilot", value: "Mauritius" },
  { label: "Year-1 envelope", value: "USD 550k" },
  { label: "Pilot councils", value: "2 planned" },
  { label: "Product model", value: "Multi-country" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary-soft),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_#e8f2f6,_transparent_50%)]"
          aria-hidden
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            Phase B public site · Demo tracker coming next
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Making climate finance{" "}
            <span className="text-primary">traceable</span>,{" "}
            <span className="text-primary">accountable</span>, and{" "}
            <span className="text-primary">community-verified</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
            Climate Fund Watch is a digital public good for climate project
            transparency. Citizens and media see where adaptation money goes;
            communities can report what they see on the ground; integrity risks
            can be raised safely.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/problem-solution"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              See the problem &amp; solution
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:bg-primary-soft/40"
            >
              About the platform
            </Link>
          </div>
          <p className="mt-6 max-w-xl text-sm text-muted">
            Reference pilot brand:{" "}
            <strong className="font-semibold text-foreground">
              ClimateFunds Watch Mauritius
            </strong>
            . Same core product, country-configurable everywhere.
          </p>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <Container className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-4 py-6 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {s.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                {s.value}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Why it matters */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Why it matters
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Climate money is rising. Visibility after allocation is not.
            </h2>
            <p className="mt-4 text-muted">
              Floods, cyclones, and coastal risk demand faster, fairer
              adaptation. Across countries — and in Mauritius as the first
              reference — fragmented reporting, weak site-level oversight, and
              unsafe integrity channels leave communities guessing where funds
              went and whether works delivered.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Where is the money?",
                body: "End-to-end budget chains: approved → disbursed → spent → remaining.",
              },
              {
                title: "Is it working?",
                body: "Milestones, delays, and field evidence — not only funding announcements.",
              },
              {
                title: "Can people speak safely?",
                body: "Public evidence for delivery issues; isolated channels for integrity risks.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Modules */}
      <section className="border-y border-border bg-primary-soft/35 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Platform modules
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                One platform. Six accountability layers.
              </h2>
            </div>
            <Link
              href="/problem-solution#solution"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Full solution detail →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Roadmap teaser */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Build path
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Public narrative first. Live tracker next.
              </h2>
              <p className="mt-4 text-muted">
                This site is the public face of Climate Fund Watch. The next
                release adds a demo project registry and map seeded with curated
                sample data from open sources and research — so citizens and
                media can experience the product before institutional pilots go
                live.
              </p>
              <ol className="mt-6 space-y-3 text-sm">
                {[
                  "Phase B (now): Landing, About, Problem & Solution",
                  "Phase C: Project registry, filters, MapLibre map, open CSV",
                  "Phase D: Community evidence reporting",
                  "Later: Integrity vault, council consoles, country packs",
                ].map((step, idx) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                      {idx + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-foreground">
                For citizens &amp; media
              </p>
              <p className="mt-2 text-sm text-muted">
                You are the first audience. Expect plain language, mobile-first
                design, and clear labels when data is demo vs official.
              </p>
              <hr className="my-5 border-border" />
              <p className="text-sm font-semibold text-foreground">
                For governments &amp; donors
              </p>
              <p className="mt-2 text-sm text-muted">
                Mauritius concept materials describe a 12-month, two-council
                pilot (~USD 550k). The product itself is multi-tenant and
                reusable across SIDS and beyond.
              </p>
              <Link
                href="/get-involved"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-dark sm:w-auto"
              >
                Get involved
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="border-t border-border bg-primary text-white">
        <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Every climate unit of currency should reach a place and a result.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/85">
              Help us stand up the public tracker, pilot councils, and integrity
              safeguards.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="inline-flex shrink-0 items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-primary-soft"
          >
            Partner with Climate Fund Watch
          </Link>
        </Container>
      </section>
    </>
  );
}
