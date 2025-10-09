import { useState, useEffect } from "react";
import { useSheetMusicContext } from "@/app/sheet-music/context/SheetMusicContext";
import { fetchElem } from "@/app/lib/fetchElem";
import { SheetMusic } from "@/app/sheet-music/types/SheetMusic";

export function useFetchSheetMusic(initialEndpoint: string) {
  const [endpoint, setEndpoint] = useState(initialEndpoint);
  const [sheetMusic, setSheetMusic] = useState<SheetMusic[]>([]);
  const { setIsLoading, setIsError, setErrorMessage } = useSheetMusicContext();

  useEffect(() => {
    async function getSheetMusic() {
      setIsLoading(true);
      try {
        const data = await fetchElem(endpoint);
        setSheetMusic(Array.isArray(data.sheetMusic) ? data.sheetMusic : [data.sheetMusic]);
        setIsError(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setErrorMessage("An error occurred while fetching sheet music.");
      } finally {
        setIsLoading(false);
      }
    }
    getSheetMusic();
  }, [endpoint, setIsLoading, setIsError, setErrorMessage]);

  return { sheetMusic, setEndpoint };
}