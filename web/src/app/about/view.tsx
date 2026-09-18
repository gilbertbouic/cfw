"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { useI18n } from "@/i18n/LanguageProvider";

export function AboutView() {
  const { dict } = useI18n();
  const copy = dict.about;

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="prose-cfw lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              {copy.buildingTitle}
            </h2>
            <p className="mt-4 text-muted">{copy.buildingP1}</p>
            <p className="mt-4 text-muted">
              {copy.buildingP2a}{" "}
              <strong className="font-semibold text-foreground">
                {copy.buildingP2strong}
              </strong>{" "}
              {copy.buildingP2b}{" "}
              <strong className="font-semibold text-foreground">
                {copy.buildingP2strong2}
              </strong>{" "}
              {copy.buildingP2c}
            </p>
            <p className="mt-4 text-muted">
              {copy.buildingP3a}{" "}
              <strong className="font-semibold text-foreground">
                {copy.buildingP3name}
              </strong>
              {copy.buildingP3b}{" "}
              <strong className="font-semibold text-foreground">
                {copy.buildingP3brand}
              </strong>
              {copy.buildingP3c}
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {copy.oneLine}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {copy.oneLineBody}
            </p>
            <hr className="my-5 border-border" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {copy.productStatus}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• {copy.statusLive1}</li>
              <li>• {copy.statusLive2}</li>
              <li>• {copy.statusProposed}</li>
            </ul>
            <Link
              href="/problem-solution"
              className="mt-5 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
            >
              {copy.readProblem}
            </Link>
          </aside>
        </Container>
      </section>

      <section className="border-y border-border bg-card py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {copy.whoTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{copy.whoLead}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.audiences.map((a) => (
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
              {copy.principlesTitle}
            </h2>
            <p className="mt-3 text-muted">{copy.principlesLead}</p>
            <ul className="mt-6 space-y-3">
              {copy.principles.map((p) => (
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
              {copy.pilotTitle}
            </h2>
            <p className="mt-3 text-sm text-muted">{copy.pilotBody}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {copy.indicativeBudget}
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  {copy.indicativeBudgetValue}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {copy.pilotGeography}
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  {copy.pilotGeographyValue}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {copy.hazardFocus}
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  {copy.hazardFocusValue}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {copy.scalePath}
                </dt>
                <dd className="mt-1 font-semibold text-foreground">
                  {copy.scalePathValue}
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-muted">{copy.pilotNote}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm text-muted">{copy.architectureCta}</p>
          <Link
            href="/get-involved"
            className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            {copy.getInvolved}
          </Link>
        </Container>
      </section>
    </>
  );
}
