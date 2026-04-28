import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Insight Stability Center" },
      { name: "description", content: "Request a quote or send us your project details. We respond within one business day." },
      { property: "og:title", content: "Contact Insight Stability Center" },
      { property: "og:description", content: "Get in touch with our scientific team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      <PageHeader eyebrow={t.nav.contact} title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-background p-8 shadow-card md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.name}</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{t.contact.company}</Label>
                <Input id="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.email}</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.contact.phone}</Label>
                <Input id="phone" type="tel" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">{t.contact.message}</Label>
                <Textarea id="message" rows={5} required />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-navy text-navy-foreground hover:bg-navy/90 sm:w-auto">
              {sent ? <><CheckCircle2 className="me-2 h-4 w-4" /> {t.contact.sent}</> : <>{t.cta.send} <Send className="ms-2 h-4 w-4 rtl:rotate-180" /></>}
            </Button>
          </form>

          <div className="space-y-5">
            {[
              { icon: MapPin, title: t.contact.address, value: t.contact.addressValue },
              { icon: Mail, title: t.contact.email, value: "insight.laboratories2025@gmail.com", href: "mailto:insight.laboratories2025@gmail.com", ltr: true },
              { icon: Phone, title: t.contact.phone, value: "010 211 131 44 • 015 0044 29 84 • 0109 547 2241", href: "tel:+201021113144", ltr: true },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 shadow-card transition hover:border-accent/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} dir={c.ltr ? "ltr" : undefined} className="mt-1 block font-medium text-navy hover:text-accent">{c.value}</a>
                  ) : (
                    <div className="mt-1 font-medium text-navy">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <div className="relative h-64 bg-gradient-navy">
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-navy-foreground">
                    <MapPin className="mx-auto h-10 w-10 text-accent" />
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-accent">Map Location</div>
                    <div className="mt-1 text-sm text-navy-foreground/80">{t.contact.addressValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
