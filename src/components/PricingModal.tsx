"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Check, X as CloseIcon } from 'lucide-react';
import { COLORS } from '@/constants';

interface PricingModalProps {
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

const PRICING_PLANS = [
  {
    name: "DIY Plan",
    price: "$20",
    description: "Perfect for managing your own website.",
    features: [
      "Hosting & SSL included",
      "Unlimited edits via builder",
      "Connect custom domain",
      "Basic support"
    ],
    color: '#3B82F6' // Blue
  },
  {
    name: "DFY Agency",
    price: "$150",
    description: "We manage and update it for you.",
    features: [
      "Everything in DIY",
      "Priority Agency Support",
      "Monthly Content Updates",
      "SEO Optimization"
    ],
    color: '#8B5CF6', // Purple
    popular: true
  }
];

export default function PricingModal({ onClose, onSelectPlan }: PricingModalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="bg-[#F8F5F2] border-[4px] border-black rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-[16px_16px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Choose a Plan
            </h2>
            <p className="font-bold text-black/60 uppercase tracking-widest text-xs mt-2">
              Select a subscription to publish your site and connect a domain.
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors border border-transparent hover:border-black">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {PRICING_PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`p-6 border-2 border-black rounded-2xl bg-white relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_rgba(0,0,0,1)]`}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-3 right-6 px-3 py-1 border-2 border-black rounded-full font-bold uppercase tracking-widest text-[10px] text-white bg-amber-500 shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-extrabold uppercase tracking-tight mb-2" style={{ color: plan.color }}>
                {plan.name}
              </h3>
              <p className="text-zinc-500 font-semibold uppercase tracking-wider text-[10px] min-h-[30px]">{plan.description}</p>
              
              <div className="mb-6 flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-black tracking-tight text-black">{plan.price}</span>
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">/month</span>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 mt-0.5 border-2 border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                      <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                    </div>
                    <span className="font-semibold text-xs text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onSelectPlan(plan.name)}
                className="w-full py-3 border-2 border-black rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-black hover:text-white transition-colors text-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                Select {plan.name}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
