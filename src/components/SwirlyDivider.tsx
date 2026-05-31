"use client";
import { COLORS } from '@/constants';

export default function SwirlyDivider() {
  return (
    <div className="w-full h-8 lg:h-12 overflow-hidden border-y-2 border-zinc-950 border-collapse" style={{ backgroundColor: COLORS.purple }}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="horizontal-swirl" x="0" y="0" width="60" height="48" patternUnits="userSpaceOnUse">
            <path d="M 0 24 Q 15 0 30 24 T 60 24" fill="none" stroke={COLORS.black} strokeWidth="2" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#horizontal-swirl)" />
      </svg>
    </div>
  );
}
