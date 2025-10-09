import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) {
      return NextResponse.json(
        { success:false, error: "Missing YouTube API configuration" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`
    );

    if (!response.ok) {
      const errMsg = await response.text();
      return NextResponse.json(
        { success: false, error: errMsg },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ success: false, error: "No video found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, videoId: data.items[0].id.videoId });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: `Failed to fetch latest video: ${message}` }, { status: 500 });
  }
}
