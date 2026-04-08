import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Map, ArrowLeft, Languages, Sun, Moon } from "lucide-react";
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
import { SEO } from "@/components/SEO";
import translations from "@/assets/translations.json";

const guideMarkdownZhTw = `
# Falaises de Cassis 2026 完整攻略｜一日遊・二日遊路線・Calanques 船遊・周邊景點推薦

**頁面描述（Meta）**：Falaises de Cassis 懸崖完整攻略，包含徒步路線、交通方式、最佳玩法、一日遊與二日遊建議，以及伊夫城堡、光影採石場、巴本動物公園等周邊推薦。附 Trip.com 最新門票與體驗預訂連結。

## 引言 

Falaises de Cassis（卡西斯懸崖）坐落於法國普羅旺斯 - 阿爾卑斯 - 蔚藍海岸大區羅訥河口省，是卡朗格峽灣國家公園境內最具代表性的海岸奇觀。奶白色石灰岩懸崖垂直墜入漸變藍的地中海，風起時浪濤拍擊岩壁，光影隨角度千變萬化，被譽為南法海岸的「隱藏寶石」。

這裡不僅是徒步愛好者與攝影師的天堂，搭配馬賽、萊博德普羅旺斯的經典景點，能輕鬆規劃 1-2 天豐富行程。這篇 2026 最新攻略，將手把手教你交通、路線、避坑技巧，並精選高口碑周邊體驗，讓你一站式玩透卡西斯懸崖。

## 基本資訊快速查詢 

- **景點名稱**：Falaises de Cassis（卡西斯懸崖）
- **詳細地址**：13260 Cassis, France
- **開放時間**：24 小時全年無休，免費開放無門票
- **建議遊玩時長**：1-3 小時（輕鬆觀景）；半天 - 2 天（深度徒步 + 周邊）
- **最佳季節**：4-10 月（海水湛藍、日照充足）；11-3 月（人少清幽，風力較強）
- **適合人群**：徒步愛好者、攝影師、情侶、親子家庭（搭配動物園）

👉 **官方參考**：[Falaises de Cassis 詳細資訊（Trip.com）](https://www.trip.com/t/jic2LTlJDU2)

## 如何前往 Cassis 與卡西斯懸崖

1. **馬賽 → Cassis（最主流方式）**
   - **區域快車（TER）**：全程約 17 分鐘，單程票價約 8 歐起，班次密集，準點率高，出發站為馬賽聖夏爾站（Marseille St-Charles）。
   - **市區巴士**：適合自駕旅客，沿山脊公路（Route des Crêtes）直達懸崖觀景台，部分時段週日禁止私車通行。
2. **機場 → Cassis**
   - 馬賽普羅旺斯機場無直達交通，需先搭乘接駁車至馬賽市區 / 火車站，再轉乘 TER 區域快車前往。
3. **Cassis 車站 → 市區 / 懸崖**
   - 車站與市區有距離，需搭乘官方接駁巴士（營運時間 6:40-20:30），旺季建議提前預留等車時間。

## Falaises de Cassis 核心玩法

卡西斯懸崖**不是單一觀景點**，而是綿延的海岸風景帶，分兩種玩法，可自由組合：

### 1. 輕鬆觀景版（山脊公路 Route des Crêtes）
適合不愛徒步、想快速看全景的旅客，自駕 / 騎行沿公路行駛，沿途多個觀景台隨停隨拍，日落時分視覺效果絕佳。

### 2. 深度徒步版（經典環線）
- **路線**：卡西斯小鎮 → Port Miou 灣 → Port Pin 灣 → 懸崖核心觀景點 → 返回小鎮
- 近距離接觸峽灣與岩壁，沉浸式感受海岸風光
- 沿途無補給點，需自備 1-2L 水、乾糧與防曬用品
- 穿防滑徒步鞋，岩壁邊風力強，注意安全

### 3. 必備實用建議
- **裝備**：防滑鞋、防曬霜、帽子、風衣（風大）
- **最佳拍照時間**：清晨（人少光線柔）、傍晚（日落金黃光）
- **安全**：6-9 月火險高危期，需提前查詢卡朗格國家公園開放狀態

## 一日遊建議行程（適合多數旅客）

- **上午**：馬賽出發 → 抵達 Cassis 小鎮 → 卡西斯懸崖觀景 / 輕度徒步
- **下午**：Cassis 港口搭乘 **Calanques 船遊**，海上環遊峽灣與懸崖（最輕鬆俯瞰全景方式）
- **晚上**：返回馬賽，或在 Cassis 港口品嚐新鮮海鮮料理

## 二日遊建議行程（深度玩轉南法）

### Day 1：卡西斯懸崖 + 沉浸式藝術
- 全天暢玩 Falaises de Cassis，徒步 + 觀景雙體驗
- 傍晚前往[光影採石場（Carrières des Lumières）](https://www.trip.com/t/cbem5BtJDU2)：舊采石場改造的光影藝術館，投影 + 音樂沉浸式體驗，視覺震撼

### Day 2：馬賽歷史經典之旅
- 馬賽舊港出發，登[伊夫島](https://www.trip.com/t/Vere9GuJDU2)，參觀[伊夫城堡](https://www.trip.com/t/QikyawuJDU2)：《基督山伯爵》經典取景地，百年監獄歷史感拉滿

### 親子家庭專屬加選
- 帶娃優先安排[巴本動物公園](https://www.trip.com/t/ENNHxEsJDU2)：普羅旺斯心臟地帶的野生動物園，120 + 種動物、鳥類飛行表演、餵食互動，距離 Cassis 車程短

## 實用旅行 Tips

- **天氣與安全**：懸崖陣風強烈，勿靠近邊緣拍照；6-9 月嚴禁攜帶明火，關注火險預警。
- **飲食推薦**：Cassis 港口餐廳集中，必嘗當地海鮮、普羅旺斯燉菜與當地葡萄酒。
- **住宿推薦**：想節省時間可住 Cassis 小鎮，偏好便利選馬賽老港周邊的[羅訥河口省高評分住宿](https://www.trip.com/t/xVAmgGHKDU2)
- **預訂提醒**：熱門景點（光影採石場、伊夫城堡）建議線上提前買票，避開現場排隊。

## 結語與預訂說明

Falaises de Cassis 從不是「打卡即走」的景點，結合船遊、藝術展、歷史城堡，才能完整領略南法蔚藍海岸與普羅旺斯的雙重魅力。

*本站部分連結為 Trip.com 聯盟連結，點擊預訂價格與官方完全一致，不會產生額外費用，您的支持能讓我們持續更新更實用的法國南部旅行攻略。*

---
*頁面底部 SEO 關鍵字：Falaises de Cassis、Cassis 懸崖、Calanques 一日遊、Cassis 怎麼玩、伊夫城堡、卡西斯攻略 2026、南法徒步、光影採石場、巴本動物公園*
`;

