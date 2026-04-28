import { Link, createFileRoute } from "@tanstack/react-router";
import { Thermometer, Clock, LineChart, FlaskConical, Beaker, ClipboardCheck, Microscope, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

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

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={s.t} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 transition-all group-hover:bg-accent/10" />
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{s.t}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t.services.duration}</div>
                      <div className="font-mono text-sm font-semibold text-navy">{s.dur}</div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                      {t.cta.readMore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-navy p-10 text-center text-navy-foreground shadow-elegant md:p-14">
          <h3 className="text-balance text-2xl font-bold md:text-3xl">{t.contact.subtitle}</h3>
          <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground shadow-glow hover:bg-accent/90">
            <Link to="/contact">{t.cta.getQuote} <ArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" /></Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
