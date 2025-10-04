"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NavLinksInfo } from "@/app/models/NavLinks";

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
          {Object.values(NavLinksInfo).map((link) => (
            <li key={link.title}>
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
