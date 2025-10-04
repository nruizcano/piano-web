import "@/app/equipment/module.css";

export default function Equipment() {
  return (
    <div className="flex flex-col gap-24 min-w-full pt-8 sm:pt-16">
      <section id="disclaimer">
        <h1 className="text-5xl sm:text-6xl mb-8">Equipment</h1>
        <p>
          This is the equipment I currently use to make my videos. In previous
          videos I used a different setup, but this is the updated list.
        </p>
        <p>
          Disclaimer: I’m not sponsored by any of these brands or products. I
          bought these with my own money and by choice. Also, nor of the
          provided links are affiliate links, meaning I don’t get any commission
          from them if you buy something using them. I added them to make your
          search easier.
        </p>
      </section>
      <section id="piano">
        <h2>Roland FP-30X</h2>
        <h3>Piano</h3>
        <hr />
      </section>
      <section id="headphones">
        <h2>Audio Technica ATH-M50X</h2>
        <h3>Headphones</h3>
        <hr />
      </section>
      <section id="daw">
        <h2>REAPER</h2>
        <h3>DAW</h3>
        <hr />
      </section>
      <section id="camera">
        <h2>Canon EOS 750D</h2>
        <h3>Camera</h3>
        <hr />
      </section>
      <section id="sheet-music-editor">
        <h2>MuseScore Studio</h2>
        <h3>Sheet Music Editor</h3>
        <hr />
      </section>
    </div>
  );
}
