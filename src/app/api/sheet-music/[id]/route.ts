import { NextResponse, type NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { withDatabase } from "@/app/lib/withDatabase";

export async function GET(_req: NextRequest,
    context: { params: Promise<{ id: string }> }) {
    const { id } = await context.params;

    if (!id) {
        return NextResponse.json({ success: false, error: "Missing sheet music ID" }, { status: 400 });
    } else if (!ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, error: "Invalid sheet music ID" }, { status: 400 });
    }

    return withDatabase(async (collection) => {
        const response = await collection.findOne({ _id: new ObjectId(id) });

        if (!response) {
            return NextResponse.json({ success: false, error: "Sheet music not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, sheetMusic: response });
    });
}