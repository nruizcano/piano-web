"use client";

import { useFetchYouTubeVideo } from "@/app/hooks/useFetchYouTubeVideo";
import YouTubeVideoPlayer from "@/app/components/YouTubeVideoPlayer";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function LatestYoutubeVideo() {
  const { videoId, isLoading, isError } = useFetchYouTubeVideo("/api/youtube/latest-video");

  return isLoading ? (
    <LoadingSpinner />
  ) : isError || !videoId ? (
    <p className="text-center">Failed to load latest video.</p>
  ) : (
    <YouTubeVideoPlayer videoId={videoId} />
  );
}
