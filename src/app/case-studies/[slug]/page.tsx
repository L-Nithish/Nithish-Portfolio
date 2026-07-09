import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { CaseStudyInteractive } from "./CaseStudyInteractive";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyInteractive project={project} />;
}
