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

const guideMarkdownZhTw = `
# Falaises de Cassis 攻略｜交通、停車、徒步與最佳觀景點

## 這一頁適合誰

如果你搜尋的是 **Falaises de Cassis、Cap Canaille、Route des Cretes、Cassis cliffs**，這一頁就是給準備實際出發的人看的。重點不是「南法還能順便去哪裡」，而是把卡西斯懸崖本身玩明白。

Falaises de Cassis 指的不是一個單一觀景台，而是 Cassis 與 La Ciotat 之間、圍繞 **Cap Canaille** 和 **Route des Cretes** 展開的一整段海岸懸崖風景帶。你可以用最輕鬆的自駕觀景方式看全景，也可以把它和 Port Miou、Port Pin 一起走成半天到一天的徒步行程。

## 基本資訊

- **地點**：13260 Cassis, France
- **核心關鍵區域**：Cap Canaille、Route des Cretes、Falaises Soubeyranes
- **建議停留時間**：2-3 小時起；若加上徒步，建議半天到一天
- **適合玩法**：觀景、自駕、公路騎行、短程徒步、日落攝影
- **不適合情況**：只想停車 5 分鐘拍完就走、怕高、沒有防滑鞋卻想走岩地

## 怎麼去 Falaises de Cassis

### 從馬賽出發

最常見的方式是先到 **Cassis 小鎮**，再前往 Route des Cretes 或徒步起點。

1. **火車 + 接駁**
   從 Marseille Saint-Charles 搭 TER 到 Cassis，再轉接駁或計程車進鎮上。
2. **自駕**
   自駕最靈活，尤其適合想走 **Route des Cretes** 的旅客。
3. **包車 / 一日行程**
   如果你不想處理停車與道路限制，跟一日行程會更省心。

### 到了 Cassis 之後怎麼走

- 想看全景：直接去 **Route des Cretes** 的觀景點
- 想走海灣步道：從 **Port Miou** 一帶開始徒步
- 想拍日落：優先安排 **Cap Canaille** 一線的高處觀景台

## 停車與進入方式

這一區最容易踩雷的不是找不到景，而是 **停車、封路與季節性限制**。

### 停車建議

- **Cassis 鎮上停車場**：適合先逛港口，再去步道或觀景公路
- **Route des Cretes 沿線停靠點**：方便、但旺季與日落前後很容易滿
- **不要臨停在危險彎道或邊坡**：風大、路窄，而且視線死角多

### 出發前一定要確認

- 是否有 **強風封路**
- 是否有 **森林火險限制**
- 是否遇到 **週日或旺季交通管制**

這些條件會直接影響你能不能開上去，或能不能走特定步道。

## 最推薦的兩種玩法

## 1. Route des Cretes 觀景線

這是最容易把 **Cassis cliffs / Falaises de Cassis** 看明白的方式。

- **適合**：第一次來、帶長輩、時間不多、想拍全景的人
- **特色**：車程短、視野大、可以多點停靠
- **最佳時段**：上午空氣清楚；傍晚適合拍日落

你會看到的核心畫面通常是：

- 奶白色石灰岩斷崖
- 地中海深藍到藍綠的海色變化
- Cap Canaille 的高差與海岸線延伸

## 2. Port Miou / Port Pin 延伸徒步

如果你不只想看「高處全景」，而是想真正走進卡朗格地形，這條線更有沉浸感。

- **適合**：平常有在走路、願意準備水和鞋子的人
- **特色**：能同時看到海灣、岩壁、步道與懸崖地貌
- **提醒**：夏天曝曬強，補水一定要準備足

## 最佳觀景時間與拍照建議

### 上午

- 光線乾淨，海色通常比較通透
- 風有時比傍晚穩
- 適合廣角風景照

### 日落前

- Route des Cretes 一線最有氛圍
- 懸崖與海面容易出現金色層次
- 但熱門停靠點更容易擁擠

### 拍照重點

- 以 **Cap Canaille + 海岸線延伸** 為主體，比只拍一塊岩壁更有辨識度
- 逆風很常見，手機和帽子要抓穩
- 不要站到邊緣拍，這裡不是適合冒險取景的地方

## 季節、封路與安全

### 夏季

- 人潮最多
- 曝曬與缺水最明顯
- 最需要留意火險與道路限制

### 春秋

- 整體最推薦
- 光線穩定，體感也比盛夏舒服

### 冬季

- 人少、畫面乾淨
- 但海風可能很強，體感偏冷

### 安全提醒

- 穿 **防滑鞋**
- 每人至少準備 **1-2 公升水**
- 出發前看 **風況、火險、道路是否開放**
- 有小孩同行時，不要讓孩子靠近裸露崖邊

## 建議停留多久

- **2 小時**：只走 Route des Cretes 幾個核心觀景點
- **半天**：觀景公路 + Cassis 港口
- **一天**：觀景公路 + 徒步 + 日落

## 常見問題

### Falaises de Cassis 和 Cap Canaille 是同一個地方嗎

不是完全同一點，但高度相關。大多數旅客實際看到的核心懸崖景觀，都圍繞 **Cap Canaille、Falaises Soubeyranes、Route des Cretes** 這一帶。

### 需要買門票嗎

通常不需要。這裡更像自然景觀與道路觀景區，但停車、交通限制和是否開放必須自己確認。

### 值得專程去嗎

如果你喜歡海岸懸崖、公路觀景、卡朗格式地貌，值得。若你只想逛市區或博物館，這裡的吸引力就沒那麼強。

## 我的建議

第一次來，最穩的安排是：

1. 早上到 Cassis
2. 先跑 **Route des Cretes**
3. 視體力決定要不要加 Port Miou 一帶步道
4. 傍晚回到高處觀景點等日落

這樣最容易把 **Falaises de Cassis / Cassis cliffs / Cap Canaille** 的精華一次看完整。
`;

