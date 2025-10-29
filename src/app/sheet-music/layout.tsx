"use client";

import { SheetMusicProvider } from "@/app/sheet-music/context/SheetMusicContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function SheetMusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SheetMusicProvider>
        {children}
      </SheetMusicProvider>
    </QueryClientProvider>
  );
}