"use client";

import { useEffect, useState } from "react";
import YouTubeVideoPlayer from "@/app/components/YouTubeVideoPlayer";

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
        console.error(response.status, data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideoId();
  }, []);

  return (
    <YouTubeVideoPlayer url={`https://www.youtube.com/embed/${videoId}`} />
  );
}
