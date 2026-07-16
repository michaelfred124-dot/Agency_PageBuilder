import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { MapPin, ArrowUpRight, Mail, Quote, User, Calendar, Maximize2, Pencil, Copy, Trash2, Play, SkipBack, SkipForward, MoreHorizontal, PlusCircle, GripVertical, Share, CheckCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WidgetData, WidgetSize } from '../types/bento';
import { useBentoContext } from '../lib/bentoStore';
import { getGridConfig, snapDimensions, snapDimensionsProximity } from '../utils/bentoGrid';
import { Renderers } from '../lib/blocks';
import { getSectionDef, resolveSectionProps } from '../lib/bentoSections';

interface WidgetRendererProps {
  widget: WidgetData;
  isOverlay?: boolean;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget, isOverlay }) => {
  const { widgets, setWidgets, selectedWidgetId, setSelectedWidgetId, updateWidget, duplicateWidget, removeWidget, isEditing, setIsEditing, isResizing: isResizingGlobal, setIsResizing: setIsResizingGlobal, activeDraggingId, theme, addToCart, cartItems, setIsCartOpen } = useBentoContext();
  const isSelected = selectedWidgetId === widget.id;

  const [isMobile, setIsMobile] = React.useState(false);
  const [expandedFaqIndex, setExpandedFaqIndex] = React.useState<number | null>(0);
  const [galleryIndex, setGalleryIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const checkMobile = () => {
      const gridContainer = document.querySelector('[data-canvas-root]');
      const width = gridContainer ? gridContainer.getBoundingClientRect().width : window.innerWidth;
      setIsMobile(width < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const gridContainer = document.querySelector('[data-canvas-root]');
    let observer: ResizeObserver | null = null;
    if (gridContainer) {
      observer = new ResizeObserver(() => {
        checkMobile();
      });
      observer.observe(gridContainer);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging: isSorting,
  } = useDraggable({ 
    id: widget.id,
    disabled: isOverlay
  });

  const isDragging = isSorting || isOverlay;
  const isSourceDragging = isSorting && !isOverlay;

  const [localSize, setLocalSize] = React.useState<{ width?: number; height?: number } | null>(null);
  const [resizeStart, setResizeStart] = React.useState<{
    width: number;
    height: number;
    x: number;
    y: number;
    direction: string;
    startColSpan: number;
    startRowSpan: number;
    startGridX: number;
    startGridY: number;
  } | null>(null);
  const [alignmentGuides, setAlignmentGuides] = React.useState<{ x?: number; y?: number }[]>([]);
  const [showResizeHandles, setShowResizeHandles] = React.useState(false);

  const isCurrentlyResizing = resizeStart !== null;
  const isResizingActiveForWidget = showResizeHandles || isCurrentlyResizing;
  const containerWidthRef = React.useRef<number>(1200);

  React.useEffect(() => {
    if (setIsResizingGlobal) {
      setIsResizingGlobal(isResizingActiveForWidget);
    }
    return () => {
      if (setIsResizingGlobal) {
        setIsResizingGlobal(false);
      }
    };
  }, [isResizingActiveForWidget, setIsResizingGlobal]);

  React.useEffect(() => {
    if (!isSelected) {
      setShowResizeHandles(false);
    }
  }, [isSelected]);

  // Dynamic height auto-rowSpan adjustment for template sections
  React.useEffect(() => {
    if (widget.type !== 'edi-section' || isDragging || isCurrentlyResizing) return;

    const measureAndAdjust = () => {
      const container = document.querySelector(`[data-edi-content-container="${widget.id}"]`);
      if (!container) return;

      const height = container.getBoundingClientRect().height;
      if (height === 0) return;

      const rawWidth = typeof window !== 'undefined' 
        ? (document.querySelector('[data-canvas-root]')?.getBoundingClientRect().width || window.innerWidth - 80)
        : 1200;
      const stableWidth = Math.round(rawWidth / 100) * 100;
      const config = getGridConfig(stableWidth);
      const rowStep = config.rowHeight + config.gap;
      
      // Calculate rowSpan needed to cover the height
      const neededRowSpan = Math.max(2, Math.ceil((height + config.gap) / rowStep));
      
      if (neededRowSpan !== widget.gridRowSpan) {
        updateWidget(widget.id, { gridRowSpan: neededRowSpan });
      }
    };

    // Run on mount / content change
    measureAndAdjust();

    // Use ResizeObserver for accurate dynamic updates when layout/content changes
    const container = document.querySelector(`[data-edi-content-container="${widget.id}"]`);
    if (container) {
      const observer = new ResizeObserver(() => {
        measureAndAdjust();
      });
      observer.observe(container);
      return () => observer.disconnect();
    }
  }, [widget.id, widget.type, widget.gridRowSpan, widget.sectionProps, isDragging, isCurrentlyResizing, updateWidget]);

  // Resolve column spans for a 5-column grid (ensuring at least 2-columns on mobile for clean scaling)
  const baseColSpan = widget.gridColumnSpan ?? (
    widget.size === 'wide' ? 2 : (widget.size === 'large' ? 2 : 1)
  );
  const colSpan = isMobile ? Math.max(2, baseColSpan) : baseColSpan;

  const rowSpan = widget.gridRowSpan ?? (
    widget.size === 'tall' ? 2 : (widget.size === 'large' ? 2 : 1)
  );

  const currentConfig = typeof window !== 'undefined' 
    ? getGridConfig(document.querySelector('[data-canvas-root]')?.getBoundingClientRect().width || window.innerWidth - 80) 
    : getGridConfig(1200);
  const currentWidth = localSize?.width ?? (colSpan * currentConfig.colWidth + (colSpan - 1) * currentConfig.gap);
  const currentHeight = localSize?.height ?? (rowSpan * currentConfig.rowHeight + (rowSpan - 1) * currentConfig.gap);

  const getConstraints = () => ({
    minCols: isMobile ? 2 : 1,
    minRows: 1,
    maxCols: currentConfig.cols,
    maxRows: 1000 // "Infinite" height limit
  });

  const getSnappedSize = (width: number, height: number) => {
    const config = getGridConfig(containerWidthRef.current);
    const { minCols, minRows, maxCols, maxRows } = getConstraints();
    return snapDimensions(width, height, config, minCols, minRows, maxCols, maxRows);
  };

  const getMagneticSnappedSize = (width: number, height: number) => {
    const config = getGridConfig(containerWidthRef.current);
    const { minCols, minRows, maxCols, maxRows } = getConstraints();
    return snapDimensionsProximity(width, height, config, 15, minCols, minRows, maxCols, maxRows);
  };

  const getSpanFromPixels = (width: number, height: number) => {
    const snapped = getSnappedSize(width, height);
    return { colSpan: snapped.colSpan, rowSpan: snapped.rowSpan };
  };

  const startResizing = (direction: string) => (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const rect = e.currentTarget.closest('.widget-container')?.getBoundingClientRect();
    if (rect) {
      const gridContainer = document.querySelector('[data-canvas-root]');
      containerWidthRef.current = gridContainer?.getBoundingClientRect().width || window.innerWidth - 80;
      
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch (err) {
        console.warn('Pointer capture failed:', err);
      }
      
      // Prevent dropping down: Move this widget before any widgets on the same visual row that precede it in the list.
      // This places the main widget first on its row, allowing it to grow smoothly without wrapping, while other widgets are pushed.
      const currentTop = rect.top;
      const sameRowWidgetIds: string[] = [];

      widgets.forEach((w) => {
        if (w.id === widget.id) return;
        const el = document.querySelector(`[data-widget-id="${w.id}"]`);
        if (el) {
          const r = el.getBoundingClientRect();
          // If the top coordinates are close (within 25px)
          if (Math.abs(r.top - currentTop) < 25) {
            sameRowWidgetIds.push(w.id);
          }
        }
      });

      if (sameRowWidgetIds.length > 0) {
        const currentIndex = widgets.findIndex((w) => w.id === widget.id);
        const sameRowIndices = sameRowWidgetIds
          .map((id) => widgets.findIndex((w) => w.id === id))
          .filter((idx) => idx !== -1 && idx < currentIndex);

        if (sameRowIndices.length > 0) {
          const firstSameRowIdx = Math.min(...sameRowIndices);
          const updatedWidgets = [...widgets];
          const [movedWidget] = updatedWidgets.splice(currentIndex, 1);
          updatedWidgets.splice(firstSameRowIdx, 0, movedWidget);
          setWidgets(updatedWidgets);
        }
      }

      const containerRect = gridContainer?.getBoundingClientRect();
      let startGridX = widget.gridX || 1;
      let startGridY = widget.gridY || 1;
      
      if (containerRect) {
        const relativeX = rect.left - containerRect.left;
        const relativeY = rect.top - containerRect.top;
        const config = getGridConfig(containerRect.width);
        
        startGridX = Math.max(1, Math.round(relativeX / config.stepX) + 1);
        startGridY = Math.max(1, Math.round(relativeY / config.stepY) + 1);
      }
      
      startGridX = startGridX || 1;
      startGridY = startGridY || 1;

      setResizeStart({
        width: rect.width,
        height: rect.height,
        x: e.clientX,
        y: e.clientY,
        direction,
        startColSpan: colSpan,
        startRowSpan: rowSpan,
        startGridX,
        startGridY,
      });
      setLocalSize({ width: rect.width, height: rect.height });
      if (setIsResizingGlobal) {
        setIsResizingGlobal(true);
      }
    }
  };

  React.useEffect(() => {
    if (!resizeStart) {
      if (alignmentGuides.length > 0) {
        setAlignmentGuides([]);
      }
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      const container = document.querySelector('[data-canvas-root]');
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const config = getGridConfig(containerRect.width);

      // Current pointer position relative to container
      const relativeX = e.clientX - containerRect.left;
      const relativeY = e.clientY - containerRect.top;

      // Mathematically flawless hovered column/row index of the pointer (handles gaps correctly)
      const pointerCol = Math.max(-5, Math.min(10, Math.floor((relativeX + config.gap / 2) / config.stepX) + 1));
      const pointerRow = Math.max(1, Math.floor((relativeY + config.gap / 2) / config.stepY) + 1);

      let finalColSpan = resizeStart.startColSpan;
      let finalRowSpan = resizeStart.startRowSpan;
      let finalGridX = resizeStart.startGridX;
      let finalGridY = resizeStart.startGridY;

      const minColLimit = isMobile ? 2 : 1;

      if (resizeStart.direction.includes('e')) {
        finalColSpan = Math.max(minColLimit, Math.min(config.cols, pointerCol - finalGridX + 1));
        if (finalGridX + finalColSpan - 1 > config.cols) {
          finalGridX = Math.max(1, config.cols - finalColSpan + 1);
        }
      } else if (resizeStart.direction.includes('w')) {
        const rightCol = finalGridX + resizeStart.startColSpan - 1;
        finalColSpan = Math.max(minColLimit, Math.min(config.cols, rightCol - pointerCol + 1));
        finalGridX = Math.max(1, rightCol - finalColSpan + 1);
      }

      if (resizeStart.direction.includes('s')) {
        finalRowSpan = Math.max(1, pointerRow - finalGridY + 1);
      } else if (resizeStart.direction.includes('n')) {
        const bottomRow = finalGridY + resizeStart.startRowSpan - 1;
        finalRowSpan = Math.max(1, bottomRow - pointerRow + 1);
        finalGridY = Math.max(1, bottomRow - finalRowSpan + 1);
      }

      if (isMobile) {
        finalGridY = Math.max(6, finalGridY);
      } else {
        // Prevent resizing onto the profile (col 1-2, row 1-3)
        const overlapsProfile = (x: number, y: number, w: number, h: number) => {
          return !(x + w - 1 < 1 || x > 2 || y + h - 1 < 1 || y > 3);
        };
        
        if (overlapsProfile(finalGridX, finalGridY, finalColSpan, finalRowSpan)) {
          if (resizeStart.direction.includes('w')) {
            finalGridX = Math.max(3, finalGridX);
            finalColSpan = Math.max(1, resizeStart.startGridX + resizeStart.startColSpan - finalGridX);
          }
          if (resizeStart.direction.includes('n')) {
            if (finalGridX <= 2) {
              finalGridY = Math.max(4, finalGridY);
              finalRowSpan = Math.max(1, resizeStart.startGridY + resizeStart.startRowSpan - finalGridY);
            }
          }
        }
      }

      const snappedWidth = finalColSpan * config.colWidth + (finalColSpan - 1) * config.gap;
      const snappedHeight = finalRowSpan * config.rowHeight + (finalRowSpan - 1) * config.gap;

      setLocalSize({ width: snappedWidth, height: snappedHeight });

      // Update widget in global store in real-time
      if (
        finalColSpan !== widget.gridColumnSpan ||
        finalRowSpan !== widget.gridRowSpan ||
        finalGridX !== widget.gridX ||
        finalGridY !== widget.gridY
      ) {
        updateWidget(widget.id, {
          gridColumnSpan: finalColSpan,
          gridRowSpan: finalRowSpan,
          gridX: finalGridX,
          gridY: finalGridY,
          size: finalColSpan >= 3 && finalRowSpan >= 2 ? 'large' : (finalColSpan >= 2 ? 'wide' : (finalRowSpan >= 2 ? 'tall' : 'small')),
        });
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (e.target && 'releasePointerCapture' in e.target && typeof (e.target as any).releasePointerCapture === 'function') {
        try {
          (e.target as any).releasePointerCapture(e.pointerId);
        } catch (err) {
          console.warn('Pointer capture release failed:', err);
        }
      }
      setResizeStart(null);
      setLocalSize(null);
      setAlignmentGuides([]);
      if (setIsResizingGlobal) {
        setIsResizingGlobal(false);
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [resizeStart, widget.id, updateWidget, setIsResizingGlobal]);

  const style = transform ? {
    transform: CSS.Transform.toString(transform),
  } : undefined;

  const getShadowClass = (shadow: string | undefined, isDragging: boolean) => {
    if (isDragging) return 'shadow-[0_40px_80px_rgba(0,0,0,0.15)]';
    switch (shadow) {
      case 'soft': return 'shadow-xl shadow-black/5';
      case 'medium': return 'shadow-2xl shadow-black/10';
      case 'hard': return 'shadow-[0_20px_50px_rgba(0,0,0,0.25)]';
      default: return '';
    }
  };

  // Helper to get embed preview
  const getEmbedPreview = (url?: string) => {
    if (!url) return null;
    
    // YouTube
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
    if (ytMatch) {
      return {
        type: 'youtube',
        thumbnail: `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`,
        icon: 'https://www.youtube.com/s/desktop/28e64627/img/favicon_144x144.png'
      };
    }

    // Spotify
    if (url.includes('spotify.com')) {
      return {
        type: 'spotify',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg'
      };
    }

    return null;
  };

  const embedPreview = widget.type === 'embed' ? getEmbedPreview(widget.url) : null;

  const isMediaWidget = widget.type === 'image' || widget.type === 'map' || widget.type === 'embed' || widget.type === 'product' || widget.type === 'gallery' || widget.type === 'footer' || widget.type === 'video' || widget.type === 'edi-section' || (widget.type === 'header' && widget.category === 'hero');
  const showBg = widget.showBackground !== undefined ? widget.showBackground : (widget.type === 'product' || widget.type === 'gallery' ? true : !isMediaWidget);
  const showBrd = widget.showBorder !== undefined ? widget.showBorder : false;
  
  const customBgStyle = showBg 
    ? (widget.backgroundColor || 'rgba(255, 255, 255, 0.9)') 
    : 'transparent';

  const customBorderStyle = showBrd
    ? `${widget.borderWidth ?? 1}px solid ${widget.borderColor ?? '#ffffff'}`
    : (isEditing ? '1px dashed rgba(0,0,0,0.15)' : 'none');

  const previewSpans = { colSpan, rowSpan };

  const isEditingCurrent = isSelected && isEditing;
  const isAnyWidgetDragging = !!activeDraggingId;
  const isAnyWidgetResizing = !!isResizingGlobal;
  const isAnyInteractiveAction = isAnyWidgetDragging || isAnyWidgetResizing;
  const isCurrentActive = (isAnyWidgetDragging && (activeDraggingId === widget.id || isOverlay)) || (isAnyWidgetResizing && isCurrentlyResizing) || isEditingCurrent;

  return (
    <motion.div
      layout={isCurrentlyResizing ? false : true}
      data-widget-id={widget.id}
      ref={setNodeRef}
      style={{
        ...style,
        borderRadius: '0px',
        zIndex: isDragging || isCurrentlyResizing ? 1500 : (isEditingCurrent ? 99999 : (isSelected ? 9999 : 1)),
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isSourceDragging ? 0.3 : (isAnyInteractiveAction || isEditing ? (isCurrentActive ? 1 : 0.45) : 1),
        width: '100%',
        height: localSize?.height ? `${localSize.height}px` : '100%',
        filter: 'none',
      }}
      transition={{
        type: "spring",
        stiffness: isCurrentlyResizing ? 450 : 300,
        damping: isCurrentlyResizing ? 32 : 30,
        mass: isCurrentlyResizing ? 0.6 : 0.8
      }}
      className={`
        widget-container relative group select-none w-full
        ${isOverlay ? 'cursor-grabbing' : 'cursor-pointer'}
        ${isDragging || isCurrentlyResizing || isSelected ? 'touch-none' : ''}
      `}
    >
      {/* Mobile-Only Dedicated Drag Handle Overlay (appears on selection) */}
      <AnimatePresence>
        {isSelected && isMobile && !isDragging && (
          <motion.div 
            {...attributes}
            {...listeners}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-3 left-3 z-[100] w-10 h-10 rounded-full bg-black dark:bg-neutral-950 text-white flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing border border-white/25 touch-none"
            title="Drag to Move"
          >
            <GripVertical className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resize Mode Overlay — sections are full-width, so only height resizes */}
      {isSelected && showResizeHandles && (
        <div className="absolute inset-0 z-[60] border-2 border-indigo-500/60 pointer-events-none touch-none">
          <div
            onPointerDown={startResizing('s')}
            className="touch-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-8 flex items-center justify-center pointer-events-auto cursor-ns-resize group/handle"
          >
            <div className="w-12 h-3 border-2 border-white rounded-full transition-transform shadow-xl bg-indigo-600 group-hover/handle:scale-125" />
          </div>
        </div>
      )}

      {/* Section Toolbar — pinned inside the top of the section so it can never be cut off */}
      <AnimatePresence>
        {isSelected && !isDragging && !isOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -8, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: -8, x: "-50%" }}
            className="absolute top-2 left-1/2 z-[1010] flex flex-row items-center gap-1 bg-black/95 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <div
              {...attributes}
              {...listeners}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 cursor-grab active:cursor-grabbing touch-none"
              title="Drag to reorder"
            >
              <GripVertical className="w-4 h-4" />
            </div>
            <div className="w-px h-5 bg-white/10" />
            <button
              onClick={() => setShowResizeHandles(!showResizeHandles)}
              className={`p-2 rounded-full transition-all ${showResizeHandles ? 'bg-white text-black' : 'hover:bg-white/10 text-white/70'}`}
              title="Adjust height"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-2 rounded-full transition-all ${isEditing ? 'bg-white text-black' : 'hover:bg-white/10 text-white/70'}`}
              title="Edit Content"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => duplicateWidget(widget.id)}
              className="p-2 hover:bg-white/10 rounded-full text-white/70 transition-all"
              title="Duplicate"
            >
              <Copy className="w-4 h-4" />
            </button>
            <div className="w-px h-5 bg-white/10" />
            <button
              onClick={() => removeWidget(widget.id)}
              className="p-2 hover:bg-red-500/20 rounded-full text-red-400 transition-all"
              title="Delete (undo with Ctrl+Z)"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Actual Card Content with overflow-hidden */}
      <div 
        className={`
          w-full h-full rounded-[inherit] transition-all duration-300
          ${widget.type === 'footer' ? 'ring-0 overflow-visible' : 'overflow-hidden ' + (isSelected ? 'ring-2 ring-black/10 z-20' : 'hover:ring-1 hover:ring-black/10')}
          ${showBg ? 'backdrop-blur-3xl' : ''}
          ${(isAnyInteractiveAction || isEditing) && !isCurrentActive ? 'blur-[4px] grayscale-[0.2] brightness-[0.85]' : ''}
        `}
        style={{
          backgroundColor: customBgStyle,
          border: customBorderStyle,
        }}
      >

      
      {/* Widget Content */}
      <div className={`
        ${widget.type === 'edi-section' ? 'h-auto' : 'h-full'} w-full flex flex-col relative z-10 text-black
        ${isMediaWidget || widget.type === 'edi-section' ? 'p-0' : (colSpan <= 2 || rowSpan <= 2 ? 'p-4' : (colSpan <= 4 && rowSpan <= 4 ? 'p-6' : 'p-10'))}
      `}>
        
        {widget.type === 'edi-section' && (() => {
          const sectionDef = getSectionDef(widget.sectionKey);
          const SectionComp = sectionDef ? (Renderers[sectionDef.key as any] as React.FC<any>) : null;
          if (!SectionComp) {
            return (
              <div className="flex items-center justify-center h-full text-xs font-bold uppercase tracking-widest text-black/30">
                Unknown template section
              </div>
            );
          }
          return (
            <div
              className="@container w-full h-auto rounded-[inherit] [&_.min-h-screen]:min-h-0 overflow-hidden"
              data-edi-content-container={widget.id}
            >
              <SectionComp {...resolveSectionProps(widget)} isEditable={false} />
            </div>
          );
        })()}

        {widget.type === 'header' && widget.category === 'hero' && widget.variant === 'split' && (
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row text-black bg-white">
            <div className="flex-1 flex flex-col items-start justify-center p-8 md:p-12 order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-display">{widget.title}</h1>
              <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-md font-medium mb-8">{widget.content}</p>
              {widget.ctaText && (
                <button className="px-8 py-4 bg-black text-white hover:bg-black/80 transition-colors rounded-full font-bold uppercase tracking-wider text-sm shadow-xl">
                  {widget.ctaText}
                </button>
              )}
            </div>
            {widget.image && (
              <div className="flex-1 order-1 md:order-2">
                <img src={widget.image} alt="Hero" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        )}

        {widget.type === 'header' && widget.category === 'hero' && widget.variant === 'minimal' && (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-8 bg-white text-black">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-display">{widget.title}</h1>
            <p className="text-black/50 text-base md:text-lg leading-relaxed max-w-xl font-medium mb-8">{widget.content}</p>
            {widget.ctaText && (
              <button className="px-6 py-3 border border-black/20 text-black hover:bg-black hover:text-white transition-colors rounded-full font-bold uppercase tracking-wider text-xs">
                {widget.ctaText}
              </button>
            )}
          </div>
        )}

        {widget.type === 'header' && widget.category === 'hero' && widget.variant === 'edi' && (
          <div className="absolute inset-0 w-full h-full text-white overflow-hidden" style={{ background: '#0F0F0F' }}>
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-40 blur-[128px]" style={{ background: '#FF6B00' }} />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-30 blur-[128px]" style={{ background: '#4DE1FF' }} />
            {widget.image && (
              <img src={widget.image} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
              <h1
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #FF6B00, #FF3D00)' }}
              >
                {widget.title}
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl font-medium mb-8">{widget.content}</p>
              {widget.ctaText && (
                <button
                  className="px-8 py-4 text-white transition-transform hover:scale-[1.03] rounded-full font-bold uppercase tracking-wider text-sm shadow-2xl"
                  style={{ background: 'linear-gradient(90deg, #FF6B00, #FF3D00)' }}
                >
                  {widget.ctaText}
                </button>
              )}
            </div>
          </div>
        )}

        {widget.type === 'header' && widget.category === 'hero' && (!widget.variant || widget.variant === 'overlay') && (
          <div className="absolute inset-0 w-full h-full text-white">
            {widget.image && (
              <img src={widget.image} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            )}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display text-white">{widget.title}</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl font-medium mb-8">{widget.content}</p>
              {widget.ctaText && (
                <button className="px-8 py-4 bg-white text-black hover:bg-slate-200 transition-colors rounded-full font-bold uppercase tracking-wider text-sm shadow-xl">
                  {widget.ctaText}
                </button>
              )}
            </div>
          </div>
        )}

        {widget.type === 'header' && widget.category !== 'hero' && (
          <div className="flex items-center gap-8 h-full">
            {widget.image && (
              <img src={widget.image} alt="Profile" className="w-28 h-28 object-cover border border-white/10 shadow-2xl" style={{ borderRadius: widget.borderRadius ? `${widget.borderRadius * 0.8}px` : '24px' }} />
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-black to-black/60 font-display">{widget.title}</h1>
              <p className="text-black/50 text-sm leading-relaxed max-w-md font-medium">{widget.content}</p>
            </div>
          </div>
        )}

        {widget.type === 'faq' && (
          <div className="flex flex-col h-full select-none justify-between text-left">
            <div>
              <h3 className="text-sm font-black tracking-widest text-slate-900 dark:text-white uppercase mb-4 font-display">
                {widget.title || 'FREQUENTLY ASKED QUESTIONS'}
              </h3>
              <div className="space-y-2">
                {(() => {
                  const items = widget.content && widget.content.includes('|')
                    ? widget.content.split(';;').map(item => {
                        const parts = item.split('|');
                        return { 
                          question: parts[0]?.replace(/^Q:\s*/i, '').trim() || '', 
                          answer: parts[1]?.replace(/^A:\s*/i, '').trim() || '' 
                        };
                      })
                    : [
                        { question: 'Do you offer free shipping?', answer: 'Yes! We offer complimentary express shipping on all domestic orders over $150.' },
                        { question: 'What is your return policy?', answer: 'We support hassle-free 30-day returns or sizing exchanges on all unworn footwear items.' },
                        { question: 'Are these sneakers authentic?', answer: '100% yes. Every item is verified by our team of curators before shipping to your doorstep.' }
                      ];
                  
                  return items.map((item, idx) => {
                    const isExpanded = expandedFaqIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                          isExpanded 
                            ? 'bg-slate-50 border-slate-200 dark:bg-zinc-800/40 dark:border-zinc-700/60' 
                            : 'bg-white/40 border-slate-100 dark:bg-zinc-900/10 dark:border-zinc-800/40 hover:bg-slate-50 dark:hover:bg-zinc-800/20'
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedFaqIndex(isExpanded ? null : idx);
                          }}
                          className="w-full text-left px-4 py-3 flex items-center justify-between text-xs font-extrabold text-slate-800 dark:text-slate-200"
                        >
                          <span className="pr-2">{item.question}</span>
                          <span className={`text-[10px] text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-3.5 pt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
            {widget.ctaText && (
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/40 flex justify-between items-center text-[10px] text-slate-400">
                <span className="font-semibold">Still have questions?</span>
                <button className="px-3 py-1 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-950 text-white rounded-lg font-bold text-[10px] transition-colors">
                  {widget.ctaText}
                </button>
              </div>
            )}
          </div>
        )}

        {widget.type === 'gallery' && (
          <div className="flex flex-col h-full relative group text-left">
            {/* Gallery interactive showcase */}
            {(() => {
              const galleryImages = widget.images && widget.images.length > 0
                ? widget.images
                : [
                    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
                  ];
              
              const currentImg = galleryImages[galleryIndex % galleryImages.length];
              
              return (
                <div className="flex-1 flex flex-col justify-between h-full w-full absolute inset-0 overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-105" style={{ backgroundImage: `url(${currentImg})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Top rating badge or detail */}
                  <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-bold text-white border border-white/10">
                    IMAGE { (galleryIndex % galleryImages.length) + 1 } OF { galleryImages.length }
                  </div>

                  {/* Nav Arrows */}
                  <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setGalleryIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
                      }}
                      className="w-7 h-7 bg-white/25 hover:bg-white/40 active:bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-auto shadow transition-colors font-bold text-sm cursor-pointer"
                    >
                      ‹
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setGalleryIndex(prev => (prev + 1) % galleryImages.length);
                      }}
                      className="w-7 h-7 bg-white/25 hover:bg-white/40 active:bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-auto shadow transition-colors font-bold text-sm cursor-pointer"
                    >
                      ›
                    </button>
                  </div>

                  {/* Thumbnail Row or Indicator dots at bottom */}
                  <div className="mt-auto p-3 z-10 flex items-center justify-between absolute bottom-0 inset-x-0">
                    <div className="flex gap-1">
                      {galleryImages.map((_, idx) => {
                        const isActive = idx === (galleryIndex % galleryImages.length);
                        return (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryIndex(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${isActive ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                          />
                        );
                      })}
                    </div>
                    {widget.ctaText && (
                      <button className="px-3 py-1 bg-white hover:bg-slate-50 text-black text-[9px] font-black rounded-lg transition-colors flex items-center gap-1 shadow-md">
                        <span>{widget.ctaText}</span>
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {widget.type === 'menu' && (
          colSpan < 5 ? (
            <div className="flex flex-col h-full justify-between">
              <h3 className="text-xl font-bold font-display">{widget.title || 'Menu'}</h3>
              <div className="flex flex-col gap-2">
                 {(widget.content || 'Products, Services, About, Contact').split(',').map(item => (
                   <div key={item} className="flex justify-between items-center text-xs font-medium p-1 border-b border-white/5 pb-2">
                     <span>{item.trim()}</span>
                     <ArrowUpRight className="w-3 h-3 text-white/30" />
                   </div>
                 ))}
              </div>
            </div>
          ) : widget.variant === 'edi' ? (
            <div className="flex items-center justify-between w-full h-full px-2 sm:px-6 py-2 relative overflow-hidden" style={{ background: '#0F0F0F' }}>
              <div className="absolute -top-10 left-1/3 w-40 h-40 rounded-full opacity-30 blur-[80px] pointer-events-none" style={{ background: '#FF6B00' }} />
              <span
                className="font-black text-xl tracking-tighter font-display italic relative z-10 bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #FF6B00, #FF3D00)' }}
              >
                {widget.title || 'BrandStore'}
              </span>
              <div className="hidden md:flex items-center gap-6 text-xs font-bold text-white/60 relative z-10">
                {(widget.content || 'Home, Shop, About, Contact').split(',').map((link) => (
                  <a key={link} href="#" className="hover:text-white transition-colors py-1 px-1 border-b-2 border-transparent hover:border-[#FF6B00]/60">
                    {link.trim()}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative z-10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(90deg, #FF6B00, #FF3D00)' }}
              >
                Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </button>
            </div>
          ) : widget.variant === 'centered' ? (
            <div className="flex flex-col items-center justify-center w-full h-full gap-2 px-2 sm:px-6 py-2">
              <span className="font-black text-2xl tracking-tighter text-slate-900 font-display italic">
                {widget.title || 'BrandStore'}
              </span>
              <div className="flex items-center gap-6 text-xs font-bold text-slate-600">
                {(widget.content || 'Home, Shop, About, Contact').split(',').map((link) => (
                  <a key={link} href="#" className="hover:text-black transition-colors py-1 px-1 border-b-2 border-transparent hover:border-black/15">
                    {link.trim()}
                  </a>
                ))}
              </div>
            </div>
          ) : widget.variant === 'minimal' ? (
            <div className="flex items-center justify-between w-full h-full px-2 sm:px-6 py-2 border-b border-black/5">
              <span className="font-bold text-sm tracking-widest uppercase text-slate-900 font-display">
                {widget.title || 'BrandStore'}
              </span>
              <div className="hidden md:flex items-center gap-6 text-[11px] font-semibold text-slate-500 tracking-wide">
                {(widget.content || 'Home, Shop, About, Contact').split(',').map((link) => (
                  <a key={link} href="#" className="hover:text-black transition-colors">
                    {link.trim().toUpperCase()}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-[11px] font-semibold text-slate-500 hover:text-black transition-colors"
              >
                Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full h-full px-2 sm:px-6 py-2">
              {/* Brand Logo */}
              <div className="flex flex-col items-start select-none">
                <span className="font-black text-xl tracking-tighter text-slate-900 font-display italic">
                  {widget.title || 'BrandStore'}
                </span>
                <span className="text-[7px] font-bold text-indigo-600 tracking-widest uppercase leading-none mt-0.5">Online Store</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600">
                {(widget.content || 'Home, Shop, About, Contact').split(',').map((link) => (
                  <a key={link} href="#" className="hover:text-black transition-colors py-1 px-1 border-b-2 border-transparent hover:border-black/15">
                    {link.trim()}
                  </a>
                ))}
              </div>

              {/* Utility Icons */}
              <div className="flex items-center gap-4 text-slate-700">
                <button className="p-1 hover:bg-black/5 rounded-full transition-colors hidden sm:inline-block">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-1 hover:bg-black/5 rounded-full transition-colors relative flex items-center justify-center cursor-pointer"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[8px] font-black rounded-full flex items-center justify-center shadow-sm">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </button>
                <button className="p-1 hover:bg-black/5 rounded-full transition-colors">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                </button>
              </div>
            </div>
          )
        )}

        {widget.type === 'pricing' && (
          <div className="flex flex-col h-full w-full justify-center text-center p-6 bg-slate-50/50">
            <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-6">{widget.title || 'Pricing'}</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch h-full w-full">
              {(widget.content || 'Basic ($9.99/mo) | Pro ($19.99/mo)').split('|').map((plan, i) => {
                const [name, price] = plan.trim().split(' (');
                const priceStr = price ? price.replace(')', '') : '';
                return (
                  <div key={i} className={`flex flex-col justify-between p-6 rounded-[24px] w-full h-full ${i === 1 ? 'bg-slate-900 text-white shadow-xl scale-[1.02] z-10' : 'bg-white border border-slate-200'}`}>
                    <div className="text-left">
                      <h4 className={`text-xl font-bold font-display ${i === 1 ? 'text-white' : 'text-slate-800'}`}>{name}</h4>
                      <p className={`text-sm mt-1 mb-4 ${i === 1 ? 'text-white/70' : 'text-slate-500'}`}>{priceStr}</p>
                      <ul className={`text-xs space-y-2 mb-6 ${i === 1 ? 'text-white/80' : 'text-slate-600'}`}>
                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3" /> All core features</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Priority support</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Lifetime updates</li>
                      </ul>
                    </div>
                    <button className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-95 ${i === 1 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-900'}`}>Choose Plan</button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {widget.type === 'reviews' && (
          <div className="flex flex-col h-full w-full p-8 text-slate-900 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-indigo-500" fill="currentColor" />
              <h3 className="text-sm font-black tracking-widest uppercase text-slate-800">{widget.title || 'Customer Reviews'}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {(widget.content || '"Great!" - John ;; "Awesome!" - Jane').split(';;').map((rev, i) => {
                const [quote, author] = rev.trim().split(' - ');
                return (
                  <div key={i} className="flex flex-col justify-between bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-4">
                        {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3" fill="currentColor" />)}
                      </div>
                      <p className="text-sm md:text-base font-medium italic text-slate-700 leading-snug mb-6">"{quote?.replace(/"/g, '')}"</p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">{author ? author.charAt(0) : 'A'}</div>
                      <span className="text-xs font-bold tracking-tight text-slate-900">{author || 'Anonymous'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {widget.type === 'footer' && (
          <div className="flex justify-center h-full w-[100vw] absolute left-[50%] -translate-x-1/2 p-8 bg-slate-900 text-slate-300 rounded-[inherit] overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
              <div className="flex flex-col md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                <span className="text-2xl font-black italic tracking-tighter text-white font-display mb-2">{widget.title || 'Aura Luxe'}</span>
                <p className="text-xs text-slate-400 max-w-xs mx-auto md:mx-0">{widget.content || 'Premium lifestyle goods and digital products.'}</p>
              </div>
              <div className="flex gap-8 md:w-1/3 justify-center mb-6 md:mb-0 text-sm font-medium">
                <div className="flex flex-col gap-2 text-left">
                  <a href="#" className="hover:text-white transition-colors">Shop</a>
                  <a href="#" className="hover:text-white transition-colors">Collections</a>
                  <a href="#" className="hover:text-white transition-colors">About Us</a>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <a href="#" className="hover:text-white transition-colors">Support</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 md:w-1/3">
                 <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"><Share className="w-4 h-4" /></button>
                 <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"><Mail className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {widget.type === 'embed' && (
          <div className={`h-full w-full relative overflow-hidden rounded-[inherit] transition-all duration-500 ${embedPreview?.type === 'spotify' ? 'bg-[#121212] text-white p-0' : 'bg-black group/embed'}`}>
            {embedPreview?.type === 'spotify' ? (
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-start gap-6 p-8">
                  {/* Album Art */}
                  <div className="relative group/art shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                      alt="Album Art" 
                      className="w-40 h-40 object-cover rounded-xl shadow-2xl group-hover/art:scale-[1.02] transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover/art:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex flex-col h-40 justify-between py-1">
                    <div>
                      <h2 className="text-4xl font-black tracking-tighter mb-2">{widget.title || 'Track Name'}</h2>
                      <div className="flex items-center gap-2">
                        <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Preview</span>
                        <span className="text-white/60 font-medium">{widget.content || 'Artist Name'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col h-40 justify-end items-end gap-6">
                    <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group/save">
                      <PlusCircle className="w-6 h-6 group-hover/save:scale-110 transition-transform" />
                      <span className="text-sm font-bold tracking-tight">Save on Spotify</span>
                    </button>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-5 text-white/60">
                        <SkipBack className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                        <SkipForward className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                        <MoreHorizontal className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                      </div>
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-xl">
                        <Play className="w-7 h-7 text-black fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-8 right-8">
                    <img src={embedPreview.icon} className="w-6 h-6" alt="Spotify" />
                  </div>
                </div>

                {/* Track List area (simple mockup) */}
                <div className="bg-black/20 p-8 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-xs font-mono">1</span>
                    <span className="text-sm font-bold">{widget.title}</span>
                    <span className="text-white/40 text-xs">{widget.content}</span>
                  </div>
                  <span className="text-white/40 text-xs font-mono">04:45</span>
                </div>
              </div>
            ) : embedPreview?.type === 'youtube' ? (
              <div className="h-full w-full relative">
                <img 
                  src={embedPreview.thumbnail} 
                  alt="Video thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/embed:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-11 bg-[#FF0000] rounded-xl flex items-center justify-center group-hover/embed:scale-110 transition-transform shadow-2xl">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <img src={embedPreview.icon} className="w-4 h-4 rounded-full" alt="icon" />
                    <span className="text-xs font-bold text-white tracking-tight line-clamp-1">{widget.title}</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-medium line-clamp-1">{widget.content}</p>
                </div>

                {/* Progress bar mockup */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-[#FF0000] w-1/3" />
                </div>
              </div>
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-white/10 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <ArrowUpRight className="w-6 h-6 text-white/30" />
                </div>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Embed Link</span>
                <p className="text-white/40 text-[10px] font-medium truncate max-w-full px-2">{widget.url || 'No URL set'}</p>
              </div>
            )}
          </div>
        )}

        {widget.type === 'video' && (
          <div className="h-full w-full relative group overflow-hidden bg-black flex flex-col justify-center items-center">
            {/* Background Image / Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${widget.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'})` }}
            />
            {/* Play Button Overlay */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all cursor-pointer group-hover:scale-110 shadow-xl">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1.5" fill="currentColor" />
            </div>
            {/* Title / Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight mb-2">{widget.title}</h3>
              {widget.content && <p className="text-sm text-white/70 line-clamp-2 max-w-lg">{widget.content}</p>}
            </div>
          </div>
        )}

        {widget.type === 'stat' && (
          <div className="flex flex-col h-full justify-center">
            {widget.title && (
              <h3 className={`text-[10px] font-black uppercase tracking-widest mb-6 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
                {widget.title}
              </h3>
            )}
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {(widget.content || 'Metric|Value').split(';;').map((stat, i) => {
                const [label, value] = stat.trim().split('|');
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <span className={`text-3xl sm:text-4xl font-black font-display tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {value || '0'}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {label || 'Metric'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {widget.type === 'countdown' && (
          <div className="flex flex-col h-full justify-center text-center">
            {widget.title && (
              <h3 className={`text-sm font-bold uppercase tracking-widest mb-8 ${theme === 'dark' ? 'text-rose-400' : 'text-rose-600'}`}>
                {widget.title}
              </h3>
            )}
            <div className="flex justify-center gap-4 sm:gap-8">
              {[
                { label: 'DAYS', value: '14' },
                { label: 'HRS', value: '08' },
                { label: 'MIN', value: '45' },
                { label: 'SEC', value: '22' }
              ].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-3 shadow-sm border ${
                    theme === 'dark' 
                      ? 'bg-slate-800 border-slate-700 text-white' 
                      : 'bg-white border-slate-200 text-slate-900'
                  }`}>
                    <span className="text-2xl sm:text-3xl font-black font-mono tracking-tighter">{time.value}</span>
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {widget.type === 'spacer' && (
          <div className="w-full h-full flex items-center justify-center pointer-events-none">
            {isEditing && (
              <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest border border-dashed border-black/10 px-4 py-2 rounded-xl">
                Spacer
              </span>
            )}
          </div>
        )}

        {widget.type === 'text' && (
          <div className="flex flex-col h-full">
            {widget.title && (
              <h2 className={`text-2xl font-bold mb-4 tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-b ${
                theme === 'dark' ? 'from-white to-white/70' : 'from-slate-900 to-slate-700'
              }`}>
                {widget.title}
              </h2>
            )}
            <div className={`leading-relaxed font-medium overflow-y-auto scrollbar-hide text-sm ${
              theme === 'dark' ? 'text-white/40' : 'text-slate-500'
            }`}>
              {widget.content}
            </div>
          </div>
        )}

        {widget.type === 'blog' && (
          <div className="flex flex-col h-full group/blog">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-lg">🎵</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">Music</span>
            </div>
            <h2 className="text-lg font-bold mb-2 tracking-tight text-black">{widget.title}</h2>
            <div className="text-black/50 text-xs font-medium leading-relaxed truncate">
              {widget.content}
            </div>
          </div>
        )}
        {widget.type === 'newsletter' && (
          colSpan === 5 ? (
            <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4 sm:px-8 py-4 gap-4">
              <div className="flex items-center gap-4.5 text-left flex-1">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 hidden sm:flex">
                  <Mail className="w-5.5 h-5.5 text-indigo-600 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black font-display tracking-tight text-slate-900 leading-tight">
                    {widget.title || '10% OFF Discount Coupons'}
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed mt-1">
                    {widget.content || 'Subscribe us to get 10% OFF on all purchases.'}
                  </p>
                </div>
              </div>

              <div className="relative group/input w-full md:max-w-md shrink-0 flex items-center">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-slate-100 border border-slate-200/60 rounded-2xl py-4 pl-5 pr-32 text-xs font-bold focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all text-slate-900 placeholder:text-slate-400"
                   onClick={(e) => e.stopPropagation()}
                 />
                 <button className="absolute right-2 top-2 bottom-2 px-6 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-indigo-500 transition-all active:scale-95 font-display whitespace-nowrap shadow-md shadow-indigo-600/10 cursor-pointer">
                    {widget.ctaText || 'EMAIL ME'}
                 </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full justify-center text-center">
              <div className={`${(currentHeight || 0) < 200 ? 'hidden' : 'flex'} w-14 h-14 rounded-2xl bg-black/5 items-center justify-center mb-6 mx-auto border border-black/10`}>
                <Mail className="w-6 h-6 text-black/60" />
              </div>
              <h3 className={`${(currentHeight || 0) < 150 ? 'text-sm' : 'text-xl'} font-bold mb-3 tracking-tight font-display text-black`}>{widget.title}</h3>
              <p className={`${(currentHeight || 0) < 180 ? 'hidden' : 'block'} text-black/40 text-xs mb-6 px-4 font-medium leading-relaxed`}>{widget.content}</p>
              <div className="relative group/input w-full max-w-xs mx-auto">
                 <input 
                   type="email" 
                   placeholder="Email address" 
                   className="w-full bg-black/5 border border-black/5 rounded-2xl p-4 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                   onClick={(e) => e.stopPropagation()}
                 />
                 <button className="absolute right-2 top-2 bottom-2 px-4 bg-black text-white rounded-xl text-[10px] font-bold hover:bg-black/90 transition-all active:scale-95 font-display whitespace-nowrap">
                    {widget.ctaText || 'Join'}
                 </button>
              </div>
            </div>
          )
        )}

        {widget.type === 'testimonial' && (
          <div className="flex flex-col h-full justify-center text-center">
            <Quote className={`w-10 h-10 mb-6 mx-auto ${theme === 'dark' ? 'text-white/10' : 'text-slate-200'}`} />
            <p className={`text-xl font-medium italic mb-8 px-6 leading-relaxed tracking-tight font-display ${
              theme === 'dark' ? 'text-white/80' : 'text-slate-800'
            }`}>"{widget.content}"</p>
            <div className="flex flex-col items-center">
              <span className={`text-sm font-bold tracking-tight font-display ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>{widget.author}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 font-display ${
                theme === 'dark' ? 'text-white/30' : 'text-slate-400'
              }`}>{widget.title}</span>
            </div>
          </div>
        )}

        {widget.type === 'button' && (
          <div className="flex flex-col h-full items-center justify-center text-center px-6 py-4">
            {widget.title && (
              <h3 className={`text-xs font-black uppercase tracking-widest mb-1.5 font-display ${
                theme === 'dark' ? 'text-white/40' : 'text-slate-400'
              }`}>
                {widget.title}
              </h3>
            )}
            {widget.content && (
              <p className={`text-sm font-semibold tracking-tight mb-4 max-w-md ${
                theme === 'dark' ? 'text-zinc-300' : 'text-slate-600'
              }`}>
                {widget.content}
              </p>
            )}
            <button 
              className={`
                w-full max-w-sm font-black tracking-wider uppercase transition-all shadow-lg font-display cursor-pointer duration-300
                bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-white hover:scale-[1.02] active:scale-[0.98]
                ${(currentHeight || 0) < 140 ? 'py-2.5 text-[10px] rounded-xl' : 'py-4 text-xs rounded-2xl'}
              `}
            >
               {widget.ctaText || 'Take Action'}
            </button>
          </div>
        )}

        {widget.type === 'image' && (
          <>
            <div className="absolute inset-0 w-full h-full rounded-[inherit] overflow-hidden -z-10">
              {widget.image ? (
                <img src={widget.image} alt="Widget" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black/20 text-white/20 font-bold uppercase tracking-widest text-[10px]">No Content</div>
              )}
            </div>
            {widget.title && (
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-[inherit] text-white">
                <h3 className="text-xl md:text-3xl font-black font-display leading-tight mb-2 tracking-tight">{widget.title}</h3>
                {widget.content && (
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 border-b border-white/40 self-start pb-0.5 hover:text-white transition-colors cursor-pointer">{widget.content}</span>
                )}
              </div>
            )}
          </>
        )}

        {widget.type === 'product' && (
          <div className="flex flex-col h-full relative group/product rounded-[inherit] overflow-hidden">
            {/* Image section */}
            <div className="flex-1 w-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
              {widget.image ? (
                <img src={widget.image} alt={widget.title} className="w-full h-full object-cover group-hover/product:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-xs uppercase">No Photo</div>
              )}
              {/* Category / Tag */}
              {widget.content && (
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/10 backdrop-blur-md text-[8px] font-black text-slate-900 tracking-wider uppercase rounded-md">
                  {widget.content}
                </span>
              )}
              {/* Price Tag */}
              {widget.category && (
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-white text-[10px] font-black text-slate-950 shadow-sm rounded-lg border border-slate-100">
                  {widget.category}
                </span>
              )}
            </div>

            {/* Info and CTA Section */}
            <div className={`p-4 flex flex-col justify-between border-t shrink-0 ${theme === 'dark' ? 'bg-[#0f172a] border-white/5' : 'bg-white border-slate-50'}`}>
              <div>
                <h4 className={`text-xs font-black tracking-tight leading-snug line-clamp-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {widget.title || 'Premium Sneaker'}
                </h4>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({
                    id: widget.id,
                    title: widget.title || 'Premium Sneaker',
                    price: widget.category || '$99.00',
                    image: widget.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
                  });
                }}
                className={`mt-3.5 w-full py-2.5 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all duration-300 active:scale-95 cursor-pointer shadow-sm ${
                  theme === 'dark' 
                    ? 'bg-white text-slate-950 hover:bg-slate-100' 
                    : 'bg-slate-950 hover:bg-slate-800 text-white'
                }`}
              >
                {widget.ctaText || 'Add to Cart'}
              </button>
            </div>
          </div>
        )}

        {widget.type === 'social' && (
          <div className="flex flex-col h-full justify-center">
             <h3 className="text-sm font-bold uppercase tracking-widest text-black/30 mb-6 text-center font-display">{widget.title || 'Socials'}</h3>
             <div className="grid grid-cols-1 gap-2">
               {widget.socialLinks?.map((link, idx) => (
                 <a key={idx} href={link.url} className="flex items-center justify-between p-4 rounded-2xl bg-black/[0.03] hover:bg-black/[0.08] transition-all border border-black/[0.05] group/link">
                   <span className="font-bold text-xs tracking-tight text-black/70 group-hover/link:text-black font-display">{link.platform}</span>
                   <ArrowUpRight className="w-4 h-4 text-black/20 group-hover/link:text-black/60 transition-colors" />
                 </a>
               ))}
             </div>
          </div>
        )}

        {widget.type === 'map' && widget.variant === 'sidebar' && (
          <div className="flex h-full w-full">
            <div className="w-1/2 h-full relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center gap-2 p-5 bg-white">
              <div className="w-9 h-9 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-1">
                <MapPin className="w-4 h-4 text-red-500" />
              </div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-black/40 font-display">{widget.title || 'Location'}</span>
              <span className="text-sm font-bold tracking-tight font-display text-black">{widget.location || 'San Francisco, CA'}</span>
            </div>
          </div>
        )}

        {widget.type === 'map' && widget.variant === 'pin' && (
          <div className="flex flex-col h-full relative group/map">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-500 border-4 border-white shadow-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="relative z-10 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70 font-display">{widget.title || 'Location'}</span>
              <span className="text-sm font-bold tracking-tight font-display text-white">{widget.location || 'San Francisco, CA'}</span>
            </div>
          </div>
        )}

        {widget.type === 'map' && widget.variant === 'edi' && (
          <div className="flex flex-col h-full relative group/map overflow-hidden" style={{ background: '#0F0F0F' }}>
            <div className="absolute inset-0 rounded-[inherit] overflow-hidden opacity-30 group-hover/map:opacity-50 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-30 blur-[100px] pointer-events-none" style={{ background: '#FF6B00' }} />
            <div className="mt-auto relative z-10 p-5">
              <div className="p-5 rounded-[2.5rem] border border-white/10 flex items-center gap-4 shadow-2xl" style={{ background: 'rgba(18,18,18,0.7)', backdropFilter: 'blur(20px)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF6B00, #FF3D00)' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5 font-display">{widget.title || 'Location'}</span>
                  <span className="text-sm font-bold tracking-tight font-display text-white">{widget.location || 'San Francisco, CA'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {widget.type === 'map' && (!widget.variant || widget.variant === 'card') && (
          <div className="flex flex-col h-full relative group/map">
             <div className="absolute inset-0 rounded-[inherit] overflow-hidden opacity-40 grayscale group-hover/map:grayscale-0 group-hover/map:opacity-60 transition-all duration-700 -z-10">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover" />
             </div>
             <div className="mt-auto relative z-10">
                <div className="bg-black/60 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10 flex items-center gap-4 shadow-2xl">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5 font-display">{widget.title || 'Location'}</span>
                    <span className="text-sm font-bold tracking-tight font-display">{widget.location || 'San Francisco, CA'}</span>
                  </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>

    </motion.div>
  );
};
