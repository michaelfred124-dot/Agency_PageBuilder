"use client";
import ServicesOverview from '@/components/ServicesOverview';
import SwirlyDivider from '@/components/SwirlyDivider';
import FeaturedSites from '@/components/FeaturedSites';

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#080B12] text-white relative overflow-hidden">
      {/* High-tech Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <ServicesOverview />
      <SwirlyDivider />
      <FeaturedSites />
    </div>
  );
}
