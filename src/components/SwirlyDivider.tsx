"use client";

export default function SwirlyDivider() {
  return (
    <div className="w-full h-12 lg:h-16 overflow-hidden border-y border-purple-200/60 bg-[#FAF9FF] relative z-10 flex items-center justify-center">
      <svg width="100%" height="100%">
        <defs>
          <linearGradient id="swirl-grad-theme" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6528D9" />
            <stop offset="50%" stopColor="#FF5500" />
            <stop offset="100%" stopColor="#FFB703" />
          </linearGradient>
          <pattern id="horizontal-swirl-theme" x="0" y="0" width="80" height="56" patternUnits="userSpaceOnUse">
            <path d="M 0 28 Q 20 4 40 28 T 80 28" fill="none" stroke="url(#swirl-grad-theme)" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#horizontal-swirl-theme)" />
      </svg>
    </div>
  );
}
