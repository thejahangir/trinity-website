import React from 'react';
import { Scale, ShieldCheck, Building2, AlertOctagon } from 'lucide-react';
import { industries } from '../../data/homepageData';

export default function IndustriesV2() {
  const iconMap = {
    legal: Scale,
    insurance: ShieldCheck,
    construction: Building2,
    risk: AlertOctagon
  };

  const domainTags = {
    legal: 'Deposition vs Contract Conflict Audit',
    insurance: 'Exposure Isolation & Bad Faith Defense',
    construction: 'Change Order & Subcontract Carveouts',
    risk: 'Auditable Regulatory Governance Lineage'
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 04 // DOMAIN SPECIALIZATION ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              High-Stakes Industry Environments.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            Defined by massive evidentiary volume, strict deadlines, and zero margin for error.
          </p>
        </div>

        {/* 4 Clean Flat Industry Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.id] || Scale;
            const tag = domainTags[ind.id] || 'Domain-Grounded AI';

            return (
              <div 
                key={ind.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-400 transition-colors space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5 text-trinity-blue" />
                  </div>

                  <h3 className="text-base font-bold font-display text-slate-950 leading-snug">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-medium text-slate-500 block leading-tight">
                    {tag}
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
