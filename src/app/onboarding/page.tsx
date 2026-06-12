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
        // Redirect to login and preserve the target parameter redirect
        router.push(`/login?redirect=/onboarding?plan=DIY%2520Template`);
      }
    };
    checkUser();
  }, [router]);
  
  const [formData, setFormData] = useState({
    businessName: '',
    tagline: '',
    phone: '',
    email: '',
    logoText: ''
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


  return (
    <div className="min-h-screen bg-[#F4F6F8] flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="px-6 lg:px-12 py-5 flex items-center justify-between border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/pricing" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-4 h-4 text-slate-600" />
          </Link>
          <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">DIY Template Plan</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
          <span className={`w-2.5 h-2.5 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
          <span className={`w-2.5 h-2.5 rounded-full ${step >= 3 ? 'bg-indigo-600' : 'bg-slate-200'}`} />
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 lg:p-12 pb-32 flex flex-col justify-center">
        <AnimatePresence mode="wait">
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
