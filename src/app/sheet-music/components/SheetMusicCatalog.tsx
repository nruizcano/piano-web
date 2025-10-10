"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSheetMusicContext } from "@/app/sheet-music/context/SheetMusicContext";
import SearchSheetMusicForm from "@/app/sheet-music/components/SearchSheetMusicForm";
import SheetMusicPreview from "@/app/sheet-music/components/SheetMusicPreview";
import DifficultyFlags from "@/app/sheet-music/components/DifficultyFlags";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function SheetMusicCatalog() {
  const { setEndpoint, sheetMusic, isLoading, isError, errorMessage } =
    useSheetMusicContext();

    useEffect(() => {
      setEndpoint("/api/sheet-music");
    }, [setEndpoint]);

  return (
    <div className="p-8 bg-[var(--background-secondary)]">
      <SearchSheetMusicForm />
      <div id="sheet-music-results">
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <p className="text-center">{errorMessage}</p>
        ) : sheetMusic.length < 1 ? (
          <p className="text-center">There are no sheet music available.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center items-stretch">
            {sheetMusic.map((sheetMusic) => (
              <li
                key={sheetMusic._id}
                id={(sheetMusic.title + "-" + sheetMusic.artist)
                  .toLowerCase()
                  .replaceAll(" ", "-")}
                className="flex"
              >
                <Link
                  href={`/sheet-music/${sheetMusic._id}`}
                  className="flex flex-col items-center text-center shadow-md pb-6 rounded-md bg-[var(--background)] hover:shadow-xl hover:scale-105 duration-100"
                >
                  <div className="flex flex-grow">
                    <SheetMusicPreview
                      src={sheetMusic.preview}
                      title={sheetMusic.title}
                      artist={sheetMusic.artist}
                    />
                  </div>
                  <h3>{sheetMusic.title}</h3>
                  <h4 className="mb-2">{sheetMusic.artist}</h4>
                  <DifficultyFlags difficulty={sheetMusic.difficulty} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
