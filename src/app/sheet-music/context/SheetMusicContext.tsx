"use client";

import React, { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchElem } from "@/app/lib/fetchElem";
import { SheetMusic } from "@/app/sheet-music/types/SheetMusic";

interface SheetMusicState {
  endpoint: string;
  setEndpoint: (endpoint: string) => void;
  sheetMusic: SheetMusic[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

interface SheetMusicResponse {
  success: boolean;
  sheetMusic: SheetMusic[];
}

const SheetMusicContext = createContext<SheetMusicState | undefined>(undefined);

export function SheetMusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialEndpoint = "/api/sheet-music";
  const [endpoint, setEndpoint] = useState(initialEndpoint);

  const { data, isLoading, isError, error } = useQuery<SheetMusicResponse>({
    queryKey: ["sheetMusic", endpoint],
    queryFn: () => fetchElem(endpoint),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  if (error) {
    console.error("Error fetching sheet music:", error);
  }

  const sheetMusic = Array.isArray(data?.sheetMusic)
    ? data.sheetMusic
    : data?.sheetMusic
    ? [data.sheetMusic]
    : [];

  return (
    <SheetMusicContext.Provider
      value={{
        endpoint,
        setEndpoint,
        sheetMusic,
        isLoading,
        isError,
        errorMessage: isError
          ? "An error occured while fetching sheet music."
          : "",
      }}
    >
      {children}
    </SheetMusicContext.Provider>
  );
}

export function useSheetMusicContext() {
  const context = useContext(SheetMusicContext);
  if (!context) {
    throw new Error(
      "useSheetMusicContext must be used within a SheetMusicProvider",
    );
  }
  return context;
}
