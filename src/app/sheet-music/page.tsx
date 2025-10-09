"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import { SheetMusic } from "@/app/sheet-music/types/SheetMusic";
import SheetMusicPreview from "@/app/sheet-music/components/SheetMusicPreview";
import DifficultyFlags from "@/app/sheet-music/components/DifficultyFlags";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function SheetMusicPage() {
  const [sheetMusic, setSheetMusic] = useState<SheetMusic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAllSheetMusic = async () => {
    try {
      const response = await fetch("/api/sheet-music", {
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
      setErrorMessage("An arror occured while fetching sheet music.");
    } finally {
      setIsLoading(false);
    }
  };

  const searchSheetMusic = async (input: SearchForm) => {
    if (input.search === "") {
      await getAllSheetMusic();
    } else {
      try {
        const response = await fetch(
          `/api/sheet-music/search?q=${encodeURIComponent(input.search)}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        const data = await response.json();

        if (response.ok && data.success) {
          setSheetMusic(data.sheetMusic);
          setIsError(false);
        } else {
          console.error(response.status, data.error);
          setIsError(true);
          setErrorMessage("Failed to find sheet music");
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
        setErrorMessage("An arror occured while searching sheet music.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getAllSheetMusic();
  }, []);

  const searchSchema = z.object({
    search: z.string(),
  });

  type SearchForm = z.infer<typeof searchSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = async (data: SearchForm) => {
    setIsLoading(true);
    await searchSheetMusic(data);
  };

  return (
    <div className="flex flex-col min-w-full frame-big-padding">
      <h1>Sheet music</h1>
      <section id="page-info" className="page-intro">
        <p>
          These are all of the sheet music I’ve written for my own arrangements.
          I’ve always been passionate about music, and I wanted to share my
          creations with the world.
        </p>
        <p className="disclaimer">
          Disclaimer: Feel totally free to use any of my arrangements for your
          own projects. As long as you give me credit, I’m happy to share them
          with you.
        </p>
      </section>
      <section
        id="sheet-music-search"
        className="p-8 bg-[var(--background-secondary)]"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="search-sheet-music-form"
          className="mb-8 inline-flex items-center"
        >
          <legend className="sr-only">Search sheet music</legend>
          <input
            type="search"
            placeholder="Search sheet music..."
            {...register("search")}
            className="bg-[var(--background)] text-lg py-2 px-4 rounded-l-xs min-w-fit"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Search"
            className="!p-3 !rounded-l-none"
          >
            <Image
              src="/search.svg"
              alt="Search icon"
              height={20}
              width={20}
              className="opacity-60"
            />
          </button>
        </form>
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
      </section>
    </div>
  );
}