const guideMarkdownEn = `
# Falaises de Cassis 2026 Complete Guide | 1-Day & 2-Day Routes, Boat Tours, and Nearby Attractions

## Introduction

Located in the Bouches-du-Rhône department of the Provence-Alpes-Côte d'Azur region, the Falaises de Cassis (Cliffs of Cassis) is one of the most iconic coastal wonders in the Calanques National Park. The creamy white limestone cliffs plunge vertically into the azure Mediterranean Sea. When the wind blows, the waves crash against the rock walls, and the light and shadow change with the angle. It is known as the "hidden gem" of the southern French coast.

This area is a paradise not only for hikers and photographers but also an ideal addition to classic Provence destinations like Marseille. With this 2026 updated guide, we will walk you through transportation, routes, practical tips, and top-rated local experiences.

## Quick Information

- **Name**: Falaises de Cassis (Cliffs of Cassis)
- **Address**: 13260 Cassis, France
- **Opening Hours**: Open 24 hours, free entry
- **Suggested Duration**: 1-3 hours (easy viewing); half day to 2 days (hiking + surrounding areas)
- **Best Season**: April-October (azure waters, sunny); November-March (quiet, but windy)

👉 **Official Reference**: [Falaises de Cassis Details (Trip.com)](https://www.trip.com/t/jic2LTlJDU2)

## 2-Day Suggested Itinerary

### Day 1: Cliffs + Immersive Art
- Full day at Falaises de Cassis, enjoying both hiking and viewpoints
- In the evening, head to [Carrières des Lumières](https://www.trip.com/t/cbem5BtJDU2): an immersive art gallery transformed from an old quarry, offering a visually stunning experience with projections and music.

### Day 2: Marseille Historical Classic Tour
- Depart from Marseille's Old Port, land on [Île d'If](https://www.trip.com/t/Vere9GuJDU2), and visit [Château d'If](https://www.trip.com/t/QikyawuJDU2): the classic filming location for *The Count of Monte Cristo*, filled with the historical atmosphere of a century-old prison.

### Family Exclusive Addition
- If traveling with kids, prioritize [Zoo de la Barben](https://www.trip.com/t/ENNHxEsJDU2): a wildlife park in the heart of Provence with over 120 animal species, bird flight shows, and feeding interactions, just a short drive from Cassis.

## Practical Tips

- **Accommodation**: Stay in Cassis for convenience or around Marseille's Old Port for a city vibe. We recommend checking out [Top-Rated Accommodation in Bouches-du-Rhône](https://www.trip.com/t/xVAmgGHKDU2).

## Conclusion

Falaises de Cassis is never just a "check-in" spot. Combined with boat tours, art exhibitions, and historical castles, you can fully appreciate the dual charm of the French Riviera and Provence.

*Some links on this site are Trip.com affiliate links. Booking through these links costs you nothing extra, and your support helps us continue updating practical travel guides for Southern France.*
`;