const guideMarkdownEn = `
# Falaises de Cassis Guide | Access, Parking, Hiking and Best Viewpoints

## Who this guide is for

If you are searching for **Falaises de Cassis, Cassis cliffs, Cap Canaille or Route des Cretes**, this page is built for the actual visit. The goal here is to help you understand how to get there, where to stop, what to watch for, and how to choose between the scenic road and the hiking routes.

The Falaises de Cassis are not one single lookout. They are the dramatic cliff landscapes around **Cap Canaille**, the **Route des Cretes** and the coastal ridge between Cassis and La Ciotat.

## Quick facts

- **Location**: 13260 Cassis, France
- **Main areas**: Cap Canaille, Route des Cretes, Falaises Soubeyranes
- **Suggested visit time**: at least 2-3 hours, or half a day if you add hiking
- **Best for**: scenic drives, viewpoints, short hikes, sunset photos
- **Less ideal for**: very quick stopovers, travelers uncomfortable with heights, and anyone attempting rocky paths without proper shoes

## How to get to the Falaises de Cassis

### From Marseille

Most visitors first reach **Cassis town** and continue from there.

1. **Train plus local transfer**
   Take a TER train from Marseille Saint-Charles to Cassis, then continue by shuttle, taxi or car.
2. **Driving**
   This is the easiest option if your main target is **Route des Cretes**.
3. **Private transfer or day tour**
   Useful if you want the viewpoints without dealing with parking and road restrictions.

### Once you are in Cassis

- For the big panorama, head toward **Route des Cretes**
- For a more immersive walk, start around **Port Miou**
- For sunset, prioritize the higher viewpoints near **Cap Canaille**

## Parking and access

This is where most practical mistakes happen. The scenery is easy to love. The logistics need more attention.

### Parking tips

- **Cassis town parking** works well if you want to combine the cliffs with the harbor
- **Roadside pull-offs on Route des Cretes** are convenient but fill up quickly near sunset
- Do not stop on blind curves or unstable shoulders

### Always check before you go

- strong wind closures
- forest fire restrictions
- Sunday or seasonal vehicle controls

These conditions can change whether you can drive the road or access certain hiking sections.

## The two best ways to visit

## 1. Route des Cretes scenic road

This is the easiest way to understand the **Cassis cliffs** landscape.

- **Best for**: first-time visitors, families, short visits, wide panoramas
- **Why it works**: minimal effort, multiple viewpoints, great sunset potential
- **Best timing**: morning for clarity, late afternoon for atmosphere

What makes this route special is the combination of:

- pale limestone cliffs
- deep blue Mediterranean water
- the height and scale of **Cap Canaille**

## 2. Port Miou and Port Pin hiking extension

If you want more than roadside viewpoints, this option gives you a stronger feel for the coastline.

- **Best for**: visitors comfortable walking on uneven terrain
- **Why it works**: closer contact with coves, rock walls and the Calanques landscape
- **Important**: bring water, especially in warm weather

## Best viewpoints and photo timing

### Morning

- clearer light
- cleaner sea colors
- good for wide landscape shots

### Sunset

- stronger atmosphere along **Route des Cretes**
- warmer tones on the cliff faces
- more competition for parking and stopping points

### Photo advice

- frame **Cap Canaille** with the coastline whenever possible
- expect strong wind
- avoid stepping close to exposed cliff edges for photos

## Seasonal restrictions and safety

### Summer

- busiest season
- highest heat and sun exposure
- most likely period for fire-risk restrictions

### Spring and autumn

- usually the best balance of weather, light and comfort

### Winter

- quieter and often more relaxed
- but wind can be much stronger

### Safety checklist

- wear shoes with grip
- carry at least 1-2 liters of water per person
- check daily access conditions before departure
- keep children away from exposed edges

## How long should you spend here

- **2 hours**: a few key Route des Cretes viewpoints
- **Half day**: viewpoints plus Cassis harbor
- **Full day**: viewpoints, hiking and sunset

## Frequently asked questions

### Are Falaises de Cassis and Cap Canaille the same thing

Not exactly, but they are closely connected in how visitors experience the area. Most of the iconic cliff scenery people mean by **Falaises de Cassis** is linked to **Cap Canaille**, **Falaises Soubeyranes** and **Route des Cretes**.

### Do you need a ticket

Usually no. This is mainly an outdoor scenic area, but access conditions and parking rules still matter.

### Is it worth a dedicated visit

Yes if you love cliffs, sea views, scenic drives or coastal hiking. Less so if you mainly want urban sightseeing.

## Recommended first visit plan

1. Arrive in Cassis in the morning
2. Start with **Route des Cretes**
3. Add a Port Miou walk if you still have time and energy
4. Return to a higher viewpoint for sunset

That plan gives you the clearest first impression of **Falaises de Cassis, Cassis cliffs and Cap Canaille** without overloading the day.
`;

