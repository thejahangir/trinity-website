import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { differentiationPrinciples } from '../../data/homepageData';

export default function ComparisonMatrixV2() {
  const [expandedPillar, setExpandedPillar] = useState(null);

  const evaluationMatrix = [
    {
      criterion: 'Hallucination Tolerance',
      requirement: 'Zero invention of facts; 100% reproducible outcomes across runs.',
      genericAI: 'High Risk. Probabilistic guessing causes subtle, catastrophic errors in legal briefs.',
      trinityAI: '0.00% Tolerance. Purely deterministic grounding engine. No assertions without source pin.',
      verdict: 'MANDATORY FOR LAW'
    },
    {
      criterion: 'Evidentiary Lineage & Pin-Cites',
      requirement: 'Every conclusion anchored to exact docket page, line number, and exhibit paragraph.',
      genericAI: 'Unanchored. Produces generic conversational summaries with black-box reasoning.',
      trinityAI: '100% Lineage. Click-through source verification directly to stamped PDF/CAD coordinates.',
      verdict: 'JUDICIALLY DEFENSIBLE'
    },
    {
      criterion: 'Data Privacy & Retraining Risk',
      requirement: 'Confidential client work product and discovery must never train foundation models.',
      genericAI: 'Severe Contamination Risk. Many enterprise vendors retain data or share model states.',
      trinityAI: 'Zero Retraining Guarantee. Air-gapped / dedicated sovereign VPC tenant. Ephemeral processing.',
      verdict: 'SOC-2 / BAA READY'
    },
    {
      criterion: 'Multi-Document Contradiction Isolation',
      requirement: 'Synthesizes 50,000+ exhibits to detect opposing sworn testimony contradictions.',
      genericAI: 'Token Window Bottleneck. Loses context across multi-volume depositions and blueprints.',
      trinityAI: 'Bipartite Contradiction Graph. Cross-references millions of pages without context drop.',
      verdict: 'TRIAL-READY'
    },
    {
      criterion: 'Judicial Admissibility (FRE 901)',
      requirement: 'Cryptographic chain of custody satisfying Federal Rules of Evidence authentication.',
      genericAI: 'Inadmissible. Output cannot be authenticated under Federal Rules of Evidence 901/902.',
      trinityAI: 'FRE 901 Compliant. Immutable SHA-256 hashed event logging for every extraction.',
      verdict: 'AUTHENTICATED'
    },
    {
      criterion: 'Governance & Human-in-the-Loop',
      requirement: 'AI prepares verified record; human partner or general counsel signs off.',
      genericAI: 'Ungoverned Autonomous Generation. Creates unreviewed liability and malpractice risk.',
      trinityAI: 'Partner Certification Gate. AI proposes defensible brief; lead counsel executes sign-off.',
      verdict: 'ETHICAL & AUDITABLE'
    }
  ];

  const pillarDetails = {
    'Purpose-Built': 'In commercial litigation or multimillion-dollar insurance claims, probabilistic guessing is malpractice. Trinity AI utilizes abstract syntax tree (AST) parsers, formal logic constraints, and deterministic ontology graphs. The same inquiry over the same docket always produces identical, verifiable findings.',
    'Evidence-Based': 'Every factual assertion rendered by Cosmos One™ or Cosmos Nexus™ includes an immutable evidentiary coordinate (e.g., Exhibit 14, Page 82, Lines 14-22). Counsel can click any finding to inspect the underlying scanned document in high resolution.',
    'Human-Centered': 'Consumer AI tools are built for creative writing and casual summaries. Trinity AI was designed from day one with Am Law 100 litigation partners, chief claims officers, and construction forensic engineers to handle messy, massive, adversarial record sets with mandatory partner sign-off.',
    'Enterprise-Ready': 'Trinity AI deploys within dedicated, isolated single-tenant environments. We enforce strict contractual zero-retraining guarantees: client data, exhibits, and work product are never used to train or tune any model weights.'
  };

  return (
    <section id="differentiation" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 04 // ARCHITECTURAL SPECIFICATION ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Deterministic Intelligence vs. Probabilistic LLMs.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Enterprise procurement criteria for high-stakes decision systems in law, reinsurance, and infrastructure.
          </p>
        </div>

        {/* Procurement Table Container */}
        <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-950 text-white font-mono text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold w-1/4">Evaluation Criterion</th>
                  <th className="py-4 px-6 font-semibold w-1/3 text-slate-300">Generic Generative LLMs / Chatbots</th>
                  <th className="py-4 px-6 font-semibold w-1/3 text-emerald-400">Trinity AI Deterministic Engine</th>
                  <th className="py-4 px-6 font-semibold text-right">Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {evaluationMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    {/* Criterion & Requirement */}
                    <td className="py-5 px-6 space-y-1 align-top bg-slate-50/40">
                      <div className="font-bold text-slate-950 font-display">
                        {row.criterion}
                      </div>
                      <div className="text-xs text-slate-500">
                        {row.requirement}
                      </div>
                    </td>

                    {/* Generic AI Failure Mode */}
                    <td className="py-5 px-6 space-y-2 align-top text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.genericAI}</span>
                      </div>
                    </td>

                    {/* Trinity AI Deterministic Standard */}
                    <td className="py-5 px-6 space-y-2 align-top text-slate-950 font-medium bg-blue-50/20">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.trinityAI}</span>
                      </div>
                    </td>

                    {/* Verdict */}
                    <td className="py-5 px-6 align-top text-right">
                      <span className="inline-block font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                        {row.verdict}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Architectural Pillar Drawers */}
        <div className="space-y-4 pt-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Four Core Pillars of Trinity AI Architecture
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentiationPrinciples.map((point, idx) => {
              const isExpanded = expandedPillar === point.title;
              const detail = pillarDetails[point.title];

              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all space-y-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-trinity-blue font-mono font-bold text-xs">
                        ✓
                      </div>
                      <h4 className="text-sm font-bold font-display text-slate-950">
                        {point.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => setExpandedPillar(isExpanded ? null : point.title)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-950 flex items-center gap-1 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors"
                    >
                      <span>{isExpanded ? 'Less' : 'Inspect'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {point.description}
                  </p>

                  {isExpanded && detail && (
                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-800 bg-slate-50 p-3.5 rounded-lg leading-relaxed font-mono">
                      {detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
