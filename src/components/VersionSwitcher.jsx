import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function VersionSwitcher({ activeVersion, onVersionChange }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const versions = [
    {
      id: 'v1',
      code: 'V1',
      label: ': Cinematic',
      title: 'Switch to V1: Cinematic Dark/Light Flow',
      indicatorColor: 'bg-blue-400 ring-blue-400/30 shadow-blue-400/50'
    },
    {
      id: 'v2',
      code: 'V2',
      label: ': Modern Enterprise',
      title: 'Switch to V2: Modern Enterprise Minimalist',
      indicatorColor: 'bg-emerald-400 ring-emerald-400/30 shadow-emerald-400/50'
    },
    {
      id: 'v3',
      code: 'V3',
      label: ': Material Design',
      title: 'Switch to V3: Material Design 3 (M3)',
      indicatorColor: 'bg-[#60A5FA] ring-[#60A5FA]/40 shadow-[#60A5FA]/60'
    },
    {
      id: 'v4',
      code: 'V4',
      label: ': Glassmorphic',
      title: 'Switch to V4: Glassmorphism Design',
      indicatorColor: 'bg-cyan-400 ring-cyan-400/40 shadow-cyan-400/60'
    }
  ];

  return (
    <aside 
      aria-label="Version Switcher" 
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 select-none"
    >
      <div 
        className={`bg-slate-950/95 backdrop-blur-md border-y border-r border-slate-800 rounded-r-2xl rounded-l-none shadow-2xl flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-[58px] p-1' : 'w-[226px] p-1.5 pl-2'
        }`}
      >
        
        {/* Buttons List Container */}
        <div className="flex flex-col gap-1.5 shrink-0 transition-all duration-300">
          
          {versions.map((ver) => {
            const isActive = activeVersion === ver.id;
            return (
              <button
                key={ver.id}
                onClick={() => onVersionChange(ver.id)}
                title={ver.title}
                className={`relative flex items-center rounded-xl font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
                  isCollapsed 
                    ? 'w-7 h-7 justify-center p-0' 
                    : 'w-[174px] pl-2 pr-2.5 py-1.5 text-xs'
                } ${
                  isActive
                    ? 'bg-slate-800 text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                }`}
              >
                {/* Expanded Active Indicator */}
                <span 
                  className={`rounded-full shrink-0 transition-all duration-300 mr-2 ${
                    isCollapsed ? 'hidden' : 'block w-2 h-2'
                  } ${
                    isActive 
                      ? `${ver.indicatorColor} ring-2 shadow-xs` 
                      : 'bg-transparent border border-slate-600'
                  }`} 
                />

                {/* Collapsed Corner Badge Indicator */}
                <span 
                  className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? `${ver.indicatorColor} ring-1 opacity-100 scale-100` 
                      : 'opacity-0 scale-50'
                  } ${isCollapsed ? 'block' : 'hidden'}`}
                />

                <span className="font-mono text-[11px] font-bold shrink-0">{ver.code}</span>

                {/* Expanding Label */}
                <span 
                  className={`transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden text-left ${
                    isCollapsed ? 'max-w-0 opacity-0 -translate-x-1' : 'max-w-[135px] opacity-100 translate-x-0'
                  }`}
                >
                  {ver.label}
                </span>
              </button>
            );
          })}

        </div>

        {/* Integrated Right Toggle Handle with Smooth Rotating Chevron */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="self-stretch w-5 shrink-0 ml-auto flex items-center justify-center border-l border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer group"
          title={isCollapsed ? "Expand switcher" : "Collapse switcher"}
          aria-label={isCollapsed ? "Expand switcher" : "Collapse switcher"}
        >
          <ChevronLeft 
            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ease-in-out ${
              isCollapsed ? 'rotate-180 text-slate-300 group-hover:text-white' : 'rotate-0 text-slate-400 group-hover:text-white'
            }`} 
          />
        </button>

      </div>
    </aside>
  );
}
