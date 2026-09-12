import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Partner, pilot, fund, or contribute to Climate Fund Watch. Contact support@mkweli.tech.",
};

const paths = [
  {
    title: "Government & local councils",
    body: "Co-design a country pack, select pilot localities, and define data-sharing and response SLAs.",
  },
  {
    title: "Donors & climate funds",
    body: "Support the 12-month reference pilot envelope or multi-country product build as a digital public good.",
  },
  {
    title: "Civil society & media",
    body: "Shape citizen reporting categories, verification workflows, and open-data usability for watchdogs.",
  },
  {
    title: "Technologists & researchers",
    body: "Contribute to schemas, open-source public core, hazard layers, and independent analysis of published data.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Build the climate finance accountability layer with us"
        description="Whether you represent a ministry, council, donor, CSO, newsroom, or technical partner — use the form below or email support@mkweli.tech."
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {paths.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h2 className="text-base font-semibold text-foreground">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Contact form
              </h2>
              <p className="mt-2 text-sm text-muted">
                We read every message. Typical response within a few working
                days.
              </p>
              <div className="mt-5">
                <Suspense
                  fallback={
                    <div className="h-80 animate-pulse rounded-2xl bg-primary-soft/40" />
                  }
                >
                  <ContactForm thankYouUrl="/get-involved?sent=1" />
                </Suspense>
              </div>
            </div>

            <aside className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-border bg-primary-soft/50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Direct contact
                </h2>
                <p className="mt-3 text-sm text-foreground">
                  <a
                    href="mailto:support@mkweli.tech"
                    className="text-lg font-semibold text-primary hover:text-primary-dark"
                  >
                    support@mkweli.tech
                  </a>
                </p>
                <p className="mt-2 text-sm text-muted">
                  Prefer email? Include organisation, country/locality, interest
                  area, and timeline.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Project
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>
                    <span className="font-semibold">Site: </span>
                    <a
                      href="https://cfw.mkweli.tech"
                      className="text-primary hover:underline"
                    >
                      cfw.mkweli.tech
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">Repository: </span>
                    <a
                      href="https://github.com/gilbertbouic/cfw"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/gilbertbouic/cfw
                    </a>
                    <span className="text-muted"> (public)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted">
                <p className="font-semibold text-foreground">
                  Transparency note
                </p>
                <p className="mt-2">
                  Project and budget records on this site are compiled from
                  cited public documents. They are not a live government feed.
                  See{" "}
                  <a href="/sources" className="font-semibold text-primary">
                    sources
                  </a>
                  . The USD 550,000 Year-1 envelope mentioned in concept notes
                  is a proposed Climate Fund Watch pilot cost, not a Mauritius
                  climate-finance statistic.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
