"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NavLinksInfo } from "@/app/models/NavLinks";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const pathname = usePathname();

  return (
    <nav id="nav-bar-page-menu" className="flex flex-col items-end justify-end">
      <div className="block md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          className="!bg-transparent !p-0"
        >
          <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>
      {isMenuOpen && (
        <ul className="relative flex flex-col items-end md:flex-row md:items-center gap-2 md:gap-8 mt-2 md:mt-0">
          {Object.values(NavLinksInfo).map((link) => (
            <li
              key={link.title}
              id={link.title.toLowerCase().replaceAll(" ", "-")}
            >
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
