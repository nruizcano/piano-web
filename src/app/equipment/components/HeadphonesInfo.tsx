import Image from "next/image";

export default function HeadphonesInfo() {
  return (
    <article id="audio-technica-ath-m50x">
      <h2>Audio Technica ATH-M50X</h2>
      <h3>Headphones</h3>
      <hr />
      <div className="article-content">
        <Image
          src="/equipment/ath-m50x.webp"
          alt="Audio Technica ATH-M50X"
          width={250}
          height={250}
        />
        <div>
          <p>
            As a shy pianist who prefers not to bother anyone with sound, I
            always practice with headphones on — and the Audio Technica ATH-M50X
            have been the pair of my choice. The audio and build quality are
            outstanding, delivering crisp highs and deep, rich bass that let me
            hear every detail with clarity.
          </p>
          <p>
            They’re also incredibly comfortable, which makes long sessions easy.
            I don’t just use them for piano either — I take them everywhere.
            Since they fold neatly, they’re compact and convenient to carry
            around.
          </p>
          <p>
            They’re on the pricier side (mine were around 200€), but I’d say
            they’re absolutely worth the investment. If you’re looking for a
            more affordable option, the ATH-M30X are a great alternative and
            I’ve heard excellent things about them too.
          </p>
        </div>
      </div>
    </article>
  );
}
