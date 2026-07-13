import { createFileRoute, Link } from "@tanstack/react-router";
import { usePracticeAreas } from "@/lib/practice-areas-i18n";
import { PageHeader } from "./about";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Ambeli Jeylan Law Office" },
      { name: "description", content: "Full-service practice: civil, commercial, corporate, investment, tax, family, immigration, IP, criminal defense, arbitration and more." },
      { property: "og:title", content: "Practice Areas — Ambeli Jeylan Law Office" },
      { property: "og:description", content: "Comprehensive Ethiopian and cross-border legal practice." },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreasPage,
});

function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="Comprehensive counsel across every discipline that matters."
        sub="From high-stakes commercial transactions to constitutional litigation, our teams are organised around outcomes, not silos."
      />
      <section className="container-page py-16">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
          {PRACTICE_AREAS.map((a, i) => (
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
        <div className="mt-12 flex justify-center">
          <Link to="/book" className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
