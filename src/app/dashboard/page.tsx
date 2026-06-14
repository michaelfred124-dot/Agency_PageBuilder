"use client";
import React, { useEffect, useState } from 'react';
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
  Eye,
  Trash2,
  LifeBuoy,
  CheckCircle,
  Clock3,
  Activity,
  Phone,
  Mail,
  Send,
  MessageSquare,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Zap,
  Sparkles,
  ArrowUpRight,
  Star,
  ShoppingCart,
  Repeat2,
  Gift,
  Megaphone,
  Archive
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import SiteEditor from '@/components/SiteEditor';
import { TEMPLATES, TEMPLATE_PAGES } from '@/lib/templates';
import DomainManagerModal from '@/components/DomainManagerModal';
import PricingModal from '@/components/PricingModal';
import PublishWizardModal from '@/components/PublishWizardModal';
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
  },
  {
    id: 'template-volt-vikings',
    name: 'Volt Vikings',
    url: 'voltvikings.com',
    previewUrl: '/preview/template-volt-vikings',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'voltvikings'
  },
  {
    id: 'template-sterling-law',
    name: 'Sterling Law Group',
    url: 'sterlinglawgroup.com',
    previewUrl: '/preview/template-sterling-law',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'law_firm'
  },
  {
    id: 'template-ridge-line-auto',
    name: 'Ridge Line Auto Service',
    url: 'ridgelineauto.com',
    previewUrl: '/preview/template-ridge-line-auto',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'auto_repair'
  },
  {
    id: 'template-atelier-hair',
    name: 'Atelier Hair Studio',
    url: 'atelierhair.com',
    previewUrl: '/preview/template-atelier-hair',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'hair_salon'
  },
  {
    id: 'template-meridian-properties',
    name: 'Meridian Properties',
    url: 'meridianproperties.com',
    previewUrl: '/preview/template-meridian-properties',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'real_estate'
  },
  {
    id: 'template-iron-edge-fitness',
    name: 'Iron Edge Fitness',
    url: 'ironedgefitness.com',
    previewUrl: '/preview/template-iron-edge-fitness',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'personal_trainer'
  },
  {
    id: 'template-clarity-dental',
    name: 'Clarity Dental Studio',
    url: 'claritydental.com',
    previewUrl: '/preview/template-clarity-dental',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'dental'
  },
  {
    id: 'template-paws-pamper',
    name: 'Paws & Pamper Pet Spa',
    url: 'pawsandpamper.com',
    previewUrl: '/preview/template-paws-pamper',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'dog_grooming'
  },
  {
    id: 'template-golden-thread',
    name: 'The Golden Thread Events',
    url: 'goldenthreadevents.com',
    previewUrl: '/preview/template-golden-thread',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'wedding_planner'
  },
  {
    id: 'template-spotless-home',
    name: 'Spotless Home Co.',
    url: 'spotlesshomeco.com',
    previewUrl: '/preview/template-spotless-home',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'home_cleaning'
  },
  {
    id: 'template-solstice-yoga',
    name: 'Solstice Yoga & Wellness',
    url: 'solsticeyoga.com',
    previewUrl: '/preview/template-solstice-yoga',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'yoga_studio'
  },
  {
    id: 'template-valley-prohome',
    name: 'Valley ProHome Services',
    url: 'valleyprohome.com',
    previewUrl: '/preview/template-valley-prohome',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'prohome_services'
  },
  {
    id: 'template-maison-boutique',
    name: 'Maison Boutique',
    url: 'maisonboutique.com',
    previewUrl: '/preview/template-maison-boutique',
    status: 'Template',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400&auto=format&fit=crop',
    lastUpdate: 'Just now',
    templateKey: 'maison_boutique'
  }
];

