"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function LatestYoutubeVideo() {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/youtube/latest-video")
      .then((res) => res.json())
      .then((data) => {
        if (data.videoId) setVideoId(data.videoId);
      })
      .catch(console.error);
  }, []);

  if (!videoId) return <LoadingSpinner />;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      aria-label="Latest YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-auto aspect-video"
    />
  );
}
