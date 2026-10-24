import React from 'react';
import { 
  Sparkles, 
  Check 
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';

export default function GlassDefensibilityV4({ onRequestDemo }) {
  const { isDark } = useThemeV4();

  const pillars = [
    {
      id: "pin-cite",
      tag: "EVIDENTIARY AUDIT",
      title: "100% Primary Pin-Cite Grounding",
      headline: "Zero Orphaned Assertions. Absolute Source Traceability.",
      desc: "Every factual premise, chronology milestone, or contradictory finding links directly to a verifiable docket page, deposition transcript line, or authenticated contract exhibit.",
      stat: "100%",
      statLabel: "Primary Lineage",
      specs: [
        "Byte-aligned OCR coordinates for instant courtroom exhibit retrieval",
        "Eliminates probabilistic hallucination through deterministic constraint anchors",
        "Automated cross-check against Federal Rules of Evidence 901 & 902 standards"
      ]
    },
    {
      id: "dag",
      tag: "CAUSAL EXPLAINABILITY",
      title: "Directed Acyclic Graph (DAG) Logic",
      headline: "Inadmissibility-Proof Step-by-Step Causal Reasoning.",
      desc: "Black-box LLM summaries are legally indefensible under cross-examination. Trinity constructs transparent causal DAG logic paths where each rule inference and evidentiary step can be independently audited.",
      stat: "0.00%",
      statLabel: "Hallucination Tolerance",
      specs: [
        "Step-by-step audit trails ready for testifying expert witness defense",
        "Mathematical rule-solving for complex multi-tier statutory deadlines",
        "Reversible graph traversal allowing counsel to inspect every intermediate premise"
      ]
    },
    {
      id: "sovereignty",
      tag: "ENTERPRISE PRIVACY",
      title: "Sovereign Air-Gapped Tenant VPC",
      headline: "Absolute Isolation. Zero Customer Retraining.",
      desc: "Your confidential trial work product, internal reinsurance claim reserves, and proprietary trade contracts remain strictly inside your private perimeter. Zero client data is ever used to retrain external foundation models.",
      stat: "Zero",
      statLabel: "Data Retention by External Models",
      specs: [
        "Dedicated single-tenant VPC deployments on AWS GovCloud or Azure Government",
        "Customer-managed encryption keys (BYOK) with AES-256 at rest and TLS 1.3 in transit",
        "SOC-2 Type II certified and strict ethical wall role-based access control (RBAC)"
      ]
    }
  ];

  return (
    <section 
      id="defensibility" 
      className={`w-full py-24 lg:py-32 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'glass-canvas text-white border-white/10' : 'glass-canvas-light text-slate-900 border-slate-200'
      }`}
    >
      
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-purple-600/15' : 'bg-purple-400/15'
      }`} />

      {/* Boxed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase ${
              isDark ? 'glass-pill text-cyan-300' : 'glass-pill-light text-purple-700'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} />
              <span>04 // Defensibility Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
              Built for the Rigor of{' '}
              <span className={isDark ? 'glass-text-shimmer' : 'glass-text-shimmer-light'}>Adversarial Scrutiny.</span>
            </h2>
          </div>
          <p className={`text-sm max-w-md font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            In high-stakes disputes, probabilistic AI is an unacceptable risk. Trinity is engineered to satisfy the evidentiary standards of federal judges, arbitrators, and executive risk committees.
          </p>
        </div>

        {/* 3 Asymmetric Floating Glass Slabs */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-[36px] p-8 sm:p-9 flex flex-col justify-between border transition-all duration-300 group relative overflow-hidden ${
                isDark 
                  ? 'glass-panel-elevated border-white/15 hover:border-cyan-400/50' 
                  : 'glass-panel-elevated-light border-slate-200 hover:border-blue-400 shadow-xl'
              }`}
            >
              <div className="space-y-5 relative z-10">
                <div className={`flex items-center justify-between pb-4 border-b ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <span className={`text-xs font-mono font-black ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                    // ARCHITECTURE 0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isDark ? 'bg-white/10 text-slate-300 border border-white/15' : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl font-bold font-display mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
                    {item.headline}
                  </p>
                  <p className={`text-xs leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Verified Protocols list */}
                <div className={`pt-3 space-y-2.5 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-wider block ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Defensibility Protocols:
                  </span>
                  {item.specs.map((spec, sidx) => (
                    <div key={sidx} className={`flex items-start gap-2.5 text-xs ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isDark 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                          : 'bg-blue-100 text-blue-700 border border-blue-300'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stat Footer & Verify Button */}
              <div className={`mt-8 pt-5 border-t -mx-8 -mb-9 p-6 px-8 rounded-b-[36px] flex items-center justify-between ${
                isDark ? 'border-white/10 bg-black/30' : 'border-slate-200 bg-slate-50/80'
              }`}>
                <div>
                  <div className={`text-2xl sm:text-3xl font-black font-mono ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {item.stat}
                  </div>
                  <div className={`text-[10px] font-mono uppercase mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.statLabel}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestDemo(`Protocol Audit: ${item.title}`)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isDark 
                      ? 'glass-pill hover:bg-white/20 text-cyan-300' 
                      : 'glass-pill-light hover:bg-white text-blue-700 border-slate-300 shadow-sm'
                  }`}
                >
                  Verify Protocol →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
