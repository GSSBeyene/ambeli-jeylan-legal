import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";

export const Route = createFileRoute("/gallery")({
  head: ({ match }) => ({
    meta: metaForRoute("/gallery", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/gallery" }, ...hreflangLinks("/gallery")],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Gallery" title="The firm in pictures." />
      <section className="container-page py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-sm bg-gradient-to-br from-navy/90 to-navy-deep flex items-center justify-center">
              <span className="font-serif text-4xl text-accent/60">AJ</span>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
});
