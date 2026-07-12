"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Save, Plus, Trash2, GripVertical, Settings, LayoutTemplate, X, SlidersHorizontal, Monitor, Tablet, Smartphone, Search, ChevronDown, AlignLeft, AlignCenter, AlignRight, Type, Paintbrush, Globe, ShoppingBag, Database, Image as ImageIcon, Upload, Eye, Key, FolderOpen, ChevronRight, Rocket, Layers, LayoutGrid, Undo, Redo, Cloud, Edit3, AlertCircle, Copy, ChevronUp, Keyboard, MoveUp, MoveDown, Heading, AlignJustify, Square, SeparatorHorizontal, Minus, Video, Star } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PreviewWrapper from './PreviewWrapper';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDraggable,
  useDroppable,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { ComponentType, SectionData, COMPONENT_SCHEMAS, Renderers, getDefaultInlineElementProps } from '@/lib/blocks';
import { TEMPLATES } from '@/lib/templates';

export type PageData = {
  id: string;
  name: string;
  slug: string;
  sections: SectionData[];
};

interface SiteEditorProps {
  siteName: string;
  siteId?: string;
  tenantId?: string;
  initialPages?: PageData[];
  initialSections?: SectionData[]; // Kept for backwards compatibility fallback
  onBack: () => void;
  user?: any;
  mediaFiles?: any[];
  globalSettings?: any;
  setGlobalSettings?: (s: any) => void;
  handleUploadMediaClick?: () => void;
  handleDeleteMedia?: (id: string) => void;
  saveSettings?: () => void;
  onSave?: (pages: PageData[], theme: any) => void;
  onPublish?: (pages: PageData[], theme: any) => void;
  initialTheme?: any;
  planTier?: string;
}

// --- Google Fonts ---
const GOOGLE_FONTS = [
  { name: 'Space Grotesk', label: 'Space Grotesk', category: 'Neo Sans' },
  { name: 'Inter', label: 'Inter', category: 'Modern Sans' },
  { name: 'Outfit', label: 'Outfit', category: 'Modern Sans' },
  { name: 'DM Sans', label: 'DM Sans', category: 'Modern Sans' },
  { name: 'Plus Jakarta Sans', label: 'Plus Jakarta', category: 'Modern Sans' },
  { name: 'Poppins', label: 'Poppins', category: 'Rounded' },
  { name: 'Nunito', label: 'Nunito', category: 'Rounded' },
  { name: 'Playfair Display', label: 'Playfair Display', category: 'Elegant Serif' },
  { name: 'Lora', label: 'Lora', category: 'Elegant Serif' },
  { name: 'Merriweather', label: 'Merriweather', category: 'Elegant Serif' },
  { name: 'Space Mono', label: 'Space Mono', category: 'Monospace' },
  { name: 'JetBrains Mono', label: 'JetBrains Mono', category: 'Monospace' },
];

// --- Add-Element Panel configs ---
const ELEMENT_TYPE_CONFIGS = [
  { type: 'Heading', label: 'Heading', icon: 'Heading', color: 'bg-blue-100 text-blue-700', desc: 'Title text' },
  { type: 'Paragraph', label: 'Paragraph', icon: 'AlignLeft', color: 'bg-gray-100 text-gray-700', desc: 'Body copy' },
  { type: 'Button', label: 'Button', icon: 'Square', color: 'bg-indigo-100 text-indigo-700', desc: 'Call to action' },
  { type: 'Image', label: 'Image', icon: 'Image', color: 'bg-green-100 text-green-700', desc: 'Photo or asset' },
  { type: 'Divider', label: 'Divider', icon: 'Minus', color: 'bg-orange-100 text-orange-700', desc: 'Horizontal line' },
  { type: 'Spacer', label: 'Spacer', icon: 'SeparatorHorizontal', color: 'bg-purple-100 text-purple-700', desc: 'Empty space' },
  { type: 'Container', label: 'Container', icon: 'FolderOpen', color: 'bg-slate-100 text-slate-700', desc: 'Group elements' },
  { type: 'Video', label: 'Video', icon: 'Video', color: 'bg-red-100 text-red-700', desc: 'YouTube / Vimeo' },
  { type: 'GoogleMap', label: 'Google Maps', icon: 'MapPin', color: 'bg-emerald-100 text-emerald-700', desc: 'Interactive map' },
  { type: 'StarRating', label: 'Star Rating', icon: 'Star', color: 'bg-yellow-100 text-yellow-700', desc: 'Reviews stars' },
  { type: 'Icon', label: 'Icon', icon: 'Sparkles', color: 'bg-cyan-100 text-cyan-700', desc: 'Lucide icon' },
  { type: 'ImageBox', label: 'Image Box', icon: 'LayoutGrid', color: 'bg-sky-100 text-sky-700', desc: 'Card with image' },
  { type: 'IconBox', label: 'Icon Box', icon: 'Layers', color: 'bg-teal-100 text-teal-700', desc: 'Feature list box' },
  { type: 'BasicGallery', label: 'Basic Gallery', icon: 'LayoutGrid', color: 'bg-green-100 text-green-700', desc: 'Grid of images' },
  { type: 'ImageCarousel', label: 'Image Carousel', icon: 'Images', color: 'bg-sky-100 text-sky-700', desc: 'Sliding image show' },
  { type: 'IconList', label: 'Icon List', icon: 'List', color: 'bg-teal-100 text-teal-700', desc: 'List with custom icons' },
  { type: 'Counter', label: 'Counter', icon: 'Smile', color: 'bg-amber-100 text-amber-700', desc: 'Fun fact tracker' },

  { type: 'Testimonial', label: 'Testimonial', icon: 'MessageSquare', color: 'bg-pink-100 text-pink-700', desc: 'Client quote' },
  { type: 'Tabs', label: 'Tabs', icon: 'Folder', color: 'bg-indigo-100 text-indigo-700', desc: 'Tabbed content sections' },
  { type: 'Accordion', label: 'Accordion', icon: 'Menu', color: 'bg-indigo-100 text-indigo-700', desc: 'Collapsible QA' },
  { type: 'Toggle', label: 'Toggle', icon: 'ChevronDown', color: 'bg-amber-100 text-amber-700', desc: 'Independently collapsible FAQ' },
  { type: 'SocialIcons', label: 'Social Icons', icon: 'Share2', color: 'bg-blue-100 text-blue-700', desc: 'Profile links' },
  { type: 'ProgressBar', label: 'Progress Bar', icon: 'SlidersHorizontal', color: 'bg-violet-100 text-violet-700', desc: 'Skill stats metric' },
  { type: 'SoundCloud', label: 'SoundCloud', icon: 'Music', color: 'bg-orange-100 text-orange-700', desc: 'SoundCloud player' },
  { type: 'Shortcode', label: 'Shortcode', icon: 'Brackets', color: 'bg-gray-100 text-gray-700', desc: 'Shortcode text box' },
  { type: 'HTML', label: 'HTML', icon: 'Code', color: 'bg-red-100 text-red-700', desc: 'Custom HTML snippet' },
  { type: 'MenuAnchor', label: 'Menu Anchor', icon: 'Anchor', color: 'bg-blue-100 text-blue-700', desc: 'Scroll anchor point' },
  { type: 'Sidebar', label: 'Sidebar', icon: 'Columns', color: 'bg-purple-100 text-purple-700', desc: 'Sidebar widget area' },
  { type: 'Alert', label: 'Alert', icon: 'AlertCircle', color: 'bg-rose-100 text-rose-700', desc: 'Notification message' },
];


// --- Undo/Redo History Hook ---
function useHistory<T>(initial: T) {
  const [history, setHistory] = useState<T[]>([initial]);
  const [index, setIndex] = useState(0);

  const state = history[index];

  const push = useCallback((newState: T | ((prev: T) => T)) => {
    setHistory(prev => {
      const current = prev[index];
      const next = typeof newState === 'function' ? (newState as (prev: T) => T)(current) : newState;
      // Drop future states when a new action is committed
      const newHistory = prev.slice(0, index + 1);
      newHistory.push(next);
      // Cap history at 50 entries to save memory
      return newHistory.slice(-50);
    });
    setIndex(prev => Math.min(prev + 1, 49));
  }, [index]);

  const undo = useCallback(() => {
    setIndex(prev => Math.max(0, prev - 1));
  }, []);

  const redo = useCallback(() => {
    setIndex(prev => Math.min(history.length - 1, prev + 1));
  }, [history.length]);

  const canUndo = index > 0;
  const canRedo = index < history.length - 1;

  return { state, push, undo, redo, canUndo, canRedo, historyLength: history.length, historyIndex: index };
}

// --- Toast Notification System ---
type ToastMsg = { id: number; message: string; type: 'success' | 'error' | 'info' };

function useToast() {
  const [toasts, setToasts] = useState<ToastMsg[]>([]);
  const addToast = useCallback((message: string, type: ToastMsg['type'] = 'success') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3200);
  }, []);
  return { toasts, addToast };
}

