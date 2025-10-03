import Link from "next/link";
import Image from "next/image";

interface LinkProps {
  title: string;
  url: string;
  icon: string;
}

const SocialLinks: LinkProps[] = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCr88KAGxSx1xzGyY4LODc9w",
    icon: "/socials/youtube.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/nerea.rc88",
    icon: "/socials/instagram.svg",
  },
  {
    title: "MuseScore",
    url: "https://musescore.com/user/63972640",
    icon: "/socials/musescore.svg",
  },
  {
    title: "Google Drive",
    url: "https://drive.google.com/drive/folders/1QtDkUT90EoXOAhGXZli3yW7wP0K8IqGE",
    icon: "/socials/googledrive.svg",
  },
];

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col min-w-full p-6 gap-4 items-center justify-center bg-[var(--background-dark)]">
      <p className="text-[#ddd]">© 2025 Nerea Ruiz Cano</p>
      <ul className="flex flex-wrap items-center gap-4">
        {SocialLinks.map((link) => (
          <li key={link.url}>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <Image src={link.icon} alt={link.url} width={24} height={24} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
