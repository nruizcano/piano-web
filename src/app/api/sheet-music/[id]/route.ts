import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { withDatabase } from "@/app/lib/withDatabase";

interface Params {
    params: { id: string };
}

export async function GET(_req: Request, { params }: Params) {
    const { id } = await params;

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