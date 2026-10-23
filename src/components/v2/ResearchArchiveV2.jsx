import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ResearchArchiveV2() {
  const [activeFilter, setActiveFilter] = useState('all');

  const researchPapers = [
    {
      id: 'paper-01',
      code: 'TRINITY-TR-2026-01',
      category: 'Deterministic AI',
      date: 'October 2026',
      readTime: '8 min read',
      title: 'Deterministic AI vs. Generative Probabilistic Models in High-Stakes Legal Decisions',
      abstract: 'An architectural investigation into why probabilistic large language models inevitably produce subtle factual hallucinations in complex discovery dockets, and how abstract syntax tree (AST) constraint graphs guarantee zero-error verifiability.',
      authors: 'Trinity Decision Systems Lab // Boston Headquarters',
      topics: ['Evidence Admissibility', 'Fed. R. Evid. 901', 'Deterministic ASTs']
    },
    {
      id: 'paper-02',
      code: 'TRINITY-TR-2026-02',
      category: 'Construction Arbitration',
      date: 'September 2026',
      readTime: '12 min read',
      title: 'Deconstructing Multi-Party Construction Defect Claims with Automated Scope Carveouts',
      abstract: 'Methodology for cross-referencing multi-tiered subcontractor trade scopes, change orders, and BIM architectural drawings to isolate exposure and trigger defense tenders within 48 hours of service.',
      authors: 'Infrastructure & Forensic Engineering Group // Bangalore Labs',
      topics: ['AIA A201 General Conditions', 'Subcontract Ex. C', 'Exposure Lineage']
    },
    {
      id: 'paper-03',
      code: 'TRINITY-TR-2026-03',
      category: 'Civil Procedure & Compliance',
      date: 'August 2026',
      readTime: '10 min read',
      title: 'Statutory Demand Bars and Pre-Suit Notice Compliance in Complex Commercial Litigation',
      abstract: 'A forensic analysis of statutory notice prerequisites under state consumer protection statutes (e.g. M.G.L. c. 93A) and how automated evidentiary timelines establish absolute pre-trial dismissal bars.',
      authors: 'Litigation Practice Advisory Council // Boston & Bangalore',
      topics: ['Statutory Notice Rules', 'M.G.L. c. 93A § 9', 'Dismissal Tenders']
    }
  ];

  const filteredPapers = activeFilter === 'all' 
    ? researchPapers 
    : researchPapers.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="insights" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 08 // RESEARCH & BRIEFINGS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Institutional Research Archive.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Peer-reviewed architectural briefings and whitepapers authored by our Boston and Bangalore research groups.
          </p>
        </div>

        {/* Research List Container */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">
          
          {/* Top Filter Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-2 uppercase tracking-wider font-mono">Topic:</span>
              {['all', 'deterministic', 'construction', 'civil'].map((filterKey) => (
                <button
                  key={filterKey}
                  onClick={() => setActiveFilter(filterKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeFilter === filterKey
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
                  }`}
                >
                  {filterKey === 'all' ? 'All Research' : filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-slate-500">
              Showing {filteredPapers.length} Briefings
            </span>
          </div>

          {/* Research Rows */}
          <div className="divide-y divide-slate-100">
            {filteredPapers.map((paper) => (
              <div 
                key={paper.id}
                className="p-6 sm:p-8 hover:bg-slate-50/70 transition-colors space-y-3.5 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                      {paper.code}
                    </span>
                    <span className="text-trinity-blue font-semibold">{paper.category}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{paper.date}</span>
                    <span>•</span>
                    <span>{paper.readTime}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 group-hover:text-trinity-blue transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                    {paper.abstract}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-slate-400">Indexed:</span>
                    {paper.topics.map((t, idx) => (
                      <span key={idx} className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-slate-400 hidden md:inline">
                      {paper.authors}
                    </span>
                    <a 
                      href="#insights" 
                      className="inline-flex items-center gap-1.5 font-semibold text-xs text-slate-900 group-hover:text-trinity-blue transition-colors"
                    >
                      <span>Read Briefing</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
