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
    <div className="min-h-screen bg-[#080B12] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background High-Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />

      {/* Centered Ambient Glow (matching ServicesOverview section) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-sky-500/20 via-blue-600/18 to-cyan-400/15 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="w-full max-w-md relative z-10">
        {/* Header Section matching ServicesOverview aesthetic */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-950 font-extrabold text-base bg-gradient-to-tr from-sky-300 via-teal-300 to-emerald-300 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              ✦
            </div>
            <span className="font-extrabold text-white text-2xl tracking-tight">
              ACTULUS<span className="text-teal-300">.</span>
            </span>
          </Link>

          {/* Platform Capabilities Pill */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-sky-300 bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            {isSignUp ? 'New Account Registration' : 'Secure Client Portal'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {isSignUp ? 'Create Your' : 'Access Your'}{' '}
            <span className="bg-gradient-to-r from-sky-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              {isSignUp ? 'Account' : 'Digital Assets'}
            </span>
          </h1>

          {/* Floating Metric Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3 h-3 text-teal-400" /> Sub-100ms Performance
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Auto SSL & DNS
            </span>
          </div>
        </div>

        {/* Bento Showcase Card (matching ServicesOverview card styling) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
        >
          {/* Top Accent Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {error && (
            <div className="mb-6 p-4 bg-rose-500/20 border border-rose-400/30 backdrop-blur-md rounded-2xl text-rose-200 text-xs font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0 animate-pulse" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-5 relative z-10">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <input 
                  type="email" 
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/10 border border-white/20 focus:border-sky-300 focus:ring-2 focus:ring-sky-400/30 rounded-2xl py-3.5 pl-11 pr-4 font-medium text-white placeholder:text-white/40 text-sm focus:outline-none backdrop-blur-md transition-all shadow-inner"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <input 
                  type="password" 
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 focus:border-sky-300 focus:ring-2 focus:ring-sky-400/30 rounded-2xl py-3.5 pl-11 pr-4 font-medium text-white placeholder:text-white/40 text-sm focus:outline-none backdrop-blur-md transition-all shadow-inner"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded-md border-white/30 bg-white/10 text-teal-400 focus:ring-sky-400/30 cursor-pointer accent-teal-400" 
                  />
                  <span className="text-white/70 group-hover:text-white transition-colors font-medium">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-white/70 hover:text-sky-300 transition-colors font-medium">
                  Forgot password?
                </a>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-white text-slate-950 font-extrabold py-4 rounded-full text-sm hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
              ) : isSignUp ? (
                <>Create Account <ArrowRight className="w-4 h-4" /></>
              ) : (
                <>Sign In to Portal <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="relative my-7 z-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/15"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#080B12]/80 px-3 text-white/50 font-medium backdrop-blur-md rounded-full">
                Or continue with
              </span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full relative z-10 bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-xl text-white py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-3 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Account
          </button>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-3 text-center text-xs relative z-10">
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sky-300 hover:text-sky-200 font-bold transition-colors cursor-pointer"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
            <p className="text-white/60">
              Need assistance? <Link href="/contact" className="text-white hover:text-sky-300 underline underline-offset-4 transition-colors font-medium">Contact Support</Link>
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
      <div className="min-h-screen bg-[#080B12] flex items-center justify-center font-sans">
        <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

