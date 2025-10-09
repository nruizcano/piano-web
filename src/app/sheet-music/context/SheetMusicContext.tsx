"use client";

import React, { createContext, useContext, useState } from "react";

interface SheetMusicState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isError: boolean;
  setIsError: (isError: boolean) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const SheetMusicContext = createContext<SheetMusicState | undefined>(undefined);

export function SheetMusicProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <SheetMusicContext.Provider
      value={{
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
    throw new Error("useSheetMusicContext must be used within a SheetMusicProvider");
  }
  return context;
}
