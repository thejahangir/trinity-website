import React from 'react';
import { Scale, Building2 } from 'lucide-react';
import { products } from '../data/homepageData';

export default function ProductsOverview({ onRequestDemo }) {
  const iconMap = {
    'cosmos-one': Scale,
    'cosmos-nexus': Building2
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-white border-b border-trinity-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
            Product Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
            Our AI Solutions
          </h2>
          <p className="text-base sm:text-lg text-trinity-slate leading-relaxed font-normal">
            Trinity AI develops purpose-built intelligence solutions designed to address complex challenges across high-stakes industries.
          </p>
        </div>

        {/* Two Simple, High-Impact Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => {
            const Icon = iconMap[product.id] || Scale;
            const isNexus = product.id === 'cosmos-nexus';

            return (
              <div 
                key={product.id}
                className="bg-trinity-canvas rounded-2xl border border-trinity-border p-8 lg:p-10 flex flex-col justify-between hover:border-blue-300 hover:shadow-enterprise transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isNexus 
                        ? 'bg-amber-50 text-trinity-gold border border-amber-200' 
                        : 'bg-blue-50 text-trinity-blue border border-blue-100'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-trinity-slate">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-trinity-ink">
                    {product.name}
                  </h3>

                  <p className="text-sm text-trinity-slate leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => onRequestDemo(product.name)}
                    className="text-sm font-semibold text-trinity-blue hover:text-trinity-deepBlue flex items-center gap-1.5 group"
                  >
                    <span>{product.cta}</span>
                  </button>

                  <span className="text-xs text-trinity-muted">
                    Dedicated Platform
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
