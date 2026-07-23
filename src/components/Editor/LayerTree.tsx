'use client';

import React, { useState } from 'react';
import { Layers, Box, ChevronRight, Eye, Lock, Plus } from 'lucide-react';

interface LayerTreeProps {
  pageId: string;
  selectedBlockId: string | null;
  onSelectBlock: (id: string) => void;
}

export function LayerTree({ pageId, selectedBlockId, onSelectBlock }: LayerTreeProps) {
  const [activeTab, setActiveTab] = useState<'layers' | 'components'>('layers');

  // Dummy data for now
  const layers = [
    { id: 'hero-1', name: 'Hero Section', type: 'hero' },
    { id: 'features-1', name: 'Features Grid', type: 'content' },
    { id: 'cta-1', name: 'Call to Action', type: 'cta' },
    { id: 'footer-1', name: 'Footer', type: 'footer' }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
      <div className="flex border-b border-gray-200">
        <button 
          className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 ${activeTab === 'layers' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('layers')}
        >
          <Layers size={16} /> Layers
        </button>
        <button 
          className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 ${activeTab === 'components' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('components')}
        >
          <Box size={16} /> Add Block
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'layers' && (
          <div className="p-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Page Structure</div>
            <div className="space-y-1">
              {layers.map((layer) => (
                <div 
                  key={layer.id}
                  onClick={() => onSelectBlock(layer.id)}
                  className={`flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer group transition-colors ${selectedBlockId === layer.id ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-600" />
                  <span className="text-sm font-medium flex-1 truncate">{layer.name}</span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600">
                      <Eye size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="p-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">Block Library</div>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2 px-1">Hero Sections</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-200 rounded-md p-2 bg-gray-50 cursor-grab hover:border-indigo-400 hover:shadow-sm transition-all text-center">
                    <div className="h-12 bg-white border border-gray-200 rounded mb-1"></div>
                    <span className="text-xs font-medium text-gray-600">Split Header</span>
                  </div>
                  <div className="border border-gray-200 rounded-md p-2 bg-gray-50 cursor-grab hover:border-indigo-400 hover:shadow-sm transition-all text-center">
                    <div className="h-12 bg-white border border-gray-200 rounded mb-1"></div>
                    <span className="text-xs font-medium text-gray-600">Centered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <button className="w-full py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 shadow-sm">
          <Plus size={16} /> Global Styles
        </button>
      </div>
    </aside>
  );
}
