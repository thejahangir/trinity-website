import React from 'react';
import { 
  Cpu, 
  BrainCircuit, 
  Scale, 
  Network, 
  Workflow, 
  ShieldCheck 
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

export default function CapabilitiesV2() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 02 // CAPABILITIES ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Enterprise Decision Architecture.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            Modular engineering building blocks powering high-stakes institutional intelligence.
          </p>
        </div>

        {/* 3x2 Flat Hairline Grid */}
        <div className="mt-10 border border-slate-200 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
          {capabilities.map((cap, idx) => {
            const Icon = iconMap[cap.id] || BrainCircuit;
            const stepNum = String(idx + 1).padStart(2, '0');

            return (
              <div 
                key={cap.id} 
                className={`p-7 sm:p-8 space-y-4 hover:bg-slate-50/70 transition-colors ${
                  idx >= 3 ? 'md:border-t md:border-slate-200' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5 text-trinity-blue" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {stepNum}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-900 leading-snug">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
