import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";
import { usePageCopy } from "@/lib/page-copy-i18n";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

// English fallback used for JSON-LD (server-side head, no hook available)
const FAQ_EN = [
  { q: "Do you offer consultations in Amharic and other Ethiopian languages?", a: "Yes. Our lawyers serve clients in Amharic, Oromo, Tigrinya, Somali, Afar, Sidama, Wolaytta, Arabic and English." },
  { q: "How quickly will you respond to my request?", a: "We confirm every consultation request within one business day." },
  { q: "Are consultations confidential?", a: "Absolutely. Every enquiry is protected by lawyer-client privilege from first contact." },
  { q: "Can meetings be virtual?", a: "Yes — Google Meet, Zoom, WhatsApp video or telephone. In-person meetings are available at our Addis Ababa offices." },
  { q: "Do you handle international clients?", a: "We regularly represent foreign investors, multinational corporations and international institutions operating in Ethiopia and the wider region." },
  { q: "How are your fees structured?", a: "We work on hourly, project-based, and retainer arrangements depending on the matter. Fee estimates are discussed at intake." },
];

export const Route = createFileRoute("/faqs")({
  head: ({ match }) => ({
    meta: metaForRoute("/faqs", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/faqs" }, ...hreflangLinks("/faqs")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_EN.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  const c = usePageCopy().faqs;
  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} />
      <section className="container-page py-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {c.items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-serif text-left text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
