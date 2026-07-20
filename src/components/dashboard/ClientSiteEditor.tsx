"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Save, Loader2, ExternalLink, Monitor, Tablet, Smartphone,
  Check, MousePointerClick, Image as ImageIcon, AlertCircle, Globe, SlidersHorizontal
} from 'lucide-react';
import { Renderers, COMPONENT_SCHEMAS } from '@/lib/blocks';
import ImagePickerModal from './ImagePickerModal';
import SectionInspector from './SectionInspector';

/**
 * ClientSiteEditor — the simple, Payload-style client editing experience.
 *
 * The agency designs the site in code; the client gets THIS editor:
 * a pixel-accurate live canvas (same Renderers as the published site) where
 * they can click any text to edit it inline (Elementor-style) and click any
 * image to swap it. No drag-drop, no adding/removing sections, no layout
 * controls — structure is locked to the designer's work.
 */

interface SitePage {
  page_slug: string;
  canvas_json: any[];
  theme_json: any;
  updated_at?: string;
  nav_label?: string | null;
  sort_order?: number;
  show_in_nav?: boolean;
  seo_title?: string | null;
  seo_description?: string | null;
  og_image?: string | null;
}

interface SiteTenant {
  id: string;
  name: string;
  subdomain: string;
  custom_domain: string | null;
  status?: string;
  plan_tier?: string;
  template_key?: string;
  favicon_url?: string | null;
}

interface ClientSiteEditorProps {
  tenantId: string;
  onBack?: () => void;
}

// ---------------------------------------------------------------------------
// Prop-path helpers (adapted from the pro editor's proven canvas logic)
// ---------------------------------------------------------------------------

/** Find which prop (or nested array item field) holds the clicked text/image. */
function findPropPath(props: any, targetVal: string, targetType: 'text' | 'image'): string | null {
  if (!targetVal || !props) return null;
  const cleanTarget = targetVal.trim().toLowerCase();

  if (targetType === 'text') {
    const fuzzyMatch = (propVal: string, clickVal: string) => {
      const cleanProp = propVal.replace(/\s+/g, ' ').trim().toLowerCase();
      const cleanClick = clickVal.replace(/\s+/g, ' ').trim();
      return cleanProp === cleanClick || (cleanProp.length > 5 && (cleanClick.includes(cleanProp) || cleanProp.includes(cleanClick)));
    };

    for (const key of Object.keys(props)) {
      const val = props[key];
      if (typeof val === 'string' && fuzzyMatch(val, cleanTarget)) return key;
    }
    for (const key of Object.keys(props)) {
      const val = props[key];
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          const item = val[i];
          if (item && typeof item === 'object') {
            for (const subKey of Object.keys(item)) {
              const subVal = item[subKey];
              if (typeof subVal === 'string' && fuzzyMatch(subVal, cleanTarget)) return `${key}.${i}.${subKey}`;
            }
          } else if (typeof item === 'string' && fuzzyMatch(item, cleanTarget)) {
            return `${key}.${i}`;
          }
        }
      }
    }
  } else {
    const cleanSrc = targetVal.split('?')[0];
    const photoIdx = cleanSrc.indexOf('/photo-');
    const srcFragment = photoIdx >= 0 ? cleanSrc.substring(photoIdx) : cleanSrc.substring(cleanSrc.lastIndexOf('/'));
    for (const key of Object.keys(props)) {
      const val = props[key];
      if (typeof val === 'string' && (val === targetVal || (srcFragment.length > 4 && val.includes(srcFragment)))) return key;
    }
    for (const key of Object.keys(props)) {
      const val = props[key];
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          const item = val[i];
          if (item && typeof item === 'object') {
            for (const subKey of Object.keys(item)) {
              const subVal = item[subKey];
              if (typeof subVal === 'string' && (subVal === targetVal || (srcFragment.length > 4 && subVal.includes(srcFragment)))) {
                return `${key}.${i}.${subKey}`;
              }
            }
          }
        }
      }
    }
  }
  return null;
}

