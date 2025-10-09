import Image from "next/image";

export default function Banner() {
  // TODO: Change background image
  return (
    <div id="banner" className="relative group">
      <div className="relative">
        <Image
          src="/banner.webp"
          alt="Banner"
          width={1920}
          height={1080}
          className="h-96 w-full object-cover overflow-hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background-dark)] via-[var(--background-dark)]/70 to-transparent h-full" />
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-center w-1/2 md:3/7 lg:w-4/7 xl:w-3/7 text-white gap-4 ml-16">
        <span className="text-4xl sm:text-5xl md:text-6xl">
          Nerea Ruiz Cano
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl">
          Just someone who loves playing piano and sharing music.
        </span>
      </div>
    </div>
  );
}
