import { getAllProjects } from "@/data/projects";
import {
  attributedMauritiusAmount,
  type HazardType,
  type Project,
  type ProjectStatus,
} from "@/data/types";

export type ProjectFilters = {
  q?: string;
  status?: ProjectStatus | "all";
  district?: string;
  hazard?: HazardType | "all";
  funder?: string;
  objective?: string;
  geography?: string;
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
  const geography =
    filters.geography && filters.geography !== "all" ? filters.geography : null;

  return list.filter((p) => {
    if (status && p.status !== status) return false;
    if (district && p.district !== district && p.adminUnit !== district)
      return false;
    if (hazard && !p.hazards.includes(hazard)) return false;
    if (objective && p.climateObjective !== objective) return false;
    if (geography && p.geographyScope !== geography) return false;
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
        p.id,
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
    "kind",
    "status",
    "climate_objective",
    "geography_scope",
    "mauritius_share_known",
    "country",
    "district",
    "admin_unit",
    "lat",
    "lng",
    "funders",
    "implementing_entities",
    "currency",
    "amount_label",
    "amount",
    "cofinancing",
    "total_value",
    "disbursed",
    "mauritius_share",
    "start_year",
    "end_year",
    "source_urls",
    "last_reviewed",
    "confidence",
  ];

  const escape = (v: string | number | null | undefined) => {
    const s = v == null ? "" : String(v);
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const rows = list.map((p) =>
    [
      p.id,
      p.title,
      p.kind,
      p.status,
      p.climateObjective,
      p.geographyScope,
      attributedMauritiusAmount(p) != null ? "yes" : "no",
      p.country,
      p.district,
      p.adminUnit,
      p.lat,
      p.lng,
      p.funders.join("|"),
      p.implementingEntities.join("|"),
      p.currency,
      p.amountLabel,
      p.amount,
      p.cofinancing,
      p.totalValue,
      p.disbursed,
      p.mauritiusShare,
      p.startYear ?? "",
      p.endYear ?? "",
      p.sources.map((s) => s.url).join("|"),
      p.lastReviewed,
      p.confidence,
    ]
      .map(escape)
      .join(","),
  );

  return [headers.join(","), ...rows].join("\n");
}

export function portfolioStats(list = getAllProjects()) {
  const mauritiusAttributed = list.filter(
    (p) => attributedMauritiusAmount(p) != null,
  );
  const attributedSum = mauritiusAttributed
    .filter((p) => p.currency === "USD")
    .reduce((s, p) => s + (attributedMauritiusAmount(p) ?? 0), 0);
  const regional = list.filter((p) => p.geographyScope === "multi_country").length;
  const completed = list.filter((p) => p.status === "completed").length;
  return {
    count: list.length,
    attributedSum,
    attributedCount: mauritiusAttributed.length,
    regional,
    completed,
  };
}
