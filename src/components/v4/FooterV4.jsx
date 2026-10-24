import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';
import trinityLogo from '../../assets/trinity-logo.png';

export default function FooterV4({ onRequestDemo }) {
  const { isDark } = useThemeV4();

  return (
    <footer className={`w-full relative overflow-hidden transition-colors duration-300 border-t pt-16 pb-12 text-xs ${
      isDark ? 'glass-canvas text-slate-300 border-white/10' : 'glass-canvas-light text-slate-600 border-slate-200'
    }`}>
      {/* Background ambient orbs */}
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-400/15'
      }`} />
      <div className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/15'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glass Monolith Card */}
        <div className={`rounded-[36px] p-8 sm:p-12 border transition-all ${
          isDark ? 'glass-panel-elevated border-white/15' : 'glass-panel-elevated-light border-slate-200 shadow-xl'
        }`}>
          
          {/* Main Footer Grid - Same V1 Content in Creative Glass Layout */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            
            {/* Brand Column (lg:col-span-2) */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3 group" aria-label="Trinity AI Boston">
                <img 
                  src={trinityLogo} 
                  alt="Trinity AI Boston Logo" 
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
                />
                <div className="flex flex-col">
                  <span className={`text-base font-bold font-display tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    TRINITY AI <span className="glass-text-gold font-extrabold">BOSTON</span>
                  </span>
                  <span className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
                    isDark ? 'text-cyan-300' : 'text-blue-600'
                  }`}>
                    Purpose-Built Intelligence
                  </span>
                </div>
              </a>

              <p className={`text-xs leading-relaxed max-w-sm font-normal ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Purpose-built intelligence platforms for high-stakes industries—combining AI, domain expertise, explainability, and human oversight to transform complex evidence into defensible decisions.
              </p>

              {/* Global Operating Centers */}
              <div className="flex flex-col gap-2 pt-2 font-medium">
                <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border w-fit ${
                  isDark ? 'bg-white/[0.04] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}>
                  <MapPin className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  <span className="text-xs font-mono">Boston, Massachusetts, USA</span>
                </div>
                <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border w-fit ${
                  isDark ? 'bg-white/[0.04] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}>
                  <MapPin className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                  <span className="text-xs font-mono">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Products Column */}
            <div className="space-y-3.5">
              <div className={`font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDark ? 'text-cyan-300' : 'text-blue-700'
              }`}>
                <span className={`w-2 h-0.5 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`} />
                Flagship Products
              </div>
              <ul className="space-y-2.5">
                <li>
                  <a href="#engines" className={`transition-colors font-medium block ${
                    isDark ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'
                  }`}>
                    Cosmos One™
                  </a>
                  <span className={`block text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Litigation & Claims
                  </span>
                </li>
                <li>
                  <a href="#engines" className={`transition-colors font-medium block ${
                    isDark ? 'text-slate-200 hover:text-white' : 'text-slate-800 hover:text-blue-600'
                  }`}>
                    Cosmos Nexus™
                  </a>
                  <span className={`block text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Construction Defect
                  </span>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onRequestDemo && onRequestDemo("Both Platforms")}
                    className={`hover:underline text-left mt-1 cursor-pointer font-bold inline-flex items-center gap-1.5 ${
                      isDark ? 'text-cyan-300 hover:text-cyan-200' : 'text-blue-700 hover:text-blue-900'
                    }`}
                  >
                    <span>Schedule Demo Briefing</span>
                    <ArrowRight className={`w-3 h-3 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  </button>
                </li>
              </ul>
            </div>

            {/* Industries Column */}
            <div className="space-y-3.5">
              <div className={`font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDark ? 'text-cyan-300' : 'text-blue-700'
              }`}>
                <span className={`w-2 h-0.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                Industries
              </div>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li><a href="#telemetry" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Legal & Litigation Defense</a></li>
                <li><a href="#telemetry" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Insurance & High-Risk Claims</a></li>
                <li><a href="#telemetry" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Construction & Infrastructure</a></li>
                <li><a href="#telemetry" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Enterprise Risk & Compliance</a></li>
              </ul>
            </div>

            {/* Architecture & Trust Column */}
            <div className="space-y-3.5">
              <div className={`font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDark ? 'text-cyan-300' : 'text-purple-700'
              }`}>
                <span className={`w-2 h-0.5 rounded-full ${isDark ? 'bg-purple-400' : 'bg-purple-600'}`} />
                Architecture & Trust
              </div>
              <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li><a href="#defensibility" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>System Architecture</a></li>
                <li><a href="#pipeline" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Deterministic Pipeline</a></li>
                <li><a href="#defensibility" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Responsible AI Framework</a></li>
                <li><a href="#defensibility" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Human-in-the-Loop Standard</a></li>
                <li><a href="#defensibility" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>Zero Retention Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Sub-footer */}
          <div className={`pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <div className="space-y-1 text-center md:text-left">
              <p className={`text-[11px] font-mono ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                © 2026 Trinity AI Boston, Inc. All rights reserved.
              </p>
              <p className={`text-[10px] max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Trinity AI systems are decision-support platforms designed to augment human domain practitioners. Decisions remain subject to human oversight, legal counsel review, and executive signoff.
              </p>
            </div>

            <div className={`flex items-center gap-3 px-4 py-2 rounded-full border text-[11px] font-mono ${
              isDark 
                ? 'bg-white/[0.04] border-white/10 text-cyan-300' 
                : 'bg-slate-100 border-slate-200 text-blue-700'
            }`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`} />
              <span>Boston • Bangalore</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
