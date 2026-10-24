import React, { useState } from 'react';
import { 
  Scale, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Download 
} from 'lucide-react';

export default function PlatformWorkspaceV3({ onRequestDemo }) {
  const [selectedEngine, setSelectedEngine] = useState('one');

  const engineData = {
    one: {
      badge: "Legal & Claims Defense Engine",
      name: "COSMOS ONE™",
      headline: "Autonomous Litigation & Claims Intelligence",
      description: "Designed for AmLaw 100 litigation departments and catastrophic commercial insurers. Ingests hundreds of thousands of pleading pages, depositions, and internal correspondence to surface factual contradictions, procedural notice bars, and reinsurance deductible exhaustion.",
      stats: [
        { label: "Velocity Acceleration", value: "78% Faster", detail: "vs manual paralegal review" },
        { label: "Pin-Cite Precision", value: "100%", detail: "Byte-aligned source citation" },
        { label: "Pleading Throughput", value: "250K+ pgs/hr", detail: "Parallelized parsing" }
      ],
      features: [
        "Deposition contradiction extraction with line-and-page coordinate pin-cites",
        "Statutory notice bar auditing (Mass. Gen. Laws ch. 93A, statutes of repose & limitation)",
        "Reinsurance treaty occurrence & multi-year aggregate boundary validation",
        "Trial cross-examination outlines generated with underlying exhibit citations"
      ],
      previewTitle: "Live Pleading Analysis Output (Exhibit Excerpt)",
      previewSubtitle: "Cross-Reference: Deposition Vol. IV vs Audit Memo DX-409",
      rows: [
        { key: "Contradiction #1", detail: "Sworn testimony p. 142 denies notice. Email DX-409 confirms Oct 28 delivery.", confidence: "100%" },
        { key: "Statutory Defense", detail: "Notice of claim served 34 days past statutory 30-day deadline (Ch. 93A).", confidence: "99.8%" },
        { key: "Treaty Exclusion", detail: "Occurred outside policy endorsement window (§4.1.2 deductible applies).", confidence: "99.9%" }
      ]
    },
    nexus: {
      badge: "Forensic Engineering & Construction Defect",
      name: "COSMOS NEXUS™",
      headline: "Multi-Party Construction Defect Intelligence",
      description: "Built for ENR Top General Contractors, forensic engineering experts, and defense counsel. Ingests subcontracts, daily inspection logs, change orders, and BIM drawings to isolate scope carveouts and compute fault allocation matrices across 15+ specialty sub-trades.",
      stats: [
        { label: "Exposure Filtered", value: "Up to 90.1%", detail: "Unwarranted claims removed" },
        { label: "Scope Match", value: "100% Grounded", detail: "Contractual exhibit mapping" },
        { label: "Trade Matrices", value: "15+ Sub-Trades", detail: "Automatic fault apportionment" }
      ],
      features: [
        "Subcontract scope carveout & flashing isolation across roofing, glazing, and framing",
        "Trade-by-trade mathematical fault allocation matrix based on contractual risk formulas",
        "Change order chronological delay mapping linked to verified architectural markups",
        "Pre-trial mediation packages with primary drawing and daily log pin-cites"
      ],
      previewTitle: "Live Fault Allocation Matrix (Trade Allocation)",
      previewSubtitle: "Subcontract §7.1 Flashing Carveout vs Daily Photo Log #184",
      rows: [
        { key: "Trade: Roofing", detail: "Membrane certified compliant on Log #184 prior to trade exit.", confidence: "100%" },
        { key: "Trade: Framing", detail: "Contractual scope §7.1 assigns parapet coping to framing sub.", confidence: "99.7%" },
        { key: "GC Liability", detail: "Carveout shifts 88.5% of water intrusion claim away from roofer.", confidence: "99.4%" }
      ]
    }
  };

  const current = engineData[selectedEngine];

  return (
    <section id="platforms" className="w-full py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0E2EC]">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>02 // Flagship Platform Workspace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
            Two Purpose-Built Deterministic Engines.
          </h2>
        </div>

        {/* Engine Switcher Segmented Pills */}
        <div className="inline-flex p-1.5 rounded-full bg-[#EFF1F6] border border-[#E0E2EC] self-start md:self-auto">
          <button
            type="button"
            onClick={() => setSelectedEngine('one')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedEngine === 'one'
                ? 'bg-white text-[#0B57D0] shadow-xs'
                : 'text-[#43474E] hover:text-[#1A1C1E]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>COSMOS ONE™</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedEngine('nexus')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedEngine === 'nexus'
                ? 'bg-white text-[#A36B00] shadow-xs'
                : 'text-[#43474E] hover:text-[#1A1C1E]'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>COSMOS NEXUS™</span>
          </button>
        </div>
      </div>

      {/* Main Split-Screen Workspace Container */}
      <div className="mt-8 bg-white rounded-[36px] border border-[#E0E2EC] p-6 sm:p-10 m3-elevation-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Specifications, Core Capabilities & Stats (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#D3E3FD] text-[#041E49]">
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-[#73777F]">
                  Deterministic Protocol Active
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#1A1C1E]">
                {current.name}: <br />
                <span className={selectedEngine === 'one' ? 'text-[#0B57D0]' : 'text-[#A36B00]'}>
                  {current.headline}
                </span>
              </h3>

              <p className="text-sm text-[#43474E] leading-relaxed font-normal">
                {current.description}
              </p>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.stats.map((st, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F6F7FA] border border-[#E0E2EC]">
                    <div className="text-2xl font-black font-mono text-[#1A1C1E]">
                      {st.value}
                    </div>
                    <div className="text-[11px] font-bold text-[#43474E] mt-0.5">
                      {st.label}
                    </div>
                    <div className="text-[10px] text-[#73777F] mt-0.5">
                      {st.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Checklist */}
              <div className="pt-2 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#73777F] block">
                  Core Evidentiary Workflows:
                </span>
                {current.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-2.5 text-xs text-[#1A1C1E]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => onRequestDemo(`Platform Briefing (${current.name})`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] text-white text-xs font-semibold tracking-wider uppercase transition-colors m3-elevation-1 cursor-pointer"
              >
                <span>Schedule {current.name} Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onRequestDemo(`Sample Output Deck (${current.name})`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#C3C7D0] hover:bg-[#F6F7FA] text-xs font-semibold text-[#1A1C1E] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#73777F]" />
                <span>Export Sample Brief</span>
              </button>
            </div>

          </div>

          {/* Right Column: Live Analysis Output Workstation Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-[#EFF1F6] rounded-3xl p-6 border border-[#E0E2EC] flex flex-col justify-between">
            <div>
              
              {/* Header */}
              <div className="pb-3 border-b border-[#E0E2EC]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-[#1A1C1E]">
                    {current.previewTitle}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                    Audit Verified
                  </span>
                </div>
                <p className="text-[11px] text-[#73777F] font-mono">
                  {current.previewSubtitle}
                </p>
              </div>

              {/* Simulated Data Rows */}
              <div className="mt-4 space-y-3">
                {current.rows.map((row, rindex) => (
                  <div key={rindex} className="p-3.5 bg-white rounded-2xl border border-[#E0E2EC] shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono font-bold text-[#0B57D0]">
                        {row.key}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        {row.confidence} Match
                      </span>
                    </div>
                    <p className="text-xs text-[#1A1C1E] leading-relaxed">
                      {row.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deterministic Lineage Footer Indicator */}
              <div className="mt-4 p-3 rounded-2xl bg-white/80 border border-[#E0E2EC] text-[11px] font-mono text-[#73777F] flex items-center justify-between">
                <span>Pin-Cite Verification Protocol</span>
                <span className="text-emerald-700 font-bold">100% Deterministic</span>
              </div>

            </div>

            <button
              type="button"
              onClick={() => onRequestDemo(`Deep Dive Analysis (${current.name})`)}
              className="mt-6 w-full py-3 rounded-2xl bg-white hover:bg-[#D3E3FD] text-[#0B57D0] border border-[#C2E7FF] text-xs font-semibold tracking-wider uppercase transition-colors text-center cursor-pointer"
            >
              Request Custom Docket Audit On Your Files →
            </button>
          </div>

        </div>
      </div>

      </div>
    </section>
  );
}
