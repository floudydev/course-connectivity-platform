
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

const Settings = () => {
  const { user } = useAuth();
  const { settings, updateSettings, resetSettings } = useSettings();
  const navigate = useNavigate();
  const [tab, setTab] = useState("appearance");

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      toast.error("Вы должны быть авторизованы для доступа к настройкам");
      navigate("/login");
    }
  }, [user, navigate]);

  // Settings state
  const [language, setLanguage] = useState(settings.language);
  const [background, setBackground] = useState(settings.background);
  const [fontSize, setFontSize] = useState(settings.fontSize);

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
    setLanguage(settings.language);
    setBackground(settings.background);
    setFontSize(settings.fontSize);
  };

  if (!user) return null;

  return (
    <Layout>
      <div className="container mx-auto mt-32 max-w-3xl animate-fade-in p-6">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h1 className="mb-8 text-center text-3xl font-bold">Настройки</h1>

          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Palette size={16} />
                <span>Оформление</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User size={16} />
                <span>Аккаунт</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Languages size={20} />
                    <h3 className="text-xl font-medium">Язык</h3>
                  </div>

                  <div>
                    <Label htmlFor="language">Выберите язык интерфейса</Label>
                    <Select
                      value={language}
                      onValueChange={(value) => setLanguage(value as "ru" | "en")}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Выберите язык" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ru">Русский</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Palette size={20} />
                    <h3 className="text-xl font-medium">Фон</h3>
                  </div>

                  <div>
                    <Label htmlFor="background">Выберите фон сайта</Label>
                    <Select
                      value={background}
                      onValueChange={(value) => setBackground(value as "light" | "gray" | "blue")}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Выберите фон" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Светлый</SelectItem>
                        <SelectItem value="gray">Серый</SelectItem>
                        <SelectItem value="blue">Голубой</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Type size={20} />
                    <h3 className="text-xl font-medium">Размер шрифта</h3>
                  </div>

                  <div>
                    <Label htmlFor="fontSize">Выберите размер шрифта</Label>
                    <Select
                      value={fontSize}
                      onValueChange={(value) => setFontSize(value as "small" | "medium" | "large")}
                    >
                      <SelectTrigger className="mt-2 w-full">
                        <SelectValue placeholder="Выберите размер шрифта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Маленький</SelectItem>
                        <SelectItem value="medium">Средний</SelectItem>
                        <SelectItem value="large">Большой</SelectItem>
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
                    <span>Сохранить настройки</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw size={16} />
                    <span>Сбросить настройки</span>
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="account" className="animate-fade-in">
              <div className="space-y-6">
                <div className="rounded-lg bg-secondary/50 p-6">
                  <div className="flex items-center gap-2">
                    <User size={20} />
                    <h3 className="text-xl font-medium">Информация профиля</h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p>
                      <span className="font-medium">Имя:</span> {user.name}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> {user.email}
                    </p>
                    <p>
                      <span className="font-medium">ID пользователя:</span>{" "}
                      {user.id}
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-secondary/50 p-6">
                  <div className="flex items-center gap-2">
                    <Shield size={20} />
                    <h3 className="text-xl font-medium">Безопасность</h3>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      Функции смены пароля и настройки безопасности будут
                      доступны в следующем обновлении.
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
