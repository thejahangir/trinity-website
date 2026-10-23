import React from 'react';

export default function CompanyPositioning() {
  return (
    <section id="positioning" className="py-20 lg:py-24 bg-white border-b border-trinity-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
          Core Positioning
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
          Intelligence Built for Complex Business Problems.
        </h2>

        <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal max-w-3xl mx-auto">
          Trinity AI builds enterprise intelligence platforms for high-stakes industries—combining AI, domain expertise, explainability, and human oversight to transform complex information into actionable, defensible decisions.
        </p>

        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left text-xs text-trinity-slate">
          <div className="p-4 rounded-xl bg-trinity-canvas border border-trinity-border">
            <span className="font-bold text-trinity-ink block mb-1">Enterprise AI</span>
            <span>Engineered for complex multi-party enterprise data.</span>
          </div>
          <div className="p-4 rounded-xl bg-trinity-canvas border border-trinity-border">
            <span className="font-bold text-trinity-ink block mb-1">Domain Expertise</span>
            <span>Tuned to legal precedent, policy, and industry standards.</span>
          </div>
          <div className="p-4 rounded-xl bg-trinity-canvas border border-trinity-border">
            <span className="font-bold text-trinity-ink block mb-1">Evidence Grounding</span>
            <span>Every conclusion anchored to verified primary sources.</span>
          </div>
          <div className="p-4 rounded-xl bg-trinity-canvas border border-trinity-border">
            <span className="font-bold text-trinity-ink block mb-1">Human Judgment</span>
            <span>AI supports experts rather than replacing accountability.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