export default function Guide() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko">(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as any) || "en";
  });

  const t = (translations as any)[lang] || translations.en;

  useEffect(() => {
    localStorage.setItem("app-lang", lang);
  }, [lang]);

  // Select the appropriate markdown content based on the selected language
  // For now, we fallback to English if the specific translation isn't available
  const currentMarkdown = lang === "zh-TW" ? guideMarkdownZhTw : guideMarkdownEn;
  
  const title = lang === "zh-TW" ? "Cassis 旅遊攻略" : "Cassis Travel Guide";
  const subtitle = lang === "zh-TW" ? "Falaises de Cassis 2026 完整指南" : "Falaises de Cassis 2026 Complete Guide";

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      <SEO 
        currentLang={lang} 
        path="/guide" 
        customMeta={{
          title: lang === "zh-TW" ? "Falaises de Cassis 2026 完整攻略｜一日遊・二日遊路線・Calanques 船遊・周邊景點推薦" : "Falaises de Cassis 2026 Complete Guide",
          description: lang === "zh-TW" ? "Falaises de Cassis 懸崖完整攻略，包含徒步路線、交通方式、最佳玩法、一日遊與二日遊建議，以及伊夫城堡、光影採石場、巴本動物公園等周邊推薦。附 Trip.com 最新門票與體驗預訂連結。" : "A complete guide to Falaises de Cassis, including hiking routes, transportation, 1-2 day itineraries, and nearby attractions."
        }}
      />
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur grain">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-3">
            <Link href="/">
              <div className="text-lg font-semibold tracking-tight hover:text-[oklch(var(--accent))] transition-colors cursor-pointer">{t.title}</div>
            </Link>
            <div className="hidden text-xs text-muted-foreground md:block">{t.subtitle}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  {t.nav?.routes || "Routes"}
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  {t.nav?.map || "Map"}
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  {t.nav?.reviews || "Reviews"}
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" size="sm">
                  {t.nav?.blog || "Blog"}
                </Button>
              </Link>
            </div>
            
            <Separator orientation="vertical" className="mx-2 h-6 hidden md:block" />
            
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
        <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-accent/10 p-4 text-[oklch(var(--accent))]">
              <Map className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                {title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-border/70 bg-background/20 p-6 md:p-10 shadow-sm">
          <article 
            className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[oklch(var(--accent))] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground`}
            onClick={(e) => {
              // Override Streamdown's default link behavior to prevent confirmation modals
              const target = e.target as HTMLElement;
              if (target.tagName === 'A' && target.hasAttribute('href')) {
                e.preventDefault();
                e.stopPropagation();
                window.open(target.getAttribute('href')!, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <Streamdown>
              {currentMarkdown}
            </Streamdown>
          </article>
        </div>

        <Separator className="my-12" />

        <div className="flex justify-center">
          <Link href="/blog">
            <Button variant="outline" className="border-border/70 bg-background/40">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-border/70 bg-background py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="text-xs text-muted-foreground">
            {t.footer?.support || "Support & Info"}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground/80">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              {t.footer?.privacy || "Privacy Policy"}
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              {t.footer?.terms || "Terms of Service"}
            </Link>
            <Link href="/cookie-settings" className="hover:text-foreground transition-colors">
              {t.footer?.cookie_settings || "Cookie Settings"}
            </Link>
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-3">
            <div className="rounded-xl border border-[oklch(var(--accent))]/20 bg-[oklch(var(--accent))]/5 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground/90">
              {t.footer?.disclaimer || "Disclaimer"}
            </div>
            <div className="text-center text-xs text-muted-foreground/70 italic">
              {t.footer?.source_info || "Information sourced from official guides."}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}