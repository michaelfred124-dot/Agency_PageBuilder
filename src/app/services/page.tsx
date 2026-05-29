"use client";
import ServicesOverview from '@/components/ServicesOverview';
import SwirlyDivider from '@/components/SwirlyDivider';
import FeaturedSites from '@/components/FeaturedSites';

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#F1EDE1]">
      <ServicesOverview />
      <SwirlyDivider />
      <FeaturedSites />
    </div>
  );
}
