/*
Design system reminder:
- Mediterranean Coastal Brutalism: deep sea background, limestone text, rust accent, diagonal sections, grain overlay
- Headings: Fraunces, Body: Spline Sans, Long-form: Newsreader
*/

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Streamdown } from "streamdown";
import { Moon, Sun, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

import heroImg from "@/assets/hero_google.jpg";
import blogEn from "@/assets/blog_en.md?raw";
import blogFr from "@/assets/blog_fr.md?raw";
import blogJa from "@/assets/blog_ja.md?raw";
import featuredImg from "@/assets/image.jpg";
import translations from "@/assets/translations.json";
import reviewsData from "@/assets/reviews-data.json";

import review01 from "@/assets/reviews/review_01.jpg";
import review02 from "@/assets/reviews/review_02.jpg";
import review03 from "@/assets/reviews/review_03.jpg";
import review04 from "@/assets/reviews/review_04.jpg";
import review05 from "@/assets/reviews/review_05.jpg";
import review06 from "@/assets/reviews/review_06.jpg";
import review07 from "@/assets/reviews/review_07.jpg";
import review08 from "@/assets/reviews/review_08.jpg";

interface HomeProps {
  targetSection?: string;
}

type Review = {
  author: string;
  time: string;
  rating: number;
  text: string;
  images?: string[];
};

type ReviewsPayload = {
  source: { name: string; place: string; url: string };
  reviews: Review[];
};

const embedIframeSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.584648603767!2d5.549549813028578!3d43.19722528168019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9baa863b8078f%3A0xd793ddf66db198d8!2sFalaises%20de%20Cassis!5e0!3m2!1sen!2sus!4v1773919371511!5m2!1sen!2sus";

function hashToSectionId(section?: string) {
  if (!section) return "";
  return section.replace(/^#/, "");
}

function Stars({ rating }: { rating: number }) {
  const stars = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < stars
              ? "text-[oklch(var(--accent))]"
              : "text-muted-foreground/40"
          }
          aria-hidden
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-xs text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Home({ targetSection }: HomeProps) {
  const section = hashToSectionId(targetSection);
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<"en" | "fr" | "ja">("en");

  const t = (translations as any)[lang];
  const blogMd = lang === "fr" ? blogFr : lang === "ja" ? blogJa : blogEn;

  useEffect(() => {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  const payload = reviewsData as ReviewsPayload;

  const imagePool = useMemo(
    () => [
      { src: review01, alt: "Google Maps Photo 1" },
      { src: review02, alt: "Google Maps Photo 2" },
      { src: review03, alt: "Google Maps Photo 3" },
      { src: review04, alt: "Google Maps Photo 4" },
      { src: review05, alt: "Google Maps Photo 5" },
      { src: review06, alt: "Google Maps Photo 6" },
      { src: review07, alt: "Google Maps Photo 7" },
      { src: review08, alt: "Google Maps Photo 8" },
    ],
    [],
  );

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur grain">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-3">
            <div className="text-lg font-semibold tracking-tight">{t.title}</div>
            <div className="hidden text-xs text-muted-foreground md:block">{t.subtitle}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" onClick={() => document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" })}>
                {t.nav.routes}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}>
                {t.nav.map}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })}>
                {t.nav.reviews}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}>
                {t.nav.blog}
              </Button>
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
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Falaises de Cassis Coastal Cliffs"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.12_0.03_240)_10%,transparent_55%),linear-gradient(0deg,oklch(0.12_0.03_240)_0%,transparent_55%)]" />
          <div className="absolute inset-0 grain" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              {t.hero.badges.map((badge: string, i: number) => (
                <Badge key={i} variant={i === 1 ? "secondary" : i === 2 ? "outline" : "default"} className={i === 2 ? "bg-accent text-accent-foreground" : ""}>
                  {badge}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold whitespace-pre-line leading-[0.95] tracking-tight md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="font-editorial mt-5 text-base leading-relaxed text-foreground/90 md:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-border/70 bg-background/70 px-4 py-2 backdrop-blur">
                <div className="text-xs text-muted-foreground">Google Maps</div>
                <div className="mt-1 flex items-center gap-3">
                  <Stars rating={4.9} />
                  <span className="text-xs text-muted-foreground">{t.hero.google_maps_stats.replace("{count}", "2,382")}</span>
                </div>
              </div>

              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.cta_routes}
              </Button>
              <Button
                variant="outline"
                className="border-primary/40 bg-background/60 hover:bg-background"
                onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.hero.cta_map}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {t.hero.features.map((feature: string) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-border/60 bg-background/55 px-4 py-3 text-sm backdrop-blur"
                >
                  <div className="text-[oklch(var(--accent))]">▍</div>
                  <div className="mt-1 font-medium">{feature}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK */}
      <section id="quick" className="diagonal-top bg-card text-card-foreground grain">
        <div className="mx-auto max-w-6xl px-4 pb-2">
          <div className="grid gap-8 py-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight">{t.quick.title}</h2>
              <p className="mt-3 font-editorial text-muted-foreground">
                {t.quick.description}
              </p>
              <Separator className="my-5" />
              <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
                <div>
                  <span className="text-[oklch(var(--accent))] font-bold">{t.quick.suitable.split(":")[0]}:</span>
                  {t.quick.suitable.split(":")[1]}
                </div>
                <div>
                  <span className="text-[oklch(var(--accent))] font-bold">{t.quick.unsuitable.split(":")[0]}:</span>
                  {t.quick.unsuitable.split(":")[1]}
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-border/70 bg-background/40 p-5">
                  <div className="text-sm font-semibold">{t.quick.cards[0].title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.quick.cards[0].text}
                  </p>
                </Card>
                <Card className="border-border/70 bg-background/40 p-5">
                  <div className="text-sm font-semibold">{t.quick.cards[1].title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.quick.cards[1].text}
                  </p>
                </Card>
                <Card className="border-border/70 bg-background/40 p-5 md:col-span-2">
                  <div className="text-sm font-semibold">{t.quick.cards[2].title}</div>
                  <p className="mt-2 font-editorial text-sm leading-relaxed text-foreground/90">
                    {t.quick.cards[2].text}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{t.routes.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.routes.subtitle}
              </p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-secondary text-secondary-foreground">{t.routes.a.badge}</Badge>
              <Badge className="bg-primary text-primary-foreground">{t.routes.b.badge}</Badge>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-border/70 bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{t.routes.a.title}</h3>
                <Badge className="bg-accent text-accent-foreground">{t.routes.a.badge}</Badge>
              </div>
              <p className="mt-3 font-editorial text-sm leading-relaxed text-muted-foreground">
                {t.routes.a.description}
              </p>
              <Separator className="my-5" />
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-[oklch(var(--accent))]">{t.routes.a.suitable.split(":")[0]}:</span>
                  {t.routes.a.suitable.split(":")[1]}
                </li>
                <li>
                  <span className="text-[oklch(var(--accent))]">{t.routes.a.warning.split(":")[0]}:</span>
                  {t.routes.a.warning.split(":")[1]}
                </li>
              </ul>
            </Card>

            <Card className="border-border/70 bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{t.routes.b.title}</h3>
                <Badge className="bg-primary text-primary-foreground">{t.routes.b.badge}</Badge>
              </div>
              <p className="mt-3 font-editorial text-sm leading-relaxed text-muted-foreground">
                {t.routes.b.description}
              </p>
              <Separator className="my-5" />
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-[oklch(var(--accent))]">{t.routes.b.suitable.split(":")[0]}:</span>
                  {t.routes.b.suitable.split(":")[1]}
                </li>
                <li>
                  <span className="text-[oklch(var(--accent))]">{t.routes.b.warning.split(":")[0]}:</span>
                  {t.routes.b.warning.split(":")[1]}
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="diagonal-bottom bg-card text-card-foreground grain">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight">{t.map.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.map.description}
              </p>
              <div className="mt-5 space-y-2 text-sm">
                <div className="text-muted-foreground">{t.map.links}</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center rounded-lg border border-border/70 bg-background/40 px-3 py-2 text-xs hover:bg-background/60"
                    href="https://maps.app.goo.gl/rnCzM4TXevbrBbLJ9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.map.open_google_maps}
                  </a>
                  <a
                    className="inline-flex items-center rounded-lg border border-border/70 bg-background/40 px-3 py-2 text-xs hover:bg-background/60"
                    href={payload.source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.map.source}
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-background/30">
                <iframe
                  title="Falaises de Cassis Google Map"
                  src={embedIframeSrc}
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{t.reviews.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.reviews.description}
              </p>
            </div>
            <a
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              href={payload.source.url}
              target="_blank"
              rel="noreferrer"
            >
              {t.reviews.view_source.replace("{name}", payload.source.name).replace("{place}", payload.source.place)}
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {payload.reviews.map((r, idx) => (
              <Card key={idx} className="border-border/70 bg-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">{r.author}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.time}</div>
                  </div>
                  <Stars rating={r.rating} />
                </div>
                <p className="mt-3 font-editorial text-sm leading-relaxed text-foreground/90">
                  {r.text}
                </p>
              </Card>
            ))}
          </div>

          <Separator className="my-10" />

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {imagePool.map((img) => (
              <button
                key={img.src}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-muted/30"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,oklch(0.12_0.03_240)_0%,transparent_60%)] opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-2 left-2 rounded-lg bg-background/70 px-2 py-1 text-[10px] text-muted-foreground backdrop-blur">
                  {t.reviews.click_to_enlarge}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="diagonal-top bg-card text-card-foreground grain">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{t.blog.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.blog.description}
              </p>
            </div>
            <Button
              variant="outline"
              className="w-fit border-primary/40 bg-background/40"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t.blog.back_to_top}
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="grid gap-8 md:grid-cols-12">
            <aside className="md:col-span-4">
              <div className="sticky top-20 rounded-2xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-semibold">{t.blog.toc}</div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  {t.blog.toc_items.map(
                    (item: string) => (
                      <button
                        key={item}
                        className="w-full rounded-lg px-2 py-2 text-left text-sm text-muted-foreground hover:bg-background/40 hover:text-foreground"
                        onClick={() => {
                          const hs = Array.from(document.querySelectorAll("#blog h2"));
                          const target = hs.find((h) => (h.textContent || "").toLowerCase().includes(item.toLowerCase().substring(0, 10)));
                          target?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </aside>

            <article className="md:col-span-8 mx-auto max-w-2xl">
              <div className="mb-10 overflow-hidden rounded-3xl border border-border/70">
                <img 
                  src={featuredImg} 
                  alt="Featured view of Falaises de Cassis" 
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
                <div className="bg-background/40 p-4 text-center text-sm italic text-muted-foreground">
                  {lang === 'fr' ? 'Une vue imprenable sur les falaises de Cassis' : lang === 'ja' ? 'カシスの懸崖の素晴らしい眺め' : 'A breathtaking view of the Cassis cliffs'}
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/20 p-6 md:p-8 shadow-sm">
                <div className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none prose-headings:scroll-mt-24 prose-a:text-[oklch(var(--accent))] prose-a:underline-offset-4 prose-strong:text-foreground prose-h1:text-center prose-h1:mb-8`}>
                  <Streamdown>{blogMd}</Streamdown>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/70 bg-background py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground">
          {t.footer.support}
        </div>
      </footer>

      <Dialog open={!!lightbox} onOpenChange={(v) => (!v ? setLightbox(null) : undefined)}>
        <DialogContent className="max-w-4xl border-border/70 bg-background text-foreground">
          <DialogHeader>
            <DialogTitle className="text-base">{lightbox?.alt}</DialogTitle>
          </DialogHeader>
          {lightbox ? (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[70vh] w-full rounded-xl object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  );
}

