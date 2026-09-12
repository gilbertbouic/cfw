import { getAllProjects } from "./projects";
import type { SpendPlace } from "./types";

const PIN_NOTE =
  "Approximate locality for a place named in a public report — not a surveyed works polygon.";

/**
 * Named places where public reports say climate-fund works happened.
 * Site-level expenditure is null unless a cited document publishes it.
 */
export const spendPlaces: SpendPlace[] = [
  {
    id: "bess-amaury",
    projectId: "mu-gcf-fp033",
    name: "CEB Amaury substation (2 MW BESS, 2018)",
    island: "mauritius",
    lat: -20.096,
    lng: 57.641,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "CEB: first grid-scale BESS commissioned in 2018 at Amaury (2 MW) and Henrietta (2 MW), financed by GCF FP033.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level spend not published. GCF 2018 APR: contract USD 2,554,170.51 excl. VAT for the 4 MW batch at Amaury and Henrietta together.`,
    sourceUrl: "https://ceb.mu/projects/battery-energy-storage-system",
    sourceTitle: "CEB: Battery Energy Storage System",
    sourcePublisher: "Central Electricity Board",
    asOf: "2026",
  },
  {
    id: "bess-henrietta",
    projectId: "mu-gcf-fp033",
    name: "CEB Henrietta substation (2 MW BESS, 2018)",
    island: "mauritius",
    lat: -20.326,
    lng: 57.478,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "CEB and GCF 2018 APR: 2 MW BESS commissioned 2018 at Henrietta, with Amaury, as the first 4 MW GCF-financed batch.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level spend not published. Same 4 MW batch contract as Amaury (USD 2,554,170.51 excl. VAT for both sites).`,
    sourceUrl:
      "https://www.greenclimate.fund/sites/default/files/document/fp033-2018apr.pdf",
    sourceTitle: "FP033 Annual Performance Report 2018",
    sourcePublisher: "Green Climate Fund / UNDP",
    asOf: "2019-03",
  },
  {
    id: "bess-tour-koenig",
    projectId: "mu-gcf-fp033",
    name: "CEB La Tour Koenig substation (2 MW BESS)",
    island: "mauritius",
    lat: -20.186,
    lng: 57.453,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "UNDP and CEB: part of the 14 MW batch inaugurated December 2021 (La Tour Koenig 2 MW, Anahita 4 MW, Wooton 4 MW, Jin Fei 4 MW).",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level spend not published. UNDP: USD 7.5 million GCF grant for the 14 MW batch as a whole (about Rs 270 million of a Rs 450 million implementation cost).`,
    sourceUrl:
      "https://www.undp.org/mauritius-seychelles/news/undp-supports-installation-14-mw-grid-scale-battery-energy-storage-system",
    sourceTitle: "UNDP supports installation of a 14 MW grid-scale BESS",
    sourcePublisher: "UNDP",
    asOf: "2021-12-17",
  },
  {
    id: "bess-anahita",
    projectId: "mu-gcf-fp033",
    name: "CEB Anahita substation (4 MW BESS)",
    island: "mauritius",
    lat: -20.23,
    lng: 57.8,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "UNDP/CEB: 4 MW of the 14 MW GCF-supported batch (Dec 2021).",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level spend not published. Same 14 MW batch grant (USD 7.5 million) as the other three substations.`,
    sourceUrl:
      "https://www.undp.org/mauritius-seychelles/news/undp-supports-installation-14-mw-grid-scale-battery-energy-storage-system",
    sourceTitle: "UNDP supports installation of a 14 MW grid-scale BESS",
    sourcePublisher: "UNDP",
    asOf: "2021-12-17",
  },
  {
    id: "bess-wooton",
    projectId: "mu-gcf-fp033",
    name: "CEB Wooton substation (4 MW BESS)",
    island: "mauritius",
    lat: -20.276,
    lng: 57.548,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "UNDP/CEB: 4 MW of the 14 MW GCF-supported batch (Dec 2021).",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level spend not published. Same 14 MW batch grant (USD 7.5 million).`,
    sourceUrl:
      "https://www.undp.org/mauritius-seychelles/news/undp-supports-installation-14-mw-grid-scale-battery-energy-storage-system",
    sourceTitle: "UNDP supports installation of a 14 MW grid-scale BESS",
    sourcePublisher: "UNDP",
    asOf: "2021-12-17",
  },
  {
    id: "bess-jin-fei",
    projectId: "mu-gcf-fp033",
    name: "CEB Jin Fei substation, Riche Terre (4 MW BESS)",
    island: "mauritius",
    lat: -20.115,
    lng: 57.515,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "UNDP: 14 MW batch inaugurated 16 December 2021 at Jin Fei, Riche Terre. Jin Fei hosts 4 MW of that batch.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level spend not published. Same 14 MW batch grant (USD 7.5 million). UNDP also states about USD 10 million GCF for the overall 18 MW BESS.`,
    sourceUrl:
      "https://www.undp.org/mauritius-seychelles/news/undp-supports-installation-14-mw-grid-scale-battery-energy-storage-system",
    sourceTitle: "UNDP supports installation of a 14 MW grid-scale BESS",
    sourcePublisher: "UNDP",
    asOf: "2021-12-17",
  },
  {
    id: "bess-pointe-monnier",
    projectId: "mu-gcf-fp033",
    name: "CEB Pointe Monnier power station, Rodrigues (1.5 MW BESS)",
    island: "rodrigues",
    lat: -19.683,
    lng: 63.421,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "CEB and UNDP: 1.5 MW BESS at Pointe Monnier, Rodrigues, described as partly financed by the UNDP–GCF partnership.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Rodrigues amount is not isolated in the CEB or UNDP pages reviewed.`,
    sourceUrl: "https://ceb.mu/projects/battery-energy-storage-system",
    sourceTitle: "CEB: Battery Energy Storage System",
    sourcePublisher: "Central Electricity Board",
    asOf: "2026",
  },
  {
    id: "fp033-rodrigues-pv",
    projectId: "mu-gcf-fp033",
    name: "Rodrigues — rooftop solar (island-level)",
    island: "rodrigues",
    lat: -19.718,
    lng: 63.418,
    includeInDefaultView: true,
    precision: "island",
    worksNote:
      "UNDP FP033 page: more than 2,000 families including 100 in Rodrigues received a rooftop solar PV kit. No village-level map is published.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Island-level activity. Kit cost and Rodrigues spend are not published as a split.`,
    sourceUrl:
      "https://www.undp.org/mauritius-seychelles/projects/accelerating-transformational-shift-low-carbon-economy-republic-mauritius",
    sourceTitle: "UNDP FP033 project page",
    sourcePublisher: "UNDP",
    asOf: "2026-09",
  },
  {
    id: "fp033-agalega",
    projectId: "mu-gcf-fp033",
    name: "Agaléga — PV mini-grid component (island-level)",
    island: "agalega",
    lat: -10.4,
    lng: 56.6,
    includeInDefaultView: false,
    precision: "island",
    worksNote:
      "GCF FP033 describes Phase 2 as a photovoltaic mini-power grid for Agaléga. Site-level spend is not published on the GCF project page.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Off the default Mauritius–Rodrigues map frame. Island-level only.`,
    sourceUrl: "https://www.greenclimate.fund/project/fp033",
    sourceTitle: "GCF FP033 project page",
    sourcePublisher: "Green Climate Fund",
    asOf: "2026-09",
  },
  {
    id: "af-mon-choisy",
    projectId: "mu-af-coastal",
    name: "Mon Choisy public beach — coastal protection",
    island: "mauritius",
    lat: -20.013,
    lng: 57.556,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "Adaptation Fund project page names Mon Choisy as one of three coastal sites (with Rivière des Galets and Quatre Soeurs). UNDP marks the programme completed.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} National AF grant USD 9,119,240 was fully disbursed to the accredited entity by June 2020. Site-level outturn is not on the AF project page. A 2011 proposal table listed USD 2.0 million for this site — that is a proposal estimate, not an audited spend figure, so it is not shown as spent.`,
    sourceUrl:
      "https://www.adaptation-fund.org/project/climate-change-adaptation-programme-in-the-coastal-zone-of-mauritius/",
    sourceTitle: "AF: Climate Change Adaptation Programme in the Coastal Zone of Mauritius",
    sourcePublisher: "Adaptation Fund",
    asOf: "2011-11-16",
  },
  {
    id: "af-riviere-des-galets",
    projectId: "mu-af-coastal",
    name: "Rivière des Galets — coastal protection",
    island: "mauritius",
    lat: -20.507,
    lng: 57.518,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "Named Adaptation Fund coastal site. Programme completed (UNDP).",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level expenditure not published on the AF project page.`,
    sourceUrl:
      "https://www.adaptation-fund.org/project/climate-change-adaptation-programme-in-the-coastal-zone-of-mauritius/",
    sourceTitle: "AF: Climate Change Adaptation Programme in the Coastal Zone of Mauritius",
    sourcePublisher: "Adaptation Fund",
    asOf: "2011-11-16",
  },
  {
    id: "af-quatre-soeurs",
    projectId: "mu-af-coastal",
    name: "Quatre Soeurs — coastal protection and refuge centre",
    island: "mauritius",
    lat: -20.299,
    lng: 57.791,
    includeInDefaultView: true,
    precision: "locality",
    worksNote:
      "Named Adaptation Fund coastal site. UNDP: Quatre Soeurs Refuge Centre inaugurated 14 March 2023 under this programme.",
    spendAmount: null,
    spendCurrency: "USD",
    spendNote: `${PIN_NOTE} Site-level expenditure not published on the AF project page.`,
    sourceUrl:
      "https://www.undp.org/mauritius-seychelles/news/inauguration-quatre-soeurs-refuge-centre",
    sourceTitle: "Inauguration of the Quatre Soeurs Refuge Centre",
    sourcePublisher: "UNDP",
    asOf: "2023-03-15",
  },
];

export function getSpendPlaces(): SpendPlace[] {
  return spendPlaces;
}

export function getSpendPlacesForProject(projectId: string): SpendPlace[] {
  return spendPlaces.filter((p) => p.projectId === projectId);
}

export function getDefaultViewPlaces(): SpendPlace[] {
  return spendPlaces.filter((p) => p.includeInDefaultView);
}

export function projectsWithoutSpendPlaces() {
  const ids = new Set(spendPlaces.map((p) => p.projectId));
  return getAllProjects().filter((p) => !ids.has(p.id));
}
