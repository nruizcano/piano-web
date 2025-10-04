import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative group">
      <div className="relative">
        <Image
          src="/banner"
          alt="Banner"
          width={1920}
          height={1080}
          className="h-96 w-full object-cover overflow-hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background-dark)] via-[var(--background-dark)]/70 to-transparent h-full" />
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-center w-2/5 text-white gap-4 ml-16">
        <h1 className="text-6xl">Nerea Ruiz Cano</h1>
        <h2>This is a personal website to show my projects and blog posts.</h2>
      </div>
    </div>
  );
}
