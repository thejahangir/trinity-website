import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { navLinks } from '../../data/homepageData';

export default function HeaderV2({ onRequestDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/90 shadow-xs' 
          : 'bg-white py-4.5 border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Corporate Lockup */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-blue rounded-md p-1"
            aria-label="Trinity AI Boston - Homepage"
          >
            <img 
              src="/trinity-logo.png" 
              alt="Trinity AI Boston Logo" 
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-tight font-display text-slate-950 leading-tight">
                TRINITY AI <span className="text-trinity-gold font-extrabold">BOSTON</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-mono font-semibold text-slate-500">
                Decision Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Clean, Refined Enterprise Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean Flat CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-500 font-medium hidden xl:inline-block border-l border-slate-200 pl-4">
              Boston (HQ) • Bangalore (R&D)
            </span>
            <button
              onClick={() => onRequestDemo("Enterprise Briefing")}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4.5 py-2.5 rounded-lg bg-slate-950 text-white hover:bg-trinity-blue transition-all duration-200 shadow-xs hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-blue"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onRequestDemo("Enterprise Briefing")}
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-950 text-white hover:bg-trinity-blue"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Modern Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-800 hover:text-trinity-blue py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo("Enterprise Briefing");
                }}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-950 text-white rounded-lg hover:bg-trinity-blue"
              >
                Request a Demo
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
