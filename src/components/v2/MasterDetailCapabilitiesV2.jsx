import React, { useState } from 'react';
import { 
  Cpu, 
  BrainCircuit, 
  Scale, 
  Network, 
  Workflow, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';
import { capabilities } from '../../data/homepageData';

const iconMap = {
  'ai-intelligence': Cpu,
  'decision-intelligence': BrainCircuit,
  'domain-ai': Scale,
  'data-knowledge': Network,
  'ai-automation': Workflow,
  'responsible-ai': ShieldCheck,
};

const capabilitySpecs = {
  'ai-intelligence': {
    code: 'MOD-01 // STATUTORY-GROUNDED REASONING',
    subtitle: 'Beyond Generative Hallucination to Verifiable Truth',
    input: 'Unstructured discovery dockets, scanned court filings, audio depositions, cross-jurisdiction statutes.',
    engine: 'Deterministic AST parser cross-referencing Fed. R. Civ. P. and local court rules against evidentiary assertions.',
    output: 'Auditable assertion matrix with 100% pin-point line citations and zero probabilistic guessing.',
    snippet: `ASSERTION_TEST:
  Claim: Plaintiff served notice under M.G.L. c. 93A § 9
  Evidence_Pin: Dep. Tr. Vol II, 142:12-18
  Statutory_Window: 30 Days Mandatory Pre-Suit
  Actual_Interval: 44 Days (EXPIRED)
  Audit_Verdict: STATUTORY BAR ACTIVE [100% GROUNDED]`,
    kpis: [
      { label: 'Hallucination Tolerance', value: '0.00%' },
      { label: 'Grounding Verification', value: '100% Citation' },
      { label: 'Processing Velocity', value: '<450ms / Record' }
    ]
  },
  'decision-intelligence': {
    code: 'MOD-02 // EVIDENTIARY CONFLICT RECONCILIATION',
    subtitle: 'Transforming Contradictions into Trial-Ready Advantages',
    input: 'Multi-party witness depositions, sworn affidavits, 10-K disclosures, internal corporate Slack/email threads.',
    engine: 'Bipartite contradiction graph isolating chronological and factual discrepancies across time horizons.',
    output: 'Impeachment dossier ready for cross-examination with side-by-side contradictory sworn quotes.',
    snippet: `CONTRADICTION_GRAPH:
  Node_A: "We received zero water intrusion alerts before Nov 12."
          [Deposition Tr. PMK, P. 88:14]
  Node_B: "Attached notice of ceiling leak from tenant unit 4B."
          [Email Exhibit 42, Sent Oct 28]
  Conflict_Delta: 15-Day Prior Notice Hidden
  Impeachment_Status: READY FOR CROSS-EXAMINATION`,
    kpis: [
      { label: 'Conflict Detection', value: 'Deterministic' },
      { label: 'Cross-Doc Synthesis', value: '100k+ Pages' },
      { label: 'Impeachment Index', value: 'Instant Recall' }
    ]
  },
  'domain-ai': {
    code: 'MOD-03 // SPECIALIZED LEGAL & CLAIMS ONTOLOGY',
    subtitle: 'Pre-Tuned for Law, Reinsurance, and Complex Infrastructure',
    input: 'AIA A201 General Conditions, ISO CGL policy schedules, reinsurance treaties, municipal building codes.',
    engine: 'Domain-specific semantic graph embedding statutory standards, tender rules, and indemnification chains.',
    output: 'Precision scope isolation, defensible liability apportionment, and automated tender letters.',
    snippet: `ONTOLOGY_WALK:
  Policy_Form: ISO CG 00 01 (Commercial General Liability)
  Endorsement: CG 21 34 (Exclusion - Designated Ongoing Operations)
  Subcontract_Ex_C: Scope Limited to Interior Drywall Only
  Tender_Target: Exterior Waterproofing Subcontractor
  Exposure_Filtered: $4,250,000 Defensible Carveout`,
    kpis: [
      { label: 'Legal Ontologies', value: '50 State + Federal' },
      { label: 'Insurance Forms', value: 'ISO / Non-ISO' },
      { label: 'Construction AIA', value: 'Standard & Custom' }
    ]
  },
  'data-knowledge': {
    code: 'MOD-04 // DEEP ENTERPRISE KNOWLEDGE GRAPH',
    subtitle: 'Unifying Fragmented Dockets into a Single Verifiable Truth',
    input: 'Decades of historical firm work product, briefs, settlement data, judge rulings, and expert reports.',
    engine: 'High-dimensional knowledge graph indexing precedent strategies and judicial tendencies by court/bench.',
    output: 'Dynamic institutional memory accessible across the firm with private, zero-retraining security boundaries.',
    snippet: `KNOWLEDGE_LINK:
  Jurisdiction: Suffolk Superior Court (BLS-1)
  Judge_Disposition_Pattern: Summary Judgment on Exculpatory Clauses
  Precedent_Brief: #2024-CV-1102 (Winning Dismissal Motion)
  Applicability_Score: 94.6% Relevance Grounding
  Security_Boundary: Air-Gapped Tenant Isolated`,
    kpis: [
      { label: 'Data Residency', value: 'Customer Sovereign' },
      { label: 'Model Retraining', value: '0% (Never)' },
      { label: 'Encryption', value: 'AES-256 / TLS 1.3' }
    ]
  },
  'ai-automation': {
    code: 'MOD-05 // END-TO-END EVIDENTIARY WORKFLOWS',
    subtitle: 'From Unstructured Discovery to Certified Judicial Filing',
    input: 'Bulk incoming discovery (10,000+ PDFs, emails, CAD blueprints, CCTV transcripts).',
    engine: 'Multi-stage deterministic extraction pipeline executing chronological indexing and exhibit cataloging.',
    output: 'Court-ready joint exhibit lists, deposition digest binders, and defensible exposure spreadsheets.',
    snippet: `PIPELINE_EXECUTION:
  Stage_1: OCR & Multi-Lingual Layout Normalization (Complete)
  Stage_2: Chronological Entity Pinning (4,819 Entities Extracted)
  Stage_3: Bates-Number Defensibility Audit (Zero Gap Verified)
  Stage_4: Exhibit Binder Export -> PDF/A Court Format Compliant`,
    kpis: [
      { label: 'Review Velocity', value: '10x Faster' },
      { label: 'Bates Verification', value: '100% Defensible' },
      { label: 'Format Compliance', value: 'Federal ECF' }
    ]
  },
  'responsible-ai': {
    code: 'MOD-06 // INSTITUTIONAL GOVERNANCE & PRIVACY',
    subtitle: 'Engineered for General Counsel, Insurers, and Regulators',
    input: 'Privileged attorney-client communications, proprietary trade secrets, sensitive HIPAA / PII data.',
    engine: 'Cryptographic data isolation with immutable audit logging and mandatory human partner sign-off gates.',
    output: 'Independently verifiable compliance ledger proving zero data contamination and complete privilege retention.',
    snippet: `SECURITY_PROOFS:
  Tenant_Isolation: Single-Tenant Dedicated VPC
  Training_Policy: STRICT_NO_TRAIN (Cryptographically Enforced)
  Audit_Trail: SHA-256 Hashed Event Log
  SOC-2_Status: Type II Certified Continuous Monitoring
  Human_Authority: Mandatory Lead Counsel Signature Required`,
    kpis: [
      { label: 'Compliance Audit', value: 'SOC-2 Type II' },
      { label: 'Privilege Protection', value: '100% Isolated' },
      { label: 'Chain of Custody', value: 'Cryptographic' }
    ]
  }
};

export default function MasterDetailCapabilitiesV2() {
  const [activeCapId, setActiveCapId] = useState(capabilities[0].id);

  const activeCap = capabilities.find(c => c.id === activeCapId) || capabilities[0];
  const activeSpec = capabilitySpecs[activeCapId] || capabilitySpecs['ai-intelligence'];
  const ActiveIcon = iconMap[activeCapId] || BrainCircuit;

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 02 // ARCHITECTURAL MODULES ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Six Deterministic Building Blocks.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Modular engineering components powering verifiable intelligence in high-stakes legal, claims, and regulatory environments.
          </p>
        </div>

        {/* Master-Detail Split Workbench */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Rail (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-3 shadow-xs space-y-1.5">
              <div className="px-3 py-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Architectural Modules
              </div>

              {capabilities.map((cap, idx) => {
                const Icon = iconMap[cap.id] || BrainCircuit;
                const isActive = cap.id === activeCapId;
                const numStr = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapId(cap.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-slate-950 text-white shadow-sm' 
                        : 'bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`font-mono text-xs font-semibold ${isActive ? 'text-trinity-blue' : 'text-slate-400'}`}>
                        {numStr}.
                      </span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-slate-800 text-trinity-lightBlue' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200/70'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold font-display truncate">
                        {cap.title}
                      </span>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-white translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Grounding Assurance Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Deterministic Grounding Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every assertion is verified against primary source exhibits and statutory rules. If a fact cannot be proven to an exact page and paragraph, it is never generated.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verifiable Lineage: 100%</span>
                <span className="text-emerald-700 font-semibold">Zero Retraining</span>
              </div>
            </div>
          </div>

          {/* Right Detail Dossier (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-8 shadow-xs">
            
            {/* Header of Active Module */}
            <div className="space-y-4 pb-6 border-b border-slate-200">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200">
                  {activeSpec.code}
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  PRODUCTION READY
                </span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-trinity-blue">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-slate-950">
                    {activeCap.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    {activeSpec.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {activeCap.description}
              </p>
            </div>

            {/* Three-Stage Architecture Flow */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Architectural Execution Pipeline
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                    01. Ingestion
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeSpec.input}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/80 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-trinity-blue uppercase tracking-wider">
                    02. Engine Logic
                  </div>
                  <p className="text-xs text-slate-900 leading-relaxed font-medium">
                    {activeSpec.engine}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                    03. Deliverable
                  </div>
                  <p className="text-xs text-slate-800 leading-relaxed">
                    {activeSpec.output}
                  </p>
                </div>
              </div>
            </div>

            {/* Code / Verification Log Preview */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Terminal className="w-3.5 h-3.5 text-slate-600" />
                  EVIDENTIARY AUDIT LOG PREVIEW
                </span>
                <span>DETERMINISTIC KERNEL v2.4</span>
              </div>

              <div className="p-4 bg-slate-950 text-slate-200 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <pre>{activeSpec.snippet}</pre>
              </div>
            </div>

            {/* Quantitative Module KPIs */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center">
              {activeSpec.kpis.map((kpi, kIdx) => (
                <div key={kIdx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-slate-950">
                    {kpi.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-slate-500">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
