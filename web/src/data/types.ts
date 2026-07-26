export type ProjectStatus =
  | "pipeline"
  | "approved"
  | "in_progress"
  | "delayed"
  | "completed"
  | "cancelled";

export type ClimateObjective =
  | "adaptation"
  | "mitigation"
  | "cross_cutting";

export type HazardType =
  | "flood"
  | "cyclone"
  | "coastal"
  | "drought"
  | "heat"
  | "biodiversity"
  | "energy_transition"
  | "multi";

export type Project = {
  id: string;
  title: string;
  summary: string;
  climateObjective: ClimateObjective;
  hazards: HazardType[];
  status: ProjectStatus;
  country: string;
  countryCode: string;
  adminUnit: string;
  district: string;
  lat: number;
  lng: number;
  funders: string[];
  implementingEntities: string[];
  contractors: string[];
  currency: string;
  budgetApproved: number;
  budgetDisbursed: number;
  budgetSpent: number;
  cofinancing: number;
  startYear: number | null;
  endYear: number | null;
  milestones: { label: string; done: boolean }[];
  sources: string[];
  demoNote?: string;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  pipeline: "Pipeline",
  approved: "Approved",
  in_progress: "In progress",
  delayed: "Delayed",
  completed: "Completed",
  cancelled: "Cancelled",
};

export const STATUS_COLORS: Record<ProjectStatus, string> = {
  pipeline: "#64748b",
  approved: "#1f6f8b",
  in_progress: "#0d6e5f",
  delayed: "#c45c26",
  completed: "#1b7f5a",
  cancelled: "#94a3b8",
};

export const OBJECTIVE_LABELS: Record<ClimateObjective, string> = {
  adaptation: "Adaptation",
  mitigation: "Mitigation",
  cross_cutting: "Cross-cutting",
};

export const HAZARD_LABELS: Record<HazardType, string> = {
  flood: "Flood",
  cyclone: "Cyclone",
  coastal: "Coastal / sea-level",
  drought: "Drought",
  heat: "Heat",
  biodiversity: "Biodiversity / ecosystems",
  energy_transition: "Energy transition",
  multi: "Multi-hazard",
};

export function formatMoney(amount: number, currency = "USD"): string {
  if (amount == null || Number.isNaN(amount)) return "—";
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function remainingBudget(p: Project): number {
  return Math.max(0, p.budgetApproved + p.cofinancing - p.budgetSpent);
}
