import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about-signing.jpg";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";
import { usePageCopy } from "@/lib/page-copy-i18n";

export const Route = createFileRoute("/about")({
  head: ({ match }) => ({
    meta: metaForRoute("/about", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/about" }, ...hreflangLinks("/about")],
  }),
  component: AboutPage,
});

function AboutPage() {
  const c = usePageCopy().about;
  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} />
      <section className="container-page py-16 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="prose prose-neutral max-w-none">
          <h2 className="font-serif text-2xl text-navy">{c.storyTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.storyBody}</p>
          <h2 className="mt-10 font-serif text-2xl text-navy">{c.missionTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.missionBody}</p>
          <h2 className="mt-10 font-serif text-2xl text-navy">{c.visionTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.visionBody}</p>
          <h2 className="mt-10 font-serif text-2xl text-navy">{c.valuesTitle}</h2>
          <ul className="grid gap-2 text-foreground/80">
            {c.values.map((v) => <li key={v}>· {v}</li>)}
          </ul>
        </div>
        <div>
          <img
            src={aboutImage} alt="" loading="lazy" width={1400} height={1000}
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg"
          />
          <div className="mt-6 border-l-2 border-accent pl-5">
            <div className="font-serif text-lg text-navy">Ambeli Jeylan</div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mt-1">{c.partnerRole}</div>
            <p className="mt-3 text-sm text-muted-foreground">{c.partnerBio}</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <h2 className="font-serif text-2xl text-navy">{c.membershipsTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-foreground/80">
            {c.memberships.map((x) => (
              <li key={x} className="border border-border bg-background p-4 rounded-sm">{x}</li>
            ))}
          </ul>
          <div className="mt-10">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep">
              {c.speak}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="bg-navy-deep text-primary-foreground">
      <div className="container-page py-20 md:py-28">
        <div className="text-xs uppercase tracking-[0.28em] text-accent">{eyebrow}</div>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl max-w-3xl">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-primary-foreground/75">{sub}</p>}
      </div>
    </section>
  );
}
