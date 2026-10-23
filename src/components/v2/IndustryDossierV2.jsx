import React, { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  Building2, 
  AlertOctagon, 
  CheckCircle2, 
  Award
} from 'lucide-react';

export default function IndustryDossierV2() {
  const [activeTab, setActiveTab] = useState('legal');

  const domainDossiers = {
    legal: {
      id: 'legal',
      tabLabel: '01. Complex Litigation',
      icon: Scale,
      title: 'Commercial Litigation & Complex Arbitration',
      subtitle: 'Where a single unspotted deposition contradiction can lose a multimillion-dollar trial.',
      bottleneck: {
        headline: 'The 100,000-Page Discovery Blindspot',
        points: [
          'Manual associate review misses critical chronological contradictions across multi-volume depositions.',
          'Standard generative AI hallucinates citations or produces quotes that don’t exist in the record.',
          'Summary judgment motions face statutory bars when notice deadlines are miscalculated.'
        ]
      },
      solution: {
        headline: 'Deterministic Cross-Examination & Impeachment Engine',
        points: [
          'Maps every sworn witness answer against emails, contracts, and prior transcripts in seconds.',
          'Generates court-ready impeachment dossiers with exact volume, page, and line pin-cites.',
          'Automates Rule 901 compliance and joint exhibit preparation for federal and state courts.'
        ]
      },
      metrics: [
        { value: '-84%', label: 'Deposition Prep Time' },
        { value: '100%', label: 'Defensible Pin-Cites' },
        { value: '$0.00', label: 'Hallucination Malpractice Risk' }
      ],
      caseSnippet: 'Precedent: BioHealth Tech v. Global Logistics (Suffolk Superior). Contradictory CFO testimony identified in Deposition Vol. IV, resulting in pre-trial statutory dismissal of an $8.5M claim.'
    },
    insurance: {
      id: 'insurance',
      tabLabel: '02. Reinsurance & Claims',
      icon: ShieldCheck,
      title: 'Institutional Reinsurance & Complex Claims',
      subtitle: 'Where misinterpreting policy endorsements triggers catastrophic unhedged exposure.',
      bottleneck: {
        headline: 'The Policy Endorsement Maze',
        points: [
          'Complex multi-layer catastrophe claims obscure policy limits, sub-limits, and deductible non-cumulation.',
          'Claims adjusters struggle to reconcile concurrent causation across multiple weather occurrences.',
          'Insurers risk bad-faith litigation when claim defense decisions lack transparent evidentiary backing.'
        ]
      },
      solution: {
        headline: 'Defensible Coverage & Exposure Lineage Engine',
        points: [
          'Deconstructs ISO and manuscript policy wording to isolate true contractual coverage boundaries.',
          'Reconciles independent meteorological logs against claimed damage hours to verify occurrence counts.',
          'Produces defensible coverage position letters with complete evidentiary attachments.'
        ]
      },
      metrics: [
        { value: '-72%', label: 'File Triage Latency' },
        { value: '$12.7M', label: 'Deductible Leakage Prevented' },
        { value: '100%', label: 'Bad-Faith Defense Readiness' }
      ],
      caseSnippet: 'Precedent: Commercial Property Treaty Reinsurance Audit. Separated concurrent hail and wind events into two distinct occurrences under Endorsement 12, preserving $12.7M in treaty limits.'
    },
    construction: {
      id: 'construction',
      tabLabel: '03. Mega Construction',
      icon: Building2,
      title: 'Mega-Scale Infrastructure & Defect Disputes',
      subtitle: 'Where multi-party finger-pointing consumes years in mediation and millions in legal fees.',
      bottleneck: {
        headline: 'The Multi-Tier Subcontract Quagmire',
        points: [
          'General contractors face defect claims spanning 30+ specialized subcontractors and trade tiers.',
          'Exclusions in Exhibit C scopes of work are buried across thousands of change orders and RFIs.',
          'Failure to tender defense to responsible subcontractors leaves primary general contractors holding the bill.'
        ]
      },
      solution: {
        headline: 'Scope Carveout & Subcontract Allocation Engine',
        points: [
          'Extracts trade scopes across all subcontractor tiers to isolate exact responsibility lines.',
          'Reconciles forensic inspection findings directly against architectural details (e.g. A-502).',
          'Instantly drafts legally enforceable defense tender packages to sub-tier carriers.'
        ]
      },
      metrics: [
        { value: '90.1%', label: 'Client Exposure Filtered' },
        { value: '48 Hrs', label: 'Tender Package Delivery' },
        { value: '25k+', label: 'Drawing & RFI Links Indexed' }
      ],
      caseSnippet: 'Precedent: Seaport Tower 3 Water Intrusion Defense. Proved deck flashing defect fell under Division 07-6000 rather than framing scope, filtering 90.1% of claimed exposure from framing client.'
    },
    risk: {
      id: 'risk',
      tabLabel: '04. Enterprise Risk',
      icon: AlertOctagon,
      title: 'Regulatory Enforcement & Enterprise Governance',
      subtitle: 'Where regulatory sanctions demand absolute audit trails and zero black-box obscurity.',
      bottleneck: {
        headline: 'The Inadmissible Black-Box AI Trap',
        points: [
          'Regulators (SEC, DOJ, FINRA) reject compliance decisions made by opaque, non-deterministic AI.',
          'Enterprises face severe IP leakage when proprietary logs are sent to public model APIs.',
          'Lack of immutable audit records leaves compliance officers vulnerable to personal liability.'
        ]
      },
      solution: {
        headline: 'Cryptographically Audited Governance Architecture',
        points: [
          'Provides complete mathematical proof chains for every regulatory determination.',
          'Operates within air-gapped sovereign VPCs with zero data retention and zero model retraining.',
          'Generates SEC/DOJ-compliant audit trail logs with immutable SHA-256 evidence hashing.'
        ]
      },
      metrics: [
        { value: '0.00%', label: 'Data Retraining / Leakage' },
        { value: 'SOC-2', label: 'Type II Certified' },
        { value: '100%', label: 'Chain of Custody Verifiable' }
      ],
      caseSnippet: 'Precedent: Fortune 50 Financial Services Institutional Audit. Complete verification of 500,000 regulatory disclosure events with zero external model leakage and 100% reproducible audit trails.'
    }
  };

  const current = domainDossiers[activeTab] || domainDossiers.legal;

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 05 // DOMAIN SPECIALIZATION ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              High-Stakes Industry Environments.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Environments defined by massive evidentiary volume, strict statutory deadlines, and zero margin for error.
          </p>
        </div>

        {/* Horizontal Tabbed Domain Showcase */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">
          
          {/* Top Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-50 border-b border-slate-200 divide-x divide-slate-200">
            {Object.keys(domainDossiers).map((key) => {
              const d = domainDossiers[key];
              const Icon = d.icon;
              const isActive = key === activeTab;

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-4 text-left transition-all flex items-center gap-3.5 ${
                    isActive 
                      ? 'bg-white text-slate-950 border-b-2 border-trinity-blue shadow-xs font-semibold' 
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 font-medium'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-blue-50 text-trinity-blue border border-blue-200' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold font-display truncate">{d.tabLabel}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dossier Body */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Header of Active Domain */}
            <div className="space-y-2 pb-6 border-b border-slate-200">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950">
                {current.title}
              </h3>
              <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            {/* Split 3-Column Analysis: The Bottleneck vs The Solution vs The Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Column 1: The High-Stakes Bottleneck */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-800">
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                  THE INDUSTRY BOTTLENECK
                </div>
                <h4 className="text-sm font-bold font-display text-slate-950">
                  {current.bottleneck.headline}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {current.bottleneck.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: The Trinity Grounded Resolution */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-trinity-blue">
                  <span className="w-2 h-2 rounded-full bg-trinity-blue"></span>
                  THE DETERMINISTIC RESOLUTION
                </div>
                <h4 className="text-sm font-bold font-display text-slate-950">
                  {current.solution.headline}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-800">
                  {current.solution.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Quantitative Value Metrics Strip */}
              <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-950 text-white flex flex-col justify-between space-y-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Defensible Outcomes
                </div>
                <div className="space-y-4">
                  {current.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                      <div className="text-2xl font-bold font-mono text-emerald-400">{m.value}</div>
                      <div className="text-xs text-slate-300 font-sans mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">
                  VERIFIED DEPLOYMENTS
                </div>
              </div>

            </div>

            {/* Bottom Precedent Case Study Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3 text-xs text-slate-700">
                <Award className="w-4 h-4 text-trinity-blue shrink-0 mt-0.5 sm:mt-0" />
                <span className="font-mono text-xs">{current.caseSnippet}</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 shrink-0">
                AUDIT VERIFIED // 2026
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
