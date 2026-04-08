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
# Falaises de Cassis 2026 完整攻略｜一日遊與二日遊路線・船遊・周邊私房景點推薦

## 引言 

Falaises de Cassis（卡西斯懸崖）坐落於法國普羅旺斯 - 阿爾卑斯 - 蔚藍海岸大區，是卡朗格峽灣國家公園中最具代表性的海岸奇觀。奶白色的石灰岩懸崖垂直墜入漸變藍的地中海，當海風吹起浪濤拍擊岩壁，光影隨著日照角度千變萬化，這裡一直被許多旅人視為南法海岸的「隱藏寶石」。

這裡不僅是徒步愛好者與攝影師的天堂，如果搭配馬賽、萊博德普羅旺斯等經典景點，更能輕鬆規劃出 1 到 2 天的豐富行程。這篇最新的 2026 攻略，將會手把手分享交通、路線、避坑技巧，並精選高口碑的周邊體驗，讓你一站式玩透卡西斯懸崖。

## 基本資訊快速查詢 

- **景點名稱**：Falaises de Cassis（卡西斯懸崖）
- **詳細地址**：13260 Cassis, France
- **開放時間**：24 小時全年無休，免費開放無門票
- **建議遊玩時長**：1-3 小時（輕鬆觀景）；半天 - 2 天（深度徒步 + 周邊）
- **最佳季節**：4-10 月（海水湛藍、日照充足）；11-3 月（人少清幽，風力較強）
- **適合人群**：徒步愛好者、攝影師、情侶、親子家庭（搭配動物園更佳）

👉 **官方參考**：[Falaises de Cassis 詳細資訊（Trip.com）](https://www.trip.com/t/jic2LTlJDU2)

## 如何前往 Cassis 與卡西斯懸崖

1. **馬賽 → Cassis（最推薦的大眾交通方式）**
   - **區域快車（TER）**：全程大約只要 17 分鐘，單程票價約 8 歐元起。班次相當密集且準點率高，出發站為馬賽聖夏爾站（Marseille St-Charles）。
   - **市區巴士**：適合自駕旅客，可以沿著風景優美的山脊公路（Route des Crêtes）直達懸崖觀景台。但請注意，部分路段在夏季或週日可能會禁止私家車通行。
2. **機場 → Cassis**
   - 馬賽普羅旺斯機場並沒有直達交通，你需要先搭乘接駁車至馬賽市區或火車站，然後再轉乘 TER 區域快車前往。
3. **Cassis 車站 → 市區 / 懸崖**
   - 車站與市區有一段距離，抵達後需要搭乘官方接駁巴士（營運時間為 06:40-20:30）。在旅遊旺季，建議務必提前預留等車的時間。

## Falaises de Cassis 核心玩法

卡西斯懸崖**不是單一的觀景點**，而是一整片綿延的海岸風景帶。主要有兩種玩法，你可以根據體力自由組合：

### 1. 輕鬆觀景版（山脊公路 Route des Crêtes）
非常適合不想走太多路、想快速欣賞全景的旅客。無論是自駕或是騎行，沿著公路行駛，沿途設有多個觀景台可以隨停隨拍，特別是日落時分的視覺效果絕對令人驚豔。

### 2. 深度徒步版（經典環線）
- **路線建議**：卡西斯小鎮 → Port Miou 灣 → Port Pin 灣 → 懸崖核心觀景點 → 返回小鎮
- 這是能最距離接觸峽灣與岩壁的方式，沉浸式感受壯麗的海岸風光。
- **重要提醒**：沿途沒有任何補給點，請務必自備 1-2 公升的水、乾糧與防曬用品。
- 岩壁邊緣風力往往很強，請穿著防滑徒步鞋並注意自身安全。

### 3. 必備實用建議
- **裝備**：防滑鞋、防曬霜、帽子、防風外套（海風強勁）。
- **最佳拍照時間**：清晨（人少且光線柔和）、傍晚（能捕捉到日落的金黃光芒）。
- **安全**：每年 6-9 月是森林火險高危期，出發前務必查詢卡朗格國家公園的官方開放狀態。

## 一日遊建議行程（適合多數旅客）

- **上午**：從馬賽出發 → 抵達 Cassis 小鎮 → 前往卡西斯懸崖觀景或進行輕度徒步
- **下午**：回到 Cassis 港口，搭乘 **Calanques 船遊**，從海上環遊峽灣與懸崖（這也是最輕鬆能俯瞰全景的方式）
- **晚上**：返回馬賽，或是留在 Cassis 港口找家氣氛好的餐廳，品嚐新鮮的海鮮料理

## 二日遊建議行程（深度玩轉南法）

### Day 1：卡西斯懸崖 + 沉浸式藝術
- 白天：全天暢玩 Falaises de Cassis，享受徒步與觀景的雙重體驗。
- 傍晚：前往[光影採石場（Carrières des Lumières）](https://www.trip.com/t/cbem5BtJDU2)。這是一個由舊采石場改造而成的光影藝術館，透過巨幅投影與音樂帶來的沉浸式體驗，視覺極度震撼。

### Day 2：馬賽歷史經典之旅
- 上午：從馬賽舊港出發，乘船登陸[伊夫島](https://www.trip.com/t/Vere9GuJDU2)。
- 下午：參觀島上的[伊夫城堡](https://www.trip.com/t/QikyawuJDU2)。這裡不僅是法國名著《基督山伯爵》的經典取景地，這座百年監獄更充滿了濃厚的歷史感。

### 親子家庭專屬加選
- 如果是帶著孩子同行，強烈建議優先安排[巴本動物公園](https://www.trip.com/t/ENNHxEsJDU2)。這是位於普羅旺斯心臟地帶的大型野生動物園，擁有多達 120 多種動物，還有精彩的鳥類飛行表演與餵食互動，距離 Cassis 的車程也不遠。

## 實用旅行 Tips

- **天氣與安全**：懸崖上的陣風有時非常強烈，拍照時切勿過度靠近邊緣；6-9 月嚴禁攜帶任何明火，請隨時關注火險預警。
- **飲食推薦**：Cassis 港口周邊餐廳林立，推薦必嘗當地的海鮮拼盤、普羅旺斯燉菜，別忘了搭配一杯當地產的清爽白葡萄酒。
- **住宿推薦**：如果想節省交通時間，可以直接住在 Cassis 小鎮；如果偏好生活機能便利，可以選擇住在馬賽老港周邊的[羅訥河口省高評分住宿](https://www.trip.com/t/xVAmgGHKDU2)。
- **預訂提醒**：像光影採石場、伊夫城堡這類熱門景點，強烈建議事先在線上買好門票，以免在現場浪費時間排隊。

## 結語與預訂說明

Falaises de Cassis 從來都不是一個「打卡即走」的景點。只要巧妙結合峽灣船遊、光影藝術展以及歷史城堡，你就能完整領略到南法蔚藍海岸與普羅旺斯交織出的雙重魅力。

*本站部分連結為 Trip.com 聯盟連結，點擊預訂的價格與官方完全一致，不會對您產生任何額外費用，您的支持將能讓我們持續更新更多實用的法國南部旅行攻略。*
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