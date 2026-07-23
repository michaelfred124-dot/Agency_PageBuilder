'use client';

import React, { useState } from 'react';
import { TopNavbar } from './TopNavbar';
import { LayerTree } from './LayerTree';
import { Canvas } from './Canvas';
import { PropertiesPanel } from './PropertiesPanel';

interface EditorLayoutProps {
  siteId: string;
  pageId: string;
}

export function EditorLayout({ siteId, pageId }: EditorLayoutProps) {
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <TopNavbar 
        siteId={siteId} 
        pageId={pageId} 
        viewport={viewport} 
        setViewport={setViewport} 
      />
      <div className="flex flex-1 overflow-hidden">
        <LayerTree 
          pageId={pageId} 
          selectedBlockId={selectedBlockId} 
          onSelectBlock={setSelectedBlockId} 
        />
        <Canvas 
          pageId={pageId} 
          selectedBlockId={selectedBlockId}
          onSelectBlock={setSelectedBlockId}
          viewport={viewport}
        />
        <PropertiesPanel 
          blockId={selectedBlockId}
          viewport={viewport}
        />
      </div>
    </div>
  );
}
