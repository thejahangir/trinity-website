import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';

export default function GlassEnginesV4({ onRequestDemo }) {
  const { isDark } = useThemeV4();

  return (
    <section 
      id="engines" 
      className={`w-full py-24 lg:py-32 relative overflow-hidden transition-colors duration-500 border-t ${
        isDark 
          ? 'glass-canvas text-white border-white/10' 
          : 'glass-canvas-light text-slate-900 border-slate-200'
      }`}
    >
      {/* Ambient background glows */}
      <div className={`absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-300/15'
      }`} />
      <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-amber-500/10' : 'bg-amber-300/15'
      }`} />

      {/* Boxed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase ${
              isDark ? 'glass-pill text-cyan-300' : 'glass-pill-light text-blue-700'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              <span>02 // Autonomous Decision Engines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
              Twin Deterministic Engines.{' '}
              <span className={isDark ? 'glass-text-shimmer' : 'glass-text-shimmer-light'}>
                Engineered for Victory.
              </span>
            </h2>
          </div>
          <p className={`text-sm max-w-md font-normal leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Generic foundation models guess the next token. Trinity’s twin engines apply deterministic mathematical constraint logic, producing outputs that survive courtroom cross-examination.
          </p>
        </div>

        {/* Dual Sculpted Glass Monoliths (Side-by-Side) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* =================================================================
              ENGINE 01: COSMOS ONE™ (LITIGATION & CLAIMS DEFENSE)
              ================================================================= */}
          <div className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ${
            isDark 
              ? 'glass-panel-elevated border border-cyan-500/30 hover:border-cyan-400/60' 
              : 'glass-panel-elevated-light border border-cyan-400/50 hover:border-cyan-500/80 shadow-xl'
          }`}>
            {/* Top Glowing Orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:scale-110 transition-transform" />

            <div className="space-y-6 relative z-10">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  isDark ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40' : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                }`}>
                  Legal & Arbitration Engine
                </span>
                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Throughput: 250K+ pgs/hr
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h3 className={`text-3xl font-black font-display tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  COSMOS ONE™
                </h3>
                <p className={`text-base font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
                  Autonomous Litigation & Claims Intelligence
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed font-normal mt-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Engineered for AmLaw 100 litigation practices and catastrophic commercial insurers. Automatically parses hundred-thousand-page trial records, identifies deposition contradictions with line-and-page pin-cites, and enforces statutory defense bars.
                </p>
              </div>

              {/* 3 Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className={`p-3.5 rounded-2xl border text-center ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-slate-200 shadow-2xs'
                }`}>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${isDark ? 'text-cyan-300' : 'text-blue-600'}`}>
                    78%
                  </div>
                  <div className={`text-[10px] uppercase font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Velocity Gain
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border text-center ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-slate-200 shadow-2xs'
                }`}>
                  <div className="text-xl sm:text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                    100%
                  </div>
                  <div className={`text-[10px] uppercase font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Pin-Cite Trace
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border text-center ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-slate-200 shadow-2xs'
                }`}>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    0.00%
                  </div>
                  <div className={`text-[10px] uppercase font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Hallucination
                  </div>
                </div>
              </div>

              {/* Core Specialized Capabilities */}
              <div className={`space-y-2.5 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Verified Courtroom Workflows:
                </span>
                <div className={`space-y-2 text-xs ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Deposition impeachment matrices with line-and-page transcript coordinate anchors.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Statutory notice bar auditing (Mass. Gen. Laws ch. 93A, statutes of repose & limitation).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Reinsurance treaty occurrence & multi-year aggregate boundary validation.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={() => onRequestDemo("Cosmos One™ Litigation Engine")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Deploy Cosmos One™ On Your Matter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* =================================================================
              ENGINE 02: COSMOS NEXUS™ (CONSTRUCTION FORENSICS & DEFECT)
              ================================================================= */}
          <div className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ${
            isDark 
              ? 'glass-panel-elevated border border-amber-500/30 hover:border-amber-400/60' 
              : 'glass-panel-elevated-light border border-amber-400/50 hover:border-amber-500/80 shadow-xl'
          }`}>
            {/* Top Glowing Orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:scale-110 transition-transform" />

            <div className="space-y-6 relative z-10">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  isDark ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  Forensic Engineering Engine
                </span>
                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Trade Apportionment: 15+ Trades
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h3 className={`text-3xl font-black font-display tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  COSMOS NEXUS™
                </h3>
                <p className={`text-base font-bold ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                  Multi-Party Construction Defect & Delay Intelligence
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed font-normal mt-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Engineered for ENR Top General Contractors, forensic engineering experts, and specialty defense counsel. Ingests subcontracts, daily inspection logs, change orders, and BIM drawings to isolate scope carveouts and compute fault allocation matrices.
                </p>
              </div>

              {/* 3 Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className={`p-3.5 rounded-2xl border text-center ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-slate-200 shadow-2xs'
                }`}>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${isDark ? 'text-amber-300' : 'text-amber-600'}`}>
                    90.1%
                  </div>
                  <div className={`text-[10px] uppercase font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Exposure Reduced
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border text-center ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-slate-200 shadow-2xs'
                }`}>
                  <div className="text-xl sm:text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                    100%
                  </div>
                  <div className={`text-[10px] uppercase font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Contract Grounding
                  </div>
                </div>
                <div className={`p-3.5 rounded-2xl border text-center ${
                  isDark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-slate-200 shadow-2xs'
                }`}>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    15+
                  </div>
                  <div className={`text-[10px] uppercase font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Subcontract Trades
                  </div>
                </div>
              </div>

              {/* Core Specialized Capabilities */}
              <div className={`space-y-2.5 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Verified Engineering Workflows:
                </span>
                <div className={`space-y-2 text-xs ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Subcontract scope carveout & flashing isolation across roofing, glazing, and framing.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Trade-by-trade mathematical fault allocation matrix based on contractual risk formulas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>Pre-trial mediation packages with primary architectural drawing and daily log pin-cites.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={() => onRequestDemo("Cosmos Nexus™ Forensics Engine")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Deploy Cosmos Nexus™ On Your Matter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
