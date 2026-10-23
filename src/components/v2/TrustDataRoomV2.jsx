import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  KeyRound 
} from 'lucide-react';
import { trustPrinciples } from '../../data/homepageData';

export default function TrustDataRoomV2() {
  const complianceChecklist = [
    { standard: 'SOC 2 Type II Certified', desc: 'Independently audited annually across Security, Confidentiality, and Availability controls.', status: 'CURRENT' },
    { standard: 'ISO/IEC 27001 Aligned', desc: 'Enterprise-grade Information Security Management System (ISMS) governing all R&D and operations.', status: 'VERIFIED' },
    { standard: 'Zero-Data-Retraining Policy', desc: 'Client dockets and exhibits are cryptographically excluded from model training or caching.', status: 'ENFORCED' },
    { standard: 'Private Tenant / Sovereign VPC', desc: 'Single-tenant deployment on AWS/Azure GovCloud or on-premises with customer-managed keys (CMK).', status: 'AVAILABLE' },
    { standard: 'Cryptographic SHA-256 Audit Trail', desc: 'Every extraction and reasoning step is signed with immutable cryptographic hashes for court admissibility.', status: 'ACTIVE' },
    { standard: 'HIPAA & PII Redaction Engine', desc: 'Automated identification and redaction of sensitive patient health identifiers and financial PII.', status: 'BUILT-IN' }
  ];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 07 // INSTITUTIONAL ASSURANCE ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Enterprise Governance & Security Data Room.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Architected to satisfy the strictest risk committees, General Counsel, and federal regulators.
          </p>
        </div>

        {/* Institutional Governance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 6 Cols: Core Non-Negotiable Guarantees */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  Four Institutional Guarantees
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  CONTRACTUALLY BINDING
                </span>
              </div>

              <div className="space-y-4">
                {trustPrinciples.slice(0, 4).map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <h4 className="text-sm font-bold font-display text-slate-950">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6.5">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Sovereign Key Callout */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <KeyRound className="w-3.5 h-3.5 text-slate-800" />
                BYOK (Bring Your Own Key) Support
              </span>
              <span>AES-256-GCM</span>
            </div>
          </div>

          {/* Right 6 Cols: Audited Compliance Matrix */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  Compliance & Security Architecture
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  CONTINUOUS AUDIT
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {complianceChecklist.map((item, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-950">
                        <CheckCircle2 className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                        <span>{item.standard}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 pl-5.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Download Security Brief Button */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Request full SOC-2 Type II report & penetration test summary.
              </div>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-950 text-white hover:bg-trinity-blue transition-colors shadow-xs"
              >
                <span>Request Security Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
