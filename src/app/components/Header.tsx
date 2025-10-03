import NavBar from "@/app/components/NavBar";

export default function Header() {
  return (
    <header className="row-start-1 flex min-w-full px-8 sm:px-20 items-center justify-between bg-[var(--background-secondary)]">
      <h1>Nerea Ruiz Cano</h1>
      <NavBar />
    </header>
  );
}
