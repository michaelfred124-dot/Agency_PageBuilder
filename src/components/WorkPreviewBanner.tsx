'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, X, Sparkles } from 'lucide-react';
import { getSupabaseBrowserClient } from '@/lib/supabase';

const SITE_LABELS: Record<string, string> = {
  'atelier-hair-studio': 'Atelier Hair Studio',
  'brighter-solar': 'Brighter Solar',
  'clarity-dental': 'Clarity Dental',
  'ember-and-rye': 'Ember & Rye',
  'golden-thread-events': 'Golden Thread Events',
  'greenscape-landscaping': 'Greenscape Landscaping',
  'iron-edge-fitness': 'Iron Edge Fitness',
  'lauren-wilson-photo': 'Lauren Wilson Photo',
  'maison-boutique': 'Maison Boutique',
  'meridian-properties': 'Meridian Properties',
  'northwood-coffee': 'Northwood Coffee',
  'paws-and-pamper': 'Paws & Pamper',
  'ridge-line-auto': 'Ridge Line Auto',
  'solene-boutique': 'Solène Boutique',
  'solstice-yoga': 'Solstice Yoga',
  'spotless-home-co': 'Spotless Home Co.',
  'sterling-law-group': 'Sterling Law Group',
  'valley-prohome': 'Valley ProHome',
};

export default function WorkPreviewBanner() {
  const pathname = usePathname();
  const router = useRouter();
  const [dismissed, setDismissed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  // Extract template slug from /work/[slug]/...
  const slug = pathname.split('/')[2] ?? '';
  const templateLabel = SITE_LABELS[slug] ?? null;

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session?.user);
      setChecking(false);
    });
  }, []);

  // Only show on individual template pages, not the /work gallery
  if (!templateLabel || dismissed || checking) return null;

  const handleCTA = () => {
    if (loggedIn) {
      router.push('/dashboard');
    } else {
      router.push(`/login?redirect=/dashboard&template=${slug}`);
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[999] flex items-center justify-between gap-3 px-4 md:px-8 py-3 md:py-0 md:h-14"
      style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      {/* Left: context label */}
      <div className="flex items-center gap-2.5 min-w-0">
        <Sparkles className="w-3.5 h-3.5 shrink-0 text-yellow-400" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 hidden sm:block">
          You&rsquo;re previewing
        </p>
        <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-white truncate">
          {templateLabel}
        </span>
        <span className="hidden md:block text-[11px] text-white/30 uppercase tracking-widest">
          &mdash; like what you see?
        </span>
      </div>

      {/* Right: CTA + dismiss */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleCTA}
          className="flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] rounded-sm transition-all"
          style={{ backgroundColor: '#ffffff', color: '#0f0f0f' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#facc15')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
        >
          {loggedIn ? 'Go to Dashboard' : 'Get Started Free'}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="p-2 text-white/30 hover:text-white/70 transition-colors"
          aria-label="Dismiss preview bar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
