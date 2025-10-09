import Image from "next/image";

export default function SheetMusicPreview({
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
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.src = "/no-image.svg";
      }}
    />
  );
}
