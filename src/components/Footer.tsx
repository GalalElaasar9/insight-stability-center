import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-navy-foreground/70">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-navy-foreground/80 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-navy-foreground/75">
              <li><Link to="/" className="hover:text-accent">{t.nav.home}</Link></li>
              <li><Link to="/about" className="hover:text-accent">{t.nav.about}</Link></li>
              <li><Link to="/process" className="hover:text-accent">{t.nav.process}</Link></li>
              <li><Link to="/certifications" className="hover:text-accent">{t.nav.certifications}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-sm text-navy-foreground/75">
              {t.services.items.slice(0, 5).map((s) => (
                <li key={s.t}><Link to="/services" className="hover:text-accent">{s.t}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm text-navy-foreground/75">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{t.contact.addressValue}</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><a href="mailto:info@novastability.com" className="hover:text-accent">info@novastability.com</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><a href="tel:+966000000000" dir="ltr" className="hover:text-accent">+966 00 000 0000</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-navy-foreground/60 md:flex-row">
          <p>© {year} {t.brand}. {t.footer.rights}</p>
          <p className="font-mono tracking-wider">ISO 17025 · GLP · ICH Q1A(R2)</p>
        </div>
      </div>
    </footer>
  );
}
