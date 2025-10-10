import Link from "next/link";
import Image from "next/image";
import { SocialsInfo } from "@/app/models/Socials";
import CopyToClipboardButton from "@/app/socials/components/CopyToClipboardButton";

export default function SocialsPage() {
  return (
    <div className="flex flex-col min-w-full place-items-center pt-4">
      <h1>Socials</h1>
      <ul className="flex flex-col gap-12 border-2 border-[var(--background-dark)]/20 bg-[var(--background-secondary)]/35 rounded-xl p-8">
        {Object.values(SocialsInfo).map((social) => (
          <li
            key={social.name}
            id={social.name.toLowerCase().replaceAll(" ", "-")}
            className="gap-4 grid grid-cols-[50px_1fr] lg:grid-cols-[80px_1fr]"
          >
            <Image
              src={social.icon}
              alt={social.name}
              height={52}
              width={52}
              className="w-auto justify-self-center shadow-custom h-10 lg:h-13"
            />
            <div>
              <div className="flex items-end gap-4">
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col shadow-custom"
                >
                  <span className="text-xl">{social.name}</span>
                  <span className="text-[var(--foreground-secondary)] italic group-hover:underline hidden lg:block">
                    {social.url}
                  </span>
                </Link>
                <CopyToClipboardButton text={social.url} />
              </div>
              <p>{social.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
