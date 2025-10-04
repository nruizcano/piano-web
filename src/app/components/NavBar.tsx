"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface LinkProps {
  title: string;
  href: string;
}

const NavBarLinks: LinkProps[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "SHEET MUSIC",
    href: "/sheet-music",
  },
  {
    title: "GEAR",
    href: "/gear",
  },
  {
    title: "SOCIALS",
    href: "/socials",
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(true);
    }
  }, [isMobile]);

  return (
    <nav className="flex flex-col items-end justify-end">
      {isMobile && (
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
        </button>
      )}
      {isMenuOpen && (
        <ul
          className={`flex ${
            isMobile ? "flex-col items-end" : "flex-row items-center gap-8"
          } relative`}
        >
          {NavBarLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-semibold ${
                  pathname !== link.href
                    ? "text-[var(--foreground-secondary)]"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
