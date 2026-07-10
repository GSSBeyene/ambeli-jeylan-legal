import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/practice-areas", label: t("nav.practice") },
    { to: "/lawyers", label: t("nav.lawyers") },
    { to: "/articles", label: t("nav.articles") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/faqs", label: t("nav.faqs") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt={t("brand.name")} className="h-11 w-11 object-contain" />
          <div className="hidden sm:block">
            <div className="font-serif text-base leading-tight text-foreground">
              {t("brand.name")}
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
              {t("brand.tagline")}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/75 hover:text-navy transition-colors"
              activeProps={{ className: "text-navy font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/book"
            className="hidden md:inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground hover:bg-navy-deep transition-colors"
          >
            {t("nav.book")}
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <nav className="container-page py-4 grid gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2.5 text-sm text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-navy px-3 py-2.5 text-sm text-primary-foreground text-center"
            >
              {t("nav.book")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
