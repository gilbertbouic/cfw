import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BudgetBar } from "@/components/BudgetBar";
import { Container } from "@/components/Container";
import { DemoBanner } from "@/components/DemoBanner";
import { StatusBadge } from "@/components/StatusBadge";
import { getAllProjects, getProjectById } from "@/data/projects";
import {
  formatMoney,
  HAZARD_LABELS,
  OBJECTIVE_LABELS,
  remainingBudget,
} from "@/data/types";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const rem = remainingBudget(project);

  return (
    <>
      <DemoBanner />
      <section className="border-b border-border bg-gradient-to-b from-primary-soft/50 to-background">
        <Container className="py-10 sm:py-12">
          <Link
            href="/projects"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            ← All projects
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="rounded-full bg-card px-2.5 py-0.5 text-xs font-medium text-muted shadow-sm">
              {OBJECTIVE_LABELS[project.climateObjective]}
            </span>
            <span className="text-xs text-muted">{project.id}</span>
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-muted">{project.summary}</p>
          {project.demoNote && (
            <p className="mt-4 max-w-3xl rounded-lg border border-warning/25 bg-accent-soft px-3 py-2 text-sm text-foreground">
              <span className="font-semibold text-accent">Demo note: </span>
              {project.demoNote}
            </p>
          )}
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                Follow the money
              </h2>
              <p className="mt-1 text-sm text-muted">
                Illustrative budget chain (approved → disbursed → spent).
              </p>
              <div className="mt-5">
                <BudgetBar
                  approved={project.budgetApproved}
                  disbursed={project.budgetDisbursed}
                  spent={project.budgetSpent}
                  currency={project.currency}
                  formatMoney={formatMoney}
                />
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    Co-financing
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {formatMoney(project.cofinancing, project.currency)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    Remaining (approx.)
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {formatMoney(rem, project.currency)}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    Start
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {project.startYear ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-muted">
                    End
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    {project.endYear ?? "—"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">
                Milestones
              </h2>
              <ul className="mt-4 space-y-3">
                {project.milestones.map((m) => (
                  <li key={m.label} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                        m.done ? "bg-success" : "bg-muted"
                      }`}
                      aria-hidden
                    >
                      {m.done ? "✓" : "·"}
                    </span>
                    <span
                      className={
                        m.done ? "text-foreground" : "text-muted"
                      }
                    >
                      {m.label}
                      <span className="ml-2 text-xs text-muted">
                        {m.done ? "Done" : "Pending"}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Sources</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {project.sources.map((s) => (
                  <li key={s}>
                    {s.startsWith("http") ? (
                      <a
                        href={s}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s}
                      </a>
                    ) : (
                      s
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Location
              </h2>
              <p className="mt-2 font-semibold text-foreground">
                {project.district}
              </p>
              <p className="text-sm text-muted">{project.adminUnit}</p>
              <p className="mt-2 text-xs text-muted">
                {project.lat.toFixed(4)}, {project.lng.toFixed(4)}
              </p>
              <Link
                href={`/map?focus=${project.id}`}
                className="mt-3 inline-flex text-sm font-semibold text-primary"
              >
                Show on map →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Hazards
              </h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.hazards.map((h) => (
                  <span
                    key={h}
                    className="rounded-md bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary-dark"
                  >
                    {HAZARD_LABELS[h]}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Funders
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-foreground">
                {project.funders.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                Implementing entities
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-foreground">
                {project.implementingEntities.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {project.contractors.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Contractors
                </h2>
                <ul className="mt-2 space-y-1 text-sm text-foreground">
                  {project.contractors.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
