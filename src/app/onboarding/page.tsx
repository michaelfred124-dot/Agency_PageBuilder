"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Sparkles, Globe, ShieldCheck, Mail, Phone, Settings, ChevronRight } from 'lucide-react';
import { TEMPLATES, TEMPLATE_PAGES } from '@/lib/templates';
import { getSupabaseBrowserClient } from '@/lib/supabase';

const PRESETS = [
  {
    id: 'template-restaurant',
    name: 'Osteria Bella Restaurant',
    templateKey: 'restaurant',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=400&auto=format&fit=crop',
    desc: 'Premium 5-page website design for fine dining and modern restaurants.'
  },
  {
    id: 'template-lauren-wilson',
    name: 'Lauren Wilson Photo',
    templateKey: 'lauren',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    desc: 'Perfect for photographer portfolios, creatives, and visual artists.'
  },
  {
    id: 'template-greenscape-landscaping',
    name: 'Greenscape Landscaping',
    templateKey: 'greenscape',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
    desc: 'Great for landscaping, lawn care, and home renovation services.'
  },
  {
    id: 'template-northwood-coffee',
    name: 'Northwood Coffee Co.',
    templateKey: 'northwood',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop',
    desc: 'Designed for coffee shops, cafes, local bakeries, and eateries.'
  },
  {
    id: 'template-brighter-solar',
    name: 'Brighter Solar',
    templateKey: 'brighter_solar',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=400&q=80',
    desc: 'Perfect for clean energy, solar installation, and tech businesses.'
  },
  {
    id: 'template-volt-vikings',
    name: 'Volt Vikings',
    templateKey: 'voltvikings',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop',
    desc: 'High-impact premium layout for local home service, electrician and contracting businesses.'
  },
  {
    id: 'template-sterling-law',
    name: 'Sterling Law Group',
    templateKey: 'law_firm',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop',
    desc: 'Professional, trust-driving website for law firms and legal professionals.'
  },
  {
    id: 'template-ridge-line-auto',
    name: 'Ridge Line Auto Service',
    templateKey: 'auto_repair',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=400&auto=format&fit=crop',
    desc: 'Bold, conversion-focused website for auto repair and mechanic shops.'
  },
  {
    id: 'template-atelier-hair',
    name: 'Atelier Hair Studio',
    templateKey: 'hair_salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop',
    desc: 'Stylish, intimate website for hair salons, barbers, and beauty studios.'
  },
  {
    id: 'template-meridian-properties',
    name: 'Meridian Properties',
    templateKey: 'real_estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop',
    desc: 'Credibility-first website for real estate agents and brokerages.'
  },
  {
    id: 'template-iron-edge-fitness',
    name: 'Iron Edge Fitness',
    templateKey: 'personal_trainer',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
    desc: 'High-energy site for personal trainers, gyms, and fitness studios.'
  },
  {
    id: 'template-clarity-dental',
    name: 'Clarity Dental Studio',
    templateKey: 'dental',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop',
    desc: 'Clean, welcoming website for dental practices and healthcare providers.'
  },
  {
    id: 'template-paws-pamper',
    name: 'Paws & Pamper Pet Spa',
    templateKey: 'dog_grooming',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400&auto=format&fit=crop',
    desc: 'Friendly, warm website for pet grooming, dog daycare, and veterinary services.'
  },
  {
    id: 'template-golden-thread',
    name: 'The Golden Thread Events',
    templateKey: 'wedding_planner',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
    desc: 'Romantic, luxury website for wedding planners and event coordinators.'
  },
  {
    id: 'template-spotless-home',
    name: 'Spotless Home Co.',
    templateKey: 'home_cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop',
    desc: 'Trustworthy website for home cleaning and residential service businesses.'
  },
  {
    id: 'template-solstice-yoga',
    name: 'Solstice Yoga & Wellness',
    templateKey: 'yoga_studio',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=400&auto=format&fit=crop',
    desc: 'Calm, community-driven website for yoga studios and wellness centers.'
  },
  {
    id: 'template-valley-prohome',
    name: 'Valley ProHome Services',
    templateKey: 'prohome_services',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400&auto=format&fit=crop',
    desc: 'Bold contractor layout for plumbers, electricians, and HVAC companies.'
  },
  {
    id: 'template-maison-boutique',
    name: 'Maison Boutique',
    templateKey: 'maison_boutique',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400&auto=format&fit=crop',
    desc: 'Luxury editorial layout for fashion boutiques and lifestyle brands.'
  }
];

function OnboardingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [step, setStep] = useState(1); // 1 = choose template, 2 = brand information, 3 = loading redirect
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [presets, setPresets] = useState(PRESETS);
  
  // Fetch dynamic templates from the database
  React.useEffect(() => {
    const fetchTemplates = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase
        .from('site_templates')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
        
      if (!error && data && data.length > 0) {
        // Map DB templates to the PRESETS format
        const dbPresets = data.map(t => ({
          id: `template-${t.template_key}`,
          name: t.name,
          templateKey: t.template_key,
          image: t.image_url || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
          desc: t.description || 'Custom agency template.'
        }));
        
        // Merge with hardcoded presets, prioritizing DB templates if keys conflict
        setPresets(prev => {
          const merged = [...dbPresets];
          prev.forEach(p => {
            if (!merged.find(m => m.templateKey === p.templateKey)) {
              merged.push(p);
            }
          });
          return merged;
        });
      }
    };
    fetchTemplates();
  }, []);

  // Auth gate check
  React.useEffect(() => {
    const checkUser = async () => {
      const supabase = getSupabaseBrowserClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push(`/login?redirect=/onboarding?plan=DIY%2520Template`);
      }
    };
    checkUser();
  }, [router]);
  
  // DIY State
  const [formData, setFormData] = useState({
    businessName: '',
    tagline: '',
    phone: '',
    email: '',
    logoText: ''
  });

  // DFY State
  const planName = searchParams.get('plan') || 'DIY Template';
  const isDfy = planName.toLowerCase().includes('managed') || planName.toLowerCase().includes('custom') || planName.toLowerCase().includes('fully');
  
  const [dfyStep, setDfyStep] = useState(1);
  const [dfyAnswers, setDfyAnswers] = useState({
    businessName: '',
    tagline: '',
    industry: '',
    themeStyle: 'Minimalist Sleek',
    logoNotes: '',
    pagesNeeded: ['Home', 'Services', 'Contact'],
    websiteGoal: 'Capture Leads',
    email: '',
    phone: '',
    location: '',
    socialHandles: '',
    scheduleCall: 'no',
  });

  const handleSelectTemplate = (key: string) => {
    setSelectedTemplate(key);
    const chosenPreset = presets.find(p => p.templateKey === key);
    setFormData(prev => ({
      ...prev,
      businessName: chosenPreset ? `My ${chosenPreset.name}` : 'My Business',
      logoText: chosenPreset ? chosenPreset.name.split(' ')[0] : 'MyBrand'
    }));
    setStep(2); // Advance to basic information
  };

  const customizeSections = (sections: any[], data: typeof formData) => {
    const cloned: any[] = JSON.parse(JSON.stringify(sections));
    const name = data.businessName || 'My Business';
    const tagline = data.tagline || 'Premium Quality & Professional Service';
    const phone = data.phone || '(555) 123-4567';
    const email = data.email || 'contact@mybusiness.com';
    
    return cloned.map(section => {
      if (section.props) {
        if (section.type === 'RHero' || section.type.includes('Hero')) {
          if (section.props.title && section.type !== 'RHero') section.props.title = `${name}.\n${tagline}`;
          if (section.props.description) {
            section.props.description = section.props.description.replace(/Osteria Bella/g, name);
          }
        }
        if (section.type === 'RFooter' || section.type.includes('Footer')) {
          if (section.props.businessName) section.props.businessName = name;
          if (section.props.tagline) section.props.tagline = tagline;
          if (section.props.phone) section.props.phone = phone;
          if (section.props.email) section.props.email = email;
          if (section.props.desc) {
            section.props.desc = section.props.desc.replace(/Osteria Bella/g, name);
          }
          if (section.props.text) {
            section.props.text = `© 2026 ${name}. All rights reserved. Powered by Michaelfred Designs.`;
          }
        }
        if (section.type === 'RHoursInfo' || section.type.includes('FindUs')) {
          if (section.props.phone) section.props.phone = phone;
          if (section.props.email) section.props.email = email;
        }
        if (section.type === 'RChef') {
          if (section.props.bio1) {
            section.props.bio1 = section.props.bio1.replace(/Osteria Bella/g, name);
          }
          if (section.props.bio2) {
            section.props.bio2 = section.props.bio2.replace(/Osteria Bella/g, name);
          }
        }
      }
      return section;
    });
  };

  const handleGenerateTemplate = (templateKey: string) => {
    const rawTemplateData = TEMPLATES[templateKey];
    if (!rawTemplateData) return [];
    return customizeSections(rawTemplateData, formData);
  };

  const handleSubmit = async () => {
    if (!formData.businessName.trim()) return alert('Please enter your business name.');
    
    setStep(3); // Loading screen
 
    try {
      const templateKey = selectedTemplate || 'restaurant';
      const newId = `site-${Date.now()}`;
      
      let pagesList = [];
      
      // 1. Try fetching the dynamic layout from the Shadow Tenant API
      const res = await fetch(`/api/onboarding/template-layout?templateKey=${templateKey}`);
      const data = await res.json();
      
      if (data && data.pages) {
        // We found a visually built database template!
        pagesList = data.pages.map((page: any) => ({
          ...page,
          sections: customizeSections(page.sections, formData)
        }));
      } else if (TEMPLATE_PAGES[templateKey]) {
        // 2. Fallback to hardcoded 5-page layout
        pagesList = TEMPLATE_PAGES[templateKey].map(page => ({
          id: page.slug === '/' ? 'home' : `page-${page.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
          name: page.name,
          slug: page.slug,
          sections: customizeSections(page.sections, formData)
        }));
      } else {
        // 3. Fallback to single page website
        const customizedSections = handleGenerateTemplate(templateKey);
        pagesList = [{ id: 'home', name: 'Home', slug: '/', sections: customizedSections }];
      }

      // Save pages structure to localStorage
      localStorage.setItem(`site-pages-${newId}`, JSON.stringify(pagesList));
 
      // Register new site in the client workspace sites list
      const newSiteRecord = {
        id: newId,
        name: formData.businessName,
        url: `${formData.businessName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'site'}.com`,
        previewUrl: `/preview/${newId}`,
        status: 'Draft',
        image: presets.find(p => p.templateKey === templateKey)?.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
        lastUpdate: 'Just now',
        templateKey: templateKey,
        planTier: 'DIY'
      };
 
      // Set current session status of DIY plan payment to false (asks for payment on publish)
      localStorage.setItem('diy_plan_paid', 'false');
      
      const savedSites = localStorage.getItem('my-sites');
      let currentSites = [];
      if (savedSites) {
        try {
          currentSites = JSON.parse(savedSites);
        } catch(e) {
          console.error(e);
        }
      }
      const updated = [...currentSites, newSiteRecord];
      localStorage.setItem('my-sites', JSON.stringify(updated));
 
      // Save pointer to trigger editor
      sessionStorage.setItem('instant_edit_site_id', newId);
      // Advance to success page step
      setStep(4);
    } catch (err) {
      console.error(err);
      alert('An error occurred while generating your site. Please try again.');
      setStep(2);
    }
  };

  const handleDfySubmit = () => {
    if (!dfyAnswers.businessName.trim()) {
      alert("Please enter your business name.");
      return;
    }
    setDfyStep(7); // Loading submission
    setTimeout(() => {
      // Create new Custom DFY Site Record
      const newId = `site-dfy-${Date.now()}`;
      const newSiteRecord = {
        id: newId,
        name: dfyAnswers.businessName,
        url: 'Designing in progress...',
        previewUrl: `/preview/${newId}`,
        status: 'Designing',
        image: presets.find(p => p.templateKey === (selectedTemplate || 'restaurant'))?.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
        lastUpdate: 'Brief submitted',
        templateKey: selectedTemplate || 'restaurant',
        planTier: 'DFY',
        dfyDetails: dfyAnswers
      };

      const savedSites = localStorage.getItem('my-sites');
      let currentSites = [];
      if (savedSites) {
        try {
          currentSites = JSON.parse(savedSites);
        } catch(e) {
          console.error(e);
        }
      }
      const updated = [...currentSites, newSiteRecord];
      localStorage.setItem('my-sites', JSON.stringify(updated));
      
      // Complete step
      setDfyStep(8);
    }, 2000);
  };

  const handlePageCheck = (page: string) => {
    setDfyAnswers(prev => {
      const active = prev.pagesNeeded.includes(page) 
        ? prev.pagesNeeded.filter(p => p !== page) 
        : [...prev.pagesNeeded, page];
      return { ...prev, pagesNeeded: active };
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F6F8] flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="px-6 lg:px-12 py-5 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/pricing" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-600" />
          </Link>
          <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            {planName} Plan
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isDfy ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <span 
                key={idx} 
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  dfyStep > idx ? 'bg-indigo-600' : 'bg-slate-200'
                }`}
              />
            ))
          ) : (
            <>
              <span className={`w-2.5 h-2.5 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
              <span className={`w-2.5 h-2.5 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
              <span className={`w-2.5 h-2.5 rounded-full ${step >= 3 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
            </>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 lg:p-12 pb-32 flex flex-col justify-center">
        <AnimatePresence mode="wait">          {isDfy ? (
            <motion.div
              key={`dfy-${dfyStep}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* DFY Step 1: Baseline Template Selection */}
              {dfyStep === 1 && (
                <div className="space-y-8 max-w-3xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Choose your baseline template layout.</h2>
                    <p className="text-slate-550 text-xs font-medium">
                      Pick a starting framework that matches your vision. Think of these as structural blueprints—our senior design team will take this template and fully customize the layout, copy, branding, and assets to make it 100% unique to your business.
                    </p>
                  </div>

                  {/* 180sites takeover banner */}
                  <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex items-start gap-4 shadow-[sm]">
                    <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-indigo-900">Done-For-You Design Takeover</h4>
                      <p className="text-indigo-750 text-[11px] leading-relaxed font-medium">
                        Just like highly customizable template builds (pioneered by top agencies like 180sites.com), we utilize premium blueprints to save you time and money. Select a structure you like, and we do the heavy lifting—writing conversion-focused copy, crafting custom graphics, and tailoring every pixel.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {presets.map(preset => {
                      const isSelected = selectedTemplate === preset.templateKey;
                      return (
                        <div 
                          key={preset.templateKey}
                          onClick={() => setSelectedTemplate(preset.templateKey)}
                          className={`group cursor-pointer bg-white border rounded-2xl overflow-hidden shadow-sm transition-all flex flex-col justify-between ${
                            isSelected 
                              ? 'border-indigo-600 ring-2 ring-indigo-600/15 shadow-md' 
                              : 'border-slate-200 hover:border-indigo-400 hover:shadow-md'
                          }`}
                        >
                          <div className="aspect-[16/10] relative overflow-hidden bg-slate-50 border-b border-slate-100">
                            <img 
                              src={preset.image} 
                              alt={preset.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                              referrerPolicy="no-referrer"
                            />
                            {isSelected && (
                              <div className="absolute top-3 right-3 bg-indigo-600 text-white rounded-full p-1.5 shadow-sm">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex items-center justify-between gap-3">
                            <div>
                              <h3 className="font-bold text-slate-800 text-xs">{preset.name}</h3>
                              <p className="text-slate-400 text-[10px] font-medium mt-0.5 line-clamp-1">{preset.desc}</p>
                            </div>
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isSelected ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                            }`}>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-2">
                    <button 
                      onClick={() => {
                        if (!selectedTemplate) return alert("Please select a starting template layout to continue.");
                        setDfyStep(2);
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Next Step <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* DFY Step 2: Business Basics */}
              {dfyStep === 2 && (
                <div className="space-y-8 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Tell us about your business.</h2>
                    <p className="text-slate-500 text-xs">Let's gather some basic business details for our design team to begin structuring your brand concept.</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Name</label>
                      <input 
                        type="text" 
                        value={dfyAnswers.businessName}
                        onChange={e => setDfyAnswers(prev => ({ ...prev, businessName: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. Greenscape Landscaping Solutions" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Short Business Tagline</label>
                      <input 
                        type="text" 
                        value={dfyAnswers.tagline}
                        onChange={e => setDfyAnswers(prev => ({ ...prev, tagline: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. Premium landscaping and clean lawn design in Denver" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Industry / Business Category</label>
                      <input 
                        type="text" 
                        value={dfyAnswers.industry}
                        onChange={e => setDfyAnswers(prev => ({ ...prev, industry: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. Landscaping, Photo Studio, Cafe, HVAC Contracting" 
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button 
                      onClick={() => setDfyStep(1)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => {
                        if (!dfyAnswers.businessName.trim()) return alert("Please enter your business name.");
                        setDfyStep(3);
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Next Step <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* DFY Step 3: Customization & Visual Styling */}
              {dfyStep === 3 && (
                <div className="space-y-8 max-w-2xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Visual style & customization goals.</h2>
                    <p className="text-slate-550 text-xs font-medium">What style direction should our team apply to your baseline template choice?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Minimalist Sleek', desc: 'Clean layouts, spacious white backgrounds, neutral tones, and crisp sans-serif headings.' },
                      { name: 'Bold Neo-Brutalist', desc: 'Vibrant colors, thick black borders, offset cartoon-style shadows, and raw, high-impact fonts.' },
                      { name: 'Warm & Organic', desc: 'Earthy greens, warm beiges, rounded cards, soft drop shadows, and friendly serif typography.' },
                      { name: 'Cyberpunk Dark Mode', desc: 'Deep charcoal backgrounds, glowing electric accents (green/purple/neon), and modern technological grid details.' }
                    ].map(style => (
                      <div 
                        key={style.name}
                        onClick={() => setDfyAnswers(prev => ({ ...prev, themeStyle: style.name }))}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between text-left ${
                          dfyAnswers.themeStyle === style.name 
                            ? 'bg-indigo-50 border-indigo-600 shadow-[2px_2px_0px_rgba(79,70,229,0.1)]' 
                            : 'bg-white border-slate-200 hover:border-slate-350 hover:bg-slate-50/50'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-extrabold text-slate-800">{style.name}</span>
                            {dfyAnswers.themeStyle === style.name && (
                              <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-white" strokeWidth={3} /></div>
                            )}
                          </div>
                          <p className="text-slate-400 text-[10px] font-medium leading-relaxed mt-2">{style.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Customization Brief & Design Notes</label>
                    <textarea
                      value={dfyAnswers.logoNotes}
                      onChange={e => setDfyAnswers(prev => ({ ...prev, logoNotes: e.target.value }))}
                      placeholder="e.g. Please integrate our brand colors (forest green and cream). We would like the layout customized to focus heavily on showcasing client reviews and high-quality portfolio images. We will upload our logo to the dashboard checklist."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none min-h-[90px] leading-relaxed font-medium"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button 
                      onClick={() => setDfyStep(2)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setDfyStep(4)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Next Step <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* DFY Step 4: Pages & Goals */}
              {dfyStep === 4 && (
                <div className="space-y-8 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Pages and target goals.</h2>
                    <p className="text-slate-500 text-xs">Which sections and conversion structures are necessary to support your site launch?</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Pages Needed (Select all that apply)</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Home Page', 'Services Detail', 'About Us', 'Contact Channel', 'Photo Gallery', 'FAQ Page', 'Blog / Articles'].map(page => {
                          const isChecked = dfyAnswers.pagesNeeded.includes(page);
                          return (
                            <div 
                              key={page}
                              onClick={() => handlePageCheck(page)}
                              className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between text-xs font-semibold ${
                                isChecked 
                                  ? 'bg-indigo-50 border-indigo-600 text-indigo-700' 
                                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100/40'
                              }`}
                            >
                              <span>{page}</span>
                              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                                isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-350 bg-white'
                              }`}>
                                {isChecked && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Primary Website Goal</label>
                      <select 
                        value={dfyAnswers.websiteGoal}
                        onChange={e => setDfyAnswers(prev => ({ ...prev, websiteGoal: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold focus:bg-white focus:border-indigo-400 focus:outline-none"
                      >
                        <option value="Capture Leads">Capture Leads / Custom Contact Submissions</option>
                        <option value="Book Consultations">Schedule Phone Calls & Booking Consultations</option>
                        <option value="Sell E-Commerce">Sell Products / Stripe Merchant Integration</option>
                        <option value="Brand Identity">Showcase Branding Portfolio & Information Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button 
                      onClick={() => setDfyStep(3)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setDfyStep(5)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Next Step <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* DFY Step 5: Contact & Social Handles */}
              {dfyStep === 5 && (
                <div className="space-y-8 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Public contact details.</h2>
                    <p className="text-slate-500 text-xs">These channels will be integrated into headers, maps, footers, and contact forms.</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Email</label>
                        <input 
                          type="email" 
                          value={dfyAnswers.email}
                          onChange={e => setDfyAnswers(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                          placeholder="e.g. contact@greenscape.com" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="text" 
                          value={dfyAnswers.phone}
                          onChange={e => setDfyAnswers(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                          placeholder="e.g. (303) 555-0199" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Location / Address</label>
                      <input 
                        type="text" 
                        value={dfyAnswers.location}
                        onChange={e => setDfyAnswers(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. Denver, CO (or physical street address)" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Social Handles (Instagram / Facebook)</label>
                      <input 
                        type="text" 
                        value={dfyAnswers.socialHandles}
                        onChange={e => setDfyAnswers(prev => ({ ...prev, socialHandles: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. @greenscapedenver, fb.com/greenscapelandscaping" 
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button 
                      onClick={() => setDfyStep(4)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setDfyStep(6)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Next Step <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* DFY Step 6: Kick-off Call Consultation option */}
              {dfyStep === 6 && (
                <div className="space-y-8 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Hop on a brief kick-off call?</h2>
                    <p className="text-slate-500 text-xs">Would you like to schedule a 15-minute onboarding phone or video call with your lead web designer to review your brief?</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { val: 'yes', label: 'Yes, let\'s schedule a call! 📞', desc: 'We will send you a booking calendar link on the next page to schedule a direct consultation with your developer.' },
                      { val: 'no', label: 'No call needed, start building! 💻', desc: 'The details I have supplied in this brief are sufficient. Clear my dashboard and start designing right away.' }
                    ].map(opt => (
                      <div 
                        key={opt.val}
                        onClick={() => setDfyAnswers(prev => ({ ...prev, scheduleCall: opt.val }))}
                        className={`p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-4 ${
                          dfyAnswers.scheduleCall === opt.val 
                            ? 'bg-indigo-50 border-indigo-600 shadow-[2px_2px_0px_rgba(79,70,229,0.1)]' 
                            : 'bg-white border-slate-200 hover:border-slate-350 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          dfyAnswers.scheduleCall === opt.val ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-350 bg-white'
                        }`}>
                          {dfyAnswers.scheduleCall === opt.val && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                        <div>
                          <span className="text-xs font-extrabold text-slate-800 leading-none block">{opt.label}</span>
                          <span className="text-[10px] text-slate-400 font-medium leading-relaxed block mt-1.5">{opt.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button 
                      onClick={() => setDfyStep(5)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleDfySubmit}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm transition-all hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Submit Design Brief
                    </button>
                  </div>
                </div>
              )}

              {/* DFY Step 7: Submission Loader */}
              {dfyStep === 7 && (
                <div className="max-w-md mx-auto py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-indigo-600 animate-spin" />
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-800 text-base">Submitting onboarding brief...</h3>
                    <p className="text-slate-400 text-xs">Registering your account project timeline and assigning developer.</p>
                  </div>
                </div>
              )}

              {/* DFY Step 8: Onboarding Success */}
              {dfyStep === 8 && (
                <div className="max-w-md mx-auto py-8 text-center space-y-6 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-[4px] border-emerald-500 flex items-center justify-center text-emerald-500 shadow-sm animate-bounce">
                    <Check className="w-8 h-8" strokeWidth={4} />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">Brief Submitted!</h2>
                    <p className="text-slate-550 text-xs leading-relaxed max-w-sm mx-auto font-medium">
                      Our senior design team has received your design brief. 
                      <strong className="block text-slate-850 mt-2 font-extrabold">Please allow 5 to 10 business days for us to come up with the site.</strong>
                      The layout design and project timeline will automatically sync and update in your dashboard when ready!
                    </p>
                    {dfyAnswers.scheduleCall === 'yes' && (
                      <p className="text-xs text-indigo-600 font-bold bg-indigo-50 border border-indigo-100 rounded-xl p-3 mt-4">
                        📞 Keep an eye on your inbox! We will email you a booking link within 24 hours to schedule your kick-off consultation.
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={() => router.push('/dashboard')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-2xl text-xs font-bold shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 font-sans"
                  >
                    Go to My Dashboard <ArrowRight className="w-4 h-4" strokeWidth={3} />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Step 1: Pick a Template Preset Style */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center space-y-2 max-w-xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">Pick a visual theme style to customize.</h2>
                    <p className="text-slate-500 text-sm">
                      Select a layout direction designed for your industry. Don't worry, you can add sections and modify layouts later inside the builder.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {presets.map(preset => (
                      <div 
                        key={preset.templateKey}
                        onClick={() => handleSelectTemplate(preset.templateKey)}
                        className="group cursor-pointer bg-white border border-slate-200 hover:border-indigo-500 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div className="aspect-[16/10] relative overflow-hidden bg-slate-50 border-b border-slate-100">
                          <img 
                            src={preset.image} 
                            alt={preset.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-5 flex items-center justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">{preset.name} Layout</h3>
                            <p className="text-slate-400 text-[11px] font-medium mt-0.5 line-clamp-1">{preset.desc}</p>
                          </div>
                          <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-indigo-50 group-hover:border-indigo-300 flex items-center justify-center shrink-0 transition-colors">
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Basic Info Seeding */}
              {step === 2 && (
                <div className="space-y-8 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">Brand details.</h2>
                    <p className="text-slate-500 text-xs">Enter your business information to automatically map headers, text blocks, and footers.</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Name</label>
                      <input 
                        type="text" 
                        value={formData.businessName}
                        onChange={e => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. Lauren Wilson Photo" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Short Tagline / Hero Subtitle</label>
                      <input 
                        type="text" 
                        value={formData.tagline}
                        onChange={e => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="e.g. Elegant local wedding photographer based in CO." 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Email</label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                          placeholder="hello@laurenphoto.co" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="text" 
                          value={formData.phone}
                          onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                          placeholder="(555) 123-4567" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Logo Header Text</label>
                      <input 
                        type="text" 
                        value={formData.logoText}
                        onChange={e => setFormData(prev => ({ ...prev, logoText: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none font-medium" 
                        placeholder="Lauren W." 
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button 
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back to Styles
                    </button>
                    <button 
                      onClick={handleSubmit}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 hover:shadow-indigo-600/10 hover:-translate-y-0.5"
                    >
                      Generate Workspace <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Loading Screen */}
              {step === 3 && (
                <div className="max-w-md mx-auto py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-indigo-600 animate-spin" />
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-800 text-base">Creating layout editor workspace...</h3>
                    <p className="text-slate-400 text-xs">Injecting brand variables, styling colors, and mapping assets.</p>
                  </div>
                </div>
              )}

              {/* Step 4: Onboarding Success Screen */}
              {step === 4 && (
                <div className="max-w-md mx-auto py-8 text-center space-y-6 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-[4px] border-emerald-500 flex items-center justify-center text-emerald-500 shadow-sm animate-bounce">
                    <Check className="w-8 h-8" strokeWidth={4} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">Branding generated!</h2>
                    <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                      We've customized the layout style with your branding info. Next, you'll be redirected into our website builder to review and tweak the design.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => router.push('/dashboard')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-2xl text-xs font-bold shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all flex items-center gap-1.5 font-sans"
                  >
                    Start Customizing Site <ArrowRight className="w-4 h-4" strokeWidth={3} />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
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
