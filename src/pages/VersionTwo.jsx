import React from 'react';
import HeaderV2 from '../components/v2/HeaderV2';
import HeroV2 from '../components/v2/HeroV2';
import PlatformsV2 from '../components/v2/PlatformsV2';
import PillarsV2 from '../components/v2/PillarsV2';
import MetricsV2 from '../components/v2/MetricsV2';
import FinalCTAV2 from '../components/v2/FinalCTAV2';
import FooterV2 from '../components/v2/FooterV2';

export default function VersionTwo({ onRequestDemo }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      {/* Architectural Minimalist Navigation Header */}
      <HeaderV2 onRequestDemo={onRequestDemo} />

      <main className="flex-grow">
        {/* SECTION 01 — HERO WITH INTERACTIVE EVIDENCE VERIFICATION BENCH */}
        <HeroV2 onRequestDemo={onRequestDemo} />

        {/* SECTION 02 — TWO PURPOSE-BUILT PLATFORMS (Cosmos One™ & Cosmos Nexus™) */}
        <PlatformsV2 onRequestDemo={onRequestDemo} />

        {/* SECTION 03 — THE THREE PILLARS OF DEFENSIBILITY */}
        <PillarsV2 />

        {/* SECTION 04 — MEASURED ENTERPRISE IMPACT & SECTOR FOCUS */}
        <MetricsV2 onRequestDemo={onRequestDemo} />

        {/* SECTION 05 — EXECUTIVE COMMENCEMENT & BRIEFING */}
        <FinalCTAV2 onRequestDemo={onRequestDemo} />
      </main>

      {/* Streamlined Architectural Minimalist Footer */}
      <FooterV2 onRequestDemo={onRequestDemo} />
    </div>
  );
}