const guideMarkdownFr = `
# Guide des Falaises de Cassis | Acces, parking, randonnee et meilleurs points de vue

## Pour qui est cette page

Si vous cherchez **Falaises de Cassis, Cap Canaille, Route des Cretes** ou les meilleurs points de vue autour de Cassis, cette page a ete pensee pour la visite concrete. L'objectif est d'aider a preparer l'acces, le stationnement, les arrets utiles, la randonnee et les verifications a faire avant le depart.

Les Falaises de Cassis ne correspondent pas a un seul belvedere. Il s'agit d'un ensemble de paysages de falaises autour de **Cap Canaille**, de la **Route des Cretes** et du relief littoral entre Cassis et La Ciotat.

## Infos rapides

- **Lieu** : 13260 Cassis, France
- **Zones cles** : Cap Canaille, Route des Cretes, Falaises Soubeyranes
- **Temps conseille** : 2 a 3 heures minimum, ou une demi-journee avec marche
- **Ideal pour** : route panoramique, points de vue, randonnee courte, coucher de soleil
- **Moins adapte a** : visite tres rapide, peur du vide, chaussures non adaptees

## Comment venir

### Depuis Marseille

La plupart des visiteurs commencent par rejoindre **Cassis**.

1. **Train puis transfert local**
   Prenez un TER depuis Marseille Saint-Charles jusqu'a Cassis, puis continuez en navette, taxi ou voiture.
2. **Voiture**
   C'est l'option la plus simple si votre objectif principal est la **Route des Cretes**.
3. **Transfert prive ou excursion**
   Pratique si vous voulez eviter la gestion du stationnement et des fermetures.

### Une fois a Cassis

- Pour le panorama : allez vers la **Route des Cretes**
- Pour une balade plus immersive : commencez vers **Port Miou**
- Pour le coucher de soleil : visez les points hauts pres de **Cap Canaille**

## Parking et acces

Le plus important ici n'est pas seulement la vue, mais la logistique.

### Conseils de stationnement

- Les parkings de **Cassis** conviennent bien si vous combinez falaises et port
- Les arrets le long de la **Route des Cretes** sont pratiques mais vite complets
- Ne vous arretez pas dans les virages sans visibilite

### A verifier avant de partir

- fermetures pour vent fort
- restrictions liees au risque incendie
- limitations de circulation le dimanche ou en saison

## Les deux meilleures manieres de visiter

## 1. La Route des Cretes

La route panoramique est la facon la plus simple de comprendre le paysage des falaises.

- **Ideale pour** : premiere visite, familles, peu de temps
- **Atout principal** : plusieurs points de vue avec peu d'effort
- **Meilleur moment** : le matin pour la clarte, la fin d'apres-midi pour l'ambiance

## 2. La marche vers Port Miou et Port Pin

Si vous voulez aller au-dela de la route, cette option permet une experience plus proche du terrain.

- **Ideale pour** : visiteurs a l'aise sur terrain irregulier
- **Atout principal** : contact plus direct avec les calanques et les falaises
- **Important** : emportez de l'eau

## Meilleurs moments et conseils photo

### Le matin

- lumiere plus nette
- couleurs de mer plus propres
- bonne visibilite pour les paysages larges

### Au coucher du soleil

- ambiance tres forte sur la **Route des Cretes**
- teintes plus chaudes sur les falaises
- plus de monde aux arrets

## Saisons, restrictions et securite

### En ete

- saison la plus frequentee
- chaleur et exposition importantes
- periode la plus sensible pour les restrictions incendie

### Au printemps et en automne

- souvent la meilleure periode pour la visite

### En hiver

- moins de monde
- mais vent parfois plus fort

### Rappels securite

- portez des chaussures avec accroche
- prevoyez 1 a 2 litres d'eau par personne
- verifiez l'ouverture avant de partir
- gardez les enfants loin des bords exposes

## Duree conseillee

- **2 heures** : quelques points de vue de la Route des Cretes
- **Demi-journee** : route panoramique plus port de Cassis
- **Journee complete** : points de vue, marche et coucher de soleil

## Questions frequentes

### Falaises de Cassis et Cap Canaille, est-ce la meme chose

Pas exactement, mais les deux sont etroitement lies. Une grande partie des paysages que les visiteurs associent aux **Falaises de Cassis** se situe autour de **Cap Canaille**, des **Falaises Soubeyranes** et de la **Route des Cretes**.

### Faut-il un billet

En general non. Il s'agit surtout d'un espace naturel et routier, mais les conditions d'acces doivent etre verifiees.

### Est-ce que cela vaut le detour

Oui si vous aimez les falaises, la mer, les routes panoramiques et la marche en bord de cote.
`;

