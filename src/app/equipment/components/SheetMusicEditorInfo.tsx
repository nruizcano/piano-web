import Image from "next/image";
import styles from "@/app/equipment/Equipment.module.css";

export default function SheetMusicEditorInfo() {
  return (
    <article id="musescore-studio" className={styles.fadeInUp}>
      <h2>MuseScore Studio</h2>
      <h3>Sheet Music Editor</h3>
      <hr className={styles.hr} />
      <div className={styles.articleContent}>
        <Image
          src="/equipment/musescore-studio.webp"
          alt="MuseScore Studio"
          width={400}
          height={400}
        />
        <p>
          To write and edit sheet music, I use MuseScore Studio. I haven’t tried
          other editors, so I can’t really compare, but this one has worked so
          well for me that I’ve never felt the need to switch. It’s free and easy
          to use.
        </p>
      </div>
    </article>
  );
}
