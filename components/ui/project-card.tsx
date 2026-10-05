"use client";

import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectImage({
  project,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!project.image) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[oklch(0.8_0.18_195)]/20 to-[oklch(0.7_0.28_285)]/30"
      >
        <span className="text-2xl font-bold gradient-text px-6 text-center">{project.title}</span>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={`Preview of the ${project.title} project`}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}

// The title link is stretched over the whole card (after:inset-0) so the card is
// clickable, while the external links sit above it — no nested <a> elements.
export function ProjectCard({
  project,
  headingLevel = "h3",
  priority = false,
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
  /** Preload the image when the card is above the fold (LCP candidate). */
  priority?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <article className="relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-[oklch(0.8_0.18_195)]/50 focus-within:border-[oklch(0.8_0.18_195)]/50 transition-all duration-300 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <ProjectImage
          project={project}
          priority={priority}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Project Info */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-xs font-semibold text-[oklch(0.8_0.18_195)] uppercase tracking-wide">
            {project.category}
          </span>
        </div>

        <Heading className="text-xl font-bold mb-3 group-hover:text-[oklch(0.8_0.18_195)] transition-colors">
          <Link
            href={`/project/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {project.title}
          </Link>
        </Heading>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies">
            {project.tags.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </li>
            ))}
            {project.tags.length > 3 && (
              <li className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                +{project.tags.length - 3}
              </li>
            )}
          </ul>
        )}

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="relative z-10 flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[oklch(0.8_0.18_195)] hover:underline"
                whileHover={{ scale: 1.05 }}
                aria-label={`Visit the live ${project.title} website (opens in a new tab)`}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Live Site
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[oklch(0.8_0.18_195)] hover:underline"
                whileHover={{ scale: 1.05 }}
                aria-label={`View the ${project.title} source code on GitHub (opens in a new tab)`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                Code
              </motion.a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
