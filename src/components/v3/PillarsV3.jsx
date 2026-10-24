import React from 'react';
import { 
  FileCheck2, 
  GitFork, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export default function PillarsV3() {
  const pillars = [
    {
      num: "01",
      icon: FileCheck2,
      title: "100% Pin-Cite Grounding",
      badge: "EVIDENTIARY LINEAGE",
      headline: "Zero orphaned assertions. Every finding links to primary records.",
      desc: "Horizontal LLMs hallucinate based on statistical word likelihood. Trinity operates deterministically: every claim, contradiction, or timeline event maps directly to an underlying docket page, transcript line, or contract exhibit.",
      stat: "100%",
      statLabel: "Primary Source Lineage",
      color: "border-[#0B57D0]"
    },
    {
      num: "02",
      icon: GitFork,
      title: "Explainable Causal Logic",
      badge: "DETERMINISTIC GRAPH",
      headline: "Audit-proof reasoning trails that survive adversarial cross-examination.",
      desc: "Black-box AI is inadmissible and dangerous in high-stakes disputes. Trinity produces verifiable, step-by-step causal logic graphs so trial teams and expert witnesses can validate each premise and legal constraint independently.",
      stat: "0.00%",
      statLabel: "Hallucination Tolerance",
      color: "border-[#00639B]"
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Sovereign Air-Gapped Security",
      badge: "ENTERPRISE SOVEREIGNTY",
      headline: "Isolated single-tenant VPC. Zero customer data retraining.",
      desc: "Your confidential litigation work product and policy schedules never leave your enterprise boundary. Trinity deploys inside dedicated VPCs with end-to-end encryption, strict RBAC, SOC-2 readiness, and absolute zero-retraining guarantees.",
      stat: "Zero",
      statLabel: "External Foundation Model Retraining",
      color: "border-[#A36B00]"
    }
  ];

  return (
    <section id="differentiation" className="py-20 lg:py-28 bg-[#FDFBFF] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>04 // Defensibility Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
            Built for Courtrooms, Arbitrations, <br className="hidden sm:inline" />
            <span className="text-[#0B57D0]">and Multi-Million Exposure.</span>
          </h2>
          <p className="mt-3 text-sm text-[#43474E] leading-relaxed">
            In catastrophic commercial litigation and insurance claims, a plausible hallucination is an existential liability. Trinity is anchored to three non-negotiable architectural mandates.
          </p>
        </div>

        {/* 3 Material 3 Outlined Elevated Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.num}
                className="bg-white rounded-[32px] border border-[#C3C7D0]/70 hover:border-[#0B57D0] p-8 flex flex-col justify-between transition-all duration-300 m3-elevation-1 hover:m3-elevation-3 group"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#EFF1F6]">
                    <span className="font-mono text-xs font-black text-[#73777F]">
                      // PILLAR {p.num}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EFF1F6] text-[#43474E]">
                      {p.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="pt-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-black text-[#1A1C1E] mb-2 font-material">
                      {p.title}
                    </h3>

                    <p className="text-xs font-bold text-[#0B57D0] tracking-wide uppercase mb-4">
                      {p.headline}
                    </p>

                    <p className="text-xs text-[#43474E] leading-relaxed mb-6 font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Stat Container */}
                <div className="pt-5 border-t border-[#EFF1F6] bg-[#EFF1F6]/50 rounded-2xl p-4 border border-[#E0E2EC]/70">
                  <div className="text-2xl font-black text-[#1A1C1E] font-mono">
                    {p.stat}
                  </div>
                  <div className="text-[11px] font-medium text-[#73777F] mt-0.5">
                    {p.statLabel}
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
