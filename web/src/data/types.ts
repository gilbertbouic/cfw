export type ProjectStatus =
  | "approved"
  | "under_implementation"
  | "completed"
  | "unknown";

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

export type RecordKind =
  | "multilateral_project"
  | "readiness"
  | "grant_programme";

export type GeographyScope = "site" | "national" | "multi_country" | "unknown";

export type Confidence =
  | "official_register"
  | "government_document"
  | "secondary_report";

export type SourceRef = {
  title: string;
  url: string;
  publisher: string;
  asOf: string;
  notes?: string;
};

export type PublishedResult = {
  label: string;
  sourceUrl: string;
};

export type PlacePrecision = "locality" | "island";

export type SpendPlace = {
  id: string;
  projectId: string;
  name: string;
  island: "mauritius" | "rodrigues" | "agalega";
  lat: number;
  lng: number;
  includeInDefaultView: boolean;
  precision: PlacePrecision;
  worksNote: string;
  spendAmount: number | null;
  spendCurrency: string;
  spendNote: string;
  sourceUrl: string;
  sourceTitle: string;
  sourcePublisher: string;
  asOf: string;
};

export const ISLAND_LABELS: Record<SpendPlace["island"], string> = {
  mauritius: "Mauritius",
  rodrigues: "Rodrigues",
  agalega: "Agaléga",
};

export const PRECISION_LABELS: Record<PlacePrecision, string> = {
  locality: "Named locality",
  island: "Island-level",
};

export const PIN_CAVEAT =
  "Approximate locality for a place named in a public report — not a surveyed works polygon.";

export type Project = {
  id: string;
  title: string;
  summary: string;
  kind: RecordKind;
  climateObjective: ClimateObjective;
  hazards: HazardType[];
  status: ProjectStatus;
  country: string;
  countryCode: string;
  geographyScope: GeographyScope;
  geographyNote: string;
  adminUnit: string;
  district: string;
  lat: number | null;
  lng: number | null;
  pinNote?: string;
  showOnMap: boolean;
  funders: string[];
  implementingEntities: string[];
  currency: string;
  amountLabel: string;
  amount: number | null;
  amountNote?: string;
  cofinancing: number | null;
  cofinancingNote?: string;
  totalValue: number | null;
  totalValueNote?: string;
  disbursed: number | null;
  disbursedNote?: string;
  mauritiusShare: number | null;
  mauritiusShareNote?: string;
  startYear: number | null;
  endYear: number | null;
  publishedResults: PublishedResult[];
  sources: SourceRef[];
  lastReviewed: string;
  confidence: Confidence;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  approved: "Approved",
  under_implementation: "Under implementation",
  completed: "Completed",
  unknown: "Unknown",
};

export const STATUS_COLORS: Record<ProjectStatus, string> = {
  approved: "#1f6f8b",
  under_implementation: "#0d6e5f",
  completed: "#1b7f5a",
  unknown: "#64748b",
};

export const OBJECTIVE_LABELS: Record<ClimateObjective, string> = {
  adaptation: "Adaptation",
  mitigation: "Mitigation",
  cross_cutting: "Cross-cutting",
};

export const KIND_LABELS: Record<RecordKind, string> = {
  multilateral_project: "Multilateral project",
  readiness: "Readiness / NAP",
  grant_programme: "Grant programme",
};

export const GEOGRAPHY_LABELS: Record<GeographyScope, string> = {
  site: "Named sites",
  national: "National / multi-island",
  multi_country: "Multi-country",
  unknown: "Unknown",
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

export const CONFIDENCE_LABELS: Record<Confidence, string> = {
  official_register: "Official funder register",
  government_document: "Government document",
  secondary_report: "Secondary public report",
};

export const LEDGER_REVIEWED = "2026-09-16";

export function formatMoney(
  amount: number | null | undefined,
  currency = "USD",
): string {
  if (amount == null || Number.isNaN(amount)) return "Not published";
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatMur(amount: number | null | undefined): string {
  if (amount == null || Number.isNaN(amount)) return "Not published";
  return `${new Intl.NumberFormat("en", { maximumFractionDigits: 1 }).format(amount)} MUR`;
}

/** Display-only: never invent a remainder from unpublished spent figures. */
export function attributedMauritiusAmount(p: Project): number | null {
  if (p.mauritiusShare != null) return p.mauritiusShare;
  if (p.geographyScope === "multi_country") return null;
  return p.amount;
}
