import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const VISITORS_FILE = path.join(process.cwd(), "data", "visitors.json");

// Ensure the data directory and file exist
function ensureVisitorsFile() {
    const dataDir = path.join(process.cwd(), "data");

    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    if (!fs.existsSync(VISITORS_FILE)) {
        fs.writeFileSync(
            VISITORS_FILE,
            JSON.stringify({ count: 0, lastUpdated: new Date().toISOString() }, null, 2)
        );
    }
}

// GET: Retrieve visitor count
export async function GET() {
    try {
        ensureVisitorsFile();
        const data = fs.readFileSync(VISITORS_FILE, "utf-8");
        const visitors = JSON.parse(data);

        return NextResponse.json({ count: visitors.count });
    } catch (error) {
        console.error("Error reading visitor count:", error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}

// POST: Increment visitor count
export async function POST() {
    try {
        ensureVisitorsFile();
        const data = fs.readFileSync(VISITORS_FILE, "utf-8");
        const visitors = JSON.parse(data);

        visitors.count += 1;
        visitors.lastUpdated = new Date().toISOString();

        fs.writeFileSync(VISITORS_FILE, JSON.stringify(visitors, null, 2));

        return NextResponse.json({ count: visitors.count });
    } catch (error) {
        console.error("Error incrementing visitor count:", error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
