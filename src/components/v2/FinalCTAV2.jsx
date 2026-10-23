import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Cpu } from 'lucide-react';

export default function FinalCTAV2({ onRequestDemo }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-lightBlue">
              <span>[ 10 // COMMENCE ENGAGEMENT ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Initiate an Enterprise Architecture Briefing.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Direct access to our founding legal technologists and machine learning scientists under mutual NDA.
          </p>
        </div>

        {/* Dual-Track Executive Briefing Commencement Desks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Track 1: General Counsel & Claims Leadership */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-trinity-blue">
                  <Scale className="w-5 h-5 text-trinity-blue" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                  TRACK 01 // LEGAL LEADERSHIP
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white">
                General Counsel & Claims Executive Session
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Explore how Cosmos One™ or Cosmos Nexus™ can be deployed against active, live adversarial dockets, multi-subcontractor disputes, or complex reinsurance treaties to immediately isolate defensible exposure.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-trinity-blue font-bold">✓</span>
                  <span>Mutual NDA executed prior to session</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-trinity-blue font-bold">✓</span>
                  <span>Demonstration with synthetic adversarial dockets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-trinity-blue font-bold">✓</span>
                  <span>Immediate ROI and exposure audit roadmap</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onRequestDemo("General Counsel Briefing")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-trinity-blue text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#0854B2] transition-colors shadow-sm"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Track 2: Enterprise AI Architects & CIOs */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-slate-300">
                  TRACK 02 // TECHNICAL REVIEW
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white">
                Technical Architecture & Security Review
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Meet with our engineering leadership to review single-tenant sovereign VPC infrastructure, zero-data-retraining cryptographic verification, SOC 2 Type II audit reports, and on-premises deployment specs.
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Full SOC 2 Type II & Penetration Test review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Private tenant / BYOK encryption architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Direct technical Q&A with system architects</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onRequestDemo("Technical Architecture Review")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
            >
              <span>Request Technical Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Governance & Privacy Footer Assurance */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ENTERPRISE GUARANTEE: ZERO CUSTOMER DATA RETRAINING</span>
          </div>
          <div>BOSTON, MA // BANGALORE, INDIA</div>
        </div>

      </div>
    </section>
  );
}
