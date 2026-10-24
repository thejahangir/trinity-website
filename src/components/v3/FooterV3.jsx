import React from 'react';
import { MapPin } from 'lucide-react';
import trinityLogo from '../../assets/trinity-logo.png';

export default function FooterV3({ onRequestDemo }) {
  return (
    <footer className="bg-[#EFF1F6] text-[#43474E] border-t border-[#E0E2EC] font-material pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - Matches Version 1 Layout & Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E0E2EC]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img 
                src={trinityLogo} 
                alt="Trinity AI Boston Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-base font-black text-[#1A1C1E] tracking-tight">
                  TRINITY AI <span className="text-[#A36B00]">BOSTON</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-[#73777F] tracking-wider font-mono">
                  Purpose-Built Intelligence
                </span>
              </div>
            </a>

            <p className="text-xs text-[#43474E] leading-relaxed max-w-sm font-normal">
              Purpose-built intelligence platforms for high-stakes industries—combining AI, domain expertise, explainability, and human oversight to transform complex evidence into defensible decisions.
            </p>

            {/* Global Centers */}
            <div className="flex flex-col gap-1.5 pt-2 text-[#1A1C1E] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0B57D0] shrink-0" />
                <span>Boston, Massachusetts, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A36B00] shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <div className="font-bold text-[#1A1C1E] text-xs uppercase tracking-wider font-mono">
              Flagship Products
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#platforms" className="hover:text-[#0B57D0] transition-colors font-medium text-[#1A1C1E]">
                  Cosmos One™
                </a>
                <span className="block text-[11px] text-[#73777F]">Litigation & Claims</span>
              </li>
              <li>
                <a href="#platforms" className="hover:text-[#0B57D0] transition-colors font-medium text-[#1A1C1E]">
                  Cosmos Nexus™
                </a>
                <span className="block text-[11px] text-[#73777F]">Construction Defect</span>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onRequestDemo && onRequestDemo("Both Platforms")}
                  className="text-[#0B57D0] hover:text-[#0842A0] hover:underline text-left mt-1 cursor-pointer font-bold inline-flex items-center gap-1"
                >
                  <span>Schedule Demo Briefing</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-3">
            <div className="font-bold text-[#1A1C1E] text-xs uppercase tracking-wider font-mono">
              Industries
            </div>
            <ul className="space-y-2">
              <li><a href="#sectors" className="hover:text-[#0B57D0] transition-colors">Legal & Litigation Defense</a></li>
              <li><a href="#sectors" className="hover:text-[#0B57D0] transition-colors">Insurance & High-Risk Claims</a></li>
              <li><a href="#sectors" className="hover:text-[#0B57D0] transition-colors">Construction & Infrastructure</a></li>
              <li><a href="#sectors" className="hover:text-[#0B57D0] transition-colors">Enterprise Risk & Compliance</a></li>
            </ul>
          </div>

          {/* Governance & Architecture Column */}
          <div className="space-y-3">
            <div className="font-bold text-[#1A1C1E] text-xs uppercase tracking-wider font-mono">
              Architecture & Trust
            </div>
            <ul className="space-y-2">
              <li><a href="#vault" className="hover:text-[#0B57D0] transition-colors">System Architecture</a></li>
              <li><a href="#pipeline" className="hover:text-[#0B57D0] transition-colors">Deterministic Pipeline</a></li>
              <li><a href="#vault" className="hover:text-[#0B57D0] transition-colors">Responsible AI Framework</a></li>
              <li><a href="#capabilities" className="hover:text-[#0B57D0] transition-colors">Human-in-the-Loop Standard</a></li>
              <li><a href="#vault" className="hover:text-[#0B57D0] transition-colors">Zero Retention Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-[11px] text-[#73777F] font-medium">
              © 2026 Trinity AI Boston, Inc. All rights reserved.
            </p>
            <p className="text-[10px] text-[#73777F]/80 max-w-xl">
              Trinity AI systems are decision-support platforms designed to augment human domain practitioners. Decisions remain subject to human oversight, legal counsel review, and executive signoff.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#73777F] font-mono">Boston • Bangalore</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
