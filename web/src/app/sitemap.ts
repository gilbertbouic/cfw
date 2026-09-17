import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { LEDGER_REVIEWED } from "@/data/types";

const BASE = "https://cfw.mkweli.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LEDGER_REVIEWED);

  const staticPaths = [
    "",
    "/about",
    "/get-involved",
    "/landscape",
    "/map",
    "/problem-solution",
    "/projects",
    "/reports",
    "/sources",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" || path === "/projects" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/projects" ? 0.9 : 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${BASE}/projects/${p.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries];
}
