import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Lock
} from 'lucide-react';
import heroLegalExecutive from '../assets/hero-legal-executive.jpg';

export default function Hero({ onRequestDemo }) {
  const parallaxRef = useRef(null);

  // High-Performance Hardware-Accelerated Scroll Parallax (Bypasses React re-renders)
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (parallaxRef.current) {
        const scroll = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
        // Parallax factor: 0.50 (Background moves at half speed of page scroll)
        const offset = scroll * 0.50;
        parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] md:h-screen md:max-h-screen bg-trinity-hero text-white overflow-hidden border-b border-[#182744] flex items-center justify-center">
      
      {/* Background Image Layer: Corporate Legal Executive in Executive Office */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Parallax Container: Generous 30% top/bottom bleed for fluid vertical glide */}
        <div 
          ref={parallaxRef}
          className="absolute -top-[30%] -left-[5%] -right-[5%] w-[110%] h-[160%] will-change-transform pointer-events-none select-none"
          style={{
            transform: 'translate3d(0, 0px, 0)'
          }}
        >
          <img 
            src={heroLegalExecutive} 
            alt="Trinity AI Legal Executive in Corporate Office Interior" 
            className="w-full h-full object-cover object-right lg:object-[80%_center] opacity-95 select-none"
          />
        </div>
        
        {/* Gradient vanishing on the left side where texts are there */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to right, #050B16 0%, #050B16 38%, rgba(5, 11, 22, 0.96) 48%, rgba(5, 11, 22, 0.65) 62%, rgba(5, 11, 22, 0.15) 80%, rgba(5, 11, 22, 0) 100%)'
          }}
        />

        {/* Mobile / Tablet overlay ensuring crisp contrast behind texts */}
        <div className="absolute inset-0 bg-[#050B16]/65 lg:hidden pointer-events-none z-[1]" />

        {/* Subtle top & bottom edge gradients to merge seamlessly with navbar and section border */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050B16]/80 via-transparent to-[#050B16]/90 z-[1]" />
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-trinity-blue/15 rounded-full blur-[140px] pointer-events-none z-[1]"></div>

      {/* Main Content: Vertically Centered Across Any Viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 md:pt-24 pb-8 md:pb-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Simple, Confident Enterprise Message */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold tracking-wider uppercase text-trinity-lightBlue backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-trinity-electric animate-pulse"></span>
              <span>TRINITY AI BOSTON</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-normal">High-Stakes Decision Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[62px] font-extrabold font-display leading-[1.08] tracking-tight text-white">
              AI That Turns Complex Evidence Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-trinity-lightBlue to-blue-100">Defensible Decisions</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-xl">
              Purpose-built enterprise intelligence for complex, high-stakes decisions. We combine domain expertise, evidence grounding, and human oversight to deliver decisions you can defend.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestDemo("Enterprise Briefing")}
                className="btn-primary py-3.5 px-8 text-base font-semibold group flex items-center justify-center gap-2 bg-trinity-blue hover:bg-trinity-deepBlue shadow-xl shadow-blue-950/60 cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#positioning"
                className="btn-secondary-dark py-3.5 px-7 text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <span>Explore Trinity AI</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Subtle Enterprise Assurance Row */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-trinity-lightBlue shrink-0" />
                <span>100% Evidence-Grounded</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-trinity-gold shrink-0"></span>
                <span>Human-in-the-Loop Authority</span>
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zero Model Retraining</span>
              </span>
            </div>

          </div>

          {/* Right Column: Executive office view with subtle enterprise grounding telemetry */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-end items-end h-full min-h-[260px] pb-4 pointer-events-auto cursor-default">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#071120]/85 border border-[#1b2b48]/90 backdrop-blur-md shadow-2xl text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px] text-trinity-lightBlue font-semibold">Evidence Grounding</span>
              <span className="text-slate-500">•</span>
              <span className="text-[11px] text-slate-300">100% Verifiable Citations</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
