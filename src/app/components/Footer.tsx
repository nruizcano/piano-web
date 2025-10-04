import Link from "next/link";
import Image from "next/image";
import { SocialsInfo } from "@/app/models/Socials";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col min-w-full p-6 gap-4 items-center justify-center bg-[var(--background-dark)]">
      <p className="text-[#ddd]">© 2025 Nerea Ruiz Cano</p>
      <ul className="flex flex-wrap items-center gap-4">
        {Object.values(SocialsInfo).map((social) => (
          <li key={social.title}>
            <Link href={social.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.icon}
                alt={social.url}
                height={24}
                width={24} // Required by Next.js but ignore with w-auto in Tailwind CSS
                className="h-6 w-auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
