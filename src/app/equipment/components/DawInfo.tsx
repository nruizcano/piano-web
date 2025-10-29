import Image from "next/image";
import styles from "@/app/equipment/Equipment.module.css";

export default function DawInfo() {
  return (
    <article id="reaper" className={styles.fadeInUp}>
      <h2>REAPER</h2>
      <h3>DAW</h3>
      <hr className={styles.hr} />
      <div className={styles.articleContent}>
        <Image
          src="/equipment/reaper.webp"
          alt="REAPER"
          width={400}
          height={400}
        />
        <div>
          <p>
            As my DAW, I use REAPER. I simply connect my piano to the computer
            with a MIDI cable and record directly into it. I’m not an expert
            when it comes to audio editing — I mostly stick to basic tasks like
            making cuts or replacing small mistakes with a better take.
          </p>
          <p>
            At first, the software felt a little overwhelming, but after a
            couple of days I got the hang of the basics and found it much easier
            to use. Regarding its pricing model, it comes with a free trial that
            you can technically keep extending, so it’s practically free. For
            what it offers, it’s a really powerful and flexible tool.
          </p>
        </div>
      </div>
    </article>
  );
}
