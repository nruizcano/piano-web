"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SheetMusic } from "@/app/models/SheetMusic";
import DifficultyFlags from "@/app/components/DifficultyFlags";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function SheetMusicPage() {
  const [sheetMusic, setSheetMusic] = useState<SheetMusic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/sheet-music")
      .then((res) => res.json() as Promise<SheetMusic[]>)
      .then(setSheetMusic)
      .finally(() => setIsLoading(false))
      .catch(console.error);
  }, [setIsLoading]);

  console.log(sheetMusic.length);

  return (
    <div className="flex flex-col min-w-full pt-8 sm:pt-16">
      <h1>Sheet music</h1>
      <section className="max-w-xl">
        <p>
          These are all of the sheet music I’ve written for my own arrangements.
          I’ve always been passionate about music, and I wanted to share my
          creations with the world.
        </p>
        <p className="italic text-[var(--foreground-secondary)]">
          Disclaimer: Feel totally free to use any of my arrangements for your
          own projects. As long as you give me credit, I’m happy to share them
          with you.
        </p>
      </section>
      <hr className="!my-24" />
      <div className="px-8 py-16 bg-[var(--background-secondary)]">
        {isLoading ? (
          <LoadingSpinner />
        ) : sheetMusic.length < 1 ? (
          <p className="text-center">There are no sheet music available.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sheetMusic.map((sheetMusic) => (
              <li key={sheetMusic._id}>
                <article
                  aria-label={sheetMusic.title + ` sheet music`}
                  className="flex flex-col items-center shadow-md pb-6 rounded-md bg-[var(--background)] hover:shadow-xl hover:scale-105 duration-100"
                >
                  <Image
                    src={sheetMusic.preview ?? "/file.svg"} // TODO: Add 'no preview available' image
                    alt={sheetMusic.title}
                    width={400}
                    height={400} // Required by Next.js but ignore with h-auto in Tailwind CSS
                    className="w-full h-auto"
                  />
                  <DifficultyFlags difficulty={sheetMusic.difficulty} />
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
