import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Beaker, FlaskConical, ShieldCheck, Microscope, ClipboardCheck, Thermometer, LineChart, FileCheck2, Package, Clock } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import heroLab from "@/assets/hero-lab.jpg";
import chamber from "@/assets/stability-chamber.jpg";
import aboutImg from "@/assets/about-science.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Stability Center — Certified Pharmaceutical & Cosmetic Testing" },
      { name: "description", content: "Independent CRO offering ICH-compliant stability studies, pharmaceutical and cosmetic testing with Ministry of Health–recognized reports." },
      { property: "og:title", content: "Nova Stability Center" },
      { property: "og:description", content: "Certified stability studies and pharmaceutical testing services." },
    ],
  }),
  component: Home,
});

const serviceIcons = [Thermometer, Clock, LineChart, FlaskConical, Beaker, ClipboardCheck, Microscope];
const processIcons = [Package, Thermometer, FlaskConical, ClipboardCheck, LineChart, FileCheck2];

function Home() {
  const { t } = useLang();

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
        <div className="absolute inset-0">
          <img src={heroLab} alt="" className="h-full w-full object-cover opacity-25" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/60" />
        </div>
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-accent/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {t.hero.eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl animate-fade-up">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80 animate-fade-up [animation-delay:120ms]">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
              <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-glow hover:bg-accent/90">
                <Link to="/services">{t.cta.explore} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-navy-foreground hover:bg-white/10">
                <Link to="/contact">{t.cta.contact}</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant animate-scale-in">
              <img src={chamber} alt="Stability chamber with pharmaceutical samples" className="h-full w-full object-cover" width={1280} height={960} loading="eager" />
            </div>
            <div className="absolute -bottom-6 -start-6 rounded-2xl border border-white/10 bg-navy/90 p-5 backdrop-blur shadow-elegant animate-fade-up [animation-delay:400ms]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent">ICH Q1A(R2)</div>
                  <div className="text-sm font-semibold">Compliant Chambers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 md:grid-cols-4 md:px-8">
          {[
            { v: "10+", k: t.stats.years },
            { v: "500+", k: t.stats.clients },
            { v: "2000+", k: t.stats.studies },
            { v: "99.9%", k: t.stats.accuracy },
          ].map((s, i) => (
            <div key={i} className="border-s-2 border-accent/40 ps-5">
              <div className="bg-gradient-accent bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img src={aboutImg} alt="Pharmaceutical laboratory" className="aspect-[4/3] w-full object-cover" width={1280} height={960} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent" />
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.nav.about}</div>
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">{t.aboutPreview.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.aboutPreview.body}</p>
            <Button asChild className="mt-8 bg-navy text-navy-foreground hover:bg-navy/90">
              <Link to="/about">{t.cta.readMore} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.nav.services}</div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl">{t.servicesPreview.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.servicesPreview.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.slice(0, 6).map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 transition-all group-hover:bg-accent/10" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                      <span className="font-mono text-muted-foreground">{s.dur}</span>
                      <Link to="/services" className="font-semibold text-accent group-hover:underline">
                        {t.cta.readMore} →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.nav.process}</div>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">{t.processPreview.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.processPreview.subtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {t.process.steps.map((step, i) => {
            const Icon = processIcons[i];
            return (
              <div key={step.t} className="relative rounded-2xl border border-border bg-background p-5 shadow-card transition hover:border-accent/40">
                <div className="mb-3 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="text-sm font-semibold">{step.t}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* CERTS PREVIEW */}
      <section className="bg-gradient-navy py-24 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.nav.certifications}</div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl">{t.certPreview.title}</h2>
            <p className="mt-4 text-navy-foreground/70">{t.certPreview.subtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.certs.items.map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-accent/50 hover:bg-white/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="mx-auto max-w-5xl px-4 py-24 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-accent p-10 text-accent-foreground shadow-elegant md:p-14">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">{t.contact.title}</h2>
              <p className="mt-3 max-w-lg text-accent-foreground/85">{t.contact.subtitle}</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
                <Link to="/contact">{t.cta.getQuote} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
