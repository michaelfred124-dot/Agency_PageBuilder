import React from 'react';
import { useBentoContext } from '../lib/bentoStore';
import { Trash2, X, Maximize2, Move, Square, Type, Image as ImageIcon, MapPin, MousePointer2 } from 'lucide-react';
import { WidgetSize } from '../types/bento';
import { getVariantOptions } from '../lib/bentoVariants';
import { getSectionDef, resolveSectionProps } from '../lib/bentoSections';
import { DeleteConfirmModal } from './DeleteConfirmModal';

export const FloatingEditor: React.FC = () => {
  const { selectedWidgetId, widgets, updateWidget, removeWidget, insertRowAbove, setSelectedWidgetId, isEditing, setIsEditing } = useBentoContext();

  const widget = widgets.find(w => w.id === selectedWidgetId);
  const [activeTab, setActiveTab] = React.useState<'content' | 'style'>('content');
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);

  if (!widget || !isEditing) return null;

  const sizes: WidgetSize[] = ['small', 'wide', 'tall', 'large'];
  const variantOptions = getVariantOptions(widget);

  const sectionDef = widget.type === 'edi-section' ? getSectionDef(widget.sectionKey) : undefined;
  const widgetLabel = sectionDef ? sectionDef.label : widget.type.charAt(0).toUpperCase() + widget.type.slice(1);

  return (
    <div className="h-full w-full sm:w-[400px] bg-white/95 backdrop-blur-3xl border border-black/5 sm:rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] overflow-hidden pointer-events-auto flex flex-col">
        <div className="px-7 pt-6 pb-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shrink-0">
              <Type className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <span className="block font-bold text-sm tracking-tight text-black truncate">{widgetLabel} Block</span>
              <span className="block text-[10px] font-semibold text-black/35 uppercase tracking-widest">Editing</span>
            </div>
          </div>
          <button
            onClick={() => {
              setSelectedWidgetId(null);
              setIsEditing(false);
            }}
            className="p-2.5 hover:bg-black/5 rounded-full transition-colors shrink-0"
          >
            <X className="w-4 h-4 text-black/50" />
          </button>
        </div>

        <div className="px-7 shrink-0">
          <div className="flex gap-1 bg-black/[0.04] rounded-2xl p-1">
            {(['content', 'style'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-white text-black shadow-sm' : 'text-black/40 hover:text-black/60'
                }`}
              >
                {tab === 'content' ? 'Content' : 'Style'}
              </button>
            ))}
          </div>
        </div>

        <div className="p-7 space-y-6 flex-1 min-h-0 overflow-y-auto scrollbar-hide">
          {activeTab === 'style' && (
          <>
          {/* Layout Variant Selector */}
          {variantOptions && (
            <div>
              <label className="block text-[10px] font-bold text-black/30 mb-3 uppercase tracking-widest">Layout Variant</label>
              <div className="grid grid-cols-1 gap-2">
                {variantOptions.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => updateWidget(widget.id, { variant: v.id })}
                    className={`py-2 px-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all text-left ${(widget.variant ?? variantOptions[0].id) === v.id ? 'bg-black text-white border-black shadow-lg' : 'bg-black/5 border-black/10 hover:border-black/20 text-black/60'}`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          <div>
            <label className="block text-[10px] font-bold text-black/30 mb-3 uppercase tracking-widest">Layout Size</label>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => updateWidget(widget.id, { size: s })}
                  className={`py-2 px-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${widget.size === s ? 'bg-black text-white border-black shadow-lg' : 'bg-black/5 border-black/10 hover:border-black/20 text-black/60'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-[10px] font-bold text-black/30 uppercase tracking-widest">Corner Radius</label>
              <span className="text-[10px] font-bold text-black/40">{(widget.borderRadius ?? 20)}px</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="64" 
              value={widget.borderRadius ?? 20}
              onChange={(e) => updateWidget(widget.id, { borderRadius: parseInt(e.target.value) })}
              className="w-full accent-black"
            />
          </div>

          {/* Shadows */}
          <div>
            <label className="block text-[10px] font-bold text-black/30 mb-3 uppercase tracking-widest">Drop Shadow</label>
            <div className="grid grid-cols-4 gap-2">
              {(['none', 'soft', 'medium', 'hard'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => updateWidget(widget.id, { shadow: s })}
                  className={`py-2 rounded-xl border text-[8px] font-bold uppercase tracking-tighter transition-all ${widget.shadow === s ? 'bg-black text-white border-black' : 'bg-black/5 border-black/10 text-black/40'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Background & Border Controls */}
          <div className="border-t border-black/5 pt-4 space-y-4">
            <h4 className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-2">Block Style</h4>
            
            {/* Show Background Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold text-black/60 uppercase tracking-widest">Card Background</label>
              <button 
                onClick={() => updateWidget(widget.id, { showBackground: widget.showBackground !== undefined ? !widget.showBackground : false })}
                className={`w-12 h-6 rounded-full p-1 transition-all ${
                  (widget.showBackground !== undefined ? widget.showBackground : (widget.type !== 'image' && widget.type !== 'map' && widget.type !== 'embed'))
                    ? 'bg-black' 
                    : 'bg-black/10'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                  (widget.showBackground !== undefined ? widget.showBackground : (widget.type !== 'image' && widget.type !== 'map' && widget.type !== 'embed'))
                    ? 'translate-x-6' 
                    : 'translate-x-0'
                }`} />
              </button>
            </div>

            {/* Custom Background Color Picker */}
            {(widget.showBackground !== undefined ? widget.showBackground : (widget.type !== 'image' && widget.type !== 'map' && widget.type !== 'embed')) && (
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-black/40 uppercase tracking-widest">Background Color</label>
                <div className="flex gap-2">
                  <input 
                    type="color" 
                    value={widget.backgroundColor && widget.backgroundColor.startsWith('#') ? widget.backgroundColor : '#ffffff'} 
                    onChange={(e) => updateWidget(widget.id, { backgroundColor: e.target.value })}
                    className="w-10 h-10 border border-black/10 rounded-xl cursor-pointer bg-transparent p-0"
                  />
                  <input 
                    type="text" 
                    value={widget.backgroundColor ?? 'rgba(255,255,255,0.9)'} 
                    onChange={(e) => updateWidget(widget.id, { backgroundColor: e.target.value })}
                    className="flex-1 bg-black/5 border border-black/10 rounded-xl px-3 text-xs font-mono text-black"
                    placeholder="e.g. #ffffff or rgba(...)"
                  />
                </div>
              </div>
            )}

            {/* Show Border Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-black/[0.03]">
              <label className="text-[10px] font-bold text-black/60 uppercase tracking-widest">Card Border</label>
              <button 
                onClick={() => updateWidget(widget.id, { showBorder: !widget.showBorder })}
                className={`w-12 h-6 rounded-full p-1 transition-all ${widget.showBorder ? 'bg-black' : 'bg-black/10'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${widget.showBorder ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Custom Border Configuration */}
            {widget.showBorder && (
              <div className="space-y-3 bg-black/[0.02] p-3 rounded-2xl border border-black/[0.03]">
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-black/40 uppercase tracking-widest">Border Color</label>
                  <div className="flex gap-2">
                    <input 
                      type="color" 
                      value={widget.borderColor && widget.borderColor.startsWith('#') ? widget.borderColor : '#000000'} 
                      onChange={(e) => updateWidget(widget.id, { borderColor: e.target.value })}
                      className="w-8 h-8 border border-black/10 rounded-xl cursor-pointer bg-transparent p-0"
                    />
                    <input 
                      type="text" 
                      value={widget.borderColor ?? '#000000'} 
                      onChange={(e) => updateWidget(widget.id, { borderColor: e.target.value })}
                      className="flex-1 bg-white border border-black/10 rounded-xl px-3 text-xs font-mono text-black"
                      placeholder="#000000"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[10px] font-bold text-black/40 uppercase tracking-widest">Border Width</label>
                    <span className="text-[10px] font-bold text-black/50">{(widget.borderWidth ?? 1)}px</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={widget.borderWidth ?? 1}
                    onChange={(e) => updateWidget(widget.id, { borderWidth: parseInt(e.target.value) })}
                    className="w-full accent-black"
                  />
                </div>
              </div>
            )}
          </div>
          </>
          )}

          {/* Contextual Content Fields */}
          {activeTab === 'content' && (
          <div className="space-y-4">
            {/* Template Section Widget — fields generated from the section schema */}
            {widget.type === 'edi-section' && sectionDef && (
              <>
                <p className="text-[9px] text-black/40 leading-snug -mt-1">
                  This block is a full <strong className="text-black/60">{sectionDef.templateName}</strong> template section. Edit its content below.
                </p>
                {sectionDef.fields.map((field) => {
                  const currentValue = resolveSectionProps(widget)[field.name] ?? '';
                  const setValue = (v: string) => updateWidget(widget.id, { sectionProps: { ...(widget.sectionProps ?? {}), [field.name]: v } });
                  return (
                    <div key={field.name}>
                      <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <textarea
                          value={currentValue}
                          onChange={(e) => setValue(e.target.value)}
                          className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[80px] text-black resize-y"
                        />
                      ) : (
                        <input
                          type="text"
                          value={currentValue}
                          onChange={(e) => setValue(e.target.value)}
                          className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                        />
                      )}
                    </div>
                  );
                })}
              </>
            )}

            {/* Header Widget */}
            {widget.type === 'header' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Biography</label>
                  <textarea 
                    value={widget.content ?? ''}
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[80px] resize-none text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Profile Picture URL</label>
                  <input 
                    type="text" 
                    value={widget.image ?? ''}
                    placeholder="https://images.unsplash.com/..."
                    onChange={(e) => updateWidget(widget.id, { image: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* FAQ Widget */}
            {widget.type === 'faq' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Section Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    placeholder="e.g. FREQUENTLY ASKED QUESTIONS"
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-1 uppercase tracking-widest">Accordion Items</label>
                  <p className="text-[9px] text-black/40 mb-2 leading-snug">Separate questions and answers with a vertical bar (<strong className="text-black">|</strong>) and separate different items with double semicolons (<strong className="text-black">;;</strong>).</p>
                  <textarea 
                    value={widget.content ?? ''}
                    placeholder="Q: Free Shipping? | A: Yes, over $150! ;; Q: Return Policy? | A: 30 days hassle-free."
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[100px] text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Help Center CTA Button (Optional)</label>
                  <input 
                    type="text" 
                    value={widget.ctaText ?? ''}
                    placeholder="e.g. Contact Support"
                    onChange={(e) => updateWidget(widget.id, { ctaText: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* Menu Widget */}
            {widget.type === 'menu' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Menu Name</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Navigation Links (Comma-separated)</label>
                  <input 
                    type="text" 
                    value={widget.content ?? ''}
                    placeholder="Home, Men, Women, Collections, Sale"
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </div>
            )}

            {/* Embed Widget */}
            {widget.type === 'embed' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Embed Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Subtext / Artist</label>
                  <input 
                    type="text" 
                    value={widget.content ?? ''}
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Spotify or YouTube URL</label>
                  <input 
                    type="text" 
                    value={widget.url ?? ''}
                    placeholder="https://open.spotify.com/track/..."
                    onChange={(e) => updateWidget(widget.id, { url: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* Text Widget */}
            {widget.type === 'text' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Header Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Body Text</label>
                  <textarea 
                    value={widget.content ?? ''}
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[100px] text-black resize-y"
                  />
                </div>
              </>
            )}

            {/* Blog Widget */}
            {widget.type === 'blog' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Post Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Excerpt</label>
                  <textarea 
                    value={widget.content ?? ''}
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[80px] resize-none text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Category</label>
                  <input 
                    type="text" 
                    value={widget.category ?? ''}
                    placeholder="e.g. Music, Tech, Travel"
                    onChange={(e) => updateWidget(widget.id, { category: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* Newsletter Widget */}
            {widget.type === 'newsletter' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Headline Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Description</label>
                  <textarea 
                    value={widget.content ?? ''}
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[60px] resize-none text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Button Text</label>
                  <input 
                    type="text" 
                    value={widget.ctaText ?? ''}
                    onChange={(e) => updateWidget(widget.id, { ctaText: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* Testimonial Widget */}
            {widget.type === 'testimonial' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Quote Text</label>
                  <textarea 
                    value={widget.content ?? ''}
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[80px] resize-none text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Author Name</label>
                  <input 
                    type="text" 
                    value={widget.author ?? ''}
                    onChange={(e) => updateWidget(widget.id, { author: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Role / Company</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

             {/* Button Widget */}
            {widget.type === 'button' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Sub-header / Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    placeholder="e.g. GET STARTED NOW"
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Tagline / Description</label>
                  <textarea 
                    value={widget.content ?? ''}
                    placeholder="e.g. Join thousands of creators getting early access to seasonal shoe launches."
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black min-h-[70px]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Button Text</label>
                  <input 
                    type="text" 
                    value={widget.ctaText ?? ''}
                    placeholder="e.g. Claim Your Spot"
                    onChange={(e) => updateWidget(widget.id, { ctaText: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Link URL</label>
                  <input 
                    type="text" 
                    value={widget.url ?? ''}
                    placeholder="https://..."
                    onChange={(e) => updateWidget(widget.id, { url: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <label className="text-[10px] font-bold text-black/30 uppercase tracking-widest">Open in new tab</label>
                  <button 
                    onClick={() => updateWidget(widget.id, { openInNewTab: !widget.openInNewTab })}
                    className={`w-12 h-6 rounded-full p-1 transition-all ${widget.openInNewTab ? 'bg-black' : 'bg-black/10'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${widget.openInNewTab ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              </>
            )}

             {/* Image Widget */}
            {widget.type === 'image' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Image URL</label>
                  <input 
                    type="text" 
                    value={widget.image ?? ''}
                    placeholder="https://images.unsplash.com/..."
                    onChange={(e) => updateWidget(widget.id, { image: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Overlay Title (Optional)</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    placeholder="e.g. Stylish shoes for Women"
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Overlay CTA Button (Optional)</label>
                  <input 
                    type="text" 
                    value={widget.content ?? ''}
                    placeholder="e.g. SHOP NOW"
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Clickable Link URL (Optional)</label>
                  <input 
                    type="text" 
                    value={widget.url ?? ''}
                    placeholder="https://..."
                    onChange={(e) => updateWidget(widget.id, { url: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <label className="text-[10px] font-bold text-black/30 uppercase tracking-widest">Open in new tab</label>
                  <button 
                    onClick={() => updateWidget(widget.id, { openInNewTab: !widget.openInNewTab })}
                    className={`w-12 h-6 rounded-full p-1 transition-all ${widget.openInNewTab ? 'bg-black' : 'bg-black/10'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-all ${widget.openInNewTab ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              </>
            )}

            {/* Gallery Widget */}
            {widget.type === 'gallery' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Gallery Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    placeholder="e.g. LIFESTYLE SHOTS"
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Subtitle / Label</label>
                  <input 
                    type="text" 
                    value={widget.content ?? ''}
                    placeholder="e.g. CURATED SPRING 2026"
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-1 uppercase tracking-widest">Images (Comma-separated URLs)</label>
                  <p className="text-[9px] text-black/40 mb-2 leading-snug">Add raw image links separated by commas to load them as high-definition carousel slides.</p>
                  <textarea 
                    value={widget.images?.join(', ') ?? ''}
                    placeholder="https://images.unsplash.com/photo-1..., https://images.unsplash.com/photo-2..."
                    onChange={(e) => {
                      const urls = e.target.value.split(',').map(u => u.trim()).filter(Boolean);
                      updateWidget(widget.id, { images: urls });
                    }}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 min-h-[100px] text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">CTA Button Text (Optional)</label>
                  <input 
                    type="text" 
                    value={widget.ctaText ?? ''}
                    placeholder="e.g. VIEW COLLECTION"
                    onChange={(e) => updateWidget(widget.id, { ctaText: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* Product Widget */}
            {widget.type === 'product' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Product Name</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    placeholder="e.g. Retro Running Green"
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Category / Tag</label>
                  <input 
                    type="text" 
                    value={widget.content ?? ''}
                    placeholder="e.g. Men's Running"
                    onChange={(e) => updateWidget(widget.id, { content: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Price Tag</label>
                  <input 
                    type="text" 
                    value={widget.category ?? ''}
                    placeholder="e.g. $99.00"
                    onChange={(e) => updateWidget(widget.id, { category: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Image URL</label>
                  <input 
                    type="text" 
                    value={widget.image ?? ''}
                    placeholder="https://images.unsplash.com/..."
                    onChange={(e) => updateWidget(widget.id, { image: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Button CTA</label>
                  <input 
                    type="text" 
                    value={widget.ctaText ?? ''}
                    placeholder="e.g. Add to Cart"
                    onChange={(e) => updateWidget(widget.id, { ctaText: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}

            {/* Social Widget */}
            {widget.type === 'social' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Widget Title</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold text-black/30 uppercase tracking-widest">Social Accounts</label>
                  {['Twitter', 'Instagram', 'GitHub', 'LinkedIn'].map((platform) => {
                    const links = widget.socialLinks ?? [];
                    const foundLink = links.find(l => l.platform.toLowerCase() === platform.toLowerCase());
                    const currentUrl = foundLink ? foundLink.url : '';
                    
                    return (
                      <div key={platform} className="space-y-1 bg-black/[0.02] p-3 rounded-2xl border border-black/[0.03]">
                        <span className="text-[10px] font-bold text-black/60">{platform}</span>
                        <input 
                          type="text" 
                          value={currentUrl}
                          placeholder={`https://${platform.toLowerCase()}.com/username`}
                          onChange={(e) => {
                            const newLinks = [...links];
                            const idx = newLinks.findIndex(l => l.platform.toLowerCase() === platform.toLowerCase());
                            if (idx !== -1) {
                              if (e.target.value.trim() === '') {
                                newLinks.splice(idx, 1);
                              } else {
                                newLinks[idx] = { platform, url: e.target.value };
                              }
                            } else if (e.target.value.trim() !== '') {
                              newLinks.push({ platform, url: e.target.value });
                            }
                            updateWidget(widget.id, { socialLinks: newLinks });
                          }}
                          className="w-full bg-white/50 border border-black/5 rounded-xl p-2.5 text-xs focus:outline-none focus:border-black/20 transition-all text-black"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Map Widget */}
            {widget.type === 'map' && (
              <>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Map Header Label</label>
                  <input 
                    type="text" 
                    value={widget.title ?? ''}
                    onChange={(e) => updateWidget(widget.id, { title: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-black/30 mb-2 uppercase tracking-widest">Location Address</label>
                  <input 
                    type="text" 
                    value={widget.location ?? ''}
                    placeholder="e.g. San Francisco, CA"
                    onChange={(e) => updateWidget(widget.id, { location: e.target.value })}
                    className="w-full bg-black/5 border border-black/10 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-black/20 transition-all text-black"
                  />
                </div>
              </>
            )}
          </div>
          )}
        </div>

        <div className="p-5 bg-black/[0.03] border-t border-black/5 flex gap-2.5 shrink-0">
          <button
            onClick={() => insertRowAbove(widget.gridY || 1)}
            className="flex-1 py-3.5 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            Insert Row
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="flex-1 py-3.5 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete
          </button>
        </div>

        <DeleteConfirmModal
          isOpen={showDeleteConfirm}
          itemType="Block"
          itemName={widget.title || widget.type}
          onConfirm={() => {
            removeWidget(widget.id);
            setShowDeleteConfirm(false);
            setSelectedWidgetId(null);
            setIsEditing(false);
          }}
          onCancel={() => setShowDeleteConfirm(false)}
        />
    </div>
  );
};
