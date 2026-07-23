'use client';

import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

interface TopNavbarProps {
  siteId: string;
  pageId: string;
  viewport: 'desktop' | 'tablet' | 'mobile';
  setViewport: (viewport: 'desktop' | 'tablet' | 'mobile') => void;
}

export function TopNavbar({ siteId, pageId, viewport, setViewport }: TopNavbarProps) {
  return (
    <nav className="h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between shrink-0 shadow-sm z-10">
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg text-indigo-600 flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-600 rounded-sm"></div>
          Michaelfred Builder
        </div>
        
        <div className="h-6 w-px bg-gray-200 mx-2"></div>
        
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Page</span>
          <select className="text-sm font-semibold bg-transparent border-none focus:ring-0 cursor-pointer text-gray-800 -ml-1">
            <option>Home</option>
            <option>About</option>
            <option>Contact</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
        <div className="flex bg-gray-100 p-1 rounded-lg border border-gray-200">
          <button 
            onClick={() => setViewport('desktop')}
            className={`p-1.5 rounded-md transition-colors ${viewport === 'desktop' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
            title="Desktop"
          >
            <Monitor size={18} />
          </button>
          <button 
            onClick={() => setViewport('tablet')}
            className={`p-1.5 rounded-md transition-colors ${viewport === 'tablet' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
            title="Tablet"
          >
            <Tablet size={18} />
          </button>
          <button 
            onClick={() => setViewport('mobile')}
            className={`p-1.5 rounded-md transition-colors ${viewport === 'mobile' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-800'}`}
            title="Mobile"
          >
            <Smartphone size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors">
          Settings
        </button>
        <button className="text-sm font-medium bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
          Publish
        </button>
      </div>
    </nav>
  );
}
