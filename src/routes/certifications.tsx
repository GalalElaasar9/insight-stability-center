import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, FileBadge } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

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

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {t.certs.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={c.t}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-border bg-background shadow-card transition-colors hover:border-accent/40 hover:shadow-elegant"
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-navy text-navy-foreground">
                    <div className="absolute inset-0 grid-lines opacity-40" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute h-[500px] w-[500px] rounded-full border border-accent/20"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="absolute h-[350px] w-[350px] rounded-full border border-accent/15"
                    />
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl transition-all group-hover:bg-accent/50" />
                    <div className="relative flex flex-col items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent/60 bg-accent/15 text-accent shadow-glow backdrop-blur"
                      >
                        <div className="absolute inset-0 animate-pulse rounded-full bg-accent/10" />
                        <Icon className="relative h-11 w-11" />
                      </motion.div>
                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Certified · 0{i + 1}</div>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold">{c.t}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>
    </PageLayout>
  );
}
