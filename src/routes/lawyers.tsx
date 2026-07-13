import { createFileRoute, Link } from "@tanstack/react-router";
import { LAWYERS } from "@/lib/site-data";
import { PageHeader } from "./about";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";

export const Route = createFileRoute("/lawyers")({
  head: ({ match }) => ({
    meta: metaForRoute("/lawyers", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/lawyers" }, ...hreflangLinks("/lawyers")],
  }),
  component: LawyersPage,
});

function LawyersPage() {
  return (
    <>
      <PageHeader eyebrow="Counsel" title="The lawyers behind the firm." sub="Senior partners and associates chosen for judgment, discipline and demonstrated results." />
      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {LAWYERS.map((l) => (
            <article key={l.name} className="grid gap-6 sm:grid-cols-[auto_1fr] items-start border-b border-border pb-10">
              <div className="w-40 aspect-[3/4] bg-navy flex items-center justify-center rounded-sm">
                <span className="font-serif text-6xl text-accent/80">
                  {l.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
              <div>
                <div className="font-serif text-2xl text-navy">{l.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent mt-1">{l.role}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
                <div className="mt-5 grid gap-2 text-xs">
                  <div><span className="uppercase tracking-[0.18em] text-foreground/60 mr-2">Focus</span>{l.focus.join(" · ")}</div>
                  <div><span className="uppercase tracking-[0.18em] text-foreground/60 mr-2">Languages</span>{l.languages.join(" · ")}</div>
                </div>
                <Link to="/book" className="mt-6 inline-flex text-sm font-medium text-navy hover:text-accent">
                  Book with {l.name.split(" ")[0]} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
