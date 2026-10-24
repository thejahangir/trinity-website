import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal 
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';

export default function GlassPipelineV4({ onRequestDemo }) {
  const [activeStage, setActiveStage] = useState(0);
  const { isDark } = useThemeV4();

  const stages = [
    {
      num: "01",
      name: "Multimodal Ingest",
      badge: "SUB-PIXEL OCR",
      tagline: "Tokenization & Coordinate Mapping",
      desc: "Ingests scanned pleadings, multi-generational PDFs, daily logs, and architectural CAD markups with 100% OCR byte-level coordinate accuracy.",
      metrics: [
        { label: "Docket Throughput", value: "100,000+ pgs/hr" },
        { label: "Layout Extraction", value: "Tables & Exhibits" },
        { label: "Anchor Type", value: "Sub-pixel PDF Coordinates" }
      ],
      outputSample: "Tokenized 184,200 docket pages. 1,420 exhibit exhibits indexed with coordinate lineage."
    },
    {
      num: "02",
      name: "Causal Graph",
      badge: "SYNAPSE MAPPING",
      tagline: "Dispute Entity Resolution",
      desc: "Constructs a directed queryable causal graph linking disparate witness testimonies, timeline events, change order sequences, and contract exhibits.",
      metrics: [
        { label: "Entity Resolution", value: "Cross-Docket Pseudonyms" },
        { label: "Graph Traversal", value: "Bidirectional Lineage" },
        { label: "Node Density", value: "8,400+ Linked Entities" }
      ],
      outputSample: "Graph nodes unified across 14 witnesses and 38 subcontracts. Chronological event flow mapped."
    },
    {
      num: "03",
      name: "Deterministic Verification",
      badge: "MATHEMATICAL LOGIC",
      tagline: "Constraint-Driven Rule Solving",
      desc: "Applies statutory domain logic, contractual exclusion boundaries, and statutory deadlines without probabilistic LLM hallucinations.",
      metrics: [
        { label: "Hallucination Rate", value: "0.00% Zero-Tolerance" },
        { label: "Statutory Engines", value: "FRCP, AIA, Ch. 93A" },
        { label: "Validation Logic", value: "Deterministic DAG" }
      ],
      outputSample: "Notice bar verified 34 days past statutory limit. Factual sworn contradiction flagged with pin-cite."
    },
    {
      num: "04",
      name: "Admissible Synthesis",
      badge: "COURT-READY EXPORT",
      tagline: "Defensible Briefing Generation",
      desc: "Produces explainable litigation briefs, cross-examination outlines, and defensible fault allocation matrices with 100% primary source lineage.",
      metrics: [
        { label: "Courtroom Lineage", value: "100% Primary Pin-Cite" },
        { label: "Counsel Sign-off", value: "Human-in-the-Loop" },
        { label: "Export Formats", value: "Word, PDF, Relativity" }
      ],
      outputSample: "Summary judgment defense brief generated with 42 authenticated pin-cite anchors ready for court filing."
    }
  ];

  const current = stages[activeStage];

  return (
    <section 
      id="pipeline" 
      className={`w-full py-24 lg:py-32 relative overflow-hidden transition-colors duration-300 border-t ${
        isDark ? 'glass-canvas text-white border-white/10' : 'glass-canvas-light text-slate-900 border-slate-200'
      }`}
    >
      
      {/* Background radial glows */}
      <div className={`absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none ${
        isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/15'
      }`} />

      {/* Boxed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase ${
              isDark ? 'glass-pill text-cyan-300' : 'glass-pill-light text-blue-700'
            }`}>
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              <span>03 // The Decision Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display">
              Four-Chamber Synapse.{' '}
              <span className={isDark ? 'glass-text-shimmer' : 'glass-text-shimmer-light'}>Unbroken Lineage.</span>
            </h2>
          </div>
          <p className={`text-sm max-w-md font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Every evidentiary conclusion flows through four interconnected deterministic chambers, ensuring complete auditable transparency under cross-examination.
          </p>
        </div>

        {/* 4 Connected Floating Glass Chambers */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stg, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={stg.num}
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-[28px] transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? isDark
                      ? 'glass-panel-elevated border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.25)] ring-1 ring-cyan-400/40'
                      : 'glass-panel-elevated-light border-blue-500 shadow-[0_8px_30px_rgba(37,99,235,0.18)] ring-1 ring-blue-500/50'
                    : isDark
                      ? 'glass-panel hover:bg-white/[0.08] hover:border-white/30'
                      : 'glass-panel-light hover:bg-white/95 hover:border-blue-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-black ${
                      isSelected 
                        ? isDark ? 'text-cyan-300' : 'text-blue-600 font-extrabold' 
                        : isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      // CHAMBER {stg.num}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                      isSelected 
                        ? isDark 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                          : 'bg-blue-100 text-blue-700 border border-blue-300'
                        : isDark 
                          ? 'bg-white/5 text-slate-400 border border-white/10' 
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {stg.badge}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-1 font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {stg.name}
                  </h3>
                  <p className={`text-[11px] font-mono mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-600 font-semibold'}`}>
                    {stg.tagline}
                  </p>

                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {stg.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <span className={
                    isSelected 
                      ? isDark ? 'text-cyan-300 font-bold' : 'text-blue-700 font-bold' 
                      : isDark ? 'text-slate-400' : 'text-slate-500'
                  }>
                    {isSelected ? 'Active Inspector ➔' : 'Click to Inspect'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Chamber Deep-Dive Telemetry Console */}
        <div className={`mt-8 rounded-[32px] p-6 sm:p-8 border transition-all ${
          isDark 
            ? 'glass-panel-elevated border-white/20' 
            : 'glass-panel-elevated-light border-slate-300 shadow-xl'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                  isDark 
                    ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-300' 
                    : 'bg-blue-100 border border-blue-200 text-blue-700'
                }`}>
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Chamber 0{activeStage + 1} Telemetry Stream
                  </span>
                  <h4 className={`text-xl font-black font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {current.name}: <span className={isDark ? 'text-cyan-300' : 'text-blue-600'}>{current.tagline}</span>
                  </h4>
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.metrics.map((m, i) => (
                  <div key={i} className={`p-3 rounded-xl border ${
                    isDark ? 'bg-black/40 border-white/10' : 'bg-slate-50/90 border-slate-200'
                  }`}>
                    <div className={`text-[10px] font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {m.label}
                    </div>
                    <div className={`text-xs font-mono font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Output Sample */}
              <div className={`p-3.5 rounded-xl border text-xs font-mono ${
                isDark 
                  ? 'bg-blue-950/30 border-cyan-500/20 text-cyan-200' 
                  : 'bg-blue-50 border-blue-200 text-blue-950'
              }`}>
                <span className={`${isDark ? 'text-slate-400' : 'text-blue-600 font-semibold'} mr-2`}>$ stream_output:</span>
                "{current.outputSample}"
              </div>
            </div>

            {/* Action */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onRequestDemo(`Chamber 0${activeStage + 1} (${current.name}) Audit`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <span>Audit Chamber 0{activeStage + 1} Rules</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
