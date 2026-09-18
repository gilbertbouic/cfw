import type { Project } from "./types";
import { LEDGER_REVIEWED } from "./types";

/**
 * Sourced Mauritius climate-finance ledger.
 * Every money field is taken from a cited public URL, or is null.
 * Regional programmes do not invent a Mauritius-only split.
 */
export const projects: Project[] = [
  {
    id: "mu-gcf-fp033",
    title:
      "Accelerating the transformational shift to a low-carbon economy (GCF FP033)",
    summary:
      "Mauritius-specific GCF project to expand renewable energy and grid absorption of intermittent generation, including battery storage and rooftop solar, with an Agaléga mini-grid component. Accredited entity: UNDP.",
    kind: "multilateral_project",
    climateObjective: "mitigation",
    hazards: ["energy_transition"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "national",
    geographyNote:
      "National programme covering Mauritius, Rodrigues and Agaléga. Map pin is Port Louis as an illustrative national centroid, not a project site.",
    adminUnit: "National",
    district: "National / multi-island",
    lat: -20.1609,
    lng: 57.5012,
    pinNote: "Illustrative national centroid (Port Louis), not a surveyed site.",
    showOnMap: true,
    funders: ["Green Climate Fund", "Government of Mauritius", "AFD"],
    implementingEntities: [
      "UNDP",
      "Ministry of Finance",
      "Ministry of Energy and Public Utilities",
      "Central Electricity Board",
      "MARENA",
    ],
    currency: "USD",
    amountLabel: "GCF grant",
    amount: 28_210_000,
    amountNote: "GCF FP033 financing table: grant USD 28,210,000.",
    cofinancing: 163_180_000,
    cofinancingNote:
      "GCF FP033 co-financing table: loan USD 37.9M, grants USD 122M + USD 1.38M, other USD 1.0M + USD 0.9M.",
    totalValue: 191_000_000,
    totalValueNote: "GCF project page states total project value USD 191 million.",
    disbursed: 27_347_855,
    disbursedNote:
      "Sum of seven dated GCF disbursements on the FP033 page (Sep 2017-Dec 2025). GCF also labels the grant 97% disbursed. Expenditure by implementers is not published as a single figure here.",
    mauritiusShare: 28_210_000,
    mauritiusShareNote: "GCF grant is Mauritius-specific. Co-finance is additional.",
    startYear: 2017,
    endYear: 2027,
    publishedResults: [
      {
        label:
          "18 MW utility-scale battery energy storage system, GCF grant USD 10.5M, reported fully operational since December 2021.",
        sourceUrl:
          "https://www.undp.org/mauritius-seychelles/projects/accelerating-transformational-shift-low-carbon-economy-republic-mauritius",
      },
      {
        label:
          "UNDP project page (reviewed 2026): more than 2,000 families, including 100 in Rodrigues, received a rooftop solar PV kit.",
        sourceUrl:
          "https://www.undp.org/mauritius-seychelles/projects/accelerating-transformational-shift-low-carbon-economy-republic-mauritius",
      },
      {
        label:
          "UN Mauritius (April 2026) reports more than 3,000 low-income households across Mauritius, Rodrigues and Agaléga received rooftop PV. That figure differs from the UNDP project-page “more than 2,000 families” line - both are published; neither is reconciled here.",
        sourceUrl:
          "https://mauritius.un.org/en/314358-clean-energy-circular-innovation-mauritius-powers-just-green-transition",
      },
    ],
    sources: [
      {
        title: "GCF FP033 project page",
        url: "https://www.greenclimate.fund/project/fp033",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
      {
        title: "UNDP FP033 project page",
        url: "https://www.undp.org/mauritius-seychelles/projects/accelerating-transformational-shift-low-carbon-economy-republic-mauritius",
        publisher: "UNDP",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-af-coastal",
    title: "Climate Change Adaptation Programme in the Coastal Zone of Mauritius",
    summary:
      "Adaptation Fund coastal protection, storm-surge early warning, training and policy work at three named sites: Mon Choisy, Rivière des Galets and Quatre Soeurs. Implemented with UNDP and the Ministry of Environment.",
    kind: "multilateral_project",
    climateObjective: "adaptation",
    hazards: ["coastal", "cyclone", "flood"],
    status: "completed",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "site",
    geographyNote:
      "Three named sites on Mauritius: Mon Choisy, Rivière des Galets and Quatre Soeurs. Map pin is Mon Choisy as one of those sites.",
    adminUnit: "Coastal sites",
    district: "Mon Choisy / Rivière des Galets / Quatre Soeurs",
    lat: -20.017,
    lng: 57.558,
    pinNote: "Mon Choisy - one of three named project sites, not the only location.",
    showOnMap: true,
    funders: ["Adaptation Fund"],
    implementingEntities: ["UNDP", "Ministry of Environment"],
    currency: "USD",
    amountLabel: "Adaptation Fund grant",
    amount: 9_119_240,
    amountNote:
      "AF Board grant amount (project cost plus implementing fee) as published on the Adaptation Fund project page.",
    cofinancing: null,
    cofinancingNote: "AF page lists co-financing as N/A.",
    totalValue: 9_119_240,
    disbursed: 9_119_240,
    disbursedNote:
      "AF Board extension document (June 2020): 100% of the grant disbursed to the programme by the trustee. Execution-level disbursement was USD 8,219,881 (90.1%) at that date. UNDP later marks the project completed.",
    mauritiusShare: 9_119_240,
    startYear: 2012,
    endYear: 2022,
    publishedResults: [
      {
        label:
          "UNDP transparency portal lists the project completed, with Adaptation Fund contributions around USD 8.39 million on that portal’s donor table (a different cut from the USD 9,119,240 Board grant).",
        sourceUrl: "https://open.undp.org/projects/00062857",
      },
    ],
    sources: [
      {
        title: "Adaptation Fund project page",
        url: "https://www.adaptation-fund.org/project/climate-change-adaptation-programme-in-the-coastal-zone-of-mauritius/",
        publisher: "Adaptation Fund",
        asOf: "2011-11-16",
        notes: "Grant table and site names. Board approval 16 September 2011.",
      },
      {
        title: "Request for extension of project completion date (AFB/B.35.a-35.b/14)",
        url: "https://www.adaptation-fund.org/wp-content/uploads/2020/07/AFB.B.35.a-35.b.14_Project-Extension-Request_UNDP_Mauritius.pdf",
        publisher: "Adaptation Fund Board",
        asOf: "2020-06-23",
      },
      {
        title: "UNDP project page",
        url: "https://www.undp.org/mauritius-seychelles/projects/climate-change-adaptation-programme-coastal-zone-mauritius",
        publisher: "UNDP",
        asOf: "2026-08",
        notes: "Status: completed.",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-af-coral",
    title:
      "Restoring marine ecosystem services by rehabilitating coral reefs (Mauritius and Seychelles)",
    summary:
      "Adaptation Fund coral restoration programme shared by Mauritius and Seychelles. The Mauritius-specific component in the AF budget table is USD 2.5 million. The USD 10 million grant amount is regional, not a Mauritius-only envelope.",
    kind: "multilateral_project",
    climateObjective: "adaptation",
    hazards: ["coastal", "biodiversity", "heat"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote:
      "Mauritius, Rodrigues and Seychelles. No single surveyed site is used as a map pin.",
    adminUnit: "Coastal / lagoon (regional)",
    district: "Mauritius, Rodrigues and Seychelles",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Adaptation Fund"],
    implementingEntities: [
      "UNDP",
      "Ministry of Ocean Economy, Marine Resources, Fisheries and Shipping",
    ],
    currency: "USD",
    amountLabel: "AF grant (regional)",
    amount: 10_000_000,
    amountNote:
      "AF Board grant amount USD 10,000,000 covering both countries (includes implementing-entity fee). Project cost excluding that fee is listed as USD 9,132,420.",
    cofinancing: null,
    totalValue: 10_000_000,
    disbursed: null,
    disbursedNote:
      "UNDP publishes annual delivery figures for the combined project; a Mauritius-only disbursement total is not isolated on the AF project page.",
    mauritiusShare: 2_500_000,
    mauritiusShareNote:
      "AF budget table: Component 1 (degraded reefs in Mauritius) USD 2,500,000. Training, execution and IE fee are shared and not split by country in that table.",
    startYear: 2019,
    endYear: 2026,
    publishedResults: [],
    sources: [
      {
        title: "Adaptation Fund project page",
        url: "https://www.adaptation-fund.org/project/restoring-marine-ecosystem-services-restoring-coral-reefs-meet-changing-climate-future-mauritius-seychelles/",
        publisher: "Adaptation Fund",
        asOf: "2018-08-07",
      },
      {
        title: "UNDP coral restoration project page",
        url: "https://www.undp.org/mauritius-seychelles/projects/restoring-marine-ecosystem-services-rehabilitating-coral-reefs-meet-changing-climate-future",
        publisher: "UNDP",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-fp135",
    title: "Ecosystem-based Adaptation in the Indian Ocean - EBA IO (GCF FP135)",
    summary:
      "Regional GCF programme (Comoros, Madagascar, Mauritius, Seychelles) implemented with AFD. GCF grant USD 38 million plus USD 11.2 million co-finance. A Mauritius-only allocation is not published on the GCF project page.",
    kind: "multilateral_project",
    climateObjective: "adaptation",
    hazards: ["coastal", "biodiversity", "flood"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote:
      "Four Indian Ocean countries. Do not treat the USD 38 million GCF grant as Mauritius funding.",
    adminUnit: "Regional (IOC)",
    district: "Comoros, Madagascar, Mauritius, Seychelles",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund", "AFD"],
    implementingEntities: ["AFD"],
    currency: "USD",
    amountLabel: "GCF grant (regional)",
    amount: 38_000_000,
    cofinancing: 11_200_000,
    totalValue: 49_200_000,
    totalValueNote: "GCF project page: total project value USD 49.2 million.",
    disbursed: 7_000_000,
    disbursedNote:
      "One GCF disbursement of USD 7,000,000 dated 22 July 2021 is listed (18% of the GCF grant). This is regional, not Mauritius-only.",
    mauritiusShare: null,
    mauritiusShareNote:
      "Mauritius allocation is not published on the GCF FP135 page reviewed.",
    startYear: 2021,
    endYear: 2031,
    publishedResults: [],
    sources: [
      {
        title: "GCF FP135 project page",
        url: "https://www.greenclimate.fund/project/fp135",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-fp161",
    title:
      "IOC meteorological, hydrological and climate services (GCF FP161)",
    summary:
      "Regional GCF project with AFD for Comoros, Madagascar, Mauritius and Seychelles, focused on multi-hazard early warning. GCF grant USD 52,767,986. Mauritius-only share is not published on the GCF project page.",
    kind: "multilateral_project",
    climateObjective: "adaptation",
    hazards: ["cyclone", "flood", "multi"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote: "Four IOC member countries. Programme totals are regional.",
    adminUnit: "Regional (IOC)",
    district: "Comoros, Madagascar, Mauritius, Seychelles",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund", "AFD"],
    implementingEntities: ["AFD"],
    currency: "USD",
    amountLabel: "GCF grant (regional)",
    amount: 52_767_986,
    cofinancing: 18_618_099,
    totalValue: 71_400_000,
    totalValueNote: "GCF project page: total project value USD 71.4 million.",
    disbursed: 9_000_000,
    disbursedNote:
      "GCF lists a USD 9,000,000 disbursement on 6 December 2022 (17% of the GCF grant). Regional, not Mauritius-only.",
    mauritiusShare: null,
    mauritiusShareNote:
      "Mauritius allocation is not published on the GCF FP161 page reviewed.",
    startYear: 2022,
    endYear: 2027,
    publishedResults: [],
    sources: [
      {
        title: "GCF FP161 project page",
        url: "https://www.greenclimate.fund/project/fp161",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-fp095",
    title: "Transforming Financial Systems for Climate (GCF FP095)",
    summary:
      "Multi-country AFD programme providing loans and technical assistance through local financial institutions in 17 countries, including Mauritius. Programme GCF financing is about USD 278.4 million. A Mauritius-only allocation is not published on the GCF project page.",
    kind: "multilateral_project",
    climateObjective: "cross_cutting",
    hazards: ["energy_transition", "multi"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote:
      "Seventeen countries in Africa and Latin America. Do not treat programme totals as Mauritius receipts.",
    adminUnit: "Multi-country",
    district: "17 countries including Mauritius",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund", "AFD"],
    implementingEntities: ["AFD"],
    currency: "USD",
    amountLabel: "GCF financing (regional)",
    amount: 278_448_116,
    amountNote:
      "GCF financing table: loan USD 242,481,900.87 + grant USD 35,966,214.96.",
    cofinancing: 479_162_799,
    totalValue: 758_000_000,
    totalValueNote: "GCF project page: total project value USD 758 million.",
    disbursed: null,
    disbursedNote:
      "GCF lists several large programme disbursements and labels GCF financing 79% disbursed. Those flows are programme-wide.",
    mauritiusShare: null,
    mauritiusShareNote:
      "Mauritius allocation is not published on the GCF FP095 page reviewed.",
    startYear: 2019,
    endYear: 2028,
    publishedResults: [],
    sources: [
      {
        title: "GCF FP095 project page",
        url: "https://www.greenclimate.fund/project/fp095",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-fp099",
    title: "Climate Investor One (GCF FP099)",
    summary:
      "Multi-country private-sector programme (FMO) listed on the GCF Mauritius country page. A Mauritius-only allocation is not published on that country listing.",
    kind: "multilateral_project",
    climateObjective: "mitigation",
    hazards: ["energy_transition"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote:
      "Associated with Mauritius on the GCF country page; Mauritius spend is not isolated there.",
    adminUnit: "Multi-country",
    district: "Multi-country (GCF Mauritius listing)",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund", "FMO"],
    implementingEntities: ["FMO"],
    currency: "USD",
    amountLabel: "GCF financing (regional)",
    amount: null,
    amountNote:
      "Programme total is on the GCF FP099 page; this ledger does not copy a Mauritius split that the country page does not publish.",
    cofinancing: null,
    totalValue: null,
    disbursed: null,
    mauritiusShare: null,
    mauritiusShareNote:
      "Mauritius allocation is not published on the GCF Mauritius country page reviewed.",
    startYear: null,
    endYear: null,
    publishedResults: [],
    sources: [
      {
        title: "GCF Mauritius country page (lists FP099 among associated projects)",
        url: "https://www.greenclimate.fund/countries/mauritius",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
      {
        title: "GCF FP099 project page",
        url: "https://www.greenclimate.fund/project/fp099",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-fp223",
    title: "Project GAIA (GCF FP223)",
    summary:
      "Multi-country GCF programme listed on the GCF Mauritius country page. A Mauritius-only allocation is not published on that listing.",
    kind: "multilateral_project",
    climateObjective: "cross_cutting",
    hazards: ["multi"],
    status: "unknown",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote:
      "Associated with Mauritius on the GCF country page; Mauritius spend is not isolated there.",
    adminUnit: "Multi-country",
    district: "Multi-country (GCF Mauritius listing)",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund", "MUFG Bank"],
    implementingEntities: ["MUFG Bank"],
    currency: "USD",
    amountLabel: "GCF financing (regional)",
    amount: null,
    cofinancing: null,
    totalValue: null,
    disbursed: null,
    mauritiusShare: null,
    mauritiusShareNote:
      "Mauritius allocation is not published on the GCF Mauritius country page reviewed.",
    startYear: null,
    endYear: null,
    publishedResults: [],
    sources: [
      {
        title: "GCF Mauritius country page (lists FP223 among associated projects)",
        url: "https://www.greenclimate.fund/countries/mauritius",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
      {
        title: "GCF FP223 project page",
        url: "https://www.greenclimate.fund/project/fp223",
        publisher: "Green Climate Fund",
        asOf: "2026-09",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-resislands",
    title:
      "RESIslands - AISCC climate-risk and resilience readiness (GCF)",
    summary:
      "GCF Readiness and Preparatory Support Programme grant delivered by UNECA with the African Island States Climate Commission (AISCC). The approved proposal requests USD 4,943,086 for nine African island states, of which USD 250,000 is the Mauritius country line. Cabinet noted a Mauritius national launch on 25 September 2026 at the United Docks, Port Louis.",
    kind: "readiness",
    climateObjective: "adaptation",
    hazards: ["multi", "coastal", "cyclone", "flood"],
    status: "under_implementation",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "multi_country",
    geographyNote:
      "Nine AISCC member states: Cabo Verde, Comoros, Equatorial Guinea, Guinea-Bissau, Madagascar, Mauritius, São Tomé and Príncipe, Seychelles, and Tanzania (Zanzibar). Madagascar has no country allocation in the March 2024 table. Do not treat the USD 4,943,086 total as Mauritius funding. Cabinet noted a Mauritius launch at the United Docks, Port Louis, on 25 September 2026 - that is an event venue, not a surveyed works site.",
    adminUnit: "Regional (AISCC)",
    district: "AISCC member states",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund"],
    implementingEntities: [
      "United Nations Economic Commission for Africa",
      "African Island States Climate Commission",
    ],
    currency: "USD",
    amountLabel: "GCF readiness grant (regional)",
    amount: 4_943_086,
    amountNote:
      "GCF approved readiness proposal (cover date 30 March 2024): total requested USD 4,943,086. Cabinet highlights of 11 September 2026 round this as approximately USD 4.95 million.",
    cofinancing: null,
    totalValue: 4_943_086,
    disbursed: null,
    disbursedNote:
      "No Mauritius-only disbursement total is published on the GCF proposal or the Cabinet note reviewed.",
    mauritiusShare: 250_000,
    mauritiusShareNote:
      "GCF readiness proposal country table: Mauritius USD 250,000. Cabinet highlights of 11 September 2026 state the same Mauritius share of the grant.",
    startYear: 2026,
    endYear: 2027,
    publishedResults: [
      {
        label:
          "Cabinet (11 September 2026) noted that the RESIsland Project will be launched on 25 September 2026 at the United Docks, Port Louis, and that Mauritius’ share of the GCF readiness grant is USD 250,000. Implementation period stated as 2026/2027.",
        sourceUrl:
          "https://pmo.govmu.org/CabinetDecision/2026/Highlights%20of%20Cabinet%20Meeting%20-%20Friday%2011%20September%202026.pdf",
      },
    ],
    sources: [
      {
        title:
          "Approved GCF readiness proposal - RESIslands Project (PDF)",
        url: "https://www.greenclimate.fund/sites/default/files/document/20240330-multicountry-uneca.pdf",
        publisher: "Green Climate Fund",
        asOf: "2024-03-30",
        notes:
          "Requested amount USD 4,943,086; Mauritius country line USD 250,000; delivery partner UNECA; duration 30 months.",
      },
      {
        title:
          "GCF document page - Strengthening the institutional capacities of AISCC member states (RESIslands)",
        url: "https://www.greenclimate.fund/document/strengthening-institutional-capacities-african-island-states-climate-commission-aiscc",
        publisher: "Green Climate Fund",
        asOf: "2024-03-30",
        notes: "Document type: approved readiness proposal. Cover date 30 March 2024.",
      },
      {
        title: "Highlights of Cabinet Meeting - Friday 11 September 2026",
        url: "https://pmo.govmu.org/CabinetDecision/2026/Highlights%20of%20Cabinet%20Meeting%20-%20Friday%2011%20September%202026.pdf",
        publisher: "Prime Minister’s Office, Mauritius",
        asOf: "2026-09-11",
        notes:
          "Point 14: Mauritius launch 25 September 2026 at United Docks, Port Louis; Mauritius share USD 250,000; programme grant described as approximately USD 4.95 million.",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "official_register",
  },
  {
    id: "mu-gcf-nap-infra",
    title:
      "GCF NAP - infrastructure, bridges, flood-prone areas and coastal zones",
    summary:
      "The 2021 updated NDC states that a National Adaptation Plan on infrastructure, bridges and culverts, DRR-flood prone areas and coastal zones is being formulated for a total of USD 2.5 million from the GCF.",
    kind: "readiness",
    climateObjective: "adaptation",
    hazards: ["flood", "coastal"],
    status: "unknown",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "national",
    geographyNote: "National NAP formulation, as described in the 2021 NDC.",
    adminUnit: "National",
    district: "National",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund"],
    implementingEntities: [],
    currency: "USD",
    amountLabel: "GCF amount stated in NDC",
    amount: 2_500_000,
    amountNote:
      "Figure as written in the updated NDC (1 October 2021). Implementation status after 2021 is not confirmed on that document.",
    cofinancing: null,
    totalValue: 2_500_000,
    disbursed: null,
    mauritiusShare: 2_500_000,
    startYear: null,
    endYear: null,
    publishedResults: [],
    sources: [
      {
        title: "Updated NDC of the Republic of Mauritius",
        url: "https://unfccc.int/sites/default/files/NDC/2022-06/Final%20Updated%20NDC%20for%20the%20Republic%20of%20Mauritius%2001%20October%202021.docx",
        publisher: "Government of Mauritius / UNFCCC",
        asOf: "2021-10-01",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "government_document",
  },
  {
    id: "mu-gcf-nap-health",
    title: "GCF NAP - health",
    summary:
      "The 2021 updated NDC states that a National Adaptation Plan on health is being formulated for a total of USD 425,000 from the GCF.",
    kind: "readiness",
    climateObjective: "adaptation",
    hazards: ["heat", "multi"],
    status: "unknown",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "national",
    geographyNote: "National NAP formulation, as described in the 2021 NDC.",
    adminUnit: "National",
    district: "National",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["Green Climate Fund"],
    implementingEntities: [],
    currency: "USD",
    amountLabel: "GCF amount stated in NDC",
    amount: 425_000,
    amountNote: "Figure as written in the updated NDC (1 October 2021).",
    cofinancing: null,
    totalValue: 425_000,
    disbursed: null,
    mauritiusShare: 425_000,
    startYear: null,
    endYear: null,
    publishedResults: [],
    sources: [
      {
        title: "Updated NDC of the Republic of Mauritius",
        url: "https://unfccc.int/sites/default/files/NDC/2022-06/Final%20Updated%20NDC%20for%20the%20Republic%20of%20Mauritius%2001%20October%202021.docx",
        publisher: "Government of Mauritius / UNFCCC",
        asOf: "2021-10-01",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "government_document",
  },
  {
    id: "mu-farmers-gcca",
    title: "Smallholder farmer climate-adaptation grant (GCCA / Commonwealth)",
    summary:
      "The Commonwealth Climate Finance Access Hub reported a €600,000 grant from the European Commission’s Global Climate Alliance Programme, plus €500,000 from the Government of Mauritius, to train smallholder farmers - including women’s groups - on climate risks and income diversification.",
    kind: "grant_programme",
    climateObjective: "adaptation",
    hazards: ["drought", "heat"],
    status: "unknown",
    country: "Mauritius",
    countryCode: "MU",
    geographyScope: "national",
    geographyNote: "National farmer-training programme as described by the Commonwealth.",
    adminUnit: "National",
    district: "National",
    lat: null,
    lng: null,
    showOnMap: false,
    funders: ["European Commission (GCCA)", "Government of Mauritius"],
    implementingEntities: [],
    currency: "EUR",
    amountLabel: "EC grant",
    amount: 600_000,
    amountNote: "€600,000 grant as stated by the Commonwealth Secretariat.",
    cofinancing: 500_000,
    cofinancingNote: "€500,000 Government of Mauritius contribution, same source.",
    totalValue: 1_100_000,
    disbursed: null,
    mauritiusShare: 600_000,
    mauritiusShareNote: "EC grant to Mauritius; government contribution is additional.",
    startYear: null,
    endYear: null,
    publishedResults: [],
    sources: [
      {
        title:
          "Commonwealth support secures grant to help Mauritian farmers adapt to changing climate",
        url: "https://thecommonwealth.org/news/commonwealth-support-secures-grant-help-mauritian-farmers-adapt-changing-climate",
        publisher: "Commonwealth Secretariat",
        asOf: "2026-05-31",
      },
    ],
    lastReviewed: LEDGER_REVIEWED,
    confidence: "secondary_report",
  },
];

function assertSourcedLedger(list: Project[]) {
  const errors: string[] = [];
  for (const p of list) {
    if (!p.sources.length) errors.push(`${p.id}: no sources`);
    for (const s of p.sources) {
      if (!/^https:\/\//.test(s.url)) errors.push(`${p.id}: source is not https`);
    }
    if (p.showOnMap && (p.lat == null || p.lng == null)) {
      errors.push(`${p.id}: showOnMap without coordinates`);
    }
    if (p.geographyScope === "multi_country" && p.mauritiusShare != null) {
      // Country split only when a cited document publishes a Mauritius line
      if (p.id !== "mu-af-coral" && p.id !== "mu-gcf-resislands") {
        errors.push(`${p.id}: unexpected Mauritius share on multi-country record`);
      }
    }
  }
  if (errors.length) {
    throw new Error(`Climate Fund Watch ledger failed verification:\n${errors.join("\n")}`);
  }
}

assertSourcedLedger(projects);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getMappableProjects(list = projects): Project[] {
  return list.filter((p) => p.showOnMap && p.lat != null && p.lng != null);
}
