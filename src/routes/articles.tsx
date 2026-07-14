import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";
import { usePageCopy } from "@/lib/page-copy-i18n";

export const Route = createFileRoute("/articles")({
  head: ({ match }) => ({
    meta: metaForRoute("/articles", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/articles" }, ...hreflangLinks("/articles")],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const c = usePageCopy().articles;
  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
      <section className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {c.items.map((a) => (
          <article key={a.t} className="border border-border p-8 hover:border-accent transition group">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">{a.c}</div>
            <h3 className="mt-4 font-serif text-xl text-navy group-hover:text-navy-deep">{a.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/50">{c.readMore}</div>
          </article>
        ))}
      </section>
    </>
  );
}
