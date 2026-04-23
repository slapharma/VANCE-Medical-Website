export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Vance Medical Foods"
      className={`h-10 w-auto md:h-12 ${className}`}
    />
  );
}
