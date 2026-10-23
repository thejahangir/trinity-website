import React from 'react';
import { Scale, Building2, ArrowRight, Check } from 'lucide-react';
import { products } from '../../data/homepageData';

export default function ProductsV2({ onRequestDemo }) {
  const iconMap = {
    'cosmos-one': Scale,
    'cosmos-nexus': Building2
  };

  const featureSpecs = {
    'cosmos-one': [
      'Statutory & Rule Reconciliation (M.G.L. / Fed. R. Civ. P.)',
      'Deposition vs. Master Agreement Conflict Isolation',
      'Court-Ready Evidentiary Docket Anchors with Exact Paragraph Match'
    ],
    'cosmos-nexus': [
      'Multi-Party Subcontract Scope Isolation (Ex. C / Art. 4.2)',
      'Architectural Drawing & Change Order Cross-Referencing',
      'Defensible Exposure Reconciliation & Defense Tender Verification'
    ]
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              [ 03 // PRODUCTS & PLATFORMS ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Purpose-Built Decision Platforms.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-mono">
            Designed to address complex evidentiary challenges across law, claims, and complex infrastructure.
          </p>
        </div>

        {/* Flat Dual Product Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.id] || Scale;
            const specs = featureSpecs[product.id] || [];

            return (
              <div 
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 p-8 sm:p-9 flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div className="space-y-6">
                  
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                        <Icon className="w-5 h-5 text-trinity-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-slate-950">
                          {product.name}
                        </h3>
                        <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                          Dedicated Enterprise Architecture
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700">
                      {product.badge}
                    </span>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Structural Feature Specifications */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-400">
                      Core Technical Capabilities
                    </div>
                    {specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-trinity-blue shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Row */}
                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onRequestDemo(product.name)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded bg-slate-900 text-white hover:bg-trinity-blue transition-colors"
                  >
                    <span>{product.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    Deterministic // Zero Retraining
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
