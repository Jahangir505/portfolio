"use client";

import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                  src={siteConfig.image.path}
                  alt={siteConfig.image.alt}
                  width={siteConfig.image.width}
                  height={siteConfig.image.height}
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="w-full h-full object-cover"
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
                Building Reliable <span className="gradient-text">Web Applications</span>
              </motion.h2>
            </div>

            <motion.div variants={staggerItem} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Muhammad Jahangir Hossain, a Full-Stack and Front-End Developer based in
                Dhaka, Bangladesh. I&apos;ve been building for the web professionally since 2020, at
                eDorpon, with Glostars&apos; remote team in Finland and at Combosoft, and I&apos;m now a
                Front-End Developer at Ideeza.
              </p>
              <p>
                Most of my work happens in React.js, Next.js and TypeScript on the front end, with
                Node.js, Express and Laravel behind it. I also build WordPress and WooCommerce sites,
                and I&apos;m comfortable with MySQL, PostgreSQL, Prisma and Docker when a project needs them.
              </p>
              <p>
                I care about interfaces that load quickly, work on every screen size and stay easy to
                maintain after launch, from dashboards and e-commerce stores to company websites and
                internal tools.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={siteConfig.cvPath}
                download
                className="px-6 py-3 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background font-semibold rounded-lg hover:shadow-2xl transition-shadow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" aria-hidden="true" />
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

              <Link
                href="/about"
                className="px-6 py-3 font-semibold rounded-lg text-[oklch(0.8_0.18_195)] hover:underline"
              >
                More About Me →
              </Link>
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
