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
          scrolled ? 'bg-white/80 backdrop-blur-md py-3 border-b border-zinc-200/50' : 'bg-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-sm bg-zinc-950 transition-all group-hover:scale-105"
              >
                M
              </div>
              <span className="font-extrabold text-zinc-900 text-base tracking-tight select-none">michaelfred.</span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-6 items-center relative">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-[14px] font-medium text-zinc-550 hover:text-black transition-colors py-2 px-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-zinc-800 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative" ref={popoutRef}>
              <button
                onClick={handleAuthClick}
                className="text-[14px] font-semibold text-zinc-650 hover:text-black transition-colors cursor-pointer select-none"
              >
                {user ? (
                  <span className="flex items-center gap-1.5 max-w-[150px]">
                    <span className="truncate">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showPopout ? 'rotate-180' : ''}`} />
                  </span>
                ) : (
                  'Log In'
                )}
              </button>

              {/* Glassmorphic Dropdown Menu for Logged In User */}
              <AnimatePresence>
                {showPopout && user && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute right-0 mt-4 w-72 bg-white/95 backdrop-blur-md border border-zinc-200 rounded-2xl p-5 shadow-2xl z-50 text-zinc-900 flex flex-col space-y-4"
                  >
                    {/* User profile section */}
                    <div className="border-b border-zinc-100 pb-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center font-bold text-zinc-600 text-sm overflow-hidden shrink-0">
                        {user.user_metadata?.avatar_url ? (
                          <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                          <UserIcon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm truncate leading-tight">
                          {user.user_metadata?.full_name || 'Client Account'}
                        </p>
                        <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {/* Popout Navigation Links */}
                    <div className="flex flex-col space-y-2">
                      <Link 
                        href="/dashboard"
                        onClick={() => setShowPopout(false)}
                        className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold hover:bg-zinc-50 transition-colors text-zinc-700 hover:text-black"
                      >
                        <LayoutDashboard className="w-4 h-4 text-blue-500" /> Go to Dashboard
                      </Link>

                      {liveUrl ? (
                        <a 
                          href={liveUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => setShowPopout(false)}
                          className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold hover:bg-zinc-50 transition-colors text-zinc-700 hover:text-black"
                        >
                          <Globe className="w-4 h-4 text-emerald-500" /> Go to Live Site
                        </a>
                      ) : (
                        <span className="flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold text-zinc-400 cursor-not-allowed">
                          <Globe className="w-4 h-4 text-zinc-200" /> No Live Site Yet
                        </span>
                      )}
                    </div>

                    {/* Popout footer buttons */}
                    <div className="border-t border-zinc-100 pt-3">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-xs font-semibold text-rose-600 rounded-xl transition-all cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!user && (
              <Link href="/login">
                <button className="px-5 py-2.5 bg-[#4353FF] hover:bg-[#3442DD] text-white text-[13px] font-semibold rounded-full transition-all shadow-md shadow-blue-500/10 cursor-pointer">
                  Open Account
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 bg-white border border-zinc-200 text-zinc-900 rounded-full transition-colors hover:bg-zinc-50"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] flex flex-col p-8 lg:hidden bg-white/98 backdrop-blur-lg overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold text-zinc-900">MF.</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2.5 border border-zinc-250 rounded-full text-zinc-900 bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {/* Dynamic Auth Section for Mobile */}
              {user ? (
                <div className="border-b border-zinc-200 pb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center font-bold text-zinc-650 text-sm overflow-hidden shrink-0">
                      {user.user_metadata?.avatar_url ? (
                        <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <UserIcon className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-zinc-900">{user.user_metadata?.full_name || 'Client Account'}</p>
                      <p className="text-xs text-zinc-500">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3 pt-2">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-zinc-700 hover:text-black flex items-center gap-2"
                    >
                      <LayoutDashboard className="w-5 h-5 text-blue-500" /> Dashboard
                    </Link>
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-zinc-700 hover:text-black flex items-center gap-2"
                      >
                        <Globe className="w-5 h-5 text-emerald-500" /> Go to Live Site
                      </a>
                    )}
                    <button
                      onClick={() => { handleSignOut(); setIsOpen(false); }}
                      className="text-base font-medium text-rose-600 flex items-center gap-2 text-left"
                    >
                      <LogOut className="w-5 h-5" /> Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 hover:border-black transition-all inline-block w-fit"
                >
                  Log In
                </Link>
              )}

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-zinc-650 hover:text-black transition-colors"
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

