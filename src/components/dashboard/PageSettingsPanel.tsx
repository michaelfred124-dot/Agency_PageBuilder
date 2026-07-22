"use client";
import React, { useState, useEffect } from 'react';
import { X, Search, Palette, Image as ImageIcon, Loader2, Check, MousePointerClick } from 'lucide-react';

/**
 * PageSettingsPanel — client-facing SEO, navigation, and brand controls.
 *
 * SEO + Nav are per-page (saved to the active page's sites_data row and read by
 * the live tenant route's generateMetadata). Brand is site-wide (theme_json on
 * every page) so the whole site restyles consistently.
 */

interface PageLike {
  page_slug: string;
  nav_label?: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  og_image?: string | null;
  show_in_nav?: boolean;
}

interface PageSettingsPanelProps {
  page: PageLike;
  theme: any;
  onClose: () => void;
  onSave: (payload: { pageSettings: any; theme: any }) => Promise<void>;
  openImagePicker: (onSelect: (url: string) => void) => void;
}

const FONT_OPTIONS = [
  'System Default', 'Inter', 'Poppins', 'Montserrat', 'Playfair Display',
  'Lora', 'Roboto', 'Oswald', 'Raleway', 'Merriweather', 'DM Sans',
];

const ROUNDNESS = [
  { value: 'sharp', label: 'Sharp' },
  { value: 'rounded', label: 'Rounded' },
  { value: 'rounded-full', label: 'Pill' },
];

export default function PageSettingsPanel({ page, theme, onClose, onSave, openImagePicker }: PageSettingsPanelProps) {
  const [tab, setTab] = useState<'seo' | 'brand'>('seo');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Per-page SEO + nav
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [navLabel, setNavLabel] = useState('');
  const [showInNav, setShowInNav] = useState(true);

  // Site-wide brand
  const [t, setT] = useState<any>({});

  useEffect(() => {
    setSeoTitle(page.seo_title || '');
    setSeoDescription(page.seo_description || '');
    setOgImage(page.og_image || '');
    setNavLabel(page.nav_label || '');
    setShowInNav(page.show_in_nav !== false);
  }, [page]);

  useEffect(() => { setT(theme || {}); }, [theme]);

  const setThemeField = (k: string, v: string) => setT((prev: any) => ({ ...prev, [k]: v }));

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      await onSave({
        pageSettings: { seoTitle, seoDescription, ogImage, navLabel, showInNav },
        theme: t,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  };

  const colorRow = (key: string, label: string, fallback: string) => (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={t[key] || ''}
          onChange={e => setThemeField(key, e.target.value)}
          placeholder={fallback}
          className="w-24 px-2 py-1 text-xs font-mono border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="color"
          value={t[key] || fallback}
          onChange={e => setThemeField(key, e.target.value)}
          className="w-8 h-8 rounded-md border border-slate-200 cursor-pointer bg-white"
          title={label}
        />
      </div>
    </div>
  );

  return (
    <aside className="w-80 shrink-0 bg-white border-l border-slate-200 flex flex-col h-full shadow-xl">
      <div className="h-14 px-4 flex items-center justify-between border-b border-slate-200 shrink-0">
        <div className="min-w-0">
          <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Page Settings</p>
          <p className="text-sm font-extrabold text-slate-900 truncate">{navLabel || page.page_slug}</p>
        </div>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-2 border-b border-slate-100 shrink-0">
        {([
          { key: 'seo', label: 'SEO & Nav', Icon: Search },
          { key: 'brand', label: 'Brand', Icon: Palette },
        ] as const).map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg transition-colors ${
              tab === key ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Icon className="w-3.5 h-3.5" /> {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {tab === 'seo' ? (
          <>
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Page Title <span className="text-slate-400 font-normal">(browser tab & Google)</span></label>
              <input
                type="text"
                value={seoTitle}
                onChange={e => setSeoTitle(e.target.value)}
                placeholder="e.g. Volt Vikings — Tucson Electricians"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <p className="text-[10px] text-slate-400 mt-1">{seoTitle.length}/60 recommended</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Meta Description <span className="text-slate-400 font-normal">(Google snippet)</span></label>
              <textarea
                value={seoDescription}
                onChange={e => setSeoDescription(e.target.value)}
                rows={3}
                placeholder="A short sentence describing this page for search results."
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y"
              />
              <p className="text-[10px] text-slate-400 mt-1">{seoDescription.length}/160 recommended</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Social Share Image</label>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                  {ogImage
                    ? <img src={ogImage} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    : <ImageIcon className="w-5 h-5 text-slate-300" />}
                </div>
                <div className="flex-1 space-y-1.5">
                  <button
                    onClick={() => openImagePicker((url) => setOgImage(url))}
                    className="w-full px-3 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors"
                  >
                    Choose image
                  </button>
                  {ogImage && (
                    <button onClick={() => setOgImage('')} className="w-full text-[10px] text-slate-400 hover:text-red-500">Remove</button>
                  )}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Shown when the page is shared on social media.</p>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Page Name <span className="text-slate-400 font-normal">(in your editor)</span></label>
                <input
                  type="text"
                  value={navLabel}
                  onChange={e => setNavLabel(e.target.value)}
                  placeholder={page.page_slug}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <p className="text-[10px] text-slate-400 mt-1">Labels this page's tab in your editor.</p>
              </div>

              <button
                onClick={() => setShowInNav(v => !v)}
                className="flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold text-slate-600 text-left">Include in search sitemap<br /><span className="font-normal text-slate-400 text-[10px]">Helps Google find this page</span></span>
                <span className={`relative w-10 h-5 rounded-full transition-colors shrink-0 ${showInNav ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${showInNav ? 'translate-x-5' : ''}`} />
                </span>
              </button>

              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                <MousePointerClick className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-blue-700 leading-relaxed">
                  To change your <strong>menu links</strong>, click your page's header bar and edit its <strong>Nav Menu</strong> list.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="text-[11px] text-slate-400 leading-relaxed">Brand changes apply to <strong className="text-slate-500">every page</strong> of your site.</p>
            <div className="space-y-3">
              {colorRow('pageBackground', 'Page Background', '#ffffff')}
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Body Font</label>
                <select
                  value={t.fontFamily || 'System Default'}
                  onChange={e => setThemeField('fontFamily', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                >
                  {FONT_OPTIONS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Heading Font</label>
                <select
                  value={t.headingFont || t.fontFamily || 'System Default'}
                  onChange={e => setThemeField('headingFont', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                >
                  {FONT_OPTIONS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Button Corners</label>
                <div className="flex gap-1.5">
                  {ROUNDNESS.map(r => (
                    <button
                      key={r.value}
                      onClick={() => setThemeField('buttonRoundedness', r.value)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                        (t.buttonRoundedness || 'rounded') === r.value
                          ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
              <Palette className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Your template's colors are hand-picked by your designer. To recolor a specific element, select it and use its settings — or ask your designer for a palette change.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="p-3 border-t border-slate-100 shrink-0">
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl transition-colors"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <Check className="w-4 h-4" /> : null}
          {saving ? 'Saving…' : saved ? 'Saved' : 'Save settings'}
        </button>
      </div>
    </aside>
  );
}
