import Link from "next/link";
import { Socials, SocialsInfo } from "@/app/models/Socials";
import "@/app/about/module.css";

function SocialLink({ social }: { social: Socials }) {
  return (
    <Link
      href={SocialsInfo[social].url}
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      {SocialsInfo[social].name}
    </Link>
  );
}

export default function About() {
  return (
    <div className="flex flex-col gap-12 min-w-full pt-8 sm:pt-16">
      <section id="background">
        <h2>Background</h2>
        <hr />
        <p>
          I was born in Málaga, Spain, in 2002, and I’ve lived here my whole
          life — though I’ve always dreamed of moving abroad, currently with
          Germany in mind.
        </p>
        <p>
          Even though neither of my parents pursued music professionally, I grew
          up surrounded by it. My dad plays the guitar, and our home was always
          filled with music. Oasis was on repeat and eventually became my
          all-time favorite band, but I also grew up listening to Green Day, The
          Beatles, Queen, and The Rolling Stones. On the Spanish music scene, I
          was heavily influenced by Pereza, Love of Lesbian, Miss Caffeina, and
          Iván Ferreiro. I feel very lucky to have developed such a diverse and
          rich taste in music.
        </p>
        <p>
          Despite being constantly exposed to music, I didn’t start playing an
          instrument until I was 11 years old.
        </p>
      </section>
      <section id="discovering-the-piano">
        <h2>Discovering the Piano</h2>
        <hr />
        <p>
          My first real contact with the piano came thanks to my best friend at
          the time, who had just started learning. It immediately caught my
          attention, and the idea of sharing that hobby with her sounded fun.
          Not everyone was supportive — some people even said it would be too
          difficult for me — but my parents believed in me and gifted me a small
          54-key Casio keyboard.
        </p>
        <p>
          From the very beginning I fell in love wiht it. I started teaching
          myself simple pieces, like the famous <i>Für Elise</i>. After a few
          months, I upgraded to another Casio keyboard, this time with 61 keys
          and a sustain pedal, and signed up for group piano lessons at my
          school with my friend and another classmate.
        </p>
        <p>
          Those lessons were all about playing together as a trio. We even
          performed in a small school concert, where we played <i>Get Lucky</i>{" "}
          by Daft Punk and <i>Mamma Mia</i> by ABBA. Not long after, I received
          the biggest surprise of my life: my parents gifted me a full-sized
          digital piano — my beloved Kawai CN24 ✨ That was the turning point
          when things started to get more serious.
        </p>
        <p>
          I soon began private piano lessons with the wonderful Ana and her
          Kawai grand piano. She was demanding yet kind, and she knew exactly
          how to help me grow. With her I explored the world of classical music
          — Chopin, Mozart, Czerny, Bach — as well as modern repertoire for
          duets, where I played piano while my classmate sang. Those lessons
          were incredibly enriching, and I’m very grateful for that experience.
        </p>
        <p>
          Eventually, I paused formal lessons, mainly because of school-related
          time constraints. Still, I kept learning on my own, mostly by playing
          piano covers of modern songs. That carried me forward until I reached
          a new stopping point...
        </p>
      </section>
      <section id="when-i-let-go-of-piano">
        <h2>When I Let Go of Piano</h2>
        <hr />
        <p>
          School began to take a heavy toll on me — not just in terms of time,
          but also my energy, confidence, and overall well-being. On top of
          that, things in my personal life weren’t going so well either, which
          affected my mental health significantly. Eventually, I reached a point
          where I had lost the desire to play altogether. My piano sat in the
          corner of my room, gathering dust.
        </p>
        <p>
          Life moved on, and as a full-time student in need of money, I faced a
          tough choice. I ultimately decided to sell my piano. It was one of the
          hardest decisions I’ve ever made, because deep down I still held on to
          the hope that one day I’d return to playing when circumstances
          improved. Letting it go felt like abandoning a part of myself that had
          brought me so much joy even in the darkest of times 💔
        </p>
      </section>
      <section id="reigniting-my-passion-for-piano">
        <h2>Reigniting My Passion for Piano</h2>
        <hr />
        <p>
          A couple of years later, in 2023, that spark started to flicker again.
          I found myself reminiscing about the times I spent playing piano — all
          the songs I had wanted to learn but never did, the sense of
          accomplishment, and the feeling of belonging to a world where I felt
          welcomed. That led me to buy a Korg B2 keyboard and start playing once
          more.
        </p>
        <p>
          After being away from piano for so long, I was worried that I might
          have to start completely from scratch. Fortunately, that wasn’t the
          case. The first piece I tackled was <i>Bloody Tears</i> from
          Castlevania and muscle memory kicked in incredibly quickly: my fingers
          remembered the movements, even if not the exact keys. With the sheet
          music in hand, I relearned the entire piece in a single evening.
        </p>
        <p>
          I resumed learning songs I enjoyed, but at first it didn’t feel as
          fulfilling as before. I questioned whether returning to piano was the
          right choice. I was a completely different person now, and the hobby
          felt incomplete without purpose. The breakthrough came when I realized
          the issue wasn’t piano itself — it was my approach to it.
        </p>
        <p>
          Previously, I would learn a song, move on, and never revisit it. That
          made the effort feel wasted when I eventually forgot it. To give my
          practice meaning, I started recording my performances. Each new song
          was learned with the intention of creating a recording — a tangible,
          revisitable representation of my effort and personal interpretation.
          Much like a sportsperson earns medals or trophies to commemorate
          achievements, my recordings became my trophies.
        </p>
        <p>
          This shift in mindset transformed the way I practice piano and how I
          feel about every step of the way. I still enjoy improving my skills
          and tackling pieces I couldn’t before, but now I have an added reward
          — a lasting record of my progress and journey.
        </p>
      </section>
      <section id="sharing-my-passion">
        <h2>Sharing My Passion</h2>
        <hr />
        <p>
          At the beginning of 2024, I started recording myself and shyly sharing
          videos on my <SocialLink social={Socials.INSTAGRAM} /> account, the
          first being <i>Don’t Look Back In Anger</i> by Oasis. Even though I
          didn’t have many followers and my profile was private at the time, I
          still felt a bit insecure. Yet, I wanted people to see what I was
          doing, to showcase something I truly loved and felt proud of. My
          posting pace was slow at first, but it gradually improved in 2025 when
          a big change happened.
        </p>
        <p>
          I’m not trying to suggest that &ldquo;the instrument makes the
          instrumentalist&rdquo;, because it doesn’t. However, having the right
          instrument can make the experience more enjoyable. Since day one, my
          piano had a technical issue: a noticeable hiss or white noise that
          grew louder over time, sometimes even louder than the keys themselves.
          This only appeared through the headphones, which is why you can’t hear
          it in the recordings. After dealing with this for a while, I decided
          to replace it with the best digital piano I’ve ever had, the Roland
          FP-30X.
        </p>
        <p>
          The difference was night and day. I could hear every nuance clearly,
          and the feel and responsiveness of the keys gave me so much more room
          to be creative and playful. I feel incredibly fortunate to have such
          an outstanding instrument to play every day, which has motivated me
          even more and accelerated my learning progress.
        </p>
        <p>
          Until May 31st, 2025, every video I made stayed private on{" "}
          <SocialLink social={Socials.INSTAGRAM} /> and{" "}
          <SocialLink social={Socials.YOUTUBE} />. On that day, out of nowhere,
          I decided to make all my videos public — both old and new. It was one
          of the best decisions I’ve made. Even though I don’t have a huge
          audience, the small, supportive community that has formed is
          wonderful. Receiving comments on almost every video from people who
          enjoyed my performance is incredibly heartwarming 🩵
        </p>
        <p>
          Sharing my piano journey has rekindled my passion and made every
          recording session feel exciting. Time constraints are challenging — if
          I could, I would spend the entire day playing and recording — but each
          upload has become a special event. I hope to continue sharing this
          passion for a long long time.
        </p>
      </section>
    </div>
  );
}
