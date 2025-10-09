import { SheetMusicProvider } from "@/app/sheet-music/context/SheetMusicContext";

export default function SheetMusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <SheetMusicProvider>
      {children}
    </SheetMusicProvider>
  );
}