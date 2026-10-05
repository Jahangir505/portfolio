import { ProjectDetail } from "@/components/sections/project-detail";
import { projects } from "@/data/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { PERSON_ID, absoluteUrl, jsonLd, siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    path: `/project/${project.slug}`,
    ...(project.image && {
      image: { url: project.image, alt: `Preview of the ${project.title} project` },
    }),
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);
  const path = `/project/${project.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(path)}#project`,
        name: project.title,
        description: project.description,
        url: absoluteUrl(path),
        creator: { "@id": PERSON_ID },
        ...(project.image && { image: absoluteUrl(project.image) }),
        ...(project.tags.length > 0 && { keywords: project.tags.join(", ") }),
        ...(project.liveUrl && { sameAs: project.liveUrl }),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: project.title, path },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <ProjectDetail project={project} related={related} />
    </>
  );
}
