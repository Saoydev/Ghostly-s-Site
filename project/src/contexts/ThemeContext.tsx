import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'dark';
  language: 'en' | 'es' | 'fr';
  setLanguage: (lang: 'en' | 'es' | 'fr') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es' | 'fr'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'es' | 'fr' | null;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};