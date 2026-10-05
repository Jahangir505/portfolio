import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Production storage: Upstash Redis REST API (Vercel Marketplace → Upstash).
// The integration injects KV_REST_API_URL / KV_REST_API_TOKEN; the
// UPSTASH_REDIS_REST_* names are accepted too. Vercel's filesystem is
// read-only, so the JSON file is only used as a local-development fallback.
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const REDIS_KEY = "portfolio:visitors";

const VISITORS_FILE = path.join(process.cwd(), "data", "visitors.json");

export const dynamic = "force-dynamic";

async function redis(command: "get" | "incr") {
    const res = await fetch(`${REDIS_URL}/${command}/${REDIS_KEY}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
        cache: "no-store",
    });
    if (!res.ok) throw new Error(`Redis ${command} failed: ${res.status}`);
    const { result } = (await res.json()) as { result: string | number | null };
    return Number(result ?? 0);
}

function readFileCount() {
    if (!fs.existsSync(VISITORS_FILE)) return 0;
    return JSON.parse(fs.readFileSync(VISITORS_FILE, "utf-8")).count ?? 0;
}

function incrementFileCount() {
    const count = readFileCount() + 1;
    fs.mkdirSync(path.dirname(VISITORS_FILE), { recursive: true });
    fs.writeFileSync(
        VISITORS_FILE,
        JSON.stringify({ count, lastUpdated: new Date().toISOString() }, null, 2)
    );
    return count;
}

// GET: Retrieve visitor count
export async function GET() {
    try {
        const count = REDIS_URL && REDIS_TOKEN ? await redis("get") : readFileCount();
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Error reading visitor count:", error);
        return NextResponse.json({ error: "Visitor count unavailable" }, { status: 503 });
    }
}

// POST: Increment visitor count
export async function POST() {
    try {
        const count = REDIS_URL && REDIS_TOKEN ? await redis("incr") : incrementFileCount();
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
        return NextResponse.json({ error: "Visitor count unavailable" }, { status: 503 });
    }
}
