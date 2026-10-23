import React from 'react';
import { approachSteps } from '../../data/homepageData';

export default function ApproachV2() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 06 // DECISION PIPELINE ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              From Information to Defensible Action.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            A clear, four-stage progression that transforms raw evidentiary data into defensible decisions.
          </p>
        </div>

        {/* 4-Step Flat Engineering Pipeline */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {approachSteps.map((step, idx) => {
            const isDecide = idx === 3;
            const phaseNum = String(idx + 1).padStart(2, '0');

            return (
              <div 
                key={step.step}
                className={`bg-white rounded-xl border p-7 flex flex-col justify-between space-y-6 transition-colors ${
                  isDecide 
                    ? 'border-amber-400 bg-amber-50/20' 
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold font-mono ${
                      isDecide ? 'text-amber-700' : 'text-trinity-blue'
                    }`}>
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400">
                      Phase {phaseNum}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-950">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Standard</span>
                  <span className={`font-semibold ${isDecide ? 'text-amber-800' : 'text-slate-800'}`}>
                    {isDecide ? 'Human Sign-Off Gate' : 'Deterministic Grounding'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
