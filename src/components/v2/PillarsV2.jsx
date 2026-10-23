import React from 'react';
import { 
  FileCheck2, 
  GitFork, 
  ShieldCheck 
} from 'lucide-react';

export default function PillarsV2() {
  const pillars = [
    {
      num: "01",
      icon: FileCheck2,
      title: "100% Pin-Cite Grounding",
      headline: "Zero orphaned assertions. Every conclusion cites primary records.",
      desc: "Generic LLMs summarize based on probabilistic completion. Trinity operates deterministically: every factual assertion, timeline milestone, or contradictory statement links directly to an underlying docket page, deposition line, or contract exhibit.",
      badge: "EVIDENTIARY LINEAGE"
    },
    {
      num: "02",
      icon: GitFork,
      title: "Explainable Causal Logic",
      headline: "Audit-proof reasoning trails that survive adversarial scrutiny.",
      desc: "Black-box AI is inadmissible and dangerous in high-stakes disputes. Trinity produces verifiable, step-by-step causal logic graphs. Counsel and experts can test each premise, rule constraint, and conclusion independently under cross-examination.",
      badge: "DETERMINISTIC GRAPH"
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Sovereign Air-Gapped Security",
      headline: "Single-tenant architecture. Zero customer data retraining.",
      desc: "Your proprietary case files and policy schedules never leave your enterprise perimeter. Trinity deploys in isolated single-tenant environments with end-to-end encryption, strict RBAC, SOC-2 readiness, and absolute zero-retraining guarantees.",
      badge: "ENTERPRISE SOVEREIGNTY"
    }
  ];

  return (
    <section id="differentiation" className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-trinity-blue mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue" />
            02 // Defensibility Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 tracking-tight">
            Built for Courtrooms, Arbitrations, <br className="hidden sm:inline" />
            <span className="text-slate-500 font-semibold">and Catastrophic Exposure.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            In high-stakes enterprise disputes, a plausible hallucination is a catastrophic liability. Trinity is engineered around three non-negotiable architectural requirements.
          </p>
        </div>

        {/* 3 Architectural Minimalist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.num}
                className="group rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      // {p.num}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {p.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="pt-5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-slate-950 mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-trinity-blue uppercase tracking-wider mb-3">
                      {p.headline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
