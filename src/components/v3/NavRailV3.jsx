import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  Building2, 
  Calendar,
  Cpu
} from 'lucide-react';
import trinityLogo from '../../assets/trinity-logo.png';

export default function NavRailV3({ activeSection, onNavigate, onRequestDemo }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Sparkles, href: '#overview' },
    { id: 'platforms', label: 'Platforms', icon: Layers, href: '#platforms' },
    { id: 'workspace', label: 'Workspace', icon: Cpu, href: '#workspace' },
    { id: 'pipeline', label: 'Pipeline', icon: Workflow, href: '#pipeline' },
    { id: 'vault', label: 'Trust Vault', icon: ShieldCheck, href: '#vault' },
    { id: 'sectors', label: 'Impact', icon: Building2, href: '#sectors' }
  ];

  return (
    <nav 
      aria-label="Material 3 Navigation Rail"
      className="hidden md:flex flex-col items-center justify-between fixed top-0 left-0 bottom-0 w-20 lg:w-24 bg-[#F0F4F9] border-r border-[#E0E4EC] py-6 z-30 select-none font-material"
    >
      {/* Top: Brand Icon Lockup */}
      <div className="flex flex-col items-center gap-3">
        <a 
          href="#overview" 
          onClick={() => onNavigate('overview')}
          className="group relative flex flex-col items-center p-2 rounded-2xl hover:bg-white/80 transition-colors"
          title="Trinity AI Boston"
        >
          <img 
            src={trinityLogo} 
            alt="Trinity Logo" 
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-[9px] font-black tracking-wider uppercase text-[#1A1C1E] mt-1 font-mono">
            TRINITY
          </span>
        </a>

        {/* Small Material FAB Trigger */}
        <button
          type="button"
          onClick={() => onRequestDemo("Material 3 Navigation Rail Briefing")}
          className="w-12 h-12 rounded-2xl bg-[#0B57D0] hover:bg-[#0842A0] text-white flex items-center justify-center m3-elevation-2 hover:m3-elevation-3 transition-all cursor-pointer group"
          title="Schedule Executive Briefing"
        >
          <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* Middle: M3 Navigation Rail Items with Active Indicator Pills */}
      <div className="flex flex-col items-center gap-2 w-full px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center group w-full py-1.5 focus-visible:outline-none"
              title={item.label}
            >
              {/* M3 Active Indicator Pill */}
              <div 
                className={`w-14 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#D3E3FD] text-[#041E49] shadow-xs' 
                    : 'text-[#43474E] hover:bg-white/70 hover:text-[#1A1C1E]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4px]' : 'stroke-[1.8px]'}`} />
              </div>

              {/* M3 Label */}
              <span 
                className={`text-[10px] tracking-tight mt-1 transition-colors ${
                  isActive ? 'font-bold text-[#041E49]' : 'font-medium text-[#73777F] group-hover:text-[#1A1C1E]'
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom: Deterministic Live Protocol Badge */}
      <div className="flex flex-col items-center text-center px-1">
        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse mb-1.5" />
        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#73777F]">
          PIN-CITE
        </span>
        <span className="text-[8px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200 mt-0.5">
          100%
        </span>
      </div>
    </nav>
  );
}
