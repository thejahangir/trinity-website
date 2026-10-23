import React from 'react';
import HeaderV2 from '../components/v2/HeaderV2';
import HeroV2 from '../components/v2/HeroV2';
import MasterDetailCapabilitiesV2 from '../components/v2/MasterDetailCapabilitiesV2';
import PlatformWorkspaceV2 from '../components/v2/PlatformWorkspaceV2';
import ComparisonMatrixV2 from '../components/v2/ComparisonMatrixV2';
import IndustryDossierV2 from '../components/v2/IndustryDossierV2';
import PipelineStepperV2 from '../components/v2/PipelineStepperV2';
import TrustDataRoomV2 from '../components/v2/TrustDataRoomV2';
import ResearchArchiveV2 from '../components/v2/ResearchArchiveV2';
import AboutGlobalV2 from '../components/v2/AboutGlobalV2';
import FinalCTAV2 from '../components/v2/FinalCTAV2';
import FooterV2 from '../components/v2/FooterV2';

export default function VersionTwo({ onRequestDemo }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      {/* V2 Architectural Swiss Minimal Header */}
      <HeaderV2 onRequestDemo={onRequestDemo} />

      <main className="flex-grow">
        {/* SECTION 01 — HORIZON HERO WITH 3-PANE MASTER DECISION CONSOLE */}
        <HeroV2 onRequestDemo={onRequestDemo} />

        {/* SECTION 02 — STICKY SPLIT-RAIL CAPABILITIES WORKBENCH (Master-Detail) */}
        <MasterDetailCapabilitiesV2 />

        {/* SECTION 03 — FULL-WIDTH PURPOSE-BUILT PLATFORM COMMAND CONSOLE */}
        <PlatformWorkspaceV2 onRequestDemo={onRequestDemo} />

        {/* SECTION 04 — ENTERPRISE PROCUREMENT AUDIT MATRIX */}
        <ComparisonMatrixV2 />

        {/* SECTION 05 — HORIZONTAL TABBED DOMAIN DOSSIER & METRIC STRIP */}
        <IndustryDossierV2 />

        {/* SECTION 06 — INTERACTIVE 4-STAGE PIPELINE STEPPER & INSPECTION DRAWER */}
        <PipelineStepperV2 />

        {/* SECTION 07 — INSTITUTIONAL GOVERNANCE & SECURITY DATA ROOM */}
        <TrustDataRoomV2 />

        {/* SECTION 08 — CHRONOLOGICAL RESEARCH & BRIEFINGS ARCHIVE */}
        <ResearchArchiveV2 />

        {/* SECTION 09 — DUAL-METROPOLIS R&D HUBS & TELESCOPE MANIFESTO */}
        <AboutGlobalV2 onRequestDemo={onRequestDemo} />

        {/* SECTION 10 — DUAL-TRACK EXECUTIVE BRIEFING COMMENCEMENT DESK */}
        <FinalCTAV2 onRequestDemo={onRequestDemo} />
      </main>

      {/* V2 Enterprise Clean Footer */}
      <FooterV2 onRequestDemo={onRequestDemo} />
    </div>
  );
}
