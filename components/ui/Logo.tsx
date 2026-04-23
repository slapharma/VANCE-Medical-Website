export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Vance Medical Foods"
      viewBox="0 0 520 150"
      className={`h-10 w-auto md:h-12 ${className}`}
    >
      {/* V with upward arrow */}
      <g fill="#008080">
        <path d="M6 14 L66 14 L96 90 L105 66 L90 66 L120 14 L150 66 L135 66 L126 90 L156 14 L108 14 L108 14 L96 46 L84 14 Z" opacity="0" />
        {/* Simplified bold V with arrow tip */}
        <path d="M8 14 H58 L88 92 L118 14 L168 14 L118 130 L88 130 Z" />
        <path d="M72 4 L104 4 L104 44 L118 44 L88 74 L58 44 L72 44 Z" />
      </g>
      {/* ANCE */}
      <text
        x="178"
        y="92"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, sans-serif"
        fontWeight="800"
        fontSize="90"
        letterSpacing="-2"
        fill="#78BFBF"
      >
        ANCE
      </text>
      {/* MEDICAL FOODS underline */}
      <rect x="178" y="104" width="330" height="10" fill="#008080" />
      <text
        x="343"
        y="140"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="6"
        fill="#008080"
      >
        MEDICAL FOODS
      </text>
    </svg>
  );
}
