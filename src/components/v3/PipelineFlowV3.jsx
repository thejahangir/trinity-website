import React, { useState } from 'react';
import { 
  FileSearch, 
  Network, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Check 
} from 'lucide-react';

export default function PipelineFlowV3({ onRequestDemo }) {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const pipelinePhases = [
    {
      num: "01",
      title: "Understand",
      label: "Multimodal Ingestion",
      icon: FileSearch,
      desc: "Ingests scanned pleadings, multi-generational PDFs, daily logs, and CAD markups with 100% OCR byte-level accuracy.",
      details: [
        "100,000+ docket pages processed/hour",
        "Layout-aware table & schedule extraction",
        "Automated redaction verification & pin-cite coordinate anchoring"
      ],
      outputBadge: "100% Tokenized Ingest"
    },
    {
      num: "02",
      title: "Connect",
      label: "Causal Graph Construction",
      icon: Network,
      desc: "Links disparate entities, timeline events, change order sequences, and contract exhibits into a single queryable graph.",
      details: [
        "Cross-docket pseudonym & alias resolution",
        "Chronological factual dispute matrices",
        "Subcontract exhibit & scope carveout cross-referencing"
      ],
      outputBadge: "8,400+ Linked Causal Nodes"
    },
    {
      num: "03",
      title: "Reason",
      label: "Deterministic Validation",
      icon: Cpu,
      desc: "Applies statutory domain logic, contractual exclusion boundaries, and precedent cross-referencing without probabilistic hallucinations.",
      details: [
        "Deposition contradiction identification",
        "Statutory notice bar auditing (e.g. Ch. 93A, statutes of repose)",
        "Trade-by-trade fault allocation algorithms"
      ],
      outputBadge: "0.00% Hallucination Flagged"
    },
    {
      num: "04",
      title: "Decide",
      label: "Defensible Synthesis",
      icon: CheckCircle2,
      desc: "Delivers explainable insights, citation briefs, and defensible settlement matrices with expert human-in-the-loop sign-off.",
      details: [
        "100% primary source pin-cite lineage exports",
        "Deposition cross-examination impeachment outlines",
        "Defensible claim reserve adjustment recommendations"
      ],
      outputBadge: "Counsel Sign-Off Ready"
    }
  ];

  const current = pipelinePhases[selectedPhase];
  const CurrentIcon = current.icon;

  return (
    <section id="pipeline" className="w-full py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0E2EC]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>03 // The Decision Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
            How Trinity Engineers Defensibility.
          </h2>
        </div>
        <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
          A four-stage deterministic workflow engineered to survive vigorous adversarial scrutiny in courtrooms and arbitrations.
        </p>
      </div>

      {/* 4 Connected Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        {pipelinePhases.map((phase, idx) => {
          const isSelected = selectedPhase === idx;
          const Icon = phase.icon;
          return (
            <div
              key={phase.num}
              onClick={() => setSelectedPhase(idx)}
              className={`p-6 rounded-[28px] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#0B57D0] m3-elevation-2 ring-2 ring-[#0B57D0]/20'
                  : 'bg-[#F0F4F9] border-[#E0E4EC] hover:bg-white hover:border-[#C3C7D0]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-black ${isSelected ? 'text-[#0B57D0]' : 'text-[#73777F]'}`}>
                    // PHASE {phase.num}
                  </span>
                  <div className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#0B57D0] text-white' : 'bg-white text-[#43474E]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#1A1C1E] mb-1">
                  {phase.title}
                </h3>
                <span className="text-[11px] font-semibold text-[#0B57D0] block mb-3">
                  {phase.label}
                </span>

                <p className="text-xs text-[#43474E] leading-relaxed mb-4">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E0E2EC]/70">
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {phase.outputBadge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Unboxed Technical Inspector for Selected Phase */}
      <div className="mt-10 pt-8 border-t border-[#E0E2EC]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-[#73777F] tracking-wider block">
                  Selected Stage: Phase {current.num} Deep Dive
                </span>
                <h4 className="text-xl font-black text-[#1A1C1E] tracking-tight">
                  {current.title} — <span className="text-[#0B57D0]">{current.label}</span>
                </h4>
              </div>
            </div>
            
            <div className="pt-1 flex flex-wrap gap-2.5 text-xs text-[#1A1C1E]">
              {current.details.map((d, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#E0E2EC]">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium text-[#1A1C1E]">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onRequestDemo(`Pipeline Stage ${current.num} (${current.title})`)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0B57D0] text-white hover:bg-[#0842A0] text-xs font-semibold tracking-wider uppercase transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
          >
            <span>Audit Stage {current.num} Protocol</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      </div>
    </section>
  );
}
