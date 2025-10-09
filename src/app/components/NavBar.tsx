"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NavLinksInfo } from "@/app/types/NavLinks";
import { useScreenBreakpoint } from "@/app/hooks/useScreenBreakpoint";

export default function NavBar() {
  const isSmallScreen = useScreenBreakpoint(768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isSmallScreen) setIsMenuOpen(true);
  }, [isSmallScreen]);

  return (
    <nav id="nav-bar-page-menu" className="flex flex-col items-end justify-end">
      {!isSmallScreen && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          className="!bg-transparent !p-0"
        >
          <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
        </button>
      )}
      {isMenuOpen && (
        <ul
          className={`flex ${
            isSmallScreen ? "flex-row items-center gap-8" : "flex-col items-end"
          } relative`}
        >
          {Object.values(NavLinksInfo).map((link) => (
            <li key={link.title} id={link.title.toLowerCase().replaceAll(" ", "-")}>
              <Link
                href={link.href}
                className={`font-semibold ${
                  pathname !== link.href
                    ? "text-[var(--foreground-secondary)]"
                    : ""
                }`}
              >
                {link.title.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
