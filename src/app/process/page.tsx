"use client";
import ProcessSteps from '@/components/ProcessSteps';
import SwirlyDivider from '@/components/SwirlyDivider';
import AgencyAdvantages from '@/components/AgencyAdvantages';

export default function ProcessPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-[#080B12] text-white relative overflow-hidden">
      {/* Continuous Connected High-Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <ProcessSteps />
      <SwirlyDivider />
      <AgencyAdvantages />
    </div>
  );
}
