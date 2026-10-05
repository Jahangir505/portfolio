import { SITE_URL, siteConfig } from "@/lib/site";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = `${siteConfig.name} - ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", siteConfig.image.path));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #0b0b12 0%, #141428 100%)",
          color: "#f5f5f7",
          padding: "0 72px",
          gap: 64,
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={380}
          height={414}
          style={{ borderRadius: 32, border: "4px solid #22d3ee", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#22d3ee", fontWeight: 600 }}>{new URL(SITE_URL).host}</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, marginTop: 16 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 38, color: "#a78bfa", marginTop: 20, fontWeight: 600 }}>
            {siteConfig.role}
          </div>
          <div style={{ fontSize: 28, color: "#b4b4c0", marginTop: 28 }}>
            React.js · Next.js · TypeScript · Node.js · Laravel
          </div>
        </div>
      </div>
    ),
    size
  );
}
