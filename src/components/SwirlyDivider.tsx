"use client";

export default function SwirlyDivider() {
  return (
    <div className="w-full h-10 lg:h-14 overflow-hidden border-y border-sky-400/30 bg-[#080B12] relative z-10">
      <svg width="100%" height="100%">
        <defs>
          <linearGradient id="swirl-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <pattern id="horizontal-swirl" x="0" y="0" width="60" height="48" patternUnits="userSpaceOnUse">
            <path d="M 0 24 Q 15 0 30 24 T 60 24" fill="none" stroke="url(#swirl-grad)" strokeWidth="2.5" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#horizontal-swirl)" />
      </svg>
    </div>
  );
}
