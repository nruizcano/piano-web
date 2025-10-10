import Chapter1 from "@/app/about/components/Chapter1";
import Chapter2 from "@/app/about/components/Chapter2";
import Chapter3 from "@/app/about/components/Chapter3";
import Chapter4 from "@/app/about/components/Chapter4";
import Chapter5 from "@/app/about/components/Chapter5";
import "@/app/about/module.css";

export default function About() {
  return (
    <ol
      id="story"
      className="flex flex-col min-w-full gap-12 frame-big-padding"
    >
      <li>
        <Chapter1 />
      </li>
      <li>
        <Chapter2 />
      </li>
      <li>
        <Chapter3 />
      </li>
      <li>
        <Chapter4 />
      </li>
      <li>
        <Chapter5 />
      </li>
    </ol>
  );
}
