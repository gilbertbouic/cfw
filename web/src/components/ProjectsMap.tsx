"use client";

import { useEffect, useRef } from "react";
import {
  LngLatBounds,
  Map,
  Marker,
  NavigationControl,
  Popup,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { SpendPlace } from "@/data/types";
import { ISLAND_LABELS } from "@/data/types";

const OPENFREEMAP = "https://tiles.openfreemap.org/styles/positron";

const PRECISION_COLOR: Record<SpendPlace["precision"], string> = {
  locality: "#0d6e5f",
  island: "#1f6f8b",
};

type Props = {
  places: SpendPlace[];
  className?: string;
};

export function ProjectsMap({ places, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new Map({
      container: containerRef.current,
      style: OPENFREEMAP,
      center: [57.55, -20.28],
      zoom: 9,
      attributionControl: { compact: true },
    });

    map.addControl(
      new NavigationControl({ showCompass: false }),
      "top-right",
    );
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const markers: Marker[] = [];

    const addMarkers = () => {
      markers.forEach((m) => m.remove());
      markers.length = 0;

      const visible = places.filter((p) => p.includeInDefaultView);

      for (const p of visible) {
        const color = PRECISION_COLOR[p.precision];
        const size = p.precision === "island" ? 22 : 18;
        const el = document.createElement("button");
        el.type = "button";
        el.className = "cfw-map-marker";
        el.style.cssText = [
          `width:${size}px`,
          `height:${size}px`,
          "border-radius:9999px",
          `background:${color}`,
          "border:2px solid #fff",
          "box-shadow:0 1px 4px rgba(0,0,0,.4)",
          "cursor:pointer",
          "padding:0",
        ].join(";");
        el.setAttribute("aria-label", p.name);

        const spendLine =
          p.spendAmount == null
            ? "Site-level spend: not reported"
            : `${p.spendAmount} ${p.spendCurrency}`;

        const popup = new Popup({
          offset: 14,
          maxWidth: "300px",
        }).setHTML(
          `<div style="font-family:system-ui,sans-serif;font-size:13px;line-height:1.4">
            <div style="font-weight:700;margin-bottom:4px">${escapeHtml(p.name)}</div>
            <div style="color:#5b6b66;margin-bottom:6px">${escapeHtml(ISLAND_LABELS[p.island])} · ${p.precision === "island" ? "Island-level" : "Named locality"}</div>
            <div style="margin-bottom:6px">${escapeHtml(p.worksNote)}</div>
            <div style="font-weight:600;margin-bottom:4px">${escapeHtml(spendLine)}</div>
            <div style="color:#5b6b66;font-size:12px;margin-bottom:8px">${escapeHtml(p.spendNote)}</div>
            <a href="/projects/${encodeURIComponent(p.projectId)}" style="color:#0d6e5f;font-weight:600;text-decoration:none">Open record →</a>
          </div>`,
        );

        const marker = new Marker({ element: el })
          .setLngLat([p.lng, p.lat])
          .setPopup(popup)
          .addTo(map);
        markers.push(marker);
      }

      if (visible.length > 0) {
        const bounds = new LngLatBounds();
        visible.forEach((p) => bounds.extend([p.lng, p.lat]));
        map.fitBounds(bounds, { padding: 56, maxZoom: 9.5, duration: 600 });
      }
    };

    if (map.isStyleLoaded()) addMarkers();
    else map.once("load", addMarkers);

    return () => {
      markers.forEach((m) => m.remove());
    };
  }, [places]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${className}`}
    >
      <div ref={containerRef} className="h-[420px] w-full sm:h-[560px]" />
      <div className="flex flex-wrap gap-4 border-t border-border px-4 py-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: PRECISION_COLOR.locality }}
          />
          Named locality (works reported)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: PRECISION_COLOR.island }}
          />
          Island-level (amount not split)
        </span>
        <span>Agaléga is listed below — off this map frame.</span>
      </div>
    </div>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
