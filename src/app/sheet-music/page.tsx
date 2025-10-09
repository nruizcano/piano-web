import SheetMusicCatalog from "@/app/sheet-music/components/SheetMusicCatalog";

export default function SheetMusicPage() {
  return (
    <div className="flex flex-col min-w-full frame-big-padding">
      <h1>Sheet music</h1>
      <section id="page-info" className="page-intro">
        <p>
          These are all of the sheet music I’ve written for my own arrangements.
          I’ve always been passionate about music, and I wanted to share my
          creations with the world.
        </p>
        <p className="disclaimer">
          Disclaimer: Feel totally free to use any of my arrangements for your
          own projects. As long as you give me credit, I’m happy to share them
          with you.
        </p>
      </section>
      <SheetMusicCatalog />
    </div>
  );
}
