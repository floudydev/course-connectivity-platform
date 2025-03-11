
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
}

const defaultSettings: Settings = {
  language: 'ru',
  background: 'light',
  fontSize: 'medium',
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
      setSettings(JSON.parse(storedSettings));
    }

    // Apply settings to the document
    applySettings(storedSettings ? JSON.parse(storedSettings) : defaultSettings);
  }, []);

  const applySettings = (currentSettings: Settings) => {
    // Apply font size
    document.documentElement.style.fontSize = 
      currentSettings.fontSize === 'small' ? '14px' : 
      currentSettings.fontSize === 'large' ? '18px' : '16px';

    // Apply background
    document.body.className = `bg-${currentSettings.background}-background`;
    
    // In a real app, you would use i18n for language, but for this example
    // we're just changing the settings value
  };

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    
    // Save to localStorage
    localStorage.setItem('settings', JSON.stringify(updatedSettings));
    
    // Update state
    setSettings(updatedSettings);
    
    // Apply changes
    applySettings(updatedSettings);
    
    toast.success('Настройки сохранены');
  };

  const resetSettings = () => {
    localStorage.removeItem('settings');
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    toast.success('Настройки сброшены');
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
