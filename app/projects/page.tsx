import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { jsonLd, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: `Projects | ${siteConfig.name}`,
  description: `Web applications, client websites and mobile apps built by ${siteConfig.name}, a Full-Stack Developer working with React.js, Next.js, Node.js and Laravel.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          ...breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        })}
      />
      <ProjectsExplorer />
    </>
  );
}
