import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jahangirhossain.dev'),
  title: {
    default: "Jahangir Hossain | Full Stack Developer | React, Next.js, Node.js Expert",
    template: "%s | Jahangir Hossain"
  },
  description: "Experienced Full Stack Developer in Bangladesh specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Available for freelance projects and full-time opportunities. Expert in building scalable web applications, e-commerce solutions, and custom software development.",
  keywords: [
    // Core Skills
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    
    // Technologies
    "React.js",
    "Next.js 14",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Tailwind CSS",
    "Laravel",
    "PHP Developer",
    
    // Services
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "API Development",
    "E-commerce Development",
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "React Native Developer",
    
    // Location-based
    "Web Developer Bangladesh",
    "Full Stack Developer Dhaka",
    "Freelance Developer Bangladesh",
    "Remote Developer",
    
    // Specific
    "Hire React Developer",
    "Hire Next.js Developer",
    "Freelance Web Developer",
    "Software Engineer",
    "AWS Developer",
  ],
  authors: [{ name: "Jahangir Hossain", url: "https://jahangirhossain.dev" }],
  creator: "Jahangir Hossain",
  publisher: "Jahangir Hossain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jahangirhossain.dev",
    title: "Jahangir Hossain | Full Stack Developer | React & Next.js Expert",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
    siteName: "Jahangir Hossain Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jahangir Hossain - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahangir Hossain | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building beautiful, performant web experiences.",
    images: ["/og-image.jpg"],
    creator: "@jahangirhossain",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jahangirhossain.dev",
  },
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jahangir Hossain",
    url: "https://jahangirhossain.dev",
    image: "https://jahangirhossain.dev/profile.jpg",
    sameAs: [
      "https://github.com/Jahangir505",
      "https://linkedin.com/in/jahangirhossain",
      "https://twitter.com/jahangirhossain"
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Combosoft Ltd"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh"
    },
    email: "jahangir147441@gmail.com",
    telephone: "+8801778175444",
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Full Stack Development",
      "MongoDB",
      "MySQL",
      "AWS",
      "Laravel",
      "PHP"
    ],
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities."
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased grain`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <ReadingProgress />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
