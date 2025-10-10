import Link from "next/link";
import { Socials, SocialsInfo } from "@/app/models/Socials";

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

export default function Chapter5() {
  return (
    <section id="sharing-my-passion">
      <h2>Sharing My Passion</h2>
      <hr />
      <p>
        At the beginning of 2024, I started recording myself and shyly sharing
        videos on my <SocialLink social={Socials.INSTAGRAM} /> account, the
        first being <i>Don’t Look Back In Anger</i> by Oasis. Even though I
        didn’t have many followers and my profile was private at the time, I
        still felt a bit insecure. Yet, I wanted people to see what I was doing,
        to showcase something I truly loved and felt proud of. My posting pace
        was slow at first, but it gradually improved in 2025 when a big change
        happened.
      </p>
      <p>
        I’m not trying to suggest that &ldquo;the instrument makes the
        instrumentalist&rdquo;, because it doesn’t. However, having the right
        instrument can make the experience more enjoyable. Since day one, my
        piano had a technical issue: a noticeable hiss or white noise that grew
        louder over time, sometimes even louder than the keys themselves. This
        only appeared through the headphones, which is why you can’t hear it in
        the recordings. After dealing with this for a while, I decided to
        replace it with the best digital piano I’ve ever had, the Roland FP-30X.
      </p>
      <p>
        The difference was night and day. I could hear every nuance clearly, and
        the feel and responsiveness of the keys gave me so much more room to be
        creative and playful. I feel incredibly fortunate to have such an
        outstanding instrument to play every day, which has motivated me even
        more and accelerated my learning progress.
      </p>
      <p>
        Until May 31st, 2025, every video I made stayed private on{" "}
        <SocialLink social={Socials.INSTAGRAM} /> and{" "}
        <SocialLink social={Socials.YOUTUBE} />. On that day, out of nowhere, I
        decided to make all my videos public — both old and new. It was one of
        the best decisions I’ve made. Even though I don’t have a huge audience,
        the small, supportive community that has formed is wonderful. Receiving
        comments on almost every video from people who enjoyed my performance is
        incredibly heartwarming 🩵
      </p>
      <p>
        Sharing my piano journey has rekindled my passion and made every
        recording session feel exciting. Time constraints are challenging — if I
        could, I would spend the entire day playing and recording — but each
        upload has become a special event. I hope to continue sharing this
        passion for a long long time.
      </p>
    </section>
  );
}
