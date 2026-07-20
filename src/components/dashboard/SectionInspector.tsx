"use client";
import React from 'react';
import { X, Link2, Type, Image as ImageIcon, List, Plus, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';

/**
 * SectionInspector — a properties panel for the client editor.
 *
 * Instead of relying on each block's (often incomplete) schema, it derives the
 * editable fields from the section's ACTUAL props. That means every prop the
 * designer exposed becomes editable here — including the things you can't click
 * on the canvas: button destinations (links/URLs), items inside lists, and
 * images that are CSS backgrounds rather than <img> tags.
 *
 * Schema labels (COMPONENT_SCHEMAS[type]) are used when present, purely to give
 * fields nicer names; the field set itself always comes from the live props.
 */

const IMAGE_KEYWORDS = ['image', 'img', 'photo', 'avatar', 'thumbnail', 'cover', 'background', 'bg', 'hero', 'banner', 'logo', 'icon', 'picture', 'src'];
const CONTROL_PROPS = new Set(['isEditable', 'onPropChange', 'tenantId', 'id', 'type', 'children', 'className']);

function looksLikeImage(value: any): boolean {
  return typeof value === 'string'
    && /^(https?:\/\/|\/|data:image)/.test(value)
    && /(\.(jpe?g|png|webp|gif|svg|avif)(\?|$)|unsplash|images\.|cloudinary|supabase|\/photo-|\/screenshots\/)/i.test(value);
}
function isImageField(name: string, value: any): boolean {
  if (looksLikeImage(value)) return true;
  const n = name.toLowerCase();
  return IMAGE_KEYWORDS.some(kw => n.includes(kw)) && (typeof value === 'string');
}
function isLinkField(name: string, value: any): boolean {
  const n = name.toLowerCase();
  if (isImageField(name, value)) return false;
  return /link|href|url|cta.*link|route/.test(n);
}
function isLongText(value: any): boolean {
  return typeof value === 'string' && (value.length > 70 || value.includes('\n'));
}

/** Prettify a prop name → "ctaText" -> "Cta Text", "secondaryCtaLink" -> "Secondary Cta Link". */
function humanize(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

/** Build name -> label lookup from a block schema (top-level + arrayFields). */
function buildLabelMap(schema: any): Record<string, string> {
  const map: Record<string, string> = {};
  const fields = schema?.fields;
  if (Array.isArray(fields)) {
    for (const f of fields) {
      if (f?.name) map[f.name] = f.label || humanize(f.name);
      if (Array.isArray(f?.arrayFields)) {
        for (const sf of f.arrayFields) {
          if (sf?.name) map[`${f.name}.${sf.name}`] = sf.label || humanize(sf.name);
        }
      }
    }
  }
  return map;
}

interface SectionInspectorProps {
  section: any;
  schema: any;
  onChange: (path: string, value: any) => void;
  onPickImage: (path: string) => void;
  onClose: () => void;
}

export default function SectionInspector({ section, schema, onChange, onPickImage, onClose }: SectionInspectorProps) {
  const storedProps = section?.props || {};
  const defaults = schema?.defaultProps || {};
  const labels = buildLabelMap(schema);
  const title = schema?.description || humanize(section?.type || 'Section');

  // Effective props = the designer's declared defaults overlaid with what's
  // actually stored. This surfaces declared fields (e.g. button links) even
  // when they weren't persisted, so nothing the designer exposed is hidden.
  const props: Record<string, any> = { ...defaults, ...storedProps };

  const editable = (k: string) => {
    if (CONTROL_PROPS.has(k) || typeof props[k] === 'function') return false;
    const v = props[k];
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || Array.isArray(v);
  };

  // Order: schema field order first (nice grouping), then any extra stored props.
  const schemaOrder = Array.isArray(schema?.fields) ? schema.fields.map((f: any) => f.name) : [];
  const keys = Array.from(new Set([...schemaOrder, ...Object.keys(props)])).filter(editable);

  const labelFor = (path: string, fallbackName: string) => labels[path] || humanize(fallbackName);

  // ---- Field renderers ----------------------------------------------------

  const renderStringInput = (path: string, value: string, name: string) => {
    if (isImageField(name, value)) {
      return (
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
            {value
              ? <img src={value} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              : <ImageIcon className="w-5 h-5 text-slate-300" />}
          </div>
          <button
            onClick={() => onPickImage(path)}
            className="flex-1 px-3 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors"
          >
            Change image
          </button>
        </div>
      );
    }
    if (isLinkField(name, value)) {
      return (
        <div className="relative">
          <Link2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={value || ''}
            onChange={e => onChange(path, e.target.value)}
            placeholder="https://…  ·  /contact  ·  tel:5551234"
            className="w-full pl-8 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 font-mono text-slate-700"
          />
        </div>
      );
    }
    if (isLongText(value)) {
      return (
        <textarea
          value={value || ''}
          onChange={e => onChange(path, e.target.value)}
          rows={3}
          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y"
        />
      );
    }
    return (
      <input
        type="text"
        value={value || ''}
        onChange={e => onChange(path, e.target.value)}
        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    );
  };

  const renderField = (name: string) => {
    const value = props[name];
    const label = labelFor(name, name);

    // Boolean toggle
    if (typeof value === 'boolean') {
      return (
        <button
          onClick={() => onChange(name, !value)}
          className="flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
          {value ? <ToggleRight className="w-6 h-6 text-indigo-600" /> : <ToggleLeft className="w-6 h-6 text-slate-300" />}
          {value ? 'On' : 'Off'}
        </button>
      );
    }

    // Number
    if (typeof value === 'number') {
      return (
        <input
          type="number"
          value={value}
          onChange={e => onChange(name, e.target.value === '' ? 0 : Number(e.target.value))}
          className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      );
    }

    // Array
    if (Array.isArray(value)) {
      const isObjectArray = value.length > 0 && typeof value[0] === 'object' && value[0] !== null;
      const isStringArray = value.length === 0 || typeof value[0] === 'string';

      const addItem = () => {
        // Clone the last existing item so structural/enum fields (icons, layout
        // flags) stay valid; the client then edits the visible text. Falls back
        // to an empty string for simple string lists.
        const source = value.length > 0 ? value[value.length - 1] : (isObjectArray ? {} : '');
        const clone = source && typeof source === 'object'
          ? JSON.parse(JSON.stringify(source))
          : '';
        onChange(name, [...value, clone]);
      };
      const removeItem = (idx: number) => onChange(name, value.filter((_: any, i: number) => i !== idx));

      return (
        <div className="space-y-2">
          {value.map((item: any, i: number) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/60 p-2.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{humanize(name)} {i + 1}</span>
                <button onClick={() => removeItem(i)} className="p-1 text-slate-300 hover:text-red-500 transition-colors" title="Remove">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              {isObjectArray ? (
                Object.keys(item).filter(sk => typeof item[sk] === 'string' || typeof item[sk] === 'number').map(sk => (
                  <div key={sk}>
                    <label className="block text-[10px] font-semibold text-slate-400 mb-1">{labelFor(`${name}.${sk}`, sk)}</label>
                    {renderStringInput(`${name}.${i}.${sk}`, String(item[sk] ?? ''), sk)}
                  </div>
                ))
              ) : isStringArray ? (
                renderStringInput(`${name}.${i}`, String(item ?? ''), name)
              ) : null}
            </div>
          ))}
          <button
            onClick={addItem}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-indigo-600 border border-dashed border-indigo-300 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add {humanize(name).replace(/s$/, '') || 'item'}
          </button>
        </div>
      );
    }

    // String (text / link / image / textarea)
    return renderStringInput(name, String(value ?? ''), name);
  };

  const fieldIcon = (name: string) => {
    const v = props[name];
    if (Array.isArray(v)) return <List className="w-3.5 h-3.5 text-slate-400" />;
    if (isImageField(name, v)) return <ImageIcon className="w-3.5 h-3.5 text-emerald-500" />;
    if (isLinkField(name, v)) return <Link2 className="w-3.5 h-3.5 text-indigo-500" />;
    return <Type className="w-3.5 h-3.5 text-slate-400" />;
  };

  return (
    <aside className="w-80 shrink-0 bg-white border-l border-slate-200 flex flex-col h-full shadow-xl">
      <div className="h-14 px-4 flex items-center justify-between border-b border-slate-200 shrink-0">
        <div className="min-w-0">
          <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Edit Section</p>
          <p className="text-sm font-extrabold text-slate-900 truncate">{title}</p>
        </div>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {keys.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-8">This section has no editable settings.</p>
        ) : (
          keys.map(name => (
            <div key={name}>
              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 mb-1.5">
                {fieldIcon(name)}
                {labelFor(name, name)}
              </label>
              {renderField(name)}
            </div>
          ))
        )}
      </div>

      <div className="p-3 border-t border-slate-100 shrink-0">
        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
          Changes preview instantly. Press <span className="font-bold text-slate-500">Save</span> to publish.
        </p>
      </div>
    </aside>
  );
}
