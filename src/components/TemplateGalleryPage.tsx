'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Eye, Check } from 'lucide-react';
import Link from 'next/link';

interface Template {
  id: string;
  name: string;
  description: string;
  sections: string[];
  image: string; // Placeholder mockup image
}

interface TemplateGalleryPageProps {
  industryId: string;
  industryName: string;
  onSelectTemplate: (templateId: string) => void;
}

// Mockup templates by industry
const TEMPLATES_BY_INDUSTRY: Record<string, Template[]> = {
  'local-service': [
    {
      id: 'hero-grid-features',
      name: 'Hero + Services Grid',
      description: 'Large hero image with services grid below',
      sections: ['Hero with CTA', 'Services Grid (4 columns)', 'Why Choose Us', 'Testimonials', 'Contact CTA', 'Footer'],
      image: '/mockups/local-service-1.png',
    },
    {
      id: 'hero-2col-about',
      name: 'Hero + 2 Column Layout',
      description: 'Hero with about section and alternating layout',
      sections: ['Hero with Tagline', 'About + Image', 'Services (left text, right image)', 'Testimonials', 'Contact Info', 'Footer'],
      image: '/mockups/local-service-2.png',
    },
    {
      id: 'minimal-clean',
      name: 'Minimal & Clean',
      description: 'Simple, professional design with clean typography',
      sections: ['Top Navigation', 'Hero Text + CTA', 'Services List', 'Why Choose Us', 'Contact Form', 'Footer'],
      image: '/mockups/local-service-3.png',
    },
    {
      id: 'gallery-focused',
      name: 'Gallery Focused',
      description: 'Large photo gallery showcasing your work',
      sections: ['Hero', 'Before/After Gallery', 'Project Details', 'Services', 'Testimonials', 'Contact', 'Footer'],
      image: '/mockups/local-service-4.png',
    },
  ],
  'restaurant': [
    {
      id: 'menu-showcase',
      name: 'Menu Showcase',
      description: 'Highlight your menu and food photos prominently',
      sections: ['Hero with Food Photos', 'Menu Preview', 'Restaurant Info', 'Reservation CTA', 'Hours & Address', 'Footer'],
      image: '/mockups/restaurant-1.png',
    },
    {
      id: 'gallery-centric',
      name: 'Gallery Centric',
      description: 'Large photo gallery of food and ambiance',
      sections: ['Large Hero', 'Food Photo Gallery', 'About Restaurant', 'Menu Link', 'Contact & Booking', 'Footer'],
      image: '/mockups/restaurant-2.png',
    },
    {
      id: 'story-first',
      name: 'Story First',
      description: 'Tell your restaurant\'s story before showing menu',
      sections: ['Hero', 'Your Story', 'Chef/Owner Bio', 'Menu Section', 'Reservation CTA', 'Hours', 'Footer'],
      image: '/mockups/restaurant-3.png',
    },
  ],
  'ecommerce': [
    {
      id: 'product-grid',
      name: 'Product Grid',
      description: 'Classic grid layout showcasing all products',
      sections: ['Hero Banner', 'Featured Products Grid', 'Categories', 'Testimonials', 'Newsletter Signup', 'Footer'],
      image: '/mockups/ecommerce-1.png',
    },
    {
      id: 'featured-hero',
      name: 'Featured Products Hero',
      description: 'Large hero with featured products below',
      sections: ['Bold Hero', 'Featured Products (3-4)', 'Browse All Products Grid', 'Why Shop With Us', 'Customer Reviews', 'Footer'],
      image: '/mockups/ecommerce-2.png',
    },
    {
      id: 'minimalist',
      name: 'Minimalist Catalog',
      description: 'Clean, simple product showcase',
      sections: ['Hero Text', 'Product Grid', 'Product Details', 'Reviews', 'Contact CTA', 'Footer'],
      image: '/mockups/ecommerce-3.png',
    },
  ],
  'agency': [
    {
      id: 'portfolio-services',
      name: 'Portfolio + Services',
      description: 'Showcase work and services prominently',
      sections: ['Hero', 'Featured Work (Gallery)', 'Services Overview', 'About Agency', 'Team', 'Contact', 'Footer'],
      image: '/mockups/agency-1.png',
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      description: 'Deep dive into past projects',
      sections: ['Hero', 'Featured Case Studies (3)', 'Services', 'Process', 'Testimonials', 'Contact', 'Footer'],
      image: '/mockups/agency-2.png',
    },
    {
      id: 'minimal-portfolio',
      name: 'Minimal Portfolio',
      description: 'Let your work speak for itself',
      sections: ['Simple Hero', 'Portfolio Grid', 'About', 'Contact', 'Footer'],
      image: '/mockups/agency-3.png',
    },
  ],
  'salon': [
    {
      id: 'services-gallery',
      name: 'Services + Gallery',
      description: 'Show services with before/after photos',
      sections: ['Hero', 'Services List', 'Before/After Gallery', 'Stylists/Team', 'Booking CTA', 'Hours', 'Footer'],
      image: '/mockups/salon-1.png',
    },
    {
      id: 'gallery-first',
      name: 'Gallery First',
      description: 'Large gallery of transformations',
      sections: ['Hero', 'Photo Gallery', 'Services', 'Team Profiles', 'Testimonials', 'Booking', 'Footer'],
      image: '/mockups/salon-2.png',
    },
  ],
  'fitness': [
    {
      id: 'classes-membership',
      name: 'Classes + Membership',
      description: 'Feature classes and membership tiers',
      sections: ['Hero Video/Image', 'Class Schedule', 'Membership Plans', 'Trainer Profiles', 'Testimonials', 'Sign Up CTA', 'Footer'],
      image: '/mockups/fitness-1.png',
    },
    {
      id: 'transformation-focused',
      name: 'Transformation Focused',
      description: 'Showcase member results',
      sections: ['Hero', 'Transformation Gallery', 'Programs', 'Trainers', 'Success Stories', 'Join CTA', 'Footer'],
      image: '/mockups/fitness-2.png',
    },
  ],
  'realtor': [
    {
      id: 'featured-listings',
      name: 'Featured Listings',
      description: 'Showcase top properties',
      sections: ['Hero', 'Featured Properties', 'All Listings', 'About Agent', 'Testimonials', 'Contact CTA', 'Footer'],
      image: '/mockups/realtor-1.png',
    },
    {
      id: 'agent-profile',
      name: 'Agent Profile First',
      description: 'Personal agent brand with listings',
      sections: ['Hero with Agent Photo', 'About/Bio', 'Featured Listings', 'Services', 'Testimonials', 'Contact', 'Footer'],
      image: '/mockups/realtor-2.png',
    },
  ],
  'consulting': [
    {
      id: 'services-focused',
      name: 'Services Focused',
      description: 'Highlight consulting services',
      sections: ['Hero', 'Services (3-4)', 'Process/Methodology', 'Case Studies', 'Testimonials', 'Contact', 'Footer'],
      image: '/mockups/consulting-1.png',
    },
    {
      id: 'thought-leadership',
      name: 'Thought Leadership',
      description: 'Establish expertise and authority',
      sections: ['Hero', 'Expertise Areas', 'Recent Work', 'Articles/Insights', 'Bio/Team', 'Contact', 'Footer'],
      image: '/mockups/consulting-2.png',
    },
  ],
  'education': [
    {
      id: 'courses-programs',
      name: 'Courses & Programs',
      description: 'Showcase educational offerings',
      sections: ['Hero', 'Course Cards/Grid', 'About Institution', 'Instructors', 'Testimonials', 'Enrollment CTA', 'Footer'],
      image: '/mockups/education-1.png',
    },
  ],
};

