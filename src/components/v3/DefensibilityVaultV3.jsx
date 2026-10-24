import React from 'react';
import { 
  Sparkles, 
  Check 
} from 'lucide-react';

export default function DefensibilityVaultV3({ onRequestDemo }) {

  const vaultItems = [
    {
      id: "pin-cite",
      title: "100% Primary Pin-Cite Grounding",
      headline: "Zero Orphaned Assertions. Absolute Source Traceability.",
      desc: "Every factual premise, chronology milestone, or contradictory finding links directly to a verifiable docket page, deposition transcript line, or authenticated contract exhibit.",
      stat: "100%",
      statLabel: "Primary Lineage",
      badge: "EVIDENTIARY AUDIT",
      specifications: [
        "Byte-aligned OCR coordinates for instant courtroom exhibit retrieval",
        "Eliminates probabilistic hallucination through deterministic constraint anchors",
        "Automated cross-check against Federal Rules of Evidence 901 & 902 standards"
      ]
    },
    {
      id: "dag",
      title: "Directed Acyclic Graph (DAG) Logic",
      headline: "Inadmissibility-Proof Step-by-Step Causal Reasoning.",
      desc: "Black-box LLM summaries are legally indefensible under cross-examination. Trinity constructs transparent causal DAG logic paths where each rule inference and evidentiary step can be independently audited.",
      stat: "0.00%",
      statLabel: "Hallucination Tolerance",
      badge: "CAUSAL EXPLAINABILITY",
      specifications: [
        "Step-by-step audit trails ready for testifying expert witness defense",
        "Mathematical rule-solving for complex multi-tier statutory deadlines",
        "Reversible graph traversal allowing counsel to inspect every intermediate premise"
      ]
    },
    {
      id: "sovereignty",
      title: "Sovereign Air-Gapped Tenant VPC",
      headline: "Absolute Isolation. Zero Customer Retraining.",
      desc: "Your confidential trial work product, internal reinsurance claim reserves, and proprietary trade contracts remain strictly inside your private perimeter. Zero client data is ever used to retrain external foundation models.",
      stat: "Zero",
      statLabel: "Data Retention by External Models",
      badge: "ENTERPRISE PRIVACY",
      specifications: [
        "Dedicated single-tenant VPC deployments on AWS GovCloud or Azure Government",
        "Customer-managed encryption keys (BYOK) with AES-256 at rest and TLS 1.3 in transit",
        "SOC-2 Type II certified and strict ethical wall role-based access control (RBAC)"
      ]
    }
  ];

  return (
    <section id="vault" className="w-full py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0E2EC]">
          <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>04 // Defensibility & Trust Vault</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
            Institutional Trust Architecture.
          </h2>
        </div>
        <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
          Engineered for trial attorneys, chief claims officers, and enterprise risk committees who cannot afford evidentiary ambiguity.
        </p>
      </div>

      {/* 3 Asymmetric Bento Trust Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
        {vaultItems.map((item, idx) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-[32px] border border-[#E0E2EC] p-8 flex flex-col justify-between m3-elevation-1 hover:m3-elevation-3 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EFF1F6]">
                  <span className="font-mono text-xs font-black text-[#0B57D0]">
                    // 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFF1F6] text-[#43474E]">
                    {item.badge}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl font-black text-[#1A1C1E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0B57D0] uppercase tracking-wider mb-3">
                    {item.headline}
                  </p>
                  <p className="text-xs text-[#43474E] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="pt-3 space-y-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#73777F] tracking-wider block">
                    Verified Protocols:
                  </span>
                  {item.specifications.map((spec, sidx) => (
                    <div key={sidx} className="flex items-start gap-2 text-xs text-[#1A1C1E]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat Tonal Box */}
              <div className="mt-6 pt-4 border-t border-[#EFF1F6] bg-[#F6F7FA] rounded-2xl p-4 border border-[#E0E2EC]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black font-mono text-[#1A1C1E]">
                      {item.stat}
                    </div>
                    <div className="text-[11px] font-medium text-[#73777F] mt-0.5">
                      {item.statLabel}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRequestDemo(`Audit Protocol: ${item.title}`)}
                    className="px-3 py-1.5 rounded-full bg-white hover:bg-[#D3E3FD] text-[#0B57D0] border border-[#C2E7FF] text-[10px] font-mono font-bold uppercase transition-colors cursor-pointer"
                  >
                    Verify →
                  </button>
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
