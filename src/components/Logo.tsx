import logoUrl from "@/assets/insight-logo-clean.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex items-center">
      <img
        src={logoUrl}
        alt="Insight Stability Center"
        className={`h-11 w-auto md:h-12 ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