interface GuideProps {
  initialLang?: "en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko";
}

export default function Guide({ initialLang }: GuideProps) {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "fr" | "ja" | "es" | "de" | "zh-TW" | "ko">(() => {
    const saved = localStorage.getItem("app-lang");
    return (initialLang as any) || (saved as any) || "en";
  });

  const t = (translations as any)[lang] || translations.en;

  useEffect(() => {
    localStorage.setItem("app-lang", lang);
  }, [lang]);

  useEffect(() => {
    if (initialLang && initialLang !== lang) {
      setLang(initialLang);
    }
  }, [initialLang, lang]);

  const currentMarkdown =
    lang === "zh-TW" ? guideMarkdownZhTw : lang === "fr" ? guideMarkdownFr : guideMarkdownEn;

  const title =
    lang === "zh-TW"
      ? "卡西斯懸崖攻略"
      : lang === "fr"
        ? "Guide des Falaises de Cassis"
        : "Falaises de Cassis Guide";

  const subtitle =
    lang === "zh-TW"
      ? "交通、停車、徒步與最佳觀景點"
      : lang === "fr"
        ? "Acces, parking, randonnee et points de vue"
        : "Access, parking, hiking and best viewpoints";

  return (
    <main className="min-h-screen bg-background text-foreground grain">
      <SEO
        currentLang={lang}
        path="/guide"
        customMeta={{
          title:
            lang === "zh-TW"
              ? "Falaises de Cassis 攻略｜交通、停車、徒步與最佳觀景點"
              : lang === "fr"
                ? "Guide des Falaises de Cassis : acces, parking, randonnee et itineraire"
                : "Falaises de Cassis Guide: Hiking, Parking, Access & Best Views",
          description:
            lang === "zh-TW"
              ? "規劃 Falaises de Cassis 行程：交通、停車、Route des Cretes、Cap Canaille、徒步難度、最佳觀景點與安全提醒。"
              : lang === "fr"
                ? "Preparez votre visite des Falaises de Cassis avec des conseils pratiques sur l'acces, le parking, la Route des Cretes, la randonnee et la securite."
                : "Plan your visit to the Falaises de Cassis with practical advice on access, parking, Route des Cretes viewpoints, hiking, safety and the best time to go.",
        }}
      />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur grain">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-3">
            <Link href="/">
              <div className="cursor-pointer text-lg font-semibold tracking-tight transition-colors hover:text-[oklch(var(--accent))]">
                {t.title}
              </div>
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

            <Separator orientation="vertical" className="mx-2 hidden h-6 md:block" />

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

      <section className="relative overflow-hidden border-b border-border/50 bg-card grain">
        <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-2xl bg-accent/10 p-4 text-[oklch(var(--accent))]">
              <Map className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-border/70 bg-background/20 p-6 shadow-sm md:p-10">
          <div className="mb-8 flex justify-center overflow-hidden rounded-lg">
            <iframe
              src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3"
              style={{ width: "728px", height: "90px", border: "none" }}
              scrolling="no"
              id="SB15266995"
              title="Trip.com Ad"
            />
          </div>

          <article
            className={`prose ${theme === "dark" ? "prose-invert" : ""} max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-a:text-[oklch(var(--accent))] prose-a:underline hover:prose-a:underline prose-strong:text-foreground`}
          >
            <Streamdown>{currentMarkdown}</Streamdown>
          </article>

          <Recommendations translations={t.recommendations} />

          <div className="mt-12 overflow-hidden rounded-lg border-t border-border/50 pt-8">
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
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <footer className="border-t border-border/70 bg-background py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="text-xs text-muted-foreground">{t.footer?.support || "Support & Info"}</div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground/80">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              {t.footer?.privacy || "Privacy Policy"}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              {t.footer?.terms || "Terms of Service"}
            </Link>
            <Link href="/cookie-settings" className="transition-colors hover:text-foreground">
              {t.footer?.cookie_settings || "Cookie Settings"}
            </Link>
          </div>
          <div className="mx-auto mt-6 max-w-3xl space-y-3">
            <div className="rounded-xl border border-[oklch(var(--accent))]/20 bg-[oklch(var(--accent))]/5 px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground/90">
              {t.footer?.disclaimer || "Disclaimer"}
            </div>
            <div className="text-center text-xs italic text-muted-foreground/70">
              {t.footer?.source_info || "Information sourced from official guides."}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
