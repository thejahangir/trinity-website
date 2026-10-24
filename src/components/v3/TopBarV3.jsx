import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import trinityLogo from '../../assets/trinity-logo.png';

export default function TopBarV3({ onRequestDemo, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const quickFilterChips = [
    { label: "AmLaw 100 Litigation", target: "workspace" },
    { label: "Reinsurance Claims", target: "platforms" },
    { label: "Forensic Defects", target: "workspace" },
    { label: "SOC-2 Sovereign VPC", target: "vault" }
  ];

  const mobileNavItems = [
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'platforms', label: 'Platforms', href: '#platforms' },
    { id: 'workspace', label: 'Workstation', href: '#workspace' },
    { id: 'pipeline', label: 'Decision Pipeline', href: '#pipeline' },
    { id: 'vault', label: 'Defensibility Vault', href: '#vault' },
    { id: 'sectors', label: 'Measured Impact', href: '#sectors' }
  ];

  return (
    <header className="sticky top-0 z-20 bg-[#FDFBFF]/95 backdrop-blur-md border-b border-[#E0E4EC] px-4 sm:px-6 lg:px-8 py-3.5 font-material">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Mobile Left: Brand Lockup & Menu Toggle */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#43474E] hover:bg-[#EFF1F6] transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <a href="#overview" className="flex items-center gap-2">
            <img src={trinityLogo} alt="Trinity" className="w-7 h-7 object-contain" />
            <span className="text-sm font-black text-[#1A1C1E]">
              TRINITY AI <span className="text-[#A36B00]">BOSTON</span>
            </span>
          </a>
        </div>

        {/* Desktop Left: Interactive M3 Search / Command Pill */}
        <div className="hidden md:flex items-center flex-1 max-w-xl">
          <div className="w-full flex items-center bg-[#EFF1F6] hover:bg-[#E8EAF0] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0B57D0] focus-within:shadow-sm px-4 py-2 rounded-full transition-all duration-200 border border-[#E0E2EC]">
            <Search className="w-4 h-4 text-[#73777F] mr-3 shrink-0" />
            <input 
              type="text"
              placeholder="Search primary docket evidence, causal logic, or platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-[#1A1C1E] placeholder-[#73777F] focus:outline-none font-material"
            />
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white border border-[#E0E2EC] text-[#73777F] shrink-0 ml-2">
              ⌘K
            </span>
          </div>
        </div>

        {/* Center / Quick Filter Chips (Desktop) */}
        <div className="hidden xl:flex items-center gap-1.5">
          {quickFilterChips.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigate(chip.target)}
              className="px-3 py-1 rounded-full text-[11px] font-medium bg-white hover:bg-[#D3E3FD]/50 text-[#43474E] hover:text-[#041E49] border border-[#E0E2EC] transition-colors cursor-pointer"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Right Actions: M3 Extended FAB & Status */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>0.00% Hallucination Tolerance</span>
          </div>

          <button
            type="button"
            onClick={() => onRequestDemo("Material 3 Executive Briefing")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B57D0] hover:bg-[#0842A0] text-white text-xs font-semibold tracking-wide uppercase transition-all duration-200 m3-elevation-1 hover:m3-elevation-2 cursor-pointer active:scale-95 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D3E3FD]" />
            <span className="hidden sm:inline">Executive Briefing</span>
            <span className="sm:hidden">Briefing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#E0E2EC] bg-[#FDFBFF] pb-4">
          <nav className="flex flex-col space-y-1">
            {mobileNavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#D3E3FD] text-[#041E49] font-bold'
                    : 'text-[#43474E] hover:bg-[#EFF1F6]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#73777F]" />
              </a>
            ))}
          </nav>

          <div className="pt-3 px-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo("Material 3 Mobile Briefing");
              }}
              className="w-full py-2.5 rounded-full bg-[#0B57D0] text-white text-xs font-semibold tracking-wider uppercase text-center"
            >
              Schedule Executive Briefing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
