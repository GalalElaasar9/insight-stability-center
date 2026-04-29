import { Link, createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Beaker, FlaskConical, ShieldCheck, Microscope, ClipboardCheck, Thermometer, LineChart, FileCheck2, Package, Clock, Sparkles } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { SiteSearch } from "@/components/SiteSearch";
import { HeroBackground } from "@/components/HeroBackground";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import heroLab from "@/assets/hero-lab.jpg";
import chamber from "@/assets/stability-chamber.jpg";
import aboutImg from "@/assets/about-science.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Insight Stability Center — Certified Pharmaceutical & Cosmetic Testing" },
      { name: "description", content: "Independent CRO offering ICH-compliant stability studies, pharmaceutical and cosmetic testing with Ministry of Health–recognized reports." },
      { property: "og:title", content: "Insight Stability Center" },
      { property: "og:description", content: "Certified stability studies and pharmaceutical testing services." },
    ],
  }),
  component: Home,
});

const serviceIcons = [Thermometer, Clock, LineChart, FlaskConical, Beaker, ClipboardCheck, Microscope];
const processIcons = [Package, Thermometer, FlaskConical, ClipboardCheck, LineChart, FileCheck2];

const stats = [
  { value: 10, suffix: "+" },
  { value: 500, suffix: "+" },
  { value: 2000, suffix: "+" },
  { value: 99.9, suffix: "%", decimals: 1 },
];

function Home() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <PageLayout>
      {/* HERO with parallax */}
      <section ref={heroRef} className="relative overflow-hidden bg-navy text-navy-foreground">
        <motion.div style={{ y: bgY, opacity: fadeOut }} className="absolute inset-0">
          <img src={heroLab} alt="" className="h-full w-full object-cover opacity-25" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/60" />
        </motion.div>
        <HeroBackground />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 md:py-36 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-accent"
            >
              <Sparkles className="h-3 w-3" />
              {t.hero.eyebrow}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {t.hero.title.split(" ").map((word, i, arr) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                  className="inline-block"
                >
                  {word}{i < arr.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="group relative overflow-hidden bg-accent text-accent-foreground shadow-glow hover:bg-accent/90">
                <Link to="/services">
                  <span className="relative z-10 flex items-center">{t.cta.explore} <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" /></span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass border-white/30 text-navy-foreground hover:bg-white/15">
                <Link to="/contact">{t.cta.contact}</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6"
            >
              <SiteSearch />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-[0.2em] text-navy-foreground/50"
            >
              <span>ICH Q1A(R2)</span>
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              <span>ISO 17025</span>
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              <span>GLP</span>
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              <span>MOH Approved</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imgY }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-50 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
                <img src={chamber} alt="Stability chamber with pharmaceutical samples" className="h-full w-full object-cover" width={1280} height={960} loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -start-6 rounded-2xl glass-card p-5 shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent">ICH Q1A(R2)</div>
                  <div className="text-sm font-semibold">Compliant Chambers</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-4 -end-4 rounded-2xl glass-card p-4 shadow-elegant"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider">Live · 25°C / 60%RH</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute inset-x-0 bottom-6 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
          >
            <div className="h-2 w-0.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <StaggerGroup className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { ...stats[0], k: t.stats.years },
              { ...stats[1], k: t.stats.clients },
              { ...stats[2], k: t.stats.studies },
              { ...stats[3], k: t.stats.accuracy },
            ].map((s, i) => (
              <StaggerItem key={i} className="group relative border-s-2 border-accent/30 ps-5 transition-all hover:border-accent">
                <div className="font-display text-5xl font-bold text-gradient-accent md:text-6xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.k}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-4 py-28 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl shadow-elegant"
            >
              <img src={aboutImg} alt="Pharmaceutical laboratory" className="aspect-[4/3] w-full object-cover" width={1280} height={960} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 to-transparent" />
              <div className="absolute bottom-6 start-6 rounded-xl glass-card p-3 text-white">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">EST. 2014</div>
                <div className="text-sm font-semibold">Scientific Excellence</div>
              </div>
            </motion.div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mb-3 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-accent">{t.nav.about}</div>
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{t.aboutPreview.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.aboutPreview.body}</p>
            <Button asChild className="group mt-8 bg-navy text-navy-foreground hover:bg-navy/90">
              <Link to="/about">{t.cta.readMore} <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative overflow-hidden bg-surface py-28">
        <div className="absolute inset-0 grid-lines-dark opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-3 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-accent">{t.nav.services}</div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{t.servicesPreview.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.servicesPreview.subtitle}</p>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.slice(0, 6).map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <StaggerItem key={s.t}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-card transition-colors hover:border-accent/40 hover:shadow-elegant"
                  >
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-lg font-semibold">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                        <span className="font-mono text-muted-foreground">{s.dur}</span>
                        <Link to="/services" className="font-semibold text-accent transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                          {t.cta.readMore} →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-4 py-28 md:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-accent">{t.nav.process}</div>
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{t.processPreview.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.processPreview.subtitle}</p>
        </Reveal>
        <StaggerGroup className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {t.process.steps.map((step, i) => {
            const Icon = processIcons[i];
            return (
              <StaggerItem key={step.t}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "var(--accent)" }}
                  className="relative h-full rounded-2xl border border-border bg-background p-5 shadow-card transition-colors"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="text-sm font-semibold">{step.t}</h3>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* CERTS PREVIEW */}
      <section className="relative overflow-hidden bg-navy py-28 text-navy-foreground">
        <HeroBackground />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-3 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-accent">{t.nav.certifications}</div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{t.certPreview.title}</h2>
            <p className="mt-4 text-navy-foreground/70">{t.certPreview.subtitle}</p>
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.certs.items.map((c) => (
              <StaggerItem key={c.t}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full rounded-2xl glass-card p-6 transition hover:border-accent/60"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent shadow-glow transition-transform group-hover:scale-110">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-navy-foreground/70">{c.d}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-5xl px-4 py-28 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-accent p-10 text-accent-foreground shadow-elegant md:p-16">
            <div className="absolute inset-0 grid-lines opacity-30" />
            <motion.div
              animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"
            />
            <div className="relative grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{t.contact.title}</h2>
                <p className="mt-4 max-w-lg text-lg text-accent-foreground/90">{t.contact.subtitle}</p>
              </div>
              <div className="flex md:justify-end">
                <Button asChild size="lg" className="group bg-navy text-navy-foreground hover:bg-navy/90">
                  <Link to="/contact">{t.cta.getQuote} <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
