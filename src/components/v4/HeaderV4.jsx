import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CalendarCheck2,
  Sun,
  Moon
} from 'lucide-react';
import { useThemeV4 } from '../../context/ThemeContextV4';
import trinityLogo from '../../assets/trinity-logo.png';

export default function HeaderV4({ onRequestDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Overview');
  const { toggleTheme, isDark } = useThemeV4();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        { id: 'evidence-prism', label: 'Prism' },
        { id: 'engines', label: 'Engines' },
        { id: 'pipeline', label: 'Pipeline' },
        { id: 'defensibility', label: 'Defensibility' },
        { id: 'telemetry', label: 'Impact' }
      ];

      const scrollPos = window.scrollY + 180;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Prism", href: "#evidence-prism" },
    { name: "Engines", href: "#engines" },
    { name: "Pipeline", href: "#pipeline" },
    { name: "Defensibility", href: "#defensibility" },
    { name: "Impact", href: "#telemetry" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-out py-3 sm:py-4">
      {/* 
        COMPRESSION CONTAINER:
        When not scrolled: full-width boxed container (max-w-7xl)
        When scrolled: smoothly compresses into a floating centered glass pill (max-w-3xl)
      */}
      <div 
        className={`pointer-events-auto mx-auto transition-all duration-500 ease-out ${
          isScrolled 
            ? 'max-w-3xl px-4 sm:px-6' 
            : 'max-w-7xl px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? isDark 
                ? 'py-2 px-4 sm:px-5 rounded-full bg-[#0B1220]/75 backdrop-blur-2xl border border-white/20 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7)] ring-1 ring-cyan-500/20'
                : 'py-2 px-4 sm:px-5 rounded-full bg-white/85 backdrop-blur-2xl border border-slate-200/90 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.15)] ring-1 ring-blue-500/10'
              : isDark
                ? 'py-2.5 px-5 sm:px-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                : 'py-2.5 px-5 sm:px-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_32px_rgba(15,23,42,0.06)]'
          }`}
        >
          {/* Brand Lockup */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus-visible:outline-none shrink-0"
            aria-label="Trinity AI Boston"
          >
            <img 
              src={trinityLogo} 
              alt="Trinity AI Logo" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            />
            
            {/* Brand Text & Tagline (Hidden on scroll so only logo shows in compressed pill) */}
            {!isScrolled && (
              <div className="flex flex-col transition-all duration-300 animate-in fade-in">
                <div className="flex items-center gap-1.5">
                  <span className={`text-sm sm:text-base font-black tracking-tight font-display ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    TRINITY AI <span className="glass-text-gold font-extrabold">BOSTON</span>
                  </span>
                  <span className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full ${
                    isDark 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    Prism
                  </span>
                </div>
                <span className={`text-[10px] tracking-wider uppercase font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Deterministic Glass Engine
                </span>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links (Pill Style) */}
          <nav className={`hidden lg:flex items-center gap-1 p-1 rounded-full border backdrop-blur-lg ${
            isDark 
              ? 'bg-white/[0.04] border-white/10' 
              : 'bg-slate-100/70 border-slate-200/80'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? isDark 
                        ? 'text-white bg-gradient-to-r from-blue-600/60 to-cyan-500/40 border border-cyan-400/40 shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                        : 'text-blue-950 bg-white border border-blue-300 shadow-sm'
                      : isDark 
                        ? 'text-slate-300 hover:text-white hover:bg-white/[0.06]' 
                        : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Dark/Light Mode Switcher & Glass CTA Pill */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Crystalline Mode" : "Switch to Dark Obsidian Mode"}
              aria-label="Toggle Dark and Light Mode"
              className={`inline-flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 ${
                isScrolled
                  ? `w-9 h-9 rounded-full border ${
                      isDark 
                        ? 'bg-white/10 hover:bg-white/20 text-amber-300 border-white/20' 
                        : 'bg-slate-100 hover:bg-white text-blue-700 border-slate-200 shadow-xs'
                    }`
                  : `gap-1.5 px-3 py-2 rounded-full border text-xs font-mono font-bold ${
                      isDark 
                        ? 'glass-pill hover:bg-white/15 text-amber-300 border-white/20' 
                        : 'glass-pill-light hover:bg-white text-slate-800 border-slate-200'
                    }`
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12" />
              )}
              {!isScrolled && (
                <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
              )}
            </button>

            {/* Schedule Briefing CTA */}
            <button
              type="button"
              onClick={() => onRequestDemo("Glassmorphic Briefing")}
              title="Schedule Executive Briefing"
              aria-label="Schedule Executive Briefing"
              className={`inline-flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 ${
                isScrolled
                  ? 'w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(14,165,233,0.5)] border border-cyan-300/40 text-white shrink-0'
                  : 'gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 border border-white/25 shadow-lg backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider shrink-0'
              }`}
            >
              <CalendarCheck2 className="w-4 h-4 text-white shrink-0" />
              {!isScrolled && (
                <span className="whitespace-nowrap">Schedule Briefing</span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full border transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={`pointer-events-auto lg:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-3xl backdrop-blur-3xl border shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 ${
          isDark 
            ? 'bg-[#0B1220]/95 border-white/20 text-white' 
            : 'bg-white/95 border-slate-200 text-slate-900'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              Navigation Index
            </span>
            <span className="text-[10px] font-mono text-slate-400">Glass v4.0</span>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isDark ? 'bg-white/[0.04] hover:bg-white/[0.1] text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                <span>{item.name}</span>
                <ArrowRight className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className={`flex-1 py-3 rounded-xl border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-white/10 border-white/20 text-amber-300' 
                  : 'bg-slate-100 border-slate-200 text-blue-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-blue-600" />}
              <span>{isDark ? 'Switch to Light' : 'Switch to Dark'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDemo("Glass Mobile Briefing");
              }}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg"
            >
              Briefing →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
