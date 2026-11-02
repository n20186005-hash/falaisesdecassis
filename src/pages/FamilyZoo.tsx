import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { Map, Languages, Sun, Moon } from "lucide-react";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/theme";
import { SEO } from "@/components/SEO";
import { Recommendations } from "@/components/Recommendations";
import translations from "@/assets/translations.json";

const zooMarkdownZhTw = `
## 引言 

如果您正在計劃前往南法普羅旺斯地區，除了絕美的卡西斯懸崖 (Falaises de Cassis) 之外，我們強烈推薦帶著孩子們來一趟 <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a>。這座位於普羅旺斯心臟地帶的大型野生動物園，不僅環境優美，更是親子家庭的絕佳選擇。

## 為什麼選擇巴本動物公園？

<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a> 是普羅旺斯的動物園，可安排親子動物觀察行程；開放展區與動物資訊請以園方最新公告為準。

1. **豐富的動物種類**：從非洲草原的獅子、長頸鹿、犀牛，到亞洲的珍稀物種，孩子們可以在指定遊客區域觀察動物，並遵守安全圍欄與現場指示。
2. **當日活動資訊**：活動內容、日期與場次可能調整，出發前請查閱 [園方官網](https://www.zoolabarben.com/)，並以當日現場公告為準。
3. **尊重動物與安全距離**：依 [園方參觀規則](https://www.zoolabarben.com/wp-content/uploads/2014/12/ReglementInterieur-ZooBarben.pdf)，禁止餵食、觸摸動物或跨越安全圍欄；兒童須由成人全程看顧。
4. **綠意盎然的環境**：園區內種植了大量的地中海植物，漫步其中彷彿置身於一座大型植物園，非常適合全家大小一起散步放鬆。

## 交通與行程建議

- **位置**：可先以卡西斯 (Cassis) 或馬賽 (Marseille) 出發約 1 小時車程作為粗略估計；實際時間視出發點、路線及交通狀況而異，請於當日查看導航。
- **建議停留時間**：可先預留半天作為行程規劃，再依孩子體力、當日開放時間與活動安排調整。
- **行程搭配**：上午前往 <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a>，下午可以順道前往附近的光影採石場，或是回到卡西斯港口搭乘遊船。

## 實用旅行 Tips

- **購票與預約資訊**：出發前請查看 [園方官網](https://www.zoolabarben.com/) 的票價、營業時間及是否需預約；第三方票券的使用日期與條件請另外確認：<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">預訂巴本動物公園門票</a>。
- **防曬與補水**：南法的陽光非常熱情，請務必為孩子們準備好防曬霜、帽子，並隨時補充水分。
- **推車與親子設施**：若需使用推車，請先向園方確認路線適用性、可用設施與當日服務，勿預設現場提供租借。

## 結語

無論您是熱愛自然生態的旅人，還是希望為孩子們創造美好回憶的家長，<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a> 都絕對是您普羅旺斯之旅不可錯過的一站。現在就開始規劃您的南法親子遊吧！

---
`;

const zooMarkdownEn = `
## Introduction

If you are planning a trip to the Provence region in southern France, in addition to the stunning Falaises de Cassis, we highly recommend a family trip to the <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a>. Located in the heart of Provence, this large wildlife park is not only beautiful but also an excellent choice for families with children.

## Why Choose Zoo de la Barben?

<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a> is a zoo in Provence that can be included in a family animal-observation itinerary. Check the park’s latest information for open areas and animal exhibits.

1. **Rich Variety of Animals**: From lions, giraffes, and rhinos of the African savannah to rare species from Asia, children can observe animals from designated visitor areas while respecting safety barriers and staff instructions.
2. **Activities on Your Visit Date**: Activities, dates and times may change. Check the [official website](https://www.zoolabarben.com/) before travelling and follow the day’s on-site announcements.
3. **Animal Welfare and Safe Observation**: The [official visitor rules](https://www.zoolabarben.com/wp-content/uploads/2014/12/ReglementInterieur-ZooBarben.pdf) prohibit feeding or touching animals and crossing safety barriers. Children must remain under adult supervision.
4. **Lush Environment**: The park is planted with a large number of Mediterranean plants. Walking through it feels like being in a large botanical garden, perfect for a relaxing family stroll.

## Transportation and Itinerary Suggestions

- **Location**: Use roughly one hour by car from Cassis or Marseille as an initial estimate. Actual journey times depend on your starting point, route and traffic; check directions on the day of travel.
- **Suggested Duration**: Allow half a day as a planning suggestion, then adjust to your children’s energy, the opening hours and activities available on your visit date.
- **Itinerary Pairing**: Head to the <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a> in the morning, and in the afternoon, you can drop by the nearby Carrières de Lumières or return to the Cassis port for a boat tour.

## Practical Travel Tips

- **Tickets and Reservations**: Check the [official website](https://www.zoolabarben.com/) for current prices, opening hours and any reservation requirements. Separately check the dates and conditions of third-party tickets: <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Book Zoo de la Barben Tickets</a>.
- **Sun Protection and Hydration**: The sun in southern France can be very intense. Please make sure to prepare sunscreen and hats for the children, and keep them hydrated.
- **Strollers and Family Facilities**: Ask the park about suitable routes, available facilities and services for your visit date; do not assume stroller rental is available.

## Conclusion

Whether you are a traveler who loves natural ecology or a parent hoping to create beautiful memories for your children, <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a> is absolutely a must-visit stop on your Provence journey. Start planning your southern France family trip now!

---
`;

