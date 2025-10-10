import Image from "next/image";
import Link from "next/link";
import { SocialsInfo } from "@/app/models/Socials";

export default function SheetMusicEditorInfo() {
  return (
    <article id="musescore-studio">
      <h2>MuseScore Studio</h2>
      <h3>Sheet Music Editor</h3>
      <hr />
      <div className="article-content">
        <Image
          src="/equipment/musescore-studio.webp"
          alt="MuseScore Studio"
          width={400}
          height={400}
        />
        <p>
          To write and edit sheet music, I use MuseScore Studio. I haven’t tried
          other editors, so I can’t really compare, but this one has worked so
          well for me that I’ve never felt the need to switch. It’s free, easy
          to use, and integrates seamlessly with the{" "}
          <Link
            href={SocialsInfo.MUSESCORE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {SocialsInfo.MUSESCORE.name}
          </Link>{" "}
          platform, where I publish my sheet music (along with a shared{" "}
          <Link
            href={SocialsInfo.GOOGLE_DRIVE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {SocialsInfo.GOOGLE_DRIVE.name} folder
          </Link>
          ).
        </p>
      </div>
    </article>
  );
}
