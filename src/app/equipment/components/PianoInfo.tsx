import Image from "next/image";

export default function PianoInfo() {
  return (
    <article id="roland-fp30x">
      <h2>Roland FP-30X</h2>
      <h3>Piano</h3>
      <hr />
      <div className="article-content">
        <Image
          src="/equipment/roland-fp30x.webp"
          alt="Roland FP-30X"
          width={500}
          height={500}
        />
        <div>
          <p>
            The Roland FP-30X has been an absolute game-changer for me. Its
            sound is rich and full of character, coming remarkably close to the
            feel of a real concert piano. On top of that, it offers a variety of
            sound effects that you can easily layer to create unique
            atmospheres.
          </p>
          <p>
            The keys are weighted with just the right balance — substantial
            without being overly heavy. Even with my lighter technique, I can
            comfortably play forte and fast passages. This extra weight also
            gives me better control over dynamics and tonal colors. The keytops
            are designed to prevent slipping and feel great to the touch, which
            adds to the overall playing comfort.
          </p>
          <p>
            In terms of acoustic piano emulation, it really shines.
            Transitioning to an acoustic piano feels natural because the
            sensations are so familiar, thanks to how well it replicates the
            touch and sound.
          </p>
          <p>
            I couldn’t be happier with this purchase. It delivers top-tier
            quality at a more accessible price than many alternatives, and it’s
            by far the best piano I’ve ever owned. Playing it is pure joy, and
            it even helps me perform better — not because the instrument makes
            the pianist, but because the right instrument can either support or
            limit you. I highly recommend it.
          </p>
        </div>
      </div>
    </article>
  );
}
