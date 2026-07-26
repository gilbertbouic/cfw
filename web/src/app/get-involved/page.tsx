import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Partner, pilot, fund, or contribute to Climate Fund Watch.",
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
        description="Whether you represent a ministry, council, donor, CSO, newsroom, or technical partner — we are assembling the first public demo and the Mauritius reference pilot path."
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

          <div className="mt-10 rounded-2xl border border-border bg-primary-soft/50 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              For partnership, pilot, or technical conversations, reach out via
              the project maintainer on GitHub or your existing Mkweli / Climate
              Fund Watch contact channel. A dedicated public contact form can be
              added once the preferred email and hosting domain are confirmed.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground">
              <li>
                <span className="font-semibold">Repository: </span>
                <a
                  href="https://github.com/gilbertbouic/climate-fund-watch"
                  className="text-primary underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/gilbertbouic/climate-fund-watch
                </a>
              </li>
              <li>
                <span className="font-semibold">What to include: </span>
                organization, country/locality, interest area (pilot, funding,
                data, tech), and timeline.
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted">
            <p className="font-semibold text-foreground">Transparency note</p>
            <p className="mt-2">
              This website is an early public face of the product. Project and
              budget data on the forthcoming demo tracker will be labeled as
              curated sample data until official data-sharing agreements and
              live feeds are in place.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
