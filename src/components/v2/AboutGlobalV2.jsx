import React from 'react';
import { 
  Building2, 
  MapPin, 
  Globe2, 
  CheckCircle2, 
  Quote
} from 'lucide-react';

export default function AboutGlobalV2({ onRequestDemo }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-trinity-blue">
              <span>[ 09 // MISSION & GLOBAL CENTERS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-950 tracking-tight">
              Architecting Verifiable Institutional Truth.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Bridging legal philosophy and advanced computational science across two premier innovation capitals.
          </p>
        </div>

        {/* Chief Scientist Manifesto & Telescope Quote Centerpiece */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white space-y-8 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="space-y-4 max-w-4xl relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-trinity-lightBlue uppercase tracking-wider font-semibold">
              <Quote className="w-4 h-4 text-trinity-gold" />
              <span>THE FOUNDATIONAL DOCTRINE</span>
            </div>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal italic text-slate-100 leading-snug">
              “Give me a long enough telescope and I’ll see where the truth lies.”
            </blockquote>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
              Most artificial intelligence was built for conversational assistance, creative writing, or generative summary. In high-stakes law, reinsurance, and critical infrastructure, approximation is unacceptable. Trinity AI was founded with a singular conviction: every enterprise assertion must be mathematically grounded, defensible in court, and anchored to immutable evidence.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div>FOUNDED IN BOSTON, MASSACHUSETTS</div>
            <div className="text-slate-200 font-semibold">DUAL R&D ENGINES: BOSTON (HQ) & BANGALORE (LABS)</div>
          </div>
        </div>

        {/* Dual-Metropolis R&D Hub Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Hub 1: Boston Global Headquarters */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-slate-900">
                    <Building2 className="w-5 h-5 text-trinity-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-950">
                      Boston Headquarters
                    </h3>
                    <div className="text-[11px] font-mono text-slate-500">
                      STRATEGIC & COMMERCIAL CENTER
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  GLOBAL HQ
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                <span>Financial District, Boston MA // 42.3601° N, 71.0589° W</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Home to executive leadership, commercial operations, and the General Counsel Advisory Working Group. Our Boston center works in direct partnership with leading trial attorneys, judges, and claims executives to codify judicial rules, civil procedure constraints, and trial defense strategies.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Mandates
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>General Counsel Advisory Council & Rule Codification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Commercial Engagements & Am Law 100 Partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Regulatory Compliance, Ethics & Sovereign VPC Governance</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>LEADERSHIP: MIT CSAIL, HARVARD LAW</span>
              <button 
                onClick={() => onRequestDemo("Boston Executive Advisory")}
                className="text-trinity-blue hover:underline font-semibold"
              >
                Inquire →
              </button>
            </div>
          </div>

          {/* Hub 2: Bangalore Advanced Engineering Labs */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-slate-900">
                    <Globe2 className="w-5 h-5 text-trinity-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-950">
                      Bangalore R&D Labs
                    </h3>
                    <div className="text-[11px] font-mono text-slate-500">
                      ADVANCED ENGINEERING & SYSTEMS
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  RESEARCH CENTER
                </span>
              </div>

              <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-trinity-blue shrink-0" />
                <span>Outer Ring Road Tech Hub, Bangalore // 12.9716° N, 77.5946° E</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Our world-class research engine housing our deterministic algorithms, distributed systems architects, and knowledge graph engineers. Here, researchers from India’s top institutions invent novel approaches to document layout understanding, AST synthesis, and multi-tier evidentiary parsing.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Core Mandates
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Deterministic Reasoning Graphs & Formal Verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Multimodal Layout OCR & Subcontract Parsing Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>High-Throughput Cryptographic Chain-of-Custody Engines</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-100 text-xs font-mono text-slate-500">
              ENGINEERING: DEEPMIND, IISC, STANFORD AI ALUMNI
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
