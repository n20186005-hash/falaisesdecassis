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

const guideMarkdown = `
# Falaises de Cassis 2026 完整攻略｜一日遊・二日遊路線・Calanques 船遊・周邊景點推薦 

## 引言 

Falaises de Cassis（卡西斯懸崖）位於法國普羅旺斯-阿爾卑斯-蔚藍海岸大區，是 Calanques 國家公園最壯麗的海崖景觀之一。白色懸崖與湛藍地中海形成強烈對比，被譽為「法國最美海岸線之一」。   

這裡適合喜歡自然、徒步、攝影的旅客，但許多人只走主路線就離開。其實搭配周邊景點，可以輕鬆玩成 1-2 天精彩行程。本攻略將為你詳細規劃路線、實用Tips，並推薦高評價的周邊體驗。 

## 基本資訊快速查詢 

- **地址**：13260 Cassis, France（Calanques 國家公園內） 
- **開放時間**：24 小時開放（無門票，免費進入） 
- **建議遊玩時長**：半天～2 天 
- **最佳季節**：4-10 月（夏季日落最美，冬季風大需注意） 
- **適合人群**：情侶、攝影愛好者、親子家庭（搭配動物公園更佳） 

## 如何前往 Cassis 

- **火車（最推薦）**：從馬賽聖夏勒車站（Marseille St-Charles）搭乘 TER 區間車，約 20-30 分鐘即可抵達卡西斯車站（Gare de Cassis）。出站後可轉乘 M01 號接駁巴士（Marcouline）直達卡西斯市中心與港口。
- **自駕前往**：從馬賽出發，可選擇行駛 A50 高速公路，或走風景優美的 D559 公路（Route de la Gineste）。**注意**：夏季卡西斯市區停車位一位難求，強烈建議將車停在免費的 Les Gorguettes 轉乘停車場，再搭乘接駁車進入市區或前往國家公園入口。
- **機場接駁**：若飛抵馬賽普羅旺斯機場（MRS），可先搭乘機場巴士（Navette）至馬賽市區火車站，再轉乘火車前往卡西斯。

## Falaises de Cassis 核心玩法 

- 主懸崖觀景台與短途徒步路線 
- 推薦拍照點與日落位置 
- 難度與裝備建議（穿舒適防滑鞋、帶水、防曬） 

## 一日遊建議行程（適合大多數旅客） 

上午：抵達 Cassis → 懸崖徒步或觀景   
下午：Cassis 港口 → **Calanques 船遊**（強烈推薦，最輕鬆看懸崖的方式）   
晚上：返回馬賽或在 Cassis 用餐 

**推薦體驗**：   
**[在 Trip.com 查看 Cassis 周邊船遊與當地體驗](https://www.trip.com/t/jic2LTlJDU2)** 

## 二日遊建議行程（推薦深度玩） 

**Day 1：懸崖 + 藝術體驗**   
- Falaises de Cassis 主路線   
- 下午或晚上前往 **光影採石場（Carrières de Lumière）** —— 把舊採石場變成沉浸式光影藝術展，視覺震撼   
→ ** [預訂連結：光影採石場](https://www.trip.com/t/cbem5BtJDU2) ** 

**Day 2：歷史島嶼之旅**   
- 從馬賽港出發，遊覽 **伊夫島 + 伊夫城堡**（《基督山恩仇記》取景地）   
→ ** [探索伊夫島](https://www.trip.com/t/Vere9GuJDU2) **   
→ ** [伊夫城堡快速通關門票](https://www.trip.com/t/QikyawuJDU2) ** 

**親子家庭加選**：   
如果帶小孩，強烈建議加入 **巴本動物公園**，動物互動豐富，距離 Cassis 車程不遠。   
→ ** [巴本動物公園優惠門票](https://www.trip.com/t/ENNHxEsJDU2) ** 

## Falaises de Cassis 景點總覽與最新資訊 

想一次看完整開放時間、交通更新、遊客真實評價？   
→ ** [Falaises de Cassis 景點最新資訊與評價](https://www.trip.com/t/jic2LTlJDU2) ** 

## 實用 Tips 

- **天氣與安全注意事項**：夏季如遇強風或高溫，國家公園徒步路線可能封閉。出發前請確認開放狀態。
- **最佳拍照時間**：清晨光線柔和，傍晚推薦前往 Route des Crêtes 捕捉日落。
- **飲食推薦**：Cassis 港口海鮮與普羅旺斯魚湯，搭配當地白葡萄酒。
- **附近住宿建議**：想在南法多留幾天？ [查看羅訥河口省住宿推薦](https://www.trip.com/t/xVAmgGHKDU2)

## 結語與預訂提醒 

Falaises de Cassis 不只是看一眼的風景，搭配船遊、藝術展、歷史城堡，才能真正感受普羅旺斯海岸的魅力。   

**以上部分連結為 Trip.com 聯盟連結**，點擊後價格與官方相同，我們可能獲得少量佣金，不影響您的任何費用。感謝您透過這些連結支持本站，讓我們能持續提供更多高品質的法國南部旅行攻略！ 
`;

export default function Guide() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      <SEO 
        currentLang="zh-TW" 
        path="/guide" 
        customMeta={{
          title: "Falaises de Cassis 2026 完整攻略｜一日遊・二日遊路線・Calanques 船遊・周邊景點推薦",
          description: "Falaises de Cassis 懸崖完整攻略，包含徒步路線、交通方式、最佳玩法、一日遊與二日遊建議，以及伊夫城堡、光影採石場、巴本動物公園等周邊推薦。附 Trip.com 最新門票與體驗預訂連結。"
        }}
      />
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
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl bg-accent/10 p-4 text-[oklch(var(--accent))]">
            <Map className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Cassis 旅遊攻略
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Falaises de Cassis 2026 完整指南
            </p>
          </div>
        </div>

        <Separator className="mb-10" />

        <article className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[oklch(var(--accent))]`}>
          <Streamdown>
            {guideMarkdown}
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
    </main>
  );
}
