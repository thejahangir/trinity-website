import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import materialHeroGlass from '../../assets/material-hero-glass.jpg';

export default function HeroBentoV3({ onRequestDemo }) {
  return (
    <section 
      id="overview" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FDFBFF] via-[#F8FAFD] to-[#FDFBFF] border-b border-[#E0E2EC]/80 pt-28 pb-16 lg:pt-36 lg:pb-24 font-material"
    >
      
      {/* =========================================================================
          FLUID FULL-BLEED MERGED BACKGROUND ARTWORK LAYER
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Luminous 3D Glass Artwork: Spans across the right and center seamlessly */}
        <img 
          src={materialHeroGlass} 
          alt="" 
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[62%] h-full object-cover object-center lg:object-right opacity-90 mix-blend-multiply"
        />

        {/* Fluid Multi-Directional Gradient Mask: Merges the image into the whole hero canvas */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, 
                #FDFBFF 0%, 
                #FDFBFF 28%, 
                rgba(253, 251, 255, 0.95) 45%, 
                rgba(253, 251, 255, 0.4) 70%, 
                rgba(253, 251, 255, 0.1) 100%
              ),
              linear-gradient(to bottom, 
                #FDFBFF 0%, 
                transparent 15%, 
                transparent 80%, 
                #FDFBFF 100%
              )
            `
          }}
        />

        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#D3E3FD]/40 to-[#FFDF99]/25 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* =========================================================================
          HERO CONTENT: FLUID GRID ALIGNED TO MAX-W-7XL
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs (8 cols) */}
          <div className="lg:col-span-8 max-w-2xl space-y-6">
            
            {/* Assist Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wide border border-[#C2E7FF] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
                <span>Deterministic Decision Intelligence</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-[#43474E] text-xs font-medium border border-[#E0E2EC] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>AmLaw 100 & ENR Proven</span>
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1C1E] leading-[1.08]">
              AI Engineered for <br />
              <span className="text-[#0B57D0] relative inline-block">
                Defensible Decisions
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#D3E3FD]/70 -z-10 rounded-full"></span>
              </span>
              .
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg text-[#43474E] font-normal leading-relaxed">
              Where a single hallucinated assertion risks catastrophic liability. Trinity turns tens of thousands of unstructured docket pages, policy schedules, and defect claims into verifiable, courtroom-ready outcomes.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onRequestDemo("Hero Executive Briefing")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 m3-elevation-2 hover:m3-elevation-3 cursor-pointer active:scale-95 shadow-md"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#platforms"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/90 hover:bg-white text-[#1A1C1E] text-xs font-semibold tracking-wider uppercase transition-colors border border-[#E0E2EC] shadow-xs backdrop-blur-xs"
              >
                <span>Explore Decision Engines</span>
                <ChevronRight className="w-4 h-4 text-[#73777F]" />
              </a>
            </div>

            {/* Bottom 3 Confidence Commitments */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#E0E2EC] shadow-xs">
                <span className="text-[10px] font-mono font-bold text-[#0B57D0] uppercase tracking-wider block">
                  0.00% Tolerance
                </span>
                <span className="text-xs font-bold text-[#1A1C1E] block mt-0.5">
                  Zero Hallucinations
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#E0E2EC] shadow-xs">
                <span className="text-[10px] font-mono font-bold text-[#A36B00] uppercase tracking-wider block">
                  100% Byte-Level
                </span>
                <span className="text-xs font-bold text-[#1A1C1E] block mt-0.5">
                  Primary Pin-Cite
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#E0E2EC] shadow-xs">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                  Air-Gapped
                </span>
                <span className="text-xs font-bold text-[#1A1C1E] block mt-0.5">
                  Sovereign Tenant VPC
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Free-Floating Atmospheric Glass Overlay Badges (4 cols) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center space-y-4">
            
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-white/70 shadow-sm text-xs font-semibold text-[#041E49]">
              <Sparkles className="w-4 h-4 text-[#0B57D0]" />
              <span>Multimodal Causal Graph</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-white/70 shadow-sm text-xs font-mono font-bold text-[#1A1C1E]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Pin-Cite Lineage Verified</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-md max-w-xs text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1A1C1E] mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B57D0]" />
                <span>Deterministic Evidence Layer</span>
              </div>
              <p className="text-[11px] text-[#43474E] leading-relaxed">
                Primary records, contracts, and transcripts synthesized into verifiable audit trails with zero ungrounded hypotheses.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
