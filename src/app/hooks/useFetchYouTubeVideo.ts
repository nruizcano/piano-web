import { useState, useEffect } from "react";
import { fetchElem } from "@/app/lib/fetchElem";

export function useFetchYouTubeVideo(endpoint: string) {
    const [videoId, setVideoId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getVideoId() {
            setIsLoading(true);
            try {
                const data = await fetchElem(endpoint);
                if (!data.videoId) {
                    throw new Error("Failed to fetch YouTube video");
                }
                setVideoId(data.videoId);
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getVideoId();
    }, [endpoint]);

    return { videoId, isLoading, isError };
}