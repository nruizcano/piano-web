import Link from "next/link";
import CopyToClipboardButton from "@/app/socials/components/CopyToClipboardButton";
import styles from "@/app/socials/Socials.module.css";

export default function SocialInfoContainer(
  url: string,
  name: string,
  description: string | undefined,
) {
  return (
    <div className={styles.fadeInDelay}>
      <div className="flex items-end gap-4">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col shadow-custom"
        >
          <span className="text-xl">{name}</span>
          <span className="text-[var(--foreground-secondary)] italic group-hover:underline hidden lg:block">
            {url}
          </span>
        </Link>
        <CopyToClipboardButton text={url} />
      </div>
      <p>{description}</p>
    </div>
  );
}
