import React, { useState, useEffect } from 'react';
import VersionOne from './pages/VersionOne';
import VersionTwo from './pages/VersionTwo';
import VersionThree from './pages/VersionThree';
import VersionFour from './pages/VersionFour';
import AboutUsPage from './pages/AboutUsPage';
import VersionSwitcher from './components/VersionSwitcher';
import DemoModal from './components/DemoModal';
import GoTopButton from './components/GoTopButton';

export default function App() {
  const [activeVersion, setActiveVersion] = useState(() => {
    // Check URL query parameter (?v=4, ?v=3, ?v=2, or ?v=1) if explicitly supplied
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('trinity_active_version');
      } catch {
        // ignore
      }

      const urlParams = new URLSearchParams(window.location.search);
      const urlV = urlParams.get('v');
      if (urlV === '1' || urlV === 'v1') return 'v1';
      if (urlV === '2' || urlV === 'v2') return 'v2';
      if (urlV === '3' || urlV === 'v3') return 'v3';
      if (urlV === '4' || urlV === 'v4') return 'v4';
    }
    // Default to Version 1 (Cinematic) when accessing the default URL
    return 'v1';
  });

  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('page') === 'about') return 'about';
      if (window.location.hash === '#about' || window.location.hash === '#about-us') return 'about';
    }
    return 'home';
  });

  // Keep browser URL, back/forward history, and hash synced with page state
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('page') === 'about' || window.location.hash === '#about' || window.location.hash === '#about-us') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (page === 'about') {
        url.searchParams.set('page', 'about');
        window.history.pushState({}, '', url);
      } else {
        url.searchParams.delete('page');
        window.history.pushState({}, '', url);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Ensure the Trinity logo favicon is active across all design versions
  useEffect(() => {
    const faviconHref = '/favicon.ico';
    let iconLink = document.querySelector("link[rel~='icon']");
    if (!iconLink) {
      iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      document.head.appendChild(iconLink);
    }
    iconLink.href = faviconHref;
  }, [activeVersion]);

  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState('General Inquiry');

  const handleVersionChange = (newVersion) => {
    setActiveVersion(newVersion);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (newVersion === 'v1') {
        url.searchParams.set('v', '1');
      } else if (newVersion === 'v2') {
        url.searchParams.set('v', '2');
      } else if (newVersion === 'v3') {
        url.searchParams.set('v', '3');
      } else {
        url.searchParams.set('v', '4');
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
      {/* Left Middle of Window: Interactive 4-Version Switcher */}
      <VersionSwitcher 
        activeVersion={activeVersion} 
        onVersionChange={handleVersionChange} 
      />

      {/* Render Active View: Dedicated AboutUsPage or Homepage Versions */}
      {currentPage === 'about' ? (
        <AboutUsPage 
          onNavigate={handleNavigate} 
          onRequestDemo={handleOpenDemoModal} 
        />
      ) : (
        <>
          {activeVersion === 'v1' && (
            <VersionOne onNavigate={handleNavigate} onRequestDemo={handleOpenDemoModal} />
          )}
          {activeVersion === 'v2' && (
            <VersionTwo onRequestDemo={handleOpenDemoModal} />
          )}
          {activeVersion === 'v3' && (
            <VersionThree onRequestDemo={handleOpenDemoModal} />
          )}
          {activeVersion === 'v4' && (
            <VersionFour onRequestDemo={handleOpenDemoModal} />
          )}
        </>
      )}

      {/* Shared Enterprise Briefing Modal */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={handleCloseDemoModal} 
        preselectedProduct={selectedProductForDemo} 
      />

      {/* Persistent "Go Top" Floating Action Button */}
      <GoTopButton />
    </>
  );
}
