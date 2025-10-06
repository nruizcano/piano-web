import NavBar from "@/app/components/NavBar";

export default function Header() {
  return ( // TODO: Replace <span> with a logo
    <header className="row-start-1 fixed top-0 z-30 flex min-w-full min-h-16 px-8 sm:px-20 py-4 items-center justify-between bg-[var(--background-secondary)]">
      <span>Nerea Ruiz Cano</span> 
      <NavBar />
    </header>
  );
}
