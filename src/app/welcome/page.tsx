"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Loader2, Sparkles, ChevronRight, PartyPopper } from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';

/**
 * /welcome — the step between picking a plan and the dashboard.
 *
 * Its ONLY jobs are: capture the industry + business name, create the account,
 * and hand off. The full 15-minute questionnaire lives in the dashboard
 * (ClientIntake) so we never ask the same thing twice — whatever is collected
 * here is saved straight into the intake record and shows up prefilled there.
 *
 * There is deliberately no payment step. Plans are a conversation starter, not
 * a checkout (see /pricing), and billing is arranged once the build is agreed.
 */

const inputClass =
  'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#6528D9] focus:ring-2 focus:ring-[#6528D9]/20 focus:outline-none transition font-medium';

const TEMPLATE_OPTIONS = [
  { key: 'easy_does_it', name: 'Auto Detailing & Repair', icon: '🚗' },
  { key: 'greenscape', name: 'Landscaping & Outdoor', icon: '🌿' },
  { key: 'brighter_solar', name: 'Solar & Clean Tech', icon: '☀️' },
  { key: 'law_firm', name: 'Legal & Professional Services', icon: '⚖️' },
  { key: 'northwood', name: 'Coffee & Restaurant', icon: '☕' },
  { key: 'lauren', name: 'Photography & Creative', icon: '📷' },
  { key: 'dental', name: 'Medical & Dental Care', icon: '🦷' },
  { key: 'home_cleaning', name: 'Home Cleaning & Services', icon: '🧹' },
];

function WelcomeInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planParam = searchParams.get('plan') || '5-Page Website';

  const [step, setStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [alreadySignedIn, setAlreadySignedIn] = useState(false);

  const [businessName, setBusinessName] = useState('');
  const [industryKey, setIndustryKey] = useState('greenscape');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // If they're already signed in we skip account creation entirely.
  useEffect(() => {
    try {
      const supabase = getSupabaseBrowserClient();
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user) {
          setAlreadySignedIn(true);
          setEmail(prev => prev || user.email || '');
          setContactName(prev => prev || user.user_metadata?.full_name || '');
          setBusinessName(prev => prev || user.user_metadata?.company || '');
        }
      });
    } catch { /* not signed in — normal */ }
  }, []);

  const handleStepOne = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!businessName.trim()) {
      setError('Please enter your business name.');
      return;
    }
    setStep(2);
  };

  /**
   * Seed the dashboard questionnaire so nothing gets asked twice.
   *
   * Also stashed locally: when email confirmation is switched on there is no
   * session yet, so the API call would 401 and their answers would be lost.
   * ClientIntake picks the stash up on first load and clears it.
   */
  const seedIntake = async (hasSession: boolean) => {
    const answers = {
      businessName: businessName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      industryKey,
      planInterest: planParam,
    };

    try {
      localStorage.setItem('pending_intake_seed', JSON.stringify(answers));
    } catch { /* private browsing — fall through to the API attempt */ }

    if (!hasSession) return;

    try {
      await fetch('/api/onboarding/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'in_progress', answers }),
      });
    } catch {
      // Non-fatal: the local stash still covers it.
    }
  };

  const handleFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!alreadySignedIn) {
      if (!email.trim()) { setError('Please enter your email address.'); return; }
      if (password.length < 6) { setError('Please choose a password of at least 6 characters.'); return; }
    }

    setSubmitting(true);
    try {
      let hasSession = alreadySignedIn;

      if (!alreadySignedIn) {
        const supabase = getSupabaseBrowserClient();
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: contactName.trim(),
              company: businessName.trim(),
              phone: phone.trim(),
            },
          },
        });
        if (signUpError) {
          setError(signUpError.message);
          setSubmitting(false);
          return;
        }
        // Null when the project requires email confirmation.
        hasSession = !!data.session;
      }

      await seedIntake(hasSession);

      if (hasSession) {
        setStep(3);
        setTimeout(() => router.push('/dashboard'), 1600);
      } else {
        // No session yet — sending them to /dashboard would just bounce to
        // /login with no explanation. Tell them to confirm first.
        setStep(4);
        setSubmitting(false);
      }
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] pt-24 lg:pt-28 pb-24 px-4 lg:px-6 relative overflow-hidden font-sans">
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
        <div className="absolute top-[22%] left-[3%] w-32 h-40 dot-grid-orange opacity-50 hidden md:block" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-black text-[#FF5500] bg-white border border-orange-200/90 px-5 py-2 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
            {planParam}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Let's get your build started
          </h1>
          <p className="text-slate-600 text-sm md:text-base font-medium max-w-lg mx-auto">
            Two quick questions here, then a short questionnaire in your dashboard.
            We build your site and send it over for review in 2–3 days.
          </p>

          {/* Steps */}
          <div className="flex items-center justify-center gap-3 pt-4 max-w-xs mx-auto">
            {[{ num: 1, label: 'Business' }, { num: 2, label: 'Account' }].map(s => (
              <div key={s.num} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                  step === s.num
                    ? 'bg-[#6528D9] text-white shadow-md shadow-purple-200 scale-110'
                    : step > s.num
                    ? 'bg-[#FF5500] text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > s.num ? <Check className="w-4 h-4 text-white" strokeWidth={3} /> : s.num}
                </div>
                <span className={`text-xs font-bold ${step === s.num ? 'text-slate-900' : 'text-slate-400'}`}>
                  {s.label}
                </span>
                {s.num < 2 && <ChevronRight className="w-3.5 h-3.5 text-slate-300 ml-1" />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-xl shadow-purple-100/30 relative">
          <AnimatePresence mode="wait">

            {/* STEP 1 — business + industry */}
            {step === 1 && (
              <motion.form
                key="step-1"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleStepOne}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-1">Tell us about your business</h2>
                  <p className="text-slate-500 text-xs font-medium">This sets the starting layout — we tailor it to your brand as we build.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Business Name <span className="text-[#6528D9]">*</span>
                    </label>
                    <input
                      type="text" required value={businessName}
                      onChange={e => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Auto Detailing"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Which of these is closest to your industry?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {TEMPLATE_OPTIONS.map(tmpl => (
                        <button
                          key={tmpl.key} type="button"
                          onClick={() => setIndustryKey(tmpl.key)}
                          className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                            industryKey === tmpl.key
                              ? 'border-[#6528D9] bg-purple-50/70 shadow-sm text-[#6528D9] font-bold'
                              : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 font-medium'
                          }`}
                        >
                          <span className="text-xl">{tmpl.icon}</span>
                          <span className="text-xs leading-tight">{tmpl.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl p-3 font-semibold">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full btn-orange-pill text-white font-black text-xs uppercase tracking-wider py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-orange-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Continue <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </motion.form>
            )}

            {/* STEP 2 — account */}
            {step === 2 && (
              <motion.form
                key="step-2"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                onSubmit={handleFinish}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                    {alreadySignedIn ? 'Confirm your details' : 'Create your account'}
                  </h2>
                  <p className="text-slate-500 text-xs font-medium">
                    {alreadySignedIn
                      ? "You're already signed in — just check these are right."
                      : 'So you can track your build and send us your photos and content.'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text" value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      placeholder="Jane Smith" className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email <span className="text-[#6528D9]">*</span>
                      </label>
                      <input
                        type="email" required value={email}
                        disabled={alreadySignedIn}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="jane@business.com"
                        className={inputClass + (alreadySignedIn ? ' opacity-60' : '')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone</label>
                      <input
                        type="tel" value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="(555) 123-4567" className={inputClass}
                      />
                    </div>
                  </div>

                  {!alreadySignedIn && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Password <span className="text-[#6528D9]">*</span>
                      </label>
                      <input
                        type="password" required value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="At least 6 characters" className={inputClass}
                      />
                    </div>
                  )}
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    <strong className="text-slate-700">No payment now.</strong> We'll go through your
                    requirements, build the site, and show it to you before anything is charged.
                  </p>
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl p-3 font-semibold">{error}</p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button" onClick={() => setStep(1)}
                    className="w-1/3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider py-4 rounded-2xl transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit" disabled={submitting}
                    className="w-2/3 btn-orange-pill disabled:bg-slate-300 text-white font-black text-xs uppercase tracking-wider py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {submitting
                      ? <><Loader2 className="w-4 h-4 animate-spin text-white" /> Setting up…</>
                      : <>Start My Build <ArrowRight className="w-4 h-4 text-white" /></>}
                  </button>
                </div>

                {!alreadySignedIn && (
                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    Already have an account? <Link href="/login" className="text-[#6528D9] font-bold hover:underline">Sign in</Link>
                  </p>
                )}
              </motion.form>
            )}

            {/* STEP 3 — handoff */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-5 py-8"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                  <PartyPopper className="w-8 h-8 text-[#6528D9]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">You're all set</h2>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    Taking you to your dashboard — there's a short questionnaire there
                    (about 15 minutes) and then we start building.
                  </p>
                </div>
                <Loader2 className="w-5 h-5 animate-spin text-[#6528D9] mx-auto" />
              </motion.div>
            )}

            {/* STEP 4 — account created but email not confirmed yet */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-5 py-8"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                  📧
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Check your email</h2>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    We sent a confirmation link to <strong className="text-slate-800">{email}</strong>.
                    Click it to activate your account, then sign in — your details are saved and
                    your questionnaire will be waiting.
                  </p>
                </div>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 btn-orange-pill text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-2xl transition-all"
                >
                  Go to Sign In <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function WelcomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9FF]">
        <Loader2 className="w-6 h-6 animate-spin text-[#6528D9]" />
      </div>
    }>
      <WelcomeInner />
    </Suspense>
  );
}
