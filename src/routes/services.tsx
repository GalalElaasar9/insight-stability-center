import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Thermometer, Clock, LineChart, FlaskConical, Beaker, ClipboardCheck, Microscope, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nova Stability Center" },
      { name: "description", content: "Stability studies, pharmaceutical and cosmetic testing, QC, and microbiological services." },
      { property: "og:title", content: "Laboratory Services — Nova Stability Center" },
      { property: "og:description", content: "Full-service stability and analytical testing under one roof." },
    ],
  }),
  component: Services,
});

const icons = [Thermometer, Clock, LineChart, FlaskConical, Beaker, ClipboardCheck, Microscope];

function Services() {
  const { t } = useLang();
  return (
    <PageLayout>
      <PageHeader eyebrow={t.nav.services} title={t.services.title} subtitle={t.services.subtitle} />

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={s.t}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-card transition-colors hover:border-accent/40 hover:shadow-elegant"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative flex flex-1 flex-col">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{s.t}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t.services.duration}</div>
                        <div className="font-mono text-sm font-semibold text-navy">{s.dur}</div>
                      </div>
                      <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-transform hover:translate-x-1 rtl:hover:-translate-x-1">
                        {t.cta.readMore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-center text-navy-foreground shadow-elegant md:p-16">
            <div className="absolute inset-0 grid-lines opacity-40" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
            />
            <div className="relative">
              <h3 className="text-balance text-2xl font-bold md:text-3xl lg:text-4xl">{t.contact.subtitle}</h3>
              <Button asChild size="lg" className="group mt-8 bg-accent text-accent-foreground shadow-glow hover:bg-accent/90">
                <Link to="/contact">{t.cta.getQuote} <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
