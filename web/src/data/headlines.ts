import type { SourceRef } from "./types";
import { LEDGER_REVIEWED } from "./types";

export type HeadlineFigure = {
  id: string;
  label: string;
  display: string;
  detail: string;
  measures: string;
  source: SourceRef;
};

export const headlines: HeadlineFigure[] = [
  {
    id: "ndc-need",
    label: "NDC implementation need (to 2030)",
    display: "USD 6.5 billion",
    detail:
      "USD 4.5 billion adaptation and USD 2.0 billion mitigation. Unconditional USD 2.3 billion (35%, government and private sector); conditional USD 4.2 billion (65%, international sources).",
    measures:
      "Mauritius’s own estimate of financial needs to implement the updated 2021 NDC - not money already received.",
    source: {
      title: "Updated NDC of the Republic of Mauritius",
      url: "https://unfccc.int/sites/default/files/NDC/2022-06/Final%20Updated%20NDC%20for%20the%20Republic%20of%20Mauritius%2001%20October%202021.docx",
      publisher: "Government of Mauritius / UNFCCC",
      asOf: "2021-10-01",
    },
  },
  {
    id: "ccdr-need",
    label: "CCDR additional investment (25 years, NPV)",
    display: "USD 5.6 billion",
    detail:
      "World Bank Country Climate and Development Report: additional investment over the next 25 years in net present value terms, with an estimated annual gap of USD 213 million. About USD 1.4 billion is required through 2030.",
    measures:
      "World Bank modelled investment need - a different question from the NDC USD 6.5 billion to 2030. Do not add the two figures.",
    source: {
      title: "The Republic of Mauritius: Country Climate and Development Report",
      url: "https://reliefweb.int/report/mauritius/republic-mauritius-country-climate-and-development-report-february-2026",
      publisher: "World Bank Group (via ReliefWeb)",
      asOf: "2026-02",
    },
  },
  {
    id: "appendix-h",
    label: "Climate-tagged budget (FY 2025/26)",
    display: "Rs 6.7 billion",
    detail:
      "Adaptation Rs 5.589 billion, mitigation Rs 1.012 billion, mixed Rs 0.100 billion across six ministries and two special funds (Climate and Sustainability Fund and Projects Development Fund). About 2.9% of appropriated expenditure including those funds. CSF itself is tagged at Rs 3.473 billion.",
    measures:
      "Government climate-budget tagging of selected votes for one fiscal year - not international climate finance received, and not comparable to the UNDRR DRR/CCA tagging exercise.",
    source: {
      title: "Estimates 2025-26, Appendix H - climate expenditure tagging",
      url: "https://nationalbudget2025.govmu.org/documents/2025_26_appendixH.pdf",
      publisher: "Ministry of Finance, Mauritius",
      asOf: "2025-06",
    },
  },
  {
    id: "fmcp-received",
    label: "International support listed (from 2017)",
    display: "USD 118.05 million",
    detail:
      "Ministry of Environment FMCP presentation: grants and loans from named agencies from 2017 onwards (GCF 38.51, GEF 37.35, Adaptation Fund 4.44, AFD 9.20, EU 13.15, GCCA+ 2.26, Abu Dhabi Fund 10.00 loan, AfDB 2.44 loan, and smaller lines). The same slide states “8.4% of the requirement has been mobilized.” USD 118.05 million is about 1.8% of the NDC USD 6.5 billion - the 8.4% line is not explained by that total.",
    measures:
      "A ministry-compiled list of approved international support, not a complete national climate-finance account.",
    source: {
      title: "Mauritius FMCP-3 presentation - financial support needed and received",
      url: "https://unfccc.int/sites/default/files/resource/Mauritius-FMCP3-Presentation.pdf",
      publisher: "Ministry of Environment, Solid Waste Management and Climate Change / UNFCCC",
      asOf: "2026",
    },
  },
];

export const fmcpAgencyLines: {
  agency: string;
  usdMillion: number;
  instrument: "grant_or_unspecified" | "loan";
}[] = [
  { agency: "Green Climate Fund", usdMillion: 38.51, instrument: "grant_or_unspecified" },
  { agency: "Global Environment Facility", usdMillion: 37.35, instrument: "grant_or_unspecified" },
  { agency: "UNEP CCC - Danish Government", usdMillion: 0.13, instrument: "grant_or_unspecified" },
  { agency: "Adaptation Fund", usdMillion: 4.44, instrument: "grant_or_unspecified" },
  { agency: "Agence Française de Développement", usdMillion: 9.2, instrument: "grant_or_unspecified" },
  { agency: "UNDP Climate Promise", usdMillion: 0.27, instrument: "grant_or_unspecified" },
  { agency: "European Union", usdMillion: 13.15, instrument: "grant_or_unspecified" },
  { agency: "GCCA+ and European Union", usdMillion: 2.26, instrument: "grant_or_unspecified" },
  { agency: "United Kingdom", usdMillion: 0.25, instrument: "grant_or_unspecified" },
  { agency: "SADC", usdMillion: 0.05, instrument: "grant_or_unspecified" },
  { agency: "Abu Dhabi Fund", usdMillion: 10.0, instrument: "loan" },
  { agency: "African Development Bank", usdMillion: 2.44, instrument: "loan" },
];

