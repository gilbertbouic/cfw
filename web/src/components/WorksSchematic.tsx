"use client";

import Link from "next/link";
import type { SpendPlace } from "@/data/types";
import { useI18n } from "@/i18n/LanguageProvider";

const MU = { west: 57.28, east: 57.86, north: -19.97, south: -20.54 };
const ROD = { west: 63.25, east: 63.52, north: -19.66, south: -19.785 };

const SHORT: Record<string, string> = {
  "bess-amaury": "Amaury",
  "bess-henrietta": "Henrietta",
  "bess-tour-koenig": "Tour Koenig",
  "bess-anahita": "Anahita",
  "bess-wooton": "Wooton",
  "bess-jin-fei": "Jin Fei",
  "bess-pointe-monnier": "Pointe Monnier",
  "fp033-rodrigues-pv": "Rooftop PV",
  "af-mon-choisy": "Mon Choisy",
  "af-riviere-des-galets": "Rivière des Galets",
  "af-quatre-soeurs": "Quatre Soeurs",
};

type Bounds = { west: number; east: number; north: number; south: number };

function xy(lat: number, lng: number, b: Bounds, w: number, h: number) {
  return {
    x: ((lng - b.west) / (b.east - b.west)) * w,
    y: ((lat - b.north) / (b.south - b.north)) * h,
  };
}

/** Simplified coastal outline in lon/lat, then projected. */
const MAURITIUS_RING: [number, number][] = [
  [57.36, -20.16],
  [57.37, -20.08],
  [57.41, -20.02],
  [57.5, -19.99],
  [57.58, -20.0],
  [57.66, -20.03],
  [57.75, -20.1],
  [57.81, -20.2],
  [57.82, -20.32],
  [57.78, -20.42],
  [57.7, -20.49],
  [57.55, -20.525],
  [57.42, -20.51],
  [57.32, -20.45],
  [57.3, -20.32],
  [57.31, -20.22],
];

const RODRIGUES_RING: [number, number][] = [
  [63.28, -19.7],
  [63.32, -19.675],
  [63.4, -19.668],
  [63.48, -19.68],
  [63.5, -19.71],
  [63.48, -19.74],
  [63.42, -19.76],
  [63.34, -19.755],
  [63.29, -19.73],
];

function ringToPath(ring: [number, number][], b: Bounds, w: number, h: number) {
  return (
    ring
      .map(([lng, lat], i) => {
        const p = xy(lat, lng, b, w, h);
        return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      })
      .join(" ") + " Z"
  );
}

function IslandFigure({
  title,
  bounds,
  ring,
  places,
  width,
  height,
  pinTitle,
}: {
  title: string;
  bounds: Bounds;
  ring: [number, number][];
  places: SpendPlace[];
  width: number;
  height: number;
  pinTitle: string;
}) {
  const path = ringToPath(ring, bounds, width, height);
  return (
    <figure className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <figcaption className="mb-3 text-sm font-semibold text-foreground">
        {title}
      </figcaption>
      <svg
        viewBox={`-8 -8 ${width + 80} ${height + 16}`}
        role="img"
        aria-label={title}
        className="h-auto w-full"
      >
        <path
          d={path}
          fill="#e6f4f0"
          stroke="#0d6e5f"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {places.map((p) => {
          const { x, y } = xy(p.lat, p.lng, bounds, width, height);
          const east = p.lng > (bounds.west + bounds.east) / 2;
          const label = SHORT[p.id] ?? p.name;
          const tx = east ? x - 8 : x + 10;
          const anchor = east ? "end" : "start";
          const color = p.precision === "island" ? "#1f6f8b" : "#0d6e5f";
          return (
            <a key={p.id} href={`/projects/${p.projectId}`}>
              <circle
                cx={x}
                cy={y}
                r={p.precision === "island" ? 6 : 5}
                fill={color}
                stroke="#fff"
                strokeWidth="1.5"
              />
              <text
                x={tx}
                y={y + 4}
                textAnchor={anchor}
                fontSize="11"
                fontWeight="600"
                fill="#0f1f1c"
              >
                {label}
              </text>
              <title>
                {pinTitle.replace("{name}", p.name)}
              </title>
            </a>
          );
        })}
      </svg>
    </figure>
  );
}

export function WorksSchematic({ places }: { places: SpendPlace[] }) {
  const { dict } = useI18n();
  const copy = dict.worksSchematic;
  const mauritius = places.filter(
    (p) => p.island === "mauritius" && p.includeInDefaultView,
  );
  const rodrigues = places.filter(
    (p) => p.island === "rodrigues" && p.includeInDefaultView,
  );
  const agalega = places.filter((p) => p.island === "agalega");

  return (
    <div className="space-y-3">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <IslandFigure
          title={copy.mauritiusTitle}
          bounds={MU}
          ring={MAURITIUS_RING}
          places={mauritius}
          width={280}
          height={360}
          pinTitle={copy.pinTitle}
        />
        <IslandFigure
          title={copy.rodriguesTitle}
          bounds={ROD}
          ring={RODRIGUES_RING}
          places={rodrigues}
          width={280}
          height={220}
          pinTitle={copy.pinTitle}
        />
      </div>
      {agalega.length > 0 && (
        <p className="text-sm text-muted">
          {copy.agalegaOff}{" "}
          {agalega.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.projectId}`}
              className="font-semibold text-primary"
            >
              {p.name}
            </Link>
          ))}
          . {copy.siteSpendNotReported}
        </p>
      )}
      <p className="text-xs text-muted">{copy.caption}</p>
    </div>
  );
}
