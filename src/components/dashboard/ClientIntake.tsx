"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check, ChevronLeft, ChevronRight, Upload, Loader2, X, Globe,
  Sparkles, Clock, ImageIcon, Trash2, ExternalLink, Circle
} from 'lucide-react';

/**
 * ClientIntake — the day-one questionnaire.
 *
 * Everything the designer needs to build the site is collected in ONE sitting,
 * so the build can start immediately instead of waiting days on replies.
 *
 * Design rules that keep completion high:
 *  - Steps run easiest -> hardest. Contact details first (zero friction),
 *    written answers last (by then they're too invested to quit).
 *  - No prose fields. Structured answers only; the designer writes the copy.
 *  - Every item has an "I don't have this" escape — a form you can't finish
 *    gets abandoned for good, a form with gaps gets finished.
 *  - Progress starts at 20% (industry + template + account are already done).
 *  - Autosaves on every change; no Save button to forget.
 */

const PALETTES = [
  { id: 'trust',  name: 'Trusted Blue',  colors: ['#1B4E8F', '#3B82C4', '#EBF4FF', '#0F172A'] },
  { id: 'earth',  name: 'Warm Earth',    colors: ['#8B5A2B', '#C9974C', '#FAF3E8', '#2A1F17'] },
  { id: 'modern', name: 'Modern Slate',  colors: ['#111827', '#4F46E5', '#F1F5F9', '#334155'] },
];

const FONT_PAIRS = [
  { id: 'classic', name: 'Classic',  heading: 'Georgia, serif',              sample: 'Aa', note: 'Serif headings, established & timeless' },
  { id: 'modern',  name: 'Modern',   heading: 'system-ui, sans-serif',       sample: 'Aa', note: 'Clean sans headings, crisp & current' },
];

const DIFFERENTIATORS = [
  'Licensed & insured', 'Family owned', '24/7 availability', 'Free estimates',
  'Same-day service', 'Warranty included', 'Award winning', 'Eco-friendly',
  'Locally owned', '5-star reviewed', 'Financing available', 'No hidden fees',
];

const STEPS = [
  { id: 0, title: 'The Basics',   minutes: 2, hint: 'Details you already know by heart' },
  { id: 1, title: 'Look & Feel',  minutes: 2, hint: 'Just clicking — no typing' },
  { id: 2, title: 'Your Photos',  minutes: 5, hint: 'Drop them in, we handle the rest' },
  { id: 3, title: 'Your Story',   minutes: 6, hint: 'Short answers — we write the copy' },
];

const BASE_PROGRESS = 20; // industry + template + account already done

export interface IntakeAnswers {
  existingUrl: string;
  businessName: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  serviceArea: string;
  socials: string;
  paletteId: string;
  fontId: string;
  logoUrl: string;
  noLogo: boolean;
  photos: { url: string; name: string }[];
  noPhotos: boolean;
  yearsInBusiness: string;
  services: string[];
  differentiators: string[];
  existingCopy: string;
  anythingElse: string;
  // Carried over from /welcome so the designer can see what they picked.
  industryKey: string;
  planInterest: string;
}

const EMPTY: IntakeAnswers = {
  existingUrl: '', businessName: '', phone: '', email: '', address: '',
  hours: '', serviceArea: '', socials: '',
  paletteId: '', fontId: '', logoUrl: '', noLogo: false,
  photos: [], noPhotos: false,
  yearsInBusiness: '', services: ['', '', ''], differentiators: [],
  existingCopy: '', anythingElse: '',
  industryKey: '', planInterest: '',
};

// --- small shared bits ------------------------------------------------------

const Field = ({ label, optional, children, hint }: any) => (
  <div className="space-y-1.5">
    <label className="flex items-baseline gap-2">
      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{label}</span>
      {optional && <span className="text-[10px] text-slate-400 font-semibold">optional</span>}
    </label>
    {children}
    {hint && <p className="text-[11px] text-slate-400 font-medium">{hint}</p>}
  </div>
);

