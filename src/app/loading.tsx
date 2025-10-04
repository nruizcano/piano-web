import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex min-w-full place-items-center">
      <LoadingSpinner />
    </div>
  );
}