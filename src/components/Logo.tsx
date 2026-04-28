import { useLang } from "@/i18n/LanguageContext";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { t } = useLang();
  const text = variant === "light" ? "text-navy-foreground" : "text-navy";
  const sub = variant === "light" ? "text-navy-foreground/70" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 shrink-0">
        <div className="absolute inset-0 rounded-xl bg-gradient-accent shadow-glow" />
        <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full p-2 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 6v10l-5 12a5 5 0 0 0 5 6h20a5 5 0 0 0 5-6l-5-12V6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 6h20" strokeLinecap="round" />
          <circle cx="20" cy="26" r="2" fill="currentColor" />
          <circle cx="16" cy="30" r="1" fill="currentColor" />
          <circle cx="24" cy="29" r="1.2" fill="currentColor" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className={`font-display text-base font-bold tracking-tight ${text}`}>{t.brand}</div>
        <div className={`text-[10px] uppercase tracking-[0.2em] ${sub}`}>{t.tagline}</div>
      </div>
    </div>
  );
}
