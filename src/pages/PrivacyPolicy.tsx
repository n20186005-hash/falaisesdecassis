import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, ArrowLeft, Languages, Sun, Moon } from "lucide-react";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import translations from "@/assets/translations.json";

export default function PrivacyPolicy() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko">(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as any) || "en";
  });

  const t = (translations as any)[lang];

  useEffect(() => {
    localStorage.setItem("app-lang", lang);
  }, [lang]);

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

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-accent/10 p-4 text-[oklch(var(--accent))]">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {t.compliance.privacy.title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.subtitle}
            </p>
          </div>
        </div>

        <Separator className="mb-10" />

        <article className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[oklch(var(--accent))]`}>
          <Streamdown>
            {t.compliance.privacy.content}
          </Streamdown>
        </article>

        <Separator className="my-12" />

        <div className="flex justify-center">
          <Link href="/">
            <Button variant="outline" className="border-border/70">
              Return to main page
            </Button>
          </Link>
        </div>
      </div>

      <footer className="border-t border-border/70 py-10 text-center">
        <div className="mx-auto max-w-3xl px-4 text-xs text-muted-foreground">
          {t.footer.support}
        </div>
        <div className="mx-auto mt-4 max-w-3xl px-4 space-y-3">
          <div className="rounded-xl border border-[oklch(var(--accent))]/20 bg-[oklch(var(--accent))]/5 py-3 px-4 text-center text-xs leading-relaxed text-muted-foreground/90">
            {t.footer.disclaimer}
          </div>
          <div className="text-center text-xs text-muted-foreground/70 italic">
            {t.footer.source_info}
          </div>
        </div>
      </footer>
    </main>
  );
}
