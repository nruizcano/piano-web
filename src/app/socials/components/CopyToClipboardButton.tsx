"use client";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  toast.info("Copied to clipboard!");
}

export default function CopyToClipboardButton({ text }: { text: string }) {
  return (
    <div>
      <button
        onClick={() => copyToClipboard(text)}
        aria-label="Copy to clipboard"
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

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
