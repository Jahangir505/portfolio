import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jahangir Hossain",
  description: "Learn more about Jahangir Hossain - Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <TechStack />
      <Experience />
    </div>
  );
}
