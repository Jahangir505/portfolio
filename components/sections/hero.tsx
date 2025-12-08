"use client";

import { FloatingOrb } from "@/components/3d/floating-orb";
import { GithubActivity } from "@/components/ui/github-activity";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Building the Future",
  "Turning Ideas into Reality",
  "Creating Digital Experiences",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <FloatingOrb />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            variants={staggerItem}
            className="text-[oklch(0.8_0.18_195)] text-lg md:text-xl font-medium mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text neon-glow">Jahangir Hossain</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            variants={staggerItem}
            className="h-16 md:h-20 mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I craft beautiful, performant web applications using modern technologies.
            Specializing in React, Next.js, Node.js, and everything in between.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background font-semibold rounded-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.7_0.28_285)] to-[oklch(0.75_0.25_340)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              className="group px-8 py-4 glass neon-border font-semibold rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                View Work
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            variants={staggerItem}
            className="mt-16"
          >
            <GithubActivity />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[oklch(0.8_0.18_195)] rounded-full p-1"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-[oklch(0.8_0.18_195)] rounded-full mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
