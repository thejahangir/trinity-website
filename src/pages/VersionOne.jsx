import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CompanyPositioning from '../components/CompanyPositioning';
import Capabilities from '../components/Capabilities';
import ProductsOverview from '../components/ProductsOverview';
import IndustriesSection from '../components/IndustriesSection';
import DifferentiationSection from '../components/DifferentiationSection';
import ApproachSection from '../components/ApproachSection';
import TrustSection from '../components/TrustSection';
import InsightsSection from '../components/InsightsSection';
import AboutMissionSection from '../components/AboutMissionSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function VersionOne({ onRequestDemo }) {
  return (
    <div className="min-h-screen bg-trinity-canvas text-trinity-ink flex flex-col font-sans selection:bg-trinity-blue selection:text-white">
      {/* Sticky Enterprise Navigation Header */}
      <Header onRequestDemo={onRequestDemo} />

      <main className="flex-grow">
        {/* SECTION 01 — DARK HERO */}
        <Hero onRequestDemo={onRequestDemo} />

        {/* SECTION 02 — LIGHT COMPANY / POSITIONING */}
        <CompanyPositioning />

        {/* SECTION 03 — LIGHT CAPABILITIES */}
        <Capabilities />

        {/* SECTION 04 — LIGHT PRODUCTS OVERVIEW */}
        <ProductsOverview onRequestDemo={onRequestDemo} />

        {/* SECTION 05 — LIGHT INDUSTRIES / USE CASES */}
        <IndustriesSection />

        {/* SECTION 06 — DARK TECHNOLOGY / DIFFERENTIATION */}
        <DifferentiationSection />

        {/* SECTION 07 — LIGHT HOW TRINITY APPROACHES AI */}
        <ApproachSection />

        {/* SECTION 08 — LIGHT TRUST */}
        <TrustSection />

        {/* SECTION 09 — LIGHT INSIGHTS PREVIEW */}
        <InsightsSection />

        {/* SECTION 10 — LIGHT ABOUT / MISSION PREVIEW */}
        <AboutMissionSection onRequestDemo={onRequestDemo} />

        {/* SECTION 11 — DARK FINAL CTA */}
        <FinalCTA onRequestDemo={onRequestDemo} />
      </main>

      {/* Enterprise Footer */}
      <Footer onRequestDemo={onRequestDemo} />
    </div>
  );
}
