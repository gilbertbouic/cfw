export type ReportType = "apr" | "ppr" | "evaluation" | "library";

export type DonorReport = {
  id: string;
  projectId: string;
  title: string;
  type: ReportType;
  reportingPeriod: string | null;
  coverDate: string | null;
  url: string;
  publisher: string;
  geographyNote?: string;
};

export const REPORT_TYPE_LABELS: Record<ReportType, string> = {
  apr: "Annual performance report",
  ppr: "Project performance report",
  evaluation: "Evaluation",
  library: "Report library",
};

/**
 * Public donor reports linked from GCF / AF / UNDP pages.
 * No assumed quarterly due dates. Missing years = not on the funder site reviewed.
 */
export const donorReports: DonorReport[] = [
  {
    id: "fp033-apr-2023",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2023",
    type: "apr",
    reportingPeriod: "2023",
    coverDate: "2024-08-02",
    url: "https://www.greenclimate.fund/document/2023-annual-performance-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-apr-2022",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2022",
    type: "apr",
    reportingPeriod: "2022",
    coverDate: "2023-07-11",
    url: "https://www.greenclimate.fund/document/2022-annual-performance-report-fp033accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-apr-2021",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2021",
    type: "apr",
    reportingPeriod: "2021",
    coverDate: null,
    url: "https://www.greenclimate.fund/document/2021-annual-performance-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-apr-2020",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2020",
    type: "apr",
    reportingPeriod: "2020",
    coverDate: "2021-08-19",
    url: "https://www.greenclimate.fund/document/2020-annual-performance-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-apr-2019",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2019",
    type: "apr",
    reportingPeriod: "2019",
    coverDate: "2020-03-01",
    url: "https://www.greenclimate.fund/document/2019-annual-performance-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-apr-2018",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2018",
    type: "apr",
    reportingPeriod: "2018",
    coverDate: "2019-03-01",
    url: "https://www.greenclimate.fund/document/2018-annual-performance-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-apr-2017",
    projectId: "mu-gcf-fp033",
    title: "FP033 Annual Performance Report 2017",
    type: "apr",
    reportingPeriod: "2017",
    coverDate: "2018-03-23",
    url: "https://www.greenclimate.fund/document/2017-annual-performance-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "fp033-eval-interim",
    projectId: "mu-gcf-fp033",
    title: "FP033 interim evaluation",
    type: "evaluation",
    reportingPeriod: null,
    coverDate: "2023-11-16",
    url: "https://www.greenclimate.fund/document/interim-evaluation-report-fp033-accelerating-transformational-shift-low-carbon-economy",
    publisher: "Green Climate Fund / UNDP",
  },
  {
    id: "af-coastal-library",
    projectId: "mu-af-coastal",
    title:
      "Adaptation Fund coastal programme — PPR, mid-term, completion and final evaluation",
    type: "library",
    reportingPeriod: null,
    coverDate: null,
    url: "https://www.adaptation-fund.org/project/climate-change-adaptation-programme-in-the-coastal-zone-of-mauritius/",
    publisher: "Adaptation Fund",
    geographyNote:
      "Individual PPR files are listed on the AF project page. UNDP marks the programme completed.",
  },
  {
    id: "af-coral-library",
    projectId: "mu-af-coral",
    title: "Adaptation Fund coral programme — project documents and PPRs",
    type: "library",
    reportingPeriod: null,
    coverDate: null,
    url: "https://www.adaptation-fund.org/project/restoring-marine-ecosystem-services-restoring-coral-reefs-meet-changing-climate-future-mauritius-seychelles/",
    publisher: "Adaptation Fund",
    geographyNote: "Regional (Mauritius and Seychelles).",
  },
  {
    id: "fp135-apr-2022",
    projectId: "mu-gcf-fp135",
    title: "FP135 Annual Performance Report 2022",
    type: "apr",
    reportingPeriod: "2022",
    coverDate: "2022-02-16",
    url: "https://www.greenclimate.fund/document/2022-annual-performance-report-fp135-ecosystem-based-adaptation-indian-ocean-eba-io",
    publisher: "Green Climate Fund / AFD",
    geographyNote: "Programme-level (four countries). Not a Mauritius-only report.",
  },
  {
    id: "fp161-apr-2024",
    projectId: "mu-gcf-fp161",
    title: "FP161 Annual Performance Report 2024",
    type: "apr",
    reportingPeriod: "2024",
    coverDate: "2025-08-16",
    url: "https://www.greenclimate.fund/document/2024-annual-performance-report-fp161-building-regional-resilience-through-strengthened",
    publisher: "Green Climate Fund / AFD",
    geographyNote: "Programme-level (IOC members). Not a Mauritius-only report.",
  },
  {
    id: "fp161-apr-2023",
    projectId: "mu-gcf-fp161",
    title: "FP161 Annual Performance Report 2023",
    type: "apr",
    reportingPeriod: "2023",
    coverDate: "2024-10-17",
    url: "https://www.greenclimate.fund/document/2023-annual-performance-report-fp161-building-regional-resilience-through-strengthened",
    publisher: "Green Climate Fund / AFD",
    geographyNote: "Programme-level (IOC members). Not a Mauritius-only report.",
  },
  {
    id: "fp095-apr-2024",
    projectId: "mu-gcf-fp095",
    title: "FP095 Annual Performance Report 2024",
    type: "apr",
    reportingPeriod: "2024",
    coverDate: "2025-03-29",
    url: "https://www.greenclimate.fund/document/2024-annual-performance-report-fp095-transforming-financial-systems-climate",
    publisher: "Green Climate Fund / AFD",
    geographyNote: "Programme-level (17 countries). Not a Mauritius-only report.",
  },
  {
    id: "fp095-apr-2023",
    projectId: "mu-gcf-fp095",
    title: "FP095 Annual Performance Report 2023",
    type: "apr",
    reportingPeriod: "2023",
    coverDate: "2024-09-27",
    url: "https://www.greenclimate.fund/document/2023-annual-performance-report-fp095-transforming-financial-systems-climate",
    publisher: "Green Climate Fund / AFD",
    geographyNote: "Programme-level (17 countries). Not a Mauritius-only report.",
  },
];

export function getReportsForProject(projectId: string): DonorReport[] {
  return donorReports
    .filter((r) => r.projectId === projectId)
    .sort((a, b) => (b.coverDate ?? "").localeCompare(a.coverDate ?? ""));
}

export function getAllReports(): DonorReport[] {
  return [...donorReports].sort((a, b) =>
    (b.coverDate ?? "").localeCompare(a.coverDate ?? ""),
  );
}

export function projectsWithoutReports(projectIds: string[]): string[] {
  const have = new Set(donorReports.map((r) => r.projectId));
  return projectIds.filter((id) => !have.has(id));
}
