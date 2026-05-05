import Image from "next/image";

// Source: public/logo.png. Sized ~25% larger than the original (h-14 → h-[70px])
// per content brief 2026-05-05. Width is sized via Tailwind `w-auto`; intrinsic
// ratio preserved. Explicit width/height satisfy next/image and prevent CLS.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Vance Medical Foods"
      width={375}
      height={120}
      priority
      className={`h-[70px] w-auto md:h-[90px] ${className}`}
    />
  );
}
