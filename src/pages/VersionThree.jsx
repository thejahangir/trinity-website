import React from 'react';
import HeaderV3 from '../components/v3/HeaderV3';
import HeroBentoV3 from '../components/v3/HeroBentoV3';
import PlatformWorkspaceV3 from '../components/v3/PlatformWorkspaceV3';
import CapabilitiesV3 from '../components/v3/CapabilitiesV3';
import PipelineFlowV3 from '../components/v3/PipelineFlowV3';
import DefensibilityVaultV3 from '../components/v3/DefensibilityVaultV3';
import MetricsGridV3 from '../components/v3/MetricsGridV3';
import CommenceCardV3 from '../components/v3/CommenceCardV3';
import FooterV3 from '../components/v3/FooterV3';

export default function VersionThree({ onRequestDemo }) {
  return (
    <div className="min-h-screen bg-[#FDFBFF] text-[#1A1C1E] flex flex-col font-material selection:bg-[#D3E3FD] selection:text-[#041E49]">
      
      {/* 1. MATERIAL 3 TOP NAVBAR (Fixed top with M3 pill tabs, brand lockup & briefing CTA) */}
      <HeaderV3 onRequestDemo={onRequestDemo} />

      {/* 2. FLUID FULL-BLEED HERO WITH MERGED BACKGROUND ARTWORK */}
      <HeroBentoV3 onRequestDemo={onRequestDemo} />

      {/* 3. MAIN CONTENT: FLUID FULL-WIDTH SECTIONS WITH BOXED INNER CONTENT */}
      <main className="flex-grow w-full">
        <PlatformWorkspaceV3 onRequestDemo={onRequestDemo} />
        <CapabilitiesV3 />
        <PipelineFlowV3 onRequestDemo={onRequestDemo} />
        <DefensibilityVaultV3 onRequestDemo={onRequestDemo} />
        <MetricsGridV3 onRequestDemo={onRequestDemo} />
        <CommenceCardV3 onRequestDemo={onRequestDemo} />
      </main>

      {/* 4. MATERIAL 3 SURFACE CONTAINER FOOTER */}
      <FooterV3 onRequestDemo={onRequestDemo} />
    </div>
  );
}
