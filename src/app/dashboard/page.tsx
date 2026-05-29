"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Globe, 
  CreditCard, 
  FileText, 
  Settings, 
  LogOut, 
  Leaf,
  Bell,
  Search,
  ExternalLink,
  ChevronRight,
  Plus,
  Menu,
  X as CloseIcon,
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  ChevronDown,
  ShoppingBag,
  Package,
  Key,
  Image as ImageIcon,
  Database,
  Upload,
  FolderOpen,
  MessageSquare,
  Eye,
  Trash2,
  LifeBuoy,
  CheckCircle,
  Clock3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import SiteEditor from '@/components/SiteEditor';
import { TEMPLATES } from '@/lib/templates';
import DomainManagerModal from '@/components/DomainManagerModal';
import { getSupabaseBrowserClient } from '@/lib/supabase';

const MY_SITES = [
  {
    id: 'template-lauren-wilson',
    name: 'Lauren Wilson Photo',
    url: 'laurenwilsonphoto.com',
    previewUrl: '/preview/template-lauren-wilson',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'lauren'
  },
  {
    id: 'template-greenscape-landscaping',
    name: 'Greenscape Landscaping',
    url: 'greenscapelandscaping.com',
    previewUrl: '/preview/template-greenscape-landscaping',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
    lastUpdate: 'Just now',
    templateKey: 'greenscape'
  },
  {
    id: 'template-northwood-coffee',
    name: 'Northwood Coffee Co.',
    url: 'northwoodcoffee.com',
    previewUrl: '/preview/template-northwood-coffee',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'northwood'
  },
  {
    id: 'template-brighter-solar',
    name: 'Brighter Solar',
    url: 'brightersolarcleaning.com',
    previewUrl: '/preview/template-brighter-solar',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=400&q=80',
    lastUpdate: 'Just now',
    templateKey: 'brighter_solar'
  }
];

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Clock3, label: 'Project Timeline', path: '/dashboard/timeline' },
  { icon: MessageSquare, label: 'Communications', path: '/dashboard/communications' },
  { icon: LifeBuoy, label: 'Support Tickets', path: '/dashboard/tickets' },
  { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: Globe, label: 'My Sites', path: '/dashboard/sites' },
  { icon: Database, label: 'Content CMS', path: '/dashboard/cms' },
  { icon: ImageIcon, label: 'Media Library', path: '/dashboard/media' },
  { icon: ShoppingBag, label: 'E-Commerce', path: '/dashboard/ecommerce' },
  { icon: CreditCard, label: 'Payments', path: '/dashboard/payments' },
  { icon: FileText, label: 'Invoices', path: '/dashboard/invoices' },
];