/** Immutably set a value at a 1-part (`title`), 2-part (`tags.0`) or 3-part (`items.0.title`) path. */
function setPropAtPath(props: any, path: string, value: any): any {
  const parts = path.split('.');
  const newProps = { ...props };
  if (parts.length === 1) {
    newProps[parts[0]] = value;
  } else if (parts.length === 2) {
    const [arrayKey, indexStr] = parts;
    if (Array.isArray(newProps[arrayKey])) {
      const arr = [...newProps[arrayKey]];
      arr[parseInt(indexStr)] = value;
      newProps[arrayKey] = arr;
    }
  } else if (parts.length === 3) {
    const [arrayKey, indexStr, fieldKey] = parts;
    if (Array.isArray(newProps[arrayKey])) {
      const arr = [...newProps[arrayKey]];
      const idx = parseInt(indexStr);
      arr[idx] = { ...arr[idx], [fieldKey]: value };
      newProps[arrayKey] = arr;
    }
  }
  return newProps;
}

function getPropAtPath(props: any, path: string): any {
  const parts = path.split('.');
  let cur = props;
  for (const p of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[p];
  }
  return cur;
}

// ---------------------------------------------------------------------------
// Editable section wrapper — on-canvas text + image editing
// ---------------------------------------------------------------------------

