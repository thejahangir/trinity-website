import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  GitFork, 
  UserCheck, 
  Scale, 
  CheckCircle2 
} from 'lucide-react';
import { trustPrinciples } from '../data/homepageData';

export default function TrustSection() {
  const icons = [Lock, ShieldCheck, GitFork, UserCheck, Scale, CheckCircle2];

  return (
    <section id="trust" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            Trust & Governance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Built With Trust in Mind.
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Enterprise AI requires more than powerful models. It requires transparency, security, governance, and human oversight.
          </p>
        </div>

        {/* 6 Simple Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPrinciples.map((item, idx) => {
            const Icon = icons[idx];
            const isHuman = item.title === "Human Oversight";

            return (
              <div 
                key={item.title}
                className="bg-white rounded-2xl border border-trinity-border p-8 shadow-subtle hover:border-blue-300 hover:shadow-enterprise transition-all duration-200 space-y-4"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  isHuman 
                    ? 'bg-amber-50 text-trinity-gold border border-amber-200' 
                    : 'bg-blue-50 text-trinity-blue border border-blue-100'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold font-display text-trinity-ink">
                  {item.title}
                </h3>

                <p className="text-sm text-trinity-slate leading-relaxed font-normal">
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
