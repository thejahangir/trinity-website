import React, { useState } from 'react';
import VersionOne from './pages/VersionOne';
import VersionTwo from './pages/VersionTwo';
import VersionSwitcher from './components/VersionSwitcher';
import DemoModal from './components/DemoModal';
import GoTopButton from './components/GoTopButton';

export default function App() {
  const [activeVersion, setActiveVersion] = useState(() => {
    // Check URL query parameter (?v=2 or ?v=1) if explicitly supplied
    if (typeof window !== 'undefined') {
      // Clear legacy localStorage cache that previously locked into v2
      try {
        localStorage.removeItem('trinity_active_version');
      } catch (e) {
        // ignore
      }

      const urlParams = new URLSearchParams(window.location.search);
      const urlV = urlParams.get('v');
      if (urlV === '2' || urlV === 'v2') return 'v2';
      if (urlV === '1' || urlV === 'v1') return 'v1';
    }
    // Default to Version 1 visible first when running the application
    return 'v1';
  });

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState('General Inquiry');

  const handleVersionChange = (newVersion) => {
    setActiveVersion(newVersion);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (newVersion === 'v1') {
        url.searchParams.delete('v');
      } else {
        url.searchParams.set('v', '2');
      }
      window.history.replaceState({}, '', url);
    }
  };

  const handleOpenDemoModal = (productName = 'General Inquiry') => {
    setSelectedProductForDemo(productName);
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <>
      {/* Left Middle of Window: Interactive Version Switcher */}
      <VersionSwitcher 
        activeVersion={activeVersion} 
        onVersionChange={handleVersionChange} 
      />

      {/* Render Active Design Version */}
      {activeVersion === 'v1' ? (
        <VersionOne onRequestDemo={handleOpenDemoModal} />
      ) : (
        <VersionTwo onRequestDemo={handleOpenDemoModal} />
      )}

      {/* Shared Enterprise Briefing Modal */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={handleCloseDemoModal} 
        preselectedProduct={selectedProductForDemo} 
      />

      {/* Persistent "Go Top" Floating Action Button (Active in Both Versions) */}
      <GoTopButton />
    </>
  );
}
