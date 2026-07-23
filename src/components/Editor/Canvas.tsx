'use client';

import React from 'react';

interface CanvasProps {
  pageId: string;
  selectedBlockId: string | null;
  onSelectBlock: (id: string) => void;
  viewport: 'desktop' | 'tablet' | 'mobile';
}

export function Canvas({ pageId, selectedBlockId, onSelectBlock, viewport }: CanvasProps) {
  const getCanvasWidth = () => {
    switch(viewport) {
      case 'desktop': return 'w-full';
      case 'tablet': return 'max-w-[768px] mx-auto border-x border-gray-300 shadow-xl';
      case 'mobile': return 'max-w-[390px] mx-auto border-x border-gray-300 shadow-xl';
      default: return 'w-full';
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-gray-100 flex flex-col relative">
      <div className={`min-h-full flex flex-col transition-all duration-300 ease-in-out bg-white ${getCanvasWidth()}`}>
        
        {/* Placeholder Content Blocks */}
        <div 
          onClick={() => onSelectBlock('hero-1')}
          className={`relative min-h-[400px] bg-indigo-50 border-2 transition-all cursor-pointer ${selectedBlockId === 'hero-1' ? 'border-indigo-500 z-10' : 'border-transparent hover:border-indigo-300'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-indigo-300 font-bold text-2xl">
            Hero Section
          </div>
          {selectedBlockId === 'hero-1' && (
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-2 py-1 font-medium rounded-bl-md">
              Hero V1
            </div>
          )}
        </div>

        <div 
          onClick={() => onSelectBlock('features-1')}
          className={`relative min-h-[300px] bg-white border-2 transition-all cursor-pointer ${selectedBlockId === 'features-1' ? 'border-indigo-500 z-10' : 'border-transparent hover:border-indigo-300'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-2xl">
            Features Grid
          </div>
          {selectedBlockId === 'features-1' && (
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-2 py-1 font-medium rounded-bl-md">
              Features Grid
            </div>
          )}
        </div>

        <div 
          onClick={() => onSelectBlock('cta-1')}
          className={`relative min-h-[250px] bg-gray-900 border-2 transition-all cursor-pointer ${selectedBlockId === 'cta-1' ? 'border-indigo-500 z-10' : 'border-transparent hover:border-indigo-300'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-2xl">
            Call to Action
          </div>
        </div>

        <div 
          onClick={() => onSelectBlock('footer-1')}
          className={`relative min-h-[200px] bg-gray-100 border-2 transition-all cursor-pointer ${selectedBlockId === 'footer-1' ? 'border-indigo-500 z-10' : 'border-transparent hover:border-indigo-300'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
            Footer
          </div>
        </div>

      </div>
    </main>
  );
}
