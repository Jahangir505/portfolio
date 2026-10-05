import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    // Consolidate www onto the canonical apex domain (also configure this in Vercel → Domains).
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.devjahangir.com" }],
        destination: "https://devjahangir.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
