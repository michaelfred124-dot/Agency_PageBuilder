"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogOut, LayoutDashboard, Globe, User as UserIcon, Settings, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NAV_LINKS, COLORS } from '@/constants';
import { getSupabaseBrowserClient } from '@/lib/supabase';

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showPopout, setShowPopout] = useState(false);
  const [activeSite, setActiveSite] = useState<any>(null);
  const router = useRouter();
  const popoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserSite(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserSite(session.user.id);
      } else {
        setActiveSite(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close popout on clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoutRef.current && !popoutRef.current.contains(event.target as Node)) {
        setShowPopout(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchUserSite = async (userId: string) => {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase
        .from('tenants')
        .select('*')
        .eq('owner_id', userId)
        .limit(1);
      
      if (data && data.length > 0) {
        setActiveSite(data[0]);
      } else {
        // Fallback checks from local storage if supabase tenant is pending
        const saved = localStorage.getItem('my-sites');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.length > 0) {
            setActiveSite(parsed[0]);
          }
        }
      }
    } catch (e) {
      console.error('Error fetching user site:', e);
    }
  };

  const handleAuthClick = () => {
    if (!user) {
      router.push('/login');
    } else {
      setShowPopout(!showPopout);
    }
  };

  const handleSignOut = async () => {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    setShowPopout(false);
    window.location.href = '/';
  };

  // Determine live url
  const liveUrl = activeSite?.custom_domain 
    ? `https://${activeSite.custom_domain}`
    : activeSite?.subdomain 
      ? `https://${activeSite.subdomain}.michaelfreddesigns.com`
      : null;

  return (
    <>
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-4 lg:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex justify-between items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link href="/">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-xl"
                style={{ backgroundColor: COLORS.black }}
              >
                MF.
              </div>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-4 items-center relative">
            <div className="relative mr-4" ref={popoutRef}>
              <button
                onClick={handleAuthClick}
                className="px-6 py-3 border-[3px] border-black text-[13px] font-black uppercase tracking-wider rounded-xl transition-all hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 select-none"
                style={{ 
                  backgroundColor: COLORS.offWhite,
                  boxShadow: `6px 6px 0px ${COLORS.black}`,
                }}
              >
                {user ? (
                  <>
                    <span className="max-w-[120px] truncate">
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showPopout ? 'rotate-180' : ''}`} />
                  </>
                ) : (
                  'Login'
                )}
              </button>

              {/* Neobrutalist Popout Dropdown Menu */}
              <AnimatePresence>
                {showPopout && user && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute right-0 mt-4 w-72 bg-[#F8F5F2] border-[4px] border-black rounded-2xl p-5 shadow-[8px_8px_0px_rgba(0,0,0,1)] z-50 text-black flex flex-col space-y-4"
                  >
                    {/* User profile section */}
                    <div className="border-b-2 border-black/10 pb-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border-2 border-black bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 text-sm overflow-hidden shrink-0">
                        {user.user_metadata?.avatar_url ? (
                          <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                          <UserIcon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-black text-xs truncate leading-tight">
                          {user.user_metadata?.full_name || 'Client Account'}
                        </p>
                        <p className="text-[10px] font-bold text-black/50 truncate mt-0.5">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {/* Popout Navigation Links */}
                    <div className="flex flex-col space-y-2">
                      <Link 
                        href="/dashboard"
                        onClick={() => setShowPopout(false)}
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-black/5 transition-colors text-black"
                      >
                        <LayoutDashboard className="w-4 h-4 text-indigo-600" /> Go to Dashboard
                      </Link>

                      {liveUrl ? (
                        <a 
                          href={liveUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => setShowPopout(false)}
                          className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-black/5 transition-colors text-black"
                        >
                          <Globe className="w-4 h-4 text-emerald-600" /> Go to Live Site
                        </a>
                      ) : (
                        <span className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-black uppercase tracking-wider text-black/35 cursor-not-allowed">
                          <Globe className="w-4 h-4 text-black/20" /> No Live Site Yet
                        </span>
                      )}
                    </div>

                    {/* Popout footer buttons */}
                    <div className="border-t-2 border-black/10 pt-3">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-rose-50 hover:bg-rose-100 border-2 border-black text-xs font-black uppercase tracking-widest text-rose-600 rounded-xl transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link, i) => (
              <MotionLink
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  translateY: -2,
                  backgroundColor: link.color,
                  boxShadow: `8px 8px 0px ${COLORS.black}`,
                }}
                whileTap={{ 
                  scale: 0.95, 
                  translateY: 0,
                  boxShadow: `0px 0px 0px ${COLORS.black}`,
                }}
                className="px-6 py-3 border-[3px] border-black text-[13px] font-bold uppercase tracking-wider rounded-xl transition-all"
                style={{ 
                  backgroundColor: COLORS.offWhite,
                  boxShadow: `6px 6px 0px ${COLORS.black}`,
                }}
              >
                <span style={{ color: COLORS.black }}>
                  {link.name}
                </span>
              </MotionLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-3 bg-black text-white rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] flex flex-col p-12 lg:hidden overflow-y-auto"
            style={{ backgroundColor: COLORS.offWhite }}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black text-black">MF.</span>
              <button onClick={() => setIsOpen(false)} className="p-2 border-2 border-black rounded-lg text-black bg-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 lg:space-y-4">
              {/* Dynamic Auth Section for Mobile */}
              {user ? (
                <div className="border-b-4 border-black pb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-black bg-indigo-50 flex items-center justify-center font-bold text-indigo-700 text-sm overflow-hidden shrink-0">
                      {user.user_metadata?.avatar_url ? (
                        <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <UserIcon className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-black text-sm text-black">{user.user_metadata?.full_name || 'Client Account'}</p>
                      <p className="text-[10px] font-bold text-black/50">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-black uppercase text-indigo-600 flex items-center gap-2"
                    >
                      <LayoutDashboard className="w-5 h-5" /> Dashboard
                    </Link>
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-black uppercase text-emerald-600 flex items-center gap-2"
                      >
                        <Globe className="w-5 h-5" /> Go to Live Site
                      </a>
                    )}
                    <button
                      onClick={() => { handleSignOut(); setIsOpen(false); }}
                      className="text-lg font-black uppercase text-rose-500 flex items-center gap-2 text-left"
                    >
                      <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black border-b-8 border-transparent hover:border-black transition-all inline-block w-fit"
                >
                  Login
                </Link>
              )}

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:opacity-100 transition-opacity"
                  style={{ color: link.color }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
