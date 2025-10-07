import Image from "next/image";
import { Difficulty, SheetMusic } from "@/app/models/SheetMusic";
import DifficultyFlags from "@/app/components/DifficultyFlags";

const sheetMusic: SheetMusic[] = [
  {
    id: "1",
    title: "The Blues",
    artist: "The Beatles",
    composer: "John Lennon",
    description: "A classic blues song by The Beatles.",
    difficulty: Difficulty.BEGINNER,
    file: "the-blues.pdf",
    preview: "/file.svg",
    video: "/sheet-music/the-blues.mp4",
  },
  {
    id: "2",
    title: "The Beatles",
    artist: "The Beatles",
    composer: "John Lennon",
    description: "A classic song by The Beatles.",
    difficulty: Difficulty.INTERMEDIATE,
    file: "the-beatles.pdf",
    preview: "/file.svg",
    video: "/sheet-music/the-beatles.mp4",
  },
  {
    id: "3",
    title: "The Rolling Stones",
    artist: "The Rolling Stones",
    composer: "Mick Jagger",
    description: "A classic rock song by The Rolling Stones.",
    difficulty: Difficulty.ADVANCED,
    file: "the-rolling-stones.pdf",
    preview: "/file.svg",
    video: "/sheet-music/the-rolling-stones.mp4",
  },
  {
    id: "4",
    title: "The Beatles",
    artist: "The Beatles",
    composer: "John Lennon",
    description: "A classic song by The Beatles.",
    file: "the-beatles.pdf",
    preview: "/file.svg",
    video: "/sheet-music/the-beatles.mp4",
  },
];

export default function SheetMusicPage() {
  return (
    <div className="flex flex-col min-w-full pt-8 sm:pt-16">
      <h1>Sheet music</h1>
      <section className="max-w-xl">
        <p>
          These are all of the sheet music I’ve written for my own arrangements.
          I’ve always been passionate about music, and I wanted to share my
          creations with the world.
        </p>
        <p className="italic text-[var(--foreground-secondary)]">
          Disclaimer: Feel totally free to use any of my arrangements for your
          own projects. As long as you give me credit, I’m happy to share them
          with you.
        </p>
      </section>
      <hr className="!my-24" /> 
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-16 bg-[var(--background-secondary)]">
        {sheetMusic.map((sheetMusic) => ( // TODO: Same row elems' height should be equal
          <li key={sheetMusic.id}>
            <article
              aria-label={sheetMusic.title + ` sheet music`}
              className="flex flex-col items-center shadow-md px-8 py-10 rounded-md bg-[var(--background)] hover:shadow-xl hover:scale-105 duration-100"
            >
              <Image
                src={sheetMusic.preview ?? "/file.svg"} // TODO: Add 'no preview available' image
                alt={sheetMusic.title}
                width={120}
                height={120}
              />
              <h3 className="mt-6">{sheetMusic.title}</h3>
              <h4 className="text-lg mb-8">{sheetMusic.artist}</h4>
              <DifficultyFlags difficulty={sheetMusic.difficulty} />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
