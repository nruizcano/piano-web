import Banner from "@/app/components/Banner";
import PinnedPages from "@/app/components/PinnedPages";
import LatestYoutubeVideo from "@/app/components/LatestYouTubeVideo";

export default async function Home() {
  return (
    <div className="flex flex-col gap-18 min-w-full">
      <Banner />
      <hr />
      <PinnedPages />
      <hr />
      <section
        id="latest-video"
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl mb-6">Latest video</h2>
        <LatestYoutubeVideo />
      </section>
    </div>
  );
}
