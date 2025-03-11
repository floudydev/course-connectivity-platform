
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useSettings } from "@/contexts/SettingsContext";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  Languages,
  Palette,
  Type,
  Save,
  RotateCcw,
  Shield,
  User,
} from "lucide-react";

// Define translations
const translations = {
  ru: {
    settings: "Настройки",
    appearance: "Оформление",
    account: "Аккаунт",
    language: "Язык",
    selectLanguage: "Выберите язык интерфейса",
    russian: "Русский",
    english: "English",
    background: "Фон",
    selectBackground: "Выберите фон сайта",
    light: "Светлый",
    gray: "Серый",
    blue: "Голубой",
    fontSize: "Размер шрифта",
    selectFontSize: "Выберите размер шрифта",
    small: "Маленький",
    medium: "Средний",
    large: "Большой",
    save: "Сохранить настройки",
    reset: "Сбросить настройки",
    profileInfo: "Информация профиля",
    name: "Имя",
    email: "Email",
    userId: "ID пользователя",
    security: "Безопасность",
    securityMessage: "Функции смены пароля и настройки безопасности будут доступны в следующем обновлении.",
    authRequired: "Вы должны быть авторизованы для доступа к настройкам",
  },
  en: {
    settings: "Settings",
    appearance: "Appearance",
    account: "Account",
    language: "Language",
    selectLanguage: "Select interface language",
    russian: "Russian",
    english: "English",
    background: "Background",
    selectBackground: "Select website background",
    light: "Light",
    gray: "Gray",
    blue: "Blue",
    fontSize: "Font Size",
    selectFontSize: "Select font size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    save: "Save settings",
    reset: "Reset settings",
    profileInfo: "Profile Information",
    name: "Name",
    email: "Email",
    userId: "User ID",
    security: "Security",
    securityMessage: "Password change and security settings will be available in the next update.",
    authRequired: "You must be logged in to access settings",
  }
};

const Settings = () => {
  const { user } = useAuth();
  const { settings, updateSettings, resetSettings } = useSettings();
  const navigate = useNavigate();
  const [tab, setTab] = useState("appearance");

  // Get translations based on current language setting
  const t = translations[settings.language || 'ru'];

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      toast.error(t.authRequired);
      navigate("/login");
    }
  }, [user, navigate, t.authRequired]);

  // Settings state
  const [language, setLanguage] = useState(settings.language);
  const [background, setBackground] = useState(settings.background);
  const [fontSize, setFontSize] = useState(settings.fontSize);

  // Update local state when settings change
  useEffect(() => {
    setLanguage(settings.language);
    setBackground(settings.background);
    setFontSize(settings.fontSize);
  }, [settings]);

  // Apply settings when form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      language,
      background,
      fontSize,
    });
  };

  // Reset settings to defaults
  const handleReset = () => {
    resetSettings();
  };

  if (!user) return null;

  return (
    <Layout>
      <div className="container mx-auto mt-32 max-w-3xl animate-fade-in p-6">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h1 className="mb-8 text-center text-3xl font-bold">{t.settings}</h1>

          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette size={16} />
                <span>{t.appearance}</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User size={16} />
                <span>{t.account}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Languages size={20} />
                    <h3 className="text-xl font-medium">{t.language}</h3>
                  </div>

                  <div>
                    <Label htmlFor="language">{t.selectLanguage}</Label>
                    <Select
                      value={language}
                      onValueChange={(value) => setLanguage(value as "ru" | "en")}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder={t.selectLanguage} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ru">{t.russian}</SelectItem>
                        <SelectItem value="en">{t.english}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Palette size={20} />
                    <h3 className="text-xl font-medium">{t.background}</h3>
                  </div>

                  <div>
                    <Label htmlFor="background">{t.selectBackground}</Label>
                    <Select
                      value={background}
                      onValueChange={(value) => setBackground(value as "light" | "gray" | "blue")}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder={t.selectBackground} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">{t.light}</SelectItem>
                        <SelectItem value="gray">{t.gray}</SelectItem>
                        <SelectItem value="blue">{t.blue}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Type size={20} />
                    <h3 className="text-xl font-medium">{t.fontSize}</h3>
                  </div>

                  <div>
                    <Label htmlFor="fontSize">{t.selectFontSize}</Label>
                    <Select
                      value={fontSize}
                      onValueChange={(value) => setFontSize(value as "small" | "medium" | "large")}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder={t.selectFontSize} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">{t.small}</SelectItem>
                        <SelectItem value="medium">{t.medium}</SelectItem>
                        <SelectItem value="large">{t.large}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex items-center gap-2"
                  >
                    <Save size={16} />
                    <span>{t.save}</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw size={16} />
                    <span>{t.reset}</span>
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="account" className="animate-fade-in">
              <div className="space-y-6">
                <div className="rounded-lg bg-secondary/50 p-6">
                  <div className="flex items-center gap-2">
                    <User size={20} />
                    <h3 className="text-xl font-medium">{t.profileInfo}</h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p>
                      <span className="font-medium">{t.name}:</span> {user.name}
                    </p>
                    <p>
                      <span className="font-medium">{t.email}:</span> {user.email}
                    </p>
                    <p>
                      <span className="font-medium">{t.userId}:</span>{" "}
                      {user.id}
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-secondary/50 p-6">
                  <div className="flex items-center gap-2">
                    <Shield size={20} />
                    <h3 className="text-xl font-medium">{t.security}</h3>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      {t.securityMessage}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
