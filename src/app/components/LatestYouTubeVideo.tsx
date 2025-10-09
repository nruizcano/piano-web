"use client";

import { useEffect, useState } from "react";
import { fetchElem } from "@/app/lib/fetchElem";
import YouTubeVideoPlayer from "@/app/components/YouTubeVideoPlayer";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function LatestYoutubeVideo() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getVideoId() {
      setIsLoading(true);
      try {
        const data = await fetchElem("/api/youtube/latest-video");
        if (!data.videoId) {
          throw new Error("Failed to fetch latest YouTube video");
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
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : isError ? (
    <p className="text-center">Failed to load latest video.</p>
  ) : (
    <YouTubeVideoPlayer url={`https://www.youtube.com/embed/${videoId}`} />
  );
}
