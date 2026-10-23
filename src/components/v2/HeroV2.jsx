import React from 'react';
import { 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';
import heroWhiteBg from '../../assets/hero-white-bg.jpg';

export default function HeroV2({ onRequestDemo }) {
  return (
    <section className="relative bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      
      {/* Whitish Architectural Background with Seamless Gradient Blend */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img 
          src={heroWhiteBg} 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-40 mix-blend-multiply"
        />
        {/* Soft Multi-Stop Gradient Blend that dissolves smoothly into pure white */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, 
                rgba(255, 255, 255, 0.35) 0%, 
                rgba(255, 255, 255, 0.1) 25%, 
                rgba(255, 255, 255, 0.25) 55%, 
                rgba(255, 255, 255, 0.8) 80%, 
                #FFFFFF 100%
              )
            `
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Subtle Institutional Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/90 text-xs font-mono text-slate-800 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue" />
            <span className="font-semibold uppercase tracking-wider">Trinity AI Boston</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Deterministic Decision Intelligence</span>
          </div>

          {/* High-Contrast Bold Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08]">
            AI Engineered for <br className="hidden sm:inline" />
            <span className="text-trinity-blue">High-Stakes Decisions</span>.
          </h1>

          {/* Clean Executive Lead */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Where a single unverified claim costs millions. Trinity combines deterministic reasoning, full evidentiary lineage, and domain models to turn unstructured records into defensible outcomes.
          </p>

          {/* Minimalist Action Controls */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onRequestDemo("Enterprise Briefing")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-slate-950 text-white hover:bg-trinity-blue font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-300 bg-white/95 backdrop-blur-xs text-slate-800 hover:bg-white hover:border-slate-400 font-semibold text-xs tracking-wider uppercase transition-all duration-200"
            >
              <span>Explore Platforms</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* 3 Core Confidence Commitments */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-200/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>0.00% Hallucination Tolerance</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-200/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue" />
              <span>100% Primary Pin-Cite Lineage</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-200/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Zero Customer Data Retraining</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
