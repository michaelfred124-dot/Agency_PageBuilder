"use client";
import React from 'react';
import { useBentoContext } from '../lib/bentoStore';
import { WidgetData } from '../types/bento';
import { getSectionDef } from '../lib/bentoSections';
import {
  Layers,
  Type,
  Image as ImageIcon,
  Map as MapIcon,
  MessageSquare,
  Quote,
  Mail,
  LayoutGrid,
  ShoppingBag,
  HelpCircle,
  Camera,
  CreditCard,
  Star,
  PanelBottom,
  Video,
  BarChart,
  Timer,
  Minus,
  Share2,
  Newspaper,
  Menu as MenuIcon,
  Copy,
  Trash2,
  ChevronUp,
  ChevronDown,
  Sparkles,
  MousePointerClick
} from 'lucide-react';

const TYPE_ICONS: Record<string, React.ReactNode> = {
  header: <LayoutGrid className="w-3.5 h-3.5" />,
  menu: <MenuIcon className="w-3.5 h-3.5" />,
  text: <Type className="w-3.5 h-3.5" />,
  image: <ImageIcon className="w-3.5 h-3.5" />,
  gallery: <Camera className="w-3.5 h-3.5" />,
  video: <Video className="w-3.5 h-3.5" />,
  map: <MapIcon className="w-3.5 h-3.5" />,
  social: <Share2 className="w-3.5 h-3.5" />,
  testimonial: <Quote className="w-3.5 h-3.5" />,
  reviews: <Star className="w-3.5 h-3.5" />,
  newsletter: <Mail className="w-3.5 h-3.5" />,
  faq: <HelpCircle className="w-3.5 h-3.5" />,
  product: <ShoppingBag className="w-3.5 h-3.5" />,
  pricing: <CreditCard className="w-3.5 h-3.5" />,
  blog: <Newspaper className="w-3.5 h-3.5" />,
  stat: <BarChart className="w-3.5 h-3.5" />,
  countdown: <Timer className="w-3.5 h-3.5" />,
  footer: <PanelBottom className="w-3.5 h-3.5" />,
  spacer: <Minus className="w-3.5 h-3.5" />,
  button: <MousePointerClick className="w-3.5 h-3.5" />,
  'edi-section': <Sparkles className="w-3.5 h-3.5" />,
  embed: <MessageSquare className="w-3.5 h-3.5" />,
};

function widgetLabel(widget: WidgetData): string {
  if (widget.type === 'edi-section') {
    const def = getSectionDef(widget.sectionKey);
    if (def) return def.label;
  }
  if (widget.title && widget.title.trim()) {
    return widget.title.length > 26 ? `${widget.title.slice(0, 26)}…` : widget.title;
  }
  return widget.type.charAt(0).toUpperCase() + widget.type.slice(1);
}

export const BentoLayersPanel: React.FC<{ pageName?: string }> = ({ pageName }) => {
  const {
    widgets,
    selectedWidgetId,
    setSelectedWidgetId,
    setIsEditing,
    updateWidget,
    duplicateWidget,
    removeWidget,
  } = useBentoContext();

  // Sort by visual order: top-to-bottom, then left-to-right
  const sorted = [...widgets].sort((a, b) => {
    const ay = a.gridY || 1;
    const by = b.gridY || 1;
    if (ay !== by) return ay - by;
    return (a.gridX || 1) - (b.gridX || 1);
  });

  const handleSelect = (id: string) => {
    setSelectedWidgetId(id);
    // Scroll the block into view on the canvas
    requestAnimationFrame(() => {
      const el = document.querySelector(`[data-widget-id="${id}"]`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const swapPositions = (index: number, direction: -1 | 1) => {
    const target = sorted[index];
    const neighbor = sorted[index + direction];
    if (!target || !neighbor) return;
    const targetPos = { gridX: target.gridX || 1, gridY: target.gridY || 1 };
    const neighborPos = { gridX: neighbor.gridX || 1, gridY: neighbor.gridY || 1 };
    updateWidget(neighbor.id, targetPos);
    updateWidget(target.id, neighborPos);
  };

  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-black/5 bg-white/60 backdrop-blur-xl z-20 overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-black/5 flex items-center gap-2 shrink-0">
        <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
          <Layers className="w-3.5 h-3.5" />
        </div>
        <div className="min-w-0">
          <span className="block text-[11px] font-bold text-slate-800 tracking-tight truncate">Layers</span>
          <span className="block text-[9px] font-bold uppercase tracking-widest text-slate-400 truncate">{pageName || 'Home'} · {widgets.length} block{widgets.length === 1 ? '' : 's'}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-0.5">
        {sorted.length === 0 && (
          <p className="text-[10px] text-slate-400 font-semibold text-center px-3 py-8 leading-relaxed">
            No blocks yet. Use “Add Widget Block” below the canvas to get started.
          </p>
        )}

        {sorted.map((widget, index) => {
          const isSelected = widget.id === selectedWidgetId;
          return (
            <div
              key={widget.id}
              onClick={() => handleSelect(widget.id)}
              onDoubleClick={() => { handleSelect(widget.id); setIsEditing(true); }}
              className={`group flex items-center gap-2 px-2 py-1.5 rounded-xl cursor-pointer transition-all border ${
                isSelected
                  ? 'bg-indigo-50 border-indigo-200'
                  : 'border-transparent hover:bg-black/[0.03] hover:border-black/5'
              }`}
            >
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-black/5 text-slate-500'}`}>
                {TYPE_ICONS[widget.type] || <Type className="w-3.5 h-3.5" />}
              </div>
              <span className={`flex-1 min-w-0 truncate text-[11px] font-semibold ${isSelected ? 'text-indigo-700' : 'text-slate-700'}`}>
                {widgetLabel(widget)}
              </span>

              {/* Hover actions */}
              <div className={`flex items-center gap-0.5 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <button
                  onClick={(e) => { e.stopPropagation(); swapPositions(index, -1); }}
                  disabled={index === 0}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-black/5 disabled:opacity-20 disabled:cursor-not-allowed"
                  title="Move up"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); swapPositions(index, 1); }}
                  disabled={index === sorted.length - 1}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-black/5 disabled:opacity-20 disabled:cursor-not-allowed"
                  title="Move down"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); duplicateWidget(widget.id); }}
                  className="p-1 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-50"
                  title="Duplicate"
                >
                  <Copy className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); removeWidget(widget.id); }}
                  className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50"
                  title="Delete (undo with Ctrl+Z)"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 py-3 border-t border-black/5 shrink-0">
        <p className="text-[9px] text-slate-400 font-semibold leading-relaxed">
          Click to select · double-click to edit · arrows reorder
        </p>
      </div>
    </aside>
  );
};
