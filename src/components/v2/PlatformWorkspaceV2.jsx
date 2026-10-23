import React, { useState } from 'react';
import { 
  Scale, 
  Building2, 
  ArrowRight, 
  Check, 
  FileText, 
  CheckCircle2
} from 'lucide-react';

export default function PlatformWorkspaceV2({ onRequestDemo }) {
  const [activePlatform, setActivePlatform] = useState('cosmos-one'); // 'cosmos-one' | 'cosmos-nexus'

  const platformData = {
    'cosmos-one': {
      id: 'cosmos-one',
      name: 'Cosmos One™',
      tagline: 'Complex Litigation & Institutional Claims Intelligence',
      badge: 'ENTERPRISE PRODUCTION',
      domain: 'COMMERCIAL LITIGATION // REINSURANCE // BAD FAITH',
      summary: 'Engineered specifically for high-stakes litigation defense, multi-jurisdiction arbitration, and catastrophic claims disputes. Cosmos One™ autonomously extracts, reconciles, and links evidentiary records across tens of thousands of docket pages with zero hallucination.',
      targetAudience: 'General Counsel, Am Law 100 Partners, Chief Claims Officers, Complex Reinsurance Adjusters.',
      keyWorkflows: [
        {
          title: 'Deposition vs. Contract Conflict Isolation',
          desc: 'Identifies discrepancies between sworn witness testimony and underlying contract provisions, creating instant impeachment outlines.'
        },
        {
          title: 'Statutory Preclusion Engine (e.g. M.G.L. c. 93A)',
          desc: 'Automates strict procedural checks against mandatory 30-day demand notices, statute of limitations bars, and filing prerequisites.'
        },
        {
          title: 'Court-Ready Evidentiary Pin-Cite Docketing',
          desc: 'Every factual assertion is locked to specific volume, page, and line coordinates, ready for instant judicial tender.'
        }
      ],
      interactiveDemo: {
        docketId: 'CIV-2026-9921 // SUFFOLK SUPERIOR COURT (BLS)',
        matterName: 'BioHealth Tech v. Global Logistics Corp.',
        rawDocumentTitle: 'Exhibit 19: Master Services Agreement § 14.2 & Deposition Vol. IV',
        rawSnippet: `14.2 Mandatory Written Notice & Cure Period. 
"In the event of alleged service degradation, Customer shall deliver written formal notice specifying breach particulars via certified mail to Provider HQ within thirty (30) business days. Failure to provide such notice shall irrevocably waive all indemnification remedies under Section 16."`,
        depositionSnippet: `Q: (Counsel) When did BioHealth first transmit written notice of server downtime?
A: (CFO witness) We never sent a certified letter. We only discussed it informally during an impromptu phone call on December 14th, which was roughly 65 days after the incident.`,
        reconciliationVerdict: 'STATUTORY & CONTRACTUAL REMEDY IRREVOCABLY PRECLUDED',
        exposureDiff: 'Claimed Damages: $8.50M → Grounded Contractual Cap: $0.00'
      }
    },
    'cosmos-nexus': {
      id: 'cosmos-nexus',
      name: 'Cosmos Nexus™',
      tagline: 'Multi-Party Construction & Infrastructure Decision Engine',
      badge: 'ENTERPRISE PRODUCTION',
      domain: 'INFRASTRUCTURE // MEGA-PROJECT ARBITRATION // SUB-TIER INDEMNITY',
      summary: 'Designed for mega-projects, major infrastructure disputes, and multi-party construction defect claims. Cosmos Nexus™ cuts through millions of change orders, architectural drawings, and indemnification tiers to isolate exposure and trigger defense tenders.',
      targetAudience: 'Construction General Counsel, Mega-Project Developers, Forensic Engineering Leads, Builders Risk Underwriters.',
      keyWorkflows: [
        {
          title: 'Subcontract Scope & Carveout Isolation',
          desc: 'Isolates trade-specific scopes of work across dozens of tiers, identifying exact subcontract carveouts that eliminate client liability.'
        },
        {
          title: 'Change Order & CAD Blueprint Reconciliation',
          desc: 'Correlates field change directives and RFI logs against original architectural drawings to determine true fault origin.'
        },
        {
          title: 'Automated Defense Tender Package Generation',
          desc: 'Prepares legally binding tender demands to downstream subcontractors and their primary insurers within hours of claim filing.'
        }
      ],
      interactiveDemo: {
        docketId: 'ARB-2026-4402 // COMPLEX CONSTRUCTION ARBITRATION',
        matterName: 'Seaport Tower 3 Water Intrusion & Structural Defect',
        rawDocumentTitle: 'Subcontract Agreement Ex. C (Scope) & Architectural Detail A-502',
        rawSnippet: `EXHIBIT C - TRADE SCOPE OF WORK: 07-4000
"Framing Subcontractor shall provide exterior light-gauge steel stud framing, gypsum sheathing, and air barrier membrane. SPECIFIC EXCLUSION: Perimeter balcony metal flashing, sealant joints, and horizontal through-wall waterproofing are excluded from this subcontract and assigned to Division 07-6000."`,
        depositionSnippet: `Forensic Inspection Report (Ex. 88, P. 12):
"Water infiltration at Gridlines C-8 and D-4 originated from unsealed perimeter horizontal flashing joints at balcony deck slab edge."`,
        reconciliationVerdict: 'COMPLETE DEFENSE CARVEOUT VERIFIED UNDER EX. C ART. 4',
        exposureDiff: 'Claimed Loss: $24.8M → Allocated Subcontractor Liability: $0.00'
      }
    }
  };

  const current = platformData[activePlatform];

  return (
    <section id="products" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 03 // PURPOSE-BUILT PLATFORMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Purpose-Built Decision Systems.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Dedicated enterprise platforms engineered to address distinct high-stakes evidentiary challenges across law, claims, and infrastructure.
          </p>
        </div>

        {/* Dual Platform Showcase Container */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">
          
          {/* Top Segmented Switcher Bar */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
              <button
                onClick={() => setActivePlatform('cosmos-one')}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePlatform === 'cosmos-one'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                <Scale className="w-4 h-4 text-trinity-blue" />
                <span>Cosmos One™ // Litigation & Claims</span>
              </button>

              <button
                onClick={() => setActivePlatform('cosmos-nexus')}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePlatform === 'cosmos-nexus'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                <Building2 className="w-4 h-4 text-trinity-blue" />
                <span>Cosmos Nexus™ // Construction Defect</span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                ACTIVE ARCHITECTURE
              </span>
              <span>•</span>
              <span>100% DETERMINISTIC</span>
            </div>
          </div>

          {/* Platform Console Interior Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Left 5 Cols: Platform Specification & Workflows */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                
                {/* Platform Identity */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-trinity-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {current.domain}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {current.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950">
                    {current.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    {current.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {current.summary}
                </p>

                {/* Target Users */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Operational Deployment
                  </div>
                  <div className="text-xs text-slate-800 font-semibold">
                    {current.targetAudience}
                  </div>
                </div>

                {/* Core Workflows */}
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Core Operational Workflows
                  </div>
                  <div className="space-y-2">
                    {current.keyWorkflows.map((wf, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/50 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-950">
                          <Check className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                          <span>{wf.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                          {wf.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Trigger */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onRequestDemo(current.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 text-white text-xs font-semibold hover:bg-trinity-blue transition-colors shadow-xs"
                >
                  <span>Request {current.name} Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-500">
                  Single-Tenant VPC Deployment
                </span>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Evidentiary Lineage Workbench */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FAFAFA] space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-700" />
                  <span className="text-xs font-mono font-bold text-slate-900">
                    LIVE EVIDENTIARY RECONCILIATION PREVIEW
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  {current.interactiveDemo.docketId}
                </span>
              </div>

              {/* Matter Banner */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Active Case Matter</div>
                  <div className="text-xs font-bold text-slate-950">{current.interactiveDemo.matterName}</div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-blue-50 text-trinity-blue font-semibold rounded-md border border-blue-200">
                  100% LINEAGE PINNED
                </span>
              </div>

              {/* Step 1: Raw Governing Contract / Document */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="font-semibold text-slate-700">01 // GOVERNING CONTRACT / SPECIFICATION CLAUSE</span>
                  <span className="text-[10px]">SOURCE RECORD</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-mono leading-relaxed shadow-xs">
                  <div className="font-bold text-slate-950 pb-1.5 border-b border-slate-100 mb-2">
                    {current.interactiveDemo.rawDocumentTitle}
                  </div>
                  <div className="bg-amber-50/80 border-l-2 border-amber-500 p-2.5 rounded-r text-slate-900">
                    {current.interactiveDemo.rawSnippet}
                  </div>
                </div>
              </div>

              {/* Step 2: Opposing Sworn Evidence / Deposition */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="font-semibold text-slate-700">02 // OPPOSING SWORN DEPOSITION / FORENSIC RECORD</span>
                  <span className="text-[10px]">CONTRADICTION DETECTED</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-mono leading-relaxed shadow-xs">
                  <div className="bg-rose-50/80 border-l-2 border-rose-500 p-2.5 rounded-r text-slate-900 whitespace-pre-line">
                    {current.interactiveDemo.depositionSnippet}
                  </div>
                </div>
              </div>

              {/* Step 3: Deterministic Finding & Verdict Box */}
              <div className="p-5 rounded-xl bg-slate-950 text-white space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    DETERMINISTIC VERDICT
                  </span>
                  <span className="text-slate-400">JUDICIAL TENDER READY</span>
                </div>

                <div className="text-sm font-bold font-mono text-white">
                  {current.interactiveDemo.reconciliationVerdict}
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Financial Impact:</span>
                  <span className="text-emerald-400 font-bold">{current.interactiveDemo.exposureDiff}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
