'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Zap, ArrowRight, BarChart3, Clock, Headphones, Code, Palette, Rocket } from 'lucide-react';

interface OnboardingPathSelectorProps {
  onSelectPath: (path: 'DIY' | 'DFY') => void;
  isOpen: boolean;
}

export const OnboardingPathSelector: React.FC<OnboardingPathSelectorProps> = ({ onSelectPath, isOpen }) => {
  const [selectedPath, setSelectedPath] = useState<'DIY' | 'DFY' | null>(null);

  if (!isOpen) return null;

  const handleSelect = (path: 'DIY' | 'DFY') => {
    setSelectedPath(path);
    setTimeout(() => onSelectPath(path), 300);
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-12 text-center z-10">
          <h1 className="text-4xl font-black mb-2">Choose Your Path</h1>
          <p className="text-indigo-100 text-lg">Pick the right workflow for your business</p>
        </div>

        {/* Path Cards */}
        <div className="grid md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
          {/* DIY Path */}
          <motion.div
            onClick={() => handleSelect('DIY')}
            whileHover={{ scale: 1.02 }}
            className={`relative cursor-pointer rounded-2xl border-2 transition-all ${
              selectedPath === 'DIY'
                ? 'border-indigo-600 bg-indigo-50/50 shadow-lg'
                : 'border-slate-200 hover:border-indigo-300 bg-white'
            }`}
          >
            <div className="p-8 space-y-6">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-amber-600" />
                </div>
                <span className="text-[10px] font-black bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                  $20/MO
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">DIY Self-Serve</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Build, customize, and manage your website yourself using our powerful page builder.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  { icon: '🎨', label: 'Full Page Builder Control' },
                  { icon: '➕', label: 'Add/Remove Sections Freely' },
                  { icon: '🎯', label: '100+ Block Templates' },
                  { icon: '📱', label: 'Mobile Responsive' },
                  { icon: '🌐', label: 'Custom Domain Support' },
                  { icon: '⚡', label: 'Live Preview' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* What's NOT included */}
              <div className="border-t pt-4 mt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Not Included</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Agency design consultation</li>
                  <li>• Custom copy & copywriting</li>
                  <li>• Email/phone support</li>
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect('DIY');
                }}
                className={`w-full py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedPath === 'DIY'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                }`}
              >
                <Zap className="w-4 h-4" />
                {selectedPath === 'DIY' ? 'Selected' : 'Choose DIY'}
              </button>
            </div>
          </motion.div>

          {/* DFY Path */}
          <motion.div
            onClick={() => handleSelect('DFY')}
            whileHover={{ scale: 1.02 }}
            className={`relative cursor-pointer rounded-2xl border-2 transition-all overflow-hidden ${
              selectedPath === 'DFY'
                ? 'border-indigo-600 bg-indigo-50/50 shadow-lg'
                : 'border-slate-200 hover:border-indigo-300 bg-white'
            }`}
          >
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-1 text-[9px] font-black uppercase">
              Most Popular ⭐
            </div>

            <div className="p-8 pt-12 space-y-6">
              {/* Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-indigo-600" />
                </div>
                <span className="text-[10px] font-black bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                  $50/MO
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Done-For-You</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We design, build, and manage your website completely. You just manage your business.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  { icon: '👨‍💼', label: 'Dedicated Account Manager' },
                  { icon: '🎨', label: 'Professional Website Design' },
                  { icon: '✍️', label: 'Custom Copywriting' },
                  { icon: '🔄', label: 'Unlimited Updates & Edits' },
                  { icon: '📞', label: '24-Hour Response Time' },
                  { icon: '🚀', label: 'Priority Support' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Extra perks */}
              <div className="border-t pt-4 mt-4 bg-indigo-50/50 -mx-8 px-8 py-4">
                <p className="text-xs font-semibold text-indigo-700 uppercase mb-2">✨ Includes</p>
                <ul className="space-y-1 text-sm text-indigo-600 font-medium">
                  <li>• SEO optimization</li>
                  <li>• Mobile optimization</li>
                  <li>• Content management</li>
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect('DFY');
                }}
                className={`w-full py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  selectedPath === 'DFY'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                <Rocket className="w-4 h-4" />
                {selectedPath === 'DFY' ? 'Selected' : 'Choose DFY'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t bg-slate-50 px-8 py-6 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            💡 <strong>Unsure?</strong> Start with DIY free for 30 days. Upgrade anytime.
          </p>
          {selectedPath && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
              <button
                onClick={() => handleSelect(selectedPath)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
