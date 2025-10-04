export default async function getLatestYoutubeVideo() {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`
    );

    if (!response.ok) {
        throw new Error(`YouTube API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
        throw new Error("No video found");
    }

    return data.items[0].id.videoId;
}