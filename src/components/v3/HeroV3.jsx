import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileCheck2, 
  ChevronRight,
  Search
} from 'lucide-react';

export default function HeroV3({ onRequestDemo }) {
  const [selectedDemoTab, setSelectedDemoTab] = useState('cosmos-one');
  const [activePinCite, setActivePinCite] = useState(1);

  const demoScenarios = {
    'cosmos-one': {
      title: "Cosmos One™ // Deposition Contradiction Detection",
      subtitle: "Am Law 100 Commercial Litigation & Bad-Faith Claims",
      sourceDoc: "Deposition of Chief Risk Officer (Day 2, Vol. IV) vs. Internal Audit Memo",
      excerpt: "Witness testified on Page 142 that 'board members received no notification prior to Nov 14'. However, pin-cite extraction cross-references Exhibit DX-409 (dated Oct 28) establishing direct email delivery.",
      cites: [
        {
          id: 1,
          tag: "[Pin-Cite: DX-409, p. 14, ¶3]",
          label: "Board Distribution Memorandum",
          match: "Oct 28 timestamp verified",
          confidence: "99.94%",
          causalTrail: "Direct header parsing confirms delivery to 8 board members 17 days prior to sworn testimony date."
        },
        {
          id: 2,
          tag: "[Depo Vol. IV, 142:8-14]",
          label: "Sworn Denial Statement",
          match: "Direct Contradiction",
          confidence: "100.0%",
          causalTrail: "Extracted statement conflicts directly with authenticated Exhibit DX-409 email chain."
        }
      ]
    },
    'cosmos-nexus': {
      title: "Cosmos Nexus™ // Defect Scope & Fault Apportionment",
      subtitle: "Multi-Party Infrastructure & Forensic Construction Defense",
      sourceDoc: "Subcontract Agreement Exhibit B vs. Daily Jobsite Inspection Log #184",
      excerpt: "General Contractor asserted roofing subcontractor was liable for parapet membrane leaks. Nexus automatically parsed subcontract specifications §7.1 and cross-referenced daily jobsite photo logs.",
      cites: [
        {
          id: 1,
          tag: "[Subcontract §7.1.4(b)]",
          label: "Scope Carveout Exclusion",
          match: "100% Scope Match",
          confidence: "99.88%",
          causalTrail: "Contractual carveout specifically assigned copings and parapet flashings to framing trade, eliminating subcontractor exposure."
        },
        {
          id: 2,
          tag: "[Job Log #184, Photo 3A]",
          label: "Waterproofing Inspection",
          match: "Approved Prior to Trade Entry",
          confidence: "99.75%",
          causalTrail: "Third-party inspection report verified correct membrane installation before window crew accessed facade."
        }
      ]
    }
  };

  const currentScenario = demoScenarios[selectedDemoTab];
  const activeCiteData = currentScenario.cites.find(c => c.id === activePinCite) || currentScenario.cites[0];

  return (
    <section id="overview" className="relative bg-[#FDFBFF] pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden font-material">
      
      {/* Tonal Material Surface Gradients & Organic Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#D3E3FD]/40 via-[#C2E7FF]/30 to-[#FFDF99]/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-48 right-10 w-[400px] h-[400px] bg-[#D3E3FD]/30 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#FFDF99]/25 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* M3 Assist Chips Row */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-medium border border-[#C2E7FF] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>Material Design 3 Architecture</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF1F6] text-[#43474E] text-xs font-medium border border-[#E0E2EC]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Deterministic Lineage Active</span>
            </div>
          </div>

          {/* M3 Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1C1E] font-material leading-[1.12]">
            Evidence-Grounded AI for <br className="hidden sm:inline" />
            <span className="text-[#0B57D0] relative inline-block">
              Defensible Enterprise Decisions
              <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#D3E3FD]/60 -z-10 rounded-full"></span>
            </span>
          </h1>

          {/* M3 Body Large */}
          <p className="text-base sm:text-lg text-[#43474E] leading-relaxed max-w-2xl mx-auto font-normal">
            Where a single hallucinated assertion risks millions in liabilities. Trinity operates on deterministic evidentiary grounds, producing audit-proof causal trails for Am Law 100 counsel, major insurers, and forensic leaders.
          </p>

          {/* M3 Primary & Outlined Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onRequestDemo("Material 3 Executive Briefing")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0B57D0] text-white hover:bg-[#0842A0] active:scale-95 font-medium text-xs tracking-wider uppercase transition-all duration-200 m3-elevation-2 hover:m3-elevation-3 cursor-pointer"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#73777F]/30 bg-white text-[#1A1C1E] hover:bg-[#EFF1F6] active:scale-95 font-medium text-xs tracking-wider uppercase transition-all duration-200 shadow-xs"
            >
              <span>Explore Platforms</span>
              <ChevronRight className="w-4 h-4 text-[#73777F]" />
            </a>
          </div>

          {/* 3 Core Trust Badges in M3 Surface Container */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium text-[#43474E]">
            <div className="flex items-center gap-1.5 bg-[#EFF1F6] px-3.5 py-1.5 rounded-full border border-[#E0E2EC]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>0.00% Hallucination Tolerance</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EFF1F6] px-3.5 py-1.5 rounded-full border border-[#E0E2EC]">
              <span className="w-2 h-2 rounded-full bg-[#0B57D0]" />
              <span>100% Primary Pin-Cite Grounding</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#EFF1F6] px-3.5 py-1.5 rounded-full border border-[#E0E2EC]">
              <span className="w-2 h-2 rounded-full bg-[#A36B00]" />
              <span>Zero Model Retraining On Case Data</span>
            </div>
          </div>

        </div>

        {/* ==========================================================================
            INTERACTIVE M3 PIN-CITE EVIDENCE INSPECTOR BENCH
            ========================================================================== */}
        <div className="mt-14 max-w-5xl mx-auto">
          
          <div className="bg-white rounded-[32px] border border-[#C3C7D0]/60 p-6 sm:p-8 m3-elevation-2 hover:m3-elevation-3 transition-shadow duration-300">
            
            {/* Top Toolbar with M3 Segmented Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EFF1F6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A1C1E]">
                    Interactive Evidentiary Pin-Cite Bench
                  </h3>
                  <p className="text-xs text-[#73777F]">
                    Click any citation marker below to test deterministic verification in real-time
                  </p>
                </div>
              </div>

              {/* M3 Segmented Button Controller */}
              <div className="inline-flex bg-[#EFF1F6] p-1 rounded-full border border-[#E0E2EC] self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDemoTab('cosmos-one');
                    setActivePinCite(1);
                  }}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    selectedDemoTab === 'cosmos-one'
                      ? 'bg-white text-[#0B57D0] font-semibold shadow-xs'
                      : 'text-[#43474E] hover:text-[#1A1C1E]'
                  }`}
                >
                  Cosmos One™ (Litigation)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDemoTab('cosmos-nexus');
                    setActivePinCite(1);
                  }}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    selectedDemoTab === 'cosmos-nexus'
                      ? 'bg-white text-[#A36B00] font-semibold shadow-xs'
                      : 'text-[#43474E] hover:text-[#1A1C1E]'
                  }`}
                >
                  Cosmos Nexus™ (Forensics)
                </button>
              </div>
            </div>

            {/* Split Screen: Ingested Record vs Causal Verification Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              
              {/* Left Column: Parsed Document Excerpt with Clickable Markers */}
              <div className="lg:col-span-7 bg-[#F6F7FA] rounded-2xl p-5 border border-[#E0E2EC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E0E2EC]/70">
                    <span className="text-[11px] font-mono font-semibold uppercase text-[#0B57D0]">
                      Primary Record Stream
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#E0E2EC] text-[#73777F]">
                      OCR Confirmed: 100%
                    </span>
                  </div>

                  <p className="text-xs font-mono font-medium text-[#73777F] mb-2">
                    Source: {currentScenario.sourceDoc}
                  </p>

                  <div className="text-xs text-[#1A1C1E] leading-relaxed p-4 bg-white rounded-xl border border-[#E0E2EC] shadow-xs">
                    "{currentScenario.excerpt}"
                  </div>

                  {/* Interactive Citation Chip Trigger Buttons */}
                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-semibold text-[#43474E] block">
                      Active Evidentiary Pin-Cites (Click to Inspect):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentScenario.cites.map((cite) => (
                        <button
                          key={cite.id}
                          type="button"
                          onClick={() => setActivePinCite(cite.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                            activePinCite === cite.id
                              ? 'bg-[#0B57D0] text-white font-semibold shadow-xs ring-2 ring-[#0B57D0]/30'
                              : 'bg-white text-[#0B57D0] border border-[#0B57D0]/40 hover:bg-[#D3E3FD]/50'
                          }`}
                        >
                          <Search className="w-3 h-3" />
                          <span>{cite.tag}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E0E2EC] flex items-center justify-between text-[11px] text-[#73777F]">
                  <span>Deterministic Ingestion Protocol 3.2</span>
                  <span className="text-[#0B57D0] font-semibold">Zero Probabilistic Guesses</span>
                </div>
              </div>

              {/* Right Column: Live Deterministic Verification Inspector */}
              <div className="lg:col-span-5 bg-[#EFF1F6] rounded-2xl p-5 border border-[#E0E2EC] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E0E2EC]">
                    <span className="text-[11px] font-mono font-semibold uppercase text-[#1A1C1E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verification Analysis
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {activeCiteData.confidence} Confidence
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider block">
                        Citation Entity
                      </span>
                      <p className="text-xs font-bold text-[#1A1C1E]">
                        {activeCiteData.label}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider block">
                        Verification Status
                      </span>
                      <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#D3E3FD] text-[#041E49]">
                        {activeCiteData.match}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#E0E2EC] text-xs text-[#43474E] leading-relaxed">
                      <span className="font-semibold text-[#1A1C1E] block mb-1">
                        Causal Verification Trail:
                      </span>
                      {activeCiteData.causalTrail}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRequestDemo(`Pin-Cite Audit (${currentScenario.title})`)}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B57D0] text-white hover:bg-[#0842A0] text-xs font-medium tracking-wide transition-colors cursor-pointer shadow-xs"
                >
                  <span>Request Full Evidence Docket Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
