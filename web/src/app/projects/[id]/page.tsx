import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectById } from "@/data/projects";
import { getReportsForProject } from "@/data/reports";
import { getSpendPlacesForProject } from "@/data/spend-places";
import { ProjectDetailView } from "./view";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Record not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${id}` },
    openGraph: { url: `/projects/${id}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();
  const spendPlaces = getSpendPlacesForProject(project.id);
  const reports = getReportsForProject(project.id);

  return (
    <ProjectDetailView
      project={project}
      spendPlaces={spendPlaces}
      reports={reports}
    />
  );
}
