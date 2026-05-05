import Image from "next/image";

// Source: public/logo.png. Heights match prior <img> sizing (h-14 / md:h-[72px]).
// Width is sized via Tailwind `w-auto`; intrinsic ratio preserved. Explicit
// width/height satisfy next/image and prevent CLS.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Vance Medical Foods"
      width={300}
      height={96}
      priority
      className={`h-14 w-auto md:h-[72px] ${className}`}
    />
  );
}