export const TemplateGalleryPage: React.FC<TemplateGalleryPageProps> = ({
  industryId,
  industryName,
  onSelectTemplate,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [previewingTemplate, setPreviewingTemplate] = useState<string | null>(null);

  const templates = TEMPLATES_BY_INDUSTRY[industryId] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link href="/get-started" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Industries
          </Link>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-3">
            {industryName} Templates
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Pick the layout that matches your vision. (No real images yet — just showing the structure)
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, idx) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className={`group h-full rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                selectedTemplate === template.id
                  ? 'border-indigo-600 bg-indigo-50 shadow-lg'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
              }`}>
                {/* Mockup Image */}
                <div className="relative bg-slate-200 h-48 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl text-slate-400 font-black mb-2">📐</div>
                    <p className="text-sm text-slate-600 font-semibold px-4">
                      {template.sections.join(' → ')}
                    </p>
                  </div>

                  {/* Preview Button Overlay */}
                  <button
                    onClick={() => setPreviewingTemplate(template.id)}
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <div className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg">
                      <Eye className="w-4 h-4" />
                      Preview Layout
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{template.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{template.description}</p>

                  {/* Sections List */}
                  <div className="mb-6 space-y-2">
                    {template.sections.map((section) => (
                      <div key={section} className="flex items-center gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {section}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => {
                      setSelectedTemplate(template.id);
                      setTimeout(() => {
                        onSelectTemplate(template.id);
                      }, 300);
                    }}
                    className={`w-full py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      selectedTemplate === template.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                    }`}
                  >
                    {selectedTemplate === template.id && <Check className="w-4 h-4" />}
                    {selectedTemplate === template.id ? 'Selected' : 'Choose This'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-white rounded-2xl border-2 border-indigo-600 p-8 shadow-lg"
          >
            <p className="text-slate-700 mb-4">
              Ready to get started? Sign up and we'll build your site in 3-5 days.
            </p>
            <Link
              href={`/signup?template=${selectedTemplate}&industry=${industryId}`}
              className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg rounded-xl transition-all shadow-lg"
            >
              Continue to Sign Up →
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};
