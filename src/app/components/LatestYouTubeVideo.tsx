"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function LatestYoutubeVideo() {
  const [videoId, setVideoId] = useState<string | null>(null);

  const getVideoId = async () => {
    try {
      const response = await fetch("/api/youtube/latest-video", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok && data.success && data.videoId) {
        setVideoId(data.videoId);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideoId();
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
