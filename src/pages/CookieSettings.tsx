import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie, ArrowLeft, Languages, Sun, Moon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import translations from "@/assets/translations.json";
import { toast } from "sonner";

export default function CookieSettings() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko">(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as any) || "en";
  });

  const t = (translations as any)[lang];

  const [settings, setCookieSettings] = useState({
    necessary: true,
    analytics: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      setCookieSettings(JSON.parse(consent));
    }
    localStorage.setItem("app-lang", lang);
  }, [lang]);

  const handleSave = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(settings));
    toast.success(lang === 'fr' ? 'Paramètres enregistrés' : lang === 'ja' ? '設定を保存しました' : 'Settings saved successfully');
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true };
    setCookieSettings(all);
    localStorage.setItem("cookie-consent", JSON.stringify(all));
    toast.success(lang === 'fr' ? 'Tous les cookies acceptés' : lang === 'ja' ? 'すべてのCookieを許可しました' : 'All cookies accepted');
  };

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      {/* Mini Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Languages className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("fr")}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("ja")}>日本語</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("es")}>Español</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("de")}>Deutsch</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("zh-TW")}>繁體中文</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("ko")}>한국어</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-accent/10 p-4 text-[oklch(var(--accent))]">
            <Cookie className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {t.compliance.settings.title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.compliance.cookie.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-border/70 bg-card/50 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-bold">
                  {t.compliance.settings.necessary}
                  <Badge variant="outline" className="text-[10px] uppercase tracking-widest opacity-70">Required</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.compliance.settings.necessary_desc}
                </p>
              </div>
              <Switch checked={settings.necessary} disabled />
            </div>
          </Card>

          <Card className="border-border/70 bg-card/50 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="font-bold">{t.compliance.settings.analytics}</div>
                <p className="text-sm text-muted-foreground">
                  {t.compliance.settings.analytics_desc}
                </p>
              </div>
              <Switch 
                checked={settings.analytics} 
                onCheckedChange={(v) => setCookieSettings(s => ({ ...settings, analytics: v }))} 
              />
            </div>
          </Card>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" className="border-border/70" onClick={handleAcceptAll}>
            {t.compliance.settings.accept_all}
          </Button>
          <Button className="bg-primary text-primary-foreground" onClick={handleSave}>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            {t.compliance.settings.save}
          </Button>
        </div>

        <Separator className="my-12" />

        <div className="flex justify-center">
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>

      <footer className="border-t border-border/70 py-10 text-center">
        <div className="mx-auto max-w-3xl px-4 text-xs text-muted-foreground">
          {t.footer.support}
        </div>
        <div className="mx-auto mt-4 max-w-3xl px-4 rounded-xl border border-[oklch(var(--accent))]/20 bg-[oklch(var(--accent))]/5 py-3 text-center text-xs leading-relaxed text-muted-foreground/90">
          {t.footer.disclaimer}
        </div>
      </footer>
    </main>
  );
}
