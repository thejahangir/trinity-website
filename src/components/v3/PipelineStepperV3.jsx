import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  FileSearch, 
  Network, 
  Cpu, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function PipelineStepperV3({ onRequestDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Understand",
      subtitle: "Deterministic Ingestion & Normalization",
      icon: FileSearch,
      desc: "Ingests complex, unstructured documents, scanned court dockets, contracts, handwritten notes, and BIM drawings with 100% OCR byte-level accuracy.",
      outputs: [
        "100,000+ docket pages processed/hour",
        "Layout-aware table & schedule extraction",
        "Redacted document verification & metadata tagging"
      ],
      mockData: {
        heading: "Ingestion Normalization Output",
        badge: "Status: 100% Tokenized",
        content: "Extracted 14,290 pages across 18 pleading binders. 427 deposition transcript lines indexed with exact line:page coordinates."
      }
    },
    {
      step: "02",
      title: "Connect",
      subtitle: "Entity & Timeline Resolution",
      icon: Network,
      desc: "Links disparate entities, timeline milestones, contract obligations, and evidentiary exhibits into an interconnected causal knowledge graph.",
      outputs: [
        "Cross-document pseudonym & alias resolution",
        "Chronological factual dispute matrices",
        "Subcontract exhibit & scope boundary cross-referencing"
      ],
      mockData: {
        heading: "Causal Knowledge Graph Graph-ML",
        badge: "Status: 8,410 Graph Nodes Linked",
        content: "Identified 84 primary events. Mapped 14 email chains directly to Subcontract Section 4.2 change order chronology."
      }
    },
    {
      step: "03",
      title: "Reason",
      subtitle: "Deterministic Rule Verification",
      icon: Cpu,
      desc: "Applies statutory domain logic, contractual exclusion boundaries, and precedent cross-referencing to the evidence without probabilistic hallucinations.",
      outputs: [
        "Deposition contradiction identification",
        "Statute of limitations & notice bar auditing",
        "Multi-party defect liability allocation formulas"
      ],
      mockData: {
        heading: "Audit-Proof Causal Validation",
        badge: "Status: 0.00% Hallucination Flagged",
        content: "Flagged 3 sworn witness contradictions. Verified 2 statutory notice bar defenses under Mass. Gen. Laws ch. 93A."
      }
    },
    {
      step: "04",
      title: "Decide",
      subtitle: "Defensible Executive Synthesis",
      icon: CheckCircle2,
      desc: "Delivers explainable insights, audit-ready citation briefs, and defensible settlement matrices with expert human-in-the-loop sign-off.",
      outputs: [
        "100% primary source pin-cite lineage exports",
        "Trial-ready deposition cross-examination outlines",
        "Defensible claim reserve adjustment recommendations"
      ],
      mockData: {
        heading: "Executive Defensibility Package",
        badge: "Status: Ready for Counsel Sign-Off",
        content: "Generated 34-page motion for summary judgment with every assertion hyperlinked directly to authenticated record exhibits."
      }
    }
  ];

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="pipeline" className="py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0E2EC]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>03 // The Decision Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
              From Raw Unstructured Dockets to <br className="hidden sm:inline" />
              <span className="text-[#0B57D0]">Defensible Decisions.</span>
            </h2>
          </div>
          <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
            Every step in Trinity's four-phase pipeline is audit-proof, deterministic, and verifiable under adversarial scrutiny.
          </p>
        </div>

        {/* M3 Interactive Stepper Rail */}
        <div className="pt-10">
          
          {/* Stepper Navigation Buttons (Horizontal on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pb-8">
            {steps.map((s, index) => {
              const isSelected = activeStep === index;
              const isCompleted = activeStep > index;
              const Icon = s.icon;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-white border-[#0B57D0] shadow-sm ring-2 ring-[#0B57D0]/20'
                      : isCompleted
                      ? 'bg-[#EFF1F6] border-[#C3C7D0] hover:bg-white'
                      : 'bg-[#FDFBFF] border-[#E0E2EC] hover:bg-white text-[#73777F]'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#0B57D0] text-white shadow-xs'
                      : isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#EFF1F6] text-[#73777F]'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider block text-[#73777F]">
                      Phase {s.step}
                    </span>
                    <span className={`text-sm font-bold block ${isSelected ? 'text-[#0B57D0]' : 'text-[#1A1C1E]'}`}>
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Material Card */}
          <div className="bg-white rounded-[32px] border border-[#C3C7D0]/60 p-6 sm:p-10 m3-elevation-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Description & Verified Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center shrink-0">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#0B57D0] tracking-wider">
                      Phase {currentStep.step} Architecture
                    </span>
                    <h3 className="text-2xl font-black text-[#1A1C1E]">
                      {currentStep.title}: {currentStep.subtitle}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#43474E] leading-relaxed">
                  {currentStep.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#73777F] block">
                    Verified Engineering Milestones:
                  </span>
                  {currentStep.outputs.map((out, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#1A1C1E]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  {activeStep < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF1F6] text-[#0B57D0] hover:bg-[#D3E3FD] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <span>Proceed to Phase {steps[activeStep + 1].step} ({steps[activeStep + 1].title})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveStep(0)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF1F6] text-[#0B57D0] hover:bg-[#D3E3FD] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      <span>Restart Pipeline Overview</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Mock Transformation Card */}
              <div className="lg:col-span-5 bg-[#EFF1F6] rounded-2xl p-6 border border-[#E0E2EC] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E0E2EC]">
                  <span className="text-xs font-mono font-bold text-[#1A1C1E]">
                    {currentStep.mockData.heading}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-emerald-700 font-bold border border-emerald-300">
                    {currentStep.mockData.badge}
                  </span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E0E2EC] shadow-xs text-xs font-mono text-[#43474E] leading-relaxed">
                  {currentStep.mockData.content}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onRequestDemo(`Pipeline Walkthrough (${currentStep.title})`)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B57D0] text-white hover:bg-[#0842A0] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <span>Schedule Pipeline Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
