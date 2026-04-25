export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  // currentColor drives both text and rect fill via outlining: we use a rect with currentColor and contrasting text
  return (
    <svg viewBox="0 0 220 56" className={className} aria-label="TPS Supply" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="tpsMask">
          <rect width="220" height="56" fill="white"/>
          <text x="28" y="40" fontFamily="Playfair Display, Georgia, serif" fontWeight="800" fontSize="28" textAnchor="middle" fill="black">TPS</text>
        </mask>
      </defs>
      <rect x="0" y="6" width="56" height="44" fill="currentColor" mask="url(#tpsMask)"/>
      <text x="66" y="30" fontFamily="Playfair Display, Georgia, serif" fontWeight="700" fontSize="22" fill="currentColor">SUPPLY</text>
      <text x="66" y="48" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="9" letterSpacing="2" fill="currentColor" opacity="0.85">WHOLESALE PLUMBING</text>
    </svg>
  );
}
