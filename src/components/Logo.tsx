import logoUrl from "@/assets/insight-logo-final.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex items-center">
      <img
        src={logoUrl}
        alt="Insight Stability Center — إنسايت لدراسات الثبات"
        className={`h-12 w-auto md:h-14 object-contain ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
}
