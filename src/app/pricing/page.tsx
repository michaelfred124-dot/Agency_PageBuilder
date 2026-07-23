"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase';
import ParallaxSectionBg from '@/components/ParallaxSectionBg';

const PLANS = [
  {
    name: 'DIY Starter',
    price: '$10',
    interval: '/mo',
    description: 'Pick a template, edit it yourself.',
    features: [
      'Template selection',
      'Self-edit dashboard',
      'Contact form included',
      'Documentation & community support'
    ],
    popular: false,
    gradient: 'from-slate-800/85 via-slate-900/90 to-[#1E293B]/85',
    cta: 'Get Started',
  },
  {
    name: 'Template Lite',
    price: '$15',
    interval: '/mo',
    description: 'Managed hosting + 2 design edits/month.',
    features: [
      'Template selection & setup',
      '2 design requests per month',
      'Managed hosting & security',
      'Email support'
    ],
    popular: false,
    gradient: 'from-slate-800/85 via-slate-900/90 to-[#1E293B]/85',
    cta: 'Get Started',
  },
  {
    name: 'Template Managed',
    price: '$60',
    interval: '/mo',
    description: 'Unlimited edits, monthly strategy calls.',
    features: [
      'We pick & launch your template',
      'Unlimited design requests',
      'Managed hosting & security',
      'Monthly strategy call + email support'
    ],
    popular: true,
    gradient: 'from-sky-950/90 via-slate-900/95 to-[#1E293B]/90 border-sky-400/60 shadow-[0_20px_50px_rgba(56,189,248,0.2)]',
    cta: 'Get Started',
  },
  {
    name: 'Fully Custom',
    price: '$150',
    interval: '/mo',
    description: '100% custom design + integrations.',
    features: [
      'Fully custom website from scratch',
      'Unlimited design requests & revisions',
      '100% hosted, managed & protected',
      'Weekly design calls + priority support'
    ],
    popular: false,
    gradient: 'from-slate-800/85 via-slate-900/90 to-[#1E293B]/85',
    cta: 'Email for Quote',
  }
];

export default function PricingPage() {
  const router = useRouter();

  const handleGetStarted = async (planName: string) => {
    if (planName === 'Fully Custom') {
      window.location.href = 'mailto:michaelfred124@gmail.com?subject=Custom Website Inquiry';
      return;
    }
    const supabase = getSupabaseBrowserClient();
    const { data: { session } } = await supabase.auth.getSession();
    const onboardingUrl = `/onboarding?plan=${encodeURIComponent(planName)}`;
    if (session) {
      router.push(onboardingUrl);
    } else {
      router.push(`/login?redirect=${encodeURIComponent(onboardingUrl)}`);
    }
  };

  return (
    <div className="pt-24 lg:pt-32 bg-[#080B12] text-white min-h-screen relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-r from-sky-500/25 via-teal-400/20 to-emerald-400/20 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

      <section className="py-20 px-4 lg:px-6 relative z-10">
        <div className="max-w-[1340px] mx-auto">
          
          {/* Header */}
          <div className="flex flex-col space-y-4 mb-16 lg:mb-20 text-center items-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold text-sky-300 bg-sky-950/80 px-4 py-2 rounded-full border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              Transparent Pricing
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none max-w-3xl">
              Simple, Transparent <br />
              <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Subscription Plans</span>
            </h1>

            <p className="max-w-2xl text-slate-300 text-base md:text-lg font-normal mt-4 leading-relaxed">
              No hidden fees, no surprise invoices. Pause or cancel your subscription at any time.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 lg:p-10 rounded-3xl border border-sky-400/30 backdrop-blur-xl bg-gradient-to-br ${plan.gradient} shadow-2xl relative flex flex-col justify-between group hover:border-sky-300/60 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest rounded-full bg-gradient-to-r from-sky-400 to-teal-400 text-slate-950 shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
                
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    <span className="text-sm font-bold text-slate-400">{plan.interval}</span>
                  </div>

                  <ul className="space-y-4 mb-8 text-slate-200 text-sm">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 font-medium">
                        <div className="w-5 h-5 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center text-teal-300 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-4 text-xs font-extrabold uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-lg hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 text-slate-950 hover:from-sky-300 hover:to-emerald-300'
                      : 'bg-slate-800/90 text-white border border-sky-400/30 hover:bg-slate-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Own Your Code Callout */}
          <div className="max-w-4xl mx-auto mt-16 p-8 lg:p-12 rounded-3xl bg-slate-900/90 border border-sky-400/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
            
            <h4 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
              Own Your Code
            </h4>
            <p className="text-slate-300 font-normal text-base leading-relaxed">
              We don't hold your website hostage. After 1 year of continuous payments, you have the option to stay with our managed services for ongoing support and hosting, or export your code entirely to host anywhere you please.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
