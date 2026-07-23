'use client';

import React, { useState } from 'react';
import { Type, Image as ImageIcon, Link2, Palette, Layout as LayoutIcon, Box } from 'lucide-react';

interface PropertiesPanelProps {
  blockId: string | null;
  viewport: 'desktop' | 'tablet' | 'mobile';
}

export function PropertiesPanel({ blockId, viewport }: PropertiesPanelProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'style'>('content');

  if (!blockId) {
    return (
      <aside className="w-80 bg-white border-l border-gray-200 flex flex-col items-center justify-center text-gray-400 p-6 text-center shrink-0">
        <Box size={32} className="mb-4 text-gray-300" />
        <p className="text-sm">Select a block on the canvas to view and edit its properties.</p>
      </aside>
    );
  }

  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col shrink-0">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
        <div className="font-semibold text-sm text-gray-800">
          {blockId.charAt(0).toUpperCase() + blockId.slice(1).replace('-', ' ')}
        </div>
        <div className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded font-medium uppercase tracking-wider">
          {viewport}
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        <button 
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider ${activeTab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>
        <button 
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider ${activeTab === 'style' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('style')}
        >
          Style
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {activeTab === 'content' && (
          <>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Type size={16} className="text-gray-400" /> Headline
              </label>
              <textarea 
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                rows={3}
                defaultValue="We build beautiful Next.js sites."
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Type size={16} className="text-gray-400" /> Subtitle
              </label>
              <textarea 
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                rows={2}
                defaultValue="Drag and drop your way to a perfect portfolio."
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Link2 size={16} className="text-gray-400" /> Button Label
              </label>
              <input 
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                defaultValue="Get Started"
              />
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <ImageIcon size={16} className="text-gray-400" /> Background Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <ImageIcon size={24} className="mx-auto text-gray-400 mb-2" />
                <span className="text-sm text-gray-500 font-medium">Click to upload or search</span>
              </div>
            </div>
          </>
        )}

        {activeTab === 'style' && (
          <>
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <Palette size={16} className="text-gray-400" /> Background Color
              </label>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded border border-gray-200 bg-indigo-50 cursor-pointer shadow-sm"></div>
                <input 
                  type="text"
                  className="flex-1 border border-gray-300 rounded-md p-1.5 text-sm uppercase font-mono text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                  defaultValue="#EEF2FF"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <LayoutIcon size={16} className="text-gray-400" /> Spacing (Y-Axis)
              </label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <span className="text-xs text-gray-500 block mb-1">Top</span>
                  <input type="number" className="w-full border border-gray-300 rounded-md p-1.5 text-sm text-center" defaultValue="80" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-500 block mb-1">Bottom</span>
                  <input type="number" className="w-full border border-gray-300 rounded-md p-1.5 text-sm text-center" defaultValue="80" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
