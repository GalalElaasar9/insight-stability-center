import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ArrowRight, FileText, FlaskConical, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

interface SearchResult {
  type: "page" | "service";
  title: string;
  description?: string;
  to: string;
}

export function SiteSearch() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const allResults = useMemo<SearchResult[]>(
    () => [
      { type: "page", title: t.nav.home, to: "/" },
      { type: "page", title: t.nav.about, to: "/about" },
      { type: "page", title: t.nav.services, to: "/services" },
      { type: "page", title: t.nav.process, to: "/process" },
      { type: "page", title: t.nav.certifications, to: "/certifications" },
      { type: "page", title: t.nav.contact, to: "/contact" },
      ...t.services.items.map((s) => ({
        type: "service" as const,
        title: s.t,
        description: s.d,
        to: "/services",
      })),
    ],
    [t]
  );

  const q = query.trim().toLowerCase();
  const filtered = q
    ? allResults.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description?.toLowerCase().includes(q)
      )
    : [];

  const pages = filtered.filter((r) => r.type === "page");
  const services = filtered.filter((r) => r.type === "service");

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <div
        className={`flex items-center gap-3 rounded-2xl border bg-white/95 px-4 py-3 shadow-elegant backdrop-blur transition-all ${
          open ? "border-accent ring-2 ring-accent/20" : "border-white/40"
        }`}
      >
        <Search className="h-5 w-5 shrink-0 text-accent" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={t.search.placeholder}
          className="flex-1 bg-transparent text-sm text-navy outline-none placeholder:text-navy/50 md:text-base"
          aria-label={t.search.placeholder}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="text-navy/50 transition hover:text-navy"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && q && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-elegant">
          {filtered.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              {t.search.noResults}
            </div>
          ) : (
            <>
              {pages.length > 0 && (
                <div className="mb-1">
                  <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {t.search.pages}
                  </div>
                  {pages.map((r) => (
                    <Link
                      key={`p-${r.to}-${r.title}`}
                      to={r.to}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-navy transition hover:bg-accent/10"
                    >
                      <FileText className="h-4 w-4 text-accent" />
                      <span className="flex-1 font-medium">{r.title}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover:opacity-100 rtl:rotate-180" />
                    </Link>
                  ))}
                </div>
              )}
              {services.length > 0 && (
                <div>
                  <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {t.search.services}
                  </div>
                  {services.map((r, i) => (
                    <Link
                      key={`s-${i}`}
                      to={r.to}
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                      }}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-accent/10"
                    >
                      <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div className="flex-1">
                        <div className="font-medium text-navy">{r.title}</div>
                        {r.description && (
                          <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                            {r.description}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100 rtl:rotate-180" />
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
