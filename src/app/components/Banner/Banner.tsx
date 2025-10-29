import Image from "next/image";
import styles from "@/app/components/Banner/Banner.module.css";

export default function Banner() {
  return (
    <div id="banner" className="relative group overflow-hidden">
      <div className="relative">
        <Image
          src="/banner.webp"
          alt="Banner"
          width={1920}
          height={1080}
          className="h-72 lg:h-96 w-full object-cover overflow-hidden"
        />
        <div className={`absolute inset-0 bg-gradient-to-r from-[var(--background-dark)] via-[var(--background-dark)]/50 to-transparent h-full ${styles.fadeIn}`} />
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-center w-full lg:w-5/7 text-white gap-4 px-6 lg:px-16">
        <span className={`text-4xl sm:text-5xl md:text-6xl ${styles.slideInLeft}`}>
          Nerea Ruiz Cano
        </span>
        <span className={`text-2xl sm:text-3xl md:text-4xl ${styles.slideInLeftDelay}`}>
          Just someone who loves playing piano and sharing music.
        </span>
      </div>
    </div>
  );
}
