import Banner from "@/app/components/Banner";
import HomeInfoCards from "@/app/components/HomeInfoCards";
import getLatestYoutubeVideo from "./lib/getLatestYoutubeVideo";

export default async function Home() {
  const videoId = await getLatestYoutubeVideo();

  return (
    <div className="flex flex-col gap-18 min-w-full">
      <section id="banner">
        <Banner />
      </section>
      <hr />
      <section
        id="info-cards"
        className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}
      >
        <HomeInfoCards />
      </section>
      <hr />
      <section
        id="latest-video"
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl mb-6">Latest video</h2>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-auto aspect-video"
        />
      </section>
    </div>
  );
}
