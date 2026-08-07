"use client";
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowRight, Lock, Mail, Loader2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the redirect query parameter (fallback to dashboard)
  const redirectTo = searchParams.get('redirect') || searchParams.get('redirectTo') || '/dashboard';

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const supabase = getSupabaseBrowserClient();

    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) {
          setError(signUpError.message);
          setLoading(false);
          return;
        }

        if (data.session) {
          router.push(redirectTo);
        } else {
          alert('Check your email for the confirmation link!');
          setIsSignUp(false);
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          setError(signInError.message);
          setLoading(false);
          return;
        }

        router.push(redirectTo);
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    const supabase = getSupabaseBrowserClient();
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'Could not authenticate with Google.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-slate-900 flex items-center justify-center p-6 relative overflow-hidden font-sans pt-20 pb-20">
      {/* VIBRANT ORGANIC BACKGROUND BLOBS & GEOMETRIC SHAPES (Hero Theme Match) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top-Left Deep Purple Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[520px] h-[520px] text-[#6528D9] opacity-85 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M410,290Q380,330,340,380Q300,430,240,420Q180,410,130,370Q80,330,80,260Q80,190,130,135Q180,80,250,90Q320,100,380,140Q440,180,410,290Z" />
        </motion.svg>

        {/* Top-Right Vibrant Orange Fluid Blob */}
        <motion.svg
          animate={{ rotate: [0, -6, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-20 w-[480px] h-[480px] text-[#FF7700] opacity-80 filter drop-shadow-xl"
          viewBox="0 0 500 500"
          fill="currentColor"
        >
          <path d="M420,280Q380,310,345,365Q310,420,240,415Q170,410,125,365Q80,320,90,250Q100,180,140,135Q180,90,250,90Q320,90,385,135Q450,180,420,280Z" />
        </motion.svg>

        {/* Floating Geometry: Amber Outline Circle */}
        <div className="absolute top-[28%] left-[7%] w-14 h-14 border-4 border-[#FFB703] rounded-full opacity-75 animate-float-slow hidden md:block" />

        {/* Floating Geometry: Wireframe Orange Triangle */}
        <svg className="absolute top-[18%] right-[12%] w-10 h-10 text-[#FF7700] opacity-75 animate-float-reverse hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
          <polygon points="50,10 90,85 10,85" />
        </svg>

        {/* Dot Matrix Arrays */}
        <div className="absolute top-[18%] right-[4%] w-36 h-44 dot-grid-purple opacity-50 hidden md:block" />
        <div className="absolute bottom-[18%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base bg-gradient-to-tr from-[#6528D9] via-[#8B5CF6] to-[#FF5500] shadow-md group-hover:scale-105 transition-transform">
              ✦
            </div>
            <span className="font-extrabold text-slate-950 text-2xl tracking-tight">
              ACTULUS<span className="text-[#FF5500]">.</span>
            </span>
          </Link>

          {/* Platform Capabilities Pill */}
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-black text-[#FF5500] bg-white border border-orange-200/90 px-4 py-1.5 rounded-full shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
            {isSignUp ? 'New Account Registration' : 'Secure Client Portal'}
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            {isSignUp ? 'Create Your' : 'Access Your'}{' '}
            <span className="bg-gradient-to-r from-[#6528D9] via-[#8B5CF6] to-[#FF5500] bg-clip-text text-transparent">
              {isSignUp ? 'Account' : 'Digital Assets'}
            </span>
          </h1>

          {/* Floating Metric Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 rounded-full bg-white border border-purple-200/80 text-[11px] font-bold text-[#6528D9] flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3 h-3 text-[#FF5500]" /> Sub-100ms Performance
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-orange-200/80 text-[11px] font-bold text-[#FF5500] flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-[#6528D9]" /> Auto SSL & DNS
            </span>
          </div>
        </div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-2xl shadow-purple-100/40 relative overflow-hidden"
        >
          {/* Top Accent Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6528D9] via-[#FF5500] to-[#FF8800]" />

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-5 relative z-10">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#6528D9] focus:ring-2 focus:ring-[#6528D9]/20 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 font-medium text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#6528D9] focus:ring-2 focus:ring-[#6528D9]/20 focus:bg-white rounded-2xl py-3.5 pl-11 pr-4 font-medium text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded-md border-slate-300 text-[#6528D9] focus:ring-[#6528D9]/20 cursor-pointer accent-[#6528D9]" 
                  />
                  <span className="text-slate-600 group-hover:text-slate-900 transition-colors font-medium">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-[#6528D9] hover:text-[#FF5500] transition-colors font-bold">
                  Forgot password?
                </a>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full mt-2 btn-orange-pill text-white font-black py-4 rounded-full text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin text-white" />
              ) : isSignUp ? (
                <>Create Account <ArrowRight className="w-4 h-4 text-white" /></>
              ) : (
                <>Sign In to Portal <ArrowRight className="w-4 h-4 text-white" /></>
              )}
            </button>
          </form>

          <div className="relative my-7 z-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-slate-400 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full relative z-10 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Account
          </button>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3 text-center text-xs relative z-10">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#6528D9] hover:text-[#FF5500] font-black transition-colors cursor-pointer"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
            <p className="text-slate-500">
              Need assistance? <Link href="/contact" className="text-slate-900 hover:text-[#FF5500] underline underline-offset-4 transition-colors font-bold">Contact Support</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF9FF] flex items-center justify-center font-sans">
        <Loader2 className="w-8 h-8 text-[#6528D9] animate-spin" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

