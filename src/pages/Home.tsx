/*
Design system reminder:
- Mediterranean Coastal Brutalism: deep sea background, limestone text, rust accent, diagonal sections, grain overlay
- Headings: Fraunces, Body: Spline Sans, Long-form: Newsreader
*/

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Streamdown } from "streamdown";

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

import heroImg from "@/assets/hero_google.jpg";
import blogMd from "@/assets/blog.md?raw";
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

  useEffect(() => {
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  const payload = reviewsData as ReviewsPayload;

  const imagePool = useMemo(
    () => [
      { src: review01, alt: "Google Maps 晒图 1" },
      { src: review02, alt: "Google Maps 晒图 2" },
      { src: review03, alt: "Google Maps 晒图 3" },
      { src: review04, alt: "Google Maps 晒图 4" },
      { src: review05, alt: "Google Maps 晒图 5" },
      { src: review06, alt: "Google Maps 晒图 6" },
      { src: review07, alt: "Google Maps 晒图 7" },
      { src: review08, alt: "Google Maps 晒图 8" },
    ],
    [],
  );

  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <div className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur grain">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-3">
            <div className="text-lg font-semibold tracking-tight">Falaises de Cassis</div>
            <div className="hidden text-xs text-muted-foreground md:block">卡西斯悬崖海岸 · 法国南部</div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" onClick={() => document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" })}>
              路线
            </Button>
            <Button variant="ghost" size="sm" onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}>
              地图
            </Button>
            <Button variant="ghost" size="sm" onClick={() => document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })}>
              真实评价
            </Button>
            <Button variant="ghost" size="sm" onClick={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })}>
              攻略博客
            </Button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Falaises de Cassis 海岸悬崖（来自 Google Maps 评价晒图）"
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
              <Badge className="bg-primary text-primary-foreground">观景台</Badge>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                地中海海岸线
              </Badge>
              <Badge className="bg-accent text-accent-foreground">徒步 / 自驾</Badge>
            </div>

            <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
              奶白石灰岩与深蓝海
              <br />
              在悬崖边撞上风
            </h1>

            <p className="font-editorial mt-5 text-base leading-relaxed text-foreground/90 md:text-lg">
              Falaises de Cassis 不是“一个点”，而是一段连续的悬崖海岸风景带。最像它的形容词不是“热门”，
              而是——层次、风声、与忽明忽暗的海。
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-border/70 bg-background/70 px-4 py-2 backdrop-blur">
                <div className="text-xs text-muted-foreground">Google Maps</div>
                <div className="mt-1 flex items-center gap-3">
                  <Stars rating={4.9} />
                  <span className="text-xs text-muted-foreground">2,382 条评价</span>
                </div>
              </div>

              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => document.getElementById("routes")?.scrollIntoView({ behavior: "smooth" })}
              >
                直接看路线怎么走
              </Button>
              <Button
                variant="outline"
                className="border-primary/40 bg-background/60 hover:bg-background"
                onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
              >
                打开地图定位
              </Button>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {["原生态海岸风景", "淡季人少静谧", "风大但出片"].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border/60 bg-background/55 px-4 py-3 text-sm backdrop-blur"
                >
                  <div className="text-[oklch(var(--accent))]">▍</div>
                  <div className="mt-1 font-medium">{t}</div>
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
              <h2 className="text-3xl font-bold tracking-tight">30 秒速懂</h2>
              <p className="mt-3 font-editorial text-muted-foreground">
                它不是一个“观景台打卡点”。它是一段连续的悬崖海岸：每走几步，光线与海色都在变化。
              </p>
              <Separator className="my-5" />
              <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
                <div>
                  <span className="text-[oklch(var(--accent))]">适合：</span>
                  想要原生态海岸风景、能接受适度徒步、喜欢悬崖观景、追求小众静谧感的旅行者。
                </div>
                <div>
                  <span className="text-[oklch(var(--accent))]">慎去：</span>
                  只想轻松拍照、不愿走路、怕晒怕大风、完全不想消耗体力的人群。
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-border/70 bg-background/40 p-5">
                  <div className="text-sm font-semibold">你会看到什么</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    深蓝到薄荷蓝的地中海 + 奶白石灰岩 + 赭色岩壁；风、光线、视角持续变化。
                  </p>
                </Card>
                <Card className="border-border/70 bg-background/40 p-5">
                  <div className="text-sm font-semibold">怎么玩最不亏</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    上午徒步线（清晨体感好） + 傍晚公路观景线（蹲日落），两段衔接顺畅不绕路。
                  </p>
                </Card>
                <Card className="border-border/70 bg-background/40 p-5 md:col-span-2">
                  <div className="text-sm font-semibold">一句话策略</div>
                  <p className="mt-2 font-editorial text-sm leading-relaxed text-foreground/90">
                    把它当“线”而不是“点”：至少预留 2–3 小时，慢慢走，风景才会一段段“打开”。
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
              <h2 className="text-3xl font-bold tracking-tight">核心路线规划</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A 徒步环线（沉浸）与 B 山脊公路观景线（轻松），可单独玩，也可同天组合。
              </p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-secondary text-secondary-foreground">A：体力款</Badge>
              <Badge className="bg-primary text-primary-foreground">B：轻松款</Badge>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-border/70 bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">A 线 · 原生态徒步环线</h3>
                <Badge className="bg-accent text-accent-foreground">徒步</Badge>
              </div>
              <p className="mt-3 font-editorial text-sm leading-relaxed text-muted-foreground">
                卡西斯小镇 → Port Miou → Port Pin → 悬崖观景台 → 返回卡西斯。
                近距离感受海岸岩壁与小众海湾。
              </p>
              <Separator className="my-5" />
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-[oklch(var(--accent))]">适合：</span>喜欢徒步、想沉浸式体验的人
                </li>
                <li>
                  <span className="text-[oklch(var(--accent))]">提醒：</span>全程无补给点，水和能量必须自带
                </li>
              </ul>
            </Card>

            <Card className="border-border/70 bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">B 线 · 山脊公路观景线</h3>
                <Badge className="bg-primary text-primary-foreground">自驾/骑行</Badge>
              </div>
              <p className="mt-3 font-editorial text-sm leading-relaxed text-muted-foreground">
                卡西斯小镇 → Route des Crêtes → Falaises de Cassis 核心悬崖段。
                视野开阔，移动观景台。
              </p>
              <Separator className="my-5" />
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-[oklch(var(--accent))]">适合：</span>想快速看全景、行程更轻松的人
                </li>
                <li>
                  <span className="text-[oklch(var(--accent))]">提醒：</span>部分时段/周日可能对社会车辆关闭
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
              <h2 className="text-3xl font-bold tracking-tight">地图与定位</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                下面为你提供的 Google Maps 嵌入。建议在出发前再核对：道路封闭、火险管制与天气。
              </p>
              <div className="mt-5 space-y-2 text-sm">
                <div className="text-muted-foreground">快捷链接</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center rounded-lg border border-border/70 bg-background/40 px-3 py-2 text-xs hover:bg-background/60"
                    href="https://maps.app.goo.gl/rnCzM4TXevbrBbLJ9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    打开 Google Maps（分享链接）
                  </a>
                  <a
                    className="inline-flex items-center rounded-lg border border-border/70 bg-background/40 px-3 py-2 text-xs hover:bg-background/60"
                    href={payload.source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    评价与晒图来源
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
              <h2 className="text-3xl font-bold tracking-tight">真实评价与晒图</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                文案与图片来自 Google Maps 的真实用户评价（为排版做了截断/精简）。
              </p>
            </div>
            <a
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
              href={payload.source.url}
              target="_blank"
              rel="noreferrer"
            >
              查看来源：{payload.source.name} · {payload.source.place}
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
                  点击放大
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
              <h2 className="text-3xl font-bold tracking-tight">攻略博客（预留位置）</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                这部分为长文攻略：交通、路线、淡旺季、风险与预算。可直接复制保存到自己的行程笔记里。
              </p>
            </div>
            <Button
              variant="outline"
              className="w-fit border-primary/40 bg-background/40"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              回到顶部
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="grid gap-8 md:grid-cols-12">
            <aside className="md:col-span-4">
              <div className="sticky top-20 rounded-2xl border border-border/70 bg-background/35 p-5">
                <div className="text-sm font-semibold">目录（快速跳转）</div>
                <p className="mt-2 text-xs text-muted-foreground">
                  点击可在页面内快速定位章节（基于文章标题）。
                </p>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  {["30 秒速懂", "交通全攻略", "核心路线规划", "分季节玩法指南", "风险与限制", "精准预算拆分", "小众打卡点位", "实测避坑指南", "权威信息来源", "不同人群真实体验总结"].map(
                    (t) => (
                      <button
                        key={t}
                        className="w-full rounded-lg px-2 py-2 text-left text-sm text-muted-foreground hover:bg-background/40 hover:text-foreground"
                        onClick={() => {
                          const hs = Array.from(document.querySelectorAll("#blog h2"));
                          const target = hs.find((h) => (h.textContent || "").includes(t));
                          target?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        {t}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </aside>

            <div className="md:col-span-8">
              <div className="rounded-2xl border border-border/70 bg-background/20 p-6 md:p-8">
                <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-[oklch(var(--accent))] prose-a:underline-offset-4 prose-strong:text-foreground">
                  <Streamdown>{blogMd}</Streamdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/70 bg-background py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground">
          For technical support of this website, please contact: claritleonelmnicol@gmail.com
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
    </div>
  );
}
