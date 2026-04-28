import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.5", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <PageLayout>
      <PageHeader eyebrow={t.nav.process} title={t.process.title} subtitle={t.process.subtitle} />

      <section className="mx-auto max-w-5xl px-4 py-24 md:px-8">
        <ol ref={timelineRef} className="relative space-y-12">
          {/* Static track */}
          <div className="absolute inset-y-2 start-6 w-px bg-border md:start-8" aria-hidden />
          {/* Animated progress track */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute inset-y-2 start-6 w-px bg-gradient-to-b from-accent via-accent to-accent/40 md:start-8"
            aria-hidden
          />

          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.li
                key={step.t}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-5 ps-20 md:ps-24"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute start-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow md:h-16 md:w-16"
                >
                  <div className="absolute inset-0 rounded-2xl bg-accent/40 blur-xl" />
                  <Icon className="relative h-5 w-5 md:h-7 md:w-7" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border bg-background p-7 shadow-card transition-colors hover:border-accent/40 hover:shadow-elegant"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-accent">STEP {String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl">{step.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.d}</p>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </PageLayout>
  );
}