const ANALYTICS_DATA = [
  { name: 'Mon', views: 400, visitors: 240 },
  { name: 'Tue', views: 300, visitors: 139 },
  { name: 'Wed', views: 780, visitors: 480 },
  { name: 'Thu', views: 578, visitors: 390 },
  { name: 'Fri', views: 900, visitors: 580 },
  { name: 'Sat', views: 1100, visitors: 700 },
  { name: 'Sun', views: 950, visitors: 610 },
];

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState('Overview');
  const [selectedSite, setSelectedSite] = useState<any>(null);
  const [isSiteSelectorOpen, setIsSiteSelectorOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editingSite, setEditingSite] = useState<any>(null);
  const [managingDomainFor, setManagingDomainFor] = useState<any | null>(null);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isPublishWizardOpen, setIsPublishWizardOpen] = useState(false);
  const [pendingPublishData, setPendingPublishData] = useState<{ pages: any, theme: any } | null>(null);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<any | null>(null);
  const [mediaFiles, setMediaFiles] = useState<any[]>([]);
  const [globalSettings, setGlobalSettings] = useState<any>({
    businessName: 'My Business',
    supportEmail: 'support@mybusiness.com',
    defaultSeoDescription: 'Welcome to our professional brand website.'
  });

  const [mySites, setMySites] = useState<any[]>([]);

  // Request Update Form State
  const [requestPage, setRequestPage] = useState('Home');
  const [requestType, setRequestType] = useState('Content Update');
  const [requestDescription, setRequestDescription] = useState('');
  const [requestFiles, setRequestFiles] = useState<string[]>([]);
  const [requestStatusMsg, setRequestStatusMsg] = useState('');

  // Unified Agency Hub States
  const [tickets, setTickets] = useState<any[]>([
    { id: 'TKT-2041', title: 'Update Holiday Hours on Store Page', status: 'In Progress', date: 'Just now', type: 'Content Update', description: 'Change hours of operation for Sundays.', files: [] },
    { id: 'TKT-2032', title: 'Add Staff Member Bio and Photos', status: 'Completed', date: 'Oct 10', type: 'Design Update', description: 'Add team bios.', files: [] },
    { id: 'TKT-1988', title: 'Domain DNS Verification Pointing Issue', status: 'Completed', date: 'Sep 05', type: 'Technical', description: 'Point subdomain DNS.', files: [] }
  ]);

  const [agencyNotifications, setAgencyNotifications] = useState<any[]>([
    { id: 'ann-1', title: 'Google Analytics Integration Ready', content: 'We have configured Google Analytics 4 tracking for all your active sites. You can view reports in the Analytics tab.', date: '2 hours ago', read: false },
    { id: 'ann-2', title: 'Scheduled Server Maintenance', content: 'Our servers will undergo a routine optimization update this Saturday at 2:00 AM EST. Expected downtime is less than 5 minutes.', date: '1 day ago', read: true },
    { id: 'ann-3', title: 'New Neo-Brutalist Layout Presets Released', content: 'Three new brutalist hero presets are now available in your website builder. Try them out in the Hero section layout options!', date: '3 days ago', read: true }
  ]);

  const [chatMessages, setChatMessages] = useState<any[]>([
    { id: 'msg-1', sender: 'agency', initials: 'A', name: 'Michaelfred Designs Partner', text: 'Hey! We received your onboarding details. The assets look great. We are getting started on the layout styling today.', date: 'Monday, 9:00 AM' },
    { id: 'msg-2', sender: 'client', initials: 'M', name: 'You', text: 'Awesome. Let me know if you need any more photos of the storefront or custom copy.', date: 'Monday, 10:15 AM' },
    { id: 'msg-3', sender: 'agency', initials: 'A', name: 'Michaelfred Designs Partner', text: 'Will do! The layouts should be ready for your review by Wednesday. I will drop a preview link right here.', date: 'Monday, 10:20 AM' }
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');

  // Call Scheduler Form States
  const [callType, setCallType] = useState('Phone Call');
  const [callTime, setCallTime] = useState('Morning (9am - 12pm)');
  const [callReason, setCallReason] = useState('');
  const [callStatusMsg, setCallStatusMsg] = useState('');
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Tier-Based Onboarding States
  const [selectedPlanTier, setSelectedPlanTier] = useState<'DIY' | 'DFY'>('DIY'); // DIY = $20/mo, DFY = Agency Managed
  const [onboardingTemplateKey, setOnboardingTemplateKey] = useState<string | null>(null);
  const [onboardingStep, setOnboardingStep] = useState<number>(0); // 0 = closed, 1 = name/tagline, 2 = contact/logo, 3 = generating
  const [onboardingAnswers, setOnboardingAnswers] = useState({
    businessName: '',
    tagline: '',
    phone: '',
    email: '',
    logoText: '',
  });
  // Paywall Gate State
  const [isOnboardedPaid, setIsOnboardedPaid] = useState<boolean>(false);
  const [showTrialGateModal, setShowTrialGateModal] = useState<boolean>(false);

  // DFY Dynamic Project Timeline & Checklist States
  const [dfyActivePhase, setDfyActivePhase] = useState<number>(1); // 1 = Assets, 2 = Wireframe, 3 = Review, 4 = Launch/Domain
  const [dfyAssets, setDfyAssets] = useState<any[]>([
    { id: 'logo', label: 'Vector/High-Res Logo file', category: 'Design', status: 'Pending', type: 'file', fileUrl: '' },
    { id: 'colors', label: 'Brand color preferences or hex codes', category: 'Branding', status: 'Pending', type: 'text', textVal: '' },
    { id: 'content', label: 'Company Bio or Homepage introduction text', category: 'Copywriting', status: 'Pending', type: 'text', textVal: '' },
    { id: 'photos', label: 'Team/Office/Work gallery photos', category: 'Assets', status: 'Pending', type: 'file', fileUrl: '' },
    { id: 'domains', label: 'Preferred custom domain address (e.g. acme.com)', category: 'Technical', status: 'Pending', type: 'text', textVal: '' }
  ]);
  const [dfyConceptApproved, setDfyConceptApproved] = useState<boolean>(false);
  const [dfyRevisionNotes, setDfyRevisionNotes] = useState<string>('');
  const [dfyRevisionSubmitted, setDfyRevisionSubmitted] = useState<boolean>(false);
  const [dfyFinalSignoff, setDfyFinalSignoff] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const paid = localStorage.getItem('diy_plan_paid') === 'true';
      setIsOnboardedPaid(paid);

      const savedPhase = localStorage.getItem('dfy_active_phase');
      if (savedPhase) setDfyActivePhase(parseInt(savedPhase));

      const savedAssets = localStorage.getItem('dfy_assets_checklist');
      if (savedAssets) {
        try { setDfyAssets(JSON.parse(savedAssets)); } catch(e) {}
      }

      const savedConcept = localStorage.getItem('dfy_concept_approved');
      if (savedConcept) setDfyConceptApproved(savedConcept === 'true');

      const savedRevisionSub = localStorage.getItem('dfy_revision_submitted');
      if (savedRevisionSub) setDfyRevisionSubmitted(savedRevisionSub === 'true');

      const savedSignoff = localStorage.getItem('dfy_final_signoff');
      if (savedSignoff) setDfyFinalSignoff(savedSignoff === 'true');
    }
  }, []);

  const updateDfyPhase = (phase: number) => {
    setDfyActivePhase(phase);
    localStorage.setItem('dfy_active_phase', String(phase));
  };

  const updateDfyAssets = (newAssets: any[]) => {
    setDfyAssets(newAssets);
    localStorage.setItem('dfy_assets_checklist', JSON.stringify(newAssets));
  };

  // Auto-play Top Banner Carousel
  useEffect(() => {
    if (activeSection !== 'Overview') return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [activeSection]);

  // User Profile Settings State
  const [profileName, setProfileName] = useState('');
  const [profileCompany, setProfileCompany] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileAvatar, setProfileAvatar] = useState('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileMsg, setProfileMsg] = useState('');

  // Contact Submissions (Leads) State
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isSubmissionsLoading, setIsSubmissionsLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);
  const [inboxSearchQuery, setInboxSearchQuery] = useState('');
  const [inboxFilter, setInboxFilter] = useState<'all' | 'unread' | 'read' | 'archived'>('all');

  // CMS Collections State removed

  const loadLocalSites = () => {
    if (typeof window === 'undefined') return [];

    const saved = localStorage.getItem('my-sites');
    if (!saved) return [];

    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const mergeSitesById = (localSites: any[], remoteSites: any[]) => {
    const siteMap = new Map<string, any>();
    localSites.forEach(site => siteMap.set(String(site.id), site));
    remoteSites.forEach(site => siteMap.set(String(site.id), { ...siteMap.get(String(site.id)), ...site }));
    return Array.from(siteMap.values());
  };

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
    const localSites = loadLocalSites();
    if (localSites.length === 0) return;

    setMySites(localSites);
    setSelectedSite(prev => prev || localSites[0]);
    
    // Auto-launch editor on onboarding redirect
    const instantEditId = sessionStorage.getItem('instant_edit_site_id');
    if (instantEditId) {
      const matchedSite = localSites.find((s: any) => s.id === instantEditId);
      if (matchedSite) {
        setEditingSite(matchedSite);
        sessionStorage.removeItem('instant_edit_site_id');
      }
    }
  }, []);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
      }
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setUser(null);
        window.location.href = '/';
      } else if (session) {
        setUser(session.user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Redirect admin users to CRM portal client-side
  useEffect(() => {
    if (user) {
      const isAdmin = 
        user.email?.toLowerCase() === 'michaelfreddesigns@gmail.com' ||
        user.email?.toLowerCase() === 'michaelfred124@gmail.com' ||
        user.user_metadata?.is_admin === true || 
        user.app_metadata?.is_admin === true ||
        user.user_metadata?.role === 'admin' ||
        user.app_metadata?.role === 'admin';
        
      if (isAdmin) {
        router.push('/admin');
      }
    }
  }, [user, router]);

  useEffect(() => {
    if (!user) return;

    const fetchSupabaseSites = async () => {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data, error } = await supabase
          .from('tenants')
          .select('*')
          .eq('owner_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        const remoteSites = (data || []).map((tenant: any) => ({
          id: tenant.id,
          tenantId: tenant.id,
          name: tenant.name,
          url: tenant.custom_domain || `${tenant.subdomain}.michaelfreddesigns.com`,
          previewUrl: `/site/${tenant.subdomain}`,
          status: 'Live',
          image: tenant.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
          lastUpdate: tenant.updated_at || tenant.created_at || 'Just now',
          subdomain: tenant.subdomain,
          customDomain: tenant.custom_domain,
          planTier: tenant.plan_tier || 'DIY',
        }));

        setMySites(prev => {
          const localSites = loadLocalSites();
          const mergedSites = mergeSitesById(localSites.length ? localSites : prev, remoteSites);
          localStorage.setItem('my-sites', JSON.stringify(mergedSites));
          setSelectedSite(current => {
            if (!mergedSites.length) return current;
            if (!current) return mergedSites[0];
            return mergedSites.find((site: any) => site.id === current.id || site.tenantId === current.tenantId) || mergedSites[0];
          });
          return mergedSites;
        });
      } catch (err) {
        console.error('Error fetching Supabase sites:', err);
      }
    };

    fetchSupabaseSites();
  }, [user]);

  const handleDeleteSite = async (siteId: string | number) => {
    if (!window.confirm("Are you sure you want to delete this site? This action cannot be undone.")) return;
    try {
      if (user) {
        const supabase = getSupabaseBrowserClient();
        await supabase.from('tenants').delete().eq('id', siteId);
      }
    } catch(err) {
      console.warn("Could not delete site from Supabase. Removing locally.", err);
    }

    setMySites(prev => {
      const next = prev.filter(s => s.id !== siteId);
      if (selectedSite?.id === siteId && next.length > 0) {
        setSelectedSite(next[0]);
      } else if (selectedSite?.id === siteId) {
        setSelectedSite(null);
      }
      return next;
    });
  };

  const handleUpdatePlanTier = (siteId: string, newTier: 'DIY' | 'DFY') => {
    const updatedSites = mySites.map(s => 
      s.id === siteId ? { ...s, planTier: newTier } : s
    );
    setMySites(updatedSites);
    localStorage.setItem('my-sites', JSON.stringify(updatedSites));
    if (selectedSite?.id === siteId) {
      setSelectedSite((prev: any) => prev ? { ...prev, planTier: newTier } : null);
    }
  };

  // Fetch Contact Form Submissions for Selected Site
  useEffect(() => {
    if (activeSection !== 'Inbox Messages') return;
    
    if (!selectedSite) {
      setSubmissions([]);
      setSelectedMessage(null);
      return;
    }

    // If it's a template or draft with no real database tenantId, we load mock messages
    if (selectedSite.status === 'Template' || !selectedSite.tenantId) {
      const mockSubmissions = [
        {
          id: 'mock-1',
          name: 'Sarah Jenkins',
          email: 'sarah.jenkins@example.com',
          phone: '303-555-0199',
          message: "Hi there! I saw your new template preview and I'm interested in booking a consultation for my local business. Do you have availability on weekends or evenings? Let me know your rates. Thanks!",
          status: 'unread',
          created_at: new Date(Date.now() - 3600000 * 2).toISOString(), // 2 hours ago
        },
        {
          id: 'mock-2',
          name: 'David Miller',
          email: 'miller.david@example.com',
          phone: '720-555-0142',
          message: "Can you please send me a detailed pricing sheet and list of features for your standard packages? I'm comparing a few different providers for our upcoming community web design project.",
          status: 'read',
          created_at: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
        },
        {
          id: 'mock-3',
          name: 'Elena Rostova',
          email: 'elena.rostova@example.com',
          phone: '',
          message: "Just wanted to say I love the clean design layout of your page! Especially the gallery integration. I'll be reaching out in a few weeks once we gather our custom brand assets.",
          status: 'archived',
          created_at: new Date(Date.now() - 3600000 * 48).toISOString(), // 2 days ago
        }
      ];
      setSubmissions(mockSubmissions);
      setSelectedMessage(mockSubmissions[0]);
      return;
    }

    const fetchSubmissions = async () => {
      setIsSubmissionsLoading(true);
      try {
        const supabase = getSupabaseBrowserClient();
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .eq('tenant_id', selectedSite.tenantId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setSubmissions(data || []);
        if (data && data.length > 0) {
          setSelectedMessage(data[0]);
        } else {
          setSelectedMessage(null);
        }
      } catch (err: any) {
        // Suppress all errors for now since contact_submissions table may not exist
        setSubmissions([]);
      } finally {
        setIsSubmissionsLoading(false);
      }
    };

    fetchSubmissions();
  }, [activeSection, selectedSite]);

  const handleUpdateSubmissionStatus = async (id: string, newStatus: 'read' | 'unread' | 'archived') => {
    // Update local state first
    setSubmissions(prev => prev.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(prev => prev ? { ...prev, status: newStatus } : null);
    }

    if (id.startsWith('mock-')) return;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!window.confirm('Are you sure you want to permanently delete this message?')) return;

    setSubmissions(prev => {
      const next = prev.filter(sub => sub.id !== id);
      if (selectedMessage?.id === id) {
        setSelectedMessage(next.length > 0 ? next[0] : null);
      }
      return next;
    });

    if (id.startsWith('mock-')) return;

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      console.error('Error deleting submission:', err);
    }
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

  // Automated custom template parser for $20 DIY Tier
  const handleGenerateDIYTemplate = (templateKey: string) => {
    const rawTemplateData = TEMPLATES[templateKey];
    if (!rawTemplateData) return [];

    // Deep clone template
    const cloned: any[] = JSON.parse(JSON.stringify(rawTemplateData));

    // Map user answers
    const name = onboardingAnswers.businessName || 'My Business';
    const tagline = onboardingAnswers.tagline || 'Premium Quality & Professional Service';
    const phone = onboardingAnswers.phone || '(555) 123-4567';
    const email = onboardingAnswers.email || 'contact@mybusiness.com';
    const logoText = onboardingAnswers.logoText || name;

    return cloned.map(section => {
      // Swapping props in typical blocks
      if (section.props) {
        // Hero / Header
        if (section.type.includes('Hero')) {
          if (section.props.title) {
            section.props.title = `${name}.\n${tagline}`;
          }
          if (section.props.subtitle) {
            section.props.subtitle = tagline;
          }
        }
        
        // Find Us / Contact updates
        if (section.type.includes('FindUs')) {
          if (section.props.phone) section.props.phone = phone;
          if (section.props.email) section.props.email = email;
        }

        // Footers
        if (section.type.includes('Footer')) {
          if (section.props.text) {
            section.props.text = `© 2026 ${name}. All rights reserved. Powered by Michaelfred Designs.`;
          }
        }
      }
      return section;
    });
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (editingSite) {
    let initialSections = TEMPLATES.blank;
    let initialPages = undefined;
    let initialTheme = null;
    
    if (typeof window !== 'undefined') {
      const savedPages = localStorage.getItem(`site-pages-${editingSite.id}`);
      const savedSections = localStorage.getItem(`site-sections-${editingSite.id}`);
      const savedTheme = localStorage.getItem(`site-theme-${editingSite.id}`);
      
      if (savedPages) {
        try {
          initialPages = JSON.parse(savedPages);
        } catch(e) {
          console.error(e);
        }
      } else if (savedSections) {
        try {
          initialSections = JSON.parse(savedSections);
        } catch (e) {
          console.error(e);
        }
      } else if (editingSite.aiSections) {
        initialPages = [
          {
            id: 'home',
            name: 'Home',
            slug: '/',
            sections: editingSite.aiSections
          }
        ];
        if (editingSite.aiTheme) {
          initialTheme = editingSite.aiTheme;
        }
      } else if (editingSite.templateKey && TEMPLATE_PAGES[editingSite.templateKey]) {
        const defaultPages = TEMPLATE_PAGES[editingSite.templateKey];
        initialPages = defaultPages.map(p => ({
          id: p.slug === '/' ? 'home' : `page-${p.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
          name: p.name,
          slug: p.slug,
          sections: p.sections.map(s => ({
            ...s,
            id: `item-${s.type.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
          }))
        }));
      } else if (editingSite.templateKey && TEMPLATES[editingSite.templateKey]) {
        initialSections = TEMPLATES[editingSite.templateKey];
      }
      
      if (savedTheme && !initialTheme) {
        try {
          initialTheme = JSON.parse(savedTheme);
        } catch (e) {
          console.error(e);
        }
      }
    } else if (editingSite.templateKey && TEMPLATES[editingSite.templateKey]) {
      initialSections = TEMPLATES[editingSite.templateKey];
    }

    const handlePublishSite = async (pages: any, theme: any, skipDomainModal: boolean = false) => {
      const existingSubdomain = editingSite.subdomain || '';
      const subdomain = existingSubdomain || editingSite.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

      try {
        let tenantData: any = null;
        let liveUrl = '';
        let devUrl = '';

        for (const page of pages) {
          const pageSlug = page.slug === '/' ? 'index' : page.slug.replace(/^\//, '');
          
          const res = await fetch('/api/publish', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              subdomain: subdomain.trim(),
              siteName: editingSite.name,
              pageSlug: pageSlug,
              canvasJson: page.sections,
              themeJson: theme,
              ownerId: user?.id,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            alert(`❌ Publish failed for page "${page.name}": ${data.error || 'Unknown error'}`);
            return;
          }

          if (pageSlug === 'index' || !tenantData) {
            tenantData = data.tenant;
            liveUrl = data.liveUrl;
            devUrl = data.devUrl;
          }
        }

        setMySites(prev => {
          const updated = prev.map(s => 
            s.id === editingSite.id 
              ? { ...s, status: 'Live', url: liveUrl, subdomain: tenantData.subdomain, tenantId: tenantData.id }
              : s
          );
          localStorage.setItem('my-sites', JSON.stringify(updated));
          return updated;
        });

        localStorage.setItem(`site-pages-${editingSite.id}`, JSON.stringify(pages));
        localStorage.setItem(`site-theme-${editingSite.id}`, JSON.stringify(theme));

        if (!skipDomainModal) {
          setManagingDomainFor({ ...editingSite, tenantId: tenantData.id });
        }
      } catch (err: any) {
        console.error('[Publish] Error:', err);
        alert(`❌ Publish failed: ${err.message || 'Network error'}`);
      }
    };

    return (
      <>
      <SiteEditor 
        siteName={editingSite.name} 
        siteId={editingSite.id}
        tenantId={editingSite.tenantId}
        initialPages={initialPages}
        initialSections={initialSections}
        initialTheme={initialTheme} 
        onBack={() => setEditingSite(null)}
        planTier={editingSite.planTier}
        onSave={(pages, theme) => {
          localStorage.setItem(`site-pages-${editingSite.id}`, JSON.stringify(pages));
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
              templateKey: editingSite.templateKey,
              planTier: editingSite.planTier || 'DIY'
            };
            const updatedSites = [...mySites, newSiteRecord];
            setMySites(updatedSites);
            localStorage.setItem('my-sites', JSON.stringify(updatedSites));
            editingSite.isNew = false;
          }
          alert("Site saved successfully!");

          // If exiting to dashboard on DIY tier, automatically prompt to link custom domain
          if (editingSite.planTier === 'DIY') {
            if (!isOnboardedPaid) {
              setShowTrialGateModal(true);
            } else {
              setManagingDomainFor(editingSite);
            }
          }
          setEditingSite(null);
        }}
        onPublish={async (pages, theme) => {
          // If first time publishing (no tenantId) OR user hasn't paid on DIY tier, show wizard
          if (!editingSite.tenantId || (editingSite.planTier === 'DIY' && !isOnboardedPaid)) {
            setPendingPublishData({ pages, theme });
            setIsPublishWizardOpen(true);
            return;
          }
          // Otherwise it's a subsequent publish, so we do a silent background update
          await handlePublishSite(pages, theme);
        }}
        user={user}
        mediaFiles={mediaFiles}
        globalSettings={globalSettings}
        setGlobalSettings={setGlobalSettings}
        handleUploadMediaClick={handleUploadMediaClick}
        handleDeleteMedia={handleDeleteMedia}
        saveSettings={saveSettings}
      />
      {managingDomainFor && (
        <div className="fixed inset-0 z-[200]">
          <DomainManagerModal 
            site={managingDomainFor} 
            onClose={() => setManagingDomainFor(null)} 
            onDomainUpdated={(siteId, domain) => {
              // Update local state if needed
              setMySites(prev => prev.map(s => s.id === siteId ? { ...s, customDomain: domain } : s));
            }}
          />
        </div>
      )}
      {isPublishWizardOpen && pendingPublishData && (
        <PublishWizardModal
          site={editingSite}
          isOnboardedPaid={isOnboardedPaid}
          onPlanSubscribed={() => {
            setIsOnboardedPaid(true);
          }}
          onClose={() => {
            setIsPublishWizardOpen(false);
            setPendingPublishData(null);
          }}
          onPublishInitial={async () => {
            // Do the initial publish in the background and return the updated site
            await handlePublishSite(pendingPublishData.pages, pendingPublishData.theme, true);
            // After handlePublishSite runs, editingSite might not immediately reflect the new tenantId 
            // because of closure state, so we read it from localStorage or assume the backend created it.
            // Actually, handlePublishSite updates `mySites`, we can find it there.
            const sitesStr = localStorage.getItem('my-sites');
            if (sitesStr) {
               const sites = JSON.parse(sitesStr);
               const updated = sites.find((s: any) => s.id === editingSite.id);
               if (updated) return updated;
            }
            return editingSite;
          }}
        />
      )}
      </>
    );
  }

  function handleUploadMediaClick() {
    if (!user) return alert('Please login first');
    if (!selectedSite) return alert('Please select a site first');
    
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
    if (!selectedSite) return alert('Please select a site first');
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

  const renderLockedFeatureGate = () => {
    return (
      <div className="max-w-xl mx-auto py-12 px-6 bg-[#F8F5F2] border-[4px] border-black rounded-3xl shadow-[12px_12px_0px_rgba(0,0,0,1)] text-center space-y-6 animate-fade-in font-sans">
        <div className="w-16 h-16 bg-amber-400 text-slate-900 border-[3px] border-black rounded-2xl flex items-center justify-center mx-auto shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <Zap className="w-8 h-8 text-black fill-black animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] bg-indigo-50 border-2 border-indigo-600 text-indigo-700 px-3 py-1 rounded-full font-black uppercase tracking-wider">
            🎁 Start 1-Month Free Trial
          </span>
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 pt-2">
            Unlock the Backend & Domains
          </h2>
          <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed font-semibold">
            To view analytics, manage inbox leads, or configure custom domains, start your 30-day free trial first!
          </p>
        </div>

        <div className="bg-white border-2 border-black rounded-2xl p-5 text-left space-y-3 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest border-b border-black/10 pb-1.5">What you'll unlock:</p>
          <div className="space-y-2">
            {[
              { title: "Connect Custom Domains", desc: "Attach your brand's unique web address" },
              { title: "Inbox & Leads Manager", desc: "Receive & reply to customer messages" },
              { title: "E-Commerce & Stripe Checkout", desc: "Accept payments and sell digital products" },
              { title: "Visitor Analytics & Reports", desc: "Track performance and traffic insights" }
            ].map(item => (
              <div key={item.title} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" strokeWidth={3} />
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">{item.title}</p>
                  <p className="text-[10px] text-slate-400 font-semibold leading-tight mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => {
              localStorage.setItem('diy_plan_paid', 'true');
              setIsOnboardedPaid(true);
              alert("🎉 Subscription Activated! Your 1-month free trial has started. All premium backend metrics and domain manager options are now fully unlocked.");
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md border-2 border-black hover:-translate-y-0.5 active:translate-y-0 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
          >
            Start 1-Month Free Trial ($0.00)
          </button>
          
          <button
            onClick={() => {
              if (selectedSite) {
                setEditingSite(selectedSite);
              } else if (mySites.length > 0) {
                setEditingSite(mySites[0]);
              } else {
                setIsTemplateModalOpen(true);
              }
            }}
            className="w-full bg-white hover:bg-slate-50 text-slate-800 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-black hover:-translate-y-0.5 active:translate-y-0 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]"
          >
            Customize Draft Site in Builder
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    // Gate backend pages under 1-month free trial
    if (!isOnboardedPaid && activeSection !== 'My Sites') {
      return renderLockedFeatureGate();
    }

    switch (activeSection) {
      case 'Overview':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Greetings Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Welcome back, {profileName.split(' ')[0] || user?.user_metadata?.full_name?.split(' ')[0] || 'Client'}
                </h1>
                <p className="text-slate-500 text-sm mt-0.5">Here is what is happening with your digital properties today.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-slate-500" /> API Connected
                </span>
              </div>
            </div>

            {/* Top Carousel Banner */}
            {selectedSite && (
              <div className="relative rounded-3xl overflow-hidden text-white min-h-[340px] flex flex-col group shadow-[0_0_60px_rgba(79,70,229,0.15)] border border-white/5">
                
                {/* Carousel Slides Container */}
                <div className="flex-1 flex flex-col">
                  <AnimatePresence mode="wait">
                    {currentSlide === 0 && (
                      <motion.div
                        key="slide-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex-1 min-h-[340px] flex flex-col"
                      >
                        {/* Full-bleed background image */}
                        <img
                          src="/agency_hero_bg.png"
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Dark overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        {/* Indigo tint */}
                        <div className="absolute inset-0 bg-indigo-950/30" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-10 flex-1">
                          <div className="space-y-4 max-w-xl md:w-[58%]">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                (selectedSite.planTier || 'DIY') === 'DIY' ? 'bg-amber-400 text-slate-900' : 'bg-indigo-600 text-white'
                              }`}>
                                {(selectedSite.planTier || 'DIY') === 'DIY' ? 'DIY Plan' : 'Done-For-You Plan'}
                              </span>
                              <span className="text-[10px] text-indigo-200 font-bold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Agency Online & Ready
                              </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight drop-shadow-lg">
                              {(selectedSite.planTier || 'DIY') === 'DIY' ? (
                                <>Let our agency build it for you — copy, design & dev all handled.</>
                              ) : (
                                <>Premium managed tier. All support lines unlocked and prioritised.</>
                              )}
                            </h3>
                            
                            <p className="text-indigo-100/85 text-sm leading-relaxed max-w-lg font-medium">
                              {(selectedSite.planTier || 'DIY') === 'DIY' ? (
                                <>Upgrade to <strong className="text-white">Done-For-You ($50/mo)</strong> and our senior developers handle all custom updates, copy, images, and layout edits for you — no blocks, no hassle.</>
                              ) : (
                                <>Need a new page, layout changes, or copy updates? Message your account manager and get changes built and launched live within 24 hours.</>
                              )}
                            </p>

                            <div className="flex items-center gap-3 pt-1">
                              {(selectedSite.planTier || 'DIY') === 'DIY' ? (
                                <button
                                  onClick={() => {
                                    setIsUpgrading(true);
                                    setActiveSection('Contact Agency');
                                    setTimeout(() => {
                                      setIsUpgrading(false);
                                      handleUpdatePlanTier(selectedSite.id, 'DFY');
                                      alert("💳 Stripe Invoice Paid! Done-For-You portal is now active. Your dedicated developer is ready.");
                                    }, 1500);
                                  }}
                                  className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
                                >
                                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" /> Upgrade to DFY — $50/mo
                                </button>
                              ) : (
                                <button
                                  onClick={() => setActiveSection('Contact Agency')}
                                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
                                >
                                  <MessageSquare className="w-3.5 h-3.5" /> Contact Developer
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Right floating card */}
                          <div className="hidden md:flex flex-col justify-between md:w-[36%] h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl self-center gap-4">
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                              <div className="flex items-center gap-2">
                                <div className="relative">
                                  <div className="w-10 h-10 rounded-full bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center font-bold text-xs text-indigo-200">
                                    {selectedSite.planTier === 'DFY' ? 'SJ' : 'DEV'}
                                  </div>
                                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-slate-900 ${
                                    selectedSite.planTier === 'DFY' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                                  }`} />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-white">{selectedSite.planTier === 'DFY' ? 'Sarah Jenkins' : 'Agency Dev Team'}</h4>
                                  <p className="text-[9px] text-indigo-300/70 font-semibold uppercase tracking-wider">{selectedSite.planTier === 'DFY' ? 'Dedicated Lead Dev' : 'Premium Tier Only'}</p>
                                </div>
                              </div>
                              <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                                selectedSite.planTier === 'DFY' ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-slate-700/50 text-slate-400 border-slate-600/50'
                              }`}>
                                {selectedSite.planTier === 'DFY' ? 'ACTIVE' : 'LOCKED'}
                              </span>
                            </div>
                            {selectedSite.planTier === 'DFY' ? (
                              <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/8">
                                <span className="text-base">💬</span>
                                <p className="text-xs leading-snug font-medium text-slate-300">"Hey! Ready for your edits. Message me when you have a request!"</p>
                              </div>
                            ) : (
                              <div className="flex items-start gap-2 bg-amber-500/8 p-3 rounded-xl border border-amber-500/15">
                                <span className="text-base">🔒</span>
                                <p className="text-xs leading-snug font-medium text-amber-200/80">Unlock 24h developer access and direct email & phone support.</p>
                              </div>
                            )}
                            <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider text-right pt-1 border-t border-white/5">
                              {selectedSite.planTier === 'DFY' ? '⚡ Response: Under 30 mins' : 'Stripe billing active'}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentSlide === 1 && (
                      <motion.div
                        key="slide-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex-1 min-h-[340px] flex flex-col"
                      >
                        {/* Full-bleed background image */}
                        <img
                          src="/dfy_addons_promo.png"
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Dark overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-950/80 to-slate-950/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 p-8 md:p-10 flex-1">
                          <div className="space-y-4 max-w-xl md:w-[58%]">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-slate-900">
                                Premium Addons
                              </span>
                              <span className="text-[10px] text-amber-200 font-bold flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" /> Grow Your Business
                              </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight drop-shadow-lg">
                              Ready to take your business to the next level? Check out our Done-For-You Addons!
                            </h3>
                            
                            <p className="text-indigo-100/85 text-sm leading-relaxed max-w-lg font-medium">
                              Supercharge your site with premium custom modules managed entirely by us — booking engines, SEO audits, API webhooks, and live shopping carts.
                            </p>

                            <div className="pt-1">
                              <button
                                onClick={() => {
                                  setActiveSection('Contact Agency');
                                  setTimeout(() => {
                                    const chatInput = document.querySelector('input[placeholder*="team"]');
                                    if (chatInput) {
                                      (chatInput as HTMLInputElement).value = "Hi! I'm interested in adding custom DFY Addons to my website. Can you tell me more about it?";
                                    }
                                  }, 150);
                                }}
                                className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 w-fit"
                              >
                                <Sparkles className="w-3.5 h-3.5" /> Browse Addons
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentSlide === 2 && (
                      <motion.div
                        key="slide-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex-1 min-h-[340px] flex flex-col"
                      >
                        {/* Full-bleed background image */}
                        <img
                          src="/automation_hero_bg.png"
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Dark overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-indigo-950/25" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 p-8 md:p-10 flex-1">
                          <div className="space-y-4 max-w-xl md:w-[58%]">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-600 text-white">
                                Growth & Automations
                              </span>
                              <span className="text-[10px] text-indigo-200 font-bold flex items-center gap-1.5">
                                <Zap className="w-3 h-3 text-indigo-300" /> Marketing Integration
                              </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight drop-shadow-lg">
                              Connect Shopify & Klaviyo Automations
                            </h3>
                            
                            <p className="text-indigo-100/85 text-sm leading-relaxed max-w-lg font-medium">
                              Win-Back loops, abandoned cart SMS, and order follow-up email drips. We configure, connect, and optimize all 6 automation tools for your business.
                            </p>

                            <div className="pt-1">
                              <button
                                onClick={() => setActiveSection('Marketing')}
                                className="bg-white text-indigo-800 hover:bg-slate-50 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 w-fit"
                              >
                                <Zap className="w-3.5 h-3.5" /> Explore Automations
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Carousel Navigation dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  {[0, 1, 2].map((slideIdx) => (
                    <button
                      key={slideIdx}
                      onClick={() => setCurrentSlide(slideIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === slideIdx 
                          ? 'bg-white w-6' 
                          : 'bg-white/40 hover:bg-white/60 w-2'
                      }`}
                      aria-label={`Go to slide ${slideIdx + 1}`}
                    />
                  ))}
                </div>

                {/* Left/Right Arrows */}
                <button
                  onClick={() => setCurrentSlide(prev => (prev === 0 ? 2 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white flex items-center justify-center border border-white/20 transition-all text-base opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white flex items-center justify-center border border-white/20 transition-all text-base opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
                >
                  ›
                </button>
              </div>
            )}

            {/* Wix-style Main Site Hero card */}
            {selectedSite ? (
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-80 aspect-video md:aspect-[4/3] relative bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200/80 shrink-0">
                  <img 
                    src={selectedSite.image || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80'} 
                    alt={selectedSite.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm px-2.5 py-1 flex items-center gap-1.5 rounded-full border border-slate-200/50">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      selectedSite.status === 'Live' ? 'bg-emerald-500' : 
                      selectedSite.status === 'Designing' ? 'bg-indigo-500 animate-pulse' : 
                      'bg-amber-500'
                    }`} />
                    <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase">
                      {selectedSite.status === 'Designing' ? 'Designing (5-10 Days)' : selectedSite.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-black uppercase text-indigo-600 tracking-widest leading-none block mb-1">Active Property</span>
                      <h2 className="text-xl font-bold text-slate-900 leading-tight">{selectedSite.name}</h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-slate-400" /> 
                        {selectedSite.status === 'Designing' ? 'Designing in progress...' : selectedSite.url}
                      </span>
                      <span>&bull;</span>
                      <span>Last updated: {selectedSite.lastUpdate || 'Just now'}</span>
                    </div>
                    <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                      {selectedSite.status === 'Designing'
                        ? 'Please allow 5 to 10 business days for us to come up with the site. The layout design and project timeline will automatically update in your dashboard when ready!'
                        : (globalSettings.defaultSeoDescription || 'Manage this website layout, cms content tables, view site reports, or connect customer support.')}
                    </p>
                    
                    {/* Plan-specific Conversion/Status Banner */}
                    {selectedSite && (
                      <div className={`mt-4 border rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs leading-normal ${
                        (selectedSite.planTier || 'DIY') === 'DIY'
                          ? 'bg-amber-50/50 border-amber-200'
                          : 'bg-indigo-50/40 border-indigo-150'
                      }`}>
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${
                            (selectedSite.planTier || 'DIY') === 'DIY' ? 'bg-amber-500' : 'bg-indigo-600 animate-pulse'
                          }`} />
                          <span className="font-semibold text-slate-700">
                            {(selectedSite.planTier || 'DIY') === 'DIY' ? (
                              <>You are building on the <strong className="text-slate-900">DIY Website Builder Plan ($20/mo)</strong>.</>
                            ) : (
                              <>Premium <strong className="text-indigo-700">Done-For-You (DFY) Agency Plan ($50/mo)</strong> Active.</>
                            )}
                          </span>
                        </div>
                        {(selectedSite.planTier || 'DIY') === 'DIY' && (
                          <button
                            onClick={() => setActiveSection('Contact Agency')}
                            className="bg-indigo-650 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all shadow-sm hover:shadow-indigo-600/10 active:translate-y-0.5 shrink-0 self-start sm:self-center"
                          >
                            Upgrade to Done-For-You
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
                    {selectedSite.status === 'Designing' ? (
                      <button 
                        onClick={() => setActiveSection('Project Timeline')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-2"
                      >
                        Review Timeline
                      </button>
                    ) : (
                      <button 
                        onClick={() => setEditingSite(selectedSite)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-2"
                      >
                        Edit Site
                      </button>
                    )}
                    <button 
                      onClick={() => setActiveSection('Contact Agency')}
                      className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                      Request Design Update
                    </button>
                    {selectedSite.status === 'Designing' ? (
                      <a 
                        href={selectedSite.previewUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" /> View Baseline Design
                      </a>
                    ) : (
                      <a 
                        href={selectedSite.previewUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" /> View Live
                      </a>
                    )}
                    <button 
                      onClick={() => {
                        if (selectedSite.status === 'Designing') {
                          alert("Domain connection is locked while our senior team is hand-crafting your custom layout. Please wait 5-10 business days until your site is ready!");
                        } else if (!isOnboardedPaid) {
                          setShowTrialGateModal(true);
                        } else {
                          setManagingDomainFor(selectedSite);
                        }
                      }}
                      className={`bg-white text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${selectedSite.status === 'Designing' ? 'opacity-60 cursor-not-allowed' : 'hover:bg-slate-50'}`}
                    >
                      <Settings className="w-3.5 h-3.5 text-slate-400" /> Connect Domain
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200/80 p-12 text-center flex flex-col items-center justify-center">
                <Globe className="w-10 h-10 text-slate-300 mb-3" />
                <h3 className="font-semibold text-slate-800 text-base">No active site</h3>
                <p className="text-slate-500 text-xs mt-1 max-w-sm">Create a new site or import a template to start managing your brand.</p>
                <button onClick={() => setIsTemplateModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-semibold mt-4 shadow-sm">
                  Create First Site
                </button>
              </div>
            )}

            {/* Quick Overview Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Traffic Widget */}
              <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Visitor Statistics</h3>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">Unique views for this week</p>
                  </div>
                  <button onClick={() => setActiveSection('Analytics')} className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                    Full Analytics <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ANALYTICS_DATA} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '12px',
                          fontSize: '11px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
                        }}
                      />
                      <Area type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorViews)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Quick Help & Agency Support Desk Row */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-150 pb-3.5">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                    <LifeBuoy className="w-5 h-5 text-indigo-650" /> Agency Support Desk
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">Quick access to your agency partners. Open tickets or chat directly.</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider self-start sm:self-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Developers Online
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Support Card 1: Live Chat */}
                <div className="border border-slate-150 rounded-xl p-4 space-y-3 hover:border-slate-350 transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-650 flex items-center justify-center font-bold text-xs"><MessageSquare className="w-4 h-4" /></div>
                      <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                        (selectedSite?.planTier || 'DIY') === 'DIY' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        {(selectedSite?.planTier || 'DIY') === 'DIY' ? 'Upgrade Lock' : 'Unlocked'}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-850 text-sm group-hover:text-indigo-650 transition-colors">Developer Live Chat</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Chat directly with programmers for custom layout tweaks, styling adjustments, or advice.</p>
                  </div>
                  <button 
                    onClick={() => setActiveSection('Contact Agency')}
                    className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    Open Chat Desk
                  </button>
                </div>

                {/* Support Card 2: Log Site Fix Request */}
                <div className="border border-slate-150 rounded-xl p-4 space-y-3 hover:border-slate-350 transition-all flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-650 flex items-center justify-center font-bold text-xs"><FileText className="w-4 h-4" /></div>
                      <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                        (selectedSite?.planTier || 'DIY') === 'DIY' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        {(selectedSite?.planTier || 'DIY') === 'DIY' ? 'Upgrade Lock' : 'Unlocked'}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-855 text-sm group-hover:text-indigo-650 transition-colors">Submit Site Fix Request</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">Submit a ticket for page copy updates, layout modifications, image swaps, or general bugs.</p>
                  </div>
                  <button 
                    onClick={() => setActiveSection('Contact Agency')}
                    className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-750 font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    Submit Fix Ticket
                  </button>
                </div>

                {/* Support Card 3: Direct Email & Phone Desk */}
                <div className="border border-slate-150 rounded-xl p-4 space-y-3 hover:border-slate-350 transition-all flex flex-col justify-between bg-slate-50/50">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-650 flex items-center justify-center font-bold text-xs"><Phone className="w-4 h-4" /></div>
                    <h4 className="font-bold text-slate-855 text-sm">Direct Phone & Email</h4>
                    <div className="text-xs space-y-1.5 font-sans pt-1">
                      <p className="text-slate-655 font-medium">Phone: <a href="tel:+17205550100" className="font-black text-indigo-650 hover:underline">+1 (720) 555-0100</a></p>
                      <p className="text-slate-655 font-medium">Email: <a href="mailto:agency@michaelfreddesigns.com" className="font-black text-indigo-650 hover:underline">agency@michaelfreddesigns.com</a></p>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-bold pt-2 border-t border-slate-200">
                    Office Hours: Mon-Fri, 9am - 6pm EST
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      // CMS Collections view removed

      case 'My Sites':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Your Sites</h1>
                <p className="text-slate-500 text-xs mt-0.5">Manage, preview, and edit your project sites.</p>
              </div>
              <button 
                onClick={() => setIsTemplateModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> New Site
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mySites.map((site) => (
                <div
                  key={site.id}
                  className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-50 border-b border-slate-100">
                    <img 
                      src={site.image} 
                      alt={site.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm px-2.5 py-1 flex items-center gap-1.5 rounded-full border border-slate-200/50">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        site.status === 'Live' ? 'bg-emerald-500' : 
                        site.status === 'Designing' ? 'bg-indigo-500 animate-pulse' : 
                        'bg-amber-500'
                      }`} />
                      <span className="text-[10px] font-bold text-slate-700 uppercase">
                        {site.status === 'Designing' ? 'Designing (5-10 Days)' : site.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{site.name}</h3>
                      <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-slate-300" /> 
                        {site.status === 'Designing' ? 'Designing in progress...' : site.url}
                      </p>
                      {site.status === 'Designing' && (
                        <p className="text-slate-500 text-[10.5px] mt-2.5 font-medium leading-relaxed bg-indigo-50 border border-indigo-100 rounded-xl p-3">
                          Please allow 5 to 10 business days for us to come up with the site. The layout design will update in the dashboard when ready!
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      {site.status === 'Designing' ? (
                        <button 
                          onClick={() => { setSelectedSite(site); setActiveSection('Project Timeline'); }}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-xs font-bold shadow-sm transition-colors text-center animate-pulse"
                        >
                          Review Timeline
                        </button>
                      ) : (
                        <button 
                          onClick={() => setEditingSite(site)}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-xs font-bold shadow-sm transition-colors text-center"
                        >
                          Edit Site
                        </button>
                      )}
                      <button 
                        onClick={() => { setSelectedSite(site); setActiveSection('Contact Agency'); }}
                        className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 rounded-xl text-xs font-bold border border-slate-200 transition-colors text-center"
                      >
                        Request Update
                      </button>
                      {site.status === 'Designing' ? (
                        <a 
                          href={site.previewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-50 hover:bg-slate-100 text-slate-600 p-2 rounded-xl border border-slate-200 transition-all flex items-center justify-center"
                          title="View Baseline Design"
                        >
                          <ExternalLink className="w-4 h-4 text-slate-500" />
                        </a>
                      ) : (
                        <a 
                          href={site.previewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-50 hover:bg-slate-100 text-slate-600 p-2 rounded-xl border border-slate-200 transition-all flex items-center justify-center"
                          title="Preview"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <button 
                        onClick={() => {
                          if (site.status === 'Designing') {
                            alert("Domain connection is locked while our senior team is hand-crafting your custom layout. Please wait 5-10 business days until your site is ready!");
                          } else if (!isOnboardedPaid) {
                            setShowTrialGateModal(true);
                          } else {
                            setManagingDomainFor(site);
                          }
                        }}
                        className={`bg-slate-50 text-slate-600 p-2 rounded-xl border border-slate-200 transition-all flex items-center justify-center ${site.status === 'Designing' ? 'opacity-60 cursor-not-allowed' : 'hover:bg-slate-100'}`}
                        title={site.status === 'Designing' ? "Settings (Locked)" : "Settings"}
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteSite(site.id)}
                        className="bg-rose-50 hover:bg-rose-100 text-rose-600 p-2 rounded-xl border border-rose-200/50 transition-all flex items-center justify-center"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div
                onClick={() => setIsTemplateModalOpen(true)}
                className="cursor-pointer bg-slate-50 hover:bg-slate-100/70 border border-dashed border-slate-300 rounded-2xl transition-all flex flex-col items-center justify-center min-h-[280px] p-6 text-center"
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                  <Plus className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">Request Custom Site</h3>
                <p className="text-slate-400 text-xs mt-1 max-w-[200px]">Let our agency team craft a custom design preset for your brand.</p>
              </div>
            </div>
          </div>
        );

      case 'Project Timeline':
        const completedAssets = dfyAssets.filter(a => a.status === 'Submitted').length;
        const progressPercent = Math.round((completedAssets / dfyAssets.length) * 100);

        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">AI-Speed Delivery Funnel</h1>
                <p className="text-slate-500 text-xs mt-0.5">We design and code in real-time. Review your live draft and request changes instantly.</p>
              </div>
              <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-xl px-3 py-1.5 text-xs text-indigo-700 font-bold uppercase tracking-wider self-start sm:self-center">
                <Clock3 className="w-4 h-4 text-indigo-650 animate-pulse" />
                Est. Delivery: 2-4 Days
              </div>
            </div>

            {/* Pizza Tracker Phase Header (3 Steps) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {[
                  { phase: 1, name: '1. Asset Gathering', desc: 'Provide branding & copy', active: dfyActivePhase === 1, done: dfyActivePhase > 1 },
                  { phase: 2, name: '2. Live Prototype Draft', desc: 'Interact with AI build & revise', active: dfyActivePhase === 2, done: dfyActivePhase > 2 },
                  { phase: 3, name: '3. Domain & Go-Live', desc: 'Point DNS and publish site', active: dfyActivePhase === 3, done: dfyFinalSignoff }
                ].map((p, idx) => (
                  <div 
                    key={p.phase} 
                    onClick={() => {
                      if (p.phase <= dfyActivePhase || (p.phase === 2 && completedAssets > 0) || (p.phase === 3 && dfyFinalSignoff)) {
                        updateDfyPhase(p.phase);
                      } else {
                        alert("Please complete the previous stages to unlock this phase.");
                      }
                    }}
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer text-left ${
                      p.active 
                        ? 'bg-indigo-50 border-indigo-600 shadow-[3px_3px_0px_rgba(79,70,229,0.15)]' 
                        : p.done
                        ? 'bg-emerald-50/40 border-emerald-500/30 hover:bg-slate-50/80'
                        : 'bg-slate-50 border-slate-200 opacity-60 hover:opacity-85'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider ${
                        p.active ? 'text-indigo-700' : p.done ? 'text-emerald-700' : 'text-slate-400'
                      }`}>
                        {p.name}
                      </span>
                      {p.done && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Phase Panel */}
            <AnimatePresence mode="wait">
              {dfyActivePhase === 1 && (
                <motion.div
                  key="phase-1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Phase 1: Gathering Brand Assets</h2>
                      <p className="text-slate-500 text-xs mt-0.5">Provide the brand parameters below. Our AI-assisted developer uses these to instantly generate your layout draft.</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-slate-700">{progressPercent}% Completed</span>
                      <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden mt-1.5 border border-slate-200">
                        <div className="bg-indigo-600 h-full transition-all duration-505" style={{ width: `${progressPercent}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Checklist Table */}
                  <div className="space-y-4 font-sans">
                    {dfyAssets.map((asset, index) => (
                      <div key={asset.id} className="border border-slate-150 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-all bg-slate-50/20">
                        <div className="space-y-1 max-w-xl">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                              {asset.category}
                            </span>
                            <span className={`text-[9.5px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                              asset.status === 'Submitted' ? 'text-emerald-600' : 'text-amber-500'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${asset.status === 'Submitted' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                              {asset.status}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm leading-tight mt-1">{asset.label}</h4>
                          {asset.status === 'Submitted' && (
                            <p className="text-slate-500 text-xs font-semibold mt-1 bg-white border border-slate-155 rounded-lg p-2 truncate">
                              Provided: {asset.type === 'file' ? (asset.fileUrl || 'MockUploadedFile.png') : asset.textVal}
                            </p>
                          )}
                        </div>

                        <div className="shrink-0 flex items-center gap-2">
                          {asset.status !== 'Submitted' ? (
                            asset.type === 'file' ? (
                              <button
                                onClick={() => {
                                  const url = window.prompt(`Simulate file upload for "${asset.label}". Enter a mockup file name or asset URL:`, `${asset.id}_logo_brand.png`);
                                  if (url) {
                                    const copy = [...dfyAssets];
                                    copy[index].status = 'Submitted';
                                    copy[index].fileUrl = url;
                                    updateDfyAssets(copy);
                                  }
                                }}
                                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-750 border border-indigo-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
                              >
                                <Upload className="w-3.5 h-3.5" /> Upload File
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  const val = window.prompt(`Provide text info for "${asset.label}":`, asset.id === 'colors' ? '#4F46E5, Minimalist Dark Grey' : 'About us description...');
                                  if (val) {
                                    const copy = [...dfyAssets];
                                    copy[index].status = 'Submitted';
                                    copy[index].textVal = val;
                                    updateDfyAssets(copy);
                                  }
                                }}
                                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-750 border border-indigo-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
                              >
                                <Plus className="w-3.5 h-3.5" /> Provide Info
                              </button>
                            )
                          ) : (
                            <button
                              onClick={() => {
                                const copy = [...dfyAssets];
                                copy[index].status = 'Pending';
                                copy[index].fileUrl = '';
                                copy[index].textVal = '';
                                updateDfyAssets(copy);
                              }}
                              className="text-rose-600 hover:bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all"
                            >
                              Edit/Reset
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-slate-400 text-xs font-semibold font-sans">
                      {completedAssets} of {dfyAssets.length} assets provided
                    </span>
                    <button
                      onClick={() => {
                        if (completedAssets === 0) {
                          alert("Please upload or provide at least one asset to proceed.");
                          return;
                        }
                        updateDfyPhase(2);
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                    >
                      Approve Assets <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {dfyActivePhase === 2 && (
                <motion.div
                  key="phase-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6"
                >
                  <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Phase 2: Live Interactive Prototype Review</h2>
                      <p className="text-slate-500 text-xs mt-0.5">Interact with the generated prototype. Request revisions or confirm visual sign-off.</p>
                    </div>
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider self-start sm:self-center">
                      Prototype Deployed
                    </span>
                  </div>

                  {/* Browser Mock Screen */}
                  <div className="border-[3px] border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50 font-sans">
                    <div className="bg-slate-200/50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-400" />
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400" />
                      </div>
                      <div className="bg-white px-6 py-0.5 rounded-lg border border-slate-200/50 text-[10px] text-slate-400 font-semibold truncate max-w-sm">
                        https://draft-preview-{selectedSite?.id || 'site'}.michaelfreddesigns.com
                      </div>
                      <div className="w-8" />
                    </div>
                    
                    <div className="p-8 text-center bg-white space-y-4">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto"><Eye className="w-6 h-6" /></div>
                      <h3 className="font-extrabold text-slate-805 text-sm">Custom Live AI Prototype</h3>
                      <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                        Verify fully coded responsive layouts, custom copy alignment, navigation links, and dynamic templates in real-time.
                      </p>
                      <button
                        onClick={() => {
                          alert(`Opening prototype live draft preview at: /preview/${selectedSite?.id}`);
                          window.open(`/preview/${selectedSite?.id}`, '_blank');
                        }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors inline-flex items-center gap-1.5"
                      >
                        Launch Interactive Draft <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Revision Round Panel */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 font-sans">
                    <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Submit Layout & Copy Adjustments</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Review all sections. If you need any tweaks (e.g. text edits, swapping photos, moving header blocks), log them below. If the draft is perfect, click **Final Sign-off**.
                    </p>

                    <div className="space-y-3">
                      <textarea
                        value={dfyRevisionNotes}
                        onChange={(e) => setDfyRevisionNotes(e.target.value)}
                        placeholder="e.g. The homepage looks amazing! Can we make the main call-to-action button color green instead of indigo to match our branding, and change the about description to..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:border-indigo-400 focus:outline-none min-h-[90px] leading-relaxed font-medium"
                      />

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => {
                            if (!dfyRevisionNotes.trim()) return alert("Please type your adjustments in the textbox before submitting.");
                            setDfyRevisionSubmitted(true);
                            localStorage.setItem('dfy_revision_submitted', 'true');
                            alert("📝 Adjustments submitted. Developer has been notified to modify the AI-generated code blocks.");
                          }}
                          className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors"
                        >
                          Submit Revision List
                        </button>
                        <button
                          onClick={() => {
                            setDfyFinalSignoff(true);
                            localStorage.setItem('dfy_final_signoff', 'true');
                            updateDfyPhase(3);
                            alert("🎉 Final Sign-off Confirmed! Custom portal is ready for domain launch.");
                          }}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md shadow-emerald-600/10 flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-4 h-4" /> Final Sign-off & Approve Build
                        </button>
                      </div>

                      {dfyRevisionSubmitted && (
                        <div className="bg-indigo-50 border border-indigo-150 rounded-xl p-3 text-xs text-indigo-800 font-semibold leading-relaxed">
                          ⚙️ Revision list in progress: "{dfyRevisionNotes}"
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button onClick={() => updateDfyPhase(1)} className="text-xs font-bold text-slate-500 hover:text-slate-850 transition-all font-sans">
                      Back to Assets
                    </button>
                  </div>
                </motion.div>
              )}

              {dfyActivePhase === 3 && (
                <motion.div
                  key="phase-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md text-center space-y-6 flex flex-col items-center justify-center font-sans"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-[4px] border-emerald-500 flex items-center justify-center text-emerald-500 shadow-sm animate-bounce">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Your Website is Ready to Launch!</h2>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto font-medium">
                      Congratulations! The AI code assembly is approved. The final step is connecting your custom domain to point to our secure hosting.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-4 max-w-lg w-full">
                    <h4 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-1.5">
                      <Settings className="w-4 h-4 text-indigo-600" /> DNS Instructions
                    </h4>
                    <div className="space-y-3 text-xs leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center text-[10px] font-bold text-indigo-650 shrink-0">1</span>
                        <p className="text-slate-650">Enter your custom domain in the manager portal (e.g. `mybrand.com`).</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-150 flex items-center justify-center text-[10px] font-bold text-indigo-650 shrink-0">2</span>
                        <p className="text-slate-650">Add a CNAME DNS record in GoDaddy, Namecheap or Google Domains pointing to: `hosting.michaelfreddesigns.com`.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setManagingDomainFor(selectedSite);
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all flex items-center gap-1.5"
                    >
                      Connect Domain Now <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        alert("🚀 Website published to production! Handover keys emailed to owner.");
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md shadow-emerald-600/10 transition-all"
                    >
                      Go Live!
                    </button>
                  </div>

                  <div className="pt-2">
                    <button onClick={() => updateDfyPhase(2)} className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-all font-sans">
                      Back to Review Draft
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 'Contact Agency':
      case 'Communications':
      case 'Support Tickets':
        return (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Agency Collaboration Hub</h1>
                <p className="text-slate-500 text-xs mt-0.5">Submit fix requests, track support tickets, and chat directly with your dedicated developers.</p>
              </div>
              <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm text-xs shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-700">Dedicated Team Online</span>
              </div>
            </div>

            {/* Main Hub Grid */}
            <div className="relative">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-300 ${
                (selectedSite?.planTier || 'DIY') === 'DIY' ? 'blur-[4px] select-none pointer-events-none opacity-40' : ''
              }`}>
              {/* Left Column: Chat & Broadcasts (7 cols) */}
              <div className="lg:col-span-7 space-y-6 flex flex-col">
                {/* 1. Live Chat */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[460px]">
                  <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm shadow-indigo-600/20">A</div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-xs leading-none">Developer Chat Desk</h3>
                        <span className="text-[9px] font-semibold text-emerald-600 mt-1 block">Live &bull; Typical reply under 15m</span>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable messages */}
                  <div className="flex-grow p-5 space-y-4 overflow-y-auto bg-slate-50/20 max-h-[350px]">
                    {chatMessages.map((msg) => {
                      const isClient = msg.sender === 'client';
                      return (
                        <div key={msg.id} className={`flex gap-3 max-w-[85%] ${isClient ? 'ml-auto flex-row-reverse' : ''}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 shadow-sm ${
                            isClient ? 'bg-slate-700 text-white' : 'bg-indigo-100 text-indigo-700'
                          }`}>
                            {msg.initials}
                          </div>
                          <div className={`p-3 rounded-2xl shadow-sm ${
                            isClient 
                              ? 'bg-indigo-600 text-white rounded-tr-none' 
                              : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
                          }`}>
                            <p className="text-xs leading-relaxed font-medium">{msg.text}</p>
                            <span className={`text-[8px] font-bold mt-1.5 block ${
                              isClient ? 'text-indigo-200' : 'text-slate-400'
                            }`}>
                              {msg.date}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 border-t border-slate-200 bg-white">
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!newChatMessage.trim()) return;
                        const newMsg = {
                          id: `msg-${Date.now()}`,
                          sender: 'client',
                          initials: profileName ? profileName.charAt(0) : 'C',
                          name: 'You',
                          text: newChatMessage.trim(),
                          date: 'Just now'
                        };
                        setChatMessages(prev => [...prev, newMsg]);
                        setNewChatMessage('');
                      }}
                      className="relative flex items-center"
                    >
                      <input 
                        type="text" 
                        value={newChatMessage}
                        onChange={(e) => setNewChatMessage(e.target.value)}
                        placeholder="Type a message to your development team..." 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-xs outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all font-medium"
                      />
                      <button 
                        type="submit"
                        className="absolute right-2 p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                </div>

                {/* 2. Agency Notifications / Announcements */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Bell className="w-4 h-4 text-slate-500" /> Agency Notifications
                    </h3>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      {agencyNotifications.filter(n => !n.read).length} Unread
                    </span>
                  </div>

                  <div className="space-y-3">
                    {agencyNotifications.map((ann) => (
                      <div 
                        key={ann.id}
                        onClick={() => {
                          setAgencyNotifications(prev => prev.map(n => n.id === ann.id ? { ...n, read: true } : n));
                        }}
                        className={`p-3.5 border rounded-xl transition-all cursor-pointer flex gap-3 ${
                          ann.read 
                            ? 'border-slate-100 bg-slate-50/30 opacity-70 hover:opacity-100' 
                            : 'border-indigo-100 bg-indigo-50/20 hover:bg-indigo-50/40'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {ann.read ? (
                            <CheckCircle2 className="w-4 h-4 text-slate-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[8px] font-black animate-pulse">!</div>
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-800 leading-tight">{ann.title}</h4>
                            <span className="text-[9px] font-bold text-slate-400 whitespace-nowrap">{ann.date}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{ann.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Ticket Submission & Active List (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* 1. Ticket Submission Form */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <LifeBuoy className="w-4 h-4 text-slate-500" /> Submit Site Fix Request
                    </h3>
                    <p className="text-slate-400 text-[10px] mt-0.5">Need a change or something fixed? Log it here directly.</p>
                  </div>

                  <div className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Target Page</label>
                      <select 
                        value={requestPage}
                        onChange={(e) => setRequestPage(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:bg-white focus:border-indigo-400 focus:outline-none"
                      >
                        <option value="Home">Home Page</option>
                        <option value="Services">Services</option>
                        <option value="About">About Us</option>
                        <option value="Contact">Contact</option>
                        <option value="Entire Site">Entire Site / Global</option>
                        <option value="Custom Page">Custom / Other Page</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Request Type</label>
                      <select 
                        value={requestType}
                        onChange={(e) => setRequestType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:bg-white focus:border-indigo-400 focus:outline-none"
                      >
                        <option value="Content Update">Text / Copy Update</option>
                        <option value="Image Update">Swap / Add Images</option>
                        <option value="Design Change">Styling / Layout Change</option>
                        <option value="Technical Fix">Bug / Technical Issue</option>
                        <option value="Custom Request">Custom / Other Request</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Describe the change / issue</label>
                      <textarea 
                        value={requestDescription}
                        onChange={(e) => setRequestDescription(e.target.value)}
                        placeholder="e.g. Please update our contact number to 555-0199 and fix the text alignment of the sub-header."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none min-h-[90px] leading-relaxed font-medium"
                      />
                    </div>

                    {/* Upload button wrapper */}
                    <div className="space-y-1">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Reference Assets</label>
                      <div 
                        onClick={() => {
                          const mockUrl = window.prompt("Upload assets. Enter an image URL or reference text file:", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600");
                          if (mockUrl) setRequestFiles(prev => [...prev, mockUrl]);
                        }}
                        className="border border-dashed border-slate-200 rounded-xl p-4 text-center bg-slate-50 hover:bg-slate-100/50 cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <p className="text-[10px] font-bold text-slate-600">Click to upload files</p>
                      </div>
                      
                      {requestFiles.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {requestFiles.map((file, i) => (
                            <div key={i} className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                              <span className="text-[8px] font-bold text-slate-650 truncate max-w-[100px]">{file}</span>
                              <button 
                                onClick={() => setRequestFiles(prev => prev.filter((_, idx) => idx !== i))}
                                className="text-rose-500 hover:text-rose-700 text-[10px] font-black"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button 
                      onClick={() => {
                        if (!requestDescription.trim()) return alert("Please specify the change description.");
                        setRequestStatusMsg("submitting...");
                        setTimeout(() => {
                          const newTkt = {
                            id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
                            title: requestDescription.length > 40 ? requestDescription.substring(0, 40) + '...' : requestDescription,
                            status: 'In Progress',
                            date: 'Just now',
                            type: requestType,
                            description: requestDescription,
                            files: requestFiles
                          };
                          setTickets(prev => [newTkt, ...prev]);
                          setRequestDescription('');
                          setRequestFiles([]);
                          setRequestStatusMsg("✓ Ticket submitted successfully!");
                          setTimeout(() => setRequestStatusMsg(''), 4000);
                        }, 800);
                      }}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 hover:-translate-y-0.5 transition-all"
                    >
                      {requestStatusMsg || "Log Ticket with Agency"}
                    </button>
                  </div>
                </div>

                {/* 2. Ticket Tracking List */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-4">
                  <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                      My Support Tickets
                    </h3>
                    <span className="text-[10px] font-bold text-slate-500">
                      {tickets.length} total
                    </span>
                  </div>

                  <div className="space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar font-sans">
                    {tickets.map(ticket => (
                      <div 
                        key={ticket.id} 
                        className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl hover:border-slate-200 transition-all flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${ticket.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                            {ticket.status === 'Completed' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock3 className="w-3.5 h-3.5" />}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[8px] font-bold text-slate-400">{ticket.id}</span>
                              <span className="text-slate-300 text-[8px]">&bull;</span>
                              <span className="text-[8px] font-bold text-indigo-600 uppercase tracking-wider">{ticket.type}</span>
                            </div>
                            <h4 className="font-bold text-slate-700 text-xs truncate mt-0.5 leading-tight">{ticket.title}</h4>
                          </div>
                        </div>
                        
                        <div className="text-right shrink-0">
                          <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${
                            ticket.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {ticket.status}
                          </span>
                          <span className="text-[8px] text-slate-400 font-bold block mt-1">{ticket.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Direct Agency Contact Desk */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-slate-500" /> Direct Agency Contact Desk
                    </h3>
                    <p className="text-slate-400 text-[10px] mt-0.5">Reach our desk directly via phone or email.</p>
                  </div>

                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 border border-slate-100 p-3.5 rounded-xl font-sans">
                    <div className="space-y-1">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Direct Phone</p>
                      <a href="tel:+17205550100" className="font-black text-indigo-650 hover:underline flex items-center gap-1">
                        +1 (720) 555-0100
                      </a>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Direct Email</p>
                      <a href="mailto:agency@michaelfreddesigns.com" className="font-black text-indigo-650 hover:underline flex items-center gap-1">
                        agency@michaelfreddesigns.com
                      </a>
                    </div>
                    <div className="sm:col-span-2 pt-2 border-t border-slate-200/50 mt-1">
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Office Hours</p>
                      <p className="font-bold text-slate-700 mt-0.5">Mon - Fri, 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Closing of grid relative container, plus the upgrade portal overlay */}
              </div>

              {(selectedSite?.planTier || 'DIY') === 'DIY' && (
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-slate-900/10 backdrop-blur-[2px] z-20 rounded-2xl">
                  <div className="bg-white/95 backdrop-blur border border-slate-250 shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center space-y-6 transform hover:scale-[1.01] transition-transform">
                    {isUpgrading ? (
                      <div className="py-12 space-y-4 flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full border-4 border-slate-205 border-t-indigo-600 animate-spin" />
                        <div className="space-y-1">
                          <h3 className="font-extrabold text-slate-800 text-sm">Processing Premium Upgrade...</h3>
                          <p className="text-slate-400 text-xs">Securing Stripe checkout & activating Done-For-You features.</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="w-14 h-14 bg-indigo-50 text-indigo-650 rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-indigo-100">
                          <Sparkles className="w-6 h-6 animate-pulse" />
                        </div>
                        
                        <div className="space-y-2">
                          <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">Let Our Agency Do It For You</h2>
                          <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed font-medium">
                            Upgrade to our <strong className="text-indigo-650">Done-For-You (DFY) Plan</strong> for just $50/mo. Get unlimited site edits, custom copy, new layouts, and priority developer syncs.
                          </p>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-3 font-sans">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-1.5">Done-For-You Privileges</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                            {[
                              { label: 'Live Dev Chat', desc: 'Direct desk line to programmers' },
                              { label: 'Unlimited Tweaks', desc: 'Request text, image & layout changes' },
                              { label: 'SEO & Analytics', desc: 'Google Analytics & ranking setup' },
                              { label: '24h Fast Delivery', desc: 'All updates built & deployed' }
                            ].map(feat => (
                              <div key={feat.label} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-xs font-bold text-slate-805 leading-tight">{feat.label}</p>
                                  <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{feat.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2.5 pt-2">
                          <button
                            onClick={() => {
                              setIsUpgrading(true);
                              setTimeout(() => {
                                setIsUpgrading(false);
                                handleUpdatePlanTier(selectedSite.id, 'DFY');
                                alert("💳 Stripe Invoice Paid! Done-For-You portal is now active. Your dedicated developer is ready.");
                              }, 1500);
                            }}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:translate-y-0.5"
                          >
                            Upgrade to Done-For-You ($50/mo)
                          </button>
                          <p className="text-[10px] text-slate-400 font-semibold">
                            Only an extra $30/mo over your current DIY plan. Cancel or downgrade anytime.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'Analytics':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics & Reports</h1>
                <p className="text-slate-500 text-xs mt-0.5">Real-time metrics for your active site.</p>
              </div>
              <div className="relative min-w-[200px]">
                <button 
                  onClick={() => setIsSiteSelectorOpen(!isSiteSelectorOpen)}
                  className="w-full flex items-center justify-between gap-3 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm hover:bg-slate-50 transition-colors"
                >
                  <span className="truncate">{selectedSite?.name || 'Select Property'}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <AnimatePresence>
                  {isSiteSelectorOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 top-full mt-1.5 w-full bg-white border border-slate-200 rounded-lg shadow-lg z-50 overflow-hidden divide-y divide-slate-100"
                    >
                      {mySites.map((site) => (
                        <button
                          key={site.id}
                          onClick={() => { setSelectedSite(site); setIsSiteSelectorOpen(false); }}
                          className="w-full px-4 py-2 hover:bg-slate-50 transition-colors text-left text-xs font-semibold text-slate-700"
                        >
                          {site.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Views', value: '45,210', change: '+12.5%', isPos: true },
                { label: 'Unique Visitors', value: '12,850', change: '+5.2%', isPos: true },
                { label: 'Bounce Rate', value: '42.3%', change: '-2.1%', isPos: true },
                { label: 'Session Duration', value: '2m 45s', change: '+12s', isPos: true }
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-800 mb-1">{stat.value}</p>
                  <span className={`text-[10px] font-bold ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{stat.change} vs last month</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm mb-6">Traffic Trends</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ANALYTICS_DATA} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#white', 
                          border: '1px solid #e2e8f0', 
                          borderRadius: '12px',
                          fontSize: '11px'
                        }}
                      />
                      <Area type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorTrend)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm mb-6">Top Visited Pages</h3>
                <div className="space-y-4">
                  {[
                    { path: '/', views: '12,402', share: '62%' },
                    { path: '/services', views: '4,215', share: '21%' },
                    { path: '/work', views: '3,840', share: '12%' }
                  ].map((page) => (
                    <div key={page.path} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-none">
                      <div>
                        <p className="text-xs font-semibold text-slate-800">{page.path}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{page.views} views</p>
                      </div>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">{page.share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'Payments':
        return (
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Payments & Balance</h1>
              <p className="text-slate-500 text-xs mt-0.5">Manage billing credits and client cards.</p>
            </div>
            
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Prepaid Credit Balance</p>
                  <p className="text-3xl font-black text-slate-800">$0.00</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors">
                  Add Credit
                </button>
              </div>
              
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Saved Cards</h3>
                <div className="border border-slate-200 rounded-xl p-4 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 bg-slate-800 text-white rounded flex items-center justify-center font-bold text-[9px] tracking-widest shrink-0">VISA</div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">•••• •••• •••• 4242</p>
                      <p className="text-[10px] text-slate-400 font-medium">Expires 12/28</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Primary</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Invoices':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Invoices</h1>
              <p className="text-slate-500 text-xs mt-0.5">Download past payment receipts and invoices.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-3.5">Invoice Date</th>
                    <th className="px-6 py-3.5">Invoice ID</th>
                    <th className="px-6 py-3.5">Amount</th>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5 text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs font-medium">
                  <tr>
                    <td className="px-6 py-4.5">Mar 15, 2026</td>
                    <td className="px-6 py-4.5 text-slate-400 font-mono">INV-00124</td>
                    <td className="px-6 py-4.5 font-bold">$299.00</td>
                    <td className="px-6 py-4.5">
                      <span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[9px] font-bold">Paid</span>
                    </td>
                    <td className="px-6 py-4.5 text-right">
                      <button className="text-indigo-600 hover:text-indigo-700 font-bold">Download</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4.5">Feb 15, 2026</td>
                    <td className="px-6 py-4.5 text-slate-400 font-mono">INV-00120</td>
                    <td className="px-6 py-4.5 font-bold">$299.00</td>
                    <td className="px-6 py-4.5">
                      <span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[9px] font-bold">Paid</span>
                    </td>
                    <td className="px-6 py-4.5 text-right">
                      <button className="text-indigo-600 hover:text-indigo-700 font-bold">Download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'E-Commerce':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Store Settings</h1>
              <p className="text-slate-500 text-xs mt-0.5">Configure storefront products and stripe checkouts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-indigo-600" /> Stripe Integration
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">Collect client checkouts on products.</p>
                  </div>
                  <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 text-[9px] font-bold uppercase rounded-full">Action Needed</span>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl text-center space-y-4">
                  <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-xs">Connect merchant checkout</h4>
                    <p className="text-slate-500 text-[11px] max-w-md mx-auto">
                      Stripe authorization is pending. Hook up your account to process sales.
                    </p>
                  </div>
                  <button className="bg-[#635BFF] hover:bg-[#5851E5] text-white px-5 py-2 rounded-lg text-xs font-bold shadow-sm transition-colors mx-auto flex items-center gap-2">
                    Connect with Stripe
                  </button>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <Package className="w-4 h-4 text-slate-400" /> Products Info
                </h3>
                
                <div className="space-y-2">
                  <button className="w-full text-left p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div>
                      <p className="font-semibold text-slate-700 text-xs">Add Product item</p>
                      <p className="text-[10px] text-slate-400">Digital / Physical</p>
                    </div>
                    <Plus className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                  </button>
                  <button className="w-full text-left p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div>
                      <p className="font-semibold text-slate-700 text-xs">Inventory levels</p>
                      <p className="text-[10px] text-slate-400">0 Products configured</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Marketing':
        return (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <Zap className="w-6 h-6 text-indigo-500" /> Marketing & Automations
                </h1>
                <p className="text-slate-500 text-sm mt-0.5">Automated flows that grow your revenue while you sleep.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Growth Plan — Upgrade Available
                </span>
              </div>
            </div>

            {/* Shopify Store Connection Banner */}
            <div className="bg-gradient-to-br from-[#96bf48]/10 via-white to-indigo-50/30 border border-[#96bf48]/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#96bf48]/15 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-6 h-6 text-[#5e8e3e]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Shopify Store — Not Connected</h3>
                  <p className="text-slate-500 text-xs mt-0.5">Connect your Shopify store to unlock all automation flows below.</p>
                </div>
              </div>
              <button className="bg-[#96bf48] hover:bg-[#7da83c] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-2 shrink-0 whitespace-nowrap">
                <ArrowUpRight className="w-4 h-4" /> Connect Shopify Store
              </button>
            </div>

            {/* Automation Cards Grid */}
            <div>
              <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-500" /> Active Automation Flows
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: ShoppingCart,
                    title: 'Abandoned Cart Recovery',
                    desc: 'Automatically email + SMS customers who leave without checking out. Recovers 10–15% of lost revenue on average.',
                    platform: 'Klaviyo + Shopify',
                    status: 'inactive',
                    stat: '~$0 recovered',
                    statLabel: 'This Month',
                    color: 'indigo',
                    tier: 'Growth'
                  },
                  {
                    icon: Mail,
                    title: 'Welcome Email Series',
                    desc: 'A 3-email drip sent to every new subscriber. Introduces your brand, best sellers, and a welcome discount.',
                    platform: 'Klaviyo',
                    status: 'inactive',
                    stat: '0 new subscribers',
                    statLabel: 'This Month',
                    color: 'violet',
                    tier: 'Growth'
                  },
                  {
                    icon: Repeat2,
                    title: 'Post-Purchase Follow-Up',
                    desc: 'Thank customers after purchase, request a review, and suggest related products 7 days later.',
                    platform: 'Shopify Email',
                    status: 'inactive',
                    stat: '0 orders',
                    statLabel: 'This Month',
                    color: 'emerald',
                    tier: 'Growth'
                  },
                  {
                    icon: Phone,
                    title: 'SMS Order Updates',
                    desc: 'Real-time text message updates for order confirmation, shipping, and delivery. Builds trust and reduces support tickets.',
                    platform: 'Postscript / Shopify',
                    status: 'inactive',
                    stat: '0 SMS sent',
                    statLabel: 'This Month',
                    color: 'sky',
                    tier: 'Growth'
                  },
                  {
                    icon: Repeat2,
                    title: 'Win-Back Campaign',
                    desc: 'Re-engage customers who haven\'t purchased in 90 days with a personalized offer. Average 20% re-activation rate.',
                    platform: 'Klaviyo',
                    status: 'inactive',
                    stat: '0 customers',
                    statLabel: 'At-Risk',
                    color: 'orange',
                    tier: 'Growth'
                  },
                  {
                    icon: Gift,
                    title: 'Birthday & Loyalty Offers',
                    desc: 'Surprise customers on their birthday with a discount code. Automated via Klaviyo customer profiles.',
                    platform: 'Klaviyo',
                    status: 'inactive',
                    stat: '0 sent',
                    statLabel: 'This Year',
                    color: 'rose',
                    tier: 'Growth'
                  },
                ].map((automation) => {
                  const colorMap: Record<string, { badge: string; icon: string; statBg: string }> = {
                    indigo: { badge: 'bg-indigo-100 text-indigo-700', icon: 'text-indigo-500', statBg: 'bg-indigo-50' },
                    violet: { badge: 'bg-violet-100 text-violet-700', icon: 'text-violet-500', statBg: 'bg-violet-50' },
                    emerald: { badge: 'bg-emerald-100 text-emerald-700', icon: 'text-emerald-500', statBg: 'bg-emerald-50' },
                    sky: { badge: 'bg-sky-100 text-sky-700', icon: 'text-sky-500', statBg: 'bg-sky-50' },
                    orange: { badge: 'bg-orange-100 text-orange-700', icon: 'text-orange-500', statBg: 'bg-orange-50' },
                    rose: { badge: 'bg-rose-100 text-rose-700', icon: 'text-rose-500', statBg: 'bg-rose-50' },
                  };
                  const c = colorMap[automation.color];
                  return (
                    <div key={automation.title} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 group">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-xl ${c.statBg} flex items-center justify-center shrink-0`}>
                            <automation.icon className={`w-5 h-5 ${c.icon}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-bold text-slate-800 text-sm leading-tight">{automation.title}</h3>
                              <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${c.badge}`}>{automation.tier}</span>
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium mt-0.5 block">{automation.platform}</span>
                          </div>
                        </div>
                        <div className="shrink-0 flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-slate-300" />
                          <span className="text-[10px] font-semibold text-slate-400">Inactive</span>
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{automation.desc}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div>
                          <p className="text-base font-black text-slate-300">{automation.stat}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{automation.statLabel}</p>
                        </div>
                        <button
                          onClick={() => alert('Upgrade to Growth Plan to activate this automation.')}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm opacity-80 group-hover:opacity-100"
                        >
                          <Zap className="w-3 h-3" /> Activate
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upgrade Upsell Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sparkles className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <Megaphone className="w-5 h-5 text-indigo-200" />
                    <span className="text-indigo-200 text-xs font-bold uppercase tracking-widest">Growth Plan — Managed by Michaelfred Designs</span>
                  </div>
                  <h2 className="text-2xl font-black leading-snug">Let automations grow your revenue while you focus on your business.</h2>
                  <p className="text-indigo-200 text-sm leading-relaxed">We set up and manage all 6 automation flows for you — Klaviyo, SMS, abandoned cart, reviews, and loyalty campaigns. Average clients see 25–40% revenue lift within 90 days.</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {['All 6 automations live', 'Klaviyo setup & management', 'Monthly performance reports', 'SMS campaigns included', 'A/B split testing'].map(f => (
                      <span key={f} className="bg-white/15 border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-300" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center min-w-[180px]">
                    <p className="text-3xl font-black">$497</p>
                    <p className="text-indigo-200 text-xs font-semibold">/month managed</p>
                  </div>
                  <button
                    onClick={() => setActiveSection('Contact Agency')}
                    className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Talk to Us
                  </button>
                  <p className="text-indigo-300 text-[10px] text-center font-medium">No long-term contract required</p>
                </div>
              </div>
            </div>

            {/* Platform Status Cards */}
            <div>
              <h2 className="text-sm font-bold text-slate-700 mb-4">Connected Platforms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Klaviyo', desc: 'Email & SMS automation', logo: '📧', status: 'Not Connected', color: 'amber' },
                  { name: 'Postscript', desc: 'SMS marketing & order updates', logo: '📱', status: 'Not Connected', color: 'amber' },
                  { name: 'Shopify Flow', desc: 'Native store automation builder', logo: '⚡', status: 'Requires Shopify', color: 'slate' },
                ].map(platform => (
                  <div key={platform.name} className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xl">{platform.logo}</div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{platform.name}</p>
                        <p className="text-slate-400 text-[10px] font-medium">{platform.desc}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                      platform.color === 'amber' ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {platform.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Request Update':
      case 'Inbox Messages': {
        const filteredSubmissions = submissions.filter(sub => {
          const matchesSearch = 
            sub.name.toLowerCase().includes(inboxSearchQuery.toLowerCase()) ||
            sub.email.toLowerCase().includes(inboxSearchQuery.toLowerCase()) ||
            sub.message.toLowerCase().includes(inboxSearchQuery.toLowerCase());
            
          if (!matchesSearch) return false;

          if (inboxFilter === 'all') {
            return sub.status !== 'archived';
          }
          return sub.status === inboxFilter;
        });

        return (
          <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Inbox Messages</h1>
                <p className="text-slate-500 text-sm mt-0.5">
                  Manage form submissions and leads sent by visitors of <strong className="text-slate-700">{selectedSite?.name || 'your website'}</strong>.
                </p>
              </div>
              
              {mySites.length > 1 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400">Select Site:</span>
                  <select
                    value={selectedSite?.id || ''}
                    onChange={(e) => {
                      const matched = mySites.find(s => s.id === e.target.value);
                      if (matched) setSelectedSite(matched);
                    }}
                    className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 cursor-pointer"
                  >
                    {mySites.map(site => (
                      <option key={site.id} value={site.id}>{site.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row h-[650px]">
              {/* Left Column: Submissions List */}
              <div className="w-full md:w-[320px] border-r border-slate-200 flex flex-col shrink-0 bg-slate-50/15">
                {/* Search Bar */}
                <div className="p-4 border-b border-slate-200 bg-white">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search inbox..."
                      value={inboxSearchQuery}
                      onChange={(e) => setInboxSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200/60 rounded-xl pl-9 pr-4 py-2 text-xs outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all font-medium text-slate-700 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="px-4 py-2 border-b border-slate-150 flex gap-1 items-center overflow-x-auto scrollbar-none shrink-0 bg-white">
                  {(['all', 'unread', 'read', 'archived'] as const).map((filter) => {
                    const count = submissions.filter(sub => {
                      if (filter === 'all') return sub.status !== 'archived';
                      return sub.status === filter;
                    }).length;
                    
                    const isActive = inboxFilter === filter;
                    return (
                      <button
                        key={filter}
                        onClick={() => setInboxFilter(filter)}
                        className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-colors shrink-0 ${
                          isActive 
                            ? 'bg-slate-900 text-white' 
                            : 'bg-white hover:bg-slate-100 text-slate-500 border border-slate-200/60'
                        }`}
                      >
                        {filter} {count > 0 && `(${count})`}
                      </button>
                    );
                  })}
                </div>

                {/* List Body */}
                <div className="flex-1 overflow-y-auto divide-y divide-slate-100 bg-white">
                  {isSubmissionsLoading ? (
                    <div className="h-64 flex flex-col items-center justify-center gap-3 text-slate-400">
                      <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Loading...</span>
                    </div>
                  ) : filteredSubmissions.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 flex flex-col items-center justify-center h-full">
                      <Mail className="w-8 h-8 opacity-30 mb-3" />
                      <p className="text-xs font-bold uppercase tracking-wider">No Messages</p>
                      <p className="text-[9px] leading-relaxed mt-1 text-slate-400/80 max-w-[180px]">
                        No submissions found matching this filter.
                      </p>
                    </div>
                  ) : (
                    filteredSubmissions.map((sub) => {
                      const isSelected = selectedMessage?.id === sub.id;
                      const isUnread = sub.status === 'unread';
                      const formattedTime = new Date(sub.created_at).toLocaleDateString([], {
                        month: 'short',
                        day: 'numeric'
                      });

                      return (
                        <div
                          key={sub.id}
                          onClick={() => {
                            setSelectedMessage(sub);
                            if (isUnread) handleUpdateSubmissionStatus(sub.id, 'read');
                          }}
                          className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors relative flex flex-col gap-1.5 ${
                            isSelected ? 'bg-indigo-50/40 border-l-4 border-indigo-600 pl-3' : 'border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-xs truncate ${isUnread ? 'text-slate-900 font-extrabold' : 'text-slate-700 font-bold'}`}>
                              {sub.name}
                            </span>
                            <span className="text-[9px] font-semibold text-slate-400 shrink-0">
                              {formattedTime}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400 truncate leading-none">
                            {sub.email}
                          </span>
                          <p className={`text-[10px] line-clamp-2 leading-relaxed ${isUnread ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                            {sub.message}
                          </p>
                          {isUnread && (
                            <span className="absolute right-4 bottom-4 w-2 h-2 bg-indigo-600 rounded-full" />
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Submission Details */}
              <div className="flex-1 flex flex-col bg-white">
                {selectedMessage ? (
                  <div className="flex-1 flex flex-col h-full overflow-hidden">
                    {/* Detail Header */}
                    <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 bg-slate-50/20">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black uppercase shrink-0 text-sm border border-indigo-100">
                          {selectedMessage.name.substring(0, 2)}
                        </div>
                        <div>
                          <h2 className="font-extrabold text-slate-800 text-sm leading-tight">{selectedMessage.name}</h2>
                          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[10px] font-semibold text-slate-400">
                            <a href={`mailto:${selectedMessage.email}`} className="text-indigo-600 hover:underline flex items-center gap-1">
                              <Mail className="w-3 h-3" /> {selectedMessage.email}
                            </a>
                            {selectedMessage.phone && (
                              <span className="flex items-center gap-1">
                                <Phone className="w-3 h-3" /> {selectedMessage.phone}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        {selectedMessage.status === 'unread' ? (
                          <button
                            onClick={() => handleUpdateSubmissionStatus(selectedMessage.id, 'read')}
                            className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-slate-800 transition-colors bg-white shadow-sm"
                            title="Mark as Read"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUpdateSubmissionStatus(selectedMessage.id, 'unread')}
                            className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-indigo-600 transition-colors bg-white shadow-sm"
                            title="Mark as Unread"
                          >
                            <Clock className="w-4 h-4" />
                          </button>
                        )}
                        
                        {selectedMessage.status !== 'archived' ? (
                          <button
                            onClick={() => handleUpdateSubmissionStatus(selectedMessage.id, 'archived')}
                            className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-amber-600 transition-colors bg-white shadow-sm"
                            title="Archive Message"
                          >
                            <Archive className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUpdateSubmissionStatus(selectedMessage.id, 'read')}
                            className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-indigo-600 transition-colors bg-white shadow-sm"
                            title="Restore from Archive"
                          >
                            <Repeat2 className="w-4 h-4" />
                          </button>
                        )}
                        
                        <button
                          onClick={() => handleDeleteSubmission(selectedMessage.id)}
                          className="p-2 border border-slate-200 rounded-xl hover:bg-red-50 text-slate-600 hover:text-red-600 transition-colors bg-white shadow-sm"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Detail Body */}
                    <div className="flex-1 p-6 overflow-y-auto bg-slate-50/15">
                      <div className="max-w-2xl bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-fade-in">
                        <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
                          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Message Body</span>
                          <span className="text-[10px] font-semibold text-slate-400">
                            {new Date(selectedMessage.created_at).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                          {selectedMessage.message}
                        </p>
                      </div>

                      {/* Reply Link */}
                      <div className="max-w-2xl mt-6 flex justify-start">
                        <a
                          href={`mailto:${selectedMessage.email}?subject=Regarding your message on ${selectedSite?.name || 'our website'}`}
                          className="bg-[#1A1A1A] hover:bg-black text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all hover:-translate-y-0.5 shadow-md flex items-center gap-2"
                        >
                          <Send className="w-3 h-3" />
                          Reply via Email
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-slate-400 text-center h-full bg-slate-50/5">
                    <Mail className="w-12 h-12 opacity-25 mb-4" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Select a Message</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-2 max-w-xs font-medium">
                      Select a message from the list to review the sender details, read their message, and take actions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }

      case 'Settings':
        return (
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Client Account Settings</h1>
              <p className="text-slate-500 text-xs mt-0.5">Configure user details and brand assets.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <h3 className="text-slate-800 font-bold text-sm border-b border-slate-100 pb-2">Profile Information</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      value={profileName} 
                      onChange={(e) => setProfileName(e.target.value)} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Company / Brand</label>
                    <input 
                      type="text" 
                      value={profileCompany} 
                      onChange={(e) => setProfileCompany(e.target.value)} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone</label>
                    <input 
                      type="text" 
                      value={profilePhone} 
                      onChange={(e) => setProfilePhone(e.target.value)} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avatar Image URL</label>
                    <input 
                      type="text" 
                      value={profileAvatar} 
                      onChange={(e) => setProfileAvatar(e.target.value)} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-4">
                  {profileMsg && <span className="text-xs text-indigo-600 font-semibold">{profileMsg}</span>}
                  <button 
                    type="submit" 
                    disabled={isSavingProfile}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors shrink-0 ml-auto"
                  >
                    {isSavingProfile ? 'Saving...' : 'Save Profile'}
                  </button>
                </div>
              </form>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-slate-800 font-bold text-sm border-b border-slate-100 pb-2">SEO Global Settings</h3>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Name</label>
                    <input 
                      type="text" 
                      value={globalSettings.businessName} 
                      onChange={(e) => setGlobalSettings(p => ({ ...p, businessName: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Brand Support Email</label>
                    <input 
                      type="email" 
                      value={globalSettings.supportEmail} 
                      onChange={(e) => setGlobalSettings(p => ({ ...p, supportEmail: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Brand SEO Description</label>
                    <textarea 
                      value={globalSettings.defaultSeoDescription} 
                      onChange={(e) => setGlobalSettings(p => ({ ...p, defaultSeoDescription: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none min-h-[70px]"
                    />
                  </div>
                  <button 
                    onClick={saveSettings}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors"
                  >
                    Save SEO Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

        return null;
    }
  };

  // If DIY tier selected and payment has not been made, show the paywall screen instead of the dashboard layout.
  if (!isOnboardedPaid && mySites.length === 0 && onboardingStep > 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 text-white relative overflow-hidden font-sans">
        <div className="absolute top-0 left-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-96 h-96 text-indigo-500" />
        </div>
        
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-600/30">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black tracking-tight">Complete Registration</h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Confirm your $20/mo DIY subscription plan to generate and launch your website: <span className="text-white font-bold">{onboardingAnswers.businessName || 'My Template Site'}</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold">DIY Website Builder Plan</p>
                <p className="text-[10px] text-slate-400">Cancel anytime, includes hosting</p>
              </div>
              <p className="text-xl font-black text-indigo-400">$20<span className="text-xs text-slate-500 font-medium">/mo</span></p>
            </div>

            {/* Custom Payment inputs simulating Stripe elements */}
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Card Number</label>
                <div className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs flex items-center justify-between text-slate-200">
                  <span>•••• •••• •••• 4242</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded font-black text-slate-400">VISA</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Expiry</label>
                  <div className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-400">12 / 28</div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">CVC</label>
                  <div className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-400">•••</div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              localStorage.setItem('diy_plan_paid', 'true');
              setIsOnboardedPaid(true);
              
              // Programmatically generate and save site
              const customizedSections = handleGenerateDIYTemplate(onboardingTemplateKey || 'northwood');
              const newId = `site-${Date.now()}`;
              const pages = [{ name: 'Home', slug: '/', sections: customizedSections }];
              localStorage.setItem(`site-pages-${newId}`, JSON.stringify(pages));
              
              const newSiteRecord = {
                id: newId,
                name: onboardingAnswers.businessName || 'My Template Site',
                url: `${(onboardingAnswers.businessName || 'site').toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
                previewUrl: `/preview/${newId}`,
                status: 'Draft',
                image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
                lastUpdate: 'Just now',
                templateKey: onboardingTemplateKey || 'northwood',
                planTier: 'DIY'
              };
              const updatedSites = [newSiteRecord];
              setMySites(updatedSites);
              setSelectedSite(newSiteRecord);
              localStorage.setItem('my-sites', JSON.stringify(updatedSites));
              setOnboardingStep(0);
              setOnboardingTemplateKey(null);
              
              alert("💳 Payment Authorized! Welcome to your website dashboard. Your custom template workspace has been successfully created.");
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
          >
            Authorize Payment & Launch Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F4F6F8] font-sans selection:bg-indigo-600 selection:text-white overflow-hidden relative">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sleek Wix-Style Left Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 flex flex-col z-[70] transform transition-transform duration-300 lg:translate-x-0 border-r border-slate-800
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-white text-base tracking-tight uppercase">Northwood</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1.5 hover:bg-slate-800 rounded-lg text-slate-400">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Client Info Box */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 border border-slate-700">
            <img 
              src={profileAvatar || user?.user_metadata?.avatar_url || "https://i.pravatar.cc/100?u=agency"} 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              onError={(e) => { (e.target as HTMLImageElement).src = "https://i.pravatar.cc/100?u=agency"; }}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-white truncate">
              {profileName || user?.user_metadata?.full_name || user?.user_metadata?.name || 'Client Account'}
            </span>
            <span className="text-[10px] text-slate-400 truncate mt-0.5">
              {profileCompany || user?.user_metadata?.company || 'Pro Owner'}
            </span>
          </div>
        </div>

        {/* Sidebar Nav Sections */}
        <nav className="flex-1 px-4 py-4 space-y-6 overflow-y-auto custom-scrollbar">
          {/* Group 1: Manage Site */}
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Site Management</p>
            {[
              { icon: LayoutDashboard, label: 'Overview' },
              { icon: Globe, label: 'My Sites' },
              { icon: Mail, label: 'Inbox Messages' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveSection(link.label); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all group ${
                  activeSection === link.label 
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <link.icon className={`w-4 h-4 shrink-0 ${activeSection === link.label ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'}`} />
                {link.label}
              </button>
            ))}
          </div>

          {/* Group 2: Growth & Sales */}
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Store & Growth</p>
            {[
              { icon: ShoppingBag, label: 'E-Commerce' },
              { icon: Zap, label: 'Marketing' },
              { icon: CreditCard, label: 'Payments' },
              { icon: FileText, label: 'Invoices' },
              { icon: BarChart3, label: 'Analytics' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveSection(link.label); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all group ${
                  activeSection === link.label 
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <link.icon className={`w-4 h-4 shrink-0 ${activeSection === link.label ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'}`} />
                {link.label}
              </button>
            ))}
          </div>

          {/* Group 3: Agency Support */}
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Agency Operations</p>
            {[
              { icon: Clock3, label: 'Project Timeline' },
              { icon: MessageSquare, label: 'Contact Agency' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveSection(link.label); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all group ${
                  activeSection === link.label 
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <link.icon className={`w-4 h-4 shrink-0 ${activeSection === link.label ? 'text-white' : 'text-slate-500 group-hover:text-slate-400'}`} />
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer Action */}
        <div className="p-4 border-t border-slate-800 space-y-2 shrink-0">
          <button
            onClick={() => { setActiveSection('Settings'); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSection === 'Settings' 
                ? 'bg-indigo-600 text-white' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Settings className="w-4 h-4 shrink-0" />
            Settings
          </button>
          
          <button 
            onClick={async () => {
              const supabase = getSupabaseBrowserClient();
              await supabase.auth.signOut();
              window.location.href = '/';
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 transition-all text-left"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Sleek Wix-Style Header */}
        <header className="bg-white border-b border-slate-200 px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 lg:hidden bg-slate-50 text-slate-600 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            {/* Selected site indicator & Plan Tier Switcher */}
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-500" /> {selectedSite?.name || 'No Selected Site'}
              </span>
              
              {selectedSite && (
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-sm shrink-0">
                  <button
                    onClick={() => handleUpdatePlanTier(selectedSite.id, 'DIY')}
                    className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                      (selectedSite.planTier || 'DIY') === 'DIY'
                        ? 'bg-white text-slate-800 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    DIY ($20)
                  </button>
                  <button
                    onClick={() => handleUpdatePlanTier(selectedSite.id, 'DFY')}
                    className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                      selectedSite.planTier === 'DFY'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Done-For-You ($50)
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-slate-50 transition-all rounded-lg text-slate-500">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full" />
            </button>
            <button 
              onClick={() => setIsTemplateModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> <span>New Site</span>
            </button>
          </div>
        </header>

        {/* Dashboard View Window */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#F4F6F8] custom-scrollbar">
          {renderContent()}
        </div>

        {/* Clean Template Modal */}
        <AnimatePresence>
          {isTemplateModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setIsTemplateModalOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 max-w-4xl w-full shadow-xl max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Choose a Brand Preset</h2>
                    <p className="text-slate-400 text-xs mt-1">Select your plan type and pick a layout styling theme.</p>
                  </div>
                  <button onClick={() => setIsTemplateModalOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400">
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Plan Tier Selector Header */}
                <div className="grid grid-cols-2 gap-4 bg-slate-100 p-1.5 rounded-2xl mb-8">
                  <button 
                    onClick={() => setSelectedPlanTier('DIY')}
                    className={`py-3 text-center rounded-xl text-xs font-bold transition-all ${
                      selectedPlanTier === 'DIY' 
                        ? 'bg-white text-indigo-700 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    🚀 $20/mo DIY Template
                    <span className="block text-[9px] text-slate-400 font-medium mt-0.5">Setup yourself + Edit with builder</span>
                  </button>
                  <button 
                    onClick={() => setSelectedPlanTier('DFY')}
                    className={`py-3 text-center rounded-xl text-xs font-bold transition-all ${
                      selectedPlanTier === 'DFY' 
                        ? 'bg-white text-indigo-700 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    ✨ Agency Done-For-You ($497/mo+)
                    <span className="block text-[9px] text-slate-400 font-medium mt-0.5">We design & manage for you</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Blank Template (DIY ONLY) */}
                  {selectedPlanTier === 'DIY' && (
                    <div 
                      onClick={() => { 
                        const name = window.prompt("Enter a name for your new site:", "Untitled Site");
                        if (name === null) return;
                        const siteName = name.trim() || "Untitled Site";
                        const newId = `site-${Date.now()}`;
                        setEditingSite({ id: newId, name: siteName, templateKey: null, isNew: true, planTier: 'DIY' }); 
                        setIsTemplateModalOpen(false); 
                      }}
                      className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-slate-300 transition-all"
                    >
                      <div className="aspect-video bg-slate-50 flex items-center justify-center border-b border-slate-100 group-hover:bg-slate-100 transition-colors">
                        <Plus className="w-10 h-10 text-slate-300 group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-slate-800 text-sm">Blank Workspace</h3>
                        <p className="text-slate-400 text-xs mt-1">Start editing on a fresh blank canvas.</p>
                      </div>
                    </div>
                  )}



                  {/* Agency Templates */}
                  {MY_SITES.map(site => (
                    <div 
                      key={site.id}
                      onClick={() => { 
                        if (selectedPlanTier === 'DIY') {
                          setOnboardingTemplateKey(site.templateKey);
                          setOnboardingStep(3); // Direct trigger for loader
                          setTimeout(() => {
                            // Close chooser modal and trigger the payment paywall gate
                            setIsTemplateModalOpen(false);
                            // We set onboarding step to a non-zero state to activate the paywall screen template compilation triggers
                            setIsOnboardedPaid(false); 
                          }, 1000);
                        } else {
                          // DFY Tier Flow - Agency orders preset
                          const newId = `site-${Date.now()}`;
                          const newSiteRecord = {
                            id: newId,
                            name: `${site.name} (DFY)`,
                            url: `${site.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'site'}.com`,
                            previewUrl: `/preview/${site.id}`,
                            status: 'Live',
                            image: site.image,
                            lastUpdate: 'Just now',
                            templateKey: site.templateKey,
                            planTier: 'DFY'
                          };
                          const updatedSites = [...mySites, newSiteRecord];
                          setMySites(updatedSites);
                          setSelectedSite(newSiteRecord);
                          localStorage.setItem('my-sites', JSON.stringify(updatedSites));
                          alert(`🎉 Thank you! We have received your order for the "${site.name}" custom theme. Your dedicated account manager Michael has set up your premium Done-For-You workspace. Redirecting to Timeline.`);
                          setIsTemplateModalOpen(false);
                          setActiveSection('Project Timeline');
                        }
                      }}
                      className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-slate-300 transition-all"
                    >
                      <div className="aspect-video relative overflow-hidden bg-slate-50 border-b border-slate-100">
                        <img src={site.image} alt={site.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="bg-indigo-50 text-indigo-700 text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Brand Preset</span>
                        </div>
                        <h3 className="font-bold text-slate-800 text-sm">{site.name} Theme</h3>
                        <p className="text-slate-400 text-xs mt-1">
                          {selectedPlanTier === 'DIY' ? 'Build instantly with setup helper.' : 'Order layout for agency customize.'}
                        </p>
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

        {/* Trial Gate Modal */}
        <AnimatePresence>
          {showTrialGateModal && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setShowTrialGateModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#F8F5F2] border-[4px] border-black rounded-[32px] p-6 lg:p-8 max-w-md w-full shadow-[12px_12px_0px_rgba(0,0,0,1)] relative"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setShowTrialGateModal(false)} 
                  className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors border border-transparent hover:border-black"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>

                <div className="space-y-6 text-center">
                  <div className="w-14 h-14 bg-amber-400 text-slate-900 border-[3px] border-black rounded-2xl flex items-center justify-center mx-auto shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-2">
                    <Globe className="w-7 h-7 text-black" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] bg-indigo-50 border-2 border-indigo-650 text-indigo-700 px-3 py-1 rounded-full font-black uppercase tracking-wider">
                      Premium Custom Domain Feature
                    </span>
                    <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 pt-2">
                      Connect Your Domain
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                      To route custom domains, launch your site online, and access premium traffic analytics, start your **1-Month Free Trial**!
                    </p>
                  </div>

                  <div className="bg-white border-2 border-black rounded-2xl p-4 text-left space-y-2.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] font-sans">
                    <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest border-b border-black/10 pb-1.5">What is included:</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={3} />
                      <span className="text-xs font-semibold text-slate-750">Unlimited custom domain connections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={3} />
                      <span className="text-xs font-semibold text-slate-750">30-day risk-free preview trial period</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" strokeWidth={3} />
                      <span className="text-xs font-semibold text-slate-750">Free SSL security & hosting on Vercel Edge</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <button
                      onClick={() => {
                        localStorage.setItem('diy_plan_paid', 'true');
                        setIsOnboardedPaid(true);
                        setShowTrialGateModal(false);
                        alert("🎉 Trial Subscribed! Custom Domain routing is now unlocked. You can now configure your domains.");
                      }}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md border-2 border-black hover:-translate-y-0.5 active:translate-y-0 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                    >
                      Start 1-Month Free Trial ($0.00)
                    </button>
                    <button
                      onClick={() => {
                        setShowTrialGateModal(false);
                        if (selectedSite) {
                          setEditingSite(selectedSite);
                        } else if (mySites.length > 0) {
                          setEditingSite(mySites[0]);
                        } else {
                          setIsTemplateModalOpen(true);
                        }
                      }}
                      className="w-full bg-white hover:bg-slate-50 text-slate-800 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-black hover:-translate-y-0.5 active:translate-y-0 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                    >
                      Open Site Editor & Publish
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step-by-Step Onboarding Modal for $20/mo DIY */}
        <AnimatePresence>
          {onboardingStep > 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 z-[110] flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 max-w-lg w-full shadow-2xl overflow-y-auto"
              >
                {/* Step 1: Branding Info */}
                {onboardingStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <span className="bg-indigo-50 text-indigo-700 text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Step 1 of 2</span>
                      <h2 className="text-lg font-bold text-slate-900 mt-2">Let's brand your site</h2>
                      <p className="text-slate-400 text-xs mt-0.5">Enter your core business details to automatically seed the website headers.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Name</label>
                        <input 
                          type="text"
                          value={onboardingAnswers.businessName}
                          onChange={(e) => setOnboardingAnswers(prev => ({ ...prev, businessName: e.target.value }))}
                          placeholder="e.g. Lauren Wilson Photography"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Short Business Tagline</label>
                        <input 
                          type="text"
                          value={onboardingAnswers.tagline}
                          onChange={(e) => setOnboardingAnswers(prev => ({ ...prev, tagline: e.target.value }))}
                          placeholder="e.g. Natural light wedding shoots based in CO."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Logo Text Header</label>
                        <input 
                          type="text"
                          value={onboardingAnswers.logoText}
                          onChange={(e) => setOnboardingAnswers(prev => ({ ...prev, logoText: e.target.value }))}
                          placeholder="Lauren W."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <button 
                        onClick={() => setOnboardingStep(0)} 
                        className="text-slate-500 hover:text-slate-800 text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => {
                          if (!onboardingAnswers.businessName.trim()) return alert("Please enter your business name.");
                          setOnboardingStep(2);
                        }} 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {onboardingStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <span className="bg-indigo-50 text-indigo-700 text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">Step 2 of 2</span>
                      <h2 className="text-lg font-bold text-slate-900 mt-2">Add your contact channels</h2>
                      <p className="text-slate-400 text-xs mt-0.5">These will automatically map to your contact forms and maps.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Email Address</label>
                        <input 
                          type="email"
                          value={onboardingAnswers.email}
                          onChange={(e) => setOnboardingAnswers(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="hello@laurenphoto.co"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Business Phone Number</label>
                        <input 
                          type="text"
                          value={onboardingAnswers.phone}
                          onChange={(e) => setOnboardingAnswers(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(555) 123-4567"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-indigo-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <button 
                        onClick={() => setOnboardingStep(1)} 
                        className="text-slate-500 hover:text-slate-800 text-xs font-semibold"
                      >
                        Back
                      </button>
                      <button 
                        onClick={() => {
                          setOnboardingStep(0);
                          setIsTemplateModalOpen(true); // Open layout picker modal so they select the design template!
                        }} 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-all"
                      >
                        Choose Preset Style
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Generation Loader */}
                {onboardingStep === 3 && (
                  <div className="py-8 text-center space-y-4 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-indigo-600 animate-spin" />
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-800 text-sm">Building template workspace...</h3>
                      <p className="text-slate-400 text-xs">Injecting brand variables, styling colors, and mapping assets.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </main>
    </div>
  );
}
