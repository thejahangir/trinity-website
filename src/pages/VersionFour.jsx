import React from 'react';
import HeaderV4 from '../components/v4/HeaderV4';
import HeroPrismV4 from '../components/v4/HeroPrismV4';
import GlassEnginesV4 from '../components/v4/GlassEnginesV4';
import GlassPipelineV4 from '../components/v4/GlassPipelineV4';
import GlassDefensibilityV4 from '../components/v4/GlassDefensibilityV4';
import GlassTelemetryV4 from '../components/v4/GlassTelemetryV4';
import GlassPortalCTAV4 from '../components/v4/GlassPortalCTAV4';
import FooterV4 from '../components/v4/FooterV4';
import { ThemeProviderV4, useThemeV4 } from '../context/ThemeContextV4';

export default function VersionFour({ onRequestDemo }) {
  return (
    <ThemeProviderV4>
      <VersionFourContent onRequestDemo={onRequestDemo} />
    </ThemeProviderV4>
  );
}

function VersionFourContent({ onRequestDemo }) {
  const { isDark } = useThemeV4();

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col font-sans selection:bg-cyan-500 selection:text-black ${
      isDark ? 'glass-canvas text-white' : 'glass-canvas-light text-slate-900'
    }`}>
      
      {/* 1. SCROLL-COMPRESSED GLASS PILL NAVBAR WITH DARK/LIGHT THEME TOGGLE */}
      <HeaderV4 onRequestDemo={onRequestDemo} />

      {/* 2. FLUID FULL-WIDTH SECTIONS WITH CENTERED BOXED CONTENT */}
      <main className="flex-grow w-full">
        
        {/* Holographic Evidence Prism Hero with Live Case Console */}
        <HeroPrismV4 onRequestDemo={onRequestDemo} />

        {/* Sculpted Glass Monoliths: Cosmos One™ & Cosmos Nexus™ */}
        <GlassEnginesV4 onRequestDemo={onRequestDemo} />

        {/* 4-Chamber Deterministic Synapse Stream */}
        <GlassPipelineV4 onRequestDemo={onRequestDemo} />

        {/* Crystalline Defensibility & Trust Architecture Slabs */}
        <GlassDefensibilityV4 onRequestDemo={onRequestDemo} />

        {/* Enterprise Telemetry Meters & Industry Pods */}
        <GlassTelemetryV4 onRequestDemo={onRequestDemo} />

        {/* Executive Quantum Commencement Portal */}
        <GlassPortalCTAV4 onRequestDemo={onRequestDemo} />

      </main>

      {/* 3. CREATIVE GLASSMORPHIC FOOTER (V1 CONTENT IN GLASS DESIGN) */}
      <FooterV4 onRequestDemo={onRequestDemo} />

    </div>
  );
}
