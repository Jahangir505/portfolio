"use client";

import { experiences } from "@/data/experience";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2023-02" -> "Feb 2023"
function formatMonth(value: string) {
  const [year, month] = value.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[oklch(0.8_0.18_195)] font-semibold mb-2">Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Middle Timeline Border */}
            <div aria-hidden="true" className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gradient-to-b from-[oklch(0.8_0.18_195)] via-[oklch(0.7_0.28_285)] to-[oklch(0.75_0.25_340)] -translate-x-1/2" />

            {experiences.map((exp, index) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  className="relative mb-16 md:mb-20"
                >
                  {/* Timeline Dot - Center */}
                  <div aria-hidden="true" className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[oklch(0.8_0.18_195)] border-4 border-background shadow-lg shadow-[oklch(0.8_0.18_195)]/50 z-10">
                    <div className="absolute inset-0 rounded-full bg-[oklch(0.8_0.18_195)] animate-ping opacity-75" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="glass rounded-xl p-6 border border-white/10 hover:border-[oklch(0.8_0.18_195)]/50 transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 rounded-lg bg-[oklch(0.8_0.18_195)]/10">
                          <Icon className="w-5 h-5 text-[oklch(0.8_0.18_195)]" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-[oklch(0.8_0.18_195)] font-semibold mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.location && <>{exp.location} •{" "}</>}
                            <time dateTime={exp.startDate}>{formatMonth(exp.startDate)}</time> -{" "}
                            {exp.current ? (
                              "Present"
                            ) : (
                              <time dateTime={exp.endDate}>{formatMonth(exp.endDate)}</time>
                            )}
                          </p>
                        </div>
                      </div>

                      {exp.description.length > 0 && (
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[oklch(0.8_0.18_195)] mt-1" aria-hidden="true">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.technologies && (
                        <ul className="flex flex-wrap gap-2 mt-4" aria-label="Technologies used">
                          {exp.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
