import Image from "next/image";

export default function CameraInfo() {
  return (
    <article id="canon-eos-750d">
      <h2>Canon EOS 750D</h2>
      <h3>Camera</h3>
      <hr />
      <div className="article-content">
        <Image
          src="/equipment/canon-eos-750d.webp"
          alt="Canon EOS 750D"
          width={350}
          height={350}
        />
        <div>
          <p>
            For recording my videos, I use the Canon EOS 750D. To be clear, I
            didn’t buy this camera specifically for filming. Photography used to
            be one of my hobbies, and this was the camera I used and decided to
            keep. So when it came time to record my piano videos, it just made
            sense to use what I already had.
          </p>
          <p>
            Honestly, I don’t really need such a big or expensive camera for
            these videos — I’m simply taking advantage of my old gear. That
            said, the picture quality is excellent, and it’s very easy to use. I
            usually just place it on a tripod, adjust a few basic settings, and
            it looks great. Sometimes I even connect it to my phone through the
            app, which is super convenient because it lets me control the camera
            without touching it — avoiding any accidental frame shifts or
            messing up my positioning.
          </p>
        </div>
      </div>
    </article>
  );
}
