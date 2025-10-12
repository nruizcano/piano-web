import Link from "next/link";
import NavBar from "@/app/components/NavBar";

export default function Header() {
  return (
    <header className="row-start-1 fixed top-0 z-30 flex min-w-full min-h-16 px-8 sm:px-20 py-4 items-center justify-between bg-[var(--background-secondary)]">
      <Link href="/" className="text-2xl font-bold">
        Nerea Ruiz Cano
      </Link>
      <NavBar />
    </header>
  );
}
