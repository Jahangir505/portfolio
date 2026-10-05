import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  // Overrides the root "index, follow" so both robots tags on the 404 agree.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="pt-40 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[oklch(0.8_0.18_195)] font-semibold mb-2">404</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Page <span className="gradient-text">Not Found</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-[oklch(0.8_0.18_195)] to-[oklch(0.7_0.28_285)] text-background font-semibold rounded-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 glass neon-border font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
