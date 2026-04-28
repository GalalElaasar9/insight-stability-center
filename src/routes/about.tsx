import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Target, Eye, Heart, Shield, Zap, Lock } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import aboutImg from "@/assets/about-science.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Insight Stability Center" },
      { name: "description", content: "Independent CRO specialized in ICH-compliant stability studies and analytical testing for pharmaceutical and cosmetic industries." },
      { property: "og:title", content: "About Insight Stability Center" },
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

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={aboutImg} alt="Laboratory" className="aspect-[4/3] w-full object-cover" width={1280} height={960} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent" />
            </motion.div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.about.whoTitle}</div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{t.about.whoTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.whoBody}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-24">
        <div className="absolute inset-0 grid-lines-dark opacity-40" />
        <StaggerGroup className="relative mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8">
          {[
            { icon: Target, t: t.about.missionTitle, d: t.about.missionBody },
            { icon: Eye, t: t.about.visionTitle, d: t.about.visionBody },
          ].map((c) => (
            <StaggerItem key={c.t}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-border bg-background p-8 shadow-card transition-colors hover:border-accent/40 hover:shadow-elegant">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{c.t}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.about.valuesTitle}</div>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{t.about.valuesTitle}</h2>
        </Reveal>
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <StaggerItem key={v.t}>
                <motion.div whileHover={{ y: -6 }} className="group h-full rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40 hover:shadow-elegant">
                  <motion.div whileHover={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 0.5 }} className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Heart className="h-4 w-4" /> {t.about.whyTitle}
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{t.about.whyTitle}</h2>
          </Reveal>
          <StaggerGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.about.why.map((w) => (
              <StaggerItem key={w}>
                <motion.div whileHover={{ x: 4 }} className="flex h-full items-start gap-3 rounded-xl glass-card p-5 transition hover:border-accent/40">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{w}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </PageLayout>
  );
}