interface FamilyZooProps {
  initialLang?: "en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko";
}

export default function FamilyZoo({ initialLang }: FamilyZooProps) {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useLanguage(initialLang);

  const t = translations[lang] || translations.en;



  const isEnglishFallback = lang !== "en" && lang !== "zh-TW";

  const currentMarkdown = lang === "zh-TW" ? zooMarkdownZhTw : zooMarkdownEn;
  const title = lang === "zh-TW" ? "巴本動物公園攻略" : "Zoo de la Barben Guide";
  const subtitle = lang === "zh-TW" ? "南法普羅旺斯親子遊首選" : "Top Family Destination in Provence";

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      <SEO 
        currentLang={isEnglishFallback ? "en" : lang}
        path="/family-zoo" 
        robots="noindex,follow"
        alternateLangs={["en", "zh-TW"]}
        customMeta={{
          title: lang === "zh-TW" ? "巴本動物公園 (Zoo de la Barben) 2026 完整親子遊攻略" : "Zoo de la Barben 2026 Complete Family Guide",
          description: lang === "zh-TW" ? "規劃普羅旺斯巴本動物公園親子行程：動物觀察、參觀安全、購票與當日活動資訊；禁止餵食及觸摸動物。" : "Plan a family visit to Zoo de la Barben in Provence with animal-observation tips, visitor rules and links to current ticket and activity information. Do not feed or touch animals."
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
                <DropdownMenuItem onClick={() => setLang("zh-TW")}>繁體中文</DropdownMenuItem>
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
          {/* Top Ad Banner */}
          <div className="flex justify-center mb-8 overflow-hidden rounded-lg">
            <iframe 
              src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" 
              style={{ width: "728px", height: "90px", border: "none" }} 
              scrolling="no" 
              id="SB15266995"
              title="Trip.com Ad"
            />
          </div>

          {isEnglishFallback && (
            <p lang="en" className="mb-6 rounded-lg border border-border bg-card p-4 text-sm">
              This guide is available in English and Traditional Chinese. You are reading the English version. <a className="underline" href="/family-zoo">Open the English guide</a>.
            </p>
          )}
          <p className="mb-6 text-sm">
            <a className="underline underline-offset-4" href="https://www.zoolabarben.com/wp-content/uploads/2014/12/ReglementInterieur-ZooBarben.pdf" target="_blank" rel="noopener noreferrer">
              {lang === "zh-TW" ? "園方參觀規則（PDF）" : "Official visitor rules (PDF)"}
            </a>
          </p>
          <article 
            className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[oklch(var(--accent))] prose-a:underline hover:prose-a:underline prose-strong:text-foreground`}
          >
            <Streamdown>
              {currentMarkdown}
            </Streamdown>
          </article>
          
          {/* TAGS SECTION */}
          <div className="mt-12 pt-8 border-t border-border/70">
            <h3 className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">
              {lang === 'zh-TW' ? '探索更多推薦景點' : 'Explore More Attractions'}
            </h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-[oklch(var(--accent))] text-sm font-medium hover:bg-accent/20 transition-colors">
                # {lang === 'zh-TW' ? '巴本動物公園' : 'Zoo de la Barben'}
              </a>
              <a href="https://www.trip.com/t/cbem5BtJDU2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-[oklch(var(--accent))] text-sm font-medium hover:bg-accent/20 transition-colors">
                # {lang === 'zh-TW' ? '光影採石場' : 'Carrières des Lumières'}
              </a>
              <a href="https://www.trip.com/t/Vere9GuJDU2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-[oklch(var(--accent))] text-sm font-medium hover:bg-accent/20 transition-colors">
                # {lang === 'zh-TW' ? '伊夫島' : "Île d'If"}
              </a>
              <a href="https://www.trip.com/t/QikyawuJDU2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-[oklch(var(--accent))] text-sm font-medium hover:bg-accent/20 transition-colors">
                # {lang === 'zh-TW' ? '伊夫城堡' : "Château d'If"}
              </a>
            </div>
          </div>

          <Recommendations translations={t.recommendations} />

          {/* Bottom Ad Banner */}
          <div className="flex justify-center mt-12 pt-8 border-t border-border/50 overflow-hidden rounded-lg">
            <iframe 
              src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" 
              style={{ width: "728px", height: "90px", border: "none" }} 
              scrolling="no" 
              id="SB15266995-bottom"
              title="Trip.com Ad"
            />
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex justify-center">
          <Link href="/blog">
            <Button variant="outline" className="border-border/70 bg-background/40">
              {lang === 'zh-TW' ? '返回部落格' : 'Back to Blog'}
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
          <div className="mx-auto mt-6 max-w-3xl space-y-3">
            <div className="text-center text-xs text-muted-foreground/70 italic">
              {t.footer?.source_info || "Information sourced from official guides."}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
