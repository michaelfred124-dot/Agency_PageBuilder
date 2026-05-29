"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Save, Plus, Trash2, GripVertical, Settings, LayoutTemplate, X, SlidersHorizontal, Monitor, Tablet, Smartphone, Search, ChevronDown, AlignLeft, AlignCenter, AlignRight, Type, Paintbrush, Globe, ShoppingBag, Database, Image as ImageIcon, Upload, Eye, Key, FolderOpen, ChevronRight, Rocket } from 'lucide-react';
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

import { ComponentType, SectionData, COMPONENT_SCHEMAS, Renderers } from '@/lib/blocks';

interface SiteEditorProps {
  siteName: string;
  initialSections?: SectionData[];
  onBack: () => void;
  user?: any;
  mediaFiles?: any[];
  globalSettings?: any;
  setGlobalSettings?: (s: any) => void;
  handleUploadMediaClick?: () => void;
  handleDeleteMedia?: (id: string) => void;
  saveSettings?: () => void;
  onSave?: (sections: SectionData[], theme: any) => void;
  onPublish?: (sections: SectionData[], theme: any) => void;
  initialTheme?: any;
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
    id: 'generic',
    name: '🛠️ Core Layouts',
    items: ['Hero', 'Feature', 'ProjectGrid', 'Gallery', 'TestimonialList', 'Banner']
  },
  {
    id: 'northwood',
    name: '☕ Northwood Coffee Shop',
    items: ['NWHero', 'NWEthos', 'NWMenu', 'NWFindUs', 'NWOrderAhead', 'NWCommunity', 'NWFooter']
  },
  {
    id: 'greenscape',
    name: '🌿 Greenscape Landscaping',
    items: ['GSHero', 'GSServices', 'GSAbout', 'GSProjects', 'GSCta', 'GSFooter']
  },
  {
    id: 'lauren',
    name: '📸 Lauren Wilson Photography',
    items: ['LWHero', 'LWAbout', 'LWServices', 'LWPortfolio', 'LWTestimonials', 'LWCta', 'LWFooter']
  },
  {
    id: 'solar',
    name: '☀️ Brighter Solar Energy',
    items: ['BSHeader', 'BSHero', 'BSStats', 'BSServices', 'BSSteps', 'BSTestimonials', 'BSPricing', 'BSCTA', 'BSFooter']
  },
  {
    id: 'ecommerce',
    name: '🛍️ Storefront & Pricing',
    items: ['ProductGrid', 'PricingTable']
  }
];

// Helper component to render a live thumbnail preview of a block
function BlockPreview({ type }: { type: ComponentType }) {
  const Renderer = Renderers[type];
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
function DraggableBlockItem({ type, description, onClick }: { type: ComponentType; description: string; onClick: () => void }) {
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
      className={`w-full text-left p-2.5 bg-white border-2 border-black rounded-xl hover:border-blue-500 hover:shadow-[4px_4px_0px_rgba(59,130,246,1)] transition-all group flex flex-col gap-2 cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-40 border-dashed' : ''}`}
    >
      <BlockPreview type={type} />
      <div className="px-1 flex flex-col gap-0.5">
        <span className="font-black uppercase tracking-tight text-[11px] group-hover:text-blue-600 transition-colors leading-tight">{type}</span>
        <span className="text-[9px] font-bold opacity-60 uppercase tracking-widest leading-none truncate">{description}</span>
      </div>
    </div>
  );
}

