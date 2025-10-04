export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center relative w-full">
      <div
        className="w-12 h-12 border-8 border-gray-300 border-t-[var(--accent)] rounded-full animate-spin"
        role="status"
        aria-live="polite"
        aria-label="Loading..."
      ></div>
    </div>
  );
}
