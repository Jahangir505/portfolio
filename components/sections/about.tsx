"use client";

import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] rounded-2xl rotate-6 animate-pulse-slow" />
              <div className="relative glass rounded-2xl overflow-hidden border-2 border-white/20">
                <Image
                  src="/profile.png"
                  alt="Jahangir Hossain"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInRight} className="space-y-6">
            <div>
              <motion.p
                variants={staggerItem}
                className="text-[oklch(0.8_0.18_195)] font-semibold mb-2"
              >
                About Me
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Crafting Digital <span className="gradient-text">Experiences</span>
              </motion.h2>
            </div>

            <motion.div variants={staggerItem} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer with a passion for building beautiful, functional, and user-friendly web applications. I&apos;ve worked with various technologies and frameworks to create exceptional digital experiences.
              </p>
              <p>
                I specialize in modern JavaScript frameworks like React and Next.js, combined
                with robust backend technologies like Node.js and databases like MongoDB and
                PostgreSQL. I&apos;m passionate about writing clean, maintainable code and staying
                up-to-date with the latest web technologies.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, reading about the latest trends in tech, or just enjoying a good cup of coffee. I&apos;m always looking for new challenges and opportunities to grow as a developer.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background font-semibold rounded-lg hover:shadow-2xl transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 glass neon-border font-semibold rounded-lg hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Happy Clients", value: "30+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
