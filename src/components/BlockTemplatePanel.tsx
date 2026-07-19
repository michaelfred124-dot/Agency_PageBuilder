'use client';
import React, { useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { useBentoContext } from '../lib/bentoStore';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  preview?: string;
}

export const BlockTemplatePanel: React.FC = () => {
  const { addWidget } = useBentoContext();
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isExpanded, setIsExpanded] = useState(true);

  const templates: Record<string, Template[]> = {
    hero: [
      { id: 'header', name: 'Hero Block', description: 'Full-width hero with image & text', category: 'hero' },
      { id: 'header-split', name: 'Split Hero', description: 'Side-by-side image & content', category: 'hero' },
      { id: 'header-minimal', name: 'Minimal Hero', description: 'Clean centered layout', category: 'hero' },
    ],
    content: [
      { id: 'text', name: 'Text Section', description: 'Rich text content block', category: 'content' },
      { id: 'image', name: 'Image', description: 'Full-width image', category: 'content' },
      { id: 'gallery', name: 'Gallery', description: 'Image carousel', category: 'content' },
    ],
    features: [
      { id: 'testimonial', name: 'Testimonials', description: 'Customer reviews & quotes', category: 'features' },
      { id: 'pricing', name: 'Pricing Table', description: 'Price plans comparison', category: 'features' },
      { id: 'stat', name: 'Statistics', description: 'Key metrics display', category: 'features' },
    ],
    forms: [
      { id: 'newsletter', name: 'Newsletter Signup', description: 'Email subscription form', category: 'forms' },
      { id: 'contact', name: 'Contact Form', description: 'Full contact form', category: 'forms' },
      { id: 'button', name: 'CTA Button', description: 'Call-to-action button', category: 'forms' },
    ],
    media: [
      { id: 'video', name: 'Video', description: 'Embedded video player', category: 'media' },
      { id: 'embed', name: 'Embed', description: 'YouTube, Spotify, etc', category: 'media' },
      { id: 'map', name: 'Map', description: 'Location map', category: 'media' },
    ],
    advanced: [
      { id: 'faq', name: 'FAQ Accordion', description: 'Frequently asked questions', category: 'advanced' },
      { id: 'reviews', name: 'Reviews', description: 'Star ratings & reviews', category: 'advanced' },
      { id: 'menu', name: 'Navigation Menu', description: 'Site navigation bar', category: 'advanced' },
    ],
  };

  const tabs = Object.keys(templates).map(key => ({
    key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  const currentTemplates = templates[activeTab] || [];

  return (
    <div className="bg-white border-b border-black/10 shadow-sm">
      <div className="px-4 py-2 flex items-center justify-between bg-black/2 border-b border-black/5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-black/5 rounded transition-colors"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
          <h3 className="text-xs font-bold uppercase tracking-wider text-black/60">Block Templates</h3>
        </div>
      </div>

      {isExpanded && (
        <>
          {/* Tab Navigation */}
          <div className="px-4 pt-3 pb-0 flex gap-1 overflow-x-auto border-b border-black/5">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.key
                    ? 'border-black text-black'
                    : 'border-transparent text-black/50 hover:text-black/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Template Grid */}
          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {currentTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => addWidget(template.id as any)}
                className="p-2 rounded-lg border border-black/10 hover:border-black/30 bg-white hover:bg-black/2 transition-all flex flex-col items-center justify-center gap-1 min-h-24"
              >
                <Plus className="w-4 h-4 text-black/40" />
                <div className="text-[10px] font-bold text-center text-black/70 leading-tight">
                  {template.name}
                </div>
                <div className="text-[8px] text-black/40 text-center line-clamp-2">
                  {template.description}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
