import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import trinityLogo from '../../assets/trinity-logo.png';

export default function HeaderV3({ onRequestDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionMap = [
        { id: 'overview', name: 'Overview' },
        { id: 'platforms', name: 'Platforms' },
        { id: 'capabilities', name: 'Capabilities' },
        { id: 'pipeline', name: 'Pipeline' },
        { id: 'vault', name: 'Defensibility' },
        { id: 'sectors', name: 'Impact' }
      ];

      const scrollPos = window.scrollY + 140;
      for (const s of sectionMap) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(s.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const m3NavItems = [
    { name: "Overview", href: "#overview" },
    { name: "Platforms", href: "#platforms" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Pipeline", href: "#pipeline" },
    { name: "Defensibility", href: "#vault" },
    { name: "Impact", href: "#sectors" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-material ${
        isScrolled 
          ? 'bg-[#FDFBFF]/95 backdrop-blur-md py-3 m3-elevation-2 border-b border-[#E0E2EC]' 
          : 'bg-[#FDFBFF] py-4 border-b border-[#EFF1F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* M3 Brand Lockup */}
          <a 
            href="#overview" 
            className="flex items-center gap-3.5 group rounded-2xl p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B57D0] transition-transform duration-200"
            aria-label="Trinity AI Boston - Material Design Edition"
          >
            <div className="relative">
              <img 
                src={trinityLogo} 
                alt="Trinity AI Boston Logo" 
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B57D0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0B57D0]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold tracking-tight text-[#1A1C1E] font-material leading-tight">
                  TRINITY AI <span className="text-[#A36B00] font-black">BOSTON</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[#D3E3FD] text-[#041E49]">
                  <Sparkles className="w-2.5 h-2.5 text-[#0B57D0]" /> M3 System
                </span>
              </div>
              <span className="text-[11px] tracking-wide text-[#73777F] font-medium">
                Deterministic Decision Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation - M3 Pill Segment Tabs */}
          <nav className="hidden lg:flex items-center bg-[#EFF1F6] p-1 rounded-full border border-[#E0E2EC]/70 shadow-xs" aria-label="Material Navigation">
            {m3NavItems.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 select-none ${
                    isActive
                      ? 'bg-white text-[#0B57D0] font-semibold shadow-xs'
                      : 'text-[#43474E] hover:text-[#1A1C1E] hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: M3 Filled Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onRequestDemo("Material 3 Executive Briefing")}
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wide px-5 py-2.5 rounded-full bg-[#0B57D0] text-white hover:bg-[#0842A0] active:scale-95 transition-all duration-200 m3-elevation-1 hover:m3-elevation-2 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D3E3FD]" />
              <span>Schedule Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onRequestDemo("Material 3 Executive Briefing")}
              className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#0B57D0] text-white shadow-xs"
            >
              Briefing
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-full text-[#43474E] hover:text-[#1A1C1E] hover:bg-[#EFF1F6] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* M3 Mobile Sheet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBFF] border-b border-[#E0E2EC] px-6 py-6 m3-elevation-3">
          <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-xl bg-[#D3E3FD]/60 text-[#041E49] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#0B57D0]" />
            <span>Material 3 Navigation Matrix</span>
          </div>

          <nav className="flex flex-col space-y-1.5">
            {m3NavItems.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-between transition-colors ${
                  activeTab === link.name 
                    ? 'bg-[#D3E3FD] text-[#041E49] font-semibold' 
                    : 'text-[#43474E] hover:bg-[#EFF1F6]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#73777F]" />
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[#E0E2EC]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo("Material 3 Executive Briefing");
                }}
                className="w-full text-center py-3 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#0B57D0] text-white shadow-sm hover:bg-[#0842A0]"
              >
                Schedule Executive Briefing
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
