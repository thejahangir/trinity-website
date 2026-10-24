import React from 'react';
import { 
  Building2, 
  Briefcase, 
  HardHat, 
  Check, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export default function MetricsGridV3({ onRequestDemo }) {
  const metrics = [
    {
      value: "$2.4B+",
      label: "Dispute Evidence Audited",
      detail: "Across commercial arbitration, catastrophic property claims, and infrastructure disputes.",
      color: "text-[#0B57D0]"
    },
    {
      value: "0.00%",
      label: "Hallucination Tolerance",
      detail: "Zero ungrounded assertions. Every cited finding requires 100% authenticated source lineage.",
      color: "text-emerald-700"
    },
    {
      value: "78%",
      label: "Velocity Acceleration",
      detail: "Average reduction in time required to synthesize depositions and draft summary judgment briefs.",
      color: "text-[#0B57D0]"
    },
    {
      value: "100%",
      label: "Primary Pin-Cite Lineage",
      detail: "Direct byte-level alignment to docket pages, transcript lines, and contract exhibits.",
      color: "text-[#A36B00]"
    }
  ];

  const sectors = [
    {
      icon: Briefcase,
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
    <section id="sectors" className="w-full py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0E2EC]">
          <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>05 // Measured Impact & Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
            Validated Where Millions Are at Stake.
          </h2>
        </div>
        <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
          High-exposure commercial disputes demand mathematical certainty. Trinity provides the decisive evidentiary anchor.
        </p>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        {metrics.map((m, idx) => (
          <div 
            key={idx}
            className="p-6 rounded-[28px] bg-white border border-[#E0E2EC] m3-elevation-1 hover:m3-elevation-2 transition-all"
          >
            <div className={`text-3xl sm:text-4xl font-black font-mono tracking-tight mb-1.5 ${m.color}`}>
              {m.value}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#1A1C1E] mb-2">
              {m.label}
            </div>
            <p className="text-xs text-[#73777F] leading-relaxed pt-2 border-t border-[#EFF1F6]">
              {m.detail}
            </p>
          </div>
        ))}
      </div>

      {/* 3 Sector Columns */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {sectors.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div 
              key={idx}
              className="bg-white rounded-[32px] border border-[#E0E2EC] p-7 flex flex-col justify-between m3-elevation-1 hover:m3-elevation-2 transition-all group"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="text-lg font-bold text-[#1A1C1E] mb-0.5">
                  {sec.title}
                </h4>
                <p className="text-xs font-mono text-[#73777F] mb-5">
                  {sec.sub}
                </p>

                <div className="space-y-2.5">
                  {sec.useCases.map((uc, uidx) => (
                    <div key={uidx} className="flex items-start gap-2.5 text-xs text-[#43474E]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFF1F6]">
                <button
                  type="button"
                  onClick={() => onRequestDemo(`Sector Briefing: ${sec.title}`)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#EFF1F6] hover:bg-[#D3E3FD] text-[#0B57D0] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Request Sector Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
