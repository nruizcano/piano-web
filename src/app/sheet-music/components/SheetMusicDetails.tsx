import Link from "next/link";
import Image from "next/image";
import { SheetMusic } from "@/app/sheet-music/types/SheetMusic";
import { extractYouTubeIdFromUrl } from "@/app/lib/extractYouTubeIdFromUrl";
import DifficultyFlags from "@/app/sheet-music/components/DifficultyFlags";
import YouTubeVideoPlayer from "@/app/components/YouTubeVideoPlayer";

export default function SheetMusicDetails({
  sheetMusic,
}: {
  sheetMusic: SheetMusic;
}) {
  let videoId;
  if (sheetMusic.video) videoId = extractYouTubeIdFromUrl(sheetMusic.video);

  return (
    <div id="sheet-music-details" className="text-center sm:text-left">
      <h1 className="!mb-0">{sheetMusic.title}</h1>
      <h2>{sheetMusic.artist}</h2>
      <p>Composed by {sheetMusic.composer}.</p>
      <div className="flex flex-row items-center justify-between sm:justify-normal gap-2 sm:gap-8">
        <button
          aria-label="Download sheet music in PDF format"
          className="w-fit"
        >
          <Link href={sheetMusic.file} className="inline-flex gap-2 items-center">
            <Image
              src="/file.svg"
              alt="File icon"
              height={16}
              width={16}
              className="opacity-70"
            />
            <span>Download PDF</span>
          </Link>
        </button>
        <span className="inline-flex gap-2 items-center">
          <p>Level:</p>
          <DifficultyFlags difficulty={sheetMusic.difficulty} />
        </span>
      </div>
      {videoId && <YouTubeVideoPlayer videoId={videoId} />}
      {sheetMusic.description && (
        <p className="text-left">{sheetMusic.description}</p>
      )}
    </div>
  );
}
