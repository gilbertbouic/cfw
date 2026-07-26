import { NextResponse } from "next/server";
import { getAllProjects } from "@/data/projects";

export const dynamic = "force-static";

export async function GET() {
  const projects = getAllProjects();
  return NextResponse.json(
    {
      meta: {
        dataset: "climate-fund-watch-demo",
        country: "MU",
        generatedAt: new Date().toISOString(),
        count: projects.length,
        disclaimer:
          "Curated demo data for product illustration. Not an official live feed.",
      },
      projects,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
