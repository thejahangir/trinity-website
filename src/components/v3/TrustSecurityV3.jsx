import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck2, 
  Eye, 
  Key, 
  ChevronDown, 
  Sparkles, 
  Check, 
  Server,
  AlertCircle
} from 'lucide-react';

export default function TrustSecurityV3({ onRequestDemo }) {
  const [expandedPanel, setExpandedPanel] = useState(0);

  const trustPanels = [
    {
      title: "Zero Model Retraining & Absolute Data Isolation",
      subtitle: "Customer proprietary documents never train public or third-party foundational models.",
      icon: Lock,
      badge: "Sovereign Guarantee",
      details: [
        "Zero customer data leakage into foundation model weights (Claude, OpenAI, or proprietary models).",
        "Tenant-level cryptographic separation ensuring strict multi-organization boundary enforcement.",
        "Automatic ephemeral destruction of intermediate cache tokens post-analysis completion."
      ],
      compliance: "SOC-2 Type II Audited • ISO/IEC 27001 Aligned"
    },
    {
      title: "Sovereign Single-Tenant VPC Deployment",
      subtitle: "Deploy within your dedicated AWS GovCloud or Azure Government enterprise perimeter.",
      icon: Server,
      badge: "Air-Gapped Ready",
      details: [
        "Dedicated infrastructure instances isolated from all multi-tenant public traffic.",
        "AES-256 bit encryption at rest with customer-managed KMS keys (BYOK).",
        "TLS 1.3 end-to-end cryptographic encryption in transit across all internal microservice buses."
      ],
      compliance: "FedRAMP Moderate Ready • HIPAA Compliant Options"
    },
    {
      title: "Deterministic Explainability & Directed Acyclic Graph (DAG) Trails",
      subtitle: "Every assertion backed by an audit-ready, byte-aligned primary source pin-cite.",
      icon: FileCheck2,
      badge: "Inadmissibility-Proof",
      details: [
        "Step-by-step causal logic graphs trace every conclusion back to sworn deposition or contract exhibits.",
        "Eliminates probabilistic hallucination through formal deterministic constraint solving.",
        "Generates courtroom-ready evidentiary export binders with exact page-and-line hyperlinks."
      ],
      compliance: "Federal Rules of Evidence 901 & 902 Authentication Standard"
    },
    {
      title: "Continuous Expert Human Oversight & Mandatory Sign-Off Gates",
      subtitle: "AI accelerates review and highlights discrepancies; expert humans retain ultimate judgment.",
      icon: Eye,
      badge: "Human-in-the-Loop",
      details: [
        "Configurable attorney and senior claims director approval gates prior to formal docket filing.",
        "Immutable audit logging of all human edits, approvals, and rule overrides.",
        "Granular role-based access control (RBAC) ensuring appropriate ethical walls and work product immunity."
      ],
      compliance: "ABA Model Rules of Professional Conduct Aligned"
    }
  ];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#F6F7FA] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0E2EC]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>05 // Enterprise Trust & Security</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
              Institutional Security Built for <br className="hidden sm:inline" />
              <span className="text-[#0B57D0]">Privileged Enterprise Data.</span>
            </h2>
          </div>
          <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
            When handling confidential trial work product, reinsurance treaties, and proprietary claims schedules, compromise is never an option.
          </p>
        </div>

        {/* M3 Accordions / Expansion Panels */}
        <div className="pt-10 max-w-4xl mx-auto space-y-4">
          {trustPanels.map((panel, idx) => {
            const isExpanded = expandedPanel === idx;
            const Icon = panel.icon;
            return (
              <div
                key={idx}
                className={`rounded-[24px] border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-[#0B57D0] m3-elevation-2'
                    : 'bg-[#FDFBFF] border-[#E0E2EC] hover:border-[#C3C7D0]'
                }`}
              >
                {/* Header (Clickable Accordion Trigger) */}
                <button
                  type="button"
                  onClick={() => setExpandedPanel(isExpanded ? -1 : idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-[#0B57D0] text-white shadow-xs'
                        : 'bg-[#EFF1F6] text-[#43474E]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-bold text-[#1A1C1E]">
                          {panel.title}
                        </span>
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#D3E3FD] text-[#041E49]">
                          {panel.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#73777F]">
                        {panel.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#EFF1F6] text-[#43474E] transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 bg-[#D3E3FD] text-[#0B57D0]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-[#EFF1F6] bg-white">
                    <div className="space-y-3 mb-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#73777F] block">
                        Verified Technical Mandates:
                      </span>
                      {panel.details.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-[#1A1C1E]">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#EFF1F6] text-xs">
                      <span className="font-mono text-[#0B57D0] font-semibold">
                        // {panel.compliance}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRequestDemo(`Security & Compliance Deep Dive (${panel.title})`)}
                        className="inline-flex items-center gap-1.5 font-bold text-[#0B57D0] hover:text-[#0842A0] cursor-pointer"
                      >
                        <span>Request Security Data Room Access</span>
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
