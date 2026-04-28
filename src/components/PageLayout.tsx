import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75 animate-fade-up [animation-delay:120ms]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
