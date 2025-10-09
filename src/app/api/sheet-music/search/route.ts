import { NextResponse } from "next/server";
import { withDatabase } from "@/app/lib/withDatabase";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json({ success: false, error: "Missing sheet music title or artist" }, { status: 400 });
    };

    return withDatabase(async (collection) => {
        // Case insensitive search
        const regex = new RegExp(query, "i");

        const response = await collection.find({ $or: [{ title: { $regex: regex } }, { artist: { $regex: regex } }], }).toArray();

        if (!response) {
            return NextResponse.json({ success: false, error: "Sheet music not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, sheetMusic: response });
    });
}