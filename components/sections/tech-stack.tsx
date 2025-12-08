"use client";

import { skills } from "@/data/skills";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";

export function TechStack() {
  const categories = ["Frontend", "Backend", "Database", "DevOps", "Tools"] as const;

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[oklch(0.8_0.18_195)] font-semibold mb-2">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            
            return (
              <motion.div
                key={category}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                <motion.h3
                  variants={staggerItem}
                  className="text-2xl font-bold text-foreground"
                >
                  {category}
                </motion.h3>
                
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative"
                    >
                      <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[oklch(0.8_0.18_195)]/50">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <div className="font-semibold text-sm mb-2">{skill.name}</div>
                        
                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {skill.proficiency}%
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
