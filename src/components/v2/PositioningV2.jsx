import React from 'react';
import { XCircle, CheckCircle2, Shield, AlertTriangle } from 'lucide-react';

export default function PositioningV2() {
  return (
    <section id="positioning" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
            <span>[ 01 // POSITIONING & ARCHITECTURE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-950 tracking-tight leading-tight">
            Intelligence Built for Complex Business Problems.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Most artificial intelligence is designed for open-ended conversation, creative generation, or summary. Trinity AI is engineered for high-stakes decisions where every conclusion must be defensible, explainable, and anchored to verifiable primary evidence.
          </p>
        </div>

        {/* Enterprise Comparison Matrix - Flat Architectural Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Column A: Generic AI / Chatbots (The Enterprise Problem) */}
          <div className="p-7 rounded-xl bg-white border border-slate-300 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">Generic LLMs & Chatbots</h3>
                  <p className="text-xs text-slate-500 font-mono">Probabilistic & Non-Deterministic</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                UNACCEPTABLE RISK
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">Probabilistic Hallucinations:</strong> Output changes across runs; cannot guarantee reproducibility in legal or regulatory dockets.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">Black-Box Reasoning:</strong> Cannot pinpoint the exact line, contract clause, or deposition page supporting a finding.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">Model Retraining Risk:</strong> Enterprise confidential dockets and work product can leak into model weights.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-800">Autonomous Liability:</strong> Ungoverned generations expose firms to malpractice, bad-faith claims, and judicial sanctions.</span>
              </li>
            </ul>
          </div>

          {/* Column B: Trinity AI Boston (The Enterprise Standard) */}
          <div className="p-7 rounded-xl bg-white border-2 border-trinity-blue space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-trinity-blue">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-display">Trinity AI Decision Intelligence</h3>
                  <p className="text-xs text-trinity-blue font-mono font-semibold">Deterministic & Evidence-Grounded</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ENTERPRISE DEFENSIBLE
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">100% Deterministic Grounding:</strong> Every single metric, statutory citation, and timeline is pinned to source exhibits.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Auditable Reasoning Graphs:</strong> Full mathematical lineage from raw docket ingestion to final judicial tender.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Zero Model Retraining:</strong> Complete data isolation; customer evidence is never cached, stored, or used for model training.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900">Human-in-the-Loop Authority:</strong> AI prepares the verified record; partner or lead counsel signs off on decisions.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