const ANALYTICS_DATA = [
  { name: 'Mon', views: 400, visitors: 240 },
  { name: 'Tue', views: 300, visitors: 139 },
  { name: 'Wed', views: 200, visitors: 980 },
  { name: 'Thu', views: 278, visitors: 390 },
  { name: 'Fri', views: 189, visitors: 480 },
  { name: 'Sat', views: 239, visitors: 380 },
  { name: 'Sun', views: 349, visitors: 430 },
];

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = React.useState('Overview');
  const [selectedSite, setSelectedSite] = React.useState(MY_SITES[0]);
  const [isSiteSelectorOpen, setIsSiteSelectorOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [editingSite, setEditingSite] = React.useState<any>(null);
  const [managingDomainFor, setManagingDomainFor] = React.useState<any>(null);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const loginWithGoogle = () => router.push('/login');

  const [user, setUser] = React.useState<any | null>(null);
  const [mediaFiles, setMediaFiles] = React.useState<any[]>([]);
  const [globalSettings, setGlobalSettings] = React.useState<any>({
    businessName: 'Northwood Coffee Co.',
    supportEmail: 'hello@northwoodcoffee.com',
    defaultSeoDescription: 'Handcrafted drinks, fresh bites, and good vibes in the heart of our community.'
  });

  const [mySites, setMySites] = React.useState<any[]>(MY_SITES);

  // User Profile Settings State
  const [profileName, setProfileName] = React.useState('');
  const [profileCompany, setProfileCompany] = React.useState('');
  const [profilePhone, setProfilePhone] = React.useState('');
  const [profileAvatar, setProfileAvatar] = React.useState('');
  const [isSavingProfile, setIsSavingProfile] = React.useState(false);
  const [profileMsg, setProfileMsg] = React.useState('');

  useEffect(() => {
    if (user) {
      setProfileName(user.user_metadata?.full_name || user.user_metadata?.name || '');
      setProfileCompany(user.user_metadata?.company || '');
      setProfilePhone(user.user_metadata?.phone || '');
      setProfileAvatar(user.user_metadata?.avatar_url || '');
    }
  }, [user]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsSavingProfile(true);
    setProfileMsg('');
    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase.auth.updateUser({
        data: {
          full_name: profileName,
          company: profileCompany,
          phone: profilePhone,
          avatar_url: profileAvatar,
        }
      });
      if (error) throw error;
      setUser(data.user);
      setProfileMsg('Profile updated successfully!');
      setTimeout(() => setProfileMsg(''), 4000);
    } catch (err: any) {
      setProfileMsg(`Error: ${err.message}`);
    } finally {
      setIsSavingProfile(false);
    }
  };


  useEffect(() => {
    const saved = localStorage.getItem('my-sites');
    if (saved) {
      try {
        setMySites(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleDeleteSite = async (siteId: string | number) => {
    if (!window.confirm("Are you sure you want to delete this site? This action cannot be undone.")) return;
    try {
      if (user) {
        const supabase = getSupabaseBrowserClient();
        await supabase.from('tenants').delete().eq('id', siteId);
      }
    } catch(err) {
      console.warn("Could not delete site from Supabase (insufficient permissions or not found). Removing locally.", err);
    }

    setMySites(prev => {
      const next = prev.filter(s => s.id !== siteId);
      if (selectedSite.id === siteId && next.length > 0) {
        setSelectedSite(next[0]);
      } else if (selectedSite.id === siteId) {
        setSelectedSite(MY_SITES[0]);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!user || !selectedSite?.id) return;
    
    const supabase = getSupabaseBrowserClient();
    
    const fetchMedia = async () => {
      const { data } = await supabase.from('site_media').select('*').eq('tenant_id', selectedSite.id);
      if (data) setMediaFiles(data);
    };

    const fetchSettings = async () => {
      const { data } = await supabase.from('global_settings').select('*').eq('tenant_id', selectedSite.id).single();
      if (data) {
        setGlobalSettings({
          businessName: data.business_name,
          supportEmail: data.support_email,
          defaultSeoDescription: data.seo_description,
        });
      }
    };

    fetchMedia();
    fetchSettings();
  }, [user, selectedSite]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (editingSite) {
    let initialSections = TEMPLATES.blank;
    let initialTheme = null;
    
    if (typeof window !== 'undefined') {
      const savedSections = localStorage.getItem(`site-sections-${editingSite.id}`);
      const savedTheme = localStorage.getItem(`site-theme-${editingSite.id}`);
      
      if (savedSections) {
        try {
          initialSections = JSON.parse(savedSections);
        } catch (e) {
          console.error(e);
        }
      } else if (editingSite.templateKey && TEMPLATES[editingSite.templateKey]) {
        initialSections = TEMPLATES[editingSite.templateKey];
      }
      
      if (savedTheme) {
        try {
          initialTheme = JSON.parse(savedTheme);
        } catch (e) {
          console.error(e);
        }
      }
    } else if (editingSite.templateKey && TEMPLATES[editingSite.templateKey]) {
      initialSections = TEMPLATES[editingSite.templateKey];
    }

    return (
      <SiteEditor 
        siteName={editingSite.name} 
        initialSections={initialSections}
        initialTheme={initialTheme} 
        onBack={() => setEditingSite(null)}
        onSave={(sections, theme) => {
          localStorage.setItem(`site-sections-${editingSite.id}`, JSON.stringify(sections));
          localStorage.setItem(`site-theme-${editingSite.id}`, JSON.stringify(theme));
          
          if (editingSite.isNew || !mySites.some(s => s.id === editingSite.id)) {
            const newSiteRecord = {
              id: editingSite.id,
              name: editingSite.name,
              url: `${editingSite.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'site'}.com`,
              previewUrl: `/preview/${editingSite.id}`,
              status: 'Draft',
              image: editingSite.templateKey ? 
                (MY_SITES.find(s => s.templateKey === editingSite.templateKey)?.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80') : 
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
              lastUpdate: 'Just now',
              templateKey: editingSite.templateKey
            };
            const updatedSites = [...mySites, newSiteRecord];
            setMySites(updatedSites);
            localStorage.setItem('my-sites', JSON.stringify(updatedSites));
            editingSite.isNew = false;
          }
          alert("Site saved successfully!");
        }}
        onPublish={async (sections, theme) => {
          // Determine default subdomain from existing site data or prompt
          const existingSubdomain = editingSite.subdomain || '';
          const subdomain = window.prompt(
            '🚀 Publish to Live\n\nEnter a subdomain for this site.\nIt will be available at: [subdomain].michaelfreddesigns.com',
            existingSubdomain || editingSite.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
          );

          if (!subdomain) return; // User cancelled

          try {
            const res = await fetch('/api/publish', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                subdomain: subdomain.trim(),
                siteName: editingSite.name,
                pageSlug: 'index',
                canvasJson: sections,
                themeJson: theme,
                ownerId: user?.id,
              }),
            });

            const data = await res.json();

            if (!res.ok) {
              alert(`❌ Publish failed: ${data.error || 'Unknown error'}`);
              return;
            }

            // Update the site record with tenant info
            const updatedSite = {
              ...editingSite,
              subdomain: data.tenant.subdomain,
              tenantId: data.tenant.id,
              status: 'Live',
              url: data.liveUrl,
            };

            setMySites(prev => {
              const updated = prev.map(s => 
                s.id === editingSite.id 
                  ? { ...s, status: 'Live', url: data.liveUrl, subdomain: data.tenant.subdomain, tenantId: data.tenant.id }
                  : s
              );
              localStorage.setItem('my-sites', JSON.stringify(updated));
              return updated;
            });

            // Also save draft locally
            localStorage.setItem(`site-sections-${editingSite.id}`, JSON.stringify(sections));
            localStorage.setItem(`site-theme-${editingSite.id}`, JSON.stringify(theme));

            alert(`✅ Published successfully!\n\n🌐 Live: ${data.liveUrl}\n🛠 Dev preview: http://localhost:3000${data.devUrl}`);
          } catch (err: any) {
            console.error('[Publish] Error:', err);
            alert(`❌ Publish failed: ${err.message || 'Network error'}`);
          }
        }}
        user={user}
        mediaFiles={mediaFiles}
        globalSettings={globalSettings}
        setGlobalSettings={setGlobalSettings}
        handleUploadMediaClick={handleUploadMediaClick}
        handleDeleteMedia={handleDeleteMedia}
        saveSettings={saveSettings}
      />
    );
  }

  function handleUploadMediaClick() {
    if (!user) return alert('Please login first');
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        const supabase = getSupabaseBrowserClient();
        const filePath = `${selectedSite.id}/${Date.now()}_${file.name}`;
        
        const { error: uploadError } = await supabase.storage.from('media').upload(filePath, file);
        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage.from('media').getPublicUrl(filePath);
        
        const { data: mediaRecord, error: dbError } = await supabase.from('site_media').insert({
          tenant_id: selectedSite.id,
          owner_id: user.id,
          url: urlData.publicUrl,
          name: file.name,
          type: 'image'
        }).select().single();
        
        if (dbError) throw dbError;

        setMediaFiles(prev => [...prev, mediaRecord]);
      } catch (error: any) {
        console.error('[Upload Error]', error);
        alert(`Upload failed: ${error.message}`);
      }
    };
    input.click();
  }

  async function handleDeleteMedia(id: string) {
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.from('site_media').delete().eq('id', id);
      setMediaFiles(prev => prev.filter(m => m.id !== id));
    } catch(err) {
      console.error('[Delete Media Error]', err);
    }
  }

  async function saveSettings() {
    if (!user) return alert('Please login first');
    try {
      const supabase = getSupabaseBrowserClient();
      await supabase.from('global_settings').upsert({
        tenant_id: selectedSite.id,
        owner_id: user.id,
        business_name: globalSettings.businessName,
        support_email: globalSettings.supportEmail,
        seo_description: globalSettings.defaultSeoDescription,
      }, { onConflict: 'tenant_id' });
      alert("Settings Saved!");
    } catch (error: any) {
      console.error('[Save Settings Error]', error);
      alert(`Save failed: ${error.message}`);
    }
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'Overview':
      case 'My Sites':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 lg:mb-12">
               <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black mb-2">Welcome Back, Michael</h1>
               <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Dashboard Overview &bull; April 30, 2026</p>
            </div>

            {/* Stats Overlay */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12 border-b-[4px] border-black/5 pb-8 lg:border-none lg:pb-0">
               {[
                 { label: 'Live Sites', value: '2', icon: Globe, color: 'bg-green-500' },
                 { label: 'Monthly Traffic', value: '4.2k', icon: Bell, color: 'bg-blue-500' },
                 { label: 'Pending Invoices', value: '$0.00', icon: FileText, color: 'bg-purple-500' }
               ].map((stat) => (
                 <motion.div 
                   key={stat.label}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="bg-white border-[4px] border-black p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center justify-between"
                 >
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.15em] text-black/40 mb-1">{stat.label}</p>
                      <p className="text-3xl font-black uppercase tracking-tighter text-black">{stat.value}</p>
                   </div>
                   <div className={`${stat.color} p-3 rounded-xl border-2 border-black`}>
                      <stat.icon className="w-6 h-6 text-white" />
                   </div>
                 </motion.div>
               ))}
            </div>

            {/* My Sites Grid */}
            <div className="mb-12">
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">Your Owned Sites</h2>
                  <button onClick={() => setActiveSection('My Sites')} className="text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors flex items-center gap-2">
                     Manage All <ChevronRight className="w-3 h-3" />
                  </button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mySites.map((site, i) => (
                    <motion.div
                      key={site.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="group bg-white border-[4px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-2"
                    >
                       <div className="aspect-video relative overflow-hidden bg-black/5">
                          <img 
                            src={(site.image) || undefined} 
                            alt={site.name} 
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 flex items-center gap-2 rounded-lg">
                             <div className={`w-2 h-2 rounded-full ${site.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                             <span className="text-[9px] font-black uppercase tracking-widest">{site.status}</span>
                          </div>
                       </div>
                       <div className="p-6">
                          <h3 className="text-lg font-black uppercase mb-1">{site.name}</h3>
                          <div className="flex items-center gap-2 text-black/40 text-[10px] font-bold uppercase tracking-widest mb-6">
                             <Globe className="w-3 h-3" /> {site.url}
                          </div>
                          
                          <div className="flex items-center justify-between pt-6 border-t-[3px] border-black/5">
                             <a 
                               href={site.previewUrl} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="bg-white border-2 border-black text-black px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-black/5 active:scale-95 transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.1)] flex items-center gap-2"
                             >
                                <ExternalLink className="w-3 h-3" /> Preview
                             </a>
                             <div className="flex items-center gap-2">
                               <button 
                                  onClick={() => setEditingSite(site)}
                                  className="bg-black text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-black/90 active:scale-95 transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)]"
                               >
                                  Edit Site
                               </button>
                               <button 
                                  onClick={(e) => { e.stopPropagation(); setManagingDomainFor(site); }}
                                  className="bg-white border-2 border-black text-black p-2 rounded-lg hover:bg-black/5 active:scale-95 transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)] flex items-center justify-center"
                                  title="Manage Domain"
                               >
                                  <Settings className="w-4 h-4" />
                               </button>
                               <button 
                                  onClick={(e) => { e.stopPropagation(); handleDeleteSite(site.id); }}
                                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 active:scale-95 transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)] flex items-center justify-center"
                                  title="Delete Site"
                               >
                                  <Trash2 className="w-4 h-4" />
                               </button>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  ))}
                  
                  {/* Create New Site Card */}
                  <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: mySites.length * 0.1 }}
                      onClick={() => setIsTemplateModalOpen(true)}
                      className="group cursor-pointer bg-[#F8F5F2] border-[4px] border-dashed border-black/20 rounded-2xl overflow-hidden hover:border-black hover:bg-white hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-[350px]"
                    >
                      <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                        <Plus className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-black uppercase mb-2">Add New Site</h3>
                      <p className="text-black/40 text-[10px] font-bold uppercase tracking-widest text-center px-6">
                        Start from a blank canvas or use a template
                      </p>
                  </motion.div>
               </div>
            </div>
          </div>
        );
      case 'Project Timeline':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 lg:mb-12">
               <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black mb-2">Project Timeline</h1>
               <p className="font-medium text-black/60">Track the progress of your new website build.</p>
            </div>
            <div className="bg-white border-[4px] border-black rounded-3xl p-8 lg:p-12 shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                 <Clock3 className="w-32 h-32" />
               </div>
               
               <div className="max-w-2xl relative">
                  <div className="absolute left-6 top-10 bottom-10 w-1 bg-black/10 rounded-full" />
                  
                  <div className="space-y-12">
                     <div className="relative flex gap-6">
                        <div className="w-12 h-12 rounded-full border-4 border-black bg-black text-white flex items-center justify-center shrink-0 z-10 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                           <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="pt-2">
                           <h3 className="text-xl font-black uppercase tracking-tighter">1. Discovery & Onboarding</h3>
                           <p className="font-medium text-black/60 mt-1">We received your questionnaire and assets. Initial strategy is set.</p>
                           <span className="inline-block mt-2 text-[10px] uppercase font-black tracking-widest text-[#4C6B36] bg-[#4C6B36]/10 px-3 py-1 rounded-full">Completed - Oct 12</span>
                        </div>
                     </div>
                     <div className="relative flex gap-6">
                        <div className="w-12 h-12 rounded-full border-4 border-black bg-black text-white flex items-center justify-center shrink-0 z-10 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                           <CheckCircle className="w-6 h-6" />
                        </div>
                        <div className="pt-2">
                           <h3 className="text-xl font-black uppercase tracking-tighter">2. Wireframing</h3>
                           <p className="font-medium text-black/60 mt-1">Structure and layouts mapped out based on your conversion goals.</p>
                           <span className="inline-block mt-2 text-[10px] uppercase font-black tracking-widest text-[#4C6B36] bg-[#4C6B36]/10 px-3 py-1 rounded-full">Completed - Oct 18</span>
                        </div>
                     </div>
                     <div className="relative flex gap-6">
                        <div className="w-12 h-12 rounded-full border-4 border-black bg-[#FF9B71] text-black flex items-center justify-center shrink-0 z-10 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                           <ImageIcon className="w-5 h-5" />
                        </div>
                        <div className="pt-2">
                           <h3 className="text-xl font-black uppercase tracking-tighter">3. Visual Design (In Progress)</h3>
                           <p className="font-medium text-black/60 mt-1">Adding colors, typography, images and styling. Review coming soon.</p>
                           <span className="inline-block mt-2 text-[10px] uppercase font-black tracking-widest text-[#FF9B71] bg-[#FF9B71]/20 px-3 py-1 rounded-full">In Progress - Est. Oct 24</span>
                        </div>
                     </div>
                     <div className="relative flex gap-6 opacity-40">
                        <div className="w-12 h-12 rounded-full border-4 border-black bg-white text-black flex items-center justify-center shrink-0 z-10">
                           <LayoutDashboard className="w-5 h-5" />
                        </div>
                        <div className="pt-2">
                           <h3 className="text-xl font-black uppercase tracking-tighter">4. Development & CMS Integration</h3>
                           <p className="font-medium text-black/60 mt-1">Building the actual site and hooking up the content management system.</p>
                           <span className="inline-block mt-2 text-[10px] uppercase font-black tracking-widest text-black bg-black/10 px-3 py-1 rounded-full">Upcoming</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'Communications':
        return (
          <div className="max-w-6xl mx-auto h-[calc(100vh-120px)] flex flex-col">
            <div className="mb-6 shrink-0">
               <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black mb-2">Communications</h1>
               <p className="font-medium text-black/60">Talk directly with your development and design team.</p>
            </div>
            
            <div className="flex-1 bg-white border-[4px] border-black rounded-3xl shadow-[12px_12px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col">
               <div className="p-4 border-b-4 border-black bg-[#F8F5F2] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-[3px] border-black bg-[#FF9B71] flex items-center justify-center font-black text-xl">A</div>
                  <div>
                    <h3 className="font-black uppercase tracking-tighter">Agency Team</h3>
                    <p className="text-xs font-bold text-black/50">Online</p>
                  </div>
               </div>
               
               <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-white">
                  <div className="flex gap-4 max-w-2xl">
                     <div className="w-8 h-8 rounded-full border-2 border-black bg-[#FF9B71] flex items-center justify-center font-black text-xs shrink-0 mt-1">A</div>
                     <div className="bg-[#F8F5F2] border-2 border-black rounded-2xl rounded-tl-none p-4 w-full">
                        <p className="font-medium text-sm">Hey Michael! We received your onboarding form. The assets look great. We're getting started on the wireframes today.</p>
                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-2 block">Monday, 9:00 AM</span>
                     </div>
                  </div>
                  <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
                     <div className="w-8 h-8 rounded-full border-2 border-black bg-black text-white flex items-center justify-center font-black text-xs shrink-0 mt-1">M</div>
                     <div className="bg-black text-white border-2 border-black rounded-2xl rounded-tr-none p-4 w-full">
                        <p className="font-medium text-sm font-light">Awesome. Let me know if you need any more photos of the storefront.</p>
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2 block">Monday, 10:15 AM</span>
                     </div>
                  </div>
                  <div className="flex gap-4 max-w-2xl">
                     <div className="w-8 h-8 rounded-full border-2 border-black bg-[#FF9B71] flex items-center justify-center font-black text-xs shrink-0 mt-1">A</div>
                     <div className="bg-[#F8F5F2] border-2 border-black rounded-2xl rounded-tl-none p-4 w-full">
                        <p className="font-medium text-sm">Will do! The wireframes should be ready for your review by Wednesday. I'll drop a link here.</p>
                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-2 block">Monday, 10:20 AM</span>
                     </div>
                  </div>
               </div>
               
               <div className="p-4 border-t-4 border-black bg-[#F8F5F2]">
                  <div className="relative">
                     <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="w-full bg-white border-[3px] border-black rounded-xl px-4 py-3 pr-12 font-medium outline-none focus:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
                     />
                     <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center hover:bg-black/80 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'Support Tickets':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-8 lg:mb-12">
               <div>
                 <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black mb-2">Support & Maintenance</h1>
                 <p className="font-medium text-black/60">Submit tickets for website updates or technical support.</p>
               </div>
               <button className="bg-black text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] transition-all">
                  <Plus className="w-4 h-4" /> New Ticket
               </button>
            </div>
            
            <div className="grid gap-4">
              {[
                 { id: '#TKT-2041', title: 'Update Holiday Hours', status: 'In Progress', date: 'Oct 23', type: 'Content Update' },
                 { id: '#TKT-2032', title: 'Add new staff member photos', status: 'Completed', date: 'Oct 10', type: 'Design Update' },
                 { id: '#TKT-1988', title: 'Domain pointing issue', status: 'Completed', date: 'Sep 05', type: 'Technical' }
              ].map(ticket => (
                 <div key={ticket.id} className="bg-white border-[4px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-4">
                       <div className={`w-12 h-12 rounded-full border-4 border-black flex items-center justify-center shrink-0 ${ticket.status === 'Completed' ? 'bg-[#4C6B36] text-white' : 'bg-[#FF9B71] text-black'}`}>
                          {ticket.status === 'Completed' ? <CheckCircle className="w-5 h-5" /> : <Clock3 className="w-5 h-5" />}
                       </div>
                       <div>
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-xs font-black uppercase tracking-widest text-black/40">{ticket.id}</span>
                             <span className="text-xs font-black uppercase tracking-widest text-black/40">•</span>
                             <span className="text-xs font-bold bg-black/5 px-2 py-0.5 rounded-md">{ticket.type}</span>
                          </div>
                          <h3 className="text-lg font-black uppercase tracking-tighter text-black group-hover:underline">{ticket.title}</h3>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-6 border-t-[3px] border-black/5 md:border-0 pt-4 md:pt-0">
                       <div className="text-right">
                          <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-1">Status</p>
                          <p className="font-bold text-sm">{ticket.status}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-1">Date</p>
                          <p className="font-bold text-sm">{ticket.date}</p>
                       </div>
                       <ChevronRight className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity hidden md:block" />
                    </div>
                 </div>
              ))}
            </div>
          </div>
        );

      case 'Analytics':
        return (
          <div className="max-w-6xl mx-auto">
            {/* Site Selector at top left */}
            <div className="relative mb-8 lg:mb-12">
              <button 
                onClick={() => setIsSiteSelectorOpen(!isSiteSelectorOpen)}
                className="flex items-center justify-between gap-4 bg-white border-[4px] border-black p-4 rounded-xl shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all min-w-[280px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-black shrink-0">
                    <img src={(selectedSite.image) || undefined} alt={selectedSite.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Select Property</p>
                    <p className="text-sm font-black uppercase truncate max-w-[150px]">{selectedSite.name}</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${isSiteSelectorOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSiteSelectorOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-full bg-white border-[4px] border-black rounded-xl shadow-[12px_12px_0px_rgba(0,0,0,1)] z-50 overflow-hidden"
                  >
                    {mySites.map((site) => (
                      <button
                        key={site.id}
                        onClick={() => {
                          setSelectedSite(site);
                          setIsSiteSelectorOpen(false);
                        }}
                        className="w-full flex items-center gap-4 p-4 hover:bg-black/5 transition-all text-left border-b-[3px] last:border-none border-black/5"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-black shrink-0">
                          <img src={(site.image) || undefined} alt={site.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase">{site.name}</p>
                          <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{site.url}</p>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Total Views', value: '45.2k', change: '+12.5%', icon: TrendingUp, color: 'text-green-500' },
                { label: 'Unique Visitors', value: '12.8k', change: '+5.2%', icon: Users, color: 'text-blue-500' },
                { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', icon: Clock, color: 'text-red-500' },
                { label: 'Session Duration', value: '2m 45s', change: '+12s', icon: Clock, color: 'text-purple-500' }
              ].map((stat) => (
                <div key={stat.label} className="bg-white border-[4px] border-black p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">{stat.label}</p>
                   <p className="text-3xl font-black uppercase text-black mb-2">{stat.value}</p>
                   <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest">vs last month</span>
                   </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
               <div className="lg:col-span-2 bg-white border-[4px] border-black p-8 rounded-2xl shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="text-lg font-black uppercase tracking-tighter">Traffic Overview</h3>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-black" />
                           <span className="text-[9px] font-black uppercase text-black/40">Page Views</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-blue-500" />
                           <span className="text-[9px] font-black uppercase text-black/40">Unique Visitors</span>
                        </div>
                     </div>
                  </div>
                  <div className="h-[300px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={ANALYTICS_DATA}>
                           <defs>
                              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                                 <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                           <XAxis 
                              dataKey="name" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 10, fontWeight: 900, fill: '#000' }}
                           />
                           <YAxis 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 10, fontWeight: 900, fill: '#000' }}
                           />
                           <Tooltip 
                              contentStyle={{ 
                                 backgroundColor: '#fff', 
                                 border: '4px solid #000', 
                                 borderRadius: '12px',
                                 fontWeight: 900,
                                 fontSize: '10px',
                                 textTransform: 'uppercase'
                              }}
                           />
                           <Area type="monotone" dataKey="views" stroke="#000" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
                           <Area type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={3} fill="transparent" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </div>

               <div className="bg-white border-[4px] border-black p-8 rounded-2xl shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-lg font-black uppercase tracking-tighter mb-8">Top Pages</h3>
                  <div className="space-y-6">
                     {[
                        { path: '/', views: '12.4k', growth: '+15%' },
                        { path: '/services', views: '4.2k', growth: '+5%' },
                        { path: '/work', views: '3.8k', growth: '-2%' },
                        { path: '/contact', views: '1.2k', growth: '+22%' }
                     ].map((page) => (
                        <div key={page.path} className="flex items-center justify-between pb-4 border-b-2 border-black/5 last:border-none">
                           <div>
                              <p className="text-xs font-black uppercase truncate max-w-[150px]">{page.path}</p>
                              <p className="text-[9px] font-bold text-black/40 uppercase tracking-widest">{page.views} views</p>
                           </div>
                           <span className={`text-[10px] font-black uppercase ${page.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {page.growth}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        );
      case 'Payments':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-8">Payments</h1>
            <div className="bg-white border-[4px] border-black p-6 lg:p-8 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b-[3px] border-black/5">
                 <div className="text-center sm:text-left">
                    <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-1">Current Balance</p>
                    <p className="text-3xl lg:text-4xl font-black">$0.00</p>
                 </div>
                 <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                    Add Credit
                 </button>
              </div>
              
              <h3 className="text-sm font-black uppercase tracking-widest mb-4">Payment Methods</h3>
              <div className="space-y-4">
                 <div className="flex items-center justify-between p-4 border-[3px] border-black rounded-xl">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-8 bg-[#1A1A1A] rounded flex items-center justify-center text-white text-[8px] font-bold">VISA</div>
                       <div>
                          <p className="text-xs font-black uppercase tracking-wider">•••• •••• •••• 4242</p>
                          <p className="text-[9px] font-bold text-black/40 uppercase">Expires 12/28</p>
                       </div>
                    </div>
                    <span className="text-[9px] font-black uppercase bg-black text-white px-2 py-1 rounded">Primary</span>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'Invoices':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-8">Invoices</h1>
            <div className="bg-white border-[4px] border-black rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-black text-white">
                     <tr>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Invoice Date</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">ID</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Amount</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Status</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y-[3px] divide-black/5 font-bold text-xs uppercase tracking-wider">
                     <tr>
                        <td className="px-6 py-6">Mar 15, 2026</td>
                        <td className="px-6 py-6 text-black/40">INV-00124</td>
                        <td className="px-6 py-6">$299.00</td>
                        <td className="px-6 py-6">
                           <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[9px] font-black">Paid</span>
                        </td>
                        <td className="px-6 py-6">
                           <button className="text-black border-b-2 border-black/10 hover:border-black transition-all">Download</button>
                        </td>
                     </tr>
                     <tr>
                        <td className="px-6 py-6">Feb 15, 2026</td>
                        <td className="px-6 py-6 text-black/40">INV-00120</td>
                        <td className="px-6 py-6">$299.00</td>
                        <td className="px-6 py-6">
                           <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[9px] font-black">Paid</span>
                        </td>
                        <td className="px-6 py-6">
                           <button className="text-black border-b-2 border-black/10 hover:border-black transition-all">Download</button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
          </div>
        );
      case 'E-Commerce':
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">Store Settings</h1>
              <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Manage your products, payments, and storefront</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Stripe Integration */}
              <div className="lg:col-span-2 bg-white border-[4px] border-black p-8 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tighter mb-2 flex items-center gap-2">
                       <CreditCard className="w-5 h-5 text-blue-600" /> Stripe Integration
                    </h3>
                    <p className="text-xs text-black/50 font-bold uppercase tracking-widest">Connect your Stripe account to receive payments</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-yellow-300">Action Required</span>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-[#F8F5F2] border-[3px] border-dashed border-black/10 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                     <ShoppingBag className="w-12 h-12 text-black/20 mb-4" />
                     <h4 className="font-black uppercase tracking-widest text-sm mb-2">Connect Stripe Account</h4>
                     <p className="text-xs text-black/50 font-medium mb-6 max-w-sm">
                       You need to connect your Stripe account before you can start selling products or services.
                     </p>
                     <button className="bg-[#635BFF] text-white px-6 py-3 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-[#5851E5] transition-all shadow-md flex items-center gap-2">
                       Connect with Stripe
                     </button>
                  </div>
                  
                  <div className="border-t-[3px] border-black/5 pt-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4">Or use API Keys (Advanced)</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-2">Publishable Key</label>
                        <div className="relative">
                           <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                           <input type="text" placeholder="pk_test_..." className="w-full pl-10 pr-4 py-3 bg-white border-2 border-black/20 rounded-xl font-mono text-xs focus:outline-none focus:border-black transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-2">Secret Key</label>
                        <div className="relative">
                           <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                           <input type="password" placeholder="sk_test_..." className="w-full pl-10 pr-4 py-3 bg-white border-2 border-black/20 rounded-xl font-mono text-xs focus:outline-none focus:border-black transition-colors" />
                        </div>
                      </div>
                      <button className="w-full bg-black text-white px-4 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-black/90 transition-all">
                        Save API Keys
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Quick Actions */}
              <div className="space-y-8">
                <div className="bg-white border-[4px] border-black p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                   <h3 className="text-lg font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                     <Package className="w-5 h-5" /> Products
                   </h3>
                   
                   <div className="space-y-3">
                     <button className="w-full text-left p-4 border-[3px] border-black/10 rounded-xl hover:border-black hover:bg-black/5 transition-all group flex items-center justify-between">
                       <div>
                         <p className="font-black uppercase tracking-widest text-xs">Add Product</p>
                         <p className="text-[9px] text-black/40 font-bold uppercase">Physical or Digital</p>
                       </div>
                       <Plus className="w-5 h-5 text-black/40 group-hover:text-black" />
                     </button>
                     <button className="w-full text-left p-4 border-[3px] border-black/10 rounded-xl hover:border-black hover:bg-black/5 transition-all group flex items-center justify-between">
                       <div>
                         <p className="font-black uppercase tracking-widest text-xs">Manage Inventory</p>
                         <p className="text-[9px] text-black/40 font-bold uppercase">0 Products</p>
                       </div>
                       <ChevronRight className="w-5 h-5 text-black/40 group-hover:text-black" />
                     </button>
                   </div>
                </div>
                
                <div className="bg-[#4C6B36] border-[4px] border-black p-6 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] text-white relative overflow-hidden">
                   <Leaf className="w-24 h-24 absolute -right-6 -bottom-6 text-white/10" />
                   <div className="relative z-10">
                     <h3 className="text-lg font-black uppercase tracking-tighter mb-2">Need a Store?</h3>
                     <p className="text-xs text-white/80 font-medium mb-6 leading-relaxed">
                       Add the "Product Grid" block to any of your sites using the Site Editor to display your products instantly.
                     </p>
                     <button 
                       onClick={() => setActiveSection('My Sites')}
                       className="bg-white text-[#4C6B36] px-4 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-white/90 transition-all w-full"
                     >
                       Go to Sites
                     </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Media Library':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">Media Library</h1>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Manage your photos, videos, and files</p>
              </div>
              <button 
                onClick={handleUploadMediaClick}
                className="bg-black text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-black/90 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)] whitespace-nowrap"
              >
                <Upload className="w-4 h-4" /> Upload Media
              </button>
            </div>

            <div className="bg-white border-[4px] border-black p-4 sm:p-8 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
               {!user && (
                 <div className="mb-8 bg-yellow-100 border-2 border-yellow-500 p-4 rounded-xl">
                   <p className="font-bold text-sm text-yellow-800 flex justify-between items-center">
                     You must be logged into Supabase to save Media. 
                     <button onClick={loginWithGoogle} className="bg-white px-4 py-2 rounded-lg border-2 border-black text-xs">Sign In</button>
                   </p>
                 </div>
               )}

               <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <div className="relative flex-1">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                   <input type="text" placeholder="Search media..." className="w-full pl-12 pr-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-xs outline-none transition-colors" />
                 </div>
                 <div className="flex gap-2">
                   <button className="px-4 py-3 border-2 border-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-black/5 transition-colors">Images</button>
                   <button className="px-4 py-3 border-2 border-black/20 text-black/40 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-black/5 transition-colors">Videos</button>
                 </div>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mediaFiles.length === 0 && user && (
                    <div className="col-span-full py-12 text-center text-black/40 font-bold uppercase tracking-widest text-sm">
                       No media files found. Upload some!
                    </div>
                  )}
                  {mediaFiles.map((file) => (
                    <div key={file.id} className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden border-2 border-black/10 hover:border-black transition-colors cursor-pointer">
                      <img src={(file.url) || undefined} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Media" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button className="bg-white p-2 rounded-lg hover:scale-110 transition-transform">
                          <Eye className="w-4 h-4 text-black" />
                        </button>
                        <button onClick={() => handleDeleteMedia(file.id)} className="bg-red-500 p-2 rounded-lg hover:scale-110 transition-transform">
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        );
      case 'Content CMS':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">Content CMS</h1>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Manage structured data across your sites</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Collections Sidebar */}
              <div className="lg:col-span-1 bg-white border-[4px] border-black p-4 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/40 px-4 mb-2">Collections</p>
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-black text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                  <Database className="w-4 h-4" /> Global Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-black hover:bg-black/5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                  <FolderOpen className="w-4 h-4" /> Blog Posts
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-black hover:bg-black/5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                  <MessageSquare className="w-4 h-4" /> Testimonials
                </button>
              </div>

              {/* Editor Area */}
              <div className="lg:col-span-3 bg-white border-[4px] border-black p-8 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                 {!user && (
                   <div className="mb-8 bg-yellow-100 border-2 border-yellow-500 p-4 rounded-xl">
                     <p className="font-bold text-sm text-yellow-800 flex justify-between items-center">
                       You must be logged into Supabase to edit CMS content. 
                       <button onClick={loginWithGoogle} className="bg-white px-4 py-2 rounded-lg border-2 border-black text-xs">Sign In</button>
                     </p>
                   </div>
                 )}
                 <div className="flex items-center justify-between mb-8 pb-6 border-b-[3px] border-black/10">
                   <h2 className="text-2xl font-black uppercase tracking-tighter">Global Settings</h2>
                   <button onClick={saveSettings} className="bg-black text-white px-4 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-black/90 transition-all shadow-md">
                     Save Changes
                   </button>
                 </div>
                 
                 <div className="space-y-6">
                   <div>
                     <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Business Name</label>
                     <input type="text" value={globalSettings.businessName} onChange={e => setGlobalSettings({...globalSettings, businessName: e.target.value})} className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-sm outline-none transition-colors" />
                   </div>
                   <div>
                     <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Support Email</label>
                     <input type="email" value={globalSettings.supportEmail} onChange={e => setGlobalSettings({...globalSettings, supportEmail: e.target.value})} className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-sm outline-none transition-colors" />
                   </div>
                   <div>
                     <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Default SEO Description</label>
                     <textarea value={globalSettings.defaultSeoDescription} onChange={e => setGlobalSettings({...globalSettings, defaultSeoDescription: e.target.value})} rows={4} className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-sm outline-none transition-colors resize-y" />
                   </div>
                   
                   <div className="pt-6 border-t-[3px] border-black/10">
                     <div className="bg-[#E8F0FE] border-2 border-blue-200 p-6 rounded-xl flex items-start gap-4">
                        <div className="bg-blue-100 p-2 rounded-lg mt-1 shrink-0">
                          <Database className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-widest text-xs mb-1">Developer API</h4>
                          <p className="text-xs text-black/60 font-medium leading-relaxed max-w-lg mb-4">
                            You can fetch this CMS content in your frontend components via the Supabase SDK.
                          </p>
                        </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">Account Settings</h1>
              <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Manage your personal profile and preferences</p>
            </div>

            <div className="bg-white border-[4px] border-black p-8 rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              {profileMsg && (
                <div className={`mb-6 p-4 border-2 rounded-xl text-xs font-bold uppercase tracking-wider ${profileMsg.startsWith('Error') ? 'bg-red-50 border-red-500 text-red-700' : 'bg-green-50 border-green-500 text-green-700'}`}>
                  {profileMsg}
                </div>
              )}

              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-center border-b-[3px] border-black/10 pb-6 mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-black bg-stone-100 flex items-center justify-center overflow-hidden shrink-0">
                    <img 
                      src={profileAvatar || user?.user_metadata?.avatar_url || "https://i.pravatar.cc/100?u=agency"} 
                      alt="Avatar Preview" 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://i.pravatar.cc/100?u=agency";
                      }}
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-black/60">Profile Picture URL</label>
                    <input 
                      type="text" 
                      value={profileAvatar} 
                      onChange={e => setProfileAvatar(e.target.value)} 
                      placeholder="https://images.unsplash.com/photo-..." 
                      className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-xs outline-none transition-colors" 
                    />
                    <p className="text-[9px] text-black/40 font-bold uppercase">Paste a direct image link from Unsplash, Gravatar, etc.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Full Name</label>
                    <input 
                      type="text" 
                      value={profileName} 
                      onChange={e => setProfileName(e.target.value)} 
                      required
                      placeholder="Michael Wilson" 
                      className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-sm outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Email Address (Read-Only)</label>
                    <input 
                      type="email" 
                      value={user?.email || ''} 
                      disabled
                      className="w-full px-4 py-3 bg-[#F8F5F2]/50 border-2 border-black/5 rounded-xl font-bold text-sm text-black/40 outline-none cursor-not-allowed" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Phone Number</label>
                    <input 
                      type="tel" 
                      value={profilePhone} 
                      onChange={e => setProfilePhone(e.target.value)} 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-sm outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest mb-2 text-black/60">Company Name</label>
                    <input 
                      type="text" 
                      value={profileCompany} 
                      onChange={e => setProfileCompany(e.target.value)} 
                      placeholder="Northwood Coffee Co." 
                      className="w-full px-4 py-3 bg-[#F8F5F2] border-2 border-black/10 focus:border-black rounded-xl font-bold text-sm outline-none transition-colors" 
                    />
                  </div>
                </div>

                <div className="pt-6 border-t-[3px] border-black/10 flex justify-end">
                  <button 
                    type="submit" 
                    disabled={isSavingProfile}
                    className="bg-black text-white px-6 py-3.5 rounded-xl font-black uppercase tracking-widest text-xs hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSavingProfile ? 'Saving...' : 'Save Profile Settings'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8F5F2] font-sans selection:bg-black selection:text-white overflow-hidden relative">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 w-72 bg-white border-r-[4px] border-black flex flex-col z-[70] transform transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 border-b-[4px] border-black flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-black p-1.5 rounded-lg">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">Northwood</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 hover:bg-black/5 rounded-lg">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-widest text-black/30 px-4 mb-4">Main Menu</p>
            {SIDEBAR_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveSection(link.label);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all group ${
                  activeSection === link.label 
                  ? 'bg-black text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)]' 
                  : 'text-black hover:bg-black/5'
                }`}
              >
                <link.icon className={`w-4 h-4 ${activeSection === link.label ? 'text-white' : 'text-black/40 group-hover:text-black'}`} />
                {link.label}
              </button>
            ))}
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-black/30 px-4 mb-4">Account</p>
            <button
              onClick={() => {
                setActiveSection('Settings');
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all group ${
                activeSection === 'Settings' 
                ? 'bg-black text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)]' 
                : 'text-black hover:bg-black/5'
              }`}
            >
              <Settings className={`w-4 h-4 ${activeSection === 'Settings' ? 'text-white' : 'text-black/40 group-hover:text-black'}`} />
              Settings
            </button>
          </div>
        </nav>

        <div className="p-6 border-t-[4px] border-black">
          <button 
            onClick={async () => {
              const supabase = getSupabaseBrowserClient();
              await supabase.auth.signOut();
              router.push('/login');
            }}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-red-500 hover:bg-red-50 transition-all text-left"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
          
          <div className="mt-6 flex items-center gap-3 px-2">
             <div className="w-10 h-10 rounded-full bg-black border-[2px] border-black flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src={profileAvatar || user?.user_metadata?.avatar_url || "https://i.pravatar.cc/100?u=agency"} 
                  alt="Client" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.pravatar.cc/100?u=agency";
                  }}
                />
             </div>
             <div className="flex flex-col">
                <span className="text-xs font-black uppercase truncate max-w-[155px]">
                  {profileName || user?.user_metadata?.full_name || user?.user_metadata?.name || 'Michael Wilson'}
                </span>
                <span className="text-[9px] font-bold text-black/40 uppercase truncate max-w-[155px]">
                  {profileCompany || user?.user_metadata?.company || 'Pro Client'}
                </span>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Header */}
        <header className="bg-white border-b-[4px] border-black px-4 lg:px-10 py-4 lg:py-6 flex items-center justify-between sticky top-0 z-40">
           <div className="flex items-center gap-4">
              <button 
                onClick={toggleSidebar}
                className="p-2 lg:hidden bg-black text-white rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] border-2 border-black"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="hidden md:flex items-center gap-4 bg-[#F8F5F2] border-[3px] border-black rounded-xl px-4 py-2 w-64 lg:w-96">
                <Search className="w-4 h-4 text-black/30" />
                <input type="text" placeholder="Search your assets..." className="bg-transparent border-none focus:outline-none font-bold text-xs w-full uppercase tracking-widest placeholder:text-black/20" />
              </div>
           </div>

           <div className="flex items-center gap-3 lg:gap-6">
              <button className="relative p-2 hover:bg-black/5 transition-all rounded-lg group">
                 <Bell className="w-5 h-5 text-black" />
                 <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
              </button>
              <button 
                 onClick={() => setIsTemplateModalOpen(true)}
                 className="bg-black text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl text-[9px] lg:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
              >
                 <Plus className="w-4 h-4" /> <span>New Site</span>
              </button>
           </div>
        </header>

        {/* Dashboard View */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10">
           {renderContent()}
        </div>

        {/* Template Modal */}
        <AnimatePresence>
          {isTemplateModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setIsTemplateModalOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#F8F5F2] border-[4px] border-black rounded-2xl p-8 max-w-4xl w-full shadow-[16px_16px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8 pb-6 border-b-[4px] border-black/10">
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Choose a Template</h2>
                    <p className="font-bold text-black/40 uppercase tracking-widest text-xs mt-2">Start from scratch or use your existing brand styles.</p>
                  </div>
                  <button onClick={() => setIsTemplateModalOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                    <CloseIcon className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Blank Template */}
                  <div 
                    onClick={() => { 
                      const newId = `site-${Date.now()}`;
                      setEditingSite({ id: newId, name: 'Untitled Site', templateKey: null, isNew: true }); 
                      setIsTemplateModalOpen(false); 
                    }}
                    className="group cursor-pointer bg-white border-[4px] border-black rounded-2xl overflow-hidden hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                  >
                    <div className="aspect-video bg-gray-100 flex items-center justify-center border-b-[4px] border-black group-hover:bg-gray-200 transition-colors">
                      <Plus className="w-12 h-12 text-black/20 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-black uppercase text-xl">Blank Site</h3>
                      <p className="text-black/50 text-xs font-bold uppercase tracking-widest mt-2">Start from scratch.</p>
                    </div>
                  </div>

                  {/* Existing Sites as Templates */}
                  {mySites.map(site => (
                    <div 
                      key={site.id}
                      onClick={() => { 
                        const newId = `site-${Date.now()}`;
                        setEditingSite({ id: newId, name: `Copy of ${site.name}`, templateKey: site.templateKey, isNew: true }); 
                        setIsTemplateModalOpen(false); 
                      }}
                      className="group cursor-pointer bg-white border-[4px] border-black rounded-2xl overflow-hidden hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                    >
                      <div className="aspect-video relative overflow-hidden bg-black/5 border-b-[4px] border-black">
                        <img src={(site.image) || undefined} alt={site.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="bg-black text-white text-[9px] px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">Brand Preset</span>
                        </div>
                        <h3 className="font-black uppercase text-xl">{site.name} Theme</h3>
                        <p className="text-black/50 text-xs font-bold uppercase tracking-widest mt-2">Use these blocks & styling.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Domain Management Modal */}
        <AnimatePresence>
          {managingDomainFor && (
            <DomainManagerModal 
              site={managingDomainFor} 
              onClose={() => setManagingDomainFor(null)} 
              onDomainUpdated={(siteId, newDomain) => {
                setMySites(prev => prev.map(s => 
                  s.id === siteId ? { ...s, customDomain: newDomain } : s
                ));
              }}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
