import { 
  Building2, 
  Briefcase, 
  HardHat, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function MetricsV3({ onRequestDemo }) {
  const metrics = [
    {
      value: "$2.4B+",
      label: "Dispute Evidence Audited",
      detail: "Across commercial arbitration, catastrophic property claims, and infrastructure disputes.",
      accent: "text-[#0B57D0]"
    },
    {
      value: "0.00%",
      label: "Hallucination Tolerance",
      detail: "Zero ungrounded assertions. Every cited finding requires 100% authenticated source lineage.",
      accent: "text-emerald-700"
    },
    {
      value: "78%",
      label: "Velocity Acceleration",
      detail: "Average reduction in time required to synthesize depositions and draft summary judgment briefs.",
      accent: "text-[#0B57D0]"
    },
    {
      value: "100%",
      label: "Primary Pin-Cite Lineage",
      detail: "Direct byte-level alignment to docket pages, transcript lines, and contract exhibits.",
      accent: "text-[#A36B00]"
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
    <section className="py-20 lg:py-28 bg-[#FDFBFF] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#EFF1F6]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>06 // Measured Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
              Validated on High-Stakes Complexity.
            </h2>
          </div>
          <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
            When multi-million dollar liabilities depend on finding the decisive evidentiary anchor, enterprise legal and risk leaders turn to Trinity.
          </p>
        </div>

        {/* 4 M3 Metric Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-[28px] border border-[#E0E2EC] bg-[#F6F7FA] hover:bg-white hover:border-[#C3C7D0] transition-all duration-300 m3-elevation-0 hover:m3-elevation-2 flex flex-col justify-between"
            >
              <div>
                <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight mb-2 ${m.accent}`}>
                  {m.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1A1C1E] mb-2 font-material">
                  {m.label}
                </div>
              </div>
              <p className="text-xs text-[#73777F] leading-relaxed font-normal pt-2 border-t border-[#E0E2EC]/60">
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Sector Columns */}
        <div className="mt-16 pt-12 border-t border-[#EFF1F6]">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0B57D0] font-bold block mb-1">
              Sector Specialization
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1C1E]">
              Where Trinity Delivers Defensible Outcomes
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-[32px] border border-[#E0E2EC] p-8 bg-white hover:border-[#0B57D0] transition-all duration-300 m3-elevation-1 hover:m3-elevation-3 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-[#1A1C1E] mb-1 font-material">
                      {sec.title}
                    </h4>

                    <p className="text-xs font-mono text-[#73777F] mb-6">
                      {sec.sub}
                    </p>

                    <div className="space-y-3">
                      {sec.useCases.map((uc, uidx) => (
                        <div key={uidx} className="flex items-start gap-2.5 text-xs text-[#43474E]">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#EFF1F6]">
                    <button
                      type="button"
                      onClick={() => onRequestDemo(`Sector Deep Dive (${sec.title})`)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#73777F]/30 bg-white hover:bg-[#EFF1F6] text-xs font-semibold text-[#1A1C1E] transition-colors cursor-pointer"
                    >
                      <span>Request Sector Briefing</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#0B57D0]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
