import { useState, useEffect } from "react";
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
import { useTheme } from "@/contexts/ThemeContext";
import { SEO } from "@/components/SEO";
import { Recommendations } from "@/components/Recommendations";
import translations from "@/assets/translations.json";

const zooMarkdownZhTw = `
# 巴本動物公園 (Zoo de la Barben) 2026 完整親子遊攻略

## 引言 

如果您正在計劃前往南法普羅旺斯地區，除了絕美的卡西斯懸崖 (Falaises de Cassis) 之外，我們強烈推薦帶著孩子們來一趟 <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a>。這座位於普羅旺斯心臟地帶的大型野生動物園，不僅環境優美，更是親子家庭的絕佳選擇。

## 為什麼選擇巴本動物公園？

<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a> 是普羅旺斯地區最大的動物園之一，園內擁有超過 120 種、共計數百隻來自世界各地的野生動物。

1. **豐富的動物種類**：從非洲草原的獅子、長頸鹿、犀牛，到亞洲的珍稀物種，孩子們可以近距離觀察這些美麗的生物。
2. **精彩的鳥類飛行表演**：每天定時舉行的猛禽與鳥類飛行表演，絕對是園區內的一大亮點，令人驚呼連連。
3. **沉浸式餵食互動**：園區內設有專門的互動區域，讓孩子們可以親手餵食小動物，體驗與大自然零距離接觸的樂趣。
4. **綠意盎然的環境**：園區內種植了大量的地中海植物，漫步其中彷彿置身於一座大型植物園，非常適合全家大小一起散步放鬆。

## 交通與行程建議

- **位置**：距離卡西斯 (Cassis) 和馬賽 (Marseille) 車程約 1 小時，非常適合安排在南法自駕遊的行程中。
- **建議停留時間**：建議預留半天（約 3-4 小時）的時間，這樣可以悠閒地逛遍整個園區，並觀賞精彩的表演。
- **行程搭配**：上午前往 <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a>，下午可以順道前往附近的光影採石場，或是回到卡西斯港口搭乘遊船。

## 實用旅行 Tips

- **提前購票**：為了避免現場排隊浪費時間，強烈建議您事先在線上買好門票。點擊這裡即可快速跳轉購票：<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">預訂巴本動物公園門票</a>。
- **防曬與補水**：南法的陽光非常熱情，請務必為孩子們準備好防曬霜、帽子，並隨時補充水分。
- **推車租借**：園區內部分路段有坡度，如果您帶著幼童，可以在入口處租借嬰兒推車，讓行程更加輕鬆。

## 結語

無論您是熱愛自然生態的旅人，還是希望為孩子們創造美好回憶的家長，<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">巴本動物公園</a> 都絕對是您普羅旺斯之旅不可錯過的一站。現在就開始規劃您的南法親子遊吧！

---
`;

const zooMarkdownEn = `
# Zoo de la Barben 2026 Complete Family Guide

## Introduction

If you are planning a trip to the Provence region in southern France, in addition to the stunning Falaises de Cassis, we highly recommend a family trip to the <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a>. Located in the heart of Provence, this large wildlife park is not only beautiful but also an excellent choice for families with children.

## Why Choose Zoo de la Barben?

<a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a> is one of the largest zoos in the Provence region, home to over 120 species and hundreds of wild animals from all over the world.

1. **Rich Variety of Animals**: From lions, giraffes, and rhinos of the African savannah to rare species from Asia, children can observe these beautiful creatures up close.
2. **Spectacular Bird Flight Shows**: The daily raptor and bird flight shows are definitely a highlight of the park, bringing constant amazement.
3. **Immersive Feeding Interactions**: The park features dedicated interaction areas where children can hand-feed small animals and experience the joy of being close to nature.
4. **Lush Environment**: The park is planted with a large number of Mediterranean plants. Walking through it feels like being in a large botanical garden, perfect for a relaxing family stroll.

## Transportation and Itinerary Suggestions

- **Location**: About a 1-hour drive from Cassis and Marseille, making it highly suitable to include in a southern France road trip itinerary.
- **Suggested Duration**: We recommend setting aside half a day (about 3-4 hours) so you can leisurely explore the entire park and watch the wonderful shows.
- **Itinerary Pairing**: Head to the <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a> in the morning, and in the afternoon, you can drop by the nearby Carrières de Lumières or return to the Cassis port for a boat tour.

## Practical Travel Tips

- **Book in Advance**: To avoid wasting time in lines, it is strongly recommended that you buy your tickets online in advance. Click here to book quickly: <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Book Zoo de la Barben Tickets</a>.
- **Sun Protection and Hydration**: The sun in southern France can be very intense. Please make sure to prepare sunscreen and hats for the children, and keep them hydrated.
- **Stroller Rental**: Some parts of the park have slopes. If you are traveling with toddlers, you can rent a stroller at the entrance to make the trip easier.

## Conclusion

Whether you are a traveler who loves natural ecology or a parent hoping to create beautiful memories for your children, <a href="https://www.trip.com/t/ENNHxEsJDU2" target="_blank" rel="noopener noreferrer">Zoo de la Barben</a> is absolutely a must-visit stop on your Provence journey. Start planning your southern France family trip now!

---
`;

export default function FamilyZoo() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko">(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as any) || "en";
  });

  const t = (translations as any)[lang] || translations.en;

  useEffect(() => {
    localStorage.setItem("app-lang", lang);
  }, [lang]);

  const currentMarkdown = lang === "zh-TW" ? zooMarkdownZhTw : zooMarkdownEn;
  const title = lang === "zh-TW" ? "巴本動物公園攻略" : "Zoo de la Barben Guide";
  const subtitle = lang === "zh-TW" ? "南法普羅旺斯親子遊首選" : "Top Family Destination in Provence";

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      <SEO 
        currentLang={lang} 
        path="/family-zoo" 
        customMeta={{
          title: lang === "zh-TW" ? "巴本動物公園 (Zoo de la Barben) 2026 完整親子遊攻略" : "Zoo de la Barben 2026 Complete Family Guide",
          description: lang === "zh-TW" ? "巴本動物公園是普羅旺斯最大的野生動物園，擁有 120 種動物，提供精彩鳥類表演與餵食互動，是南法親子遊必去的推薦景點。" : "Zoo de la Barben is the largest wildlife park in Provence, featuring 120 species, bird shows, and feeding interactions. A must-visit family destination in Southern France."
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
