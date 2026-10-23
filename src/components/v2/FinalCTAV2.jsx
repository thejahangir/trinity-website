import React from 'react';
import { ArrowRight, Mail, ShieldCheck, FileCheck2, Lock, Clock } from 'lucide-react';

export default function FinalCTAV2({ onRequestDemo }) {
  const protocols = [
    {
      step: "01",
      title: "Bilateral Mutual NDA",
      desc: "Standard enterprise confidentiality executed prior to any case material or docket exchange.",
      icon: ShieldCheck
    },
    {
      step: "02",
      title: "Sanitized Ingestion",
      desc: "Byte-level evidentiary parsing conducted on your redacted sample depositions, claims, or BIM models.",
      icon: FileCheck2
    },
    {
      step: "03",
      title: "Sovereign Air-Gapping",
      desc: "Isolated single-tenant VPC deployment with strict zero customer retraining guarantees.",
      icon: Lock
    },
    {
      step: "04",
      title: "30-Min Founder Briefing",
      desc: "Direct demonstration with Trinity's founding legal technologists and AI research scientists.",
      icon: Clock
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-trinity-blue mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue" />
          04 // Executive Commencement
        </div>

        {/* Big Editorial Display Headline */}
        <div className="max-w-5xl mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-950 leading-[1.08] mb-6">
            Deploy Purpose-Built Intelligence on Your Next High-Stakes Matter.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            We partner directly with Am Law 100 litigation practices, catastrophic commercial insurers, and forensic engineering leaders. Evaluate deterministic pin-cite lineage on a sanitized sample of your active trial dockets, coverage schedules, or defect records.
          </p>
        </div>

        {/* 4 Protocol Guarantees (Open Editorial Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-200 mb-10">
          {protocols.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.step} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    // {p.step}
                  </span>
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-sm font-bold font-display text-slate-950">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clean Horizontal Action Bar */}
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 sm:p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          
          {/* Left Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onRequestDemo && onRequestDemo("Executive Briefing")}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer group"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="mailto:briefings@trinityaiboston.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-xs font-mono text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>briefings@trinityaiboston.com</span>
            </a>
          </div>

          {/* Right Protocol Status / SLA */}
          <div className="flex items-center justify-between md:justify-end gap-6 text-xs font-mono text-slate-500 border-t md:border-t-0 pt-4 md:pt-0 border-slate-200">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Confidential NDA Protocol</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="text-slate-600">
              SLA: &lt; 4 hr Response
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
