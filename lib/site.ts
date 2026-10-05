// Central identity + URL config. Every canonical, sitemap, Open Graph and
// JSON-LD URL is built from SITE_URL so the production domain is the only
// public identity, even when the site is reached through a *.vercel.app URL.

const PRODUCTION_URL = "https://devjahangir.com";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production" ? PRODUCTION_URL : "http://localhost:3000")
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Muhammad Jahangir Hossain",
  shortName: "Jahangir Hossain",
  jobTitle: "Full-Stack Developer",
  role: "Full-Stack & Front-End Developer",
  location: { locality: "Dhaka", country: "Bangladesh" },
  email: "jahangir147441@gmail.com",
  description:
    "Muhammad Jahangir Hossain is a Full-Stack and Front-End Developer building fast web applications with React.js, Next.js, TypeScript, Node.js and Laravel.",
  // Stable, crawlable URL of the real profile photo (public/muhammad-jahangir-hossain.jpg).
  image: {
    path: "/muhammad-jahangir-hossain.jpg",
    width: 712,
    height: 776,
    alt: "Muhammad Jahangir Hossain - Full-Stack Developer",
  },
  cvPath: "/cv/muhammad-jahangir-hossain-cv.pdf",
  // Only verified public profiles. Add others (e.g. X/Twitter, Stack Overflow)
  // here once they exist; they flow into the footer, contact section and Person sameAs.
  social: {
    github: "https://github.com/jahangir505",
    linkedin: "https://www.linkedin.com/in/dev-jahangir/",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "WordPress",
    "WooCommerce",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "REST APIs",
    "Web Application Development",
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Serialize JSON-LD safely for a <script> tag.
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
