export function extractYouTubeIdFromUrl(url: string): string | null {
    const regex = /(?:youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}