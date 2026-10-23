import React, { useState } from 'react';
import { Layers, Sparkles, Layout, ChevronRight, ChevronLeft, Check } from 'lucide-react';

export default function VersionSwitcher({ activeVersion, onVersionChange }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside 
      aria-label="Design Version Switcher" 
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center select-none"
    >
      {/* Switcher Main Container */}
      <div 
        className={`bg-slate-950/95 text-white border-y border-r border-slate-700/80 rounded-r-2xl shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out flex flex-col ${
          isExpanded ? 'w-64 p-3.5 pl-4' : 'w-12 py-3 px-1.5 items-center'
        }`}
      >
        {/* Header / Toggle Handle */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          {isExpanded ? (
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-trinity-lightBlue" />
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-wider font-mono uppercase text-white">
                  Design Version
                </span>
                <span className="text-[9px] text-slate-400 font-mono">
                  Compare Concepts
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="p-1 rounded-md text-trinity-lightBlue hover:text-white hover:bg-white/10 transition-colors"
              title="Expand Version Switcher"
              aria-label="Expand Version Switcher"
            >
              <Layers className="w-5 h-5" />
            </button>
          )}

          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Collapse"
              aria-label="Collapse Switcher"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Expanded View: Version Buttons */}
        {isExpanded ? (
          <div className="pt-2.5 space-y-2">
            {/* V1 Button */}
            <button
              onClick={() => onVersionChange('v1')}
              className={`w-full text-left p-2.5 rounded-xl border transition-all duration-200 flex items-start gap-2.5 ${
                activeVersion === 'v1'
                  ? 'bg-blue-950/70 border-trinity-blue text-white shadow-md shadow-blue-950/40'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className={`mt-0.5 p-1 rounded-md shrink-0 ${activeVersion === 'v1' ? 'bg-trinity-blue text-white' : 'bg-slate-800 text-slate-400'}`}>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-display">V1: Cinematic</span>
                  {activeVersion === 'v1' && (
                    <span className="flex items-center gap-1 text-[9px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      <Check className="w-2.5 h-2.5" /> ACTIVE
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 leading-snug mt-0.5">
                  Atmospheric executive hero with parallax & deep navy branding.
                </p>
              </div>
            </button>

            {/* V2 Button */}
            <button
              onClick={() => onVersionChange('v2')}
              className={`w-full text-left p-2.5 rounded-xl border transition-all duration-200 flex items-start gap-2.5 ${
                activeVersion === 'v2'
                  ? 'bg-blue-950/70 border-trinity-blue text-white shadow-md shadow-blue-950/40'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white hover:border-slate-700'
              }`}
            >
              <div className={`mt-0.5 p-1 rounded-md shrink-0 ${activeVersion === 'v2' ? 'bg-trinity-blue text-white' : 'bg-slate-800 text-slate-400'}`}>
                <Layout className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-display">V2: Modern Enterprise</span>
                  {activeVersion === 'v2' && (
                    <span className="flex items-center gap-1 text-[9px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      <Check className="w-2.5 h-2.5" /> ACTIVE
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-400 leading-snug mt-0.5">
                  Clean enterprise architecture with interactive decision console & procurement matrices.
                </p>
              </div>
            </button>
          </div>
        ) : (
          /* Collapsed View: Compact Vertical Pills */
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => onVersionChange('v1')}
              title="Switch to V1 (Cinematic)"
              aria-label="Switch to V1"
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[11px] font-bold transition-all ${
                activeVersion === 'v1'
                  ? 'bg-trinity-blue text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              V1
            </button>
            <button
              onClick={() => onVersionChange('v2')}
              title="Switch to V2 (Modern Enterprise)"
              aria-label="Switch to V2"
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[11px] font-bold transition-all ${
                activeVersion === 'v2'
                  ? 'bg-trinity-blue text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              V2
            </button>
            <button
              onClick={() => setIsExpanded(true)}
              className="w-8 h-6 rounded flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              title="Expand Details"
              aria-label="Expand Details"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
