import { useLang } from "@/i18n/LanguageContext";
import iconUrl from "@/assets/insight-icon.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { t } = useLang();
  const text = variant === "light" ? "text-navy-foreground" : "text-navy";
  const sub = variant === "light" ? "text-accent" : "text-accent";
  return (
    <div className="flex flex-col items-center gap-1 leading-none">
      <img
        src={iconUrl}
        alt="Insight Stability Center"
        className="h-12 w-12 md:h-14 md:w-14 object-contain"
      />
      <div className="text-center">
        <div className={`font-display text-[13px] md:text-sm font-bold tracking-tight ${text}`}>
          {t.brand}
        </div>
        <div className={`text-[9px] md:text-[10px] uppercase tracking-[0.22em] ${sub}`}>
          {t.tagline}
        </div>
      </div>
    </div>
  );
}
