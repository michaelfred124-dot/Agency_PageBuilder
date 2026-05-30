"use client";
import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, Lock, Mail, Loader2 } from 'lucide-react';
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
    <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-black p-2 rounded-xl">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase">Northwood</span>
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-black">
            {isSignUp ? 'Create Account' : 'Client Portal'}
          </h1>
          <p className="text-black/50 mt-2 font-bold uppercase tracking-widest text-[10px]">
            {isSignUp ? 'Join the multi-tenant platform' : 'Access your digital assets'}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-[4px] border-black p-8 shadow-[12px_12px_0px_rgba(0,0,0,1)] rounded-2xl"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-xl text-red-700 text-xs font-bold uppercase tracking-wider">
              {error}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input 
                  type="email" 
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#F8F5F2] border-[3px] border-black rounded-xl py-4 pl-12 pr-4 font-bold text-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-black mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input 
                  type="password" 
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#F8F5F2] border-[3px] border-black rounded-xl py-4 pl-12 pr-4 font-bold text-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all"
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 border-[3px] border-black rounded bg-white checked:bg-black transition-all appearance-none cursor-pointer relative after:content-['✓'] after:absolute after:inset-0 after:flex after:items-center after:justify-center after:text-white after:opacity-0 checked:after:opacity-100" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-black border-b-2 border-black/10 hover:border-black transition-all">Forgot?</a>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 shadow-[6px_6px_0px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSignUp ? (
                <>Sign Up <ArrowRight className="w-5 h-5" /></>
              ) : (
                <>Sign In <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-black/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 font-black uppercase tracking-widest text-black/40">Or continue with</span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full bg-white border-[3px] border-black text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 shadow-[6px_6px_0px_rgba(0,0,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              <path d="M1 1h22v22H1z" fill="none"/>
            </svg>
            Google
          </button>

          <div className="mt-8 text-center pt-8 border-t-[3px] border-black/5 flex flex-col gap-2">
             <button 
               onClick={() => setIsSignUp(!isSignUp)}
               className="text-[10px] font-bold text-black border-b-2 border-black/10 hover:border-black uppercase tracking-widest self-center transition-all"
             >
               {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
             </button>
             <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-2">
               Don't have an account? <Link href="/contact" className="text-black border-b border-black hover:bg-black hover:text-white transition-all px-1">Contact Agency</Link>
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
      <div className="min-h-screen bg-[#F8F5F2] flex items-center justify-center font-sans">
        <Loader2 className="w-8 h-8 text-black animate-spin" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
