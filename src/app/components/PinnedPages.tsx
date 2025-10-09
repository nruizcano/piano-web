import Image from "next/image";
import Link from "next/link";
import { NavLinks, NavLinksInfo } from "@/app/types/NavLinks";

interface PinnedPagesProps {
  navLink: (typeof NavLinksInfo)[keyof typeof NavLinks];
  description: string;
  icon: string;
  button: string;
}

const PinnedPages: PinnedPagesProps[] = [
  {
    navLink: NavLinksInfo.ABOUT,
    description:
      "Learn more about my journey — how I started playing piano and how I came to share this passion with others.",
    icon: "/person.svg",
    button: "Learn more",
  },
  {
    navLink: NavLinksInfo.SOCIALS,
    description:
      "Explore where you can find my content across different platforms and learn what I share on each one.",
    icon: "/globe.svg",
    button: "Check them out",
  },
  {
    navLink: NavLinksInfo.CONTACT,
    description:
      "Reach out with your questions, ideas, or just to say hi — I’d love to hear from you.",
    icon: "/send.svg",
    button: "Get in touch",
  },
];

export default function HomeInfoCards() {
  return (
    <div id="pinned-pages" className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
      {PinnedPages.map((item) => (
        <article
          key={item.navLink.title}
          id={`${item.navLink.title.toLowerCase().replaceAll(" ", "-")}-pinned-page`}
          className="bg-[var(--background-secondary)] grid grid-rows-[80px_66px_90px_auto] lg:grid-rows-[80px_66px_130px_auto] py-9 px-7 text-center justify-items-center"
        >
          <Image
            src={item.icon}
            alt={item.navLink.title}
            width={64}
            height={64}
          />
          <h3>{item.navLink.title}</h3>
          <p className="text-[var(--foreground-secondary)]">
            {item.description}
          </p>
          <button aria-label="Navigate to page">
            <Link href={item.navLink.href}>{item.button.toUpperCase()}</Link>
          </button>
        </article>
      ))}
    </div>
  );
}
