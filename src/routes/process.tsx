import { createFileRoute } from "@tanstack/react-router";
import { Package, Thermometer, FlaskConical, ClipboardCheck, LineChart, FileCheck2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Study Process — Nova Stability Center" },
      { name: "description", content: "A transparent six-stage stability study process, from sample receiving to signed Ministry of Health–ready report." },
      { property: "og:title", content: "Our Study Process" },
      { property: "og:description", content: "Six controlled, fully documented stages." },
    ],
  }),
  component: Process,
});

const icons = [Package, Thermometer, FlaskConical, ClipboardCheck, LineChart, FileCheck2];

function Process() {
  const { t } = useLang();
  return (
    <PageLayout>
      <PageHeader eyebrow={t.nav.process} title={t.process.title} subtitle={t.process.subtitle} />

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <ol className="relative space-y-10">
          <div className="absolute inset-y-2 start-6 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent md:start-8" aria-hidden />
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.t} className="relative grid gap-5 ps-20 md:ps-24">
                <div className="absolute start-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow md:h-16 md:w-16">
                  <Icon className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <div className="rounded-2xl border border-border bg-background p-7 shadow-card transition hover:border-accent/40 hover:shadow-elegant">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-accent">STEP {String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl">{step.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.d}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </PageLayout>
  );
}
