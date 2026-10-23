import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/homepageData';
import trinityLogo from '../assets/trinity-logo.png';

export default function Header({ onRequestDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-3.5 bg-white/95 backdrop-blur-md border-b border-trinity-border shadow-md shadow-slate-900/5 text-trinity-ink' 
          : 'py-5 md:py-5.5 bg-[#050B16]/85 backdrop-blur-md border-b border-white/10 text-white shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trinity-blue rounded-lg p-1 group"
            aria-label="Trinity AI Boston - Return to top"
          >
            <img 
              src={trinityLogo} 
              alt="Trinity AI Boston Logo" 
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`text-[16px] font-bold tracking-tight font-display transition-colors duration-500 ease-in-out ${isScrolled ? 'text-trinity-ink' : 'text-white'}`}>
                TRINITY AI <span className="text-trinity-gold">BOSTON</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-semibold transition-colors duration-500 ease-in-out ${isScrolled ? 'text-trinity-muted' : 'text-slate-400'}`}>
                Enterprise Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 text-[14px] font-medium rounded-md transition-all duration-300 ease-in-out ${
                  isScrolled 
                    ? 'text-trinity-slate hover:text-trinity-blue hover:bg-slate-100/70' 
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onRequestDemo("General Inquiry")}
              className={`text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg transition-all duration-500 ease-in-out shadow-sm ${
                isScrolled
                  ? 'bg-trinity-blue text-white hover:bg-trinity-deepBlue shadow-blue-900/10'
                  : 'bg-trinity-blue text-white hover:bg-trinity-electric shadow-blue-950/40'
              }`}
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onRequestDemo("General Inquiry")}
              className="text-xs font-semibold px-3 py-1.5 rounded-md bg-trinity-blue text-white transition-colors duration-300"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg transition-colors duration-500 ease-in-out ${
                isScrolled ? 'text-trinity-ink hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-trinity-ink border-b border-trinity-border px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-trinity-ink hover:text-trinity-blue py-1.5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-trinity-border">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo("General Inquiry");
                }}
                className="btn-primary w-full text-center"
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
