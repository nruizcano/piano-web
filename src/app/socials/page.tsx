"use client";

import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { SocialsInfo } from "@/app/models/Socials";
import { useScreenBreakpoint } from "@/app/hooks/useScreenBreakpoint";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  toast.info("Copied to clipboard!");
}

export default function SocialsPage() {
  const isLargeScreen = useScreenBreakpoint(960);

  return (
    <div className="flex flex-col min-w-full place-items-center pt-4">
      <h1>Socials</h1>
      <section className="border-2 border-[var(--background-dark)]/40 rounded-lg p-8">
        <ul className="flex flex-col gap-12">
          {Object.values(SocialsInfo).map((social) => (
            <li
              key={social.name}
              className={`gap-4 grid ${
                isLargeScreen ? "grid-cols-[80px_1fr]" : "grid-cols-[50px_1fr]"
              }`}
            >
              <Image
                src={social.icon}
                alt={social.name}
                height={52}
                width={52} // Required by Next.js but ignore with w-auto in Tailwind CSS
                className={`w-auto justify-self-center shadow-custom ${
                  isLargeScreen ? "h-13" : "h-10"
                }`}
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
                    {isLargeScreen && (
                      <span className="text-[var(--foreground-secondary)] italic group-hover:underline">
                        {social.url}
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={() => copyToClipboard(social.url)}
                    className="!p-[6px] !rounded-md"
                  >
                    <Image
                      src="/copy.svg"
                      alt="Copy"
                      height={16}
                      width={16}
                      className="opacity-60"
                    />
                  </button>
                </div>
                <p>{social.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
