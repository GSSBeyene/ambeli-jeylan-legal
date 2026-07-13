import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";

export const Route = createFileRoute("/articles")({
  head: ({ match }) => ({
    meta: metaForRoute("/articles", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/articles" }, ...hreflangLinks("/articles")],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Insight" title="Legal articles & analysis." sub="Commentary from our counsel on the developments shaping Ethiopian law and business." />
      <section className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {[
          { t: "Ethiopia's new Investment Law: what changes for foreign investors", c: "Investment" },
          { t: "Enforcing foreign arbitral awards in Ethiopia", c: "Arbitration" },
          { t: "Understanding the revised Commercial Code", c: "Commercial" },
          { t: "Data protection obligations for Ethiopian financial institutions", c: "Banking" },
          { t: "Employment reforms and their impact on employers", c: "Employment" },
          { t: "Trademark enforcement strategies in the Horn of Africa", c: "IP" },
        ].map((a) => (
          <article key={a.t} className="border border-border p-8 hover:border-accent transition group">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">{a.c}</div>
            <h3 className="mt-4 font-serif text-xl text-navy group-hover:text-navy-deep">{a.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">A brief overview of the practical implications for institutions operating in Ethiopia.</p>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/50">Read more →</div>
          </article>
        ))}
      </section>
    </>
  ),
});
