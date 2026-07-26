import { getAllProjects } from "@/data/projects";
import type { HazardType, Project, ProjectStatus } from "@/data/types";

export type ProjectFilters = {
  q?: string;
  status?: ProjectStatus | "all";
  district?: string;
  hazard?: HazardType | "all";
  funder?: string;
  objective?: string;
};

export function filterProjects(
  filters: ProjectFilters,
  list = getAllProjects(),
): Project[] {
  const q = filters.q?.trim().toLowerCase() ?? "";
  const status = filters.status && filters.status !== "all" ? filters.status : null;
  const district =
    filters.district && filters.district !== "all" ? filters.district : null;
  const hazard =
    filters.hazard && filters.hazard !== "all" ? filters.hazard : null;
  const funder =
    filters.funder && filters.funder !== "all"
      ? filters.funder.toLowerCase()
      : null;
  const objective =
    filters.objective && filters.objective !== "all" ? filters.objective : null;

  return list.filter((p) => {
    if (status && p.status !== status) return false;
    if (district && p.district !== district && p.adminUnit !== district)
      return false;
    if (hazard && !p.hazards.includes(hazard)) return false;
    if (objective && p.climateObjective !== objective) return false;
    if (
      funder &&
      !p.funders.some((f) => f.toLowerCase().includes(funder))
    )
      return false;
    if (q) {
      const hay = [
        p.title,
        p.summary,
        p.district,
        p.adminUnit,
        ...p.funders,
        ...p.implementingEntities,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function uniqueDistricts(list = getAllProjects()): string[] {
  return Array.from(new Set(list.map((p) => p.district))).sort();
}

export function uniqueFunders(list = getAllProjects()): string[] {
  return Array.from(new Set(list.flatMap((p) => p.funders))).sort();
}

export function projectsToCsv(list: Project[]): string {
  const headers = [
    "id",
    "title",
    "status",
    "climate_objective",
    "hazards",
    "country",
    "district",
    "admin_unit",
    "lat",
    "lng",
    "funders",
    "implementing_entities",
    "currency",
    "budget_approved",
    "budget_disbursed",
    "budget_spent",
    "cofinancing",
    "start_year",
    "end_year",
  ];

  const escape = (v: string | number | null) => {
    const s = v == null ? "" : String(v);
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const rows = list.map((p) =>
    [
      p.id,
      p.title,
      p.status,
      p.climateObjective,
      p.hazards.join("|"),
      p.country,
      p.district,
      p.adminUnit,
      p.lat,
      p.lng,
      p.funders.join("|"),
      p.implementingEntities.join("|"),
      p.currency,
      p.budgetApproved,
      p.budgetDisbursed,
      p.budgetSpent,
      p.cofinancing,
      p.startYear ?? "",
      p.endYear ?? "",
    ]
      .map(escape)
      .join(","),
  );

  return [headers.join(","), ...rows].join("\n");
}

export function portfolioStats(list = getAllProjects()) {
  const approved = list.reduce((s, p) => s + p.budgetApproved, 0);
  const spent = list.reduce((s, p) => s + p.budgetSpent, 0);
  const delayed = list.filter((p) => p.status === "delayed").length;
  return {
    count: list.length,
    approved,
    spent,
    delayed,
  };
}
