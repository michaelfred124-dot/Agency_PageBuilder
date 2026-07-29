'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, Sparkles, ChevronRight, CheckCircle2, ArrowRight,
  Loader2, Wand2, Clock, PenTool
} from 'lucide-react';

interface TierSpecificOnboardingProps {
  tier: 'DIY' | 'DFY';
  isOpen: boolean;
  onClose: () => void;
  onComplete: (answers: any) => void;
}

export const TierSpecificOnboarding: React.FC<TierSpecificOnboardingProps> = ({
  tier,
  isOpen,
  onClose,
  onComplete,
}) => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState({
    businessName: '',
    businessType: '',
    tagline: '',
    phone: '',
    email: '',
    website: '',
    goals: [] as string[],
    targetMarket: '',
    brandColor: '#1B6EB5',
    template: 'standard',
  });

  if (!isOpen) return null;

  const isDIY = tier === 'DIY';

  const handleNext = () => {
    if (isDIY) {
      if (step === 2) {
        // Generate DIY site
        setIsLoading(true);
        setTimeout(() => {
          onComplete(answers);
          setIsLoading(false);
          setStep(0);
        }, 1500);
      } else {
        setStep(step + 1);
      }
    } else {
      if (step === 3) {
        // Submit DFY application
        setIsLoading(true);
        setTimeout(() => {
          onComplete(answers);
          setIsLoading(false);
          setStep(0);
        }, 1500);
      } else {
        setStep(step + 1);
      }
    }
  };

  const toggleGoal = (goal: string) => {
    setAnswers(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  return (
    <div className="fixed inset-0 z-[250] bg-black/50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className={`px-8 py-6 ${isDIY ? 'bg-amber-50 border-b-2 border-amber-200' : 'bg-indigo-50 border-b-2 border-indigo-200'}`}>
          <div className="flex items-center gap-3 mb-2">
            {isDIY ? (
              <Zap className="w-5 h-5 text-amber-600" />
            ) : (
              <Sparkles className="w-5 h-5 text-indigo-600" />
            )}
            <h2 className={`text-lg font-black ${isDIY ? 'text-amber-900' : 'text-indigo-900'}`}>
              {isDIY ? 'Build Your DIY Site' : 'Let Us Build Your Website'}
            </h2>
          </div>
          <p className={`text-xs font-semibold ${isDIY ? 'text-amber-700' : 'text-indigo-700'}`}>
            Step {step + 1} of {isDIY ? 3 : 4}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {isDIY ? (
              // DIY Flow
              <>
                {step === 0 && (
                  <motion.div key="diy-0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Business Name *</label>
                        <input
                          type="text"
                          value={answers.businessName}
                          onChange={(e) => setAnswers({ ...answers, businessName: e.target.value })}
                          placeholder="Your Business Name"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Business Type *</label>
                        <select
                          value={answers.businessType}
                          onChange={(e) => setAnswers({ ...answers, businessType: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        >
                          <option>Select type...</option>
                          <option>E-Commerce</option>
                          <option>Service-Based</option>
                          <option>Portfolio</option>
                          <option>Blog</option>
                          <option>Local Business</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Tagline</label>
                        <input
                          type="text"
                          value={answers.tagline}
                          onChange={(e) => setAnswers({ ...answers, tagline: e.target.value })}
                          placeholder="Your business tagline"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="diy-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Phone</label>
                        <input
                          type="tel"
                          value={answers.phone}
                          onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Email</label>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                          placeholder="contact@business.com"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Your Goals *</label>
                        <div className="space-y-2">
                          {['Build Online Presence', 'Sell Products', 'Get More Leads', 'Showcase Portfolio'].map(goal => (
                            <button
                              key={goal}
                              onClick={() => toggleGoal(goal)}
                              className={`w-full text-left px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                                answers.goals.includes(goal)
                                  ? 'border-amber-600 bg-amber-50'
                                  : 'border-slate-300 hover:border-amber-400'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${answers.goals.includes(goal) ? 'text-amber-600' : 'text-slate-400'}`} />
                                {goal}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="diy-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-3">Choose a Template</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Standard', 'Minimal', 'Bold', 'Corporate'].map(tmpl => (
                            <button
                              key={tmpl}
                              onClick={() => setAnswers({ ...answers, template: tmpl.toLowerCase() })}
                              className={`p-4 rounded-lg border-2 text-center font-bold transition-all ${
                                answers.template === tmpl.toLowerCase()
                                  ? 'border-amber-600 bg-amber-50'
                                  : 'border-slate-300 hover:border-amber-400'
                              }`}
                            >
                              {tmpl}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-xs text-amber-900 font-semibold">
                          ✨ We'll create your DIY site in seconds. You can customize everything with our page builder!
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              // DFY Flow
              <>
                {step === 0 && (
                  <motion.div key="dfy-0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Business Name *</label>
                        <input
                          type="text"
                          value={answers.businessName}
                          onChange={(e) => setAnswers({ ...answers, businessName: e.target.value })}
                          placeholder="Your Business Name"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Business Type *</label>
                        <select
                          value={answers.businessType}
                          onChange={(e) => setAnswers({ ...answers, businessType: e.target.value })}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                          <option>Select type...</option>
                          <option>E-Commerce</option>
                          <option>Service-Based</option>
                          <option>Portfolio</option>
                          <option>Local Business</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
                        <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-900 font-semibold">
                          Our team will reach out within 24 hours to start designing your site.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="dfy-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Phone *</label>
                        <input
                          type="tel"
                          value={answers.phone}
                          onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Email *</label>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                          placeholder="contact@business.com"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Website (if exists)</label>
                        <input
                          type="url"
                          value={answers.website}
                          onChange={(e) => setAnswers({ ...answers, website: e.target.value })}
                          placeholder="https://current-site.com"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="dfy-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-black text-slate-700 uppercase mb-2">Your Goals *</label>
                        <div className="space-y-2">
                          {['Professional Presence', 'Lead Generation', 'E-Commerce', 'Brand Awareness'].map(goal => (
                            <button
                              key={goal}
                              onClick={() => toggleGoal(goal)}
                              className={`w-full text-left px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                                answers.goals.includes(goal)
                                  ? 'border-indigo-600 bg-indigo-50'
                                  : 'border-slate-300 hover:border-indigo-400'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${answers.goals.includes(goal) ? 'text-indigo-600' : 'text-slate-400'}`} />
                                {goal}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="dfy-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="space-y-5">
                      <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5">
                        <h3 className="font-black text-indigo-900 mb-3">Next Steps</h3>
                        <ol className="space-y-2 text-sm text-indigo-800">
                          <li className="flex gap-2">
                            <span className="font-black">1.</span>
                            <span>We'll schedule a discovery call to learn about your vision</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-black">2.</span>
                            <span>Our team designs custom mockups for your approval</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-black">3.</span>
                            <span>We build, optimize, and launch your site</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-black">4.</span>
                            <span>You get 24/7 support and unlimited updates</span>
                          </li>
                        </ol>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-xs text-amber-900 font-semibold">
                          💳 $50/month includes all design, copywriting, updates, and priority support.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t bg-slate-50 px-8 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg font-black text-sm uppercase tracking-wider flex items-center gap-2 transition-all ${
              isDIY
                ? 'bg-amber-600 hover:bg-amber-700 text-white disabled:bg-slate-400'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-slate-400'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : step === (isDIY ? 2 : 3) ? (
              <>
                <Wand2 className="w-4 h-4" />
                {isDIY ? 'Create Site' : 'Submit'}
              </>
            ) : (
              <>
                Next <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
