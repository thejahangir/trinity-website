import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function AboutV2({ onRequestDemo }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Tag */}
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
            [ 09 // MISSION & VALUES ]
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-950 tracking-tight">
            Building AI for Problems That Matter.
          </h2>
        </div>

        {/* The Telescope Quote Card - Flat Structural Presentation */}
        <div className="p-8 sm:p-12 rounded-xl bg-white border border-slate-200 space-y-6 text-center">
          <blockquote className="text-xl sm:text-2xl font-display font-medium text-slate-900 italic leading-relaxed max-w-3xl mx-auto">
            “Astronomers did not invent the stars—they revealed them with a telescope. AI is our telescope. Trinity AI exists to decide where the world should point it.”
          </blockquote>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Trinity AI builds purpose-built decision intelligence platforms to solve high-stakes challenges across law, claims, and complex infrastructure. We design systems that support—not replace—human judgment, ensuring enterprise decisions are explainable, auditable, and defensible.
          </p>

          {/* Global Engineering Centers */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 text-xs font-mono font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-trinity-blue shrink-0" />
              <span>Boston, Massachusetts, USA (HQ)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-trinity-gold shrink-0" />
              <span>Bangalore, Karnataka, India (R&D)</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-4">
            <button
              onClick={() => onRequestDemo("Executive Briefing")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-slate-900 text-white hover:bg-trinity-blue text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
