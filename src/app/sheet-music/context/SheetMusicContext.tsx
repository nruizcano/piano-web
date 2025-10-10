"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchElem } from "@/app/lib/fetchElem";
import { SheetMusic } from "@/app/sheet-music/types/SheetMusic";

interface SheetMusicState {
  endpoint: string;
  setEndpoint: (endpoint: string) => void;
  sheetMusic: SheetMusic[];
  setSheetMusic: (sheetMusic: SheetMusic[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isError: boolean;
  setIsError: (isError: boolean) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const SheetMusicContext = createContext<SheetMusicState | undefined>(undefined);

export function SheetMusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialEndpoint = "/api/sheet-music";
  const [endpoint, setEndpoint] = useState(initialEndpoint);
  const [sheetMusic, setSheetMusic] = useState<SheetMusic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchElem(endpoint);
        setSheetMusic(
          Array.isArray(data.sheetMusic) ? data.sheetMusic : [data.sheetMusic],
        );
        setIsError(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setErrorMessage("An error occurred while fetching sheet music.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  return (
    <SheetMusicContext.Provider
      value={{
        endpoint,
        setEndpoint,
        sheetMusic,
        setSheetMusic,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        errorMessage,
        setErrorMessage,
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
