
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

type Language = 'ru' | 'en';
type Background = 'light' | 'gray' | 'blue';
type FontSize = 'small' | 'medium' | 'large';

interface Settings {
  language: Language;
  background: Background;
  fontSize: FontSize;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
  resetSettings: () => void;
  t: (key: string) => string;
}

const defaultSettings: Settings = {
  language: 'ru',
  background: 'light',
  fontSize: 'medium',
};

// Translations for both languages
const translations = {
  ru: {
    'settings.saved': 'Настройки сохранены',
    'settings.reset': 'Настройки сброшены',
    'nav.home': 'Главная',
    'nav.courses': 'Курсы',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'button.login': 'Войти',
    'button.logout': 'Выйти',
    'button.settings': 'Настройки',
  },
  en: {
    'settings.saved': 'Settings saved',
    'settings.reset': 'Settings reset',
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'button.login': 'Login',
    'button.logout': 'Logout',
    'button.settings': 'Settings',
  }
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    // Load settings from localStorage
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
      try {
        const parsedSettings = JSON.parse(storedSettings);
        setSettings(parsedSettings);
        
        // Apply settings to the document
        applySettings(parsedSettings);
      } catch (error) {
        console.error("Error parsing stored settings:", error);
        localStorage.removeItem('settings'); // Remove invalid settings
      }
    } else {
      // Apply default settings if no stored settings
      applySettings(defaultSettings);
    }
  }, []);

  const applySettings = (currentSettings: Settings) => {
    // Apply font size
    document.documentElement.style.fontSize = 
      currentSettings.fontSize === 'small' ? '14px' : 
      currentSettings.fontSize === 'large' ? '18px' : '16px';

    // Apply background - clear existing classes first
    document.body.classList.remove('bg-light-background', 'bg-gray-background', 'bg-blue-background');
    document.body.classList.add(`bg-${currentSettings.background}-background`);
    
    // Apply language attributes
    document.documentElement.setAttribute('lang', currentSettings.language);
    document.documentElement.setAttribute('data-language', currentSettings.language);
    
    console.log("Applied settings:", currentSettings);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[settings.language][key] || key;
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    
    // Save to localStorage
    localStorage.setItem('settings', JSON.stringify(updatedSettings));
    
    // Update state
    setSettings(updatedSettings);
    
    // Apply changes
    applySettings(updatedSettings);
    
    // Show success message in the selected language
    const successMessage = updatedSettings.language === 'en' 
      ? 'Settings saved' 
      : 'Настройки сохранены';
    
    toast.success(successMessage);
  };

  const resetSettings = () => {
    localStorage.removeItem('settings');
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    
    // Show success message in the default language (Russian)
    toast.success('Настройки сброшены');
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
        t,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