export const domesticNotes = [
  {
    title: "Corporate Climate Responsibility levy",
    body: "A 2% levy on chargeable income for companies with turnover above Rs 50 million, effective from the year of assessment commencing 1 July 2024. Proceeds are intended for the Climate and Sustainability Fund.",
    source: {
      title: "Budget 2024-2025: Pursuing the Climate Agenda",
      url: "https://www.govmu.org/EN/newsgov/SitePages/Budget-2024-2025--Pursuing-the-Climate-Agenda.aspx",
      publisher: "Government Information Service, Mauritius",
      asOf: "2024-06-07",
    } satisfies SourceRef,
  },
  {
    title: "Climate and Sustainability Fund earmark (FY 2024/25)",
    body: "The 2024-25 Budget Speech earmarked Rs 3.2 billion under the Climate and Sustainability Fund for projects to address climate change, and stated that adaptation and mitigation would require some Rs 300 billion.",
    source: {
      title: "Budget 2024-2025: Pursuing the Climate Agenda",
      url: "https://www.govmu.org/EN/newsgov/SitePages/Budget-2024-2025--Pursuing-the-Climate-Agenda.aspx",
      publisher: "Government Information Service, Mauritius",
      asOf: "2024-06-07",
    } satisfies SourceRef,
  },
  {
    title: "UNDRR DRR + CCA budget tagging (pilot)",
    body: "A combined disaster-risk-reduction and climate-change-adaptation tagging exercise for 2023-24 and 2024-25 estimated unweighted principal and significant expenditure at MUR 38.927 billion (15.1% of Vote expenditure, 5.2% of GDP). This uses a wider definition than Appendix H and is not an update of the same series.",
    source: {
      title: "Disaster risk reduction and climate change adaptation budget tagging: Mauritius country report",
      url: "https://www.undrr.org/publication/documents-and-publications/disaster-risk-reduction-and-climate-change-adaption-budget",
      publisher: "UNDRR",
      asOf: "2025-10",
    } satisfies SourceRef,
  },
];

export const integrityNotes = [
  {
    title: "Transparency Mauritius survey (2025)",
    body: "An online survey of 25 public, finance, academic and NGO climate actors (15 June-10 September 2025) found that 84% identified corruption as the main threat to climate-finance delivery. Transparency Mauritius reported that none of the respondents listed transparency, accountability, disclosure or anti-corruption among the essential elements of climate finance.",
    source: {
      title: "Transparency Mauritius critique une gouvernance en manque d’exigences",
      url: "https://www.lemauricien.com/le-mauricien/conclusions-dune-enquete-en-ligne-transparency-mauritius-critique-une-gouvernance-en-manque-dexigences/691526/",
      publisher: "Le Mauricien, reporting Transparency Mauritius",
      asOf: "2025-11-21",
    } satisfies SourceRef,
  },
  {
    title: "Independent research on tracking gaps",
    body: "A June 2026 analysis in The Conversation reports no legal convictions or formal corruption indictments linked to climate finance in Mauritius, and argues that tracking and reporting of funds once they enter the system remain weak. It discusses a flood-drainage implementation case as mismanagement, not as a conviction.",
    source: {
      title: "Climate finance for Mauritius needs good management: report finds gaps",
      url: "https://theconversation.com/climate-finance-for-mauritius-needs-good-management-report-finds-gaps-283591",
      publisher: "The Conversation",
      asOf: "2026-06-04",
    } satisfies SourceRef,
  },
  {
    title: "National green taxonomy (in development)",
    body: "UNDP Mauritius, with the British High Commission, is supporting a National Green Taxonomy and Guidelines for Climate Change Reporting. A stakeholder workshop was held on 14-15 October 2025.",
    source: {
      title: "UNDP supports Sustainable Finance and Climate Transparency in Mauritius",
      url: "https://www.undp.org/mauritius-seychelles/news/undp-supports-sustainable-finance-and-climate-transparency-mauritius",
      publisher: "UNDP",
      asOf: "2025-10-16",
    } satisfies SourceRef,
  },
];

export const privateFinanceNotes = [
  {
    title: "Absa Mauritius green-loan target",
    body: "Absa Mauritius stated it intends to increase green loans to MUR 30 billion by 2030, from MUR 8 billion at the end of the previous year. This is a bank lending target, not public climate expenditure.",
    source: {
      title: "Absa’s Mauritius Unit to Nearly Quadruple Green Loans by 2030",
      url: "https://www.bloomberg.com/news/articles/2025-06-30/absa-to-support-mauritius-s-climate-change-efforts-with-increased-green-loans",
      publisher: "Bloomberg",
      asOf: "2025-06-30",
    } satisfies SourceRef,
  },
];

export { LEDGER_REVIEWED };
