"use client";

import React from "react";
import Link from "next/link";
import { useSheetMusicContext } from "@/app/sheet-music/context/SheetMusicContext";
import { useFetchSheetMusic } from "@/app/hooks/useFetchSheetMusic";
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
  const { isLoading, isError, errorMessage } = useSheetMusicContext();
  const { sheetMusic } = useFetchSheetMusic(`/api/sheet-music/${id}`);

  return (
    <div className="flex flex-col min-w-full frame-big-padding">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p className="text-center">{errorMessage}</p>
      ) : !sheetMusic || sheetMusic.length < 1 ? (
        <p className="text-center">Sheet music not found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <SheetMusicPreview
            src={sheetMusic[0].preview}
            title={sheetMusic[0].title}
            artist={sheetMusic[0].artist}
          />
          <section
            id="sheet-music-details"
            className="text-center sm:text-left"
          >
            <h1 className="!mb-0">{sheetMusic[0].title}</h1>
            <h2>{sheetMusic[0].artist}</h2>
            <p>Composed by {sheetMusic[0].composer}</p>
            <div className="flex flex-row items-center justify-between sm:justify-normal gap-2 sm:gap-8">
              <button
                aria-label="Download sheet music in PDF format"
                className="w-fit"
              >
                <Link href={sheetMusic[0].file}>Download PDF</Link>
              </button>
              <span className="inline-flex gap-2 items-center">
                <p>Level:</p>
                <DifficultyFlags difficulty={sheetMusic[0].difficulty} />
              </span>
            </div>
            {sheetMusic[0].video && (
              <YouTubeVideoPlayer url={sheetMusic[0].video} />
            )}
            {sheetMusic[0].description && (
              <p className="text-left">{sheetMusic[0].description}</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
