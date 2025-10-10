"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSheetMusicContext } from "@/app/sheet-music/context/SheetMusicContext";

export default function SearchSheetMusicForm() {
  const { setEndpoint } = useSheetMusicContext();

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

  const onSubmit = async (input: SearchForm) => {
    if (input.search === "") {
      setEndpoint("/api/sheet-music");
    } else {
      setEndpoint(
        `/api/sheet-music/search?q=${encodeURIComponent(input.search)}`,
      );
    }
  };

  return (
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
        className="bg-[var(--background)] text-lg py-2 px-4 rounded-l-xs min-w-fit focus:outline-0"
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
  );
}
