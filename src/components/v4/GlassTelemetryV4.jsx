import React from 'react';
import { 
  Building2, 
  Briefcase, 
  HardHat, 
  Check, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';

export default function GlassTelemetryV4({ onRequestDemo }) {
  const { isDark } = useThemeV4();

  const metrics = [
    {
      value: "$2.4B+",
      label: "Dispute Value Audited",
      detail: "Across commercial arbitration, catastrophic property claims, and infrastructure disputes.",
      colorDark: "text-cyan-400",
      colorLight: "text-cyan-600"
    },
    {
      value: "0.00%",
      label: "Hallucination Rate",
      detail: "Zero ungrounded assertions. Every cited finding requires 100% authenticated source lineage.",
      colorDark: "text-emerald-400",
      colorLight: "text-emerald-600"
    },
    {
      value: "78%",
      label: "Velocity Acceleration",
      detail: "Average reduction in time required to synthesize depositions and draft summary judgment briefs.",
      colorDark: "text-blue-400",
      colorLight: "text-blue-600"
    },
    {
      value: "100%",
      label: "Primary Pin-Cite Lineage",
      detail: "Direct byte-level alignment to docket pages, transcript lines, and contract exhibits.",
      colorDark: "text-amber-400",
      colorLight: "text-amber-600"
    }
  ];

  const sectors = [
    {
      icon: Briefcase,
      badge: "TRIAL PRACTICE",
      title: "AmLaw 100 Litigation Counsel",
      sub: "Managing Partners & Trial Practice Chairs",
      useCases: [
        "Multi-depo contradiction extraction across 50,000+ pages",
        "Statutory notice & procedural deadline audits (93A / repose)",
        "Chronological factual dispute matrices for summary judgment"
      ]
    },
    {
      icon: Building2,
      badge: "REINSURANCE & CLAIMS",
      title: "Global Insurance Carriers",
      sub: "Chief Claims Officers & Coverage Counsel",
      useCases: [
        "Catastrophic treaty reinsurance verification & audit",
        "Multi-occurrence deductible boundary reconciliation",
        "Bad-faith exposure mitigation & reserve evaluation"
      ]
    },
    {
      icon: HardHat,
      badge: "FORENSIC DISPUTES",
      title: "ENR Top Contractors & Forensics",
      sub: "General Counsel & Expert Forensic Engineers",
      useCases: [
        "Subcontractor trade fault allocation across 15+ sub-trades",
        "Flashing, membrane, and waterproofing scope carveouts",
        "Change order chronological delay impact trails"
      ]
    }
  ];

  return (
    <section 
      id="telemetry" 
      className={`w-full py-24 lg:py-32 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'glass-canvas text-white border-white/10' : 'glass-canvas-light text-slate-900 border-slate-200'
      }`}
    >
      
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/15'
      }`} />

      {/* Boxed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase ${
              isDark ? 'glass-pill text-cyan-300' : 'glass-pill-light text-blue-700'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span>05 // Enterprise Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
              Measured Impact.{' '}
              <span className={isDark ? 'glass-text-shimmer' : 'glass-text-shimmer-light'}>Where Millions Hang in the Balance.</span>
            </h2>
          </div>
          <p className={`text-sm max-w-md font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            High-exposure commercial disputes demand mathematical certainty. Trinity provides the decisive evidentiary anchor.
          </p>
        </div>

        {/* 4 Telemetry Meters */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className={`p-7 rounded-[28px] border transition-all flex flex-col justify-between ${
                isDark 
                  ? 'glass-panel-elevated border-white/15 hover:border-cyan-400/40' 
                  : 'glass-panel-elevated-light border-slate-200 hover:border-blue-400 shadow-lg'
              }`}
            >
              <div>
                <div className={`text-4xl font-black font-mono tracking-tight mb-2 ${
                  isDark ? m.colorDark : m.colorLight
                }`}>
                  {m.value}
                </div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 font-display ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {m.label}
                </div>
              </div>
              <p className={`text-xs leading-relaxed pt-3 border-t ${
                isDark ? 'text-slate-400 border-white/10' : 'text-slate-600 border-slate-200'
              }`}>
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Sector Glass Pods */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div 
                key={idx}
                className={`rounded-[32px] p-8 border flex flex-col justify-between transition-all group ${
                  isDark 
                    ? 'glass-panel-elevated border-white/15 hover:border-white/30' 
                    : 'glass-panel-elevated-light border-slate-200 hover:border-blue-300 shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                      isDark 
                        ? 'bg-white/[0.06] border border-white/15 text-cyan-300' 
                        : 'bg-blue-50 border border-blue-200 text-blue-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isDark 
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold mb-1 font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {sec.title}
                  </h3>
                  <p className={`text-xs font-mono mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {sec.sub}
                  </p>

                  <div className="space-y-3">
                    {sec.useCases.map((uc, uidx) => (
                      <div key={uidx} className={`flex items-start gap-2.5 text-xs ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isDark 
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                            : 'bg-blue-100 text-blue-700 border border-blue-300'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-8 pt-5 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <button
                    type="button"
                    onClick={() => onRequestDemo(`Sector Briefing: ${sec.title}`)}
                    className={`w-full py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                      isDark 
                        ? 'glass-pill hover:bg-white/20 text-white' 
                        : 'glass-pill-light hover:bg-blue-50 text-blue-900 border-slate-300 shadow-sm'
                    }`}
                  >
                    <span>Request Sector Briefing</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
