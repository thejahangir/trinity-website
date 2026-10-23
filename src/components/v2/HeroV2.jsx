import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

export default function HeroV2({ onRequestDemo }) {
  const [activeMatter, setActiveMatter] = useState('litigation'); // 'litigation' | 'construction' | 'insurance'

  const matters = {
    litigation: {
      id: '2026-CV-8841',
      title: 'Commercial Breach & 93A Statutory Demand',
      forum: 'Suffolk Superior Court, MA (BLS-1)',
      type: 'Cosmos One™ Litigation Defense Engine',
      rawVolume: '4,820 Pages Ingested (18 Depositions, 42 Exhibits)',
      findingTitle: 'Statutory Demand Bar Identified',
      findingRule: 'M.G.L. c. 93A § 9 (30-Day Mandatory Notice)',
      conflictText: 'Plaintiff demand letter was served 44 days past statutory limit. Deposition testimony of CFO contradicts written notice receipt trigger in Master Agreement § 11.4.',
      anchor: 'Deposition Tr. Vol. II, P. 142:12-18 // Exhibit 14, P. 3, ¶ 2',
      matchPct: '100% Grounding Anchor',
      counselName: 'Sarah Jenkins, Esq. (Lead Trial Partner)',
      counselAction: 'Evidentiary Lineage Confirmed & Certified',
      resultBadge: 'DISMISSAL TENDER READY',
      exposure: 'Claimed: $12.4M → Defensible Exposure: $0.00'
    },
    construction: {
      id: 'CP-2026-7712',
      title: 'Harbor Point Water Intrusion Multi-Party Defense',
      forum: 'Complex Construction Arbitration, Boston',
      type: 'Cosmos Nexus™ Infrastructure Defense Engine',
      rawVolume: '14,200 Pages (Subcontracts, Change Orders, CAD Drawings)',
      findingTitle: 'Framing Subcontract Flashing Carveout Isolated',
      findingRule: 'Master Subcontract Ex. C, Art. 4.2 (Perimeter Flashing)',
      conflictText: 'Water intrusion at Balcony Level 4 was caused by defective sheet-metal flashing installed by roofing subcontractor. Framing subcontract explicitly excluded perimeter deck flashing.',
      anchor: 'Architectural Drawing A-402, Detail 6 // Change Order #18',
      matchPct: '100% Contractual Carveout Match',
      counselName: 'David R. Miller, PE, Esq. (Construction Counsel)',
      counselAction: 'Scope Exclusion Reconciled to Subcontract Ex. C',
      resultBadge: '90.1% EXPOSURE FILTERED',
      exposure: 'Claimed: $18.45M → Isolated Exposure: $1.82M'
    },
    insurance: {
      id: 'RE-2026-904',
      title: 'Catastrophic Property Treaty Reinsurance Audit',
      forum: 'Commercial Claims Resolution Facility, NY',
      type: 'Cosmos One™ Claims Intelligence Engine',
      rawVolume: '8,650 Claims Files, Adjuster Reports, Policy Schedules',
      findingTitle: 'Aggregate Deductible Non-Cumulation Verified',
      findingRule: 'Endorsement ISO-CP-0010 (Occurrence Definition)',
      conflictText: 'Separate hail and storm wind damages on July 14 and July 18 constitute two distinct policy occurrences under Endorsement 12, preventing single deductible aggregation.',
      anchor: 'Field Adjuster Log #4401 // Radar Chronology Ex. D',
      matchPct: '100% Verifiable Policy Match',
      counselName: 'Elena Rostova, CPCU, ARe (Senior Claims Counsel)',
      counselAction: 'Occurrence Boundary Confirmed via Radar Log',
      resultBadge: 'REINSURANCE TENDER APPROVED',
      exposure: 'Claimed: $34.2M → Covered Treaty Limit: $21.5M'
    }
  };

  const current = matters[activeMatter];

  return (
    <section className="relative bg-gradient-to-b from-slate-50/70 via-white to-white pt-28 pb-20 lg:pt-32 lg:pb-28 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle Architectural Grid Background Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Centered Hero Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          {/* Announcement Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-medium text-slate-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-trinity-blue animate-pulse"></span>
            <span className="font-semibold">Deterministic Decision Intelligence</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Boston & Bangalore</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
            AI That Turns Complex Evidence Into <span className="text-trinity-blue">Defensible Decisions</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Purpose-built intelligence platforms for high-stakes litigation, multi-party construction disputes, and complex insurance claims. Every conclusion cites primary records with mathematical lineage.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onRequestDemo("Enterprise Decision Console")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-slate-950 text-white hover:bg-trinity-blue font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Schedule an Executive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
            >
              <span>Explore Platform Lineage</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

        </div>

        {/* 3 Premium Metric Highlights */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-trinity-blue shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-slate-950">0.00%</div>
              <div className="text-xs text-slate-500 font-medium">Hallucination Tolerance</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-slate-950">100%</div>
              <div className="text-xs text-slate-500 font-medium">Pin-Cite Evidence Lineage</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-slate-950">Zero</div>
              <div className="text-xs text-slate-500 font-medium">Customer Data Retraining</div>
            </div>
          </div>
        </div>

        {/* THE ENTERPRISE COCKPIT: Modern Application Window Mockup */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-slate-300/80 bg-white shadow-xl overflow-hidden transition-all duration-300">
          
          {/* macOS / Enterprise Application Window Chrome */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
              </div>
              <span className="ml-3 font-mono text-xs text-slate-300 font-semibold tracking-wide">
                TRINITY DECISION WORKSPACE // LIVE VERIFICATION BENCH
              </span>
            </div>

            {/* Interactive Matter Selector Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveMatter('litigation')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeMatter === 'litigation'
                    ? 'bg-trinity-blue text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Commercial Breach
              </button>
              <button
                onClick={() => setActiveMatter('construction')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeMatter === 'construction'
                    ? 'bg-trinity-blue text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Construction Defect
              </button>
              <button
                onClick={() => setActiveMatter('insurance')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeMatter === 'insurance'
                    ? 'bg-trinity-blue text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Treaty Reinsurance
              </button>
            </div>
          </div>

          {/* Cockpit Interior: 3-Column Enterprise Decision Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 text-xs bg-slate-50/50">
            
            {/* PANE 1: Docket Ingestion Tree (3 cols) */}
            <div className="lg:col-span-3 p-5 sm:p-6 bg-white space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  01 // DOCKET INGESTION
                </span>
                <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  100% INGESTED
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold font-display text-slate-950">
                  {current.title}
                </h4>
                <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                  Docket #{current.id}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Venue: {current.forum}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1 font-mono text-[11px]">
                <div className="text-slate-500">Deployment Architecture:</div>
                <div className="text-slate-900 font-semibold">{current.type}</div>
                <div className="text-slate-500 pt-1 border-t border-slate-200 text-[10px]">
                  {current.rawVolume}
                </div>
              </div>

              <div className="text-slate-500 text-[11px] leading-relaxed">
                Reconciles contracts, exhibits, and depositions without human error or hallucination.
              </div>
            </div>

            {/* PANE 2: Primary Document Viewer & Contradiction Highlight (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 bg-white space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-trinity-blue">
                  02 // REASONING LINEAGE & CONTRADICTION
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {current.matchPct}
                </span>
              </div>

              {/* Finding Highlight Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-950 text-xs">
                    {current.findingTitle}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {current.findingRule}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5 text-slate-700 text-xs leading-relaxed font-mono">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Synthesized Conflict:</div>
                  <p>{current.conflictText}</p>
                </div>

                {/* Primary Evidentiary Anchor */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between font-mono text-[11px] text-trinity-blue">
                  <span className="flex items-center gap-1.5 font-medium truncate">
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span>Anchor: {current.anchor}</span>
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 font-mono text-[11px] text-slate-700 space-y-1">
                <span className="text-trinity-blue font-semibold">Mathematical Proof:</span>
                <p>Rule Constraint Verified → Zero Probabilistic Drift → Ready for Filing</p>
              </div>
            </div>

            {/* PANE 3: Counsel Authority Gate & Defensible Outcome (4 cols) */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-slate-900 text-white space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    03 // COUNSEL AUTHORITY GATE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    DEFENSIBLE
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Automated Legal Assessment:</div>
                  <div className="text-sm font-bold font-mono text-emerald-400">
                    {current.resultBadge}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1 font-mono">
                  <div className="text-[10px] text-slate-400 uppercase">Exposure Reconciliation:</div>
                  <div className="text-xs font-bold text-white">
                    {current.exposure}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1 font-mono text-[11px]">
                  <div className="text-slate-400">Human Authority Sign-Off:</div>
                  <div className="text-slate-200 font-semibold">{current.counselName}</div>
                  <div className="text-emerald-400 text-[10px] flex items-center gap-1 pt-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{current.counselAction}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onRequestDemo(`Matter Audit: ${current.title}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-trinity-blue text-white font-semibold text-xs hover:bg-[#0854B2] transition-colors shadow-xs"
              >
                <span>Request Case Lineage Briefing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
