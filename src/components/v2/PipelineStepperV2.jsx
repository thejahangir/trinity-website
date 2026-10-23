import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal
} from 'lucide-react';
import { approachSteps } from '../../data/homepageData';

export default function PipelineStepperV2() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepDetails = [
    {
      stepNum: '01',
      title: 'Ingest & Unify the Adversarial Record',
      action: 'Multimodal Parsing & Normalization',
      summary: 'Before reasoning can begin, messy discovery records must be extracted without loss. We parse tens of thousands of scanned TIFFs, Bates-stamped PDFs, email threads, CAD architectural blueprints, and audio deposition transcripts into structured, queryable data models.',
      inputs: 'Bates-stamped discovery dockets, messy OCR filings, CAD/BIM blueprints, audio depositions.',
      transformation: 'Layout-aware visual OCR, AST tree normalization, bates number continuity auditing.',
      deliverable: 'Unified, cryptographically verified evidentiary database ready for deterministic graph linking.',
      commandPreview: 'INGEST_DOCKET: 14,200 Pages Loaded // Zero Character Loss // Bates Gap: 0 Detected'
    },
    {
      stepNum: '02',
      title: 'Connect Entities, Clauses & Chronology',
      action: 'High-Dimensional Evidence Graph',
      summary: 'We build an interconnected knowledge graph that correlates people, dates, organizations, contract clauses, and specific statutory requirements. Every factual assertion across decades of history is mapped into a multi-tiered temporal sequence.',
      inputs: 'Extracted entities, master contracts, change orders, email timestamp metadata.',
      transformation: 'Temporal sequence synthesis, multi-tier contractual hierarchy parsing, cross-document entity alignment.',
      deliverable: 'Dynamic evidentiary relationship graph exposing hidden connections and timeline gaps.',
      commandPreview: 'GRAPH_MAP: 4,819 Entities Linked // 12 Subcontract Tiers // 88 Deposition Anchors'
    },
    {
      stepNum: '03',
      title: 'Deterministic Reasoning & Conflict Audit',
      action: 'Zero-Hallucination Formal Logic',
      summary: 'Rather than predicting the next token probabilistically, Trinity AI applies formal deterministic reasoning rules. It reconciles conflicting sworn statements against contracts, detects statutory bars, and calculates defensible financial exposure.',
      inputs: 'Bipartite contradiction assertions, statutory rules (Fed. R. Civ. P., M.G.L., AIA A201).',
      transformation: 'Automated contradiction isolation, formal statutory preclusion analysis, exposure carveout calculation.',
      deliverable: 'Impeachment matrices and exposure allocation charts grounded to exact page and line citations.',
      commandPreview: 'AUDIT_VERDICT: Sworn Witness Contradiction Isolated [Dep. Tr. Vol II, P. 142 vs Ex. 19]'
    },
    {
      stepNum: '04',
      title: 'Decide with Certified Counsel Authority',
      action: 'Human-in-the-Loop Judicial Tender',
      summary: 'Trinity AI empowers lead counsel, general counsel, and claims directors to make defensible decisions with 100% confidence. AI prepares the comprehensive factual brief; lead partners review, certify, and sign off.',
      inputs: 'Drafted motions to dismiss, summary judgment exhibits, defense tender demands.',
      transformation: 'Federal ECF format validation, citation link verification, partner digital signature gate.',
      deliverable: 'Judicially defensible court filings and binding defense tender letters delivered with zero delay.',
      commandPreview: 'TENDER_READY: Defense Tender to Sub-tier Insurer Certified by Lead Partner Sarah Jenkins, Esq.'
    }
  ];

  const current = stepDetails[activeStepIndex];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 06 // METHODOLOGY & PIPELINE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Four-Stage Deterministic Pipeline.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            How raw, adversarial enterprise dockets are transformed into judicially certified decisions.
          </p>
        </div>

        {/* Stepper Timeline Container */}
        <div className="space-y-6">
          
          {/* Top Connected Stepper Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stepDetails.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-200 space-y-2.5 relative ${
                    isActive 
                      ? 'bg-slate-950 text-white border-slate-950 shadow-md' 
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-trinity-blue' : 'text-slate-400'}`}>
                      PHASE {step.stepNum}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-300'}`}></span>
                  </div>
                  <div className="text-sm font-bold font-display truncate">
                    {approachSteps[idx]?.title || step.action}
                  </div>
                  <div className={`text-[11px] font-mono truncate ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {step.action}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Active Phase Drawer */}
          <div className="bg-[#FAFAFA] border border-slate-200/90 rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
            
            {/* Phase Header */}
            <div className="space-y-3 pb-6 border-b border-slate-200">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs">
                  PIPELINE PHASE {current.stepNum} // {current.action.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  CRYPTOGRAPHICALLY AUDITABLE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950">
                {current.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                {current.summary}
              </p>
            </div>

            {/* 3-Column Inputs -> Transformation -> Deliverable */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Phase Inputs
                </div>
                <div className="text-xs text-slate-800 leading-relaxed font-normal">
                  {current.inputs}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200/80 space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-trinity-blue">
                  Deterministic Logic
                </div>
                <div className="text-xs text-slate-900 leading-relaxed font-medium">
                  {current.transformation}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                  Certified Deliverable
                </div>
                <div className="text-xs text-slate-800 leading-relaxed font-normal">
                  {current.deliverable}
                </div>
              </div>

            </div>

            {/* Terminal Command Output Preview */}
            <div className="p-4 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs flex items-center justify-between border border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 overflow-x-auto">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400">$</span>
                <span className="truncate">{current.commandPreview}</span>
              </div>
              <span className="text-[10px] text-slate-500 shrink-0 hidden sm:inline">
                LOG: TIMESTAMP 2026
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
