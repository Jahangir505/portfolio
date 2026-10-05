import { Experience } from "@/components/sections/experience";
import { breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";
import { WEBSITE_ID, absoluteUrl, jsonLd, siteConfig } from "@/lib/site";
import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: `About ${siteConfig.name} | Full-Stack Developer`,
  description: `${siteConfig.name} (Jahangir Hossain) is a Full-Stack and Front-End Developer in Dhaka, Bangladesh, working with React.js, Next.js, Node.js and Laravel.`,
  path: "/about",
});

const expertise = [
  { area: "Front end", skills: "React.js, Next.js, TypeScript, JavaScript, Redux, Zustand, Tailwind CSS" },
  { area: "Back end", skills: "Node.js, Express.js, Laravel, PHP, REST APIs" },
  { area: "Databases", skills: "MySQL, PostgreSQL, MongoDB, Prisma" },
  { area: "CMS & e-commerce", skills: "WordPress, WooCommerce" },
  { area: "Infrastructure", skills: "Docker, AWS, Nginx, CI/CD pipelines" },
  { area: "Mobile", skills: "React Native, Expo" },
];

const clientSites = [
  { name: "Top Brand Outlet", href: "https://topbrandoutlet.co.uk/", note: "e-commerce store for branded products" },
  { name: "Connexus IT", href: "https://connexusit.ie/", note: "IT services company website" },
  { name: "Ummahsoft Ltd", href: "https://ummahsoftltd.com/", note: "software company website" },
];

const linkClass = "text-[oklch(0.8_0.18_195)] hover:underline";

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl("/about")}#webpage`,
        url: absoluteUrl("/about"),
        name: `About ${siteConfig.name}`,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: personSchema,
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 items-center max-w-5xl mx-auto mb-20">
            <div className="relative w-full max-w-[80%] sm:max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] rounded-2xl rotate-6" />
              <div className="relative glass rounded-2xl overflow-hidden border-2 border-white/20">
                <Image
                  src={siteConfig.image.path}
                  alt={siteConfig.image.alt}
                  width={siteConfig.image.width}
                  height={siteConfig.image.height}
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div>
              <p className="text-[oklch(0.8_0.18_195)] font-semibold mb-2">{siteConfig.role}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">{siteConfig.name}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I&apos;m Muhammad Jahangir Hossain (most people just call me Jahangir), a
                Full-Stack and Front-End Developer based in Dhaka, Bangladesh. I build web
                applications with React.js, Next.js and TypeScript, backed by Node.js and Laravel.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="px-5 py-2.5 glass neon-border rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="px-5 py-2.5 glass neon-border rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={siteConfig.cvPath}
                  download
                  className="px-5 py-2.5 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background rounded-lg font-semibold flex items-center gap-2"
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </div>
          </header>

          <div className="max-w-3xl mx-auto space-y-14 text-muted-foreground leading-relaxed">
            <section aria-labelledby="background">
              <h2 id="background" className="text-3xl font-bold text-foreground mb-4">
                Professional Background
              </h2>
              <div className="space-y-4">
                <p>
                  I started working professionally in August 2020 at eDorpon Ltd in Dhaka, building
                  data-driven applications with Laravel, MySQL and JavaScript, along with React and
                  Next.js websites and a few React Native mobile apps.
                </p>
                <p>
                  From February 2021 to April 2023 I worked remotely as a Front-End Developer for
                  Glostars, a team based in Finland. I led the front-end work there, built the UI with
                  Tailwind CSS and looked after deployments on AWS.
                </p>
                <p>
                  From February 2023 to April 2025 I was a Full-Stack Developer at Combosoft Ltd in
                  Dhaka, where I led a technical team, managed AWS infrastructure and deployments, and
                  mentored junior developers.
                </p>
                <p>
                  Since May 2025 I&apos;ve been working as a Front-End Developer at Ideeza.
                </p>
                <p>
                  I hold a B.Sc. in Computer Science and Engineering from Uttara University and a
                  Diploma in Computer Science from Narsingdi Polytechnic Institute.
                </p>
              </div>
            </section>

            <section aria-labelledby="expertise">
              <h2 id="expertise" className="text-3xl font-bold text-foreground mb-4">
                Technical Expertise
              </h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item) => (
                  <div key={item.area} className="glass rounded-xl p-5 border border-white/10">
                    <dt className="font-semibold text-foreground mb-1">{item.area}</dt>
                    <dd className="text-sm">{item.skills}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="what-i-build">
              <h2 id="what-i-build" className="text-3xl font-bold text-foreground mb-4">
                What I Build
              </h2>
              <div className="space-y-4">
                <p>
                  Most of my projects are web applications: admin dashboards, e-commerce platforms,
                  company websites and the APIs behind them. I&apos;ve built a real-time e-commerce
                  platform with React, Node.js and MongoDB, and led a React Native app for a
                  transportation company.
                </p>
                <p>Some live client websites I&apos;ve worked on:</p>
                <ul className="space-y-2">
                  {clientSites.map((site) => (
                    <li key={site.href}>
                      <a href={site.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {site.name}
                      </a>{" "}
                      - {site.note}
                    </li>
                  ))}
                </ul>
                <p>
                  You can see more on the{" "}
                  <Link href="/projects" className={linkClass}>
                    projects page
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="current-focus">
              <h2 id="current-focus" className="text-3xl font-bold text-foreground mb-4">
                Current Focus
              </h2>
              <p>
                Right now I&apos;m focused on full-stack work with Next.js and TypeScript: server
                rendering, performance and accessibility, and keeping codebases easy for a team to
                work in. If you have a project in mind,{" "}
                <Link href="/#contact" className={linkClass}>
                  get in touch
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </article>

      <Experience />
    </>
  );
}
