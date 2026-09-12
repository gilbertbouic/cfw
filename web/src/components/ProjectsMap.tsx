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
import type { Project } from "@/data/types";
import { STATUS_COLORS, STATUS_LABELS } from "@/data/types";

type Props = {
  projects: Project[];
  className?: string;
};

export function ProjectsMap({ projects, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [57.55, -20.25],
      zoom: 8.2,
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

      for (const p of projects) {
        const el = document.createElement("button");
        el.type = "button";
        el.className = "cfw-map-marker";
        el.style.cssText = [
          "width:16px",
          "height:16px",
          "border-radius:9999px",
          `background:${STATUS_COLORS[p.status]}`,
          "border:2px solid #fff",
          "box-shadow:0 1px 4px rgba(0,0,0,.35)",
          "cursor:pointer",
          "padding:0",
        ].join(";");
        el.setAttribute("aria-label", p.title);

        const popup = new Popup({
          offset: 12,
          maxWidth: "280px",
        }).setHTML(
          `<div style="font-family:system-ui,sans-serif;font-size:13px;line-height:1.4">
            <div style="font-weight:700;margin-bottom:4px">${escapeHtml(p.title)}</div>
            <div style="color:#5b6b66;margin-bottom:6px">${STATUS_LABELS[p.status]} · ${escapeHtml(p.district)}</div>
            ${p.pinNote ? `<div style="color:#5b6b66;margin-bottom:6px;font-size:12px">${escapeHtml(p.pinNote)}</div>` : ""}
            <a href="/projects/${encodeURIComponent(p.id)}" style="color:#0d6e5f;font-weight:600;text-decoration:none">Open record →</a>
          </div>`,
        );

        if (p.lng == null || p.lat == null) continue;
        const marker = new Marker({ element: el })
          .setLngLat([p.lng, p.lat])
          .setPopup(popup)
          .addTo(map);
        markers.push(marker);
      }

      const located = projects.filter(
        (p): p is typeof p & { lat: number; lng: number } =>
          p.lat != null && p.lng != null,
      );
      if (located.length > 0) {
        const bounds = new LngLatBounds();
        located.forEach((p) => bounds.extend([p.lng, p.lat]));
        map.fitBounds(bounds, { padding: 48, maxZoom: 10, duration: 600 });
      }
    };

    if (map.isStyleLoaded()) addMarkers();
    else map.once("load", addMarkers);

    return () => {
      markers.forEach((m) => m.remove());
    };
  }, [projects]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${className}`}
    >
      <div ref={containerRef} className="h-[420px] w-full sm:h-[520px]" />
      <div className="flex flex-wrap gap-3 border-t border-border px-4 py-3 text-xs text-muted">
        {(Object.keys(STATUS_COLORS) as (keyof typeof STATUS_COLORS)[]).map(
          (s) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: STATUS_COLORS[s] }}
              />
              {STATUS_LABELS[s]}
            </span>
          ),
        )}
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
