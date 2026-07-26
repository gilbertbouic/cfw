"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import {
  HAZARD_LABELS,
  OBJECTIVE_LABELS,
  STATUS_LABELS,
  type HazardType,
  type ProjectStatus,
} from "@/data/types";

type Props = {
  districts: string[];
  funders: string[];
};

export function ProjectFilters({ districts, funders }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  const update = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value === "all") params.delete(key);
      else params.set(key, value);
      startTransition(() => {
        router.push(`/projects?${params.toString()}`);
      });
    },
    [router, searchParams],
  );

  const selectClass =
    "w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form
      className="grid gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      onSubmit={(e) => e.preventDefault()}
      aria-busy={pending}
    >
      <label className="block text-xs font-semibold uppercase tracking-wide text-muted xl:col-span-2">
        Search
        <input
          type="search"
          name="q"
          defaultValue={searchParams.get("q") ?? ""}
          placeholder="Title, funder, place…"
          className={`${selectClass} mt-1`}
          onChange={(e) => update("q", e.target.value)}
        />
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        Status
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("status") ?? "all"}
          onChange={(e) => update("status", e.target.value)}
        >
          <option value="all">All statuses</option>
          {(Object.keys(STATUS_LABELS) as ProjectStatus[]).map((s) => (
            <option key={s} value={s}>
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        District
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("district") ?? "all"}
          onChange={(e) => update("district", e.target.value)}
        >
          <option value="all">All districts</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        Hazard
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("hazard") ?? "all"}
          onChange={(e) => update("hazard", e.target.value)}
        >
          <option value="all">All hazards</option>
          {(Object.keys(HAZARD_LABELS) as HazardType[]).map((h) => (
            <option key={h} value={h}>
              {HAZARD_LABELS[h]}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        Objective
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("objective") ?? "all"}
          onChange={(e) => update("objective", e.target.value)}
        >
          <option value="all">All objectives</option>
          {Object.entries(OBJECTIVE_LABELS).map(([k, label]) => (
            <option key={k} value={k}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2 lg:col-span-1 xl:col-span-2">
        Funder
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("funder") ?? "all"}
          onChange={(e) => update("funder", e.target.value)}
        >
          <option value="all">All funders</option>
          {funders.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
