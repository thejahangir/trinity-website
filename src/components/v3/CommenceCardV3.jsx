import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  ShieldCheck, 
  FileCheck2, 
  Lock, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function CommenceCardV3({ onRequestDemo }) {
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
    <section 
      id="commence" 
      className="w-full py-20 lg:py-28 bg-gradient-to-br from-[#0B57D0] via-[#0842A0] to-[#041E49] text-white relative overflow-hidden font-material border-b border-[#041E49]"
    >
      {/* Subtle Ambient Orbs Spanning Full Section */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#A36B00]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Boxed Content Inside Fluid Section (Matches max-w-7xl of other sections) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full space-y-8">
          
          {/* Section Header: Headline + Paragraph Split (Matches other sections) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-2">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-xs text-xs font-semibold tracking-wider uppercase border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#D3E3FD]" />
                <span>Executive Commencement</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                Deploy Purpose-Built Intelligence on Your Next High-Stakes Matter.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-xl pb-1">
              We partner directly with Am Law 100 litigation practices, catastrophic commercial insurers, and forensic engineering leaders. Evaluate deterministic pin-cite lineage on a sanitized sample of your active trial dockets or defect records.
            </p>
          </div>

          {/* 4 Protocol Guarantees (Spanning full max-w-7xl grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-8 border-y border-white/15">
            {protocols.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="p-5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 hover:bg-white/15 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#D3E3FD]">
                        // {p.step}
                      </span>
                      <Icon className="w-4 h-4 text-white/70" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/75 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onRequestDemo("Commence Card Executive Briefing")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#041E49] hover:bg-[#D3E3FD] text-xs font-bold tracking-wider uppercase transition-all duration-200 m3-elevation-2 cursor-pointer active:scale-95 shadow-md"
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="w-4 h-4 text-[#0B57D0]" />
              </button>

              <a
                href="mailto:briefings@trinityaiboston.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white border border-white/25 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D3E3FD]" />
                <span>briefings@trinityaiboston.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-white/90">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Confidential NDA Protocol • SLA: &lt; 4 hr Turnaround</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
