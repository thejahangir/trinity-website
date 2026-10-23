import React from 'react';
import { Target, FileCheck2, UserCheck, ShieldCheck } from 'lucide-react';
import { differentiationPrinciples } from '../../data/homepageData';

export default function DifferentiationV2() {
  const icons = [Target, FileCheck2, UserCheck, ShieldCheck];

  return (
    <section id="differentiation" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 05 // ARCHITECTURAL PILLARS ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Beyond Generic AI.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            Artificial intelligence engineered for domain expertise, evidence reasoning, and human authority.
          </p>
        </div>

        {/* 4 Flat Modular Pillar Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiationPrinciples.map((item, idx) => {
            const Icon = icons[idx] || Target;
            const stepNum = String(idx + 1).padStart(2, '0');

            return (
              <div 
                key={item.title}
                className="bg-white rounded-xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-400 transition-colors space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                      <Icon className="w-5 h-5 text-trinity-blue" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      // {stepNum}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-950">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Auditable Standard</span>
                  <span className="text-slate-800 font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
