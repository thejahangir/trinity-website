import React, { createContext, useContext, useState } from 'react';

const ThemeContextV4 = createContext();

export function ThemeProviderV4({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('trinity_v4_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark'; // Default to Dark Glassmorphic
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('trinity_v4_theme', next);
      }
      return next;
    });
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContextV4.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContextV4.Provider>
  );
}

export function useThemeV4() {
  const context = useContext(ThemeContextV4);
  if (!context) {
    throw new Error('useThemeV4 must be used within a ThemeProviderV4');
  }
  return context;
}
