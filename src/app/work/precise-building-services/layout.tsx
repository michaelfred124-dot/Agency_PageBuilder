import React from 'react';

export default function PreciseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {children}
    </div>
  );
}
