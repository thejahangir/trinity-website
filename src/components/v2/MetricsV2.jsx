import React from 'react';
import { 
  Building2, 
  Briefcase, 
  HardHat, 
  Check, 
  ArrowRight
} from 'lucide-react';

export default function MetricsV2({ onRequestDemo }) {
  const metrics = [
    {
      value: "$2.4B+",
      label: "Dispute Evidence Audited",
      detail: "Across complex commercial litigation, catastrophic property claims, and infrastructure disputes."
    },
    {
      value: "0.00%",
      label: "Hallucination Tolerance",
      detail: "Zero unverified assertions. Every cited finding requires 100% primary source lineage."
    },
    {
      value: "78%",
      label: "Velocity Acceleration",
      detail: "Average reduction in time required to synthesize depositions and draft defensible briefs."
    },
    {
      value: "100%",
      label: "Primary Pin-Cite Lineage",
      detail: "Direct byte-level alignment to docket pages, transcript lines, and contract exhibits."
    }
  ];

  const sectors = [
    {
      icon: Briefcase,
      title: "AmLaw 100 Litigation Counsel",
      sub: "Managing Partners & Trial Teams",
      useCases: [
        "Multi-depo contradiction extraction",
        "Statutory notice & procedural deadline audits",
        "Chronological factual dispute matrices"
      ]
    },
    {
      icon: Building2,
      title: "Global Insurance Carriers",
      sub: "Claims Directors & Reinsurance Counsel",
      useCases: [
        "Catastrophic treaty reinsurance verification",
        "Multi-occurrence deductible boundary audits",
        "Bad faith exposure mitigation & review"
      ]
    },
    {
      icon: HardHat,
      title: "ENR Top Contractors & Forensics",
      sub: "General Counsel & Expert Engineers",
      useCases: [
        "Subcontractor trade fault allocation",
        "Flashing & waterproofing scope carveouts",
        "Change order chronological impact trails"
      ]
    }
  ];

  return (
    <section id="insights" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-trinity-blue mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue" />
              03 // Measured Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 tracking-tight">
              Validated on High-Stakes Complexity.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            When millions are on the line, enterprise legal and risk leaders trust Trinity to uncover the decisive evidentiary anchor.
          </p>
        </div>

        {/* 4 Architectural Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-950 tracking-tight mb-2">
                {m.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                {m.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Sector Columns */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
              Sector Specialization
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950">
              Where Trinity Delivers Defensible Outcomes
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-200 p-7 bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold font-display text-slate-950 mb-0.5">
                      {sec.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 mb-6">
                      {sec.sub}
                    </p>

                    <div className="space-y-2.5">
                      {sec.useCases.map((uc, uidx) => (
                        <div key={uidx} className="flex items-center gap-2.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onRequestDemo(sec.title)}
                    className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 hover:text-trinity-blue transition-colors group"
                  >
                    <span>Request Sector Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