function ToastContainer({ toasts }: { toasts: ToastMsg[] }) {
  const icons: Record<string, string> = { success: '✓', error: '✕', info: 'ℹ' };
  const colors: Record<string, string> = {
    success: 'bg-green-600 text-white border-green-700',
    error: 'bg-red-600 text-white border-red-700',
    info: 'bg-gray-900 text-white border-gray-700',
  };
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(t => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold pointer-events-auto border ${colors[t.type]}`}
          >
            <span className="text-base leading-none">{icons[t.type]}</span>
            {t.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Preset color options
const COLOR_PRESETS = [
  { name: 'Transparent', value: 'transparent' },
  { name: 'Pure White', value: '#ffffff' },
  { name: 'Linen Light', value: '#F8F5F2' },
  { name: 'Charcoal Dark', value: '#1A1A1A' },
  { name: 'Forest Green', value: '#4C6B36' },
  { name: 'Solar Gold', value: '#E5A93B' },
  { name: 'Coffee Brown', value: '#8B5E3C' },
  { name: 'Crimson Red', value: '#C62828' }
];

const CATEGORIES = [
  {
    id: 'custom_layout',
    name: 'My collections',
    items: ['CustomSection', 'ProjectGrid', 'Gallery', 'Banner', 'ShopifyProduct']
  },
  {
    id: 'navigation',
    name: 'Navigation',
    items: ['BSHeader', 'NWFooter', 'GSFooter', 'LWFooter', 'BSFooter', 'RFooter']
  },
  {
    id: 'header',
    name: 'Header',
    items: ['Hero', 'GSHero', 'NWHero', 'LWHero', 'BSHero', 'GSCta', 'LWCta', 'BSCTA', 'RHero']
  },
  {
    id: 'features',
    name: 'Features',
    items: ['Feature', 'GSServices', 'BSServices', 'ProductGrid', 'BSStats', 'BSSteps', 'RFeatures', 'RMenuPreview']
  },
  {
    id: 'about_us',
    name: 'About us',
    items: ['GSAbout', 'NWEthos', 'LWAbout', 'LWServices', 'RChef']
  },
  {
    id: 'testimonial',
    name: 'Testimonial',
    items: ['TestimonialList', 'LWTestimonials', 'BSTestimonials', 'NWCommunity', 'RReviews']
  },
  {
    id: 'faqs',
    name: 'FAQs',
    items: ['PricingTable', 'BSPricing', 'NWMenu', 'NWFindUs', 'NWOrderAhead', 'LWPortfolio', 'GSProjects', 'RHoursInfo', 'RAtmosphere', 'RCta']
  },
  {
    id: 'contact',
    name: 'Contact',
    items: ['ContactForm']
  },
  {
    id: 'widgets',
    name: 'Widgets & Integrations',
    items: ['GoogleMap', 'CalendlyEmbed', 'MailchimpForm', 'InstagramFeed']
  }
];

// Helper component to render a live thumbnail preview of a block
function BlockPreview({ type }: { type: ComponentType | string }) {
  const Renderer = Renderers[type as ComponentType];
  const defaultProps = COMPONENT_SCHEMAS[type]?.defaultProps || {};

  if (!Renderer) return null;

  return (
    <div className="w-full h-[90px] bg-white border-2 border-black/10 rounded-lg overflow-hidden relative select-none pointer-events-none bg-stone-50 flex items-start justify-start shadow-inner">
      <div 
        className="@container origin-top-left shrink-0 absolute top-0 left-0"
        style={{
          width: '1180px',
          height: '450px',
          transform: 'scale(0.2)', // 236px / 1180px = 0.2
        }}
      >
        <Renderer {...defaultProps} />
      </div>
    </div>
  );
}

// Draggable Sidebar Item for adding blocks
function DraggableBlockItem({ type, description, onClick, iconName, label, color }: { type: ComponentType | string; description: string; onClick: () => void; iconName?: string; label?: string; color?: string; }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `new-block-${type}`,
    data: {
      isNewBlock: true,
      blockType: type
    }
  });

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
    zIndex: 9999,
  } : undefined;

  const Icon = iconName ? ((LucideIcons as any)[iconName] || LucideIcons.Box) : null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`w-full text-left bg-white border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-40 border-dashed scale-95' : ''} ${iconName ? 'p-3 rounded-lg items-center justify-center gap-1.5 aspect-square' : 'p-2 rounded-xl gap-2'}`}
    >
      {iconName ? (
        <>
          <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-transform group-hover:scale-110 ${color || 'bg-slate-100 text-slate-700'}`}>
            {Icon && <Icon size={16} strokeWidth={2} />}
          </div>
          <span className="text-[10px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors text-center leading-tight">
            {label || type}
          </span>
        </>
      ) : (
        <>
          <BlockPreview type={type} />
          <div className="px-1 flex flex-col gap-0.5 w-full">
            <span className="font-semibold text-xs text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">{label || type}</span>
            <span className="text-[10px] font-medium text-gray-500 leading-none truncate">{description}</span>
          </div>
        </>
      )}
    </div>
  );
}

function SortableSection({ 
  section, 
  isSelected, 
  onClick, 
  onRemove, 
  scale = 1,
  isEditable,
  onPropChange,
  selectedElementId,
  onSelectElement,
  onAddElement,
  onDeleteElement,
  onMoveElement,
  onSelectInspectorTab,
  onSelectImageField,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  isNewlyAdded,
  tenantId
}: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const inverseScaleStyle = scale < 1 ? { transform: `scale(${1 / Math.max(0.2, scale)})`, transformOrigin: 'top right' } : {};

  const Renderer = Renderers[section.type];
  const overrides = section.styleOverrides || {};

  const wrapperStyle: React.CSSProperties = {
    paddingTop: overrides.paddingTop || undefined,
    paddingBottom: overrides.paddingBottom || undefined,
    textAlign: overrides.textAlign || undefined,
    borderWidth: overrides.borderWidth || undefined,
    borderColor: overrides.borderColor || undefined,
    borderStyle: overrides.borderWidth ? 'solid' : undefined,
    backgroundColor: overrides.backgroundColor || undefined,
  };

  const shadowClass = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-[8px_8px_0px_rgba(0,0,0,1)]'
  }[overrides.shadowSize as string || 'none'] || '';

  // Helper to find the property path matching a string value or image source
  const findPropPath = (props: any, targetVal: string, targetType: 'text' | 'image'): string | null => {
    if (!targetVal) return null;
    const cleanTarget = targetVal.trim().toLowerCase();

    // Match text properties
    if (targetType === 'text') {
      const fuzzyMatch = (propVal: string, clickVal: string) => {
        const cleanProp = propVal.replace(/\s+/g, ' ').trim().toLowerCase();
        const cleanClick = clickVal.replace(/\s+/g, ' ').trim();
        return cleanProp === cleanClick || (cleanProp.length > 5 && (cleanClick.includes(cleanProp) || cleanProp.includes(cleanClick)));
      };

      // 1. Check direct properties
      for (const key of Object.keys(props)) {
        const val = props[key];
        if (typeof val === 'string' && fuzzyMatch(val, cleanTarget)) {
          return key;
        }
      }
      // 2. Check array properties (features, testimonials, menu items, products)
      for (const key of Object.keys(props)) {
        const val = props[key];
        if (Array.isArray(val)) {
          for (let i = 0; i < val.length; i++) {
            const item = val[i];
            if (item && typeof item === 'object') {
              for (const subKey of Object.keys(item)) {
                const subVal = item[subKey];
                if (typeof subVal === 'string' && fuzzyMatch(subVal, cleanTarget)) {
                  return `${key}.${i}.${subKey}`;
                }
              }
            } else if (typeof item === 'string' && fuzzyMatch(item, cleanTarget)) {
              return `${key}.${i}`;
            }
          }
        }
      }
    } else if (targetType === 'image') {
      const cleanSrc = targetVal.split('?')[0]; // Remove queries
      for (const key of Object.keys(props)) {
        const val = props[key];
        if (typeof val === 'string' && (val === targetVal || val.includes(cleanSrc.substring(cleanSrc.indexOf('/photo-'))))) {
          return key;
        }
      }
      for (const key of Object.keys(props)) {
        const val = props[key];
        if (Array.isArray(val)) {
          for (let i = 0; i < val.length; i++) {
            const item = val[i];
            if (item && typeof item === 'object') {
              for (const subKey of Object.keys(item)) {
                const subVal = item[subKey];
                if (typeof subVal === 'string' && (subVal === targetVal || subVal.includes(cleanSrc.substring(cleanSrc.indexOf('/photo-'))))) {
                  return `${key}.${i}.${subKey}`;
                }
              }
            }
          }
        }
      }
    }
    return null;
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      data-section-id={section.id}
      className={`relative group cursor-pointer border-[4px] bg-white transition-colors ${isSelected ? 'border-blue-500 z-10 scale-[1.01] shadow-2xl' : 'border-transparent hover:border-black/20'} ${isDragging ? '!opacity-50 scale-95 shadow-2xl z-50 border-black' : ''}`}
      onClick={onClick}
    >
      {isEditable && isSelected && (
        <div className="absolute -top-3.5 left-4 bg-blue-600 text-white rounded px-2 py-0.5 text-[9px] font-black uppercase tracking-widest z-20 shadow-md border border-white select-none pointer-events-none">
          Section: {section.type}
        </div>
      )}
      {isEditable && isSelected && ['Hero', 'Feature', 'TestimonialList'].includes(section.type) && (
        <div 
          style={inverseScaleStyle}
          className="absolute -top-14 left-4 flex items-center bg-yellow-300 text-black rounded-xl p-1 gap-1 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] z-30 select-none animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-[9px] font-black uppercase tracking-wider px-2 text-black/50 border-r border-black/10">Layouts</span>
          {(section.type === 'Hero'
            ? [
                { value: 'standard', label: 'Standard' },
                { value: 'centered', label: 'Centered' },
                { value: 'split', label: 'Split' },
                { value: 'box', label: 'Boxed' }
              ]
            : section.type === 'Feature'
            ? [
                { value: 'standard', label: 'Card' },
                { value: 'side-by-side', label: 'Split' },
                { value: 'accent-card', label: 'Accent' },
                { value: 'minimal', label: 'Minimal' }
              ]
            : section.type === 'TestimonialList'
            ? [
                { value: 'grid', label: 'Grid' },
                { value: 'list', label: 'List' },
                { value: 'minimal-rows', label: 'Rows' }
              ]
            : []
          ).map(preset => {
            const isActive = (section.props.layoutPreset || 'standard') === preset.value ||
                             (section.type === 'TestimonialList' && !section.props.layoutPreset && preset.value === 'grid');
            return (
              <button
                key={preset.value}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPropChange?.('layoutPreset', preset.value);
                }}
                className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all border border-transparent ${
                  isActive 
                    ? 'bg-black text-white shadow-sm' 
                    : 'text-black hover:bg-black/10'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      )}
      <div 
        className={`${isDragging ? 'pointer-events-none' : ''} ${shadowClass}`}
        style={wrapperStyle}
        data-custom-bg={overrides.backgroundColor ? 'true' : 'false'}
        data-custom-align={overrides.textAlign || 'default'}
        onMouseOver={(e) => {
          if (!isEditable) return;
          const target = e.target as HTMLElement;
          const clickedImg = target.closest('img') as HTMLImageElement | null;
          const clickedButton = target.closest('button, a, [role="button"], [class*="btn"], [class*="button"]') as HTMLElement | null;
          const clickedText = target.closest('h1, h2, h3, h4, h5, h6, p, span, li, [class*="title"], [class*="heading"]') as HTMLElement | null;

          if (clickedImg) {
            const path = findPropPath(section.props, clickedImg.src, 'image');
            if (path) clickedImg.classList.add('canvas-editable-hover-image');
          } else if (clickedButton) {
            const text = clickedButton.innerText;
            const path = findPropPath(section.props, text, 'text') || 'buttonText';
            if (path) clickedButton.classList.add('canvas-editable-hover-text');
          } else if (clickedText) {
            const text = clickedText.innerText;
            const path = findPropPath(section.props, text, 'text');
            if (path) clickedText.classList.add('canvas-editable-hover-text');
          }
        }}
        onMouseOut={(e) => {
          if (!isEditable) return;
          const target = e.target as HTMLElement;
          target.classList.remove('canvas-editable-hover-text', 'canvas-editable-hover-image');
          const hovers = target.querySelectorAll('.canvas-editable-hover-text, .canvas-editable-hover-image');
          hovers.forEach(el => el.classList.remove('canvas-editable-hover-text', 'canvas-editable-hover-image'));
        }}
        onClick={(e) => {
          if (!isEditable) return;
          const target = e.target as HTMLElement;

          // Prevent default on links and buttons to stop navigation, but allow it for text elements
          if (target.closest('a') || target.closest('button')) {
            e.preventDefault();
          }

          // If the user directly clicked inside an EditableText component, let it handle its own editing!
          if (target.closest('[contenteditable="true"]')) {
            // Still open the inspector to the content tab so they can see button options
            const btn = target.closest('button, a, [role="button"], [class*="btn"], [class*="button"]') as HTMLElement | null;
            if (btn) {
               const text = btn.innerText;
               const path = findPropPath(section.props, text, 'text') || 'buttonText';
               if (path) onSelectInspectorTab?.('content', path);
            }
            return;
          }

          const clickedImg = target.closest('img') as HTMLImageElement | null;
          const clickedButton = target.closest('button, a, [role="button"], [class*="btn"], [class*="button"]') as HTMLElement | null;
          const clickedText = target.closest('h1, h2, h3, h4, h5, h6, p, span, li, [class*="title"], [class*="heading"]') as HTMLElement | null;

          if (clickedImg) {
            e.stopPropagation();
            const src = clickedImg.src;
            const path = findPropPath(section.props, src, 'image');
            if (path) {
              // Highlight the selected image
              document.querySelectorAll('.canvas-selected-image').forEach(el => {
                el.classList.remove('canvas-selected-image');
              });
              clickedImg.classList.add('canvas-selected-image');

              // Remove highlight on clicking elsewhere
              const handleImgDeselect = (ev: MouseEvent) => {
                if (ev.target !== clickedImg) {
                  clickedImg.classList.remove('canvas-selected-image');
                  document.removeEventListener('click', handleImgDeselect);
                }
              };
              setTimeout(() => {
                document.addEventListener('click', handleImgDeselect);
              }, 10);

              onSelectImageField?.(section.id, path);
            }
          } else if (clickedButton || clickedText) {
            const activeEl = clickedButton || clickedText;
            if (!activeEl) return;

            e.stopPropagation();
            const text = activeEl.innerText;
            const path = findPropPath(section.props, text, 'text') || (clickedButton ? 'buttonText' : null);
            
            // Mark as contentEditable and handle inline typing
            if (path) {
              activeEl.contentEditable = "true";
              activeEl.focus();
              activeEl.classList.add('canvas-selected-element');

              // Attempt to place cursor at the exact click location
              try {
                const x = e.clientX;
                const y = e.clientY;
                let range;
                if (document.caretRangeFromPoint) {
                  range = document.caretRangeFromPoint(x, y);
                } else if ((document as any).caretPositionFromPoint) {
                  const pos = (document as any).caretPositionFromPoint(x, y);
                  if (pos) {
                    range = document.createRange();
                    range.setStart(pos.offsetNode, pos.offset);
                    range.collapse(true);
                  }
                }
                if (range) {
                  const sel = window.getSelection();
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                } else {
                  // Fallback to end of text
                  range = document.createRange();
                  range.selectNodeContents(activeEl);
                  range.collapse(false);
                  const sel = window.getSelection();
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                }
              } catch (err) {}

              const handleBlur = () => {
                activeEl.contentEditable = "false";
                activeEl.classList.remove('canvas-selected-element');
                const newText = activeEl.innerText;
                onPropChange?.(path, newText);
                activeEl.removeEventListener('blur', handleBlur);
                activeEl.removeEventListener('keydown', handleKey);
                // Only select the inspector tab AFTER we finish editing, so React doesn't wipe our active typing session
                onSelectInspectorTab?.(clickedButton ? 'advanced' : 'content', path);
              };

              const handleKey = (ev: KeyboardEvent) => {
                if (ev.key === 'Enter') {
                  ev.preventDefault();
                  activeEl.blur();
                }
                if (ev.key === 'Escape') {
                  ev.preventDefault();
                  activeEl.innerText = section.props[path] || (path === 'buttonText' ? (overrides.buttonText || '') : '');
                  activeEl.blur();
                }
              };

              activeEl.addEventListener('blur', handleBlur);
              activeEl.addEventListener('keydown', handleKey);
            } else {
              // If we couldn't make it inline editable, at least open the inspector
              onSelectInspectorTab?.(clickedButton ? 'advanced' : 'content', path || '');
            }
          }
        }}
      >
         <Renderer 
           {...section.props} 
           buttonText={overrides.buttonText || section.props.buttonText} 
           isEditable={isEditable}
           onPropChange={onPropChange}
           selectedElementId={selectedElementId}
           onSelectElement={onSelectElement}
           onAddElement={onAddElement}
           onDeleteElement={onDeleteElement}
           onMoveElement={onMoveElement}
           tenantId={tenantId}
           scale={scale}
         />
      </div>
      
      {/* Universal Section Floating Toolbar — Wix-style, visible on hover/select for ALL sections */}
      {isEditable && (
        <div 
          style={inverseScaleStyle}
          className={`absolute top-2 left-2 right-2 flex items-center justify-between z-20 transition-all duration-200 pointer-events-none ${isSelected || isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        >
          {/* Section label + drag handle */}
          <div className="flex items-center gap-1 bg-blue-600 text-white rounded-lg px-2 py-1 shadow-lg border border-white/20 pointer-events-auto select-none">
            <div
              {...attributes}
              {...listeners}
              className="p-0.5 cursor-grab active:cursor-grabbing"
              title="Drag to reorder"
            >
              <GripVertical className="w-3.5 h-3.5 text-white/70" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest">{section.type}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 bg-gray-900 rounded-lg p-1 shadow-lg border border-white/10 pointer-events-auto">
            <button
              onClick={(e) => { e.stopPropagation(); onMoveUp?.(); }}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Move Section Up (↑)"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onMoveDown?.(); }}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Move Section Down (↓)"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="w-px h-4 bg-white/20 mx-0.5" />
            <button
              onClick={(e) => { e.stopPropagation(); onDuplicate?.(); }}
              className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Duplicate Section (Ctrl+D)"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              className="p-1.5 text-red-400 hover:text-red-300 hover:bg-white/10 rounded transition-colors"
              title="Delete Section (Del)"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* "Newly Added" visual cue — clean pulse ring */}
      {isNewlyAdded && (
        <div
          style={inverseScaleStyle}
          className="absolute inset-0 pointer-events-none z-10 rounded-sm ring-4 ring-blue-500/60 animate-pulse"
        />
      )}
    </div>
  );
}

function EmptyCanvasDropZone() {
  const { setNodeRef, isOver } = useDroppable({
    id: 'empty-canvas',
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-h-[600px] flex flex-col items-center justify-center transition-all duration-200 border-2 border-dashed rounded-2xl mx-8 my-8 ${isOver ? 'border-blue-400 bg-blue-50/60 scale-[1.01]' : 'border-gray-200 bg-gray-50/40 hover:border-gray-300 hover:bg-gray-50/70'}`}
    >
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-200 ${isOver ? 'bg-blue-100 scale-110' : 'bg-gray-100'}`}>
        <LayoutTemplate className={`w-10 h-10 transition-all ${isOver ? 'text-blue-500' : 'text-gray-400'}`} />
      </div>
      <p className={`font-black text-base tracking-tight mb-2 ${isOver ? 'text-blue-700' : 'text-gray-500'}`}>
        {isOver ? 'Drop to add section' : 'Start building your page'}
      </p>
      {!isOver && (
        <p className="font-medium text-xs text-center px-8 text-gray-400 max-w-[260px] leading-relaxed">
          Drag blocks from the left panel, or click the <span className="font-bold text-gray-600">+</span> button to insert a section
        </p>
      )}
    </div>
  );
}



export default function SiteEditor({
  siteName,
  siteId,
  tenantId,
  initialPages,
  initialSections = [],
  onBack,
  user,
  mediaFiles = [],
  globalSettings = { businessName: '', supportEmail: '', defaultSeoDescription: '' },
  setGlobalSettings = () => {},
  handleUploadMediaClick = () => {},
  handleDeleteMedia = () => {},
  saveSettings = () => {},
  onSave,
  onPublish,
  initialTheme,
  planTier
}: SiteEditorProps) {
  const defaultPages = (initialPages && initialPages.length > 0 
    ? initialPages 
    : [{ id: 'home', name: 'Home', slug: '/', sections: initialSections || [] }]
  ).map((p, idx) => ({
    id: p.id || (p.slug === '/' ? 'home' : `page-${p.name?.toLowerCase().replace(/[^a-z0-9]/g, '-') || idx}`),
    name: p.name || 'Untitled Page',
    slug: p.slug || `/${p.name?.toLowerCase().replace(/[^a-z0-9]/g, '-') || idx}`,
    sections: p.sections || []
  }));

  // --- Undo/Redo history wrapping pages ---
  const { state: pages, push: pushPages, undo: undoPages, redo: redoPages, canUndo, canRedo } = useHistory<PageData[]>(defaultPages);
  const [activePageId, setActivePageId] = useState<string>(defaultPages[0]?.id || 'home');
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [editingPageId, setEditingPageId] = useState<string | null>(null);

  const activePage = pages.find(p => p.id === activePageId) || pages[0];
  const sections = activePage?.sections || [];

  const setPages = (value: PageData[] | ((prev: PageData[]) => PageData[])) => {
    pushPages(value);
  };

  const setSections = (value: SectionData[] | ((prev: SectionData[]) => SectionData[])) => {
    pushPages(prevPages => prevPages.map(p => {
      if (p.id === activePageId) {
        const nextSections = typeof value === 'function' ? value(p.sections) : value;
        return { ...p, sections: nextSections };
      }
      return p;
    }));
  };

  const [isPreviewing, setIsPreviewing] = useState(false);
  const [activeLeftTool, setActiveLeftTool] = useState<'add' | 'theme' | 'media' | 'cms' | 'ecommerce' | null>('add');
  const [editSubTab, setEditSubTab] = useState<'content' | 'style' | 'advanced'>('content');
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(sections[0]?.id || null);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [selectedElementColIdx, setSelectedElementColIdx] = useState<number | null>(null);
  const [selectedElementIdx, setSelectedElementIdx] = useState<number | null>(null);

  // --- New state for pro UX features ---
  const [addElementPanel, setAddElementPanel] = useState<{ sectionId: string; colIdx: number } | null>(null);
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [betweenInsertIndex, setBetweenInsertIndex] = useState<number | null>(null);
  const [betweenInsertSearch, setBetweenInsertSearch] = useState('');
  const [newlyAddedIds, setNewlyAddedIds] = useState<Set<string>>(new Set());

  // --- Modern UX state ---
  const { toasts, addToast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [pendingTemplateKey, setPendingTemplateKey] = useState<string | null>(null);
  const [confirmDeletePageId, setConfirmDeletePageId] = useState<string | null>(null);
  const [showAddSocial, setShowAddSocial] = useState(false);
  const [newSocialName, setNewSocialName] = useState('facebook');

  useEffect(() => {
    setSelectedElementId(null);
    setSelectedElementColIdx(null);
    setSelectedElementIdx(null);
  }, [selectedSectionId]);

  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [scale, setScale] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDraggedBlock, setActiveDraggedBlock] = useState<ComponentType | null>(null);

  // Selector target for image picking
  const [mediaSelectorTarget, setMediaSelectorTarget] = useState<{ id: string, propName: string, index?: number, fieldName?: string } | null>(null);
  
  // Stock Search state variables
  const [mediaPanelTab, setMediaPanelTab] = useState<'my-media' | 'stock'>('my-media');
  const [stockSearchQuery, setStockSearchQuery] = useState('modern business');
  const [stockPhotos, setStockPhotos] = useState<any[]>([]);
  const [isStockLoading, setIsStockLoading] = useState(false);
  const [isStockLive, setIsStockLive] = useState(false);

  // Shopify e-commerce state
  const [shopDomain, setShopDomain] = useState('');
  const [shopToken, setShopToken] = useState('');
  const [shopProducts, setShopProducts] = useState<any[]>([]);
  const [shopLoading, setShopLoading] = useState(false);
  const [shopError, setShopError] = useState('');
  const [shopConnected, setShopConnected] = useState(false);

  // Auto-fetch stock photos from Unsplash proxy Route Handler
  useEffect(() => {
    const fetchStock = async () => {
      if (!stockSearchQuery) return;
      setIsStockLoading(true);
      try {
        const res = await fetch(`/api/stock?query=${encodeURIComponent(stockSearchQuery)}`);
        const data = await res.json();
        if (data.photos) {
          setStockPhotos(data.photos);
          setIsStockLive(!!data.isLive);
        }
      } catch (error) {
        console.error("Error fetching stock:", error);
      } finally {
        setIsStockLoading(false);
      }
    };
    fetchStock();
  }, [stockSearchQuery]);
  
  // Collapsible category accordion state
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    custom_layout: true,
    navigation: false,
    header: false,
    features: false,
    about_us: false,
    testimonial: false,
    contact: false,
    faqs: false,
    widgets: false
  });

  // Left Drawer tab selection (Blocks vs Templates)
  const [leftPanelTab, setLeftPanelTab] = useState<'elements' | 'blocks' | 'templates'>('elements');

  // Global theme settings
  const [globalTheme, setGlobalTheme] = useState({
    fontFamily: 'Space Grotesk',
    buttonRoundedness: 'rounded-xl',
    pageBackground: '#F8F5F2',
    colorPrimary: '#3b82f6',
    colorSecondary: '#10b981',
    colorText: '#1a1a1a',
    colorAccent: '#f59e0b',
    colorCard: '#ffffff',
    ...initialTheme
  });

  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!canvasContainerRef.current) return;
      const parentWidth = canvasContainerRef.current.parentElement?.clientWidth || window.innerWidth;
      // Subtract left and right sidebars approximate width
      const leftSidebarWidth = activeLeftTool ? 384 : 64; // toolbar + drawer
      const rightSidebarWidth = window.innerWidth >= 1280 ? 340 : 0;
      const availableWidth = parentWidth - leftSidebarWidth - rightSidebarWidth - 64;

      let targetWidth = 1200;
      if (viewport === 'tablet') targetWidth = 768;
      if (viewport === 'mobile') targetWidth = 375;

      setScale(availableWidth < targetWidth ? availableWidth / targetWidth : 1);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    const timeout = setTimeout(updateScale, 350);
    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timeout);
    };
  }, [viewport, activeLeftTool]);

  useEffect(() => {
    const updateHeight = () => {
      if (innerRef.current && wrapperRef.current) {
        const scaledHeight = innerRef.current.scrollHeight * scale;
        wrapperRef.current.style.height = `${scaledHeight + 16}px`;
      }
    };
    
    updateHeight();
    const timeoutIds = [10, 100, 300, 1000].map(delay => setTimeout(updateHeight, delay));
    
    if (innerRef.current) {
      const observer = new ResizeObserver(updateHeight);
      observer.observe(innerRef.current);
      return () => {
        observer.disconnect();
        timeoutIds.forEach(clearTimeout);
      };
    }
  }, [scale, viewport, sections]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: any) => {
    const { active } = event;
    if (active.id.startsWith('new-block-')) {
      setActiveDraggedBlock(active.data.current.blockType);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveDraggedBlock(null);
    const { active, over } = event;
    if (!over) return;

    // Check if dragging a new block from the left panel
    if (active.data.current?.isNewBlock) {
      const blockType = active.data.current.blockType;
      let newSection: SectionData;
      
      const isInlineEl = ELEMENT_TYPE_CONFIGS.some(c => c.type === blockType);
      if (isInlineEl) {
        newSection = {
          id: `item-customsection-${Date.now()}`,
          type: 'CustomSection',
          props: {
            columns: [
              {
                id: `col-${Date.now()}`,
                width: '100%',
                elements: [
                  {
                    id: `el-${Date.now()}`,
                    type: blockType,
                    props: getDefaultInlineElementProps(blockType),
                    styleOverrides: blockType === 'Container' ? {
                      paddingTop: '16px',
                      paddingBottom: '16px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      backgroundColor: '#f9fafb',
                      borderWidth: '1px',
                      borderColor: '#e5e7eb',
                      borderRadius: '8px'
                    } : {
                      color: '',
                      fontSize: '',
                      textAlign: 'left',
                      marginTop: '0px',
                      marginBottom: '12px'
                    }
                  }
                ]
              }
            ]
          },
          styleOverrides: {
            paddingTop: '32px',
            paddingBottom: '32px',
            textAlign: 'left',
            borderWidth: '0px',
            borderColor: '#000000',
            shadowSize: 'none',
            backgroundColor: 'transparent'
          }
        };
      } else {
        newSection = {
          id: `item-${blockType.toLowerCase()}-${Date.now()}`,
          type: blockType as ComponentType,
          props: { ...COMPONENT_SCHEMAS[blockType]?.defaultProps },
          styleOverrides: {
            paddingTop: '32px',
            paddingBottom: '32px',
            textAlign: 'left',
            borderWidth: '0px',
            borderColor: '#000000',
            shadowSize: 'none',
            backgroundColor: 'transparent'
          }
        };
      }

      const overId = over.id;
      const overIndex = sections.findIndex(s => s.id === overId);
      
      if (overIndex !== -1) {
        // Insert at target index
        const newSections = [...sections];
        newSections.splice(overIndex, 0, newSection);
        setSections(newSections);
      } else {
        // Append to bottom
        setSections([...sections, newSection]);
      }
      setSelectedSectionId(newSection.id);
      
      // Auto-select the newly added element if it's a primitive widget
      const isInlineElement = ELEMENT_TYPE_CONFIGS.some(c => c.type === blockType);
      if (isInlineElement) {
        setTimeout(() => {
          handleSelectElement(newSection.props.columns[0].elements[0].id, 0, 0);
        }, 50);
      } else {
        setEditSubTab('content');
      }
      return;
    }

    // Sort sections
    if (active.id !== over.id) {
      setSections((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleUpdateProp = (id: string, propName: string, value: any) => {
    setSections(s => s.map(sec => sec.id === id ? { ...sec, props: { ...sec.props, [propName]: value } } : sec));
  };

  const handleUpdatePropByPath = (sectionId: string, path: string, value: any) => {
    setSections(prev => prev.map(sec => {
      if (sec.id !== sectionId) return sec;
      const newProps = { ...sec.props };
      const parts = path.split('.');
      if (parts.length === 1) {
        newProps[parts[0]] = value;
      } else if (parts.length === 3) {
        const [arrayKey, indexStr, fieldKey] = parts;
        const index = parseInt(indexStr);
        if (Array.isArray(newProps[arrayKey])) {
          const newArray = [...newProps[arrayKey]];
          newArray[index] = { ...newArray[index], [fieldKey]: value };
          newProps[arrayKey] = newArray;
        }
      }
      return { ...sec, props: newProps };
    }));
  };

  const handleSelectImageFieldByPath = (sectionId: string, path: string) => {
    const parts = path.split('.');
    if (parts.length === 1) {
      setMediaSelectorTarget({ id: sectionId, propName: parts[0] });
    } else if (parts.length === 3) {
      const [arrayKey, indexStr, fieldKey] = parts;
      setMediaSelectorTarget({
        id: sectionId,
        propName: arrayKey,
        index: parseInt(indexStr),
        fieldName: fieldKey
      });
    }
    setActiveLeftTool('media');
  };

  const handleUpdateArrayProp = (id: string, propName: string, index: number, fieldName: string, value: any) => {
    setSections(s => s.map(sec => {
      if (sec.id !== id) return sec;
      const newArray = [...sec.props[propName]];
      newArray[index] = { ...newArray[index], [fieldName]: value };
      return { ...sec, props: { ...sec.props, [propName]: newArray } };
    }));
  };

  const handleAddArrayItem = (id: string, propName: string, arrayFields: any[]) => {
    setSections(s => s.map(sec => {
      if (sec.id !== id) return sec;
      const newItem = arrayFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {});
      return { ...sec, props: { ...sec.props, [propName]: [...(sec.props[propName] || []), newItem] } };
    }));
  };

  const handleRemoveArrayItem = (id: string, propName: string, index: number) => {
    setSections(s => s.map(sec => {
      if (sec.id !== id) return sec;
      const newArray = [...sec.props[propName]];
      newArray.splice(index, 1);
      return { ...sec, props: { ...sec.props, [propName]: newArray } };
    }));
  };

  const handleUpdateStyleOverride = (id: string, key: string, value: any) => {
    setSections(s => s.map(sec => {
      if (sec.id !== id) return sec;
      const overrides = sec.styleOverrides || {};
      return { ...sec, styleOverrides: { ...overrides, [key]: value } };
    }));
  };

  // Custom Element handlers for CustomSection
  const handleSelectElement = (elId: string, colIdx: number, elIdx: number) => {
    setSelectedElementId(elId);
    setSelectedElementColIdx(colIdx);
    setSelectedElementIdx(elIdx);
    setRightSidebarOpen(true);
    setEditSubTab('content');
  };

  const handleAddElement = (sectionId: string, colIdx: number) => {
    // Open the professional add-element panel instead of window.prompt
    setAddElementPanel({ sectionId, colIdx });
  };

  const handleAddElementOfType = (elType: string) => {
    if (!addElementPanel) return;
    const { sectionId, colIdx } = addElementPanel;
    setSections(s => s.map(sec => {
      if (sec.id !== sectionId) return sec;
      const newCols = [...sec.props.columns];
      const newEl = {
        id: `el-${Date.now()}`,
        type: elType,
        props: getDefaultInlineElementProps(elType),
        styleOverrides: elType === 'Container' ? {
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          backgroundColor: '#f9fafb',
          borderWidth: '1px',
          borderColor: '#e5e7eb',
          borderRadius: '8px'
        } : {
          color: '',
          fontSize: '',
          textAlign: 'left',
          marginTop: '0px',
          marginBottom: '12px'
        }
      };
      newCols[colIdx].elements = [...(newCols[colIdx].elements || []), newEl];
      return { ...sec, props: { ...sec.props, columns: newCols } };
    }));
    setAddElementPanel(null);
  };

  const handleDeleteElement = (sectionId: string, colIdx: number, elIdx: number) => {
    setSections(s => s.map(sec => {
      if (sec.id !== sectionId) return sec;
      const newCols = [...sec.props.columns];
      const newElements = [...newCols[colIdx].elements];
      newElements.splice(elIdx, 1);
      newCols[colIdx].elements = newElements;
      return { ...sec, props: { ...sec.props, columns: newCols } };
    }));
    setSelectedElementId(null);
  };

  const handleMoveElement = (sectionId: string, colIdx: number, elIdx: number, direction: 'up' | 'down') => {
    setSections(s => s.map(sec => {
      if (sec.id !== sectionId) return sec;
      const newCols = [...sec.props.columns];
      const newElements = [...newCols[colIdx].elements];
      const targetIdx = direction === 'up' ? elIdx - 1 : elIdx + 1;
      if (targetIdx < 0 || targetIdx >= newElements.length) return sec;
      
      const temp = newElements[elIdx];
      newElements[elIdx] = newElements[targetIdx];
      newElements[targetIdx] = temp;
      
      newCols[colIdx].elements = newElements;
      return { ...sec, props: { ...sec.props, columns: newCols } };
    }));
  };

  const handleUpdateElementProp = (sectionId: string, colIdx: number, elIdx: number, propName: string, value: any) => {
    setSections(s => s.map(sec => {
      if (sec.id !== sectionId) return sec;
      const newCols = [...sec.props.columns];
      const newEl = { ...newCols[colIdx].elements[elIdx], props: { ...newCols[colIdx].elements[elIdx].props, [propName]: value } };
      newCols[colIdx].elements[elIdx] = newEl;
      return { ...sec, props: { ...sec.props, columns: newCols } };
    }));
  };

  const handleUpdateElementStyle = (sectionId: string, colIdx: number, elIdx: number, styleName: string, value: any) => {
    setSections(s => s.map(sec => {
      if (sec.id !== sectionId) return sec;
      const newCols = [...sec.props.columns];
      const el = newCols[colIdx].elements[elIdx];
      const newEl = { ...el, styleOverrides: { ...(el.styleOverrides || {}), [styleName]: value } };
      newCols[colIdx].elements[elIdx] = newEl;
      return { ...sec, props: { ...sec.props, columns: newCols } };
    }));
  };

  const handleSelectMedia = (url: string) => {
    if (!mediaSelectorTarget) return;
    const { id, propName, index, fieldName } = mediaSelectorTarget;
    if (selectedElementColIdx !== null && selectedElementIdx !== null && selectedElementIdx !== -1) {
      handleUpdateElementProp(id, selectedElementColIdx, selectedElementIdx, propName, url);
    } else if (index !== undefined && fieldName !== undefined) {
      handleUpdateArrayProp(id, propName, index, fieldName, url);
    } else {
      handleUpdateProp(id, propName, url);
    }
    setMediaSelectorTarget(null);
    setActiveLeftTool(null);
    setRightSidebarOpen(true);
  };

  const addSection = (type: ComponentType | string, insertAtIndex?: number) => {
    let newSection: SectionData;
    
    const isInlineElement = ELEMENT_TYPE_CONFIGS.some(c => c.type === type);
    if (isInlineElement) {
      newSection = {
        id: `item-customsection-${Date.now()}`,
        type: 'CustomSection',
        props: {
          columns: [
            {
              id: `col-${Date.now()}`,
              width: '100%',
              elements: [
                {
                  id: `el-${Date.now()}`,
                  type: type,
                  props: getDefaultInlineElementProps(type as string),
                  styleOverrides: type === 'Container' ? {
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    backgroundColor: '#f9fafb',
                    borderWidth: '1px',
                    borderColor: '#e5e7eb',
                    borderRadius: '8px'
                  } : {
                    color: '',
                    fontSize: '',
                    textAlign: 'left',
                    marginTop: '0px',
                    marginBottom: '12px'
                  }
                }
              ]
            }
          ]
        },
        styleOverrides: {
          paddingTop: '32px',
          paddingBottom: '32px',
          textAlign: 'left',
          borderWidth: '0px',
          borderColor: '#000000',
          shadowSize: 'none',
          backgroundColor: 'transparent'
        }
      };
    } else {
      newSection = {
        id: `item-${(type as string).toLowerCase()}-${Date.now()}`,
        type: type as ComponentType,
        props: { ...COMPONENT_SCHEMAS[type as string].defaultProps },
        styleOverrides: {
          paddingTop: '32px',
          paddingBottom: '32px',
          textAlign: 'left',
          borderWidth: '0px',
          borderColor: '#000000',
          shadowSize: 'none',
          backgroundColor: 'transparent'
        }
      };
    }
    if (insertAtIndex !== undefined) {
      setSections(prev => {
        const arr = [...prev];
        arr.splice(insertAtIndex, 0, newSection);
        return arr;
      });
    } else {
      setSections([...sections, newSection]);
    }
    setSelectedSectionId(newSection.id);
    setRightSidebarOpen(true);
    
    // Auto-select if it's a primitive widget
    if (isInlineElement) {
      setTimeout(() => {
        handleSelectElement(newSection.props.columns[0].elements[0].id, 0, 0);
      }, 50);
    } else {
      setEditSubTab('content');
    }

    // Mark as newly added for the visual cue + smooth scroll
    setNewlyAddedIds(prev => new Set([...prev, newSection.id]));
    setTimeout(() => {
      const el = document.querySelector(`[data-section-id="${newSection.id}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
    setTimeout(() => {
      setNewlyAddedIds(prev => { const n = new Set(prev); n.delete(newSection.id); return n; });
    }, 3500);
  };

  const removeSection = (id: string) => {
    setSections(s => s.filter(sec => sec.id !== id));
    if (selectedSectionId === id) setSelectedSectionId(null);
  };

  const handleDuplicateSection = (id: string) => {
    const idx = sections.findIndex(s => s.id === id);
    if (idx === -1) return;
    const original = sections[idx];
    const clone: SectionData = {
      ...JSON.parse(JSON.stringify(original)),
      id: `item-${original.type.toLowerCase()}-${Date.now()}-clone`,
    };
    setSections(prev => {
      const arr = [...prev];
      arr.splice(idx + 1, 0, clone);
      return arr;
    });
    setSelectedSectionId(clone.id);
  };

  const handleMoveSectionUp = (id: string) => {
    setSections(prev => {
      const idx = prev.findIndex(s => s.id === id);
      if (idx <= 0) return prev;
      const arr = [...prev];
      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
      return arr;
    });
  };

  const handleMoveSectionDown = (id: string) => {
    setSections(prev => {
      const idx = prev.findIndex(s => s.id === id);
      if (idx === -1 || idx >= prev.length - 1) return prev;
      const arr = [...prev];
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      return arr;
    });
  };

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // --- Global keyboard shortcut handler ---
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isEditing = ['input', 'textarea', 'select'].includes(tag) ||
        (e.target as HTMLElement)?.getAttribute('contenteditable') === 'true';

      // Ctrl+Z → Undo
      if (e.ctrlKey && !e.shiftKey && e.key === 'z') {
        e.preventDefault();
        undoPages();
        return;
      }
      // Ctrl+Shift+Z or Ctrl+Y → Redo
      if ((e.ctrlKey && e.shiftKey && e.key === 'z') || (e.ctrlKey && e.key === 'y')) {
        e.preventDefault();
        redoPages();
        return;
      }
      // Ctrl+S → Save
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        onSave?.(pages, globalTheme);
        return;
      }
      // Skip non-editing shortcuts when inside input fields
      if (isEditing) return;

      // Ctrl+D → Duplicate selected section
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        if (selectedSectionId) handleDuplicateSection(selectedSectionId);
        return;
      }
      // Delete / Backspace → Remove selected section
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedSectionId) {
        e.preventDefault();
        removeSection(selectedSectionId);
        return;
      }
      // Escape → Deselect
      if (e.key === 'Escape') {
        setSelectedSectionId(null);
        setSelectedElementId(null);
        setAddElementPanel(null);
        setBetweenInsertIndex(null);
        setShowShortcutsModal(false);
        return;
      }
      // ArrowUp → Move section up
      if (e.key === 'ArrowUp' && selectedSectionId) {
        e.preventDefault();
        handleMoveSectionUp(selectedSectionId);
        return;
      }
      // ArrowDown → Move section down
      if (e.key === 'ArrowDown' && selectedSectionId) {
        e.preventDefault();
        handleMoveSectionDown(selectedSectionId);
        return;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSectionId, pages, globalTheme, undoPages, redoPages]);



  const selectedSection = sections.find(s => s.id === selectedSectionId);

  const confirmApplyTemplate = () => {
    if (!pendingTemplateKey) return;
    const tSections = TEMPLATES[pendingTemplateKey] || [];
    const freshSections = tSections.map(s => ({
      ...s,
      id: `item-${s.type.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`
    }));
    setSections(freshSections);
    setSelectedSectionId(freshSections[0]?.id || null);
    setPendingTemplateKey(null);
    addToast('Template applied!');
  };

  // Render the left Sidebar panel for Adding blocks / Templates
  const renderAddPanel = () => {
    const applyTemplate = (key: string) => {
      setPendingTemplateKey(key);
    };

    return (
      <div className="flex flex-col h-full space-y-4">
        {/* Mockup Tabs style */}
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 w-full max-w-[280px] mx-auto select-none shrink-0 border border-gray-200/40">
          <button
            onClick={() => setLeftPanelTab('elements')}
            className={`flex-1 text-center py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${leftPanelTab === 'elements' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Elements
          </button>
          <button
            onClick={() => setLeftPanelTab('blocks')}
            className={`flex-1 text-center py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${leftPanelTab === 'blocks' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Blocks
          </button>
          <button
            onClick={() => setLeftPanelTab('templates')}
            className={`flex-1 text-center py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${leftPanelTab === 'templates' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Templates
          </button>
        </div>

        {leftPanelTab === 'elements' ? (
          <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-3 text-[9px] font-bold text-gray-400 mb-1 select-none">
                Drag basic widgets onto canvas
              </div>
              {ELEMENT_TYPE_CONFIGS.map(el => (
                <DraggableBlockItem 
                  key={el.type}
                  type={el.type} 
                  label={el.label}
                  description={el.desc} 
                  onClick={() => addSection(el.type)} 
                  iconName={el.icon}
                  color={el.color}
                />
              ))}
            </div>
          </div>
        ) : leftPanelTab === 'blocks' ? (
          <div className="space-y-4 flex-1 flex flex-col min-h-0">
            {/* Search bar */}
            <div className="relative shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search layout blocks..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium outline-none focus:border-blue-400 focus:bg-white transition-colors"
              />
            </div>

            <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
              {searchQuery === '' ? (
                CATEGORIES.map(category => {
                  const isExpanded = expandedCategories[category.id];
                  return (
                    <div key={category.id} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center justify-between p-3 text-left bg-white border-b border-gray-100 font-semibold text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <span>{category.name}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      {isExpanded && (
                        <div className="p-3 bg-gray-50 grid grid-cols-2 gap-2">
                          <div key="drag-instruction" className="col-span-2 text-[9px] font-bold text-gray-400 mb-1 select-none">
                            Drag onto canvas or click to append
                          </div>
                          <React.Fragment>
                            {category.items.map(itemType => {
                              const schema = COMPONENT_SCHEMAS[itemType];
                              if (!schema) return null;
                              return (
                                <DraggableBlockItem
                                  key={itemType}
                                  type={itemType as ComponentType}
                                  description={schema.description}
                                  onClick={() => addSection(itemType as ComponentType)}
                                />
                              );
                            })}
                          </React.Fragment>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="space-y-2">
                  <React.Fragment>
                    {Object.entries(COMPONENT_SCHEMAS)
                      .filter(([type, schema]) => type.toLowerCase().includes(searchQuery.toLowerCase()) || (schema.description && schema.description.toLowerCase().includes(searchQuery.toLowerCase())))
                      .map(([type, schema]) => (
                        <DraggableBlockItem
                          key={type}
                          type={type as ComponentType}
                          description={schema.description}
                          onClick={() => addSection(type as ComponentType)}
                        />
                      ))
                    }
                  </React.Fragment>
                  {Object.keys(COMPONENT_SCHEMAS).filter(type => type.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <p className="text-center text-xs font-bold text-black/40 py-8">No matching layout found.</p>
                  )}
                </div>
              )}
            </div>

            {/* Mockup Add to collection button */}
            <button 
              onClick={() => addToast('Section saved to your collections', 'info')}
              className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 border border-dashed border-gray-300 text-gray-500 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shrink-0"
            >
              <Plus className="w-3.5 h-3.5" /> Add to collection
            </button>
          </div>
        ) : leftPanelTab === 'templates' ? (
          /* Templates lists matching mockup */
          <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-1">
            {[
              { key: 'easy_does_it', name: 'Easy Does It Detailing', desc: 'Premium, dark-themed mobile car detailing and automotive artistry.', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=400' },
              { key: 'northwood', name: 'Northwood Coffee Co.', desc: 'Cozy design ideal for cafés, restaurants, and local diners.', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400' },
              { key: 'restaurant', name: 'Osteria Bella Restaurant', desc: 'Bold, elegant layout for full-service restaurants and eateries.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400' },
              { key: 'greenscape', name: 'Greenscape Landscaping', desc: 'Fresh, professional layout for handymen, cleaners, and lawn care.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
              { key: 'lauren', name: 'Lauren Wilson Photo', desc: 'Minimalist creative space for photographers, artists, and portfolios.', img: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=400' },
              { key: 'brighter_solar', name: 'Brighter Solar Energy', desc: 'Sleek conversion-driven layout for eco businesses and clean energy.', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=400&q=80' },
              { key: 'voltvikings', name: 'Volt Vikings Electricians', desc: 'High-impact premium layout for local home service and contracting businesses.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop' },
              { key: 'law_firm', name: 'Sterling Law Group', desc: 'Professional, trust-building layout for law firms and legal services.', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400' },
              { key: 'auto_repair', name: 'Ridge Line Auto Service', desc: 'Bold, high-converting design for auto repair and mechanic shops.', img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=400' },
              { key: 'hair_salon', name: 'Atelier Hair Studio', desc: 'Stylish, intimate layout for hair salons, barbers, and beauty studios.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400' },
              { key: 'real_estate', name: 'Meridian Properties', desc: 'Clean, credibility-first design for real estate agents and brokerages.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400' },
              { key: 'personal_trainer', name: 'Iron Edge Fitness', desc: 'High-energy layout for personal trainers, coaches, and fitness studios.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400' },
              { key: 'dental', name: 'Clarity Dental Studio', desc: 'Clean, welcoming design for dental practices and medical offices.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400' },
              { key: 'dog_grooming', name: 'Paws & Pamper Pet Spa', desc: 'Friendly, warm layout for pet groomers, vets, and pet care services.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400' },
              { key: 'wedding_planner', name: 'The Golden Thread Events', desc: 'Romantic, elegant layout for wedding planners and event designers.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400' },
              { key: 'home_cleaning', name: 'Spotless Home Co.', desc: 'Fresh, trustworthy design for cleaning services and home care companies.', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400' },
              { key: 'yoga_studio', name: 'Solstice Yoga & Wellness', desc: 'Calm, community-driven layout for yoga studios and wellness centers.', img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=400' },
              { key: 'prohome_services', name: 'Valley ProHome Services', desc: 'Bold contractor layout for plumbers, electricians, and HVAC companies.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400' },
              { key: 'maison_boutique', name: 'Maison Boutique', desc: 'Luxury editorial layout for fashion boutiques and lifestyle brands.', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400' },
            ].map(t => (
              <div key={t.key} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-blue-300 transition-colors flex flex-col">
                <img src={t.img} className="h-28 w-full object-cover border-b border-gray-100" alt={t.name} />
                <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-gray-800">{t.name}</h4>
                    <p className="text-[10px] text-gray-400 font-medium leading-normal mt-0.5">{t.desc}</p>
                  </div>
                  <button 
                    onClick={() => applyTemplate(t.key)}
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors"
                  >
                    Import Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  // Render the left Sidebar panel for Themes
  const renderThemePanel = () => (
    <div className="space-y-6">
      {/* Google Fonts */}
      <div className="space-y-2">
        <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Primary Font Family</label>
        {/* Inject Google Fonts link tags */}
        <style dangerouslySetInnerHTML={{ __html: GOOGLE_FONTS.map(f =>
          `@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(f.name).replace(/%20/g,'+')}:wght@400;600;700&display=swap');`
        ).join('\n') }} />
        {/* Group fonts by category */}
        {Array.from(new Set(GOOGLE_FONTS.map(f => f.category))).map(cat => (
          <div key={cat} className="space-y-1.5">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{cat}</span>
            <div className="grid grid-cols-1 gap-1.5">
              {GOOGLE_FONTS.filter(f => f.category === cat).map(font => (
                <button
                  key={font.name}
                  onClick={() => setGlobalTheme({ ...globalTheme, fontFamily: font.name })}
                  style={{ fontFamily: `'${font.name}', sans-serif` }}
                  className={`w-full text-left px-3 py-2.5 border-2 rounded-xl text-sm flex justify-between items-center transition-all ${globalTheme.fontFamily === font.name ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-sm' : 'border-gray-200 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50'}`}
                >
                  <span className="font-semibold">{font.label}</span>
                  {globalTheme.fontFamily === font.name && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* Button Roundedness */}
      <div className="space-y-2">
        <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Button Style</label>
        <div className="grid grid-cols-1 gap-2">
          {[
            { name: 'Sharp Neo-Brutalist', value: 'sharp', preview: 'rounded-none' },
            { name: 'Medium Rounded', value: 'rounded-xl', preview: 'rounded-xl' },
            { name: 'Pill Shaped', value: 'rounded-full', preview: 'rounded-full' }
          ].map((shape) => (
            <button
              key={shape.value}
              onClick={() => setGlobalTheme({ ...globalTheme, buttonRoundedness: shape.value })}
              className={`w-full text-left px-4 py-3 border-2 border-black rounded-xl font-bold text-xs flex justify-between items-center transition-all ${globalTheme.buttonRoundedness === shape.value ? 'bg-black text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)]' : 'bg-transparent text-black hover:bg-black/5'}`}
            >
              <span>{shape.name}</span>
              <span className={`w-8 h-4 border-2 border-current ${shape.preview}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Global Page Background */}
      <div className="space-y-3">
        <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Page Canvas Background</label>
        <div className="grid grid-cols-4 gap-2">
          {COLOR_PRESETS.filter(c => c.value !== 'transparent').map((color) => (
            <button
              key={color.value}
              onClick={() => setGlobalTheme({ ...globalTheme, pageBackground: color.value })}
              className={`w-full aspect-square rounded-lg border-2 flex items-center justify-center transition-all ${globalTheme.pageBackground === color.value ? 'border-black scale-105 shadow-md' : 'border-black/10 hover:border-black/30'}`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
        <input
          type="text"
          value={globalTheme.pageBackground}
          onChange={(e) => setGlobalTheme({ ...globalTheme, pageBackground: e.target.value })}
          placeholder="Or enter hex (e.g. #F8F5F2)"
          className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-2.5 py-1.5 font-mono text-[10px] focus:outline-none"
        />
      </div>

      {/* Global Color Palette */}
      <div className="space-y-4 pt-4 border-t border-black/5">
        <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Global Brand Palette</label>
        
        <div className="space-y-3">
          {[
            { label: 'Primary Brand Color', key: 'colorPrimary' },
            { label: 'Secondary Brand Color', key: 'colorSecondary' },
            { label: 'Accent Highlight Color', key: 'colorAccent' },
            { label: 'Default Text Color', key: 'colorText' },
            { label: 'Card/Box Background', key: 'colorCard' }
          ].map((colorItem) => (
            <div key={colorItem.key} className="flex items-center justify-between gap-3 bg-[#F8F5F2] border-2 border-black rounded-xl p-2.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-black/70">{colorItem.label}</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={(globalTheme as any)[colorItem.key] || '#ffffff'}
                  onChange={(e) => setGlobalTheme({ ...globalTheme, [colorItem.key]: e.target.value })}
                  className="w-7 h-7 rounded border-2 border-black cursor-pointer p-0 bg-transparent"
                />
                <input
                  type="text"
                  value={(globalTheme as any)[colorItem.key] || ''}
                  onChange={(e) => setGlobalTheme({ ...globalTheme, [colorItem.key]: e.target.value })}
                  className="w-16 bg-white border-2 border-black rounded-lg px-1.5 py-0.5 font-mono text-[9px] text-center"
                  placeholder="#ffffff"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render Left Drawer Pages Manager
  const renderPagesPanel = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between shrink-0">
        <div>
           <h3 className="font-semibold text-gray-900 text-sm">Site Pages</h3>
           <p className="font-medium text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Manage your routes</p>
        </div>
        <button 
          onClick={() => {
            const newPageId = `page-${Date.now()}`;
            setPages([...pages, { id: newPageId, name: 'New Page', slug: '/new-page', sections: [] }]);
            setActivePageId(newPageId);
            setEditingPageId(newPageId);
          }}
          className="bg-blue-600 text-white p-1.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          title="Add New Page"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2 mt-4">
        {pages.map((page, index) => {
          const isActive = activePageId === page.id;
          const isEditing = editingPageId === page.id;

          if (isEditing) {
            return (
              <div 
                key={page.id}
                className="border-2 border-blue-500 bg-blue-50/10 rounded-xl p-3.5 space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">Page Settings</span>
                  <button
                    onClick={() => setEditingPageId(null)}
                    className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="space-y-2.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Page Name</label>
                    <input 
                      type="text"
                      value={page.name}
                      onChange={(e) => {
                        setPages(pages.map(p => p.id === page.id ? { ...p, name: e.target.value } : p));
                      }}
                      className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">URL Slug</label>
                    <input 
                      type="text"
                      value={page.slug}
                      onChange={(e) => {
                        setPages(pages.map(p => p.id === page.id ? { ...p, slug: e.target.value } : p));
                      }}
                      className="w-full bg-white border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs font-mono focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div 
              key={page.id}
              onClick={() => setActivePageId(page.id)}
              className={`group flex items-center justify-between px-3 py-2.5 rounded-xl border-2 transition-all cursor-pointer select-none ${
                isActive 
                  ? 'border-blue-500 bg-blue-50/20 text-blue-700 shadow-sm font-semibold' 
                  : 'border-black/5 hover:border-black/15 bg-white text-gray-700 hover:bg-gray-50/50'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Layers className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className={`text-xs ${isActive ? 'font-bold' : 'font-semibold'}`}>{page.name}</span>
                  <span className={`text-[10px] font-medium mt-0.5 ${isActive ? 'text-blue-500/80' : 'text-gray-400'}`}>{page.slug}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingPageId(page.id);
                  }}
                  className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Page Settings"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                {pages.length > 1 && (
                  confirmDeletePageId === page.id ? (
                    <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const newPages = pages.filter(p => p.id !== page.id);
                          setPages(newPages);
                          if (activePageId === page.id) setActivePageId(newPages[0].id);
                          setConfirmDeletePageId(null);
                          addToast(`Page "${page.name}" deleted`);
                        }}
                        className="px-2 py-1 text-[9px] font-black text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setConfirmDeletePageId(null); }}
                        className="px-2 py-1 text-[9px] font-black text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => { e.stopPropagation(); setConfirmDeletePageId(page.id); }}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Page"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Render Left Drawer E-Commerce panel
  const renderEcommercePanel = () => {
    const fetchProducts = async () => {
      if (!shopDomain || !shopToken) {
        setShopError('Please enter your store domain and storefront access token.');
        return;
      }
      setShopLoading(true);
      setShopError('');
      try {
        const res = await fetch(`/api/shopify/products?storeDomain=${encodeURIComponent(shopDomain)}&storefrontToken=${encodeURIComponent(shopToken)}`);
        const data = await res.json();
        if (!res.ok) {
          setShopError(data.error || 'Failed to connect to Shopify store.');
          setShopConnected(false);
        } else {
          setShopProducts(data.products || []);
          setShopConnected(true);
        }
      } catch (err: any) {
        setShopError(err.message || 'Network error connecting to Shopify.');
        setShopConnected(false);
      } finally {
        setShopLoading(false);
      }
    };

    const addProductToCanvas = (product: any) => {
      addSection('ShopifyProduct');
      // After a brief tick, update the new section's props
      setTimeout(() => {
        setSections(prev => {
          const last = prev[prev.length - 1];
          if (!last || last.type !== 'ShopifyProduct') return prev;
          return prev.map(s => s.id === last.id ? {
            ...s,
            props: {
              ...s.props,
              productId: product.id,
              storeDomain: shopDomain,
              storefrontToken: shopToken,
              productTitle: product.title,
              productPrice: product.price ? `${product.price.currencyCode} ${parseFloat(product.price.amount).toFixed(2)}` : '$0.00',
              productImage: product.image || '',
              buttonText: 'Buy Now',
            }
          } : s);
        });
      }, 50);
    };

    return (
      <div className="space-y-5">
        {/* Header info */}
        <div className="bg-gradient-to-br from-[#96bf48]/10 to-[#5e8e3e]/10 border border-[#96bf48]/30 p-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#5e8e3e]" />
            <span className="font-black text-xs tracking-wide text-gray-800">Shopify Integration</span>
          </div>
          <p className="text-[10px] text-gray-500 font-medium leading-relaxed">Connect your Shopify storefront to browse products and add live buy buttons directly to your website canvas.</p>
        </div>

        {/* Store Credentials */}
        <div className="space-y-3">
          <h4 className="font-black uppercase tracking-widest text-[10px] text-gray-500">Store Credentials</h4>
          <div>
            <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-1">Store Domain</label>
            <input
              type="text"
              placeholder="your-store.myshopify.com"
              value={shopDomain}
              onChange={e => { setShopDomain(e.target.value); setShopConnected(false); }}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
            />
          </div>
          <div>
            <label className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-1">Storefront Access Token</label>
            <input
              type="password"
              placeholder="shpat_..."
              value={shopToken}
              onChange={e => { setShopToken(e.target.value); setShopConnected(false); }}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:border-indigo-400 focus:bg-white transition-colors"
            />
            <p className="text-[9px] text-gray-400 mt-1 font-medium">Found in Shopify Admin → Apps → Develop apps → Storefront API</p>
          </div>

          {shopError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-[10px] font-semibold p-2.5 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              {shopError}
            </div>
          )}

          <button
            onClick={fetchProducts}
            disabled={shopLoading}
            className="w-full bg-[#96bf48] hover:bg-[#7da83c] text-white py-2.5 rounded-lg font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {shopLoading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Globe className="w-3.5 h-3.5" />
                {shopConnected ? 'Reload Products' : 'Connect Store'}
              </>
            )}
          </button>
        </div>

        {/* Product List */}
        {shopConnected && shopProducts.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-black uppercase tracking-widest text-[10px] text-gray-500">Products ({shopProducts.length})</h4>
              <span className="text-[9px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-200">● Connected</span>
            </div>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-0.5 custom-scrollbar">
              {shopProducts.map((product) => (
                <div key={product.id} className="group flex items-center gap-3 p-2.5 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                    {product.image ? (
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[11px] text-gray-800 truncate">{product.title}</p>
                    <p className="text-[10px] text-indigo-600 font-semibold mt-0.5">
                      {product.price ? `${product.price.currencyCode} ${parseFloat(product.price.amount).toFixed(2)}` : 'No price'}
                    </p>
                  </div>
                  <button
                    onClick={() => addProductToCanvas(product)}
                    className="opacity-0 group-hover:opacity-100 shrink-0 bg-indigo-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg transition-all hover:bg-indigo-700"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {shopConnected && shopProducts.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-[11px] font-semibold">
            No products found in your store.
          </div>
        )}

        {/* Quick Setup Guide */}
        {!shopConnected && (
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <h4 className="font-black uppercase tracking-widest text-[10px] text-gray-400">Quick Setup Guide</h4>
            {[
              { step: '1', text: 'Go to Shopify Admin → Apps → Develop apps' },
              { step: '2', text: 'Create a new custom app and enable the Storefront API' },
              { step: '3', text: 'Copy your Storefront Access Token here' },
              { step: '4', text: 'Browse products and add buy buttons to your canvas' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                <span className="text-[11px] text-gray-500 font-medium leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Also Add Shopify Widget manually */}
        <div className="border-t border-gray-100 pt-4">
          <button
            onClick={() => addSection('ShopifyProduct')}
            className="w-full text-left p-3 border border-dashed border-indigo-200 bg-indigo-50/50 text-indigo-700 rounded-xl hover:bg-indigo-50 transition-all group flex items-center justify-between text-[11px] font-bold"
          >
            <span>Add Empty Shopify Widget to Canvas</span>
            <Plus className="w-4 h-4 opacity-60 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    );
  };

  // Render Left Drawer Media Library panel
  const renderMediaPanel = () => (
    <div className="space-y-6 flex flex-col h-full">
      {mediaSelectorTarget && (
        <div className="bg-blue-100 border-2 border-blue-500 p-3 rounded-lg flex flex-col gap-2 shadow-sm animate-pulse shrink-0">
          <p className="text-[9px] font-black text-blue-900 uppercase tracking-widest">
            🎯 Image Picker Mode
          </p>
          <p className="text-[9px] font-bold text-blue-800 leading-tight">
            Click any thumbnail below to select it for the active block property, or click Cancel to exit.
          </p>
          <button 
            onClick={() => setMediaSelectorTarget(null)}
            className="w-full bg-white border-2 border-blue-500 text-blue-800 py-1 rounded text-[8px] font-black uppercase hover:bg-blue-50"
          >
            Cancel Picker
          </button>
        </div>
      )}

      {/* Sub-tab selector */}
      <div className="bg-gray-100 p-1 rounded-xl flex gap-1 w-full max-w-[280px] mx-auto select-none shrink-0 border border-gray-200/40">
        <button
          onClick={() => setMediaPanelTab('my-media')}
          className={`flex-1 text-center py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${mediaPanelTab === 'my-media' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
        >
          My Uploads
        </button>
        <button
          onClick={() => setMediaPanelTab('stock')}
          className={`flex-1 text-center py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${mediaPanelTab === 'stock' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
        >
          Stock Photos
        </button>
      </div>

      {mediaPanelTab === 'my-media' ? (
        <div className="space-y-4 flex-1 flex flex-col min-h-0">
          <div className="flex gap-2 shrink-0">
            <button 
              onClick={handleUploadMediaClick}
              className="flex-1 bg-black text-white py-2.5 rounded-lg font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-1.5 hover:bg-black/90 active:scale-95 transition-all shadow-md"
            >
              <Upload className="w-3.5 h-3.5" /> Upload Media
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 gap-3 custom-scrollbar">
            {mediaFiles.length === 0 && (
              <div className="col-span-full py-8 text-center text-black/40 font-bold uppercase tracking-widest text-[10px]">
                No media files found. Upload some!
              </div>
            )}
            <React.Fragment>
              {mediaFiles.map((file) => (
                <div 
                  key={file.id} 
                  onClick={() => {
                    if (mediaSelectorTarget) {
                      handleSelectMedia(file.url);
                    }
                  }}
                  className={`group relative aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${mediaSelectorTarget ? 'hover:border-blue-500 hover:scale-105 shadow-sm' : 'border-black/15 hover:border-black'}`}
                >
                  <img src={file.url} className="w-full h-full object-cover" alt="Media" referrerPolicy="no-referrer" />
                  
                  {/* Hover Actions overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5">
                    {!mediaSelectorTarget && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); window.open(file.url, '_blank'); }} 
                        className="bg-white p-1.5 rounded-md hover:scale-110 transition-transform"
                        title="View Image"
                      >
                        <Eye className="w-3.5 h-3.5 text-black" />
                      </button>
                    )}
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDeleteMedia(file.id); }} 
                      className="bg-red-500 p-1.5 rounded-md hover:scale-110 transition-transform"
                      title="Delete Image"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </React.Fragment>
          </div>
        </div>
      ) : (
        <div className="space-y-4 flex-1 flex flex-col min-h-0">
          {!isStockLive && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] p-2.5 rounded-lg shrink-0 leading-normal flex items-start gap-2 shadow-sm font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
              <div>
                <span>Using offline stock database. Add <strong>UNSPLASH_ACCESS_KEY</strong> to your <code>.env.local</code> file to unlock live Unsplash library search.</span>
              </div>
            </div>
          )}
          {/* Stock Search Input bar */}
          <div className="flex gap-2 shrink-0">
            <input 
              type="text" 
              placeholder="Search free stock photos..."
              defaultValue={stockSearchQuery}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setStockSearchQuery((e.target as HTMLInputElement).value);
                }
              }}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg text-xs px-3 py-2 outline-none focus:border-blue-400 focus:bg-white transition-colors"
            />
            <button 
              onClick={(e) => {
                const input = (e.target as HTMLElement).previousSibling as HTMLInputElement;
                setStockSearchQuery(input.value);
              }}
              className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-black/90 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Stock Photos Grid */}
          <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
            {isStockLoading ? (
              <div className="text-center py-12 text-xs font-bold text-gray-400">
                Searching commercial-free library...
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 pb-4">
                {stockPhotos.length === 0 && (
                  <div className="col-span-full py-12 text-center text-black/40 font-bold uppercase tracking-widest text-[10px]">
                    No photos found. Try another search!
                  </div>
                )}
                <React.Fragment>
                  {stockPhotos.map((photo) => (
                    <div 
                      key={photo.id} 
                      onClick={() => {
                        if (mediaSelectorTarget) {
                          handleSelectMedia(photo.url);
                        } else {
                          addToast('Click an image field in the inspector panel first, then select a photo here', 'info');
                        }
                      }}
                      className={`group relative aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${mediaSelectorTarget ? 'hover:border-blue-500 hover:scale-105 shadow-sm border-black/15' : 'border-black/15 hover:border-black'}`}
                      title={`Photo by ${photo.author} on Unsplash`}
                    >
                      <img src={photo.thumb} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                      
                      {/* Hover Actions / Credits overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2 opacity-0 group-hover:opacity-100 flex flex-col justify-end">
                        <span className="text-[8px] text-white/90 truncate font-semibold">
                          by {photo.author}
                        </span>
                        <span className="text-[6px] text-white/50 leading-none">
                          via Unsplash
                        </span>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // Render the right Sidebar properties Inspector
  const renderInspector = () => {
    // Determine selected section and element
    const selectedSection = sections.find(s => s.id === selectedSectionId);
    let selectedElement: any = null;
    if (selectedSection && selectedSection.type === 'CustomSection' && selectedElementColIdx !== null && selectedElementIdx !== null) {
      selectedElement = selectedSection.props.columns?.[selectedElementColIdx]?.elements?.[selectedElementIdx];
    }

    const isElementActive = !!selectedElement;
    const activeType = isElementActive ? selectedElement.type : selectedSection?.type;
    const styleOverrides = isElementActive ? (selectedElement.styleOverrides || {}) : (selectedSection?.styleOverrides || {});

    const updateStyle = (key: string, value: any) => {
      if (!selectedSectionId) return;
      if (isElementActive) {
        handleUpdateElementStyle(selectedSectionId, selectedElementColIdx!, selectedElementIdx!, key, value);
      } else {
        handleUpdateStyleOverride(selectedSectionId, key, value);
      }
    };

    const updateProp = (key: string, value: any) => {
      if (!selectedSectionId) return;
      if (isElementActive) {
        handleUpdateElementProp(selectedSectionId, selectedElementColIdx!, selectedElementIdx!, key, value);
      } else {
        handleUpdateProp(selectedSectionId, key, value);
      }
    };

    return (
      <div className="h-full flex flex-col overflow-hidden bg-white text-gray-900 border-l border-gray-200">
        {/* Inspector header with breadcrumb */}
        <div className="px-4 pt-3 pb-2 border-b border-gray-200 shrink-0 bg-white">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Inspector</span>
            {selectedSection && (
              <>
                <ChevronRight className="w-3 h-3 text-gray-300" />
                <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  {selectedSection.type}
                </span>
              </>
            )}
            {isElementActive && selectedElement && (
              <>
                <ChevronRight className="w-3 h-3 text-gray-300" />
                <button
                  onClick={() => {
                    setSelectedElementId(null);
                    setSelectedElementColIdx(null);
                    setSelectedElementIdx(null);
                  }}
                  className="text-[9px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded hover:bg-orange-100 transition-colors flex items-center gap-0.5"
                >
                  {selectedElement.type}
                  <X className="w-2.5 h-2.5" />
                </button>
              </>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm text-gray-800">
              {isElementActive ? `Edit ${selectedElement?.type}` : (activeType || 'Select a block')}
            </span>
            <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100" onClick={() => setRightSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>


        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
          {!selectedSection ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 relative">
              <div className="max-w-[200px] mx-auto text-center space-y-4">
                <Settings className="w-10 h-10 opacity-30 mx-auto text-gray-400 animate-spin-slow" />
                <p className="font-semibold text-xs text-gray-700 uppercase tracking-wider">No section selected</p>
                <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Click any block or text inside the canvas to inspect content and styles.</p>
              </div>
              {/* Floating Designer SVG Illustration */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center opacity-40 select-none pointer-events-none">
                <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none">
                  {/* Laptop screen */}
                  <rect x="35" y="80" width="80" height="50" rx="4" fill="#E5E7FD" stroke="#5A60F6" strokeWidth="3"/>
                  <line x1="25" y1="130" x2="125" y2="130" stroke="#5A60F6" strokeWidth="4" strokeLinecap="round"/>
                  {/* Floating elements */}
                  <polygon points="120,40 140,70 100,70" fill="#FF9B71" opacity="0.85"/>
                  <circle cx="160" cy="50" r="15" fill="#5A60F6" opacity="0.85"/>
                  <rect x="140" y="90" width="24" height="24" rx="3" fill="#4C6B36" opacity="0.85" transform="rotate(15 152 102)"/>
                  {/* Designer sitting */}
                  <path d="M75,100 C75,90 85,85 90,85 C95,85 100,90 100,100 L100,120 L75,120 Z" fill="#E2E8F0"/>
                  <circle cx="87.5" cy="72" r="8" fill="#FEE2E2"/>
                  <path d="M80,120 L60,150 L40,150" stroke="#5A60F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M95,120 L95,160 L115,160" stroke="#5A60F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Tab Selector */}
              <div className="flex bg-gray-100 rounded-lg p-0.5 border border-gray-200/50">
                {(['content', 'style', 'advanced'] as const).map(tab => {
                  const label = tab === 'content' ? (isElementActive ? 'Content' : 'Layout') : tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setEditSubTab(tab)}
                      className={`flex-1 py-1 text-[10px] font-semibold capitalize rounded-md transition-all ${editSubTab === tab ? 'bg-white text-gray-900 shadow-sm border border-gray-200/30' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* CONTENT SUB-TAB */}
              {editSubTab === 'content' && (
                <div className="space-y-4">
                  {/* Alignment row */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Quick Actions</span>
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => updateStyle('textAlign', 'left')}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${styleOverrides.textAlign === 'left' ? 'text-blue-600 bg-blue-50' : 'text-gray-400'}`}
                        title="Align Left"
                      >
                        <AlignLeft className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => updateStyle('textAlign', 'center')}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${styleOverrides.textAlign === 'center' ? 'text-blue-600 bg-blue-50' : 'text-gray-400'}`}
                        title="Align Center"
                      >
                        <AlignCenter className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => updateStyle('textAlign', 'right')}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${styleOverrides.textAlign === 'right' ? 'text-blue-600 bg-blue-50' : 'text-gray-400'}`}
                        title="Align Right"
                      >
                        <AlignRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {isElementActive ? (
                    // Element-Level Content Controls
                    <div className="space-y-4">
                      {selectedElement.type === 'Heading' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Heading Text</label>
                          <textarea 
                            value={selectedElement.props.text || ''}
                            onChange={(e) => updateProp('text', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none min-h-[60px]"
                          />
                        </div>
                      )}
                      {selectedElement.type === 'Paragraph' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Paragraph Text</label>
                          <textarea 
                            value={selectedElement.props.text || ''}
                            onChange={(e) => updateProp('text', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none min-h-[90px]"
                          />
                        </div>
                      )}
                      {selectedElement.type === 'Button' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Button Text</label>
                            <input 
                              type="text"
                              value={selectedElement.props.text || ''}
                              onChange={(e) => updateProp('text', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Link URL</label>
                            <input 
                              type="text"
                              value={selectedElement.props.link || ''}
                              onChange={(e) => updateProp('link', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                              placeholder="#"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Button Style</label>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                              {[
                                { value: 'filled', label: 'Filled' },
                                { value: 'outlined', label: 'Outlined' },
                                { value: 'pill', label: 'Pill' },
                                { value: 'brutalist', label: 'Brutalist' },
                                { value: 'link', label: 'Text Link' }
                              ].map(styleOpt => {
                                const isActive = (selectedElement.props.buttonStyle || 'filled') === styleOpt.value;
                                return (
                                  <button
                                    key={styleOpt.value}
                                    type="button"
                                    onClick={() => updateProp('buttonStyle', styleOpt.value)}
                                    className={`px-3 py-2 rounded-xl text-[10px] font-bold text-center border transition-all ${
                                      isActive 
                                        ? 'bg-black text-white border-black shadow-md' 
                                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                    }`}
                                  >
                                    {styleOpt.label}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Image' && (
                        <>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans">Image Asset</label>
                            <div 
                              className="w-full h-28 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative group cursor-pointer flex items-center justify-center hover:border-blue-400 transition-colors"
                              onClick={() => {
                                setMediaSelectorTarget({ id: selectedSection.id, propName: 'url' });
                                setActiveLeftTool('media');
                              }}
                            >
                              {selectedElement.props.url ? (
                                <>
                                  <img src={selectedElement.props.url} className="w-full h-full object-cover" alt="Preview" />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <span className="text-white text-[10px] font-semibold bg-black/50 px-2.5 py-1 rounded">Swap Image</span>
                                  </div>
                                </>
                              ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                  <ImageIcon className="w-6 h-6 mb-1 opacity-50" />
                                  <span className="text-[9px] font-semibold">Select from Library</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Alt Description</label>
                            <input 
                              type="text"
                              value={selectedElement.props.alt || ''}
                              onChange={(e) => updateProp('alt', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                              placeholder="Describe image..."
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Video' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Video Link URL</label>
                          <input 
                            type="text"
                            value={selectedElement.props.url || ''}
                            onChange={(e) => updateProp('url', e.target.value)}
                            placeholder="https://www.youtube.com/watch?v=..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                          />
                        </div>
                      )}
                      {selectedElement.type === 'GoogleMap' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Address Query</label>
                            <input 
                              type="text"
                              value={selectedElement.props.address || ''}
                              onChange={(e) => updateProp('address', e.target.value)}
                              placeholder="e.g. 1600 Amphitheatre Pkwy, Mountain View, CA"
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Zoom Level (1-20)</label>
                            <input 
                              type="number"
                              min="1"
                              max="20"
                              value={selectedElement.props.zoom || '14'}
                              onChange={(e) => updateProp('zoom', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'StarRating' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Rating (0 - 5)</label>
                            <input 
                              type="number"
                              min="0"
                              max="5"
                              step="0.1"
                              value={selectedElement.props.rating ?? 5}
                              onChange={(e) => updateProp('rating', parseFloat(e.target.value) || 5)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Star Color</label>
                            <div className="flex gap-2 items-center">
                              <input 
                                type="color"
                                value={selectedElement.props.color || '#f59e0b'}
                                onChange={(e) => updateProp('color', e.target.value)}
                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer p-0 bg-transparent shrink-0"
                              />
                              <input 
                                type="text"
                                value={selectedElement.props.color || '#f59e0b'}
                                onChange={(e) => updateProp('color', e.target.value)}
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Star Size</label>
                            <input 
                              type="text"
                              value={selectedElement.props.size || '20px'}
                              onChange={(e) => updateProp('size', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                              placeholder="e.g. 20px"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Icon' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Icon Name (Lucide)</label>
                            <input 
                              type="text"
                              value={selectedElement.props.name || 'Sparkles'}
                              onChange={(e) => updateProp('name', e.target.value)}
                              placeholder="e.g. Sparkles, Star, Heart..."
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Icon Color</label>
                            <div className="flex gap-2 items-center">
                              <input 
                                type="color"
                                value={selectedElement.props.color || '#3b82f6'}
                                onChange={(e) => updateProp('color', e.target.value)}
                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer p-0 bg-transparent shrink-0"
                              />
                              <input 
                                type="text"
                                value={selectedElement.props.color || '#3b82f6'}
                                onChange={(e) => updateProp('color', e.target.value)}
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Icon Size</label>
                            <input 
                              type="text"
                              value={selectedElement.props.size || '36px'}
                              onChange={(e) => updateProp('size', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                              placeholder="e.g. 36px"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'ImageBox' && (
                        <>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans">Card Image</label>
                            <div 
                              className="w-full h-28 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative group cursor-pointer flex items-center justify-center hover:border-blue-400 transition-colors"
                              onClick={() => {
                                setMediaSelectorTarget({ id: selectedSection.id, propName: 'url' });
                                setActiveLeftTool('media');
                              }}
                            >
                              {selectedElement.props.url ? (
                                <>
                                  <img src={selectedElement.props.url} className="w-full h-full object-cover" alt="Preview" />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <span className="text-white text-[10px] font-semibold bg-black/50 px-2.5 py-1 rounded">Swap Image</span>
                                  </div>
                                </>
                              ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                  <ImageIcon className="w-6 h-6 mb-1 opacity-50" />
                                  <span className="text-[9px] font-semibold">Select from Library</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Card Title</label>
                            <input 
                              type="text"
                              value={selectedElement.props.title || ''}
                              onChange={(e) => updateProp('title', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Card Body Text</label>
                            <textarea 
                              value={selectedElement.props.text || ''}
                              onChange={(e) => updateProp('text', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none min-h-[60px]"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'IconBox' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Icon Name (Lucide)</label>
                            <input 
                              type="text"
                              value={selectedElement.props.icon || 'Sparkles'}
                              onChange={(e) => updateProp('icon', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Box Title</label>
                            <input 
                              type="text"
                              value={selectedElement.props.title || ''}
                              onChange={(e) => updateProp('title', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Box Body Text</label>
                            <textarea 
                              value={selectedElement.props.text || ''}
                              onChange={(e) => updateProp('text', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none min-h-[60px]"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Counter' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Target Value</label>
                            <input 
                              type="text"
                              value={selectedElement.props.target || ''}
                              onChange={(e) => updateProp('target', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Suffix</label>
                            <input 
                              type="text"
                              value={selectedElement.props.suffix || ''}
                              onChange={(e) => updateProp('suffix', e.target.value)}
                              placeholder="e.g. +, %"
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Label Text</label>
                            <input 
                              type="text"
                              value={selectedElement.props.text || ''}
                              onChange={(e) => updateProp('text', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Testimonial' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Client Quote</label>
                            <textarea 
                              value={selectedElement.props.quote || ''}
                              onChange={(e) => updateProp('quote', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 min-h-[60px]"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Author Name</label>
                            <input 
                              type="text"
                              value={selectedElement.props.author || ''}
                              onChange={(e) => updateProp('author', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Designation</label>
                            <input 
                              type="text"
                              value={selectedElement.props.designation || ''}
                              onChange={(e) => updateProp('designation', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans">Author Avatar</label>
                            <div 
                              className="w-16 h-16 bg-gray-100 rounded-full border border-gray-200 overflow-hidden relative group cursor-pointer flex items-center justify-center hover:border-blue-400 transition-colors"
                              onClick={() => {
                                setMediaSelectorTarget({ id: selectedSection.id, propName: 'avatar' });
                                setActiveLeftTool('media');
                              }}
                            >
                              {selectedElement.props.avatar ? (
                                <>
                                  <img src={selectedElement.props.avatar} className="w-full h-full object-cover" alt="Preview" />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                    <span className="text-white text-[8px] font-semibold bg-black/50 px-1 rounded text-center">Swap</span>
                                  </div>
                                </>
                              ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                  <ImageIcon className="w-4 h-4 opacity-50" />
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Alert' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Alert Type</label>
                            <select 
                              value={selectedElement.props.alertType || 'success'}
                              onChange={(e) => updateProp('alertType', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400"
                            >
                              <option value="success">Success (Green)</option>
                              <option value="info">Info (Blue)</option>
                              <option value="warning">Warning (Amber)</option>
                              <option value="danger">Danger (Rose)</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Alert Title</label>
                            <input 
                              type="text"
                              value={selectedElement.props.title || ''}
                              onChange={(e) => updateProp('title', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Alert Message</label>
                            <textarea 
                              value={selectedElement.props.text || ''}
                              onChange={(e) => updateProp('text', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 min-h-[60px]"
                            />
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'Accordion' && (
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans">Accordion Items</label>
                          {((selectedElement.props.items || []) as any[]).map((item, idx) => (
                            <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                              <button 
                                onClick={() => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems.splice(idx, 1);
                                  updateProp('items', newItems);
                                }}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                              <div className="text-[9px] font-bold text-gray-400 uppercase">Item {idx + 1}</div>
                              <input 
                                type="text"
                                value={item.title || ''}
                                onChange={(e) => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems[idx] = { ...newItems[idx], title: e.target.value };
                                  updateProp('items', newItems);
                                }}
                                placeholder="Item title"
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                              />
                              <textarea
                                value={item.content || ''}
                                onChange={(e) => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems[idx] = { ...newItems[idx], content: e.target.value };
                                  updateProp('items', newItems);
                                }}
                                placeholder="Item content"
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-[11px] text-gray-900 focus:outline-none min-h-[50px]"
                              />
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newItems = [...(selectedElement.props.items || []), { title: 'New Item Title', content: 'New item content goes here...' }];
                              updateProp('items', newItems);
                            }}
                            className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                          >
                            + Add Accordion Item
                          </button>
                        </div>
                      )}
                      {selectedElement.type === 'ProgressBar' && (
                        <>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Progress Metric Title</label>
                            <input 
                              type="text"
                              value={selectedElement.props.title || ''}
                              onChange={(e) => updateProp('title', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Percentage (0 - 100)</label>
                            <input 
                              type="number"
                              min="0"
                              max="100"
                              value={selectedElement.props.percent || '50'}
                              onChange={(e) => updateProp('percent', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Fill Color</label>
                            <div className="flex gap-2 items-center">
                              <input 
                                type="color"
                                value={selectedElement.props.color || '#3b82f6'}
                                onChange={(e) => updateProp('color', e.target.value)}
                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer p-0 bg-transparent shrink-0"
                              />
                              <input 
                                type="text"
                                value={selectedElement.props.color || '#3b82f6'}
                                onChange={(e) => updateProp('color', e.target.value)}
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400"
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {selectedElement.type === 'SocialIcons' && (
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">Social Channels</label>
                          {((selectedElement.props.platforms || []) as any[]).map((p, idx) => (
                            <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                              <button 
                                onClick={() => {
                                  const newPlatforms = [...selectedElement.props.platforms];
                                  newPlatforms.splice(idx, 1);
                                  updateProp('platforms', newPlatforms);
                                }}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                              <div className="text-[9px] font-bold text-gray-400 uppercase">{p.name}</div>
                              <input 
                                type="text"
                                value={p.link || ''}
                                onChange={(e) => {
                                  const newPlatforms = [...selectedElement.props.platforms];
                                  newPlatforms[idx] = { ...newPlatforms[idx], link: e.target.value };
                                  updateProp('platforms', newPlatforms);
                                }}
                                placeholder="Channel URL (e.g. https://facebook.com/...)"
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                              />
                            </div>
                          ))}
                          {showAddSocial ? (
                            <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-xl">
                              <select
                                value={newSocialName}
                                onChange={e => setNewSocialName(e.target.value)}
                                className="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400"
                              >
                                {['facebook','instagram','twitter','linkedin','youtube','tiktok','pinterest','snapchat'].map(p => (
                                  <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                                ))}
                              </select>
                              <button
                                onClick={() => {
                                  const newPlatforms = [...(selectedElement.props.platforms || []), { name: newSocialName, link: '#' }];
                                  updateProp('platforms', newPlatforms);
                                  setShowAddSocial(false);
                                  setNewSocialName('facebook');
                                }}
                                className="px-3 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-lg hover:bg-blue-700 transition-colors"
                              >
                                Add
                              </button>
                              <button onClick={() => setShowAddSocial(false)} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg transition-colors">
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setShowAddSocial(true)}
                              className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                            >
                              + Add Social Link
                            </button>
                          )}
                        </div>
                      )}
                      {selectedElement.type === 'Spacer' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Height (px)</label>
                          <input 
                            type="text"
                            value={selectedElement.props.height || '24px'}
                            onChange={(e) => updateProp('height', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            placeholder="e.g. 24px"
                          />
                        </div>
                      )}
                      {selectedElement.type === 'BasicGallery' && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Columns</label>
                            <select
                              value={selectedElement.props.columns || 3}
                              onChange={(e) => updateProp('columns', parseInt(e.target.value) || 3)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400"
                            >
                              <option value={1}>1 Column</option>
                              <option value={2}>2 Columns</option>
                              <option value={3}>3 Columns</option>
                              <option value={4}>4 Columns</option>
                              <option value={6}>6 Columns</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Spacing</label>
                            <select
                              value={selectedElement.props.spacing || '16px'}
                              onChange={(e) => updateProp('spacing', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400"
                            >
                              <option value="8px">8px (Small)</option>
                              <option value="16px">16px (Medium)</option>
                              <option value="24px">24px (Large)</option>
                              <option value="32px">32px (X-Large)</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">Gallery Images</label>
                            {((selectedElement.props.images || []) as any[]).map((img, idx) => (
                              <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                                <button 
                                  onClick={() => {
                                    const newImages = [...selectedElement.props.images];
                                    newImages.splice(idx, 1);
                                    updateProp('images', newImages);
                                  }}
                                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                                <div className="text-[9px] font-bold text-gray-400 uppercase">Image {idx + 1}</div>
                                <div className="flex gap-2">
                                  {img.url && (
                                    <img src={img.url} className="w-10 h-10 object-cover rounded border border-gray-250 bg-white" alt="" />
                                  )}
                                  <input 
                                    type="text"
                                    value={img.url || ''}
                                    onChange={(e) => {
                                      const newImages = [...selectedElement.props.images];
                                      newImages[idx] = { ...newImages[idx], url: e.target.value };
                                      updateProp('images', newImages);
                                    }}
                                    placeholder="Image URL"
                                    className="flex-1 bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                                  />
                                </div>
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                const newImages = [...(selectedElement.props.images || []), { url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=600' }];
                                updateProp('images', newImages);
                              }}
                              className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                            >
                              + Add Gallery Image
                            </button>
                          </div>
                        </div>
                      )}
                      {selectedElement.type === 'ImageCarousel' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Autoplay</label>
                            <input 
                              type="checkbox"
                              checked={!!selectedElement.props.autoplay}
                              onChange={(e) => updateProp('autoplay', e.target.checked)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Speed (ms)</label>
                            <input 
                              type="number"
                              value={selectedElement.props.speed || 3000}
                              onChange={(e) => updateProp('speed', parseInt(e.target.value) || 3000)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                              placeholder="3000"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">Carousel Slides</label>
                            {((selectedElement.props.images || []) as any[]).map((img, idx) => (
                              <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                                <button 
                                  onClick={() => {
                                    const newImages = [...selectedElement.props.images];
                                    newImages.splice(idx, 1);
                                    updateProp('images', newImages);
                                  }}
                                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                                <div className="text-[9px] font-bold text-gray-400 uppercase">Slide {idx + 1}</div>
                                <div className="flex gap-2">
                                  {img.url && (
                                    <img src={img.url} className="w-10 h-10 object-cover rounded border border-gray-250 bg-white" alt="" />
                                  )}
                                  <input 
                                    type="text"
                                    value={img.url || ''}
                                    onChange={(e) => {
                                      const newImages = [...selectedElement.props.images];
                                      newImages[idx] = { ...newImages[idx], url: e.target.value };
                                      updateProp('images', newImages);
                                    }}
                                    placeholder="Slide Image URL"
                                    className="flex-1 bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                                  />
                                </div>
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                const newImages = [...(selectedElement.props.images || []), { url: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800' }];
                                updateProp('images', newImages);
                              }}
                              className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                            >
                              + Add Carousel Slide
                            </button>
                          </div>
                        </div>
                      )}
                      {selectedElement.type === 'IconList' && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Global Icon Color</label>
                            <div className="flex gap-2 items-center">
                              <input 
                                type="color"
                                value={selectedElement.props.iconColor || '#3b82f6'}
                                onChange={(e) => updateProp('iconColor', e.target.value)}
                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer p-0 bg-transparent shrink-0"
                              />
                              <input 
                                type="text"
                                value={selectedElement.props.iconColor || '#3b82f6'}
                                onChange={(e) => updateProp('iconColor', e.target.value)}
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">List Items</label>
                            {((selectedElement.props.items || []) as any[]).map((item, idx) => (
                              <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                                <button 
                                  onClick={() => {
                                    const newItems = [...selectedElement.props.items];
                                    newItems.splice(idx, 1);
                                    updateProp('items', newItems);
                                  }}
                                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                                <div className="text-[9px] font-bold text-gray-400 uppercase">Item {idx + 1}</div>
                                <input 
                                  type="text"
                                  value={item.icon || 'Sparkles'}
                                  onChange={(e) => {
                                    const newItems = [...selectedElement.props.items];
                                    newItems[idx] = { ...newItems[idx], icon: e.target.value };
                                    updateProp('items', newItems);
                                  }}
                                  placeholder="Icon Name (Lucide)"
                                  className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                                />
                                <input 
                                  type="text"
                                  value={item.text || ''}
                                  onChange={(e) => {
                                    const newItems = [...selectedElement.props.items];
                                    newItems[idx] = { ...newItems[idx], text: e.target.value };
                                    updateProp('items', newItems);
                                  }}
                                  placeholder="Item Text"
                                  className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                                />
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                const newItems = [...(selectedElement.props.items || []), { text: 'New List Item', icon: 'CheckCircle' }];
                                updateProp('items', newItems);
                              }}
                              className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                            >
                              + Add List Item
                            </button>
                          </div>
                        </div>
                      )}
                      {selectedElement.type === 'Tabs' && (
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">Tab Items</label>
                          {((selectedElement.props.items || []) as any[]).map((item, idx) => (
                            <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                              <button 
                                onClick={() => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems.splice(idx, 1);
                                  updateProp('items', newItems);
                                }}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                              <div className="text-[9px] font-bold text-gray-400 uppercase">Tab {idx + 1}</div>
                              <input 
                                type="text"
                                value={item.title || ''}
                                onChange={(e) => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems[idx] = { ...newItems[idx], title: e.target.value };
                                  updateProp('items', newItems);
                                }}
                                placeholder="Tab Title"
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                              />
                              <textarea 
                                value={item.content || ''}
                                onChange={(e) => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems[idx] = { ...newItems[idx], content: e.target.value };
                                  updateProp('items', newItems);
                                }}
                                placeholder="Tab Content Description"
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none min-h-[60px]"
                              />
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newItems = [...(selectedElement.props.items || []), { title: 'New Tab Title', content: 'New tab content goes here...' }];
                              updateProp('items', newItems);
                            }}
                            className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                          >
                            + Add Tab Item
                          </button>
                        </div>
                      )}
                      {selectedElement.type === 'Toggle' && (
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">Toggle Items</label>
                          {((selectedElement.props.items || []) as any[]).map((item, idx) => (
                            <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                              <button 
                                onClick={() => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems.splice(idx, 1);
                                  updateProp('items', newItems);
                                }}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                              <div className="text-[9px] font-bold text-gray-400 uppercase">Toggle {idx + 1}</div>
                              <input 
                                type="text"
                                value={item.title || ''}
                                onChange={(e) => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems[idx] = { ...newItems[idx], title: e.target.value };
                                  updateProp('items', newItems);
                                }}
                                placeholder="Toggle Title"
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                              />
                              <textarea 
                                value={item.content || ''}
                                onChange={(e) => {
                                  const newItems = [...selectedElement.props.items];
                                  newItems[idx] = { ...newItems[idx], content: e.target.value };
                                  updateProp('items', newItems);
                                }}
                                placeholder="Toggle content text..."
                                className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none min-h-[60px]"
                              />
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const newItems = [...(selectedElement.props.items || []), { title: 'New FAQ Question', content: 'New FAQ answer goes here...' }];
                              updateProp('items', newItems);
                            }}
                            className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                          >
                            + Add Toggle FAQ
                          </button>
                        </div>
                      )}
                      {selectedElement.type === 'SoundCloud' && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">SoundCloud Track URL</label>
                            <input 
                              type="text"
                              value={selectedElement.props.url || ''}
                              onChange={(e) => updateProp('url', e.target.value)}
                              placeholder="https://soundcloud.com/..."
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Visual Cover Art Player</label>
                            <input 
                              type="checkbox"
                              checked={!!selectedElement.props.visual}
                              onChange={(e) => updateProp('visual', e.target.checked)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                            />
                          </div>
                        </div>
                      )}
                      {selectedElement.type === 'Shortcode' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Shortcode Text</label>
                          <input 
                            type="text"
                            value={selectedElement.props.code || ''}
                            onChange={(e) => updateProp('code', e.target.value)}
                            placeholder="e.g. [newsletter-form id='1']"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:bg-white focus:border-blue-400 focus:outline-none"
                          />
                        </div>
                      )}
                      {selectedElement.type === 'HTML' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Raw HTML Markup</label>
                          <textarea 
                            value={selectedElement.props.html || ''}
                            onChange={(e) => updateProp('html', e.target.value)}
                            placeholder="<div>\n  <p>Hello HTML</p>\n</div>"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:bg-white focus:border-blue-400 focus:outline-none min-h-[160px]"
                          />
                        </div>
                      )}
                      {selectedElement.type === 'MenuAnchor' && (
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Anchor ID (Without #)</label>
                          <input 
                            type="text"
                            value={selectedElement.props.anchorId || ''}
                            onChange={(e) => updateProp('anchorId', e.target.value)}
                            placeholder="e.g. about-us, features"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                          />
                          <p className="text-[9px] text-gray-400 leading-tight">Use this ID in a Button link or Menu item (e.g. <code>#features</code>) to scroll directly here.</p>
                        </div>
                      )}
                      {selectedElement.type === 'Sidebar' && (
                        <div className="space-y-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans">Sidebar Heading Title</label>
                            <input 
                              type="text"
                              value={selectedElement.props.title || ''}
                              onChange={(e) => updateProp('title', e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs focus:bg-white focus:border-blue-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block font-sans font-black">Widgets Installed</label>
                            {((selectedElement.props.widgets || []) as any[]).map((w, idx) => (
                              <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group space-y-2">
                                <button 
                                  onClick={() => {
                                    const newWidgets = [...selectedElement.props.widgets];
                                    newWidgets.splice(idx, 1);
                                    updateProp('widgets', newWidgets);
                                  }}
                                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                                <div className="text-[9px] font-bold text-gray-400 uppercase">{w.type.replace('-', ' ')} Widget</div>
                                <input 
                                  type="text"
                                  value={w.title || ''}
                                  onChange={(e) => {
                                    const newWidgets = [...selectedElement.props.widgets];
                                    newWidgets[idx] = { ...newWidgets[idx], title: e.target.value };
                                    updateProp('widgets', newWidgets);
                                  }}
                                  placeholder="Widget Title"
                                  className="w-full bg-white border border-gray-200 rounded-md px-2.5 py-1 text-xs text-gray-900 focus:outline-none"
                                />
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                const widgetOptions = [
                                  { type: 'search', title: 'Search Blog' },
                                  { type: 'recent-posts', title: 'Recent Work' },
                                  { type: 'categories', title: 'Categories' },
                                ];
                                const next = widgetOptions.find(w => !(selectedElement.props.widgets || []).some((x: any) => x.type === w.type)) || widgetOptions[0];
                                const newWidgets = [...(selectedElement.props.widgets || []), { type: next.type, title: next.title }];
                                updateProp('widgets', newWidgets);
                              }}
                              className="w-full py-2 border border-dashed border-gray-300 text-blue-600 font-bold text-xs rounded-xl hover:bg-blue-50/50 hover:border-blue-200"
                            >
                              + Add Sidebar Widget
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Section-Level Content Controls
                    COMPONENT_SCHEMAS[selectedSection.type].fields.map((field: any) => {
                      const isImageField = field.name.toLowerCase().includes('image') || field.name.toLowerCase().includes('url') || field.name === 'bgImage';
                      return (
                        <div key={field.name} className="flex flex-col gap-1.5">
                          <label className="font-semibold text-[10px] text-gray-500 uppercase tracking-wider font-sans">{field.label}</label>
                                       {field.type === 'text' && (
                            <div className="flex flex-col gap-2">
                              {field.name === 'layoutPreset' ? (
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                  {((selectedSection.type === 'Hero'
                                    ? [
                                        { value: 'standard', label: 'Standard Left' },
                                        { value: 'centered', label: 'Centered' },
                                        { value: 'split', label: 'Split Screen' },
                                        { value: 'box', label: 'Box Card' }
                                      ]
                                    : selectedSection.type === 'Feature'
                                    ? [
                                        { value: 'standard', label: 'Standard Card' },
                                        { value: 'side-by-side', label: 'Side-by-Side' },
                                        { value: 'accent-card', label: 'Accent Card' },
                                        { value: 'minimal', label: 'Minimal Text' }
                                      ]
                                    : selectedSection.type === 'TestimonialList'
                                    ? [
                                        { value: 'grid', label: 'Card Grid' },
                                        { value: 'list', label: 'Stacked List' },
                                        { value: 'minimal-rows', label: 'Minimal Rows' }
                                      ]
                                    : []
                                  ) as { value: string; label: string }[]).map(preset => {
                                    const isActive = (selectedSection.props.layoutPreset || 'standard') === preset.value || 
                                                     (selectedSection.type === 'TestimonialList' && !selectedSection.props.layoutPreset && preset.value === 'grid');
                                    return (
                                      <button
                                        key={preset.value}
                                        type="button"
                                        onClick={() => updateProp('layoutPreset', preset.value)}
                                        className={`px-3 py-2 rounded-xl text-[10px] font-bold text-center border transition-all ${
                                          isActive 
                                            ? 'bg-black text-white border-black shadow-md' 
                                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                        }`}
                                      >
                                        {preset.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : field.name === 'buttonStyle' ? (
                                <div className="grid grid-cols-2 gap-2 mt-1">
                                  {[
                                    { value: 'filled', label: 'Filled' },
                                    { value: 'outlined', label: 'Outlined' },
                                    { value: 'pill', label: 'Pill' },
                                    { value: 'brutalist', label: 'Brutalist' },
                                    { value: 'link', label: 'Text Link' }
                                  ].map(styleOpt => {
                                    const isActive = (selectedSection.props.buttonStyle || 'filled') === styleOpt.value;
                                    return (
                                      <button
                                        key={styleOpt.value}
                                        type="button"
                                        onClick={() => updateProp('buttonStyle', styleOpt.value)}
                                        className={`px-3 py-2 rounded-xl text-[10px] font-bold text-center border transition-all ${
                                          isActive 
                                            ? 'bg-black text-white border-black shadow-md' 
                                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                        }`}
                                      >
                                        {styleOpt.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : isImageField ? (
                                <div className="flex flex-col gap-2">
                                  <div 
                                    className="w-full h-24 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden relative group cursor-pointer flex items-center justify-center hover:border-blue-400 transition-colors"
                                    onClick={() => {
                                      setMediaSelectorTarget({ id: selectedSection.id, propName: field.name });
                                      setActiveLeftTool('media');
                                    }}
                                  >
                                    {selectedSection.props[field.name] ? (
                                      <>
                                        <img src={selectedSection.props[field.name]} className="w-full h-full object-cover" alt="Preview" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                          <span className="text-white text-[10px] font-semibold bg-black/50 px-2 py-1 rounded">Swap Image</span>
                                        </div>
                                      </>
                                    ) : (
                                      <div className="text-gray-400 flex flex-col items-center">
                                        <ImageIcon className="w-5 h-5 mb-1 opacity-50" />
                                        <span className="text-[9px] font-semibold">Click to select</span>
                                      </div>
                                    )}
                                  </div>
                                  <input 
                                    id={`inspector-input-${field.name}`}
                                    type="text" 
                                    value={selectedSection.props[field.name] || ''}
                                    onChange={(e) => updateProp(field.name, e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded text-[10px] px-2 py-1.5 focus:border-blue-400 focus:outline-none"
                                    placeholder="Or paste URL..."
                                  />
                                </div>
                              ) : (
                                <input 
                                  id={`inspector-input-${field.name}`}
                                  type="text" 
                                  value={selectedSection.props[field.name] || ''}
                                  onChange={(e) => updateProp(field.name, e.target.value)}
                                  className="w-full bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-900 focus:bg-white focus:border-blue-400 focus:outline-none transition-colors"
                                />
                              )}
                            </div>
                          )}
                          
                          {field.type === 'textarea' && (
                            <textarea 
                              id={`inspector-input-${field.name}`}
                              value={selectedSection.props[field.name] || ''}
                              onChange={(e) => updateProp(field.name, e.target.value)}
                              className="w-full bg-gray-50 border border-gray-200 rounded-md px-2.5 py-2 text-xs text-gray-900 min-h-[80px] resize-y focus:bg-white focus:border-blue-400 focus:outline-none transition-colors"
                            />
                          )}

                          {field.type === 'array' && (
                            <div className="space-y-2 mt-1">
                              {(selectedSection.props[field.name] || []).map((item: any, idx: number) => (
                                <div key={idx} className="p-3 border border-gray-200 rounded-lg bg-gray-50 relative group">
                                  <button 
                                    onClick={() => handleRemoveArrayItem(selectedSection.id, field.name, idx)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                  <div className="font-semibold text-[9px] text-gray-400 mb-2">ITEM {idx + 1}</div>
                                  <div className="space-y-2">
                                    {field.arrayFields.map((arrField: any) => {
                                      const isArrImage = arrField.name.toLowerCase().includes('image') || arrField.name.toLowerCase().includes('url');
                                      return (
                                        <div key={arrField.name} className="flex flex-col gap-1">
                                          <label className="font-medium text-[9px] text-gray-500 uppercase tracking-wider font-sans">{arrField.label}</label>
                                          {isArrImage ? (
                                            <div className="flex items-center gap-2">
                                              <button
                                                onClick={() => {
                                                  setMediaSelectorTarget({ id: selectedSection.id, propName: field.name, index: idx, fieldName: arrField.name });
                                                  setActiveLeftTool('media');
                                                }}
                                                className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center shrink-0 hover:border-blue-400 overflow-hidden"
                                              >
                                                {item[arrField.name] ? <img src={item[arrField.name]} className="w-full h-full object-cover" alt="" /> : <ImageIcon className="w-3.5 h-3.5 text-gray-400" />}
                                              </button>
                                              <input 
                                                id={`inspector-input-${field.name}-${idx}-${arrField.name}`}
                                                type="text" 
                                                value={item[arrField.name] || ''}
                                                onChange={(e) => handleUpdateArrayProp(selectedSection.id, field.name, idx, arrField.name, e.target.value)}
                                                className="flex-1 bg-white border border-gray-200 rounded px-2 py-1 text-[10px] focus:outline-none focus:border-blue-400"
                                              />
                                            </div>
                                          ) : (
                                            <input 
                                              id={`inspector-input-${field.name}-${idx}-${arrField.name}`}
                                              type="text" 
                                              value={item[arrField.name] || ''}
                                              onChange={(e) => handleUpdateArrayProp(selectedSection.id, field.name, idx, arrField.name, e.target.value)}
                                              className="w-full bg-white border border-gray-200 rounded px-2 py-1 text-[10px] focus:outline-none focus:border-blue-400"
                                            />
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                              <button 
                                onClick={() => handleAddArrayItem(selectedSection.id, field.name, field.arrayFields)}
                                className="w-full py-1.5 border border-dashed border-gray-300 text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all"
                              >
                                + Add {field.label}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* STYLE SUB-TAB */}
              {editSubTab === 'style' && (
                <div className="space-y-6">
                  {/* Typography Control Section */}
                  {(!isElementActive || ['Heading', 'Paragraph', 'Button'].includes(selectedElement.type)) && (
                    <div className="space-y-3">
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block font-sans">Typography</span>
                      
                      {/* Typeface Selection */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Typeface</label>
                        <select 
                          value={styleOverrides.fontFamily || 'Inter'}
                          onChange={(e) => updateStyle('fontFamily', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white"
                        >
                          <option value="Inter">Inter (Sans)</option>
                          <option value="Space Grotesk">Space Grotesk (Neo)</option>
                          <option value="Georgia">Georgia (Serif)</option>
                          <option value="monospace">Courier (Mono)</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {/* Font Width */}
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Font Width</label>
                          <select 
                            value={styleOverrides.fontWeight || 'normal'}
                            onChange={(e) => updateStyle('fontWeight', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white"
                          >
                            <option value="normal">Regular</option>
                            <option value="500">Medium</option>
                            <option value="bold">Bold</option>
                            <option value="900">Black</option>
                          </select>
                        </div>

                        {/* Font Size */}
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Font Size</label>
                          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-2 focus-within:bg-white focus-within:border-blue-400 transition-colors">
                            <input 
                              type="text"
                              value={styleOverrides.fontSize?.replace('px', '') || ''}
                              onChange={(e) => updateStyle('fontSize', e.target.value ? `${e.target.value}px` : '')}
                              className="w-full bg-transparent border-none text-xs text-gray-800 py-1.5 outline-none font-bold font-mono text-right pr-1"
                              placeholder="14"
                            />
                            <span className="text-[9px] text-gray-400 font-bold font-mono">PX</span>
                          </div>
                        </div>
                      </div>

                      {/* Text Color / Swatch fills */}
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Text Color</label>
                        <div className="flex gap-2 items-center">
                          <div 
                            className="w-7 h-7 rounded border border-gray-300 shadow-sm shrink-0" 
                            style={{ backgroundColor: styleOverrides.color || '#000000' }}
                          />
                          <input 
                            type="text"
                            value={styleOverrides.color || '#000000'}
                            onChange={(e) => updateStyle('color', e.target.value)}
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400 focus:outline-none"
                            placeholder="#000000"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Fills & Style Settings */}
                  <div className="space-y-4 border-t border-gray-100 pt-4">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block font-sans">Fills & Borders</span>
                    
                    {/* Background Color */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Fills</label>
                      <div className="flex gap-2 items-center">
                        <div 
                          className="w-7 h-7 rounded border border-gray-300 shadow-sm shrink-0" 
                          style={{ backgroundColor: styleOverrides.backgroundColor || 'transparent' }}
                        />
                        <input 
                          type="text"
                          value={styleOverrides.backgroundColor || ''}
                          onChange={(e) => updateStyle('backgroundColor', e.target.value)}
                          className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400 focus:outline-none"
                          placeholder="transparent"
                        />
                      </div>
                    </div>

                    {/* Borders */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Border Width</label>
                          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-2 focus-within:bg-white focus-within:border-blue-400 transition-colors">
                            <input 
                              type="text"
                              value={styleOverrides.borderWidth?.replace('px', '') || ''}
                              onChange={(e) => updateStyle('borderWidth', e.target.value ? `${e.target.value}px` : '')}
                              className="w-full bg-transparent border-none text-xs text-gray-800 py-1.5 outline-none font-bold font-mono text-right pr-1"
                              placeholder="0"
                            />
                            <span className="text-[9px] text-gray-400 font-bold font-mono">PX</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Border Radius</label>
                          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-2 focus-within:bg-white focus-within:border-blue-400 transition-colors">
                            <input 
                              type="text"
                              value={styleOverrides.borderRadius?.replace('px', '') || ''}
                              onChange={(e) => updateStyle('borderRadius', e.target.value ? `${e.target.value}px` : '')}
                              className="w-full bg-transparent border-none text-xs text-gray-800 py-1.5 outline-none font-bold font-mono text-right pr-1"
                              placeholder="0"
                            />
                            <span className="text-[9px] text-gray-400 font-bold font-mono">PX</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Border Color</label>
                          <div className="flex gap-2 items-center">
                            <div 
                              className="w-7 h-7 rounded border border-gray-300 shadow-sm shrink-0" 
                              style={{ backgroundColor: styleOverrides.borderColor || '#000000' }}
                            />
                            <input 
                              type="text"
                              value={styleOverrides.borderColor || ''}
                              onChange={(e) => updateStyle('borderColor', e.target.value)}
                              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-800 focus:bg-white focus:border-blue-400 focus:outline-none"
                              placeholder="#000000"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-500 uppercase font-sans">Shadow Size</label>
                          <select 
                            value={styleOverrides.shadowSize || 'none'}
                            onChange={(e) => updateStyle('shadowSize', e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white"
                          >
                            <option value="none">None</option>
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                            <option value="xl">Brutalist</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ADVANCED SUB-TAB */}
              {editSubTab === 'advanced' && (
                <div className="space-y-6">
                  {/* Spacing Box Model Diagram */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block font-sans">Spacing (Margin & Padding)</span>
                    <div className="relative w-full aspect-[16/9] border border-dashed border-gray-300 rounded-xl p-5 bg-gray-50 flex items-center justify-center select-none shadow-inner">
                      
                      {/* Margin Border Box Label */}
                      <span className="absolute top-1 left-2.5 text-[8px] text-gray-400 font-black uppercase tracking-widest font-sans">Margin</span>
                      
                      {/* Margin Top */}
                      <input 
                        type="text" 
                        value={parseInt(styleOverrides.marginTop || '0')}
                        onChange={(e) => updateStyle('marginTop', `${parseInt(e.target.value) || 0}px`)}
                        className="absolute top-1 left-1/2 -translate-x-1/2 w-8 text-center text-[10px] font-mono font-bold text-gray-500 bg-white border border-gray-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                        title="Margin Top"
                        placeholder="0"
                      />
                      {/* Margin Bottom */}
                      <input 
                        type="text" 
                        value={parseInt(styleOverrides.marginBottom || '0')}
                        onChange={(e) => updateStyle('marginBottom', `${parseInt(e.target.value) || 0}px`)}
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 text-center text-[10px] font-mono font-bold text-gray-500 bg-white border border-gray-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                        title="Margin Bottom"
                        placeholder="0"
                      />
                      {/* Margin Left */}
                      <input 
                        type="text" 
                        value={parseInt(styleOverrides.marginLeft || '0')}
                        onChange={(e) => updateStyle('marginLeft', `${parseInt(e.target.value) || 0}px`)}
                        className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 text-center text-[10px] font-mono font-bold text-gray-500 bg-white border border-gray-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                        title="Margin Left"
                        placeholder="0"
                      />
                      {/* Margin Right */}
                      <input 
                        type="text" 
                        value={parseInt(styleOverrides.marginRight || '0')}
                        onChange={(e) => updateStyle('marginRight', `${parseInt(e.target.value) || 0}px`)}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 text-center text-[10px] font-mono font-bold text-gray-500 bg-white border border-gray-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                        title="Margin Right"
                        placeholder="0"
                      />

                      {/* Inner Padding Border Box */}
                      <div className="w-[80%] h-[78%] border border-dashed border-blue-300 bg-blue-50/20 rounded-lg relative flex items-center justify-center p-4">
                        <span className="absolute top-1 left-2 text-[8px] text-blue-500/85 font-black uppercase tracking-widest font-sans">Padding</span>
                        
                        {/* Padding Top */}
                        <input 
                          type="text" 
                          value={parseInt(styleOverrides.paddingTop || '0')}
                          onChange={(e) => updateStyle('paddingTop', `${parseInt(e.target.value) || 0}px`)}
                          className="absolute top-1 left-1/2 -translate-x-1/2 w-8 text-center text-[10px] font-mono font-bold text-blue-600 bg-white border border-blue-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                          title="Padding Top"
                          placeholder="0"
                        />
                        {/* Padding Bottom */}
                        <input 
                          type="text" 
                          value={parseInt(styleOverrides.paddingBottom || '0')}
                          onChange={(e) => updateStyle('paddingBottom', `${parseInt(e.target.value) || 0}px`)}
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 text-center text-[10px] font-mono font-bold text-blue-600 bg-white border border-blue-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                          title="Padding Bottom"
                          placeholder="0"
                        />
                        {/* Padding Left */}
                        <input 
                          type="text" 
                          value={parseInt(styleOverrides.paddingLeft || '0')}
                          onChange={(e) => updateStyle('paddingLeft', `${parseInt(e.target.value) || 0}px`)}
                          className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 text-center text-[10px] font-mono font-bold text-blue-600 bg-white border border-blue-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                          title="Padding Left"
                          placeholder="0"
                        />
                        {/* Padding Right */}
                        <input 
                          type="text" 
                          value={parseInt(styleOverrides.paddingRight || '0')}
                          onChange={(e) => updateStyle('paddingRight', `${parseInt(e.target.value) || 0}px`)}
                          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 text-center text-[10px] font-mono font-bold text-blue-600 bg-white border border-blue-200 rounded py-0.5 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-100"
                          title="Padding Right"
                          placeholder="0"
                        />

                        {/* Center Screen Size */}
                        <div className="px-2 py-1 bg-gray-200 border border-gray-300 rounded font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider select-none">
                          {viewport === 'desktop' ? '1200px' : viewport === 'tablet' ? '768px' : '375px'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section-only Settings Overrides */}
                  {!isElementActive ? (
                    <div className="space-y-4 border-t border-gray-100 pt-4">
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block font-sans">Settings Overrides</span>
                      
                      <div className="space-y-1.5">
                        <label className="font-semibold text-[10px] text-gray-500 uppercase tracking-wider font-sans">Button Label Override</label>
                        <input 
                          type="text" 
                          value={selectedSection.styleOverrides?.buttonText || ''}
                          onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'buttonText', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-900 focus:bg-white focus:border-blue-400 focus:outline-none"
                          placeholder="e.g. Learn More"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-[10px] text-gray-500 uppercase tracking-wider font-sans">Button Link Target</label>
                        <input 
                          type="text" 
                          value={selectedSection.styleOverrides?.buttonLink || ''}
                          onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'buttonLink', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-900 focus:bg-white focus:border-blue-400 focus:outline-none"
                          placeholder="/contact or external URL"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-[10px] text-gray-500 uppercase tracking-wider font-sans">Custom Classes</label>
                        <input 
                          type="text" 
                          value={selectedSection.styleOverrides?.customClass || ''}
                          onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'customClass', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 font-mono text-[10px] text-gray-900 focus:bg-white focus:border-blue-400 focus:outline-none"
                          placeholder="e.g. hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    // Element-level custom class override under Advanced
                    <div className="space-y-4 border-t border-gray-100 pt-4">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-[10px] text-gray-500 uppercase tracking-wider block font-sans">Custom Classes</label>
                        <input 
                          type="text" 
                          value={selectedElement.styleOverrides?.customClass || ''}
                          onChange={(e) => updateStyle('customClass', e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 font-mono text-[10px] text-gray-900 focus:bg-white focus:border-blue-400 focus:outline-none"
                          placeholder="e.g. hover:opacity-80"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (isPreviewing) {
    return (
      <PreviewWrapper 
        title={siteName} 
        onExit={() => setIsPreviewing(false)}
        theme={globalTheme}
      >
        <div className="w-full flex-1 flex flex-col pb-32">
          {sections.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-black/40 bg-white">
               <LayoutTemplate className="w-12 h-12 mb-4 opacity-50" />
               <p className="font-black uppercase tracking-widest text-sm">No sections yet</p>
            </div>
          ) : (
            sections.map((section) => {
              const Renderer = Renderers[section.type];
              if (!Renderer) return null;
              const overrides = section.styleOverrides || {};
              const wrapperStyle: React.CSSProperties = {
                paddingTop: overrides.paddingTop || undefined,
                paddingBottom: overrides.paddingBottom || undefined,
                textAlign: overrides.textAlign || undefined,
                borderWidth: overrides.borderWidth || undefined,
                borderColor: overrides.borderColor || undefined,
                borderStyle: overrides.borderWidth ? 'solid' : undefined,
                backgroundColor: overrides.backgroundColor || undefined,
              };
              const shadowClass = {
                none: '',
                sm: 'shadow-sm',
                md: 'shadow-md',
                lg: 'shadow-lg',
                xl: 'shadow-[8px_8px_0px_rgba(0,0,0,1)]'
              }[overrides.shadowSize as string || 'none'] || '';

              return (
                <div 
                  key={section.id}
                  className={shadowClass}
                  style={wrapperStyle}
                  data-custom-bg={overrides.backgroundColor ? 'true' : 'false'}
                  data-custom-align={overrides.textAlign || 'default'}
                >
                   <Renderer 
                     {...section.props} 
                     buttonText={overrides.buttonText || section.props.buttonText} 
                     tenantId={tenantId || siteId}
                   />
                </div>
              );
            })
          )}
        </div>
      </PreviewWrapper>
    );
  }

  return (
    <DndContext 
      sensors={sensors} 
      collisionDetection={closestCenter} 
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div key={siteName} className="h-screen w-screen overflow-hidden flex flex-col bg-[#F0F2F5] font-sans selection:bg-black selection:text-white">
        
        {/* Dynamic style tag for editor canvas overrides */}
        {/* Google Font import for selected font */}
        <style dangerouslySetInnerHTML={{ __html: 
          `@import url('https://fonts.googleapis.com/css2?family=${encodeURIComponent(globalTheme.fontFamily || 'Space Grotesk').replace(/%20/g,'+')}:wght@400;500;600;700;800&display=swap');` 
        }} />
        <style dangerouslySetInnerHTML={{ __html: `
          #preview-canvas button, #preview-canvas .btn {
            border-radius: ${
              globalTheme.buttonRoundedness === 'sharp' ? '0px !important' :
              globalTheme.buttonRoundedness === 'rounded-xl' ? '12px !important' :
              globalTheme.buttonRoundedness === 'rounded-full' ? '9999px !important' :
              '12px !important'
            };
          }
          #preview-canvas {
            font-family: '${globalTheme.fontFamily || 'Space Grotesk'}', sans-serif !important;
          }
          #preview-canvas [data-custom-bg="true"] > section, 
          #preview-canvas [data-custom-bg="true"] > div {
            background-color: transparent !important;
          }
          #preview-canvas [data-custom-align="left"] * {
            text-align: left !important;
          }
          #preview-canvas [data-custom-align="center"] * {
            text-align: center !important;
            justify-content: center !important;
            align-items: center !important;
          }
          #preview-canvas [data-custom-align="right"] * {
            text-align: right !important;
            justify-content: flex-end !important;
            align-items: flex-end !important;
          }
          [contenteditable]:empty:before {
            content: attr(data-placeholder);
            opacity: 0.35;
            font-style: italic;
            display: inline-block;
          }
          .canvas-selected-element {
            outline: 3px solid #3b82f6 !important;
            outline-offset: 4px !important;
            box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2) !important;
            border-radius: 4px !important;
          }
          [contenteditable="true"] {
            outline: 2px dashed #3b82f6 !important;
            outline-offset: 4px !important;
            cursor: text !important;
            border-radius: 4px !important;
          }
          [contenteditable="true"]:focus {
            outline: 3px solid #3b82f6 !important;
            background-color: rgba(59, 130, 246, 0.05) !important;
            box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.15) !important;
          }
        `}} />

        {/* Top Bar Header styled exactly like mockup */}
        <header className="px-6 py-3.5 bg-white text-black border-b border-gray-200 flex items-center justify-between z-50 shrink-0 select-none shadow-sm">
          <div className="flex items-center gap-4">
            {planTier !== 'DIY' && (
              <button 
                onClick={onBack}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
                title="Go Back"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            
            {/* Custom styled Page dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 font-semibold text-xs text-gray-700 bg-white transition-all shadow-sm"
              >
                <span>Page: <span className="text-gray-900">{activePage?.name || 'Homepage'}</span></span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>
              
              {isPageDropdownOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-1.5 select-none animate-in fade-in slide-in-from-top-1 duration-100">
                  {pages.map(page => (
                    <button
                      key={page.id}
                      onClick={() => {
                        setActivePageId(page.id);
                        setIsPageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-gray-50 flex flex-col gap-0.5 ${activePageId === page.id ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700'}`}
                    >
                      <span>{page.name}</span>
                      <span className="text-[9px] text-gray-400 font-medium font-mono">{page.slug}</span>
                    </button>
                  ))}
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => {
                      const newPageId = `page-${Date.now()}`;
                      setPages([...pages, { id: newPageId, name: 'New Page', slug: '/new-page', sections: [] }]);
                      setActivePageId(newPageId);
                      setIsPageDropdownOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50/40 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Create New Page
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Viewport Width, Zoom, Breakpoint Selectors & Undo/Redo */}
          <div className="flex items-center gap-6">
            
            {/* Width indicator */}
            <div className="text-xs font-semibold text-gray-400 select-none">
              Width: <span className="text-gray-700 font-mono font-bold">{viewport === 'desktop' ? '1440px' : viewport === 'tablet' ? '768px' : '375px'}</span>
            </div>

            {/* Zoom Selector group */}
            <div className="flex items-center gap-2 px-2.5 py-1 bg-gray-50 rounded-full border border-gray-200/80 text-xs font-semibold text-gray-700 select-none">
              <button 
                onClick={() => setScale(prev => Math.max(0.3, prev - 0.1))} 
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 font-bold text-gray-500 active:scale-90 transition-transform"
                title="Zoom Out"
              >
                -
              </button>
              <button 
                onClick={() => setScale(1)} 
                className="hover:underline font-mono font-bold w-12 text-center"
                title="Reset Zoom to 100%"
              >
                {Math.round(scale * 100)}%
              </button>
              <button 
                onClick={() => setScale(prev => Math.min(1.5, prev + 0.1))} 
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 font-bold text-gray-500 active:scale-90 transition-transform"
                title="Zoom In"
              >
                +
              </button>
            </div>

            {/* Viewport tags from mockup (xxl, xl, lg, md, sm) */}
            <div className="flex bg-gray-100 rounded-lg p-0.5 border border-gray-200/50">
              {[
                { label: 'xxl', viewport: 'desktop' },
                { label: 'xl', viewport: 'desktop' },
                { label: 'lg', viewport: 'tablet' },
                { label: 'md', viewport: 'tablet' },
                { label: 'sm', viewport: 'mobile' }
              ].map((bp, idx) => {
                const isActive = (bp.viewport === 'desktop' && viewport === 'desktop' && bp.label === 'xl') ||
                                 (bp.viewport === 'tablet' && viewport === 'tablet' && bp.label === 'md') ||
                                 (bp.viewport === 'mobile' && viewport === 'mobile' && bp.label === 'sm');
                return (
                  <button
                    key={idx}
                    onClick={() => setViewport(bp.viewport as any)}
                    className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${isActive ? 'bg-white text-blue-600 shadow-sm border border-gray-200/30' : 'text-gray-400 hover:text-gray-700'}`}
                  >
                    {bp.label}
                  </button>
                );
              })}
            </div>

            {/* Undo / Redo — now real */}
            <div className="flex items-center gap-1 border-l border-gray-200 pl-4">
              <button 
                onClick={undoPages}
                disabled={!canUndo}
                className={`p-1.5 rounded-lg transition-colors ${canUndo ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}
                title="Undo (Ctrl+Z)"
              >
                <Undo className="w-4 h-4" />
              </button>
              <button 
                onClick={redoPages}
                disabled={!canRedo}
                className={`p-1.5 rounded-lg transition-colors ${canRedo ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}
                title="Redo (Ctrl+Shift+Z)"
              >
                <Redo className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Action triggers: Synced, Preview, Publish */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${isSaving || isPublishing ? 'text-amber-600 bg-amber-50 border-amber-200/60' : 'text-green-600 bg-green-50 border-green-200/50'}`}
              title={isSaving ? 'Saving...' : isPublishing ? 'Publishing...' : 'All changes saved'}
            >
              {isSaving || isPublishing ? (
                <div className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Cloud className="w-3.5 h-3.5" />
              )}
              <span className="hidden lg:block">{isSaving ? 'Saving' : isPublishing ? 'Publishing' : 'Saved'}</span>
            </div>

            {planTier === 'DIY' && (
              <button 
                className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                onClick={onBack}
              >
                Go to Dashboard
              </button>
            )}

            <button 
              className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
              onClick={() => setIsPreviewing(true)}
            >
              <Eye className="w-3.5 h-3.5" /> Preview
            </button>
            
            {onSave && (
              <button
                disabled={isSaving}
                className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={async () => {
                  setIsSaving(true);
                  try {
                    await onSave(pages, globalTheme);
                    addToast('Changes saved successfully');
                  } catch {
                    addToast('Failed to save', 'error');
                  } finally {
                    setIsSaving(false);
                  }
                }}
              >
                {isSaving ? (
                  <><div className="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" /> Saving...</>
                ) : (
                  <><Save className="w-3.5 h-3.5 text-gray-500" /> {planTier === 'DIY' ? 'Save Draft' : 'Save'}</>
                )}
              </button>
            )}

            {onPublish && (
              <button
                disabled={isPublishing}
                className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={async () => {
                  setIsPublishing(true);
                  try {
                    await onPublish(pages, globalTheme);
                    addToast('Site published successfully! 🚀');
                  } catch {
                    addToast('Failed to publish', 'error');
                  } finally {
                    setIsPublishing(false);
                  }
                }}
              >
                {isPublishing ? (
                  <><div className="w-3.5 h-3.5 border-2 border-white/60 border-t-white rounded-full animate-spin" /> Publishing...</>
                ) : (
                  <><Globe className="w-3.5 h-3.5" /> Publish Site</>
                )}
              </button>
            )}
          </div>
        </header>

        {/* Editor Body with static panels for no-overlap centering */}
        <div className="flex-1 flex overflow-hidden bg-[#F0F2F5] relative">
          
          {/* Far Left Vertical Toolbar strip from mockup */}
          <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-6 shrink-0 select-none z-40 shadow-sm">
            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'add' ? null : 'add'); setMediaSelectorTarget(null); }}
              className={`p-2.5 rounded-xl transition-all ${activeLeftTool === 'add' ? 'bg-[#E5E7FD] text-[#5A60F6] shadow-sm' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'}`}
              title="Add Block Layouts"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'cms' ? null : 'cms'); setMediaSelectorTarget(null); }}
              className={`p-2.5 rounded-xl transition-all ${activeLeftTool === 'cms' ? 'bg-[#E5E7FD] text-[#5A60F6] shadow-sm' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'}`}
              title="Pages & Routes"
            >
              <Layers className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'theme' ? null : 'theme'); setMediaSelectorTarget(null); }}
              className={`p-2.5 rounded-xl transition-all ${activeLeftTool === 'theme' ? 'bg-[#E5E7FD] text-[#5A60F6] shadow-sm' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'}`}
              title="Global Styles"
            >
              <Edit3 className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'media' ? null : 'media'); }}
              className={`p-2.5 rounded-xl transition-all ${activeLeftTool === 'media' ? 'bg-[#E5E7FD] text-[#5A60F6] shadow-sm' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'}`}
              title="Media Library"
            >
              <ImageIcon className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'ecommerce' ? null : 'ecommerce'); setMediaSelectorTarget(null); }}
              className={`p-2.5 rounded-xl transition-all ${activeLeftTool === 'ecommerce' ? 'bg-[#E5E7FD] text-[#5A60F6] shadow-sm' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'}`}
              title="E-Commerce & Shop"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            
            <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-5 items-center">
              <button 
                onClick={() => setShowShortcutsModal(true)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                title="Keyboard Shortcuts"
              >
                <Keyboard className="w-5 h-5" />
              </button>
              <button 
                onClick={() => { setActiveLeftTool('theme'); setMediaSelectorTarget(null); }}
                className="p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-all"
                title="Workspace Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <img src={user?.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'} alt="User" referrerPolicy="no-referrer" />
              </button>
            </div>
          </div>

          {/* Left Drawer static panel next to it */}
          <AnimatePresence>
            {activeLeftTool && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 320, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="bg-white border-r border-gray-200 flex flex-col z-30 shrink-0 overflow-hidden"
              >
                <div className="p-4 border-b border-gray-100 bg-white flex items-center justify-between shrink-0 select-none">
                  <span className="font-bold text-xs uppercase tracking-wider text-gray-400">
                    {activeLeftTool === 'add' ? 'Blocks & Presets' : 
                     activeLeftTool === 'media' ? 'Media Library' : 
                     activeLeftTool === 'cms' ? 'Site Pages' : 
                     activeLeftTool === 'ecommerce' ? 'E-Commerce Tools' : 'Global Style settings'}
                  </span>
                  <button 
                    onClick={() => { setActiveLeftTool(null); setMediaSelectorTarget(null); }}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar min-w-[320px]">
                  {activeLeftTool === 'add' ? renderAddPanel() : 
                   activeLeftTool === 'media' ? renderMediaPanel() : 
                   activeLeftTool === 'cms' ? renderPagesPanel() : 
                   activeLeftTool === 'ecommerce' ? renderEcommercePanel() : renderThemePanel()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Canvas Area: Center aligned in remaining space, no overlay */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 flex items-start justify-center select-none bg-[#F0F2F5] relative custom-scrollbar" ref={canvasContainerRef}>
            <div 
               ref={wrapperRef}
               className="relative shrink-0 transition-all duration-300 flex justify-center"
               style={{ 
                 width: (viewport === 'desktop' ? 1200 : viewport === 'tablet' ? 768 : 375) * scale,
               }}
            >
              <div 
                ref={innerRef}
                id="preview-canvas"
                className="@container bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col transition-all duration-300 ease-in-out origin-top-left shrink-0 absolute top-0 left-0 overflow-hidden ring-1 ring-gray-900/5"
                style={{
                  width: viewport === 'desktop' ? '1200px' : viewport === 'tablet' ? '768px' : '375px',
                  maxWidth: 'none',
                  minHeight: '800px',
                  transform: `scale(${scale})`,
                  backgroundColor: globalTheme.pageBackground,
                  ['--color-primary' as any]: globalTheme.colorPrimary || '#3b82f6',
                  ['--color-secondary' as any]: globalTheme.colorSecondary || '#10b981',
                  ['--color-accent' as any]: globalTheme.colorAccent || '#f59e0b',
                  ['--color-text' as any]: globalTheme.colorText || '#1a1a1a',
                  ['--color-card' as any]: globalTheme.colorCard || '#ffffff',
                }}
              >
                {/* Drop Zone Sections */}
                <div className="w-full flex-1 flex flex-col pb-16">
                  {sections.length === 0 ? (
                    <EmptyCanvasDropZone />
                  ) : (
                    <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
                      {sections.map((section, sectionIndex) => (
                        <React.Fragment key={section.id}>
                          {/* Between-section insert button */}
                          <div 
                            className="group/insert relative flex items-center justify-center h-0 overflow-visible z-20"
                            onMouseEnter={() => {}}
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setBetweenInsertIndex(sectionIndex);
                                setBetweenInsertSearch('');
                              }}
                              className="opacity-0 group-hover/insert:opacity-100 focus:opacity-100 absolute -translate-y-1/2 flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg transition-all duration-200 border-2 border-white z-30"
                              style={{ top: '50%' }}
                              title="Insert section here"
                            >
                              <Plus className="w-3 h-3" /> Add
                            </button>
                          </div>

                          <SortableSection 
                            section={section} 
                            scale={scale}
                            isSelected={selectedSectionId === section.id}
                            onClick={() => {
                              setSelectedSectionId(section.id);
                              setRightSidebarOpen(true);
                            }}
                            onRemove={() => removeSection(section.id)}
                            isEditable={!isPreviewing}
                            onPropChange={(path: string, value: any) => handleUpdatePropByPath(section.id, path, value)}
                            selectedElementId={selectedElementId}
                            onSelectElement={handleSelectElement}
                            onAddElement={(colIdx: number) => handleAddElement(section.id, colIdx)}
                            onDeleteElement={(colIdx: number, elIdx: number) => handleDeleteElement(section.id, colIdx, elIdx)}
                            onMoveElement={(colIdx: number, elIdx: number, dir: 'up' | 'down') => handleMoveElement(section.id, colIdx, elIdx, dir)}
                            onSelectImageField={(secId: string, path: string) => handleSelectImageFieldByPath(secId, path)}
                            onDuplicate={() => handleDuplicateSection(section.id)}
                            onMoveUp={() => handleMoveSectionUp(section.id)}
                            onMoveDown={() => handleMoveSectionDown(section.id)}
                            isNewlyAdded={newlyAddedIds.has(section.id)}
                            onSelectInspectorTab={(tab: 'content' | 'style' | 'advanced', fieldPath?: string) => {
                              setSelectedSectionId(section.id);
                              setRightSidebarOpen(true);
                              setEditSubTab(tab);
                              if (fieldPath) {
                                setTimeout(() => {
                                  const inputElement = document.getElementById(`inspector-input-${fieldPath.replace(/\./g, '-')}`);
                                  if (inputElement) {
                                    inputElement.focus();
                                    inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    inputElement.classList.add('ring-2', 'ring-blue-500', 'border-blue-500');
                                    setTimeout(() => {
                                      inputElement.classList.remove('ring-2', 'ring-blue-500', 'border-blue-500');
                                    }, 1500);
                                  }
                                }, 100);
                              }
                            }}
                            tenantId={tenantId || siteId}
                          />
                        </React.Fragment>
                      ))}
                      {/* After-last section insert button */}
                      <div className="group/insert relative flex items-center justify-center h-8">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setBetweenInsertIndex(sections.length);
                            setBetweenInsertSearch('');
                          }}
                          className="opacity-0 group-hover/insert:opacity-100 flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg transition-all duration-200 border-2 border-white"
                          title="Add section at bottom"
                        >
                          <Plus className="w-3 h-3" /> Add Section
                        </button>
                      </div>
                    </SortableContext>
                  )}
                </div>
              </div>
            </div>
          </div>


          {/* Right Inspector Sidebar next to canvas, static flex child */}
          <AnimatePresence>
            {rightSidebarOpen && (
              <motion.aside 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 320, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="bg-white border-l border-gray-200 flex flex-col shrink-0 overflow-hidden z-30"
              >
                {renderInspector()}
              </motion.aside>
            )}
          </AnimatePresence>

        </div>

        {/* Drag Overlay Portal */}
        <DragOverlay>
          {activeDraggedBlock ? (
            <div className="p-4 bg-white border-4 border-black rounded-xl shadow-2xl opacity-80 cursor-grabbing max-w-[280px]">
              <div className="font-black uppercase tracking-tight text-xs">{activeDraggedBlock}</div>
              <div className="text-[9px] font-bold text-black/50 uppercase tracking-widest mt-1">Dragging section to canvas...</div>
            </div>
          ) : null}
        </DragOverlay>

        {/* ====== PROFESSIONAL ADD-ELEMENT PANEL MODAL ====== */}
        <AnimatePresence>
          {addElementPanel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center backdrop-blur-sm"
              onClick={() => setAddElementPanel(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.35 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[460px] max-w-[95vw] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-gray-900 text-base">Add Element</h3>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">Choose an element type to add to your column</p>
                  </div>
                  <button
                    onClick={() => setAddElementPanel(null)}
                    className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5 grid grid-cols-3 gap-3">
                  {ELEMENT_TYPE_CONFIGS.map(el => (
                    <button
                      key={el.type}
                      onClick={() => handleAddElementOfType(el.type)}
                      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border-2 border-gray-100 hover:border-blue-400 hover:bg-blue-50/40 transition-all duration-150 active:scale-95"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${el.color} group-hover:scale-110 transition-transform`}>
                        {(() => {
                          const IconComp = (LucideIcons as any)[el.icon] || LucideIcons.HelpCircle;
                          return <IconComp className="w-5 h-5" />;
                        })()}
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-xs text-gray-800 group-hover:text-blue-700">{el.label}</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">{el.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="px-5 pb-4">
                  <p className="text-[10px] text-gray-400 text-center">Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[9px] font-mono">Esc</kbd> to cancel</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ====== BETWEEN-SECTION BLOCK PICKER ====== */}
        <AnimatePresence>
          {betweenInsertIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center backdrop-blur-sm"
              onClick={() => setBetweenInsertIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.35 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[540px] max-w-[95vw] max-h-[75vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                  <div>
                    <h3 className="font-black text-gray-900 text-base">Insert Section</h3>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                      Inserting at position {(betweenInsertIndex ?? 0) + 1} of {sections.length + 1}
                    </p>
                  </div>
                  <button
                    onClick={() => setBetweenInsertIndex(null)}
                    className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search blocks..."
                      autoFocus
                      value={betweenInsertSearch}
                      onChange={e => setBetweenInsertSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-blue-400 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(COMPONENT_SCHEMAS)
                      .filter(([type, schema]) => 
                        !betweenInsertSearch || 
                        type.toLowerCase().includes(betweenInsertSearch.toLowerCase()) ||
                        (schema.description?.toLowerCase() || '').includes(betweenInsertSearch.toLowerCase())
                      )
                      .map(([type, schema]) => (
                        <button
                          key={type}
                          onClick={() => {
                            addSection(type as ComponentType, betweenInsertIndex ?? undefined);
                            setBetweenInsertIndex(null);
                          }}
                          className="group text-left p-3 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all flex items-start gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                            <LayoutTemplate className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-xs text-gray-800 group-hover:text-blue-700 truncate">{type}</div>
                            <div className="text-[9px] text-gray-400 mt-0.5 leading-tight line-clamp-2">{schema.description}</div>
                          </div>
                        </button>
                      ))
                    }
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ====== KEYBOARD SHORTCUTS MODAL ====== */}
        <AnimatePresence>
          {showShortcutsModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center backdrop-blur-sm"
              onClick={() => setShowShortcutsModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.35 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[420px] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-black text-gray-900 text-base flex items-center gap-2">
                    <Keyboard className="w-4 h-4 text-blue-600" /> Keyboard Shortcuts
                  </h3>
                  <button onClick={() => setShowShortcutsModal(false)} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5 space-y-1">
                  {[
                    { keys: ['Ctrl', 'Z'], desc: 'Undo' },
                    { keys: ['Ctrl', 'Shift', 'Z'], desc: 'Redo' },
                    { keys: ['Ctrl', 'S'], desc: 'Save' },
                    { keys: ['Ctrl', 'D'], desc: 'Duplicate selected section' },
                    { keys: ['Del'], desc: 'Delete selected section' },
                    { keys: ['Esc'], desc: 'Deselect / Close panels' },
                    { keys: ['↑'], desc: 'Move section up' },
                    { keys: ['↓'], desc: 'Move section down' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-700">{s.desc}</span>
                      <div className="flex items-center gap-1">
                        {s.keys.map((k, j) => (
                          <React.Fragment key={k}>
                            {j > 0 && <span className="text-gray-300 text-xs">+</span>}
                            <kbd className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs font-mono font-bold text-gray-700 shadow-sm">{k}</kbd>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ====== TOAST NOTIFICATIONS ====== */}
        <ToastContainer toasts={toasts} />

        {/* ====== TEMPLATE CONFIRMATION MODAL ====== */}
        <AnimatePresence>
          {pendingTemplateKey && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center backdrop-blur-sm"
              onClick={() => setPendingTemplateKey(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 16 }}
                transition={{ type: 'spring', duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[400px] max-w-[95vw] overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <LayoutTemplate className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-1">Load Template?</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    Loading <span className="font-bold text-gray-800">"{pendingTemplateKey.replace(/_/g, ' ')}"</span> will replace your current page layout. This cannot be undone.
                  </p>
                </div>
                <div className="flex items-center gap-3 px-6 pb-6">
                  <button
                    onClick={() => setPendingTemplateKey(null)}
                    className="flex-1 py-2.5 border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmApplyTemplate}
                    className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    Apply Template
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
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
          .canvas-selected-element::after {
            content: 'Editing Inline';
            position: absolute;
            top: -24px;
            left: 0;
            background-color: #3b82f6;
            color: white;
            font-size: 8px;
            font-family: sans-serif;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 2px 6px;
            border-radius: 4px;
            pointer-events: none;
            z-index: 50;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            white-space: nowrap;
            line-height: normal;
          }
          .canvas-selected-image {
            outline: 2px solid #10b981 !important;
            outline-offset: 2px;
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2) !important;
            position: relative !important;
          }
          .canvas-selected-image::after {
            content: 'Image Selected';
            position: absolute;
            top: 8px;
            left: 8px;
            background-color: #10b981;
            color: white;
            font-size: 8px;
            font-family: sans-serif;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 4px 8px;
            border-radius: 4px;
            pointer-events: none;
            z-index: 50;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            line-height: normal;
          }
        `}</style>
      </div>
    </DndContext>
  );
}
