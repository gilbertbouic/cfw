import { NextResponse } from "next/server";
import { getAllProjects } from "@/data/projects";
import { LEDGER_REVIEWED } from "@/data/types";

export const dynamic = "force-static";

export async function GET() {
  const projects = getAllProjects();
  return NextResponse.json(
    {
      meta: {
        dataset: "climate-fund-watch-mauritius-sourced",
        country: "MU",
        lastReviewed: LEDGER_REVIEWED,
        generatedAt: new Date().toISOString(),
        count: projects.length,
        disclaimer:
          "Independent compilation of public sources. Not an official live feed from government or funders. Amounts that sources do not publish are null.",
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
