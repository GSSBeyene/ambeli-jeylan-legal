import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { CONTACT, SOCIALS } from "@/lib/site-data";
import { Facebook, Linkedin, Send, Instagram, Youtube, Twitter, Music2 } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt={t("brand.name")} className="h-11 w-11 object-contain bg-white/5 rounded-sm p-1" />
            <div>
              <div className="font-serif text-lg">{t("brand.name")}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                {t("brand.tagline")}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            A full-service Ethiopian law office serving individuals, enterprises,
            and institutions with counsel of consequence.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
              target="_blank" rel="noreferrer"
              className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition"
              aria-label="WhatsApp"
            >
              <Send className="h-4 w-4" />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="TikTok">
              <Music2 className="h-4 w-4" />
            </a>
            <a href={SOCIALS.telegram} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="Telegram">
              <Send className="h-4 w-4" />
            </a>
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
            <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="rounded-sm border border-white/15 p-2 hover:border-accent hover:text-accent transition" aria-label="X (Twitter)">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="font-serif text-sm uppercase tracking-[0.2em] text-accent">Firm</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-accent">{t("nav.about")}</Link></li>
            <li><Link to="/practice-areas" className="hover:text-accent">{t("nav.practice")}</Link></li>
            <li><Link to="/lawyers" className="hover:text-accent">{t("nav.lawyers")}</Link></li>
            <li><Link to="/careers" className="hover:text-accent">{t("nav.careers")}</Link></li>
            <li><Link to="/articles" className="hover:text-accent">{t("nav.articles")}</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-serif text-sm uppercase tracking-[0.2em] text-accent">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>{CONTACT.address}</li>
            {CONTACT.phones.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-accent">{p}</a></li>
            ))}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">{CONTACT.email}</a>
            </li>
            <li><Link to="/book" className="hover:text-accent">{t("nav.book")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-accent">{t("footer.terms")}</a>
            <a href="/auth" className="hover:text-accent">Staff</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
