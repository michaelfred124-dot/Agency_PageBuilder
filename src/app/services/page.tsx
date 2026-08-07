"use client";
import ServicesOverview from '@/components/ServicesOverview';
import SwirlyDivider from '@/components/SwirlyDivider';
import FeaturedSites from '@/components/FeaturedSites';

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#FAF9FF] text-slate-900 relative overflow-hidden font-sans">
      {/* Subtle Grid Overlay — matches the light shell used site-wide */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <ServicesOverview />
      <SwirlyDivider />
      <FeaturedSites />
    </div>
  );
}
