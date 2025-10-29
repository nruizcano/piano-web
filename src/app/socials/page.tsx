import Image from "next/image";
import { SocialsInfo } from "@/app/models/Socials";
import SocialInfoContainer from "@/app/socials/components/SocialInfoContainer";
import styles from "@/app/socials/Socials.module.css";

export default function SocialsPage() {
  return (
    <div className="flex flex-col min-w-full place-items-center pt-4">
      <h1>Socials</h1>
      <ul className={`flex flex-col gap-12 border-2 border-[var(--background-dark)]/20 bg-[var(--background-secondary)]/35 rounded-xl p-8 ${styles.fadeIn}`}>
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
            {SocialInfoContainer(social.url, social.name, social.description)}
          </li>
        ))}
      </ul>
    </div>
  );
}
