import { memo } from "react";
import Image from "next/image";

function SheetMusicPreview({
  src,
  title,
  artist,
}: {
  src: string | undefined;
  title: string;
  artist: string;
}) {
  return (
    <Image
      src={src || "/no-image.svg"}
      alt={title + ' ' + artist + ' preview'}
      width={1000}
      height={1000}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.src = "/no-image.svg";
      }}
    />
  );
}

const memoSheetMusicPreview = memo(SheetMusicPreview);

export default memoSheetMusicPreview;