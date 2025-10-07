import { Difficulty } from "@/app/models/SheetMusic";

export default function DifficultyFlags({
  difficulty,
}: {
  difficulty: Difficulty | undefined;
}) {
  return (
    <div
      className={`inline-flex items-center relative rounded-full min-w-fit px-2 py-[1px] text-sm shadow-sm ${
        difficulty === Difficulty.BEGINNER
          ? "bg-green-200"
          : difficulty === Difficulty.INTERMEDIATE
          ? "bg-yellow-200"
          : difficulty === Difficulty.ADVANCED
          ? "bg-red-200"
          : "bg-gray-200"
      }`}
    >
      <span
        className={`text-sm font-semibold px-1 py-[1px] rounded-full bg-clip-text text-transparent animate-gradient ${
          difficulty === Difficulty.BEGINNER
            ? "bg-[linear-gradient(270deg,#34d399,#21554e,#34d399)]"
            : difficulty === Difficulty.INTERMEDIATE
            ? "bg-[linear-gradient(270deg,#ffbd82,#713f12,#ffbd82)]"
            : difficulty === Difficulty.ADVANCED
            ? "bg-[linear-gradient(270deg,#ff8c8c,#7f1d1d,#ff8c8c)]"
            : "bg-[#6b7280]"
        }`}
      >
        {(difficulty ?? "Unknown").toUpperCase()}
      </span>
    </div>
  );
}
