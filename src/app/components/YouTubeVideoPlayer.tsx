
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function YouTubeVideoPlayer({ url }: { url: string }) {
  if (!url) return <LoadingSpinner />;
  
  return (
    <iframe
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-auto aspect-video"
    />
  );
}