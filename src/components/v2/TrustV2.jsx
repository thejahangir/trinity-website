import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  GitFork, 
  UserCheck, 
  Scale, 
  CheckCircle2 
} from 'lucide-react';
import { trustPrinciples } from '../../data/homepageData';

export default function TrustV2() {
  const icons = [Lock, ShieldCheck, GitFork, UserCheck, Scale, CheckCircle2];

  return (
    <section id="trust" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 07 // TRUST & GOVERNANCE ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Institutional Governance Standards.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            Enterprise AI requires more than powerful models. It demands transparency, data isolation, and human oversight.
          </p>
        </div>

        {/* 6 Flat Governance Grid Cells */}
        <div className="mt-12 border border-slate-200 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
          {trustPrinciples.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            const isHuman = item.title === "Human Oversight";
            const cellNum = String(idx + 1).padStart(2, '0');

            return (
              <div 
                key={item.title}
                className={`p-7 sm:p-8 space-y-4 hover:bg-slate-50/70 transition-colors ${
                  idx >= 3 ? 'md:border-t md:border-slate-200' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded border flex items-center justify-center ${
                    isHuman 
                      ? 'bg-amber-50 text-amber-700 border-amber-200' 
                      : 'bg-slate-100 text-slate-800 border-slate-200'
                  }`}>
                    <Icon className="w-5 h-5 text-trinity-blue" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    // {cellNum}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-950">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
