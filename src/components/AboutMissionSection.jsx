import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutMissionSection({ onRequestDemo }) {
  return (
    <section id="about" className="py-24 lg:py-32 bg-trinity-canvas border-b border-trinity-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-trinity-blue border border-blue-100">
          Company Mission
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-trinity-ink tracking-tight">
          Building AI for Problems That Matter.
        </h2>

        {/* Telescope Quote */}
        <blockquote className="text-xl sm:text-2xl font-display font-medium text-trinity-ink italic leading-relaxed max-w-3xl mx-auto">
          “Astronomers did not invent the stars—they revealed them with a telescope. AI is our telescope. Trinity AI exists to decide where the world should point it.”
        </blockquote>

        <p className="text-base text-trinity-slate leading-relaxed font-normal max-w-2xl mx-auto">
          Trinity AI builds purpose-built decision intelligence platforms to solve high-stakes challenges across law, claims, and complex infrastructure. We design systems that support—not replace—human judgment, ensuring enterprise decisions are explainable, auditable, and defensible.
        </p>

        {/* Global Hubs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-trinity-slate">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trinity-blue"></span>
            Boston, Massachusetts, USA
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-trinity-gold"></span>
            Bangalore, Karnataka, India
          </span>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button
            onClick={() => onRequestDemo("Company Consultation")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-trinity-blue hover:text-trinity-deepBlue group cursor-pointer"
          >
            <span>About Trinity AI</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
