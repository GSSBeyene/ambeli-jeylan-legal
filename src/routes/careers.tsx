import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";

export const Route = createFileRoute("/careers")({
  head: ({ match }) => ({
    meta: metaForRoute("/careers", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/careers" }, ...hreflangLinks("/careers")],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Careers" title="Join a house of lawyers." sub="We look for lawyers with judgment, discipline, and a commitment to excellence." />
      <section className="container-page py-16 grid gap-6">
        {[
          { role: "Senior Associate — Commercial", loc: "Addis Ababa" },
          { role: "Associate — Litigation", loc: "Addis Ababa" },
          { role: "Legal Intern", loc: "Addis Ababa" },
        ].map((v) => (
          <div key={v.role} className="flex flex-col sm:flex-row justify-between gap-4 border border-border p-6 hover:border-accent transition">
            <div>
              <div className="font-serif text-lg text-navy">{v.role}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{v.loc}</div>
            </div>
            <Link to="/contact" className="self-start sm:self-center rounded-sm bg-navy px-5 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep">
              Apply
            </Link>
          </div>
        ))}
      </section>
    </>
  ),
});
