"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import {
  type GeographyScope,
  type HazardType,
  type ProjectStatus,
} from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

type Props = {
  funders: string[];
};

export function ProjectFilters({ funders }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const { dict } = useI18n();
  const copy = dict.projectFilters;

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
        {copy.search}
        <input
          type="search"
          name="q"
          defaultValue={searchParams.get("q") ?? ""}
          placeholder={copy.searchPlaceholder}
          className={`${selectClass} mt-1`}
          onChange={(e) => update("q", e.target.value)}
        />
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        {copy.status}
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("status") ?? "all"}
          onChange={(e) => update("status", e.target.value)}
        >
          <option value="all">{copy.allStatuses}</option>
          {(Object.keys(dict.labels.status) as ProjectStatus[]).map((s) => (
            <option key={s} value={s}>
              {dict.labels.status[s]}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        {copy.geography}
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("geography") ?? "all"}
          onChange={(e) => update("geography", e.target.value)}
        >
          <option value="all">{copy.allGeographies}</option>
          {(Object.keys(dict.labels.geography) as GeographyScope[]).map((g) => (
            <option key={g} value={g}>
              {dict.labels.geography[g]}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        {copy.hazard}
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("hazard") ?? "all"}
          onChange={(e) => update("hazard", e.target.value)}
        >
          <option value="all">{copy.allHazards}</option>
          {(Object.keys(dict.labels.hazard) as HazardType[]).map((h) => (
            <option key={h} value={h}>
              {dict.labels.hazard[h]}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted">
        {copy.objective}
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("objective") ?? "all"}
          onChange={(e) => update("objective", e.target.value)}
        >
          <option value="all">{copy.allObjectives}</option>
          {Object.entries(dict.labels.objective).map(([k, label]) => (
            <option key={k} value={k}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2 lg:col-span-1 xl:col-span-2">
        {copy.funder}
        <select
          className={`${selectClass} mt-1`}
          value={searchParams.get("funder") ?? "all"}
          onChange={(e) => update("funder", e.target.value)}
        >
          <option value="all">{copy.allFunders}</option>
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
