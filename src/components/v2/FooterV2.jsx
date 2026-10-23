import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Scale, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  Lock, 
  Clock, 
  Send, 
  Check, 
  Building2, 
  Sparkles 
} from 'lucide-react';

export default function FooterV2({ onRequestDemo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#050913] text-slate-400 border-t border-slate-800/80 font-sans relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/4 w-96 h-96 bg-trinity-blue/5 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-trinity-gold/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 01 // TOP OPERATIONAL TELEMETRY & SYSTEM HEALTH BAR */}
        <div className="py-6 border-b border-slate-800/70 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Live Status Beacon */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                Inference Cluster: Operational
              </span>
            </div>

            <div className="hidden sm:block text-slate-700">|</div>

            {/* Zero Retention SLA */}
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
              <Lock className="w-3.5 h-3.5 text-trinity-lightBlue" />
              <span>Zero-Retention Cryptographic Guarantee</span>
            </div>

            <div className="hidden md:block text-slate-700">|</div>

            {/* Compliance Badge */}
            <div className="hidden md:flex items-center gap-1.5 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC 2 Type II // HIPAA Certified Enclave</span>
            </div>
          </div>

          {/* Dual Metropolis Clocks */}
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-trinity-blue"></span>
              <strong className="text-slate-200">BOS:</strong> Eastern (HQ)
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-trinity-gold"></span>
              <strong className="text-slate-200">BLR:</strong> IST (R&D Lab)
            </span>
          </div>
        </div>

        {/* 02 // MAIN ARCHITECTURAL GRID */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-slate-800/70">
          
          {/* Brand & Strategic Mandate (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo & Headline */}
            <a href="#" className="flex items-center gap-3 group inline-flex">
              <img 
                src="/trinity-logo.png" 
                alt="Trinity AI Boston Official Mark" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold font-display text-white tracking-tight flex items-center gap-1.5">
                  TRINITY AI <span className="text-trinity-gold">BOSTON</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-trinity-lightBlue font-semibold">
                  DECISION INTELLIGENCE PLATFORMS
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Purpose-built decision intelligence for high-stakes enterprise disputes, catastrophic claims, and complex infrastructure forensics. Transforming unstructured evidence into verifiable, audit-proof decisions.
            </p>

            {/* Dual Headquarters Cards */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <Building2 className="w-4 h-4 text-trinity-blue shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-200 font-mono text-[11px] flex items-center justify-between">
                    <span>BOSTON, MA // GLOBAL HQ</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-950/80 text-trinity-lightBlue border border-blue-800/40">60 STATE ST</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Executive Direction, Legal Practice & Sovereign Governance
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <Cpu className="w-4 h-4 text-trinity-gold shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-200 font-mono text-[11px] flex items-center justify-between">
                    <span>BANGALORE // R&D CENTER</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-950/80 text-trinity-gold border border-amber-800/40">TECH CORRIDOR</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Deep Learning, Evidentiary Reasoning Graphs & Verification
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Intelligence Dispatch Subscribe */}
            <div className="pt-2">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                Executive Intelligence Briefings
              </span>
              {subscribed ? (
                <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Briefing dispatch confirmed. Welcome to Trinity Research.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="counsel@institution.com"
                    required
                    className="flex-1 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-trinity-blue font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-trinity-blue hover:bg-[#0854B2] text-white text-xs font-semibold font-mono uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <span>JOIN</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
              <span className="block text-[10px] text-slate-500 font-mono mt-1.5">
                Monthly empirical briefings on enterprise AI defensibility. Zero spam.
              </span>
            </div>
          </div>

          {/* Directory Column 1: Flagship Platforms (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-white font-bold">
              <span className="text-trinity-lightBlue">[01]</span>
              <span>Platforms</span>
            </div>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#products" className="font-semibold text-slate-200 hover:text-white transition-colors block">
                  Cosmos One™
                </a>
                <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                  Litigation & High-Stakes Claims Intelligence
                </span>
              </li>
              <li>
                <a href="#products" className="font-semibold text-slate-200 hover:text-white transition-colors block">
                  Cosmos Nexus™
                </a>
                <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                  Construction Defect & Forensic BIM Engine
                </span>
              </li>
              <li>
                <a href="#platform" className="font-semibold text-slate-200 hover:text-white transition-colors block">
                  Sovereign VPC Engine
                </a>
                <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                  Single-Tenant Air-Gapped Inference
                </span>
              </li>
              <li>
                <a href="#capabilities" className="font-semibold text-slate-200 hover:text-white transition-colors block">
                  Reasoning Lineage Core
                </a>
                <span className="text-[11px] text-slate-400 block leading-tight mt-0.5">
                  Auditable Citation Graph Kernel
                </span>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onRequestDemo("Platform Briefing")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-trinity-lightBlue hover:text-white hover:underline transition-colors"
                >
                  <span>Request Live Sandbox →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column 2: Industry Verticals (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-white font-bold">
              <span className="text-trinity-lightBlue">[02]</span>
              <span>Industries</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#industries" className="text-slate-300 hover:text-white transition-colors block">
                  Complex Litigation Defense
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-300 hover:text-white transition-colors block">
                  Commercial Claims & Reinsurance
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-300 hover:text-white transition-colors block">
                  Heavy Civil & Infrastructure
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-300 hover:text-white transition-colors block">
                  Construction Defect Dockets
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-300 hover:text-white transition-colors block">
                  Enterprise Regulatory Compliance
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-300 hover:text-white transition-colors block">
                  Institutional Risk Officers
                </a>
              </li>
            </ul>
          </div>

          {/* Directory Column 3: Trust & Governance Room (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-white font-bold">
              <span className="text-emerald-400">[03]</span>
              <span>Trust & Governance</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#trust" className="text-slate-300 hover:text-white transition-colors block">
                  Deterministic Pipeline
                </a>
              </li>
              <li>
                <a href="#trust" className="text-slate-300 hover:text-white transition-colors block">
                  Zero Data Retraining SLA
                </a>
              </li>
              <li>
                <a href="#trust" className="text-slate-300 hover:text-white transition-colors block">
                  Human Authority Protocol
                </a>
              </li>
              <li>
                <a href="#trust" className="text-slate-300 hover:text-white transition-colors block">
                  SOC 2 Type II Room
                </a>
              </li>
              <li>
                <a href="#trust" className="text-slate-300 hover:text-white transition-colors block">
                  BYOK KMS Encryption
                </a>
              </li>
              <li>
                <a href="#trust" className="text-slate-300 hover:text-white transition-colors block">
                  Courtroom Defensibility
                </a>
              </li>
            </ul>
          </div>

          {/* Directory Column 4: Institutional Resources (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-1.5 pb-1 border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-white font-bold">
              <span className="text-trinity-gold">[04]</span>
              <span>Resources</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#research" className="text-slate-300 hover:text-white transition-colors block">
                  Research Archive
                </a>
              </li>
              <li>
                <a href="#research" className="text-slate-300 hover:text-white transition-colors block">
                  Defensibility Whitepaper
                </a>
              </li>
              <li>
                <a href="#positioning" className="text-slate-300 hover:text-white transition-colors block">
                  Procurement Matrix
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors block">
                  Boston Telescope Manifesto
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors block">
                  Executive Briefing Deck
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors block">
                  Engineering Leadership
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* 03 // COMPLIANCE & LEGAL OVERSIGHT STANDARD NOTICE BOX */}
        <div className="py-6 border-b border-slate-800/70">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-trinity-gold shrink-0 mt-0.5">
                <Scale className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <span>HUMAN AUTHORITY STANDARD // EVIDENTIARY DISCLAIMER</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-normal">MANDATORY NOTICE</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl font-normal">
                  Trinity AI platforms are enterprise decision-support instruments engineered exclusively to augment qualified domain specialists, legal counsel, and claims executives. Trinity AI does not render unverified legal advice or bind autonomous decisions. Every evidentiary synthesis, citation lineage, and exposure assessment remains subject to human inspection and authorized professional sign-off.
                </p>
              </div>
            </div>

            <button
              onClick={() => onRequestDemo("Compliance Briefing")}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-[11px] font-mono uppercase tracking-wider border border-slate-700 shrink-0 transition-colors"
            >
              Audit Package
            </button>
          </div>
        </div>

        {/* 04 // BOTTOM HORIZON SUB-FOOTER */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Trinity AI Boston, Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-500 text-[11px]">Engine v2.4.8 (Enterprise GA)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <a href="#trust" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#trust" className="hover:text-white transition-colors">Zero-Retention SLA</a>
            <a href="#trust" className="hover:text-white transition-colors">Terms of Engagement</a>
            <a href="#trust" className="hover:text-white transition-colors">Security Whitepaper</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
