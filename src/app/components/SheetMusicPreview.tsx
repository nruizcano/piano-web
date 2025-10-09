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
      width={400}
      height={400} // Required by Next.js but ignore with h-auto in Tailwind CSS className="w-full h-auto"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.src = "/no-image.svg";
      }}
    />
  );
}
