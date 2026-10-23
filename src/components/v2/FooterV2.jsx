import React from 'react';
import { ExternalLink } from 'lucide-react';
import trinityLogo from '../../assets/trinity-logo.png';

export default function FooterV2({ onRequestDemo }) {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* TIER 1: Brand & Operating Presence */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-200/80">
          
          {/* Brand & Vision */}
          <div className="space-y-3 max-w-xl">
            <a href="#" className="flex items-center gap-3 group inline-flex" aria-label="Trinity AI Boston">
              <img 
                src={trinityLogo} 
                alt="Trinity AI Boston Logo" 
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight font-display text-slate-950 leading-tight">
                  TRINITY AI <span className="text-trinity-gold font-extrabold">BOSTON</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-mono font-semibold text-slate-500">
                  Deterministic Decision Intelligence
                </span>
              </div>
            </a>
            
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Deterministic machine intelligence engineered for high-stakes enterprise disputes, catastrophic claims, and infrastructure forensics. Every conclusion cites primary source evidence with 100% deterministic lineage.
            </p>
          </div>

          {/* System Status & Direct Communications */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="px-4 py-3 rounded-lg bg-white border border-slate-200/90 shadow-xs flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Engine Protocol</div>
                <div className="text-slate-800 font-semibold">100% Pin-Cite Active</div>
              </div>
            </div>

            <div className="px-4 py-3 rounded-lg bg-white border border-slate-200/90 shadow-xs">
              <div className="text-[10px] uppercase font-bold text-slate-400">Direct Inquiries</div>
              <a 
                href="mailto:briefings@trinityaiboston.com" 
                className="text-slate-800 hover:text-trinity-blue font-semibold transition-colors"
              >
                briefings@trinityaiboston.com
              </a>
            </div>
          </div>

        </div>

        {/* TIER 2: 4-Pillar Architectural Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 py-12 border-b border-slate-200/80 text-xs">
          
          {/* Pillar 1: Purpose-Built Platforms */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-trinity-blue rounded-full" />
              Flagship Platforms
            </div>
            <div className="space-y-3.5">
              <div className="group">
                <button
                  type="button"
                  onClick={() => onRequestDemo && onRequestDemo("Cosmos One™ (Litigation & Claims)")}
                  className="font-bold text-slate-900 hover:text-trinity-blue transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                >
                  <span>Cosmos One™</span>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-trinity-blue">Legal AI →</span>
                </button>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Litigation defense, class actions, and arbitration evidence synthesis.
                </p>
              </div>

              <div className="group">
                <button
                  type="button"
                  onClick={() => onRequestDemo && onRequestDemo("Cosmos Nexus™ (Construction Defect)")}
                  className="font-bold text-slate-900 hover:text-trinity-blue transition-colors text-left flex items-center justify-between w-full cursor-pointer"
                >
                  <span>Cosmos Nexus™</span>
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-trinity-blue">Forensics →</span>
                </button>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Construction defect forensics, schedule delay claims & BIM cross-examination.
                </p>
              </div>

              <div className="pt-1">
                <a 
                  href="#products" 
                  className="font-medium text-slate-700 hover:text-slate-950 transition-colors inline-flex items-center gap-1 font-mono text-[11px]"
                >
                  <span>Explore Platform Architectures</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Pillar 2: Defensibility Standards */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-emerald-500 rounded-full" />
              Defensibility Standards
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#differentiation" className="hover:text-slate-950 transition-colors block">
                  <span className="font-medium text-slate-800">100% Pin-Cite Grounding</span>
                  <span className="block text-[11px] text-slate-500">Docket page, line & exhibit tracing</span>
                </a>
              </li>
              <li>
                <a href="#differentiation" className="hover:text-slate-950 transition-colors block">
                  <span className="font-medium text-slate-800">Explainable Causal Logic</span>
                  <span className="block text-[11px] text-slate-500">Inadmissibility-proof logic trees</span>
                </a>
              </li>
              <li>
                <a href="#differentiation" className="hover:text-slate-950 transition-colors block">
                  <span className="font-medium text-slate-800">Air-Gapped Sovereign VPC</span>
                  <span className="block text-[11px] text-slate-500">Isolated single-tenant architecture</span>
                </a>
              </li>
              <li>
                <a href="#differentiation" className="hover:text-slate-950 transition-colors block">
                  <span className="font-medium text-slate-800">Zero Customer Retraining</span>
                  <span className="block text-[11px] text-slate-500">Strict perimeter confidentiality</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Practice Sectors */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-amber-500 rounded-full" />
              Practice Sectors
            </div>
            <ul className="space-y-2.5 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-mono text-[10px] mt-0.5">01</span>
                <div>
                  <span className="font-medium text-slate-800 block">Am Law 100 Litigation Defense</span>
                  <span className="text-[11px] text-slate-500">Complex discovery & cross-examination</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-mono text-[10px] mt-0.5">02</span>
                <div>
                  <span className="font-medium text-slate-800 block">Commercial Claims Carriers</span>
                  <span className="text-[11px] text-slate-500">Multi-million exposure triage</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-mono text-[10px] mt-0.5">03</span>
                <div>
                  <span className="font-medium text-slate-800 block">Infrastructure & Engineering</span>
                  <span className="text-[11px] text-slate-500">Structural liability & delay apportionment</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Operating Centers */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-slate-900 rounded-full" />
              Operating Centers
            </div>
            <div className="space-y-3 font-mono text-[11px]">
              <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                <div className="font-bold text-slate-900 mb-0.5">Boston Headquarters</div>
                <div className="text-slate-500 leading-tight">60 State Street, Suite 700</div>
                <div className="text-slate-500">Boston, MA 02109, USA</div>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200/80">
                <div className="font-bold text-slate-900 mb-0.5">Bangalore Evidence Labs</div>
                <div className="text-slate-500 leading-tight">Outer Ring Road Tech Corridor</div>
                <div className="text-slate-500">Bangalore, KA 560103, India</div>
              </div>
            </div>
          </div>

        </div>

        {/* TIER 3: Compliance & Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span>© 2026 Trinity AI Boston Inc.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>SOC-2 Type II Certified</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-600">Single-Tenant VPC</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-slate-950 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-950 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#security" className="hover:text-slate-950 transition-colors">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
