import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, BadgeCheck, FileBadge } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Nova Stability Center" },
      { name: "description", content: "Ministry of Health approval, ISO 17025 accreditation, GLP compliance and ISO 9001 certification." },
      { property: "og:title", content: "Certifications & Accreditations" },
      { property: "og:description", content: "Independently verified quality systems." },
    ],
  }),
  component: Certs,
});

const icons = [ShieldCheck, BadgeCheck, Award, FileBadge];

function Certs() {
  const { t } = useLang();
  return (
    <PageLayout>
      <PageHeader eyebrow={t.nav.certifications} title={t.certs.title} subtitle={t.certs.subtitle} />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {t.certs.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <article key={c.t} className="group relative overflow-hidden rounded-3xl border border-border bg-background shadow-card transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-navy text-navy-foreground">
                  <div className="absolute inset-0 grid-lines opacity-40" />
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/50 bg-accent/10 text-accent shadow-glow">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Certified</div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold">{c.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
