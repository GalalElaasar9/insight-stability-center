import { useLang } from "@/i18n/LanguageContext";
import logoUrl from "@/assets/insight-logo.jpeg";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { t } = useLang();
  const text = variant === "light" ? "text-navy-foreground" : "text-navy";
  const sub = variant === "light" ? "text-navy-foreground/70" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/5 shadow-card bg-white">
        <img
          src={logoUrl}
          alt="Insight Stability Center"
          className="h-full w-full object-cover scale-[2.2] object-[18%_45%]"
        />
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-bold tracking-tight ${text}`}>{t.brand}</div>
        <div className={`text-[10px] uppercase tracking-[0.2em] ${sub}`}>{t.tagline}</div>
      </div>
    </div>
  );
}
