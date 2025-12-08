import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </>
  );
}
