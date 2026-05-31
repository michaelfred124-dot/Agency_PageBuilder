"use client";
import ProcessSteps from '@/components/ProcessSteps';
import SwirlyDivider from '@/components/SwirlyDivider';
import AgencyAdvantages from '@/components/AgencyAdvantages';

export default function ProcessPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#F7F8FA]">
      <ProcessSteps />
      <SwirlyDivider />
      <AgencyAdvantages />
    </div>
  );
}
