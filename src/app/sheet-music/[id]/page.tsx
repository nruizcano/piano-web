"use client";

import React, { useEffect } from "react";
import { useSheetMusicContext } from "@/app/sheet-music/context/SheetMusicContext";
import SheetMusicPreview from "@/app/sheet-music/components/SheetMusicPreview";
import SheetMusicDetails from "@/app/sheet-music/components/SheetMusicDetails";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function SheetMusicDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const { setEndpoint, sheetMusic, isLoading, isError, errorMessage } =
    useSheetMusicContext();

  useEffect(() => {
    setEndpoint(`/api/sheet-music/${id}`);
  }, [setEndpoint, id]);

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
          <SheetMusicDetails sheetMusic={sheetMusic[0]} />
        </div>
      )}
    </div>
  );
}
