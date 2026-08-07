"use client";
import React, { useState } from "react";
import { 
  ApexLogo, ApexHeader, ApexFooter,
  ApexHomePage, ApexServicesPage, ApexPortfolioPage, ApexAboutPage, ApexContactPage,
  ApexQuoteModal, APEX_NAVY, APEX_GOLD
} from "../../lib/blocks/precisebuilding";
import { 
  Maximize2, Eye, LayoutGrid, Monitor, Layers, Sparkles, 
  ChevronRight, ArrowRight, X, ExternalLink
} from "lucide-react";

export default function PreciseBuildingTemplate() {
  // View mode: 'collage' (5-panel horizontal presentation as in image_2.png) or 'interactive' (live multi-page site)
  const [viewMode, setViewMode] = useState<"collage" | "interactive">("collage");
  const [activePage, setActivePage] = useState<"home" | "services" | "portfolio" | "about" | "contact">("home");
  const [inspectedPanel, setInspectedPanel] = useState<string | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    const validPages: ("home" | "services" | "portfolio" | "about" | "contact")[] = [
      "home", "services", "portfolio", "about", "contact"
    ];
    if (validPages.includes(page as any)) {
      setActivePage(page as any);
      if (viewMode === "collage") {
        setViewMode("interactive");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const panels = [
    { id: "home", label: "HOME PAGE (1/5)", component: <ApexHomePage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} /> },
    { id: "services", label: "SERVICES PAGE (2/5)", component: <ApexServicesPage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} /> },
    { id: "portfolio", label: "PORTFOLIO PAGE (3/5)", component: <ApexPortfolioPage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} /> },
    { id: "about", label: "ABOUT US PAGE (4/5)", component: <ApexAboutPage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} /> },
    { id: "contact", label: "CONTACT PAGE (5/5)", component: <ApexContactPage onNavigate={handleNavigate} /> },
  ];

  return (
    <div className="min-h-screen bg-[#08101E] text-slate-100 font-sans select-none">
      {/* ========================================== */}
      {/* 1. TOP PRESENTATION BANNER (image_2.png)  */}
      {/* ========================================== */}
      <div className="w-full bg-[#0B1528] border-b border-slate-800 shadow-xl relative z-40">
        <div className="max-w-[1800px] mx-auto px-4 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo on the far left */}
          <div className="flex items-center gap-3">
            <ApexLogo light size="lg" onClick={() => handleNavigate("home")} />
          </div>

          {/* Centered Presentation Concept Title */}
          <div className="text-center">
            <h1 className="text-sm md:text-xl lg:text-2xl font-black text-white uppercase tracking-wider font-display drop-shadow-md flex items-center justify-center gap-2">
              <span className="text-[#E58B00]">APEX CONSTRUCTION</span>
              <span className="text-slate-400 font-light">—</span>
              <span>5 PAGE WEBSITE CONCEPT</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest hidden sm:block">
              Commercial · Residential · Remodeling · Project Management · Master Craftsmanship
            </p>
          </div>

          {/* Controls on the right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === "collage" ? "interactive" : "collage")}
              className={`px-3.5 py-1.5 rounded text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow ${
                viewMode === "collage"
                  ? "bg-[#E58B00] text-white"
                  : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{viewMode === "collage" ? "5-Panel Collage" : "Switch to 5-Panel"}</span>
            </button>

            <button
              onClick={() => setViewMode("interactive")}
              className={`px-3.5 py-1.5 rounded text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow ${
                viewMode === "interactive"
                  ? "bg-[#E58B00] text-white"
                  : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Live Website Mode</span>
            </button>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="hidden lg:flex px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-black uppercase tracking-wider rounded shadow transition-all cursor-pointer"
            >
              Free Quote
            </button>
          </div>

        </div>

        {/* Luminous accent horizon line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E58B00] to-transparent opacity-80" />
      </div>

      {/* ========================================== */}
      {/* 2. COLLAGE VIEW: 5 HORIZONTAL PANELS       */}
      {/* ========================================== */}
      {viewMode === "collage" ? (
        <main className="w-full py-8 px-4 lg:px-8 bg-[#08101E] relative min-h-[calc(100vh-80px)] overflow-x-auto">
          {/* Subtle blueprint grid background */}
          <div className="absolute inset-0 bg-[#08101E] pointer-events-none opacity-40">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="collageGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E58B00" strokeWidth="0.5" opacity="0.15" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#collageGrid)" />
            </svg>
          </div>

          <div className="max-w-[2100px] mx-auto relative z-10">
            {/* Quick helper tip */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E58B00]" />
                <span className="font-bold uppercase tracking-wider text-slate-300">
                  Horizontal 5-Panel Showcase (1/5 - 5/5)
                </span>
                <span className="hidden md:inline text-slate-500">— Click any panel or 'Inspect' to preview full-scale.</span>
              </div>
              <div className="text-[11px] font-bold text-[#E58B00] flex items-center gap-1">
                <span>Scroll horizontally to view all 5 pages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* 5-Column Grid / Horizontal scroll */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
              {panels.map((panel, idx) => (
                <div 
                  key={panel.id}
                  className="flex flex-col rounded-lg overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-[#E58B00] hover:shadow-[0_0_25px_rgba(229,139,0,0.2)] group"
                >
                  {/* Panel Top Label Header (e.g. HOME PAGE (1/5)) */}
                  <div className="bg-[#0B1528] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <span className="font-black text-xs uppercase tracking-widest text-white font-display">
                      {panel.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setInspectedPanel(panel.id)}
                        className="p-1.5 rounded bg-slate-800 hover:bg-[#E58B00] text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Inspect full scale"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          setActivePage(panel.id as any);
                          setViewMode("interactive");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="p-1.5 rounded bg-slate-800 hover:bg-[#E58B00] text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Open interactive page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Scrollable / Scaled Panel Window */}
                  <div className="relative bg-white text-slate-900 overflow-y-auto max-h-[820px] scrollbar-thin scrollbar-thumb-slate-300">
                    <div className="w-full transform scale-100 origin-top text-left select-text">
                      {/* Common header inside panel */}
                      <ApexHeader 
                        currentPage={panel.id} 
                        compact 
                        onNavigate={(p) => handleNavigate(p)} 
                        onOpenQuote={() => setQuoteModalOpen(true)}
                      />

                      {/* Panel body */}
                      {panel.component}

                      {/* Common footer inside panel */}
                      <ApexFooter 
                        compact 
                        onNavigate={(p) => handleNavigate(p)} 
                      />
                    </div>
                  </div>

                  {/* Panel Footer Action Bar */}
                  <div className="p-3 bg-[#0B1528] border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-bold uppercase tracking-wider">
                      Panel {idx + 1} of 5
                    </span>
                    <button
                      onClick={() => {
                        setActivePage(panel.id as any);
                        setViewMode("interactive");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-[#E58B00] hover:text-amber-400 font-extrabold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <span>Interactive View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      ) : (
        /* ========================================== */
        /* 3. INTERACTIVE LIVE MULTI-PAGE SITE MODE   */
        /* ========================================== */
        <main className="w-full bg-white text-slate-900 min-h-screen">
          {/* Main Interactive Header */}
          <ApexHeader 
            currentPage={activePage} 
            onNavigate={(page) => handleNavigate(page)} 
            onOpenQuote={() => setQuoteModalOpen(true)}
          />

          {/* Page Routing */}
          <div className="w-full animate-fadeIn">
            {activePage === "home" && (
              <ApexHomePage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} />
            )}
            {activePage === "services" && (
              <ApexServicesPage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} />
            )}
            {activePage === "portfolio" && (
              <ApexPortfolioPage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} />
            )}
            {activePage === "about" && (
              <ApexAboutPage onNavigate={handleNavigate} onOpenQuote={() => setQuoteModalOpen(true)} />
            )}
            {activePage === "contact" && (
              <ApexContactPage onNavigate={handleNavigate} />
            )}
          </div>

          {/* Main Interactive Footer */}
          <ApexFooter onNavigate={(page) => handleNavigate(page)} />
        </main>
      )}

      {/* ========================================== */}
      {/* 4. FULLSCREEN INSPECT MODAL FOR ANY PANEL  */}
      {/* ========================================== */}
      {inspectedPanel && (
        <div className="fixed inset-0 z-50 bg-[#08101E]/90 backdrop-blur-md flex flex-col p-4 md:p-8 animate-fadeIn">
          <div className="max-w-6xl w-full mx-auto bg-white rounded-lg border border-slate-200 shadow-2xl flex flex-col flex-1 overflow-hidden">
            {/* Modal Top Bar */}
            <div className="bg-[#0B1528] px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#E58B00] text-white text-xs font-black uppercase tracking-wider rounded">
                  {panels.find(p => p.id === inspectedPanel)?.label}
                </span>
                <span className="text-sm font-bold text-slate-300">
                  Full Page Inspection
                </span>
              </div>
              <button
                onClick={() => setInspectedPanel(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: Scrollable 1:1 Page */}
            <div className="flex-1 overflow-y-auto text-slate-900">
              <ApexHeader 
                currentPage={inspectedPanel} 
                onNavigate={(p) => {
                  setInspectedPanel(null);
                  handleNavigate(p);
                }} 
                onOpenQuote={() => {
                  setInspectedPanel(null);
                  setQuoteModalOpen(true);
                }}
              />

              {panels.find(p => p.id === inspectedPanel)?.component}

              <ApexFooter onNavigate={(p) => {
                setInspectedPanel(null);
                handleNavigate(p);
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Free Quote Modal */}
      <ApexQuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </div>
  );
}
