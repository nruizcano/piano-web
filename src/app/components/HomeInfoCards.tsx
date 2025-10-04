import Image from "next/image";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  button: string;
}

const InfoCards: InfoCardProps[] = [
  {
    title: "About me",
    description:
      "Learn more about my journey — how I started playing piano and how I came to share this passion with others.",
    icon: "/person.svg",
    href: "/about",
    button: "LEARN MORE",
  },
  {
    title: "Socials",
    description:
      "Explore where you can find my content across different platforms and learn what I share on each one.",
    icon: "/globe.svg",
    href: "/socials",
    button: "CHECK THEM OUT",
  },
  {
    title: "Contact me",
    description:
      "Reach out with your questions, ideas, or just to say hi — I’d love to hear from you.",
    icon: "/send.svg",
    href: "/contact",
    button: "GET IN TOUCH",
  },
];

export default function HomeInfoCards() {
  return InfoCards.map((item) => (
    <article
      key={item.title}
      className="bg-[var(--background-secondary)] grid grid-rows-[80px_66px_90px_auto] lg:grid-rows-[80px_66px_130px_auto] py-9 px-7 text-center justify-items-center"
    >
      <Image src={item.icon} alt={item.title} width={64} height={64} />
      <h3>{item.title}</h3>
      <p className="text-[var(--foreground-secondary)]">{item.description}</p>
      <Link
        href={item.href}
        className="bg-[var(--accent)] text-sm items-center w-fit px-4 py-2 rounded-sm"
      >
        {item.button}
      </Link>
    </article>
  ));
}
