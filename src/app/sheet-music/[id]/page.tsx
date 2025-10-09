"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SheetMusic } from "@/app/sheet-music/types/SheetMusic";
import SheetMusicPreview from "@/app/sheet-music/components/SheetMusicPreview";
import DifficultyFlags from "@/app/sheet-music/components/DifficultyFlags";
import YouTubeVideoPlayer from "@/app/components/YouTubeVideoPlayer";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function SheetMusicDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const [sheetMusic, setSheetMusic] = useState<SheetMusic | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getSheetMusic() {
      try {
        const response = await fetch(`/api/sheet-music/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSheetMusic(data.sheetMusic);
          setIsError(false);
        } else {
          console.error(response.status, data.error);
          setIsError(true);
          setErrorMessage("Failed to load sheet music");
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
        setErrorMessage("An error occurred while fetching sheet music.");
      } finally {
        setIsLoading(false);
      }
    }

    getSheetMusic();
  }, [id]);

  return (
    <div className="flex flex-col min-w-full frame-big-padding">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p className="text-center">{errorMessage}</p>
      ) : !sheetMusic ? (
        <p className="text-center">Sheet music not found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <SheetMusicPreview
            src={sheetMusic.preview}
            title={sheetMusic.title}
            artist={sheetMusic.artist}
          />
          <section
            id="sheet-music-details"
            className="text-center sm:text-left"
          >
            <h1 className="!mb-0">{sheetMusic.title}</h1>
            <h2>{sheetMusic.artist}</h2>
            <p>Composed by {sheetMusic.composer}</p>
            <div className="flex flex-row items-center justify-between sm:justify-normal gap-2 sm:gap-8">
              <button
                aria-label="Download sheet music in PDF format"
                className="w-fit"
              >
                <Link href={sheetMusic.file}>Download PDF</Link>
              </button>
              <span className="inline-flex gap-2 items-center">
                <p>Level:</p>
                <DifficultyFlags difficulty={sheetMusic.difficulty} />
              </span>
            </div>
            {sheetMusic.video && <YouTubeVideoPlayer url={sheetMusic.video} />}
            {sheetMusic.description && (
              <p className="text-left">{sheetMusic.description}</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
