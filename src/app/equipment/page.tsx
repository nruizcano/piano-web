import Image from "next/image";
import Link from "next/link";
import { SocialsInfo } from "@/app/models/Socials";
import "@/app/equipment/module.css";

export default function Equipment() {
  return (
    <div className="flex flex-col gap-24 min-w-full pt-8 sm:pt-16">
      <section id="disclaimer">
        <h1>Equipment</h1>
        <div className="max-w-xl">
          <p>
            Here’s the equipment I currently use to create my videos. I’ve used
            different setups in the past, but this is my up-to-date list.
          </p>
          <p className="italic text-[var(--foreground-secondary)]">
            Disclaimer: I’m not sponsored by any of these brands or products.
            Everything here was purchased with my own money and chosen based on
            my preferences.
          </p>
        </div>
      </section>
      <section id="piano">
        <h2>Roland FP-30X</h2>
        <h3>Piano</h3>
        <hr />
        <article>
          <Image
            src="/equipment/roland-fp30x.webp"
            alt="Roland FP-30X"
            width={500}
            height={500}
          />
          <div>
            <p>
              The Roland FP-30X has been an absolute game-changer for me. Its
              sound is rich and full of character, coming remarkably close to
              the feel of a real concert piano. On top of that, it offers a
              variety of sound effects that you can easily layer to create
              unique atmospheres.
            </p>
            <p>
              The keys are weighted with just the right balance — substantial
              without being overly heavy. Even with my lighter technique, I can
              comfortably play forte and fast passages. This extra weight also
              gives me better control over dynamics and tonal colors. The
              keytops are designed to prevent slipping and feel great to the
              touch, which adds to the overall playing comfort.
            </p>
            <p>
              In terms of acoustic piano emulation, it really shines.
              Transitioning to an acoustic piano feels natural because the
              sensations are so familiar, thanks to how well it replicates the
              touch and sound.
            </p>
            <p>
              I couldn’t be happier with this purchase. It delivers top-tier
              quality at a more accessible price than many alternatives, and
              it’s by far the best piano I’ve ever owned. Playing it is pure
              joy, and it even helps me perform better — not because the
              instrument makes the pianist, but because the right instrument can
              either support or limit you. I highly recommend it.
            </p>
          </div>
        </article>
      </section>
      <section id="headphones">
        <h2>Audio Technica ATH-M50X</h2>
        <h3>Headphones</h3>
        <hr />
        <article>
          <Image
            src="/equipment/ath-m50x.webp"
            alt="Audio Technica ATH-M50X"
            width={250}
            height={250}
          />
          <div>
            <p>
              As a shy pianist who prefers not to bother anyone with sound, I
              always practice with headphones on — and the Audio Technica
              ATH-M50X have been the pair of my choice. The audio and build
              quality are outstanding, delivering crisp highs and deep, rich
              bass that let me hear every detail with clarity.
            </p>
            <p>
              They’re also incredibly comfortable, which makes long sessions
              easy. I don’t just use them for piano either — I take them
              everywhere. Since they fold neatly, they’re compact and convenient
              to carry around.
            </p>
            <p>
              They’re on the pricier side (mine were around 200€), but I’d say
              they’re absolutely worth the investment. If you’re looking for a
              more affordable option, the ATH-M30X are a great alternative and
              I’ve heard excellent things about them too.
            </p>
          </div>
        </article>
      </section>
      <section id="sheet-music-editor">
        <h2>MuseScore Studio</h2>
        <h3>Sheet Music Editor</h3>
        <hr />
        <article>
          <Image
            src="/equipment/musescore-studio.webp"
            alt="MuseScore Studio"
            width={400}
            height={400}
          />
          <p>
            To write and edit sheet music, I use MuseScore Studio. I haven’t
            tried other editors, so I can’t really compare, but this one has
            worked so well for me that I’ve never felt the need to switch. It’s
            free, easy to use, and integrates seamlessly with the{" "}
            <Link
              href={SocialsInfo.MUSESCORE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              MuseScore
            </Link>{" "}
            platform, where I publish my sheet music (along with a shared{" "}
            <Link
              href={SocialsInfo.GOOGLE_DRIVE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Google Drive folder
            </Link>
            ).
          </p>
        </article>
      </section>
      <section id="daw">
        <h2>REAPER</h2>
        <h3>DAW</h3>
        <hr />
        <article>
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
              when it comes to audio editing — I mostly stick to basic tasks
              like making cuts or replacing small mistakes with a better take.
            </p>
            <p>
              At first, the software felt a little overwhelming, but after a
              couple of days I got the hang of the basics and found it much
              easier to use. Regarding its pricing model, it comes with a free
              trial that you can technically keep extending, so it’s practically
              free. For what it offers, it’s a really powerful and flexible
              tool.
            </p>
          </div>
        </article>
      </section>
      <section id="camera">
        <h2>Canon EOS 750D</h2>
        <h3>Camera</h3>
        <hr />
        <article>
          <Image
            src="/equipment/canon-eos-750d.webp"
            alt="Canon EOS 750D"
            width={350}
            height={350}
          />
          <div>
            <p>
              For recording my videos, I use the Canon EOS 750D. To be clear, I
              didn’t buy this camera specifically for filming. Photography used
              to be one of my hobbies, and this was the camera I used and
              decided to keep. So when it came time to record my piano videos,
              it just made sense to use what I already had.
            </p>
            <p>
              Honestly, I don’t really need such a big or expensive camera for
              these videos — I’m simply taking advantage of my old gear. That
              said, the picture quality is excellent, and it’s very easy to use.
              I usually just place it on a tripod, adjust a few basic settings,
              and it looks great. Sometimes I even connect it to my phone
              through the app, which is super convenient because it lets me
              control the camera without touching it — avoiding any accidental
              frame shifts or messing up my positioning.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
