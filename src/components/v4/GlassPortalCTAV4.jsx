import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  ShieldCheck, 
  FileCheck2, 
  Lock, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';

export default function GlassPortalCTAV4({ onRequestDemo }) {
  const { isDark } = useThemeV4();

  const protocols = [
    {
      step: "01",
      title: "Bilateral Mutual NDA",
      desc: "Standard enterprise confidentiality executed prior to any case material or docket exchange.",
      icon: ShieldCheck
    },
    {
      step: "02",
      title: "Sanitized Ingestion",
      desc: "Byte-level evidentiary parsing conducted on your redacted sample depositions, claims, or BIM models.",
      icon: FileCheck2
    },
    {
      step: "03",
      title: "Sovereign Air-Gapping",
      desc: "Isolated single-tenant VPC deployment with strict zero customer retraining guarantees.",
      icon: Lock
    },
    {
      step: "04",
      title: "30-Min Founder Briefing",
      desc: "Direct demonstration with Trinity's founding legal technologists and AI research scientists.",
      icon: Clock
    }
  ];

  return (
    <section 
      id="commence" 
      className={`w-full py-24 lg:py-32 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'glass-canvas text-white border-white/10' : 'glass-canvas-light text-slate-900 border-slate-200'
      }`}
    >
      {/* Background radial glows */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20 ${
        isDark ? 'bg-cyan-600/15' : 'bg-cyan-400/15'
      }`} />
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -ml-20 -mb-20 ${
        isDark ? 'bg-blue-600/15' : 'bg-blue-400/15'
      }`} />

      {/* Boxed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Glass Portal Monolith */}
        <div className={`rounded-[40px] p-8 sm:p-14 border relative overflow-hidden shadow-2xl transition-all ${
          isDark 
            ? 'glass-panel-elevated border-white/20' 
            : 'glass-panel-elevated-light border-slate-200'
        }`}>
          
          <div className="w-full space-y-8">
            
            {/* Header: Headline + Paragraph Split across full width */}
            <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className="max-w-3xl space-y-4">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase ${
                  isDark ? 'glass-pill text-cyan-300' : 'glass-pill-light text-blue-700'
                }`}>
                  <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  <span>Executive Commencement</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-display">
                  Deploy Purpose-Built Intelligence{' '}
                  <span className={isDark ? 'glass-text-shimmer' : 'glass-text-shimmer-light'}>on Your Next High-Stakes Matter.</span>
                </h2>
              </div>

              <p className={`text-sm sm:text-base font-normal leading-relaxed max-w-xl pb-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                We partner directly with Am Law 100 litigation practices, catastrophic commercial insurers, and forensic engineering leaders. Evaluate deterministic pin-cite lineage on a sanitized sample of your active trial dockets or defect records.
              </p>
            </div>

            {/* 4 Protocol Guarantees */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-6 border-b ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              {protocols.map((p) => {
                const Icon = p.icon;
                return (
                  <div 
                    key={p.step} 
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      isDark 
                        ? 'bg-white/[0.04] border-white/10 hover:border-cyan-400/40' 
                        : 'bg-slate-50/80 border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-mono text-xs font-bold ${
                          isDark ? 'text-cyan-300' : 'text-blue-600'
                        }`}>
                          // {p.step}
                        </span>
                        <Icon className={`w-4 h-4 ${isDark ? 'text-slate-300' : 'text-slate-500'}`} />
                      </div>
                      <h3 className={`text-sm font-bold mb-1.5 font-display ${
                        isDark ? 'text-white' : 'text-slate-950'
                      }`}>
                        {p.title}
                      </h3>
                      <p className={`text-xs leading-relaxed font-normal ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestDemo("Glassmorphic Executive Briefing")}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(14,165,233,0.5)] cursor-pointer active:scale-95"
                >
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="mailto:briefings@trinityaiboston.com"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-mono border transition-colors ${
                    isDark 
                      ? 'glass-pill hover:bg-white/20 text-slate-200 border-white/20' 
                      : 'glass-pill-light hover:bg-white text-slate-800 border-slate-300 shadow-sm'
                  }`}
                >
                  <Mail className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                  <span>briefings@trinityaiboston.com</span>
                </a>
              </div>

              <div className={`flex items-center gap-3 text-xs font-mono ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Confidential NDA Protocol • SLA: &lt; 4 hr Turnaround</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
