import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated molecular / scientific background with drifting orbs and
 * a subtle grid. Designed to sit behind hero sections.
 */
export function HeroBackground() {
  const reduced = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.45_0.2_255/0.55),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.16_260/0.55),transparent_55%)]" />

      {/* Grid */}
      <div className="absolute inset-0 grid-lines opacity-[0.15]" />

      {/* Drifting orbs */}
      {!reduced && (
        <>
          <motion.div
            className="absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-accent/30 blur-[120px]"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-sky/40 blur-[140px]"
            animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-navy/60 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
      }} />
    </div>
  );
}

export function SectionDivider({ variant = "wave", flip = false }: { variant?: "wave" | "angle" | "dots"; flip?: boolean }) {
  if (variant === "dots") {
    return (
      <div className="relative flex items-center justify-center py-8">
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute flex items-center gap-2 bg-background px-4">
          <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/40" />
        </div>
      </div>
    );
  }
  if (variant === "angle") {
    return (
      <div className={`relative h-16 ${flip ? "rotate-180" : ""}`} aria-hidden>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <polygon points="0,0 1440,60 0,60" fill="currentColor" className="text-surface" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`relative h-20 ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" className="text-surface" />
      </svg>
    </div>
  );
}
