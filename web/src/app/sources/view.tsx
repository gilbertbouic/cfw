"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SourceBanner } from "@/components/SourceBanner";
import { headlines } from "@/data/headlines";
import { getAllProjects } from "@/data/projects";
import { LEDGER_REVIEWED } from "@/data/types";
import type { HeadlineId } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageProvider";

export function SourcesView() {
  const { dict } = useI18n();
  const copy = dict.sources;
  const projects = getAllProjects();
  const [beforeEmail, afterEmail] = copy.corrections
    .replace("{date}", LEDGER_REVIEWED)
    .split("{email}");

  return (
    <>
      <SourceBanner />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-12 sm:py-14">
        <Container className="prose-cfw max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-foreground">
            {copy.rulesTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {copy.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            {copy.headlineFigures}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {headlines.map((h) => {
              const local = dict.headlines[h.id as HeadlineId];
              return (
                <li key={h.id}>
                  <span className="font-semibold text-foreground">
                    {h.display}
                  </span>{" "}
                  - {local.label}.{" "}
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
              );
            })}
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
            {copy.registryRecords}
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
            {copy.openDownloads}
          </h2>
          <p className="mt-3 text-sm text-muted">{copy.csvNote}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/api/projects" className="font-semibold text-primary">
                {copy.jsonLink}
              </a>
            </li>
            <li>
              <a href="/api/projects.csv" className="font-semibold text-primary">
                {copy.csvLink}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm text-muted">
            {beforeEmail}
            <a href="mailto:support@mkweli.tech" className="font-semibold text-primary">
              support@mkweli.tech
            </a>
            {afterEmail}
          </p>
        </Container>
      </section>
    </>
  );
}
