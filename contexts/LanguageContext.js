'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [uiLanguage, setUiLanguage] = useState('en');
  const [userLanguage, setUserLanguage] = useState('en');
  const [supportedLanguages, setSupportedLanguages] = useState({});

  useEffect(() => {
    // Mock supported languages - in production, fetch from backend
    const mockLanguages = {
      "en": {"name": "English", "flag": "🇺🇸", "native": "English"},
      "es": {"name": "Spanish", "flag": "🇪🇸", "native": "Español"},
      "fr": {"name": "French", "flag": "🇫🇷", "native": "Français"},
      "de": {"name": "German", "flag": "🇩🇪", "native": "Deutsch"},
      "it": {"name": "Italian", "flag": "🇮🇹", "native": "Italiano"},
      "zh": {"name": "Chinese", "flag": "🇨🇳", "native": "中文"},
      "ja": {"name": "Japanese", "flag": "🇯🇵", "native": "日本語"},
      "ar": {"name": "Arabic", "flag": "🇦🇪", "native": "العربية"},
      "ur": {"name": "Urdu", "flag": "🇵🇰", "native": "اردو"},
      "hi": {"name": "Hindi", "flag": "🇮🇳", "native": "हिन्दी"},
      "ko": {"name": "Korean", "flag": "🇰🇷", "native": "한국어"},
      "ru": {"name": "Russian", "flag": "🇷🇺", "native": "Русский"}
    };
    setSupportedLanguages(mockLanguages);
  }, []);

  const changeUiLanguage = (newLanguage) => {
    setUiLanguage(newLanguage);
    localStorage.setItem('uiLanguage', newLanguage);
  };

  const changeUserLanguage = (newLanguage) => {
    setUserLanguage(newLanguage);
    localStorage.setItem('userLanguage', newLanguage);
  };

  useEffect(() => {
    // Load saved preferences
    const savedUiLanguage = localStorage.getItem('uiLanguage');
    const savedUserLanguage = localStorage.getItem('userLanguage');
    
    if (savedUiLanguage) setUiLanguage(savedUiLanguage);
    if (savedUserLanguage) setUserLanguage(savedUserLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{
      uiLanguage,
      userLanguage,
      supportedLanguages,
      changeUiLanguage,
      changeUserLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
