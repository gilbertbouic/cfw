import { NextResponse } from "next/server";
import { getAllProjects } from "@/data/projects";
import { projectsToCsv } from "@/lib/projects";

export const dynamic = "force-static";

export async function GET() {
  const csv = projectsToCsv(getAllProjects());
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="climate-fund-watch-mauritius-sourced.csv"',
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
