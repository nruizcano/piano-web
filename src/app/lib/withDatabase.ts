import { NextResponse } from "next/server";
import { Collection, Document } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

export async function withDatabase<T>(
  callback: (collection: Collection<Document>) => Promise<T>
) {
  try {
    const DATABASE_NAME = process.env.DATABASE_NAME;
    const SHEET_MUSIC_COLLECTION = process.env.SHEET_MUSIC_COLLECTION;

    if (!DATABASE_NAME || !SHEET_MUSIC_COLLECTION) {
      return NextResponse.json(
        { success: false, error: "Missing database configuration" },
        { status: 500 }
      );
    }

    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(SHEET_MUSIC_COLLECTION);

    return await callback(collection);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: `Database operation failed: ${message}` },
      { status: 500 }
    );
  }
}
