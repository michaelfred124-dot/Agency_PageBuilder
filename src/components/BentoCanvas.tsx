import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Plus, ShoppingBag } from 'lucide-react';
import { useBentoContext } from '../lib/bentoStore';
import { WidgetRenderer } from './BentoWidgetRenderer';
import { WidgetData } from '../types/bento';

import { BioSection } from './BentoBioSection';

// Traditional flowing layout: sections stack full-width top-to-bottom (like
// Wix / Elementor / Divi). Row height converts legacy gridRowSpan values into
// real section heights so existing site data renders unchanged.
export const SECTION_ROW_PX = 90;

export const sortByFlowOrder = (widgets: WidgetData[]) =>
  [...widgets].sort((a, b) => {
    const ay = a.gridY || 1;
    const by = b.gridY || 1;
    if (ay !== by) return ay - by;
    return (a.gridX || 1) - (b.gridX || 1);
  });

export const sectionHeightFor = (widget: WidgetData): string => {
  if (widget.type === 'edi-section') return 'auto';
  if (widget.type === 'spacer') return `${(widget.gridRowSpan || 1) * 40}px`;
  const rowSpan = widget.gridRowSpan ?? (widget.size === 'tall' || widget.size === 'large' ? 3 : 2);
  return `${Math.max(1, rowSpan) * SECTION_ROW_PX}px`;
};

export const Canvas: React.FC = () => {
  const { widgets, setWidgets, addWidget, setSelectedWidgetId, setIsEditing, theme, setActiveDraggingId, showBio } = useBentoContext();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 80,
        tolerance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const sorted = sortByFlowOrder(widgets);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setSelectedWidgetId(event.active.id as string);
    setIsEditing(false);
    if (setActiveDraggingId) {
      setActiveDraggingId(event.active.id as string);
    }
  };

  // Vertical reorder: find where the dragged section's center landed among the
  // other sections and re-insert it there, then re-number gridY sequentially.
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    setActiveId(null);
    if (setActiveDraggingId) {
      setActiveDraggingId(null);
    }

    if (!active || (delta.x === 0 && delta.y === 0)) return;

    const translated = active.rect.current.translated;
    if (!translated) return;
    const droppedCenterY = translated.top + translated.height / 2;

    const others = sorted.filter((w) => w.id !== active.id);
    let insertIndex = others.length;
    for (let i = 0; i < others.length; i++) {
      const el = document.querySelector(`[data-section-id="${others[i].id}"]`);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (droppedCenterY < rect.top + rect.height / 2) {
        insertIndex = i;
        break;
      }
    }

    const dragged = sorted.find((w) => w.id === active.id);
    if (!dragged) return;

    const reordered = [...others];
    reordered.splice(insertIndex, 0, dragged);

    // Re-number: every section becomes full-width with a sequential row.
    setWidgets(
      reordered.map((w, index) => ({
        ...w,
        gridX: 1,
        gridY: index + 1,
      }))
    );
  };

  const activeWidget = widgets.find(w => w.id === activeId);

  const openAddDrawer = () => {
    window.dispatchEvent(new CustomEvent('bento:open-add-menu'));
  };

  return (
    <div
      className="flex-1 overflow-y-visible md:overflow-y-auto px-3 md:px-8 py-4 md:py-8 flex justify-center bg-transparent h-auto md:h-full scrollbar-hide"
      onClick={() => {
        setSelectedWidgetId(null);
        setIsEditing(false);
      }}
    >
      <div className="w-full max-w-[1200px]">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* The "page sheet" — a real website page that sections stack inside */}
          <div
            data-canvas-root
            className={`relative z-10 w-full flex flex-col overflow-hidden rounded-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] ring-1 ${theme === 'dark' ? 'bg-zinc-950 ring-white/10' : 'bg-white ring-black/5'}`}
          >
            {/* Profile / Bio Section */}
            {showBio && (
              <div className="w-full overflow-hidden pointer-events-auto">
                <BioSection />
              </div>
            )}

            {/* Empty state */}
            {!showBio && widgets.length === 0 && (
              <div className="w-full p-12 py-24 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-3xl flex items-center justify-center mb-6 border border-indigo-100 dark:border-indigo-900/50 shadow-md">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display tracking-tight mb-3">
                  Your Page Is Ready
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-md leading-relaxed mb-8 font-medium">
                  Start from a beautiful pre-built site or stack sections one at a time. Open the <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">"Add Block"</span> drawer at the bottom of the screen and pick a <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">Starter Site</span> — you can customize every section after.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); addWidget('menu'); }}
                    className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer active:scale-95 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Navigation Menu
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); addWidget('header'); }}
                    className="px-6 py-3.5 bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-lg cursor-pointer active:scale-95 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Add Hero Section
                  </button>
                </div>
              </div>
            )}

            {/* Flowing sections — full width, stacked, touching edge-to-edge */}
            {sorted.map((widget) => (
              <div
                key={widget.id}
                data-section-id={widget.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedWidgetId(widget.id);
                  setIsEditing(false);
                }}
                className="w-full relative shrink-0"
                style={{ height: sectionHeightFor(widget) }}
              >
                <WidgetRenderer widget={widget} />
              </div>
            ))}

            {/* Add Section bar (bottom of page) */}
            {widgets.length > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); openAddDrawer(); }}
                className="w-full py-6 border-t-2 border-dashed border-black/10 dark:border-white/10 flex items-center justify-center gap-2 group/add cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all"
              >
                <Plus className="w-4 h-4 text-black/30 dark:text-white/30 group-hover/add:text-indigo-500" />
                <span className="text-[10px] font-bold text-black/40 dark:text-white/40 group-hover/add:text-indigo-500 uppercase tracking-widest">Add Section</span>
              </button>
            )}
          </div>

          <DragOverlay
            dropAnimation={{
              sideEffects: defaultDropAnimationSideEffects({
                styles: {
                  active: {
                    opacity: '0.4',
                  },
                },
              }),
            }}
          >
            {activeWidget ? (
              <div style={{ height: sectionHeightFor(activeWidget) === 'auto' ? undefined : sectionHeightFor(activeWidget), maxHeight: 320, overflow: 'hidden', borderRadius: 12, boxShadow: '0 25px 60px -12px rgba(0,0,0,0.4)' }}>
                <WidgetRenderer widget={activeWidget} isOverlay />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        {/* Footer info */}
        <div className="mt-10 pb-10 flex justify-center items-center text-black/20 dark:text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span>Drag sections to reorder · Click a section to select · Double-click to edit</span>
        </div>
      </div>
    </div>
  );
};
