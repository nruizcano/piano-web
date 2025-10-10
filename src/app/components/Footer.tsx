import Link from "next/link";
import Image from "next/image";
import { SocialsInfo } from "@/app/models/Socials";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col min-w-full p-6 gap-4 items-center justify-center bg-[var(--background-dark)]">
      <p className="text-[#ddd]">© 2025 Nerea Ruiz Cano</p>
      <ul className="flex flex-wrap items-center gap-4">
        {Object.values(SocialsInfo).map((social) => (
          <li
            key={social.name}
            id={social.name.toLowerCase().replaceAll(" ", "-")}
            aria-label={social.name + ` link`}
          >
            <Link href={social.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.icon}
                alt={social.name}
                height={24}
                width={24}
                className="h-6 w-auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
