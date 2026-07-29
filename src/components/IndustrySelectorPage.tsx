'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Wrench, ShoppingBag, Palette, Utensils, Scissors, Dumbbell, Briefcase, Home, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const INDUSTRIES = [
  { id: 'local-service', name: 'Local Service Business', icon: Wrench, description: 'Plumber, HVAC, Electrician, Handyman' },
  { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingBag, description: 'Sell products online' },
  { id: 'agency', name: 'Creative Agency', icon: Palette, description: 'Design, marketing, consulting' },
  { id: 'restaurant', name: 'Restaurant & Cafe', icon: Utensils, description: 'Menu, bookings, photos' },
  { id: 'salon', name: 'Salon & Beauty', icon: Scissors, description: 'Services, bookings, portfolio' },
  { id: 'fitness', name: 'Fitness Studio', icon: Dumbbell, description: 'Classes, memberships, schedules' },
  { id: 'realtor', name: 'Real Estate', icon: Home, description: 'Property listings, agent profile' },
  { id: 'consulting', name: 'Consulting', icon: Briefcase, description: 'Services, case studies, testimonials' },
  { id: 'education', name: 'Education', icon: BookOpen, description: 'Courses, instructors, sign-ups' },
];

interface IndustrySelectorPageProps {
  onSelectIndustry: (industryId: string) => void;
}

export const IndustrySelectorPage: React.FC<IndustrySelectorPageProps> = ({ onSelectIndustry }) => {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
              Choose Your Industry
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We'll show you website templates designed specifically for your business type.
            </p>
          </motion.div>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {INDUSTRIES.map((industry, idx) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  onClick={() => onSelectIndustry(industry.id)}
                  onMouseEnter={() => setHoveredIndustry(industry.id)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  className="w-full group relative"
                >
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    hoveredIndustry === industry.id
                      ? 'border-indigo-600 bg-indigo-50 shadow-lg scale-105'
                      : 'border-slate-200 bg-white hover:border-indigo-300'
                  }`}>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all ${
                      hoveredIndustry === industry.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Text */}
                    <h3 className="text-lg font-bold text-slate-900 text-left mb-1">{industry.name}</h3>
                    <p className="text-sm text-slate-600 text-left mb-4">{industry.description}</p>

                    {/* Arrow */}
                    <div className={`flex items-center text-sm font-semibold transition-all ${
                      hoveredIndustry === industry.id
                        ? 'text-indigo-600'
                        : 'text-slate-400 group-hover:text-indigo-500'
                    }`}>
                      See templates
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                        hoveredIndustry === industry.id ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-600 text-sm">
            💡 Can't find your industry? <a href="#" className="text-indigo-600 font-semibold hover:underline">Contact us</a> for custom solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
