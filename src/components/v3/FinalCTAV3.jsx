import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  ShieldCheck, 
  FileCheck2, 
  Lock, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function FinalCTAV3({ onRequestDemo }) {
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
    <section id="about" className="py-20 lg:py-28 bg-[#FDFBFF] border-b border-[#E0E2EC] font-material">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3E3FD] text-[#041E49] text-xs font-semibold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
          <span>08 // Executive Commencement</span>
        </div>

        {/* Big Editorial Display Headline */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1C1E] tracking-tight leading-[1.12] mb-6 font-material">
            Deploy Purpose-Built Intelligence on Your Next High-Stakes Matter.
          </h2>
          <p className="text-base sm:text-lg text-[#43474E] font-normal leading-relaxed max-w-3xl">
            We partner directly with Am Law 100 litigation practices, catastrophic commercial insurers, and forensic engineering leaders. Evaluate deterministic pin-cite lineage on a sanitized sample of your active trial dockets, coverage schedules, or defect records.
          </p>
        </div>

        {/* 4 Protocol Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-y border-[#EFF1F6] mb-10">
          {protocols.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.step} 
                className="p-6 rounded-[24px] bg-[#F6F7FA] border border-[#E0E2EC] hover:bg-white hover:border-[#C3C7D0] transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black text-[#0B57D0]">
                    // {p.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#73777F] border border-[#E0E2EC]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#1A1C1E] mb-1 font-material">
                  {p.title}
                </h3>
                <p className="text-xs text-[#73777F] leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Material 3 Horizontal Action Container */}
        <div className="rounded-[32px] bg-[#EFF1F6] border border-[#E0E2EC] p-6 sm:p-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 m3-elevation-1">
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onRequestDemo && onRequestDemo("Material 3 Executive Briefing")}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0B57D0] text-white hover:bg-[#0842A0] text-xs font-semibold tracking-wider uppercase transition-all duration-200 m3-elevation-2 hover:m3-elevation-3 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:briefings@trinityaiboston.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white border border-[#C3C7D0] hover:bg-[#FDFBFF] text-xs font-mono font-medium text-[#1A1C1E] transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#73777F]" />
              <span>briefings@trinityaiboston.com</span>
            </a>
          </div>

          {/* Right Protocol Status / SLA */}
          <div className="flex items-center justify-between md:justify-end gap-6 text-xs font-mono text-[#73777F] border-t md:border-t-0 pt-4 md:pt-0 border-[#E0E2EC]">
            <div className="flex items-center gap-2 text-[#1A1C1E] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Confidential NDA Protocol</span>
            </div>
            <span className="hidden sm:inline text-[#C3C7D0]">•</span>
            <div className="text-[#43474E] font-medium">
              SLA: &lt; 4 hr Response
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
