import React, { useState } from 'react';
import { 
  Brain, 
  Scale, 
  Workflow, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Check 
} from 'lucide-react';

export default function CapabilitiesV3() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterChips = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'litigation', label: 'Legal & Litigation' },
    { id: 'claims', label: 'Claims & Insurance' },
    { id: 'forensics', label: 'Construction Forensics' },
    { id: 'governance', label: 'Governance & Trust' }
  ];

  const enrichedCapabilities = [
    {
      id: "ai-intelligence",
      title: "AI & Machine Intelligence",
      description: "Building intelligent systems that process and understand complex, unstructured enterprise information with precision.",
      icon: Brain,
      category: ['all', 'litigation', 'claims', 'forensics'],
      badge: "Multimodal OCR & LayoutLM",
      detail: "Normalized ingestion of handwriting, exhibits, CAD line-drawings, and multi-generational scanned PDF filings."
    },
    {
      id: "decision-intelligence",
      title: "Decision Intelligence",
      description: "Helping organizations turn raw information, evidence, and data into clearer insights and defensible decisions.",
      icon: Scale,
      category: ['all', 'litigation', 'claims'],
      badge: "Causal DAG Logic",
      detail: "Deterministic graph traversals that establish which premises logically substantiate each executive conclusion."
    },
    {
      id: "domain-ai",
      title: "Domain-Specific AI",
      description: "Solutions designed around real-world industry problems, legal frameworks, and regulatory requirements rather than generic AI use cases.",
      icon: Workflow,
      category: ['all', 'litigation', 'forensics'],
      badge: "Statutory Rule Engines",
      detail: "Pre-configured for Federal Rules of Civil Procedure, AIA construction contracts, and state insurance codes."
    },
    {
      id: "data-knowledge",
      title: "Data & Knowledge Intelligence",
      description: "Connecting disparate documents, evidence, and historical knowledge to surface actionable insights and relationships.",
      icon: Database,
      category: ['all', 'litigation', 'claims', 'forensics'],
      badge: "Cross-Docket Synthesis",
      detail: "Resolves conflicting witness names, pseudonym aliases, and project change order numbers across decades of files."
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      description: "Streamlining complex review, discovery, and analysis workflows through structured, intelligent automation.",
      icon: Cpu,
      category: ['all', 'litigation', 'claims'],
      badge: "Autonomous Chronologies",
      detail: "Reduces deposition preparation and multi-party insurance allocation schedules from 3 weeks to under 4 hours."
    },
    {
      id: "responsible-ai",
      title: "Responsible AI",
      description: "Building systems with transparent reasoning, continuous human oversight, and institutional enterprise governance.",
      icon: ShieldCheck,
      category: ['all', 'governance', 'litigation', 'claims'],
      badge: "Air-Gapped Sovereign VPC",
      detail: "Strict zero-data-retraining policy. Customer dockets remain strictly isolated within client tenant boundaries."
    }
  ];

  const filteredCapabilities = enrichedCapabilities.filter(item => 
    item.category.includes(selectedFilter)
  );

  return (
    <section id="capabilities" className="w-full py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EFF1F6]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
              <span>02 // Enterprise Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C1E] tracking-tight">
              Intelligence Built for Real-World Stakes.
            </h2>
          </div>
          <p className="text-sm text-[#43474E] max-w-md font-normal leading-relaxed">
            Move past probabilistic horizontal bots. Trinity's capabilities provide the precision and defensibility demanded by high-stakes disputes.
          </p>
        </div>

        {/* M3 Interactive Filter Chips Row */}
        <div className="pt-8 pb-10 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-bold text-[#73777F] uppercase tracking-wider mr-2">
            Filter Domain:
          </span>
          {filterChips.map((chip) => {
            const isSelected = selectedFilter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => setSelectedFilter(chip.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B57D0] text-white shadow-xs font-semibold ring-2 ring-[#0B57D0]/20'
                    : 'bg-[#EFF1F6] text-[#43474E] hover:bg-[#E0E2EC] border border-[#E0E2EC]'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6 Capabilities Cards Grid (Material 3 Filled & Elevated Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="bg-[#F6F7FA] rounded-[28px] border border-[#E0E2EC] p-7 flex flex-col justify-between hover:bg-white hover:border-[#C3C7D0] transition-all duration-300 m3-elevation-0 hover:m3-elevation-2 group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#D3E3FD] text-[#0B57D0] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white text-[#43474E] border border-[#E0E2EC]">
                      {cap.badge}
                    </span>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-lg font-bold text-[#1A1C1E] mb-2 font-material">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#43474E] leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                {/* Sub-detail Container */}
                <div className="mt-4 pt-4 border-t border-[#E0E2EC]/80 bg-white/70 rounded-xl p-3 border border-[#E0E2EC]">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#73777F] block mb-1">
                    System Architecture
                  </span>
                  <p className="text-[11px] text-[#1A1C1E] font-medium leading-normal">
                    {cap.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
