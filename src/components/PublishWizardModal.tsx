"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X as CloseIcon, Loader2, CheckCircle2 } from 'lucide-react';
import PricingModal from './PricingModal';
import DomainManagerModal from './DomainManagerModal';

interface PublishWizardModalProps {
  site: any;
  isOnboardedPaid: boolean;
  onClose: () => void;
  onPublishInitial: () => Promise<any>; // Returns the updated site object with tenantId
}

export default function PublishWizardModal({ 
  site, 
  isOnboardedPaid,
  onClose, 
  onPublishInitial 
}: PublishWizardModalProps) {
  // Step 1: Pricing (skip if already paid), Step 2: Publishing (loader), Step 3: Domain, Step 4: Final Success
  const initialStep = (site.planTier === 'DIY' && !isOnboardedPaid) ? 'plan' : 'publishing';
  
  const [step, setStep] = useState<'plan' | 'publishing' | 'domain' | 'success'>(initialStep);
  const [updatedSite, setUpdatedSite] = useState<any>(site);
  const [domainError, setDomainError] = useState('');

  // Start the actual publish once the plan is selected (or immediately if already paid)
  React.useEffect(() => {
    if (step === 'publishing') {
      const publish = async () => {
        try {
          const siteResult = await onPublishInitial();
          setUpdatedSite(siteResult);
          setStep('domain');
        } catch (err) {
          console.error('Initial publish failed:', err);
          alert('Failed to initialize workspace for publishing.');
          onClose();
        }
      };
      publish();
    }
  }, [step, onPublishInitial, onClose]);

  const handlePlanSelected = (planName: string) => {
    // Mark as paid in local storage for now (mock)
    localStorage.setItem('diy_plan_paid', 'true');
    setStep('publishing');
  };

  const handleDomainContinue = () => {
    setStep('success');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 10 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }} 
        exit={{ scale: 0.95, opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-[#F8F5F2] border-[4px] border-black rounded-[32px] p-6 md:p-10 max-w-4xl w-full shadow-[16px_16px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto relative flex flex-col min-h-[400px]"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors border border-transparent hover:border-black z-10">
          <CloseIcon className="w-6 h-6" />
        </button>

        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
            <span className={step === 'plan' ? 'text-indigo-600' : 'text-slate-800'}>1. Plan</span>
            <span>—</span>
            <span className={step === 'publishing' || step === 'domain' ? 'text-indigo-600' : (step === 'success' ? 'text-slate-800' : 'text-slate-300')}>2. Domain</span>
            <span>—</span>
            <span className={step === 'success' ? 'text-emerald-600' : 'text-slate-300'}>3. Live</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            {step === 'plan' && 'Choose a Plan'}
            {step === 'publishing' && 'Initializing...'}
            {step === 'domain' && 'Connect Domain'}
            {step === 'success' && 'You\'re Live!'}
          </h2>
        </div>

        <div className="flex-1 flex flex-col relative">
          <AnimatePresence mode="wait">
            {step === 'plan' && (
              <motion.div key="plan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                {/* We just render PricingModal content inline here, or extract the pricing logic. 
                    Since PricingModal is standalone, let's extract the PRICING_PLANS UI here so it flows nicely without nested backdrops. */}
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  {[
                    {
                      name: "DIY Plan", price: "$20", description: "Perfect for managing your own website.", color: '#3B82F6',
                      features: ["Hosting & SSL included", "Unlimited edits via builder", "Connect custom domain", "Basic support"]
                    },
                    {
                      name: "DFY Agency", price: "$150", description: "We manage and update it for you.", color: '#8B5CF6', popular: true,
                      features: ["Everything in DIY", "Priority Agency Support", "Monthly Content Updates", "SEO Optimization"]
                    }
                  ].map((plan, i) => (
                    <div key={plan.name} className="p-6 border-2 border-black rounded-2xl bg-white relative flex flex-col hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all cursor-pointer" onClick={() => handlePlanSelected(plan.name)}>
                      {plan.popular && <div className="absolute -top-3 right-6 px-3 py-1 border-2 border-black rounded-full font-bold uppercase tracking-widest text-[10px] text-white bg-amber-500 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Most Popular</div>}
                      <h3 className="text-xl font-extrabold uppercase tracking-tight mb-2" style={{ color: plan.color }}>{plan.name}</h3>
                      <p className="text-zinc-500 font-semibold uppercase tracking-wider text-[10px] min-h-[30px]">{plan.description}</p>
                      <div className="mb-6 flex items-baseline gap-1 mt-4">
                        <span className="text-4xl font-black tracking-tight text-black">{plan.price}</span>
                        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">/month</span>
                      </div>
                      <div className="space-y-3 mb-8 flex-grow">
                        {plan.features.map((feature, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <div className="w-4 h-4 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 mt-0.5 border-2 border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]"><CheckCircle2 className="w-2.5 h-2.5 text-black" strokeWidth={3} /></div>
                            <span className="font-semibold text-xs text-zinc-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full py-3 border-2 border-black rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-black hover:text-white transition-colors text-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Select {plan.name}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'publishing' && (
              <motion.div key="publishing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center py-20 text-center">
                <Loader2 className="w-16 h-16 text-indigo-500 animate-spin mb-6" />
                <h3 className="text-xl font-black uppercase tracking-widest text-slate-800">Generating Workspace...</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-2">Provisioning your server resources</p>
              </motion.div>
            )}

            {step === 'domain' && (
              <motion.div key="domain" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex-1 w-full flex flex-col">
                <div className="flex-1 w-full bg-white rounded-2xl border-2 border-black/10 overflow-hidden">
                  <DomainManagerModal 
                    site={updatedSite} 
                    inline={true} 
                    onClose={() => {}} 
                    onDomainUpdated={(id, domain) => {}} 
                    onContinue={handleDomainContinue}
                  />
                </div>
                <div className="mt-4 flex justify-between items-center px-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">You can also skip and use the free subdomain.</p>
                  <button onClick={handleDomainContinue} className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-black hover:underline transition-colors">
                    Skip for now →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center justify-center py-12 text-center">
                <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center border-[4px] border-emerald-500 mb-8 shadow-[8px_8px_0px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-slate-800 mb-4">Site Published!</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                  Your website is now live and propagating across the global edge network.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-10 bg-emerald-500 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black"
                >
                  Return to Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
