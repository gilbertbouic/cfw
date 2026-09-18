"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { useI18n } from "@/i18n/LanguageProvider";

export function ProblemSolutionView() {
  const { dict } = useI18n();
  const copy = dict.problemSolution;

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {copy.problemEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {copy.problemTitle}
            </h2>
            <p className="mt-4 text-muted">{copy.problemLead}</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary-soft/60 text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold sm:px-5">
                    {copy.failureMode}
                  </th>
                  <th className="px-4 py-3 font-semibold sm:px-5">
                    {copy.citizenImpact}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.failures.map((f, i) => (
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

      <section className="border-y border-border bg-primary text-white">
        <Container className="py-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {copy.tocEyebrow}
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed sm:text-xl">
            <strong className="font-semibold">{copy.tocIf}</strong>{" "}
            {copy.tocIfBody}{" "}
            <strong className="font-semibold">{copy.tocAnd}</strong>{" "}
            {copy.tocAndBody}{" "}
            <strong className="font-semibold">{copy.tocThen}</strong>{" "}
            {copy.tocThenBody}
          </p>
        </Container>
      </section>

      <section id="solution" className="scroll-mt-20 py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {copy.solutionEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {copy.solutionTitle}
            </h2>
            <p className="mt-4 text-muted">{copy.solutionLead}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {copy.modules.map((m) => (
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

      <section className="border-t border-border bg-primary-soft/40 py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {copy.howTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{copy.howLead}</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.flow.map((step, i) => (
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

      <section className="py-14 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              {copy.nowTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• {copy.nowItems.narrative}</li>
              <li>
                •{" "}
                <Link href="/projects" className="font-semibold text-primary">
                  {copy.nowItems.registry}
                </Link>
                ,{" "}
                <Link href="/map" className="font-semibold text-primary">
                  {copy.nowItems.map}
                </Link>
                {copy.nowItems.openData}
              </li>
              <li>• {copy.nowItems.plan}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground">
              {copy.nextTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {copy.nextItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </Container>
        <Container className="mt-10">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-primary px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-white/90 sm:text-base">
              {copy.cta}
            </p>
            <Link
              href="/get-involved"
              className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              {copy.getInvolved}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
