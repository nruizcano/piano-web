import { NextResponse } from "next/server";
import { withDatabase } from "@/app/lib/withDatabase";

export async function GET() {
    return withDatabase(async (collection) => {
        const response = await collection.find().toArray();
        if (!response) {
            return NextResponse.json({ error: "Sheet music not found" }, { status: 404 });
        }

        return NextResponse.json(response);
    });
}