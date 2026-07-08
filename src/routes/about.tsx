import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about-signing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ambeli Jeylan Law Office" },
      { name: "description", content: "History, mission, vision and values of Ambeli Jeylan Law Office in Addis Ababa." },
      { property: "og:title", content: "About — Ambeli Jeylan Law Office" },
      { property: "og:description", content: "The story, mission and leadership of an Ethiopian full-service law office." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the firm" title="A modern Ethiopian law office, built for consequence." />
      <section className="container-page py-16 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="prose prose-neutral max-w-none">
          <h2 className="font-serif text-2xl text-navy">Our story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ambeli Jeylan Law Office was founded to bring international standards of legal
            practice to a rapidly modernising Ethiopian economy. From our offices in Addis
            Ababa we advise clients on the transactions and disputes that define
            institutions — from cross-border investment to constitutional litigation.
          </p>
          <h2 className="mt-10 font-serif text-2xl text-navy">Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To deliver counsel of consequence — clear, courageous, and grounded in the law —
            to every client we serve.
          </p>
          <h2 className="mt-10 font-serif text-2xl text-navy">Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To be the reference firm of the Horn of Africa: a house of lawyers Ethiopian and
            international clients turn to when the outcome matters most.
          </p>
          <h2 className="mt-10 font-serif text-2xl text-navy">Core values</h2>
          <ul className="grid gap-2 text-foreground/80">
            <li>· Integrity above every commercial consideration.</li>
            <li>· Preparation over performance.</li>
            <li>· Discretion in every client relationship.</li>
            <li>· Excellence measured by outcome, not by billable hour.</li>
          </ul>
        </div>
        <div>
          <img
            src={aboutImage} alt="Legal documents" loading="lazy" width={1400} height={1000}
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-lg"
          />
          <div className="mt-6 border-l-2 border-accent pl-5">
            <div className="font-serif text-lg text-navy">Ambeli Jeylan</div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent mt-1">Managing Partner</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Two decades of representing corporate and institutional clients before every
              level of the Ethiopian judiciary and international arbitral tribunals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <h2 className="font-serif text-2xl text-navy">Memberships & admissions</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-foreground/80">
            {["Ethiopian Federal Supreme Court", "Ethiopian Lawyers Association", "Ethiopian Arbitration & Conciliation Centre",
              "International Bar Association", "Africa Business Legal Network", "ICC International Court of Arbitration"].map((x) => (
              <li key={x} className="border border-border bg-background p-4 rounded-sm">{x}</li>
            ))}
          </ul>
          <div className="mt-10">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-navy-deep">
              Speak with a partner
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
