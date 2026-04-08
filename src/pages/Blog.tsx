import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Languages, Sun, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { SEO } from "@/components/SEO";
import translations from "@/assets/translations.json";
import { posts } from "@/data/posts";

export default function Blog() {
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
    <main className="min-h-screen bg-background text-foreground">
      <SEO 
        currentLang={lang} 
        path="/blog" 
        customMeta={{
          title: `${t.blog?.blog_page?.title || "Blog & Guides"} - ${t.title}`,
          description: t.blog?.blog_page?.subtitle || "Discover everything you need to know about exploring the stunning Falaises de Cassis."
        }}
      />
      
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur grain">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{t.blog?.blog_page?.back_to_home || "Back to Home"}</span>
              </Button>
            </Link>
            <div className="hidden text-sm font-semibold tracking-tight md:block">
              {t.title} {t.blog?.title || "Blog"}
            </div>
          </div>
          
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border/50 bg-card grain">
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary/40 bg-background/60">
                {t.blog?.blog_page?.latest_articles || "Latest Articles"}
              </Badge>
            </div>

            <h1 className="text-4xl font-extrabold whitespace-pre-line leading-[0.95] tracking-tight md:text-6xl">
              {t.blog?.blog_page?.title || "Blog & Guides"}
            </h1>
            <p className="font-editorial mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.blog?.blog_page?.subtitle || "Discover everything you need to know."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={post.path}>
                <Card className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden border-border/70 bg-card transition-colors hover:border-[oklch(var(--accent))]/50 hover:bg-accent/5">
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant="secondary" className="bg-accent/10 text-[oklch(var(--accent))]">
                        {post.category[lang]}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight group-hover:text-[oklch(var(--accent))] transition-colors">
                      {post.title[lang]}
                    </h3>
                    <p className="font-editorial text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.description[lang]}
                    </p>
                  </div>
                  <div className="mt-auto border-t border-border/50 p-4">
                      <div className="flex items-center text-sm font-medium text-[oklch(var(--accent))]">
                        {t.blog?.blog_page?.read_more || "Read More"} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-accent/10 p-4 text-[oklch(var(--accent))]">
                <Languages className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.blog?.blog_page?.no_articles || "No articles yet"}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.blog?.blog_page?.check_back || "Check back later."}</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER (Simple) */}
      <footer className="border-t border-border/70 bg-card py-10 text-center grain">
        <div className="mx-auto max-w-3xl px-4 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Falaises de Cassis. All rights reserved.
        </div>
      </footer>
    </main>
  );
}