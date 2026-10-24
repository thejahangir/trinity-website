import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Scale, 
  Building 
} from 'lucide-react';

export default function PlatformsV3({ onRequestDemo }) {

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Material Pill Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0E2EC]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>01 // Purpose-Built Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight leading-tight">
              Two Deterministic Engines. <br className="hidden sm:inline" />
              <span className="text-[#0B57D0]">Zero Ungrounded Hypotheses.</span>
            </h2>
          </div>
          <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
            Engineered from ground zero for the specific evidentiary standards of high-stakes litigation and multi-party defect defense.
          </p>
        </div>

        {/* 2 Engine Showcase Cards (Material 3 Elevated Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          
          {/* PLATFORM 1: COSMOS ONE™ */}
          <div className="bg-white rounded-[32px] border border-[#C3C7D0]/60 p-7 sm:p-9 flex flex-col justify-between m3-elevation-1 hover:m3-elevation-3 transition-all duration-300 group">
            <div className="space-y-6">
              
              {/* Header Lockup */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center font-bold text-lg shadow-xs">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#0B57D0] block">
                      Litigation & Claims Intelligence
                    </span>
                    <h3 className="text-2xl font-black text-[#1A1C1E]">
                      COSMOS ONE™
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#D3E3FD] text-[#041E49] border border-[#C2E7FF] shrink-0">
                  AmLaw 100 Proven
                </span>
              </div>

              {/* Core Proposition */}
              <p className="text-sm text-[#43474E] leading-relaxed">
                Autonomous litigation and claims intelligence. Ingests tens of thousands of docket pages, transcripts, and exhibits to surface contradictions, statutory notice bars, and deductible boundaries with 100% pin-cite lineage.
              </p>

              {/* M3 Feature Highlights */}
              <div className="space-y-3 py-4 border-y border-[#EFF1F6] text-xs text-[#1A1C1E]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Deposition contradiction extraction</strong> with direct line-and-page citation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Statutory notice bar auditing</strong> (e.g. Chapter 93A, statutes of repose & limitation)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Reinsurance treaty occurrence</strong> & aggregate exhaustion verification</span>
                </div>
              </div>

              {/* M3 Metric Chips */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#EFF1F6] border border-[#E0E2EC]">
                  <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider block">
                    Review Velocity
                  </span>
                  <div className="text-xl font-black text-[#0B57D0] mt-0.5">
                    78% Faster
                  </div>
                  <span className="text-[11px] text-[#43474E]">Compared to manual paralegal review</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EFF1F6] border border-[#E0E2EC]">
                  <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider block">
                    Evidentiary Lineage
                  </span>
                  <div className="text-xl font-black text-[#1A1C1E] mt-0.5">
                    100% Pin-Cite
                  </div>
                  <span className="text-[11px] text-[#43474E]">Zero ungrounded hallucinations</span>
                </div>
              </div>

            </div>

            {/* M3 Filled Button CTA */}
            <div className="mt-8 pt-6 border-t border-[#EFF1F6]">
              <button
                type="button"
                onClick={() => onRequestDemo("Cosmos One™ (Litigation & Claims Intelligence)")}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B57D0] text-white hover:bg-[#0842A0] active:scale-98 text-xs font-semibold tracking-wider uppercase transition-all duration-200 m3-elevation-1 hover:m3-elevation-2 cursor-pointer"
              >
                <span>Schedule Cosmos One™ Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PLATFORM 2: COSMOS NEXUS™ */}
          <div className="bg-white rounded-[32px] border border-[#C3C7D0]/60 p-7 sm:p-9 flex flex-col justify-between m3-elevation-1 hover:m3-elevation-3 transition-all duration-300 group">
            <div className="space-y-6">
              
              {/* Header Lockup */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFDF99] text-[#2A1700] flex items-center justify-center font-bold text-lg shadow-xs">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#A36B00] block">
                      Forensic Engineering & Construction Defect
                    </span>
                    <h3 className="text-2xl font-black text-[#1A1C1E]">
                      COSMOS NEXUS™
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFDF99] text-[#2A1700] border border-[#FFBA38]/40 shrink-0">
                  ENR Top GC Tested
                </span>
              </div>

              {/* Core Proposition */}
              <p className="text-sm text-[#43474E] leading-relaxed">
                Intelligent platform designed for complex construction defect defense. Ingests subcontracts, daily logs, change orders, and BIM drawings to isolate scope boundaries and produce mathematical fault allocation matrices.
              </p>

              {/* M3 Feature Highlights */}
              <div className="space-y-3 py-4 border-y border-[#EFF1F6] text-xs text-[#1A1C1E]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Subcontract scope carveout & flashing isolation</strong> across 15+ sub-trades</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Trade-by-trade fault allocation matrix</strong> with contractually verified formulas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Change order chronological impact trails</strong> linked to certified architectural markups</span>
                </div>
              </div>

              {/* M3 Metric Chips */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#EFF1F6] border border-[#E0E2EC]">
                  <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider block">
                    Liability Filtered
                  </span>
                  <div className="text-xl font-black text-[#A36B00] mt-0.5">
                    Up to 90.1%
                  </div>
                  <span className="text-[11px] text-[#43474E]">Unwarranted defect exposure removed</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EFF1F6] border border-[#E0E2EC]">
                  <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider block">
                    Scope Verification
                  </span>
                  <div className="text-xl font-black text-[#1A1C1E] mt-0.5">
                    100% Grounded
                  </div>
                  <span className="text-[11px] text-[#43474E]">Direct subcontract exhibit alignment</span>
                </div>
              </div>

            </div>

            {/* M3 Filled Button CTA */}
            <div className="mt-8 pt-6 border-t border-[#EFF1F6]">
              <button
                type="button"
                onClick={() => onRequestDemo("Cosmos Nexus™ (Construction Defect Defense)")}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1A1C1E] text-white hover:bg-[#0B57D0] active:scale-98 text-xs font-semibold tracking-wider uppercase transition-all duration-200 m3-elevation-1 hover:m3-elevation-2 cursor-pointer"
              >
                <span>Schedule Cosmos Nexus™ Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
