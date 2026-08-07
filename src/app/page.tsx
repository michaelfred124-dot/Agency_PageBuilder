"use client";
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import BuilderFeatures from '@/components/BuilderFeatures';
import SwirlyDivider from '@/components/SwirlyDivider';
import FeaturedSites from '@/components/FeaturedSites';
import Testimonials from '@/components/Testimonials';
import AgencyAdvantages from '@/components/AgencyAdvantages';
import WhyUs from '@/components/WhyUs';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#FAF9FF] text-slate-900 font-sans">
      {/* Continuous Light Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-20" />

      <Hero />
      <ServicesOverview />
      <BuilderFeatures />
      <SwirlyDivider />
      <FeaturedSites />
      <Testimonials />
      <AgencyAdvantages />
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  );
}

