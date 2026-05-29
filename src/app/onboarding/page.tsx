"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, UploadCloud, Link as LinkIcon, Briefcase, Image as ImageIcon, Type, Sparkles } from 'lucide-react';
import { COLORS } from '@/constants';

const STEPS = [
  'Welcome & Process',
  'Basic Info',
  'Project Details',
  'Design & Vibes',
  'Assets & Copy'
];

function OnboardingForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'Standard Plan';
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    industry: '',
    goals: '',
    audience: '',
    competitors: '',
    colors: '',
    vibe: '',
    inspiration: '',
    copywriting: ''
  });

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(curr => curr + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
      window.scrollTo(0, 0);
    }
  };

  const isCustomPlan = plan.includes('Custom') || plan.includes('Full-Stack');

  return (
    <div className="min-h-screen bg-[#F8F5F2] flex flex-col font-sans text-black selection:bg-black selection:text-white">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6 flex items-center justify-between border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/pricing" className="w-10 h-10 rounded-full border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={3} />
          </Link>
          <h1 className="text-xl font-black uppercase tracking-tighter">Project Kickoff</h1>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step}>
              <div className={`flex items-center gap-2 ${idx <= currentStep ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-8 h-8 rounded-full border-4 border-black flex items-center justify-center text-sm font-bold ${idx < currentStep ? 'bg-black text-white' : idx === currentStep ? 'bg-white text-black' : 'bg-transparent text-black'}`}>
                  {idx < currentStep ? <Check className="w-4 h-4" strokeWidth={4} /> : (idx + 1)}
                </div>
                <span className="font-bold text-sm tracking-tight">{step}</span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={`w-8 h-1 ${idx < currentStep ? 'bg-black' : 'bg-black/20'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="lg:hidden text-sm font-black uppercase tracking-widest">
          Step {currentStep + 1} of {STEPS.length}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 lg:p-12 pb-48 lg:pb-56">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 0: Welcome & Process */}
            {currentStep === 0 && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">Welcome to <br /> the beginning.</h2>
                  <p className="text-xl lg:text-2xl font-medium text-black/70">
                    You've selected the <span className="text-black font-bold border-b-4 border-black">{decodeURIComponent(plan)}</span>. We're stoked to work with you. Before we dive into the pixels, let's get on the same page.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: "1. Discovery", desc: "This questionnaire helps us understand your brand, goals, and vibe.", icon: Briefcase },
                    { title: "2. Content Sync", desc: "We gather all your copy, images, and brand assets to prepare for design.", icon: Type },
                    { title: "3. Design & Build", desc: "We craft your site. Custom sites get wireframes, templates get tailored.", icon: Sparkles },
                    { title: "4. Launch & Grow", desc: "We test everything, flip the switch, and provide ongoing support.", icon: Check }
                  ].map((item, i) => (
                    <div key={item.title} className="p-8 bg-white border-4 border-black rounded-[24px] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                      <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center mb-6 bg-[#F8F5F2]">
                        <item.icon className="w-6 h-6" strokeWidth={3} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                      <p className="font-medium text-black/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">the specifics.</h2>
                  <p className="text-xl font-medium text-black/70">Tell us about you and your business.</p>
                </div>

                <div className="space-y-8 bg-white p-8 lg:p-12 border-4 border-black rounded-[32px] shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-black uppercase tracking-widest text-sm">First Name</label>
                      <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={e => updateForm('firstName', e.target.value)}
                        className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                        placeholder="Jane" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-black uppercase tracking-widest text-sm">Last Name</label>
                      <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={e => updateForm('lastName', e.target.value)}
                        className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={e => updateForm('email', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                      placeholder="jane@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Company / Brand Name</label>
                    <input 
                      type="text" 
                      value={formData.companyName}
                      onChange={e => updateForm('companyName', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                      placeholder="Acme Corp" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Industry</label>
                    <input 
                      type="text" 
                      value={formData.industry}
                      onChange={e => updateForm('industry', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                      placeholder="e.g. E-Commerce, Local Services, SaaS" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">The Strategy.</h2>
                  <p className="text-xl font-medium text-black/70">What are we trying to achieve here?</p>
                </div>

                <div className="space-y-8 bg-white p-8 lg:p-12 border-4 border-black rounded-[32px] shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Primary Goals</label>
                    <p className="text-sm font-medium text-black/60 mb-2">What does success look like? (e.g. more leads, sell products, brand awareness)</p>
                    <textarea 
                      rows={4}
                      value={formData.goals}
                      onChange={e => updateForm('goals', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg resize-none" 
                      placeholder="We want to double our inbound leads..." 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Target Audience</label>
                    <p className="text-sm font-medium text-black/60 mb-2">Who are we building this for?</p>
                    <textarea 
                      rows={4}
                      value={formData.audience}
                      onChange={e => updateForm('audience', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg resize-none" 
                      placeholder="Local homeowners between 30-50 looking for..." 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Key Competitors</label>
                    <p className="text-sm font-medium text-black/60 mb-2">Who else is in your space?</p>
                    <textarea 
                      rows={3}
                      value={formData.competitors}
                      onChange={e => updateForm('competitors', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg resize-none" 
                      placeholder="Link or name your top 3 competitors..." 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Design & Vibes */}
            {currentStep === 3 && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">The Look.</h2>
                  <p className="text-xl font-medium text-black/70">Let's narrow down the aesthetic.</p>
                </div>

                <div className="space-y-8 bg-white p-8 lg:p-12 border-4 border-black rounded-[32px] shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Overall Vibe / Mood</label>
                    <p className="text-sm font-medium text-black/60 mb-2">Pick 3-5 words that describe how your brand should feel.</p>
                    <input 
                      type="text" 
                      value={formData.vibe}
                      onChange={e => updateForm('vibe', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                      placeholder="e.g. Playful, Professional, Premium, Minimal..." 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Color Preferences</label>
                    <p className="text-sm font-medium text-black/60 mb-2">Do you have existing brand colors? Or colors you love/hate?</p>
                    <input 
                      type="text" 
                      value={formData.colors}
                      onChange={e => updateForm('colors', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg" 
                      placeholder="Love forest green, hate bright red..." 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Inspiration Links</label>
                    <p className="text-sm font-medium text-black/60 mb-2">Paste links to websites you admire (and tell us what you like about them).</p>
                    <textarea 
                      rows={4}
                      value={formData.inspiration}
                      onChange={e => updateForm('inspiration', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg resize-none" 
                      placeholder="1. stripe.com - love the animations&#10;2. apple.com - love the typography..." 
                    />
                  </div>
                  
                  {isCustomPlan && (
                    <div className="p-6 bg-[#F8F5F2] border-4 border-black rounded-2xl flex items-start gap-4">
                      <Sparkles className="w-6 h-6 text-[#FF9B71] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-black uppercase tracking-tighter text-lg mb-1">Custom Design Tier</h4>
                        <p className="font-medium text-black/70 text-sm">Since you selected a custom plan, we'll use this as a baseline to create 100% bespoke wireframes and concepts for you.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Assets & Copy */}
            {currentStep === 4 && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">The Goods.</h2>
                  <p className="text-xl font-medium text-black/70">Upload your assets or let us know what you need.</p>
                </div>

                <div className="space-y-8 bg-white p-8 lg:p-12 border-4 border-black rounded-[32px] shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <button className="flex flex-col items-center justify-center gap-4 p-8 border-4 border-dashed border-black/30 bg-[#F8F5F2] hover:bg-black/5 hover:border-black rounded-2xl transition-all cursor-pointer group">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <span className="font-black uppercase tracking-widest text-sm block mb-1">Upload Logo</span>
                        <span className="text-sm font-medium text-black/50">SVG, PNG, JPG</span>
                      </div>
                    </button>

                    <button className="flex flex-col items-center justify-center gap-4 p-8 border-4 border-dashed border-black/30 bg-[#F8F5F2] hover:bg-black/5 hover:border-black rounded-2xl transition-all cursor-pointer group">
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <span className="font-black uppercase tracking-widest text-sm block mb-1">Upload Brand Images</span>
                        <span className="text-sm font-medium text-black/50">Photos of team, products, etc.</span>
                      </div>
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="font-black uppercase tracking-widest text-sm">Specific Wording / Copy</label>
                    <p className="text-sm font-medium text-black/60 mb-2">Drop in any mission statements, key taglines, or paragraphs you definitely want on the site.</p>
                    <textarea 
                      rows={6}
                      value={formData.copywriting}
                      onChange={e => updateForm('copywriting', e.target.value)}
                      className="w-full bg-[#F8F5F2] border-4 border-black rounded-xl p-4 font-medium outline-none focus:bg-white transition-colors text-lg resize-none" 
                      placeholder="Our slogan is 'Built to Last'. Make sure this is on the homepage..." 
                    />
                  </div>

                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t-4 border-black p-6 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={prevStep}
            className={`px-8 py-4 font-black uppercase tracking-widest text-sm flex items-center gap-2 transition-all ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'hover:-translate-x-1'}`}
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={3} /> Back
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button 
              onClick={nextStep}
              className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest rounded-xl text-sm flex items-center gap-2 hover:bg-black/80 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all"
            >
              Continue <ArrowRight className="w-4 h-4" strokeWidth={3} />
            </button>
          ) : (
            <Link 
              href="/dashboard"
              className="px-8 py-4 bg-[#FF9B71] text-black border-4 border-black font-black uppercase tracking-widest rounded-xl text-sm flex items-center gap-2 hover:bg-[#FF8855] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              Submit & Go to Dashboard <ArrowRight className="w-4 h-4" strokeWidth={3} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <React.Suspense fallback={<div>Loading onboarding...</div>}>
      <OnboardingForm />
    </React.Suspense>
  );
}
