import { createFileRoute } from "@tanstack/react-router";
import { Check, Target, Eye, Heart, Shield, Zap, Lock } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import aboutImg from "@/assets/about-science.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nova Stability Center" },
      { name: "description", content: "Independent CRO specialized in ICH-compliant stability studies and analytical testing for pharmaceutical and cosmetic industries." },
      { property: "og:title", content: "About Nova Stability Center" },
      { property: "og:description", content: "Who we are, our mission, vision, values and why clients choose us." },
    ],
  }),
  component: About,
});

const valueIcons = [Shield, Target, Lock, Zap];

function About() {
  const { t } = useLang();
  return (
    <PageLayout>
      <PageHeader eyebrow={t.nav.about} title={t.about.title} subtitle={t.aboutPreview.body} />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img src={aboutImg} alt="Laboratory" className="aspect-[4/3] w-full object-cover" width={1280} height={960} loading="lazy" />
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.about.whoTitle}</div>
            <h2 className="text-3xl font-bold md:text-4xl">{t.about.whoTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.about.whoBody}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8">
          {[
            { icon: Target, t: t.about.missionTitle, d: t.about.missionBody },
            { icon: Eye, t: t.about.visionTitle, d: t.about.visionBody },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-background p-8 shadow-card">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{c.t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.about.valuesTitle}</div>
          <h2 className="text-3xl font-bold md:text-4xl">{t.about.valuesTitle}</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={v.t} className="group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-navy py-20 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Heart className="h-4 w-4" /> {t.about.whyTitle}
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">{t.about.whyTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.about.why.map((w) => (
              <div key={w} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-accent/40 hover:bg-white/10">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
