"use client";

import { projects } from "@/data/projects";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[oklch(0.8_0.18_195)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <div>
              <motion.div variants={staggerItem} className="mb-4">
                <span className="text-sm font-semibold text-[oklch(0.8_0.18_195)] uppercase tracking-wide">
                  {project.category}
                </span>
              </motion.div>
              
              <motion.h1
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {project.title}
              </motion.h1>
              
              <motion.p
                variants={staggerItem}
                className="text-xl text-muted-foreground"
              >
                {project.description}
              </motion.p>
            </div>

            <motion.div variants={staggerItem} className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background font-semibold rounded-lg hover:shadow-2xl transition-shadow flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass neon-border font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
            </motion.div>

            <motion.div variants={staggerItem} className="glass rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="glass rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden glass border border-white/10"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/project/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="glass rounded-xl overflow-hidden border border-white/10 hover:border-[oklch(0.8_0.18_195)]/50 transition-all">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-[oklch(0.8_0.18_195)] transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
