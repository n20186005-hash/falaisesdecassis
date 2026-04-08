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

// Mock data for blog posts. We can add more here in the future.
const posts = [
  {
    id: "guide-2026",
    title: {
      "en": "Falaises de Cassis 2026 Complete Guide | 1-Day & 2-Day Routes, Boat Tours, and Nearby Attractions",
      "fr": "Guide Complet Falaises de Cassis 2026 | Itinéraires 1-2 Jours, Excursions en Bateau et Attractions à Proximité",
      "ja": "カシス懸崖2026完全ガイド | 1日・2日ルート、ボートツアー、周辺観光スポット",
      "es": "Guía Completa Falaises de Cassis 2026 | Rutas 1-2 Días, Tours en Barco y Atracciones Cercanas",
      "de": "Falaises de Cassis 2026 Komplette Anleitung | 1-2 Tages Routen, Bootstouren und Nahegelegene Attraktionen",
      "zh-TW": "Falaises de Cassis 2026 完整攻略｜一日遊・二日遊路線・Calanques 船遊・周邊景點推薦",
      "ko": "Falaises de Cassis 2026 완전 가이드 | 1-2일 루트, 보트 투어, 인근 명소"
    },
    description: {
      "en": "A complete guide to Falaises de Cassis, including hiking routes, transportation, 1-2 day itineraries, and nearby attractions like Château d'If and Carrières des Lumières.",
      "fr": "Un guide complet des Falaises de Cassis, incluant les itinéraires de randonnée, le transport, les itinéraires 1-2 jours et les attractions à proximité comme Château d'If et Carrières des Lumières.",
      "ja": "カシス懸崖への完全ガイド、ハイキングルート、交通、1-2日ルート、イフ城やカリエール・デ・ルミエールなどの周辺観光スポットを含む。",
      "es": "Una guía completa de Falaises de Cassis, incluyendo rutas de senderismo, transporte, itinerarios de 1-2 días y atracciones cercanas como Château d'If y Carrières des Lumières.",
      "de": "Eine vollständige Anleitung zu Falaises de Cassis, einschließlich Wanderwegen, Transport, 1-2-Tages-Routen und nahegelegenen Attraktionen wie Château d'If und Carrières des Lumières.",
      "zh-TW": "Falaises de Cassis 懸崖完整攻略，包含徒步路線、交通方式、最佳玩法、一日遊與二日遊建議，以及伊夫城堡、光影採石場、巴本動物公園等周邊推薦。",
      "ko": "Falaises de Cassis 절벽 완전 가이드, 하이킹 루트, 교통, 최고의 플레이 방법, 1일 및 2일 여행 제안, 그리고 Château d'If, Carrières des Lumières, Barben 동물원 등 인근 추천 명소 포함."
    },
    date: "2026-04-08",
    category: {
      "en": "Guide",
      "fr": "Guide",
      "ja": "ガイド",
      "es": "Guía",
      "de": "Anleitung",
      "zh-TW": "攻略",
      "ko": "가이드"
    },
    path: "/guide"
  },
  {
    id: "family-zoo",
    title: {
      "en": "Zoo de la Barben 2026 Complete Family Guide",
      "fr": "Zoo de la Barben 2026 Guide Familial Complet",
      "ja": "ラ・バルバン動物園 2026 家族向け完全ガイド",
      "es": "Zoo de la Barben 2026 Guía Familiar Completa",
      "de": "Zoo de la Barben 2026 Kompletter Familienführer",
      "zh-TW": "巴本動物公園 (Zoo de la Barben) 2026 完整親子遊攻略",
      "ko": "Zoo de la Barben 2026 완전 가족 가이드"
    },
    description: {
      "en": "Zoo de la Barben is the largest wildlife park in Provence, featuring 120 species, bird shows, and feeding interactions. A must-visit family destination in Southern France.",
      "fr": "Le Zoo de la Barben est le plus grand parc animalier de Provence, avec 120 espèces. Une destination familiale incontournable dans le sud de la France.",
      "ja": "ラ・バルバン動物園はプロヴァンス最大の野生動物公園です。南フランスで必見の家族向け観光地です。",
      "es": "El Zoo de la Barben es el parque de vida silvestre más grande de Provenza. Un destino familiar de visita obligada en el sur de Francia.",
      "de": "Der Zoo de la Barben ist der größte Wildpark in der Provence. Ein Muss für Familien in Südfrankreich.",
      "zh-TW": "巴本動物公園是普羅旺斯最大的野生動物園，擁有 120 種動物，提供精彩鳥類表演與餵食互動，是南法親子遊必去的推薦景點。",
      "ko": "Zoo de la Barben은 프로방스에서 가장 큰 야생 동물 공원입니다. 남프랑스에서 꼭 방문해야 할 가족 명소입니다."
    },
    date: "2026-04-09",
    category: {
      "en": "Family",
      "fr": "Famille",
      "ja": "家族",
      "es": "Familia",
      "de": "Familie",
      "zh-TW": "親子",
      "ko": "가족"
    },
    path: "/family-zoo"
  }
];

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