function SortableSection({ section, isSelected, onClick, onRemove, scale = 1 }: any) {
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

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={`relative group cursor-pointer border-[4px] bg-white transition-colors ${isSelected ? 'border-blue-500 z-10 scale-[1.01] shadow-2xl' : 'border-transparent hover:border-black/20'} ${isDragging ? '!opacity-50 scale-95 shadow-2xl z-50 border-black' : ''}`}
      onClick={onClick}
    >
      <div 
        className={`${isDragging ? 'pointer-events-none' : ''} ${shadowClass}`}
        style={wrapperStyle}
        data-custom-bg={overrides.backgroundColor ? 'true' : 'false'}
        data-custom-align={overrides.textAlign || 'default'}
      >
         <Renderer {...section.props} buttonText={overrides.buttonText || section.props.buttonText} />
      </div>
      
      {/* Overlay Controls */}
      <div 
        style={inverseScaleStyle}
        className={`absolute top-2 right-2 flex items-center bg-black rounded-lg p-1 gap-1 border-2 border-white shadow-lg z-20 transition-opacity ${isSelected || isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      >
         {/* Drag Handle */}
         <div 
           {...attributes} 
           {...listeners} 
           className="p-1.5 text-white/70 hover:text-white hover:bg-white/20 rounded cursor-grab active:cursor-grabbing"
         >
           <GripVertical className="w-4 h-4" />
         </div>
         <div className="w-[1px] h-4 bg-white/20 mx-1" />
         <button onClick={(e) => { e.stopPropagation(); onRemove(); }} className="p-1.5 text-red-400 hover:text-red-300 hover:bg-white/20 rounded">
           <Trash2 className="w-4 h-4" />
         </button>
      </div>
    </div>
  );
}

export default function SiteEditor({
  siteName,
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
  initialTheme
}: SiteEditorProps) {
  const [sections, setSections] = useState<SectionData[]>(initialSections);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [activeLeftTool, setActiveLeftTool] = useState<'add' | 'theme' | 'media' | 'cms' | 'ecommerce' | null>('add');
  const [editSubTab, setEditSubTab] = useState<'content' | 'style' | 'settings'>('content');
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(initialSections[0]?.id || null);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [scale, setScale] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDraggedBlock, setActiveDraggedBlock] = useState<ComponentType | null>(null);

  // Selector target for image picking
  const [mediaSelectorTarget, setMediaSelectorTarget] = useState<{ id: string, propName: string, index?: number, fieldName?: string } | null>(null);
  
  // Collapsible category accordion state
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    generic: true,
    northwood: false,
    greenscape: false,
    lauren: false,
    solar: false,
    ecommerce: false
  });

  // Global theme settings
  const [globalTheme, setGlobalTheme] = useState(initialTheme || {
    fontFamily: 'Space Grotesk',
    buttonRoundedness: 'rounded-xl',
    pageBackground: '#F8F5F2'
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
      const blockType = active.data.current.blockType as ComponentType;
      const newSection: SectionData = {
        id: `item-${blockType.toLowerCase()}-${Date.now()}`,
        type: blockType,
        props: { ...COMPONENT_SCHEMAS[blockType].defaultProps },
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
      setEditSubTab('content');
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

  const handleSelectMedia = (url: string) => {
    if (!mediaSelectorTarget) return;
    const { id, propName, index, fieldName } = mediaSelectorTarget;
    if (index !== undefined && fieldName !== undefined) {
      handleUpdateArrayProp(id, propName, index, fieldName, url);
    } else {
      handleUpdateProp(id, propName, url);
    }
    setMediaSelectorTarget(null);
    setActiveLeftTool(null);
    setRightSidebarOpen(true);
  };

  const addSection = (type: ComponentType) => {
    const newSection: SectionData = {
      id: `item-${type.toLowerCase()}-${Date.now()}`,
      type,
      props: { ...COMPONENT_SCHEMAS[type].defaultProps },
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
    setSections([...sections, newSection]);
    setSelectedSectionId(newSection.id);
    setEditSubTab('content');
  };

  const removeSection = (id: string) => {
    setSections(s => s.filter(sec => sec.id !== id));
    if (selectedSectionId === id) setSelectedSectionId(null);
  };

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedSection = sections.find(s => s.id === selectedSectionId);

  // Render the left Sidebar panel for Adding blocks
  const renderAddPanel = () => (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
        <input
          type="text"
          placeholder="Search layout blocks..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-[#F8F5F2] border-2 border-black rounded-xl text-xs font-bold outline-none focus:bg-white transition-colors"
        />
      </div>

      {searchQuery === '' ? (
        <div className="space-y-4">
          {CATEGORIES.map(category => {
            const isExpanded = expandedCategories[category.id];
            return (
              <div key={category.id} className="border-2 border-black rounded-xl overflow-hidden bg-[#F8F5F2]">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-3 text-left bg-white border-b-2 border-black font-black uppercase tracking-widest text-[9px] hover:bg-black/5"
                >
                  <span>{category.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="p-3 space-y-2 bg-[#F8F5F2]">
                    <p className="text-[8px] font-black uppercase tracking-widest text-black/30 mb-2 select-none">
                      Drag onto canvas or click to append
                    </p>
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
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-2">
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
          {Object.keys(COMPONENT_SCHEMAS).filter(type => type.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
            <p className="text-center text-xs font-bold text-black/40 py-8">No matching layout found.</p>
          )}
        </div>
      )}
    </div>
  );

  // Render the left Sidebar panel for Themes
  const renderThemePanel = () => (
    <div className="space-y-6">
      {/* Fonts */}
      <div className="space-y-2">
        <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Primary Font Family</label>
        <div className="grid grid-cols-1 gap-2">
          {[
            { name: 'Space Grotesk (Sans)', value: 'Space Grotesk' },
            { name: 'Georgia (Serif)', value: 'Serif' },
            { name: 'Courier New (Mono)', value: 'Mono' }
          ].map((font) => (
            <button
              key={font.value}
              onClick={() => setGlobalTheme({ ...globalTheme, fontFamily: font.value })}
              className={`w-full text-left px-4 py-3 border-2 border-black rounded-xl font-bold text-xs flex justify-between items-center transition-all ${globalTheme.fontFamily === font.value ? 'bg-black text-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)]' : 'bg-transparent text-black hover:bg-black/5'}`}
            >
              <span>{font.name}</span>
              <Type className="w-4 h-4 opacity-55" />
            </button>
          ))}
        </div>
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
    </div>
  );

  // Render Left Drawer Content CMS manager
  const renderCmsPanel = () => (
    <div className="space-y-6">
      {!user && (
        <div className="bg-yellow-100 border-2 border-yellow-500 p-3 rounded-lg text-[10px] font-bold text-yellow-800">
          Sign in on the main dashboard to save settings to the Firestore.
        </div>
      )}

      <div>
        <label className="block text-[9px] font-black uppercase tracking-widest mb-1.5 text-black/60">Business Name</label>
        <input 
          type="text" 
          value={globalSettings.businessName} 
          onChange={e => setGlobalSettings({...globalSettings, businessName: e.target.value})} 
          className="w-full px-3 py-2 bg-[#F8F5F2] border-2 border-black rounded-lg font-bold text-xs outline-none focus:bg-white" 
        />
      </div>

      <div>
        <label className="block text-[9px] font-black uppercase tracking-widest mb-1.5 text-black/60">Support Email</label>
        <input 
          type="email" 
          value={globalSettings.supportEmail} 
          onChange={e => setGlobalSettings({...globalSettings, supportEmail: e.target.value})} 
          className="w-full px-3 py-2 bg-[#F8F5F2] border-2 border-black rounded-lg font-bold text-xs outline-none focus:bg-white" 
        />
      </div>

      <div>
        <label className="block text-[9px] font-black uppercase tracking-widest mb-1.5 text-black/60">Default SEO Description</label>
        <textarea 
          value={globalSettings.defaultSeoDescription} 
          onChange={e => setGlobalSettings({...globalSettings, defaultSeoDescription: e.target.value})} 
          rows={4} 
          className="w-full px-3 py-2 bg-[#F8F5F2] border-2 border-black rounded-lg font-bold text-xs outline-none focus:bg-white resize-none" 
        />
      </div>

      <button 
        onClick={saveSettings} 
        disabled={!user}
        className="w-full bg-black text-white py-2.5 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-black/90 active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:pointer-events-none"
      >
        Save CMS settings
      </button>

      <div className="border-t-2 border-black/10 pt-4 bg-[#E8F0FE]/30 p-4 rounded-xl border-dashed">
         <h4 className="font-black uppercase tracking-widest text-[9px] mb-1">Relational Fields</h4>
         <p className="text-[10px] text-black/60 font-medium leading-relaxed">
           Updating these CMS fields updates references across all dynamic text elements on your pages.
         </p>
      </div>
    </div>
  );

  // Render Left Drawer E-Commerce panel
  const renderEcommercePanel = () => (
    <div className="space-y-6">
      <div className="bg-[#F8F5F2] border-2 border-black p-4 rounded-xl flex flex-col gap-3">
         <div className="flex items-center gap-2">
           <ShoppingBag className="w-4 h-4 text-blue-600" />
           <span className="font-black uppercase text-[10px] tracking-wider">Stripe Payments</span>
         </div>
         <p className="text-[10px] text-black/50 font-bold uppercase tracking-wider">Connect Stripe to charge clients</p>
         <button className="bg-[#635BFF] text-white py-2 rounded-lg font-black uppercase tracking-widest text-[9px] hover:bg-[#5851E5] transition-all shadow-md">
           Connect Stripe
         </button>
      </div>

      <div className="border-t-2 border-black/10 pt-4 space-y-4">
        <h4 className="font-black uppercase tracking-widest text-[10px]">API Keys</h4>
        <div className="space-y-3">
          <div>
            <label className="block text-[8px] font-black uppercase tracking-widest mb-1">Publishable Key</label>
            <div className="relative">
               <Key className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-black/40" />
               <input type="text" placeholder="pk_test_..." className="w-full pl-8 pr-3 py-2 bg-[#F8F5F2] border-2 border-black rounded-lg font-mono text-[9px] outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-[8px] font-black uppercase tracking-widest mb-1">Secret Key</label>
            <div className="relative">
               <Key className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-black/40" />
               <input type="password" placeholder="sk_test_..." className="w-full pl-8 pr-3 py-2 bg-[#F8F5F2] border-2 border-black rounded-lg font-mono text-[9px] outline-none" />
            </div>
          </div>
          <button onClick={() => alert("API keys updated!")} className="w-full bg-black text-white py-2 rounded-lg font-black uppercase tracking-widest text-[9px] hover:bg-black/90 transition-all shadow-md">
            Save API Keys
          </button>
        </div>
      </div>

      <div className="border-t-2 border-black/10 pt-4 space-y-3">
         <h4 className="font-black uppercase tracking-widest text-[10px]">Products</h4>
         <button className="w-full text-left p-3 border-2 border-black rounded-xl hover:bg-black/5 transition-all group flex items-center justify-between bg-white" onClick={() => alert("Create Product dialog coming soon!")}>
           <div>
             <p className="font-black uppercase tracking-widest text-[10px]">Add Product</p>
             <p className="text-[8px] text-black/40 font-bold uppercase">Digital / Physical</p>
           </div>
           <Plus className="w-4 h-4 text-black/40 group-hover:text-black" />
         </button>
         <button className="w-full text-left p-3 border-2 border-black rounded-xl hover:bg-black/5 transition-all group flex items-center justify-between bg-white" onClick={() => alert("Loading inventory dashboard...")}>
           <div>
             <p className="font-black uppercase tracking-widest text-[10px]">Manage Inventory</p>
             <p className="text-[8px] text-black/40 font-bold uppercase">0 Active products</p>
           </div>
           <ChevronRight className="w-4 h-4 text-black/40 group-hover:text-black" />
         </button>
      </div>
    </div>
  );

  // Render Left Drawer Media Library panel
  const renderMediaPanel = () => (
    <div className="space-y-6">
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

      <div className="flex gap-2">
        <button 
          onClick={handleUploadMediaClick}
          className="flex-1 bg-black text-white py-2.5 rounded-lg font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-1.5 hover:bg-black/90 active:scale-95 transition-all shadow-md"
        >
          <Upload className="w-3.5 h-3.5" /> Upload Media
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {mediaFiles.length === 0 && (
          <div className="col-span-full py-8 text-center text-black/40 font-bold uppercase tracking-widest text-[10px]">
            No media files found. Upload some!
          </div>
        )}
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
      </div>
    </div>
  );

  // Render the right Sidebar properties Inspector
  const renderInspector = () => (
    <div className="h-full flex flex-col overflow-hidden bg-white">
      <div className="p-4 border-b-[4px] border-black shrink-0 bg-stone-100 flex items-center justify-between">
        <span className="font-black uppercase tracking-widest text-xs">Property Inspector</span>
        {/* Toggle Right Sidebar on Mobile/Tablet */}
        <button className="xl:hidden p-1 hover:bg-black/5 rounded-full" onClick={() => setRightSidebarOpen(false)}>
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        {!selectedSection ? (
          <div className="text-center text-black/40 mt-16">
            <Settings className="w-10 h-10 opacity-30 mx-auto mb-4" />
            <p className="font-black uppercase tracking-widest text-xs">No section selected</p>
            <p className="font-bold text-[10px] mt-2 max-w-[200px] mx-auto leading-relaxed">Click any section on the canvas to inspect and configure its content, styles, and settings.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="font-black uppercase tracking-tighter text-xl leading-none">{selectedSection.type}</h3>
              <p className="font-bold text-[9px] text-black/40 uppercase tracking-widest mt-1.5">Section Config</p>
            </div>

            {/* Inspector sub-tabs */}
            <div className="flex border-2 border-black rounded-lg p-0.5 bg-[#F8F5F2]">
              {(['content', 'style', 'settings'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setEditSubTab(tab)}
                  className={`flex-1 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-md transition-all ${editSubTab === tab ? 'bg-black text-white' : 'text-black/50 hover:text-black hover:bg-black/5'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Tab */}
            {editSubTab === 'content' && (
              <div className="space-y-5">
                {COMPONENT_SCHEMAS[selectedSection.type].fields.map((field: any) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="font-black uppercase tracking-widest text-[9px] text-black/60">{field.label}</label>
                    
                    {field.type === 'text' && (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            value={selectedSection.props[field.name] || ''}
                            onChange={(e) => handleUpdateProp(selectedSection.id, field.name, e.target.value)}
                            className="flex-1 bg-[#F8F5F2] border-2 border-black rounded-lg px-3 py-2 font-bold text-xs focus:outline-none"
                          />
                          {(field.name.toLowerCase().includes('image') || field.name.toLowerCase().includes('url') || field.name === 'bgImage') && (
                            <button
                              onClick={() => {
                                setMediaSelectorTarget({ id: selectedSection.id, propName: field.name });
                                setActiveLeftTool('media');
                              }}
                              className="bg-black text-white px-3 py-2 rounded-lg font-black uppercase tracking-widest text-[9px] hover:bg-black/90 active:scale-95 transition-all flex items-center gap-1 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
                              title="Choose from Media Library"
                            >
                              <Globe className="w-3.5 h-3.5" /> Select
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {field.type === 'textarea' && (
                      <textarea 
                        value={selectedSection.props[field.name] || ''}
                        onChange={(e) => handleUpdateProp(selectedSection.id, field.name, e.target.value)}
                        className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-3 py-2 font-bold text-xs min-h-[100px] resize-y focus:outline-none focus:bg-white"
                      />
                    )}

                    {field.type === 'array' && (
                      <div className="space-y-4">
                        {(selectedSection.props[field.name] || []).map((item: any, idx: number) => (
                          <div key={idx} className="p-4 border-2 border-black/20 rounded-xl bg-black/5 relative group">
                            <button 
                              onClick={() => handleRemoveArrayItem(selectedSection.id, field.name, idx)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-md border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                            <div className="font-black uppercase tracking-widest text-[9px] text-black/40 mb-3 border-b-2 border-black/10 pb-1">Item {idx + 1}</div>
                            <div className="space-y-3">
                              {field.arrayFields.map((arrField: any) => (
                                <div key={arrField.name} className="flex flex-col gap-1">
                                  <label className="font-bold uppercase tracking-widest text-[9px] text-black/60">{arrField.label}</label>
                                  <div className="flex gap-2">
                                    <input 
                                      type="text" 
                                      value={item[arrField.name] || ''}
                                      onChange={(e) => handleUpdateArrayProp(selectedSection.id, field.name, idx, arrField.name, e.target.value)}
                                      className="flex-1 bg-white border-2 border-black/20 rounded-md px-2 py-1.5 font-bold text-[10px] focus:outline-none"
                                    />
                                    {(arrField.name.toLowerCase().includes('image') || arrField.name.toLowerCase().includes('url')) && (
                                      <button
                                        onClick={() => {
                                          setMediaSelectorTarget({ id: selectedSection.id, propName: field.name, index: idx, fieldName: arrField.name });
                                          setActiveLeftTool('media');
                                        }}
                                        className="bg-black text-white px-2.5 py-1.5 rounded-md font-black uppercase tracking-widest text-[8px] hover:bg-black/90 active:scale-95 transition-all flex items-center gap-1 shrink-0"
                                        title="Choose from Media Library"
                                      >
                                        <Globe className="w-3 h-3" /> Select
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        <button 
                          onClick={() => handleAddArrayItem(selectedSection.id, field.name, field.arrayFields)}
                          className="w-full py-2 border-2 border-dashed border-black/30 text-black/60 font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-black/5 transition-all hover:border-black"
                        >
                          + Add {field.label}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Style Tab */}
            {editSubTab === 'style' && (
              <div className="space-y-5">
                {/* Spacing */}
                <div className="space-y-3">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Vertical Spacing</label>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-[9px] font-bold text-black/50">
                      <span>Top Padding: {(selectedSection.styleOverrides?.paddingTop || '32px')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="160" 
                      step="8"
                      value={parseInt(selectedSection.styleOverrides?.paddingTop || '32')}
                      onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'paddingTop', `${e.target.value}px`)}
                      className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-[9px] font-bold text-black/50">
                      <span>Bottom Padding: {(selectedSection.styleOverrides?.paddingBottom || '32px')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="160" 
                      step="8"
                      value={parseInt(selectedSection.styleOverrides?.paddingBottom || '32')}
                      onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'paddingBottom', `${e.target.value}px`)}
                      className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>
                </div>

                {/* Alignment */}
                <div className="space-y-2">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Text Alignment</label>
                  <div className="flex border-2 border-black rounded-lg p-0.5 bg-[#F8F5F2] w-fit">
                    {[
                      { align: 'left', icon: AlignLeft },
                      { align: 'center', icon: AlignCenter },
                      { align: 'right', icon: AlignRight }
                    ].map(item => (
                      <button
                        key={item.align}
                        onClick={() => handleUpdateStyleOverride(selectedSection.id, 'textAlign', item.align)}
                        className={`p-2 rounded transition-all ${selectedSection.styleOverrides?.textAlign === item.align ? 'bg-black text-white' : 'text-black/50 hover:text-black hover:bg-black/5'}`}
                      >
                        <item.icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background Colors */}
                <div className="space-y-3">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Background Color</label>
                  <div className="grid grid-cols-4 gap-2">
                    {COLOR_PRESETS.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => handleUpdateStyleOverride(selectedSection.id, 'backgroundColor', color.value)}
                        className={`w-full aspect-square rounded-lg border-2 flex items-center justify-center transition-all ${selectedSection.styleOverrides?.backgroundColor === color.value ? 'border-black scale-105 shadow-md' : 'border-black/10 hover:border-black/30'}`}
                        style={{ backgroundColor: color.value === 'transparent' ? 'transparent' : color.value }}
                        title={color.name}
                      >
                        {color.value === 'transparent' && <span className="text-[9px] font-black uppercase text-black/40">X</span>}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={selectedSection.styleOverrides?.backgroundColor || ''}
                    onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'backgroundColor', e.target.value)}
                    placeholder="Custom Hex (e.g. #FFF)"
                    className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-2.5 py-1.5 font-mono text-[10px] focus:outline-none"
                  />
                </div>

                {/* Border Control */}
                <div className="space-y-3">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Border Width & Color</label>
                  
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-[9px] font-bold text-black/50">
                      <span>Width: {selectedSection.styleOverrides?.borderWidth || '0px'}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="12" 
                      step="1"
                      value={parseInt(selectedSection.styleOverrides?.borderWidth || '0')}
                      onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'borderWidth', `${e.target.value}px`)}
                      className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>

                  <input
                    type="text"
                    value={selectedSection.styleOverrides?.borderColor || ''}
                    onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'borderColor', e.target.value)}
                    placeholder="Border Hex (e.g. #000)"
                    className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-2.5 py-1.5 font-mono text-[10px] focus:outline-none"
                  />
                </div>

                {/* Shadows */}
                <div className="space-y-2">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Shadow Type</label>
                  <div className="grid grid-cols-3 gap-1">
                    {['none', 'sm', 'md', 'lg', 'xl'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => handleUpdateStyleOverride(selectedSection.id, 'shadowSize', sz)}
                        className={`py-1.5 text-[8px] font-black uppercase rounded border-2 transition-all ${selectedSection.styleOverrides?.shadowSize === sz ? 'bg-black text-white border-black' : 'border-black/10 hover:border-black/30'}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {editSubTab === 'settings' && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Button Label Override</label>
                  <input 
                    type="text" 
                    value={selectedSection.styleOverrides?.buttonText || ''}
                    onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'buttonText', e.target.value)}
                    className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-3 py-2 font-bold text-xs focus:outline-none"
                    placeholder="e.g. Learn More"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Button Link Target</label>
                  <input 
                    type="text" 
                    value={selectedSection.styleOverrides?.buttonLink || ''}
                    onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'buttonLink', e.target.value)}
                    className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-3 py-2 font-bold text-xs focus:outline-none"
                    placeholder="/contact or external URL"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-black uppercase tracking-widest text-[9px] text-black/60">Custom Class Names</label>
                  <input 
                    type="text" 
                    value={selectedSection.styleOverrides?.customClass || ''}
                    onChange={(e) => handleUpdateStyleOverride(selectedSection.id, 'customClass', e.target.value)}
                    className="w-full bg-[#F8F5F2] border-2 border-black rounded-lg px-3 py-2 font-mono text-xs focus:outline-none"
                    placeholder="neo-btn hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

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
                   <Renderer {...section.props} buttonText={overrides.buttonText || section.props.buttonText} />
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
      <div key={siteName} className="h-full flex flex-col bg-[#F8F5F2] font-sans selection:bg-black selection:text-white">
        
        {/* Dynamic style tag for editor canvas overrides */}
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
            font-family: ${
              globalTheme.fontFamily === 'Space Grotesk' ? '"Space Grotesk", sans-serif !important' :
              globalTheme.fontFamily === 'Serif' ? 'Georgia, serif !important' :
              globalTheme.fontFamily === 'Mono' ? 'monospace !important' :
              '"Space Grotesk", sans-serif !important'
            };
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
        `}} />

        {/* Header */}
        <header className="px-6 py-4 bg-black text-white flex items-center justify-between z-50 shrink-0">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-black uppercase tracking-widest text-[10px]"
            >
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
            </button>
            <div className="hidden md:block w-[1px] h-4 bg-white/20" />
            <div className="hidden md:flex flex-col">
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Live Editor</span>
              <span className="text-xs font-black uppercase tracking-widest">{siteName}</span>
            </div>
          </div>

          {/* Viewport controls */}
          <div className="flex items-center gap-2 bg-white/10 p-1 rounded-lg">
            <button 
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded transition-colors ${viewport === 'desktop' ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded transition-colors ${viewport === 'tablet' ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded transition-colors ${viewport === 'mobile' ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/20'}`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button 
              className="flex items-center gap-2 bg-white/10 text-white border-2 border-white/20 px-4 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-white/25 transition-all cursor-pointer"
              onClick={() => setIsPreviewing(true)}
            >
              <Eye className="w-4 h-4" /> <span className="hidden md:inline">Preview</span>
            </button>
            {onPublish && (
              <button 
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-green-600 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)] cursor-pointer border-2 border-green-400"
                onClick={() => onPublish(sections, globalTheme)}
              >
                <Rocket className="w-4 h-4" /> <span className="hidden md:inline">Publish</span>
              </button>
            )}
            <button 
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-white/90 transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.2)] cursor-pointer"
              onClick={() => {
                if (onSave) {
                  onSave(sections, globalTheme);
                } else {
                  alert("Site saved successfully!");
                }
              }}
            >
              <Save className="w-4 h-4" /> <span className="hidden md:inline">Save</span>
            </button>
          </div>
        </header>

        {/* Editor Body */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Far Left Vertical Toolbar */}
          <aside className="w-16 bg-stone-900 border-r-[4px] border-black flex flex-col items-center py-6 gap-6 z-50 shrink-0 select-none">
            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'add' ? null : 'add'); setMediaSelectorTarget(null); }}
              className={`p-3 rounded-xl border-2 transition-all shadow-md ${activeLeftTool === 'add' ? 'bg-white text-black border-white' : 'text-white/60 hover:text-white hover:bg-white/10 border-transparent'}`}
              title="Add Block"
            >
              <Plus className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'media' ? null : 'media'); }}
              className={`p-3 rounded-xl border-2 transition-all shadow-md ${activeLeftTool === 'media' ? 'bg-white text-black border-white' : 'text-white/60 hover:text-white hover:bg-white/10 border-transparent'}`}
              title="Media Library"
            >
              <ImageIcon className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'cms' ? null : 'cms'); setMediaSelectorTarget(null); }}
              className={`p-3 rounded-xl border-2 transition-all shadow-md ${activeLeftTool === 'cms' ? 'bg-white text-black border-white' : 'text-white/60 hover:text-white hover:bg-white/10 border-transparent'}`}
              title="Content CMS"
            >
              <Database className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'ecommerce' ? null : 'ecommerce'); setMediaSelectorTarget(null); }}
              className={`p-3 rounded-xl border-2 transition-all shadow-md ${activeLeftTool === 'ecommerce' ? 'bg-white text-black border-white' : 'text-white/60 hover:text-white hover:bg-white/10 border-transparent'}`}
              title="E-Commerce"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>

            <button 
              onClick={() => { setActiveLeftTool(activeLeftTool === 'theme' ? null : 'theme'); setMediaSelectorTarget(null); }}
              className={`p-3 rounded-xl border-2 transition-all shadow-md ${activeLeftTool === 'theme' ? 'bg-white text-black border-white' : 'text-white/60 hover:text-white hover:bg-white/10 border-transparent'}`}
              title="Global Styles"
            >
              <Paintbrush className="w-5 h-5" />
            </button>
          </aside>

          {/* Left Drawer */}
          <AnimatePresence>
            {activeLeftTool && (
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute lg:relative left-16 lg:left-0 top-0 bottom-0 w-80 bg-white border-r-[4px] border-black flex flex-col z-40 overflow-hidden shadow-[10px_0px_0px_rgba(0,0,0,0.05)]"
              >
                <div className="p-4 border-b-[4px] border-black flex items-center justify-between shrink-0 bg-stone-100 select-none">
                  <span className="font-black uppercase tracking-widest text-[10px]">
                    {activeLeftTool === 'add' ? 'Add Section' : 
                     activeLeftTool === 'media' ? 'Media Library' : 
                     activeLeftTool === 'cms' ? 'Content CMS' : 
                     activeLeftTool === 'ecommerce' ? 'E-Commerce' : 'Global Theme'}
                  </span>
                  <button 
                    onClick={() => { setActiveLeftTool(null); setMediaSelectorTarget(null); }}
                    className="p-1 hover:bg-black/5 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5">
                  {activeLeftTool === 'add' ? renderAddPanel() : 
                   activeLeftTool === 'media' ? renderMediaPanel() : 
                   activeLeftTool === 'cms' ? renderCmsPanel() : 
                   activeLeftTool === 'ecommerce' ? renderEcommercePanel() : renderThemePanel()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Canvas Preview */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 p-4 lg:p-8 flex items-start justify-center w-full select-none" ref={canvasContainerRef}>
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
                className="@container border-[4px] border-black shadow-[16px_16px_0px_rgba(0,0,0,0.1)] flex flex-col transition-all duration-300 ease-in-out origin-top-left shrink-0 absolute top-0 left-0"
                style={{
                  width: viewport === 'desktop' ? '1200px' : viewport === 'tablet' ? '768px' : '375px',
                  maxWidth: 'none',
                  minHeight: '100%',
                  transform: `scale(${scale})`,
                  backgroundColor: globalTheme.pageBackground
                }}
              >
                {/* Topbar browser chrome mockup */}
                <div className="w-full h-8 bg-black/5 border-b-[4px] border-black flex items-center px-4 gap-2 shrink-0 bg-white">
                   <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-black" />
                   <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
                </div>
                
                {/* Drop Zone Sections */}
                <div className="w-full flex-1 pb-32">
                  {sections.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center text-black/40">
                       <LayoutTemplate className="w-12 h-12 mb-4 opacity-50" />
                       <p className="font-black uppercase tracking-widest text-sm">No sections yet</p>
                       <p className="font-bold text-xs mt-2 text-center px-6">Drag sections from the left panel and drop them here, or click to add</p>
                    </div>
                  ) : (
                    <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
                      {sections.map((section) => (
                        <SortableSection 
                          key={section.id} 
                          section={section} 
                          scale={scale}
                          isSelected={selectedSectionId === section.id}
                          onClick={() => {
                            setSelectedSectionId(section.id);
                            setRightSidebarOpen(true);
                          }}
                          onRemove={() => removeSection(section.id)}
                        />
                      ))}
                    </SortableContext>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Floating trigger for Inspector (Mobile / Tablet) */}
          <button 
             className="xl:hidden absolute bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-[6px_6px_0px_rgba(0,0,0,0.3)] z-30 flex items-center justify-center border-2 border-white hover:scale-105 active:scale-95 transition-all animate-bounce"
             onClick={() => setRightSidebarOpen(true)}
             title="Open Inspector"
          >
             <SlidersHorizontal className="w-5 h-5" />
          </button>

          {/* Right Inspector Sidebar (Responsive Drawer) */}
          <aside className={`
            fixed xl:static inset-y-0 right-0 w-[85vw] max-w-[340px] xl:w-[340px] bg-white xl:border-l-[4px] border-black flex flex-col shrink-0 z-50 overflow-hidden transition-transform duration-300
            ${rightSidebarOpen ? 'translate-x-0 border-l-[4px] shadow-[-10px_0px_0px_rgba(0,0,0,0.05)]' : 'translate-x-[105%] xl:translate-x-0'}
          `}>
            {renderInspector()}
          </aside>

          {/* Overlay to dismiss right sidebar on mobile */}
          {rightSidebarOpen && (
             <div 
               className="absolute inset-0 bg-black/10 z-40 xl:hidden"
               onClick={() => setRightSidebarOpen(false)}
             />
          )}

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

      </div>
    </DndContext>
  );
}
