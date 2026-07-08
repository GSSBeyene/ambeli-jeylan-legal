import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ScaleIcon, ShieldCheck, Landmark, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { PRACTICE_AREAS, LAWYERS, TESTIMONIALS } from "@/lib/site-data";
import heroImage from "@/assets/hero-law.jpg";
import aboutImage from "@/assets/about-signing.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            width={1600}
            height={1200}
            className="h-full w-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        </div>
        <div className="relative container-page py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent">
              <span className="inline-block h-px w-10 bg-accent" />
              {t("hero.eyebrow")}
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/80 leading-relaxed">
              {t("hero.sub")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground hover:brightness-95"
              >
                {t("hero.cta.book")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground hover:border-accent hover:text-accent"
              >
                {t("hero.cta.services")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/80 hover:text-accent"
              >
                {t("hero.cta.contact")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            {[
              { k: "20+", v: "Years of practice" },
              { k: "1,200+", v: "Matters handled" },
              { k: "9", v: "Languages served" },
              { k: "24/7", v: "Emergency response" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-serif text-3xl text-accent">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="container-page py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: ScaleIcon, title: "Principled advocacy", desc: "Every matter is prepared as if it will be tried before the highest court." },
            { icon: ShieldCheck, title: "Discreet counsel", desc: "Confidentiality and judgment expected by institutions and private clients alike." },
            { icon: Landmark, title: "Institutional depth", desc: "Cross-disciplinary teams built around your matter, not a single practice silo." },
          ].map((p) => (
            <div key={p.title} className="border-l-2 border-accent pl-6">
              <p.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-secondary/60 py-24">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.28em] text-accent">02 · Expertise</div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{t("section.practice")}</h2>
              <p className="mt-3 text-muted-foreground">{t("section.practice.sub")}</p>
            </div>
            <Link to="/practice-areas" className="text-sm text-navy hover:text-accent inline-flex items-center gap-2">
              View all areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
            {PRACTICE_AREAS.slice(0, 9).map((a, i) => (
              <div key={a.title} className="group bg-background p-8 hover:bg-navy hover:text-primary-foreground transition-colors">
                <div className="text-xs text-accent tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-serif text-lg">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary-foreground/75 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-page py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-accent">03 · The Firm</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">{t("section.about")}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ambeli Jeylan Law Office is an Addis Ababa-based full-service firm founded on
              the belief that principled advocacy and precise counsel are inseparable. We
              represent multinational enterprises, Ethiopian institutions, and private
              clients across the country's most consequential matters.
            </p>
            <ul className="mt-8 grid gap-4 text-sm">
              {["Serving clients in 9 languages including Amharic, Oromo, Tigrinya and Arabic.",
                "Cross-disciplinary teams built around each matter.",
                "Trusted counsel to banks, investors, and public institutions."].map((x) => (
                <li key={x} className="flex gap-3">
                  <Sparkles className="h-4 w-4 text-accent shrink-0 mt-1" />
                  <span className="text-foreground/80">{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-accent">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Signing a legal document"
              loading="lazy" width={1400} height={1000}
              className="w-full h-full object-cover aspect-[5/4] rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-navy text-primary-foreground p-6 max-w-xs">
              <div className="font-serif text-xl text-accent">Ambeli Jeylan</div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70 mt-1">
                Managing Partner
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAWYERS */}
      <section className="bg-navy-deep text-primary-foreground py-24">
        <div className="container-page">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.28em] text-accent">04 · Counsel</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">{t("section.lawyers")}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LAWYERS.map((l) => (
              <div key={l.name} className="border border-white/10 p-6 hover:border-accent transition">
                <div className="aspect-[3/4] bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center rounded-sm">
                  <span className="font-serif text-5xl text-accent/80">
                    {l.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <div className="mt-5 font-serif text-lg">{l.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent mt-1">{l.role}</div>
                <p className="mt-3 text-sm text-primary-foreground/70 line-clamp-3">{l.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/lawyers" className="text-sm text-accent inline-flex items-center gap-2 hover:brightness-110">
              Meet the full team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-24">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.28em] text-accent">05 · Voices</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">{t("section.testimonials")}</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border-t border-accent pt-6">
              <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-primary-foreground">
        <div className="container-page py-20 grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">{t("section.cta.title")}</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/75">{t("section.cta.sub")}</p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground hover:brightness-95"
            >
              {t("hero.cta.book")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
