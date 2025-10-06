import Image from "next/image";
import Link from "next/link";
import { NavLinks, NavLinksInfo } from "@/app/models/NavLinks";

interface InfoCardProps {
  navLink: (typeof NavLinksInfo)[keyof typeof NavLinks];
  description: string;
  icon: string;
  button: string;
}

const InfoCards: InfoCardProps[] = [
  {
    navLink: NavLinksInfo.ABOUT,
    description:
      "Learn more about my journey — how I started playing piano and how I came to share this passion with others.",
    icon: "/person.svg",
    button: "LEARN MORE",
  },
  {
    navLink: NavLinksInfo.SOCIALS,
    description:
      "Explore where you can find my content across different platforms and learn what I share on each one.",
    icon: "/globe.svg",
    button: "CHECK THEM OUT",
  },
  {
    navLink: NavLinksInfo.CONTACT,
    description:
      "Reach out with your questions, ideas, or just to say hi — I’d love to hear from you.",
    icon: "/send.svg",
    button: "GET IN TOUCH",
  },
];

export default function HomeInfoCards() {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
      {InfoCards.map((item) => (
        <article
          key={item.navLink.title}
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
          <button>
            <Link href={item.navLink.href}>{item.button}</Link>
          </button>
        </article>
      ))}
    </div>
  );
}
