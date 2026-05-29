"use client";
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import ServicesOverview from '@/components/ServicesOverview';
import SwirlyDivider from '@/components/SwirlyDivider';
import FeaturedSites from '@/components/FeaturedSites';
import Testimonials from '@/components/Testimonials';
import AgencyAdvantages from '@/components/AgencyAdvantages';
import WhyUs from '@/components/WhyUs';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <SwirlyDivider />
      <FeaturedSites />
      <Testimonials />
      <AgencyAdvantages />
      <WhyUs />
      <FAQ />
      <CTA />
    </>
  );
}
