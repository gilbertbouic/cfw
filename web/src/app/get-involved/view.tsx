"use client";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { useI18n } from "@/i18n/LanguageProvider";

export function GetInvolvedView() {
  const { dict } = useI18n();
  const copy = dict.getInvolved;
  const [beforeSources, afterSources] = copy.transparencyBody.split("{sources}");

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.paths.map((p) => (
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
                {copy.formTitle}
              </h2>
              <p className="mt-2 text-sm text-muted">{copy.formLead}</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-border bg-primary-soft/50 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {copy.directContact}
                </h2>
                <p className="mt-3 text-sm text-foreground">
                  <a
                    href="mailto:support@mkweli.tech"
                    className="text-lg font-semibold text-primary hover:text-primary-dark"
                  >
                    support@mkweli.tech
                  </a>
                </p>
                <p className="mt-2 text-sm text-muted">{copy.preferEmail}</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {copy.project}
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-foreground">
                  <li>
                    <span className="font-semibold">{copy.site} </span>
                    <a
                      href="https://cfw.mkweli.tech"
                      className="text-primary hover:underline"
                    >
                      cfw.mkweli.tech
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">{copy.repository} </span>
                    <a
                      href="https://github.com/gilbertbouic/cfw"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/gilbertbouic/cfw
                    </a>
                    <span className="text-muted"> {copy.publicRepo}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted">
                <p className="font-semibold text-foreground">
                  {copy.transparency}
                </p>
                <p className="mt-2">
                  {beforeSources}
                  <a href="/sources" className="font-semibold text-primary">
                    {copy.sourcesWord}
                  </a>
                  {afterSources}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
