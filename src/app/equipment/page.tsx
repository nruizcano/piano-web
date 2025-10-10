import PianoInfo from "@/app/equipment/components/PianoInfo";
import HeadphonesInfo from "@/app/equipment/components/HeadphonesInfo";
import SheetMusicEditorInfo from "@/app/equipment/components/SheetMusicEditorInfo";
import DawInfo from "@/app/equipment/components/DawInfo";
import CameraInfo from "@/app/equipment/components/CameraInfo";
import "@/app/equipment/module.css";

export default function Equipment() {
  return (
    <div className="flex flex-col min-w-full frame-big-padding">
      <h1>Equipment</h1>
      <section id="page-info" className="page-intro">
        <p>
          Here’s the equipment I currently use to create my videos. I’ve used
          different setups in the past, but this is my up-to-date list.
        </p>
        <p className="disclaimer">
          Disclaimer: I’m not sponsored by any of these brands or products.
          Everything here was purchased with my own money and chosen based on my
          preferences.
        </p>
      </section>
      <ul id="equipment-list" className="flex flex-col gap-24">
        <li>
          <PianoInfo />
        </li>
        <li>
          <HeadphonesInfo />
        </li>
        <li>
          <SheetMusicEditorInfo />
        </li>
        <li>
          <DawInfo />
        </li>
        <li>
          <CameraInfo />
        </li>
      </ul>
    </div>
  );
}