const inputCls =
  "w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 " +
  "placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition";

// --- component --------------------------------------------------------------

interface ClientIntakeProps {
  user: any;
  templateName?: string;
  industryName?: string;
  onSubmitted?: () => void;
}

export default function ClientIntake({ user, templateName, industryName, onSubmitted }: ClientIntakeProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<IntakeAnswers>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const saveTimer = useRef<any>(null);
  const [saveFailed, setSaveFailed] = useState(false);

  // Load any in-progress answers. /welcome also stashes what it collected in
  // localStorage for the case where signup had no session yet (email
  // confirmation on) and its API write would have 401'd.
  useEffect(() => {
    let cancelled = false;

    const readStash = () => {
      try {
        const raw = localStorage.getItem('pending_intake_seed');
        if (!raw) return null;
        localStorage.removeItem('pending_intake_seed');
        return JSON.parse(raw);
      } catch {
        return null;
      }
    };

    fetch('/api/onboarding/intake')
      .then(r => r.json())
      .then(json => {
        if (cancelled) return;
        const stash = readStash();
        // Saved answers win over the stash — never clobber real progress.
        if (json?.answers || stash) {
          setAnswers({ ...EMPTY, ...(stash || {}), ...(json?.answers || {}) });
        }
        if (json?.status === 'submitted') setSubmitted(true);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));

    return () => { cancelled = true; };
  }, []);

  // Prefill contact details we already have from the account
  useEffect(() => {
    if (!loaded || !user) return;
    setAnswers(prev => ({
      ...prev,
      businessName: prev.businessName || user.user_metadata?.company || '',
      email: prev.email || user.email || '',
      phone: prev.phone || user.user_metadata?.phone || '',
    }));
  }, [loaded, user]);

  // Debounced autosave
  const persist = useCallback((next: IntakeAnswers) => {
    clearTimeout(saveTimer.current);
    setSaveState('saving');
    saveTimer.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/onboarding/intake', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: next, status: 'in_progress' }),
        });
        // fetch only rejects on network failure — a 401/500 still resolves, so
        // never claim "Saved" without checking. Lying here costs them 15 minutes.
        if (!res.ok) throw new Error(String(res.status));
        setSaveFailed(false);
        setSaveState('saved');
        setTimeout(() => setSaveState('idle'), 2000);
      } catch {
        setSaveFailed(true);
        setSaveState('idle');
      }
    }, 800);
  }, []);

  const update = useCallback((patch: Partial<IntakeAnswers>) => {
    setAnswers(prev => {
      const next = { ...prev, ...patch };
      persist(next);
      return next;
    });
  }, [persist]);

  // --- completion math ------------------------------------------------------
  // Each step counts once it has enough to build from. "I don't have this"
  // counts as complete — that's the whole point of the escape hatch.
  const stepDone = [
    !!(answers.businessName && answers.phone) || !!answers.existingUrl,
    !!answers.paletteId && !!answers.fontId && (!!answers.logoUrl || answers.noLogo),
    answers.photos.length > 0 || answers.noPhotos,
    !!answers.yearsInBusiness && answers.services.some(s => s.trim()),
  ];
  const doneCount = stepDone.filter(Boolean).length;
  const progress = Math.round(BASE_PROGRESS + (doneCount / STEPS.length) * (100 - BASE_PROGRESS));
  const allDone = doneCount === STEPS.length;

  // --- photo upload ---------------------------------------------------------
  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setUploadError('');
    const uploaded: { url: string; name: string }[] = [];
    for (const file of Array.from(files).slice(0, 30)) {
      try {
        const fd = new FormData();
        fd.append('file', file);
        const res = await fetch('/api/upload', { method: 'POST', body: fd });
        const json = await res.json();
        if (res.ok && json.url) uploaded.push({ url: json.url, name: file.name });
        else setUploadError(json.error || 'One of those files would not upload.');
      } catch {
        setUploadError('Upload failed — check your connection and try again.');
      }
    }
    if (uploaded.length) {
      update({ photos: [...answers.photos, ...uploaded], noPhotos: false });
    }
    setUploading(false);
  };

  const handleLogo = async (file: File | undefined) => {
    if (!file) return;
    setUploading(true);
    setUploadError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (res.ok && json.url) update({ logoUrl: json.url, noLogo: false });
      else setUploadError(json.error || 'Logo upload failed.');
    } catch {
      setUploadError('Upload failed — check your connection and try again.');
    }
    setUploading(false);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError('');
    try {
      clearTimeout(saveTimer.current);
      const res = await fetch('/api/onboarding/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, status: 'submitted' }),
      });
      if (res.ok) {
        setSubmitted(true);
        onSubmitted?.();
      } else {
        const json = await res.json().catch(() => ({}));
        setSubmitError(json.error || 'We could not send that through. Your answers are saved — try again.');
      }
    } catch {
      setSubmitError('Network error. Your answers are saved — try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-32 text-slate-400">
        <Loader2 className="w-5 h-5 animate-spin" />
      </div>
    );
  }

  if (submitted) {
    return <IntakeSubmitted answers={answers} />;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          Let's build your website
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          This takes about <strong className="text-slate-700">15 minutes</strong>. Have your logo file handy if you
          have one. Finish today and your site is ready for review in <strong className="text-slate-700">2–3 days</strong>.
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-indigo-600 tabular-nums">{progress}%</span>
            <span className="text-xs font-semibold text-slate-400">complete</span>
          </div>
          <AnimatePresence>
            {saveFailed ? (
              <motion.span
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-[11px] font-bold text-rose-600 flex items-center gap-1.5"
              >
                <X className="w-3 h-3" strokeWidth={3} /> Not saved — check your connection
              </motion.span>
            ) : saveState !== 'idle' && (
              <motion.span
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5"
              >
                {saveState === 'saving'
                  ? <><Loader2 className="w-3 h-3 animate-spin" /> Saving…</>
                  : <><Check className="w-3 h-3 text-emerald-500" /> Saved</>}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-600 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Step tabs */}
        <div className="grid grid-cols-4 gap-2">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStep(i)}
              className={`text-left px-3 py-2.5 rounded-xl border transition-all ${
                step === i
                  ? 'bg-indigo-50 border-indigo-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                {stepDone[i]
                  ? <Check className="w-3 h-3 text-emerald-600 shrink-0" strokeWidth={3} />
                  : <Circle className="w-3 h-3 text-slate-300 shrink-0" />}
                <span className={`text-[10px] font-bold uppercase tracking-wide truncate ${
                  step === i ? 'text-indigo-700' : 'text-slate-500'
                }`}>{s.title}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold">{s.minutes} min</span>
            </button>
          ))}
        </div>
      </div>

      {/* Step body */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
          <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
            Step {step + 1} · {STEPS[step].title}
          </span>
          <span className="text-[11px] text-slate-400 font-medium">— {STEPS[step].hint}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.15 }}
          >
            {step === 0 && <StepBasics answers={answers} update={update} />}
            {step === 1 && (
              <StepLook
                answers={answers} update={update}
                onLogo={handleLogo} uploading={uploading} uploadError={uploadError}
              />
            )}
            {step === 2 && (
              <StepPhotos
                answers={answers} update={update}
                onFiles={handleFiles} uploading={uploading} uploadError={uploadError}
              />
            )}
            {step === 3 && <StepStory answers={answers} update={update} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-white disabled:opacity-0 transition"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep(s => s + 1)}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
          >
            Next: {STEPS[step + 1].title} <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
          >
            {submitting
              ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
              : <><Sparkles className="w-4 h-4" /> Send it over — start my build</>}
          </button>
        )}
      </div>

      {submitError && (
        <p className="text-center text-xs text-rose-600 font-bold">{submitError}</p>
      )}

      {!allDone && step === STEPS.length - 1 && (
        <p className="text-center text-[11px] text-slate-400 font-medium">
          You can send this with gaps — we'll follow up on anything missing rather than hold up the build.
        </p>
      )}
    </div>
  );
}

// --- Step 1: Basics ---------------------------------------------------------

function StepBasics({ answers, update }: { answers: IntakeAnswers; update: (p: Partial<IntakeAnswers>) => void }) {
  return (
    <div className="space-y-6">
      {/* The shortcut */}
      <div className="bg-indigo-50/60 border border-indigo-200/70 rounded-2xl p-5 space-y-3">
        <div className="flex items-start gap-2.5">
          <Globe className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-indigo-900">Have a website or Google listing?</p>
            <p className="text-[11px] text-indigo-700/80 font-medium mt-0.5 leading-relaxed">
              Paste it and we'll pull your hours, address, and photos from it — skip anything below you'd rather not retype.
            </p>
          </div>
        </div>
        <input
          value={answers.existingUrl}
          onChange={e => update({ existingUrl: e.target.value })}
          placeholder="google.com/… or yourbusiness.com"
          className={inputCls}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Business name">
          <input value={answers.businessName} onChange={e => update({ businessName: e.target.value })}
            placeholder="Smith Plumbing" className={inputCls} />
        </Field>
        <Field label="Phone">
          <input value={answers.phone} onChange={e => update({ phone: e.target.value })}
            placeholder="(555) 123-4567" className={inputCls} />
        </Field>
        <Field label="Email">
          <input value={answers.email} onChange={e => update({ email: e.target.value })}
            placeholder="hello@smithplumbing.com" className={inputCls} />
        </Field>
        <Field label="Service area" optional hint="Cities or radius you cover">
          <input value={answers.serviceArea} onChange={e => update({ serviceArea: e.target.value })}
            placeholder="Denver metro, 30 mi radius" className={inputCls} />
        </Field>
      </div>

      <Field label="Address" optional hint="Leave blank if you don't have a storefront">
        <input value={answers.address} onChange={e => update({ address: e.target.value })}
          placeholder="123 Main St, Denver, CO 80202" className={inputCls} />
      </Field>

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Hours" optional>
          <input value={answers.hours} onChange={e => update({ hours: e.target.value })}
            placeholder="Mon–Fri 8–6, Sat 9–2" className={inputCls} />
        </Field>
        <Field label="Social links" optional hint="Facebook, Instagram — comma separated">
          <input value={answers.socials} onChange={e => update({ socials: e.target.value })}
            placeholder="facebook.com/…, instagram.com/…" className={inputCls} />
        </Field>
      </div>
    </div>
  );
}

// --- Step 2: Look & Feel ----------------------------------------------------

function StepLook({ answers, update, onLogo, uploading, uploadError }: any) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Pick a palette</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {PALETTES.map(p => (
            <button
              key={p.id}
              onClick={() => update({ paletteId: p.id })}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                answers.paletteId === p.id
                  ? 'border-indigo-500 bg-indigo-50/50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex gap-1 mb-3">
                {p.colors.map(c => (
                  <div key={c} className="flex-1 h-9 rounded-lg border border-black/5" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {answers.paletteId === p.id && <Check className="w-3.5 h-3.5 text-indigo-600" strokeWidth={3} />}
                <span className="text-xs font-bold text-slate-800">{p.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Pick your headings</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {FONT_PAIRS.map(f => (
            <button
              key={f.id}
              onClick={() => update({ fontId: f.id })}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${
                answers.fontId === f.id
                  ? 'border-indigo-500 bg-indigo-50/50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="text-3xl text-slate-900 mb-2 leading-none" style={{ fontFamily: f.heading }}>
                {f.sample}
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                {answers.fontId === f.id && <Check className="w-3.5 h-3.5 text-indigo-600" strokeWidth={3} />}
                <span className="text-xs font-bold text-slate-800">{f.name}</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">{f.note}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Your logo</p>
        {answers.logoUrl ? (
          <div className="flex items-center gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <img src={answers.logoUrl} alt="Logo" className="w-16 h-16 object-contain rounded-lg bg-white p-1.5 border border-emerald-200" />
            <div className="flex-1">
              <p className="text-xs font-bold text-emerald-900">Logo uploaded</p>
              <p className="text-[11px] text-emerald-700/80 font-medium">We'll size it for every page.</p>
            </div>
            <button onClick={() => update({ logoUrl: '' })} className="p-2 hover:bg-emerald-100 rounded-lg text-emerald-700">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <label className={`block border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition ${
              answers.noLogo ? 'border-slate-200 bg-slate-50 opacity-50' : 'border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/30'
            }`}>
              <input type="file" accept="image/*" className="hidden"
                onChange={e => onLogo(e.target.files?.[0])} disabled={answers.noLogo} />
              {uploading
                ? <Loader2 className="w-5 h-5 text-indigo-500 mx-auto animate-spin" />
                : <Upload className="w-5 h-5 text-slate-400 mx-auto" />}
              <p className="text-xs font-bold text-slate-600 mt-2">Upload your logo</p>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5">PNG, SVG, or JPG — highest quality you have</p>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" checked={answers.noLogo}
                onChange={e => update({ noLogo: e.target.checked })}
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">
                I don't have a logo — design a wordmark for me
              </span>
            </label>
          </>
        )}
        {uploadError && <p className="text-[11px] text-rose-600 font-semibold">{uploadError}</p>}
      </div>
    </div>
  );
}

// --- Step 3: Photos ---------------------------------------------------------

function StepPhotos({ answers, update, onFiles, uploading, uploadError }: any) {
  const [dragging, setDragging] = useState(false);

  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600 leading-relaxed">
        Drop in <strong className="text-slate-900">10–20 photos</strong> of your work, team, or location.
        Don't worry about sizing or picking favourites — we crop and choose.
      </p>

      <label
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={e => { e.preventDefault(); setDragging(false); onFiles(e.dataTransfer.files); }}
        className={`block border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition ${
          answers.noPhotos ? 'border-slate-200 bg-slate-50 opacity-50'
            : dragging ? 'border-indigo-500 bg-indigo-50'
            : 'border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/30'
        }`}
      >
        <input type="file" accept="image/*" multiple className="hidden"
          onChange={e => onFiles(e.target.files)} disabled={answers.noPhotos} />
        {uploading
          ? <Loader2 className="w-7 h-7 text-indigo-500 mx-auto animate-spin" />
          : <ImageIcon className="w-7 h-7 text-slate-400 mx-auto" />}
        <p className="text-sm font-bold text-slate-700 mt-3">
          {uploading ? 'Uploading…' : 'Drop photos here, or click to browse'}
        </p>
        <p className="text-[11px] text-slate-400 font-medium mt-1">JPG, PNG, or WebP · up to 8MB each</p>
      </label>

      {uploadError && <p className="text-[11px] text-rose-600 font-semibold">{uploadError}</p>}

      {answers.photos.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              {answers.photos.length} photo{answers.photos.length === 1 ? '' : 's'} uploaded
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {answers.photos.map((p: any, i: number) => (
              <div key={p.url} className="relative group aspect-square rounded-xl overflow-hidden border border-slate-200">
                <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => update({ photos: answers.photos.filter((_: any, j: number) => j !== i) })}
                  className="absolute top-1 right-1 p-1 bg-white/90 rounded-lg opacity-0 group-hover:opacity-100 transition text-slate-700 hover:text-rose-600"
                >
                  <X className="w-3 h-3" strokeWidth={3} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <label className="flex items-center gap-2.5 cursor-pointer group pt-1">
        <input type="checkbox" checked={answers.noPhotos}
          onChange={e => update({ noPhotos: e.target.checked })}
          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
        <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900">
          I don't have photos yet — use professional stock for my industry
        </span>
      </label>
    </div>
  );
}

// --- Step 4: Story ----------------------------------------------------------

function StepStory({ answers, update }: { answers: IntakeAnswers; update: (p: Partial<IntakeAnswers>) => void }) {
  const toggleDiff = (d: string) => {
    const has = answers.differentiators.includes(d);
    if (has) update({ differentiators: answers.differentiators.filter(x => x !== d) });
    else if (answers.differentiators.length < 4) update({ differentiators: [...answers.differentiators, d] });
  };

  const setService = (i: number, val: string) => {
    const next = [...answers.services];
    next[i] = val;
    update({ services: next });
  };

  return (
    <div className="space-y-7">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
          <strong className="text-slate-700">No essays needed.</strong> Short answers here — we write all the
          copy for your site from them.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Years in business">
          <input value={answers.yearsInBusiness} onChange={e => update({ yearsInBusiness: e.target.value })}
            placeholder="12" inputMode="numeric" className={inputCls} />
        </Field>
      </div>

      <div className="space-y-2.5">
        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Your top 3 services</p>
        <p className="text-[11px] text-slate-400 font-medium -mt-1">Just the names — a few words each.</p>
        {answers.services.map((s, i) => (
          <input key={i} value={s} onChange={e => setService(i, e.target.value)}
            placeholder={['Emergency repairs', 'Drain cleaning', 'Water heater install'][i] || `Service ${i + 1}`}
            className={inputCls} />
        ))}
      </div>

      <div className="space-y-2.5">
        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
          What makes you different? <span className="text-slate-400 normal-case font-semibold">— pick up to 4</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {DIFFERENTIATORS.map(d => {
            const on = answers.differentiators.includes(d);
            return (
              <button key={d} onClick={() => toggleDiff(d)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition ${
                  on ? 'bg-indigo-600 border-indigo-600 text-white'
                     : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}>
                {d}
              </button>
            );
          })}
        </div>
      </div>

      <Field label="Existing copy or reviews" optional
        hint="Paste your current About text or a few Google reviews — we'll work from your own words.">
        <textarea value={answers.existingCopy} onChange={e => update({ existingCopy: e.target.value })}
          rows={4} placeholder="Paste anything you already have…"
          className={inputCls + ' resize-none leading-relaxed'} />
      </Field>

      <Field label="Anything else we should know?" optional>
        <textarea value={answers.anythingElse} onChange={e => update({ anythingElse: e.target.value })}
          rows={3} placeholder="Sites you like, things to avoid, a deadline…"
          className={inputCls + ' resize-none leading-relaxed'} />
      </Field>
    </div>
  );
}

// --- Submitted / waiting state ----------------------------------------------

function IntakeSubmitted({ answers }: { answers: IntakeAnswers }) {
  const readyBy = new Date(Date.now() + 3 * 864e5).toLocaleDateString('en-US', {
    weekday: 'long', month: 'short', day: 'numeric',
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
          <Check className="w-7 h-7 text-emerald-600" strokeWidth={3} />
        </div>
        <div className="space-y-1.5">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Got everything — your build starts now
          </h1>
          <p className="text-slate-500 text-sm">
            Your site will be ready for review on <strong className="text-slate-800">{readyBy}</strong>.
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">While you wait</p>
        <div className="space-y-2.5">
          {[
            { icon: Globe, title: 'Connect your domain', desc: 'Point your web address now so launch day is instant.', section: 'Domains' },
            { icon: Clock, title: 'Watch the build', desc: 'Progress updates land on your Overview as we go.', section: null },
          ].map(item => (
            <div key={item.title} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <item.icon className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-800">{item.title}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] text-slate-400 font-medium">
        Need to change something you sent? Message us from <strong className="text-slate-600">Contact Agency</strong> — we'll fold it in.
      </p>
    </div>
  );
}