function EditableSection({
  section,
  tenantId,
  onPropChange,
  onSelectImage,
  onOpenSettings,
  isSelected
}: {
  section: any;
  tenantId: string;
  onPropChange: (path: string, value: any) => void;
  onSelectImage: (path: string) => void;
  onOpenSettings: () => void;
  isSelected: boolean;
}) {
  const Renderer = Renderers[section.type];
  if (!Renderer) return null;

  return (
    <div
      data-section-id={section.id}
      className={`relative group/section ${isSelected ? 'ring-2 ring-indigo-500 ring-inset' : ''}`}
      onMouseOver={(e) => {
        const target = e.target as HTMLElement;
        const img = target.closest('img') as HTMLImageElement | null;
        const button = target.closest('button, a, [role="button"], [class*="btn"], [class*="button"]') as HTMLElement | null;
        const text = target.closest('h1, h2, h3, h4, h5, h6, p, span, li, [class*="title"], [class*="heading"]') as HTMLElement | null;

        if (img) {
          if (findPropPath(section.props, img.src, 'image')) img.classList.add('canvas-editable-hover-image');
        } else if (button) {
          if (findPropPath(section.props, button.innerText, 'text')) button.classList.add('canvas-editable-hover-text');
        } else if (text) {
          if (findPropPath(section.props, text.innerText, 'text')) text.classList.add('canvas-editable-hover-text');
        }
      }}
      onMouseOut={(e) => {
        const target = e.target as HTMLElement;
        target.classList.remove('canvas-editable-hover-text', 'canvas-editable-hover-image');
        target.querySelectorAll('.canvas-editable-hover-text, .canvas-editable-hover-image')
          .forEach(el => el.classList.remove('canvas-editable-hover-text', 'canvas-editable-hover-image'));
      }}
      onClick={(e) => {
        const target = e.target as HTMLElement;

        // Never navigate away while editing
        if (target.closest('a') || target.closest('button')) e.preventDefault();

        // Blocks that natively wire EditableText handle their own inline editing
        if (target.closest('[contenteditable="true"]')) return;

        const img = target.closest('img') as HTMLImageElement | null;
        const buttonEl = target.closest('button, a, [role="button"], [class*="btn"], [class*="button"]') as HTMLElement | null;
        const textEl = target.closest('h1, h2, h3, h4, h5, h6, p, span, li, [class*="title"], [class*="heading"]') as HTMLElement | null;

        if (img) {
          e.stopPropagation();
          const path = findPropPath(section.props, img.src, 'image');
          if (path) {
            document.querySelectorAll('.canvas-selected-image').forEach(el => el.classList.remove('canvas-selected-image'));
            img.classList.add('canvas-selected-image');
            const deselect = (ev: MouseEvent) => {
              if (ev.target !== img) {
                img.classList.remove('canvas-selected-image');
                document.removeEventListener('click', deselect);
              }
            };
            setTimeout(() => document.addEventListener('click', deselect), 10);
            onSelectImage(path);
          }
          return;
        }

        const activeEl = buttonEl || textEl;
        if (!activeEl) return;

        const path = findPropPath(section.props, activeEl.innerText, 'text');
        if (!path) return;

        e.stopPropagation();
        const originalValue = getPropAtPath(section.props, path);

        activeEl.contentEditable = 'true';
        activeEl.focus();
        activeEl.classList.add('canvas-selected-element');

        // Place the caret where the user clicked
        try {
          let range: Range | undefined;
          if (document.caretRangeFromPoint) {
            range = document.caretRangeFromPoint(e.clientX, e.clientY) || undefined;
          } else if ((document as any).caretPositionFromPoint) {
            const pos = (document as any).caretPositionFromPoint(e.clientX, e.clientY);
            if (pos) {
              range = document.createRange();
              range.setStart(pos.offsetNode, pos.offset);
              range.collapse(true);
            }
          }
          if (!range) {
            range = document.createRange();
            range.selectNodeContents(activeEl);
            range.collapse(false);
          }
          const sel = window.getSelection();
          sel?.removeAllRanges();
          sel?.addRange(range);
        } catch {}

        const handleBlur = () => {
          activeEl.contentEditable = 'false';
          activeEl.classList.remove('canvas-selected-element');
          const newText = activeEl.innerText;
          if (newText !== originalValue) onPropChange(path, newText);
          activeEl.removeEventListener('blur', handleBlur);
          activeEl.removeEventListener('keydown', handleKey);
        };
        const handleKey = (ev: KeyboardEvent) => {
          if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            activeEl.blur();
          }
          if (ev.key === 'Escape') {
            ev.preventDefault();
            activeEl.innerText = typeof originalValue === 'string' ? originalValue : '';
            activeEl.blur();
          }
        };
        activeEl.addEventListener('blur', handleBlur);
        activeEl.addEventListener('keydown', handleKey);
      }}
    >
      {/* Floating "edit section settings" button — opens the inspector for
          props you can't click on the canvas (button links, list items, etc.) */}
      <button
        onClick={(e) => { e.stopPropagation(); onOpenSettings(); }}
        className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg transition-all
          ${isSelected
            ? 'bg-indigo-600 text-white'
            : 'bg-white/95 text-slate-700 border border-slate-200 opacity-0 group-hover/section:opacity-100 hover:bg-indigo-600 hover:text-white'}`}
        title="Edit this section's content & links"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Edit
      </button>

      <Renderer
        {...section.props}
        isEditable={true}
        onPropChange={onPropChange}
        tenantId={tenantId}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main editor
// ---------------------------------------------------------------------------

// Prefer the designer-set nav_label persisted on the page row; fall back to
// this hardcoded map only for legacy rows saved before that column existed.
function pageLabel(page: { page_slug: string; nav_label?: string | null }): string {
  return page.nav_label || PAGE_LABELS[page.page_slug] || page.page_slug;
}

const PAGE_LABELS: Record<string, string> = {
  index: 'Home',
  services: 'Services',
  about: 'About',
  contact: 'Contact',
  reviews: 'Reviews'
};

export default function ClientSiteEditor({ tenantId, onBack }: ClientSiteEditorProps) {
  const [tenant, setTenant] = useState<SiteTenant | null>(null);
  const [pages, setPages] = useState<SitePage[]>([]);
  const [activeSlug, setActiveSlug] = useState<string>('index');
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [dirtySlugs, setDirtySlugs] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);

  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [imageTarget, setImageTarget] = useState<{ sectionId: string; path: string } | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  const pagesRef = useRef(pages);
  pagesRef.current = pages;
  const dirtyRef = useRef(dirtySlugs);
  dirtyRef.current = dirtySlugs;

  // Load site data
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const res = await fetch(`/api/site/${tenantId}`);
        const json = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setLoadError(json.error || 'Failed to load your site.');
          return;
        }
        setTenant(json.tenant);
        const loaded: SitePage[] = (json.pages || []).map((p: any) => ({
          ...p,
          canvas_json: Array.isArray(p.canvas_json) ? p.canvas_json : []
        }));
        setPages(loaded);
        setActiveSlug(loaded[0]?.page_slug || 'index');
      } catch (err: any) {
        if (!cancelled) setLoadError(err?.message || 'Network error loading your site.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [tenantId]);

  const activePage = pages.find(p => p.page_slug === activeSlug);
  const sections = activePage?.canvas_json || [];
  const selectedSection = sections.find((s: any) => s.id === selectedSectionId) || null;

  const updateSectionProp = useCallback((sectionId: string, path: string, value: any) => {
    setPages(prev => prev.map(page => {
      if (page.page_slug !== activeSlug) return page;
      return {
        ...page,
        canvas_json: page.canvas_json.map((sec: any) =>
          sec.id === sectionId ? { ...sec, props: setPropAtPath(sec.props || {}, path, value) } : sec
        )
      };
    }));
    setDirtySlugs(prev => new Set(prev).add(activeSlug));
    setSaveError(null);
  }, [activeSlug]);

  const handleSave = useCallback(async () => {
    const slugsToSave = Array.from(dirtyRef.current);
    if (slugsToSave.length === 0 || saving) return;
    setSaving(true);
    setSaveError(null);
    try {
      for (const slug of slugsToSave) {
        const page = pagesRef.current.find(p => p.page_slug === slug);
        if (!page) continue;
        const res = await fetch(`/api/site/${tenantId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pageSlug: slug, canvasJson: page.canvas_json })
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || `Failed to save ${slug}.`);
      }
      setDirtySlugs(new Set());
      setLastSavedAt(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    } catch (err: any) {
      setSaveError(err?.message || 'Save failed. Please try again.');
    } finally {
      setSaving(false);
    }
  }, [tenantId, saving]);

  // Ctrl+S / Cmd+S to save
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        handleSave();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleSave]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (dirtyRef.current.size > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, []);

  const hasUnsaved = dirtySlugs.size > 0;
  const liveUrl = tenant?.custom_domain
    ? `https://${tenant.custom_domain}`
    : tenant ? `https://${tenant.subdomain}.michaelfreddesigns.com` : '#';

  const theme = activePage?.theme_json || {};
  const canvasThemeStyle: React.CSSProperties = {
    ['--color-primary' as any]: theme.colorPrimary || '#3b82f6',
    ['--color-secondary' as any]: theme.colorSecondary || '#10b981',
    ['--color-accent' as any]: theme.colorAccent || '#f59e0b',
    ['--color-text' as any]: theme.colorText || '#1a1a1a',
    ['--color-card' as any]: theme.colorCard || '#ffffff',
    backgroundColor: theme.pageBackground || '#ffffff'
  };
  if (theme.fontFamily && theme.fontFamily !== 'System Default') {
    canvasThemeStyle.fontFamily = `"${theme.fontFamily}", sans-serif`;
  }
  const themeButtonRadius =
    theme.buttonRoundedness === 'sharp' ? '0px' :
    theme.buttonRoundedness === 'rounded-full' ? '9999px' :
    '12px';

  const canvasWidth = viewport === 'desktop' ? '100%' : viewport === 'tablet' ? '768px' : '400px';

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-100 z-50 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        <p className="text-sm font-semibold text-slate-500">Loading your site…</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="fixed inset-0 bg-slate-100 z-50 flex flex-col items-center justify-center gap-4 p-6">
        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
          <AlertCircle className="w-7 h-7 text-red-500" />
        </div>
        <p className="text-sm font-semibold text-slate-700 text-center max-w-sm">{loadError}</p>
        {onBack && (
          <button onClick={onBack} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-xl">
            Back to Dashboard
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-100 z-50 flex flex-col">
      {/* Match the live site's theme font + button styling in the preview */}
      {theme.fontFamily && theme.fontFamily !== 'System Default' && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${encodeURIComponent(theme.fontFamily)}:wght@300;400;500;600;700;800;900&display=swap`}
        />
      )}
      {theme.headingFont && theme.headingFont !== theme.fontFamily && (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${encodeURIComponent(theme.headingFont)}:wght@300;400;500;600;700;800;900&display=swap`}
        />
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        .client-editor-canvas button, .client-editor-canvas .btn, .client-editor-canvas a.inline-block {
          border-radius: ${themeButtonRadius} !important;
        }
        ${theme.headingFont ? `
        .client-editor-canvas h1, .client-editor-canvas h2, .client-editor-canvas h3, .client-editor-canvas h4, .client-editor-canvas h5, .client-editor-canvas h6 {
          font-family: "${theme.headingFont}", sans-serif !important;
        }` : ''}
      `}} />
      {/* Editor canvas interaction styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .canvas-editable-hover-text {
          outline: 2px dashed #3b82f6 !important;
          outline-offset: 4px;
          cursor: text !important;
          transition: outline 0.1s ease;
        }
        .canvas-editable-hover-image {
          outline: 2px dashed #10b981 !important;
          outline-offset: 2px;
          cursor: pointer !important;
          transition: outline 0.1s ease;
        }
        .canvas-selected-element {
          position: relative !important;
          outline: 2px solid #3b82f6 !important;
          outline-offset: 4px;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2) !important;
          border-radius: 4px;
        }
        .canvas-selected-image {
          outline: 2px solid #10b981 !important;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2) !important;
        }
      `}} />

      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 shadow-sm z-20">
        <div className="flex items-center gap-3 min-w-0">
          {onBack && (
            <button
              onClick={() => {
                if (hasUnsaved && !confirm('You have unsaved changes. Leave anyway?')) return;
                onBack();
              }}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
              title="Back to dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="min-w-0">
            <h1 className="text-sm font-extrabold text-slate-900 truncate">{tenant?.name}</h1>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Globe className="w-3 h-3" />
              <span className="truncate">{tenant?.custom_domain || `${tenant?.subdomain}.michaelfreddesigns.com`}</span>
            </div>
          </div>
        </div>

        {/* Page tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          {pages.map(page => (
            <button
              key={page.page_slug}
              onClick={() => { setActiveSlug(page.page_slug); setSelectedSectionId(null); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeSlug === page.page_slug ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {pageLabel(page)}
              {dirtySlugs.has(page.page_slug) && <span className="ml-1 text-amber-500">•</span>}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Viewport toggle */}
          <div className="hidden sm:flex items-center gap-0.5 bg-slate-100 p-1 rounded-xl">
            {([
              { key: 'desktop', Icon: Monitor },
              { key: 'tablet', Icon: Tablet },
              { key: 'mobile', Icon: Smartphone }
            ] as const).map(({ key, Icon }) => (
              <button
                key={key}
                onClick={() => setViewport(key)}
                className={`p-1.5 rounded-lg transition-colors ${viewport === key ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-700'}`}
                title={key}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Save status */}
          <div className="hidden lg:block text-[11px] font-semibold min-w-[90px] text-right">
            {saving ? (
              <span className="text-amber-500 flex items-center gap-1 justify-end"><Loader2 className="w-3 h-3 animate-spin" /> Saving…</span>
            ) : saveError ? (
              <span className="text-red-500">Save failed</span>
            ) : hasUnsaved ? (
              <span className="text-amber-500">Unsaved changes</span>
            ) : lastSavedAt ? (
              <span className="text-emerald-600 flex items-center gap-1 justify-end"><Check className="w-3 h-3" /> Saved {lastSavedAt}</span>
            ) : (
              <span className="text-slate-300">All changes saved</span>
            )}
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-xl transition-colors"
          >
            View Live <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleSave}
            disabled={!hasUnsaved || saving}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
            Save
          </button>
        </div>
      </header>

      {/* Mobile page tabs */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-2 flex gap-1 overflow-x-auto shrink-0">
        {pages.map(page => (
          <button
            key={page.page_slug}
            onClick={() => setActiveSlug(page.page_slug)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeSlug === page.page_slug ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500'
            }`}
          >
            {pageLabel(page)}
            {dirtySlugs.has(page.page_slug) && <span className="ml-1 text-amber-500">•</span>}
          </button>
        ))}
      </div>

      {/* Hint banner */}
      <div className="bg-indigo-600 text-white px-4 py-2 flex items-center justify-center gap-2 text-xs font-semibold shrink-0">
        <MousePointerClick className="w-3.5 h-3.5" />
        Click any text to edit it
        <span className="opacity-40 mx-1">·</span>
        <ImageIcon className="w-3.5 h-3.5" />
        Click any photo to swap it
        <span className="opacity-40 mx-1">·</span>
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Hover a section &amp; hit <span className="font-black">Edit</span> for buttons, links &amp; lists
      </div>

      {saveError && (
        <div className="bg-red-50 border-b border-red-200 text-red-700 px-4 py-2 text-xs font-semibold text-center shrink-0">
          {saveError}
        </div>
      )}

      {/* Canvas + Inspector row */}
      <div className="flex-1 flex min-h-0">
        <main className="flex-1 overflow-auto py-8 px-4 flex justify-center">
          <motion.div
            key={`${activeSlug}-${viewport}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="client-editor-canvas @container bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-xl ring-1 ring-slate-900/5 overflow-hidden h-fit transition-all duration-300"
            style={{ width: canvasWidth, maxWidth: '1400px', ...canvasThemeStyle }}
          >
            {sections.length === 0 ? (
              <div className="py-32 text-center">
                <h2 className="text-xl font-bold text-slate-800 mb-2">This page is empty</h2>
                <p className="text-sm text-slate-400">Your designer hasn't added content to this page yet.</p>
              </div>
            ) : (
              sections.map((section: any) => (
                <EditableSection
                  key={section.id}
                  section={section}
                  tenantId={tenantId}
                  isSelected={selectedSectionId === section.id}
                  onPropChange={(path, value) => updateSectionProp(section.id, path, value)}
                  onSelectImage={(path) => setImageTarget({ sectionId: section.id, path })}
                  onOpenSettings={() => setSelectedSectionId(section.id)}
                />
              ))
            )}
          </motion.div>
        </main>

        {/* Inspector panel — edit every prop of the selected section (links, lists, images) */}
        {selectedSection && (
          <SectionInspector
            section={selectedSection}
            schema={COMPONENT_SCHEMAS[selectedSection.type]}
            onChange={(path, value) => updateSectionProp(selectedSection.id, path, value)}
            onPickImage={(path) => setImageTarget({ sectionId: selectedSection.id, path })}
            onClose={() => setSelectedSectionId(null)}
          />
        )}
      </div>

      {/* Image picker */}
      <ImagePickerModal
        isOpen={imageTarget !== null}
        tenantId={tenantId}
        onClose={() => setImageTarget(null)}
        onSelect={(url) => {
          if (imageTarget) updateSectionProp(imageTarget.sectionId, imageTarget.path, url);
        }}
      />
    </div>
  );
}
