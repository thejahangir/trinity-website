import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function PlatformsV2({ onRequestDemo }) {
  return (
    <section id="products" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-trinity-blue mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue" />
              01 // Purpose-Built Platforms
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 tracking-tight">
              Two Deterministic Engines. <span className="text-slate-500 font-semibold">Zero Ungrounded Hypotheses.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
            Specialized verification architectures mapped to exact evidentiary standards.
          </p>
        </div>

        {/* Compact 2-Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
          
          {/* PLATFORM 1: Cosmos One™ */}
          <div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-white p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between hover:shadow-md">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-slate-950 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                    01
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-trinity-blue block leading-none mb-1">
                      Legal & Claims Defense
                    </span>
                    <h3 className="text-xl font-bold font-display text-slate-950 leading-tight">
                      Cosmos One™
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-trinity-blue border border-blue-200/80 shrink-0">
                  AmLaw 100 Ready
                </span>
              </div>

              {/* Concise Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Autonomous litigation and claims intelligence. Ingests tens of thousands of docket pages and transcripts to surface contradictions and verify statutory defenses.
              </p>

              {/* Compact Capability List */}
              <div className="space-y-2 py-2 border-y border-slate-200/70 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                  <span>Deposition contradiction extraction & email chronology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                  <span>Statutory notice bar auditing (e.g. 93A, statute of repose)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                  <span>Reinsurance treaty occurrence & deductible boundary validation</span>
                </div>
              </div>

              {/* Compact Metrics Row */}
              <div className="flex items-center gap-3 font-mono text-[11px] text-slate-600">
                <div className="px-2.5 py-1 rounded bg-white border border-slate-200">
                  Velocity: <strong className="text-slate-950">78% Faster</strong>
                </div>
                <div className="px-2.5 py-1 rounded bg-white border border-slate-200">
                  Lineage: <strong className="text-slate-950">100% Pin-Cite</strong>
                </div>
              </div>
            </div>

            {/* Compact Action Button */}
            <button
              onClick={() => onRequestDemo("Cosmos One™ (Litigation & Claims)")}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-950 text-white hover:bg-trinity-blue font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Schedule Cosmos One™ Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* PLATFORM 2: Cosmos Nexus™ */}
          <div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-white p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between hover:shadow-md">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-slate-950 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                    02
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-trinity-gold block leading-none mb-1">
                      Forensic Engineering
                    </span>
                    <h3 className="text-xl font-bold font-display text-slate-950 leading-tight">
                      Cosmos Nexus™
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0">
                  ENR Top GC Proven
                </span>
              </div>

              {/* Concise Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Multi-party construction defect intelligence. Synthesizes subcontracts, change orders, and daily logs to reconcile fault allocation and scope carveouts.
              </p>

              {/* Compact Capability List */}
              <div className="space-y-2 py-2 border-y border-slate-200/70 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trinity-gold shrink-0" />
                  <span>Subcontract scope carveout & flashing isolation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trinity-gold shrink-0" />
                  <span>Trade-by-trade fault allocation matrix (15+ sub-trades)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trinity-gold shrink-0" />
                  <span>CAD drawing markups & change order chronological mapping</span>
                </div>
              </div>

              {/* Compact Metrics Row */}
              <div className="flex items-center gap-3 font-mono text-[11px] text-slate-600">
                <div className="px-2.5 py-1 rounded bg-white border border-slate-200">
                  Exposure Filtered: <strong className="text-slate-950">Up to 90.1%</strong>
                </div>
                <div className="px-2.5 py-1 rounded bg-white border border-slate-200">
                  Scope Match: <strong className="text-slate-950">100% Grounded</strong>
                </div>
              </div>
            </div>

            {/* Compact Action Button */}
            <button
              onClick={() => onRequestDemo("Cosmos Nexus™ (Construction Defect)")}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-950 text-white hover:bg-trinity-blue font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Schedule Cosmos Nexus™ Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
