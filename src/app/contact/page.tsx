"use client";
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#FAF9FF] text-slate-900 relative overflow-hidden font-sans">
      {/* Continuous Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <Contact />
    </div>
  );
}
