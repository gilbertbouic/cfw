import Link from "next/link";
import type { Project } from "@/data/types";
import {
  formatMoney,
  HAZARD_LABELS,
  OBJECTIVE_LABELS,
} from "@/data/types";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/35 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <StatusBadge status={project.status} />
        <span className="text-xs font-medium text-muted">
          {OBJECTIVE_LABELS[project.climateObjective]}
        </span>
      </div>
      <h2 className="mt-3 text-base font-semibold leading-snug text-foreground">
        <Link
          href={`/projects/${project.id}`}
          className="hover:text-primary"
        >
          {project.title}
        </Link>
      </h2>
      <p className="mt-2 line-clamp-3 text-sm text-muted">{project.summary}</p>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <dt className="font-semibold uppercase tracking-wide text-muted">
            District
          </dt>
          <dd className="mt-0.5 text-foreground">{project.district}</dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-wide text-muted">
            Approved
          </dt>
          <dd className="mt-0.5 text-foreground">
            {formatMoney(project.budgetApproved, project.currency)}
          </dd>
        </div>
      </dl>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.hazards.slice(0, 3).map((h) => (
          <span
            key={h}
            className="rounded-md bg-primary-soft px-2 py-0.5 text-[11px] font-medium text-primary-dark"
          >
            {HAZARD_LABELS[h]}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.id}`}
        className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
      >
        View project →
      </Link>
    </article>
  );
}
