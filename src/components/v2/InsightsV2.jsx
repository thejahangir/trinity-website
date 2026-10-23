import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { insights } from '../../data/homepageData';

export default function InsightsV2() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 08 // RESEARCH & BRIEFINGS ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Insights & Institutional Perspectives.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            Analysis on applied intelligence, legal defensibility, and machine reasoning in high-stakes industries.
          </p>
        </div>

        {/* 3 Flat Editorial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <article 
              key={item.title}
              className="bg-white rounded-xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-400 transition-colors space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-trinity-blue px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-950 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                <span className="inline-flex items-center gap-1 hover:text-trinity-blue transition-colors cursor-pointer">
                  <span>Read Briefing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-normal">
                  Vol. 2026 // {idx + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
