import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  FileSearch, 
  CheckCircle2, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';

export default function HeroPrismV4({ onRequestDemo }) {
  const [activeCase, setActiveCase] = useState(0);
  const { isDark } = useThemeV4();

  const testCases = [
    {
      title: "AmLaw 100 Commercial Litigation",
      matter: "In re: Apex Energy Shareholder Dispute ($420M Claim)",
      engine: "COSMOS ONE™",
      tag: "Deposition Contradiction & Notice Bar",
      color: "from-cyan-500/20 to-blue-600/30",
      accentBorder: "border-cyan-400/40",
      rawEvidence: "Deposition Vol. VI, Tr. 184:12-28: Chief Risk Officer testifies 'We received zero operational warnings regarding pressure flange fatigue prior to November 14.'",
      discoveryProof: "Audit Memo DX-409 (Email timestamped Oct 28): Direct email to CRO forwarding stress analysis warning of micro-fracture risk.",
      verdict: "Factual contradiction established under oath. Procedural notice defense sustained under Mass. Gen. Laws Ch. 93A.",
      pinCite: "Docket Doc #418-2, Line 184:14 ➔ Memo DX-409, p. 3",
      confidence: "100% Deterministic Match"
    },
    {
      title: "Construction Defect & Forensics",
      matter: "Boston Seaport Tower: Curtain Wall Water Intrusion ($86M)",
      engine: "COSMOS NEXUS™",
      tag: "Multi-Trade Scope & Fault Allocation",
      color: "from-amber-500/20 to-orange-600/30",
      accentBorder: "border-amber-400/40",
      rawEvidence: "Subcontract Agreement §7.3.2 vs Daily Inspection Log #214: Glazing sub claims parapet membrane was installed by roofing contractor.",
      discoveryProof: "AIA Document A401 Exhibit B Scope Carveout: Roof parapet membrane specifically retained by General Contractor, relieving glazier of liability.",
      verdict: "Fault allocation matrix shifts 84.6% of water damage exposure from glazing subcontractor to prime carrier.",
      pinCite: "Subcontract §7.3.2, p. 19 ➔ Daily Photo Log #214",
      confidence: "99.8% Contract Grounding"
    },
    {
      title: "Catastrophic Reinsurance Claims",
      matter: "Harbor Logistics Terminal: Multi-Year Cyclone Loss ($115M)",
      engine: "COSMOS ONE™",
      tag: "Treaty Deductible Boundary Reconciliation",
      color: "from-purple-500/20 to-indigo-600/30",
      accentBorder: "border-purple-400/40",
      rawEvidence: "Primary claim seeks single $25M deductible across two distinct weather events occurring 96 hours apart.",
      discoveryProof: "Treaty Endorsement §11(c) 72-Hour Occurrence Clause: Meteorological barometric data verifies second storm constitutes independent occurrence.",
      verdict: "Second $25M deductible enforceable. Insurer exposure reduced by $25,000,000 without litigation.",
      pinCite: "Treaty Endorsement §11(c) ➔ NOAA Barometric Station 44013",
      confidence: "100% Chronological Lineage"
    }
  ];

  const current = testCases[activeCase];

  return (
    <section 
      id="evidence-prism" 
      className={`relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'glass-canvas text-white' : 'glass-canvas-light text-slate-900'
      }`}
    >
      {/* Background Luminous Glass Orbs */}
      <div className={`absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none ${
        isDark ? 'bg-blue-600/15' : 'bg-blue-400/20'
      }`} />
      <div className={`absolute top-40 right-10 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-cyan-500/12' : 'bg-cyan-300/25'
      }`} />
      <div className={`absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none ${
        isDark ? 'bg-purple-600/10' : 'bg-indigo-300/20'
      }`} />

      {/* Boxed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Headline Block */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Luminous Pill Tag */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-colors ${
            isDark ? 'glass-pill text-cyan-300' : 'glass-pill-light text-blue-700'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>GLASS ARCHITECTURE // DETERMINISTIC PROOF ENGINE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] font-display">
            When Courtroom Words Cost Millions,{' '}
            <span className={isDark ? 'glass-text-shimmer' : 'glass-text-shimmer-light'}>
              We Turn Ambiguity Into Crystal Truth.
            </span>
          </h1>

          {/* Description */}
          <p className={`text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Trinity builds deterministic machine intelligence for high-stakes enterprise disputes. By fusing multimodal evidence ingestion, causal DAG graphs, and 100% byte-aligned pin-cite lineage, we give trial attorneys and risk officers conclusions that withstand vigorous cross-examination.
          </p>

          {/* CTA Action Deck */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onRequestDemo("Hero Glass Briefing")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:shadow-[0_0_40px_rgba(14,165,233,0.7)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Schedule Private Briefing</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              type="button"
              onClick={() => onRequestDemo("Sanitized Case Audit")}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                isDark 
                  ? 'glass-pill hover:bg-white/[0.1] text-slate-200 hover:border-white/30' 
                  : 'glass-pill-light hover:bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              <FileSearch className="w-4 h-4 text-cyan-500" />
              <span>Evaluate Sanitized Dockets</span>
            </button>
          </div>

          {/* SLA & Security Trust Badges */}
          <div className={`flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Primary Pin-Cite Lineage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Zero Customer Model Retraining</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Sovereign Air-Gapped VPC</span>
            </div>
          </div>

        </div>

        {/* 
          =====================================================================
          INTERACTIVE HOLOGRAPHIC EVIDENCE CONSOLE (GLASS WORKSTATION COCKPIT)
          =====================================================================
        */}
        <div className={`mt-14 sm:mt-16 rounded-[36px] p-6 sm:p-10 relative overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'glass-panel-elevated border border-white/20' 
            : 'glass-panel-elevated-light border border-white/90 shadow-2xl'
        }`}>
          
          {/* Top Console Bar */}
          <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <div className="flex flex-col">
                <span className={`text-xs font-mono font-bold tracking-wider uppercase ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
                  Live Evidentiary Prism Console
                </span>
                <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Select a live demonstration matter to inspect real-time causal graph traversal:
                </span>
              </div>
            </div>

            {/* Matter Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {testCases.map((tc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCase(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeCase === idx
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md ring-1 ring-cyan-300'
                      : isDark
                        ? 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.1] hover:text-white border border-white/10'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950 border border-slate-200'
                  }`}
                >
                  <span>Matter 0{idx + 1}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Active Matter Glass Display Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 4 Cols: Matter Meta & Evidentiary Ingestion */}
            <div className={`lg:col-span-4 flex flex-col justify-between space-y-6 p-6 rounded-2xl border ${
              isDark 
                ? 'bg-white/[0.02] border-white/10 text-white' 
                : 'bg-white/80 border-slate-200 text-slate-900 shadow-xs'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isDark ? 'bg-white/10 text-cyan-300 border border-white/15' : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {current.engine}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{current.confidence}</span>
                  </span>
                </div>

                <h3 className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  {current.title}
                </h3>
                <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {current.matter}
                </p>
              </div>

              {/* Ingested Raw Evidence Box */}
              <div className={`space-y-2 pt-2 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={`text-[10px] font-mono uppercase font-bold tracking-wider flex items-center gap-1.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <FileText className="w-3 h-3 text-cyan-500" />
                  Primary Ingested Testimony
                </span>
                <div className={`p-3.5 rounded-xl border text-xs font-mono leading-relaxed ${
                  isDark ? 'bg-black/40 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  "{current.rawEvidence}"
                </div>
              </div>

              <div className="pt-2">
                <span className={`text-[11px] font-mono block font-semibold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
                  Grounding Lineage: {current.pinCite}
                </span>
              </div>
            </div>

            {/* Middle 4 Cols: Deterministic Causal Synthesis */}
            <div className={`lg:col-span-4 flex flex-col justify-between space-y-6 p-6 rounded-2xl border relative overflow-hidden ${
              isDark 
                ? 'bg-white/[0.04] border-white/15' 
                : 'bg-blue-50/60 border-blue-200 shadow-xs'
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3">
                <span className={`text-[10px] font-mono uppercase font-bold tracking-wider flex items-center gap-1.5 ${
                  isDark ? 'text-cyan-300' : 'text-blue-700'
                }`}>
                  <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                  Causal Conflict Isolated
                </span>
                <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  Contradiction / Exclusion Anchor
                </h4>
                <div className={`p-3.5 rounded-xl border text-xs leading-relaxed font-mono ${
                  isDark ? 'bg-blue-950/40 border-blue-500/30 text-blue-100' : 'bg-white border-blue-200 text-blue-900 shadow-2xs'
                }`}>
                  {current.discoveryProof}
                </div>
              </div>

              <div className={`space-y-2 pt-3 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Audited Legal / Contract Rule
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {current.verdict}
                </p>
              </div>

              <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono ${
                isDark 
                  ? 'bg-emerald-500/10 border-emerald-500/30' 
                  : 'bg-emerald-50 border-emerald-200'
              }`}>
                <span className="text-emerald-700 dark:text-emerald-300 font-bold">Hallucination Risk:</span>
                <span className="font-black text-emerald-800 dark:text-white">0.00%</span>
              </div>
            </div>

            {/* Right 4 Cols: Courtroom Ready Briefing Export */}
            <div className={`lg:col-span-4 flex flex-col justify-between space-y-6 p-6 rounded-2xl border ${
              isDark 
                ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02] border-white/20' 
                : 'bg-gradient-to-b from-white to-white/70 border-slate-200 shadow-xs'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Export Output
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold ${
                    isDark ? 'text-cyan-300 bg-cyan-950/60 border-cyan-500/30' : 'text-blue-700 bg-blue-50 border-blue-200'
                  }`}>
                    ADMISSIBLE ARTIFACT
                  </span>
                </div>

                <h4 className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  Summary Judgment Brief & Cross-Exam Outline
                </h4>

                <div className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Byte-level OCR coordinates linked directly to native docket files.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Trial cross-examination question paths auto-generated with exhibit tags.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>Defensible fault allocation matrix ready for mediation submission.</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRequestDemo(`Audit Output: ${current.title}`)}
                className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/25 hover:border-cyan-400/50' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300 hover:border-blue-400'
                }`}
              >
                <span>Request Custom Docket Run</span>
                <ChevronRight className="w-4 h-4 text-cyan-500" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
