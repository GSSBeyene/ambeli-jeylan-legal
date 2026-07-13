import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { PageHeader } from "./about";
import { Mail, MapPin, Phone, Clock, Siren } from "lucide-react";
import { hreflangLinks, langFromSearch, metaForRoute } from "@/lib/seo-i18n";

export const Route = createFileRoute("/contact")({
  head: ({ match }) => ({
    meta: metaForRoute("/contact", langFromSearch((match as { search?: unknown }).search)),
    links: [{ rel: "canonical", href: "/contact" }, ...hreflangLinks("/contact")],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const items = [
    { icon: MapPin, label: t("contact.address"), value: CONTACT.address },
    { icon: Phone, label: t("contact.phone"), value: CONTACT.phone },
    { icon: Siren, label: t("contact.emergency"), value: CONTACT.emergency },
    { icon: Mail, label: t("contact.email"), value: CONTACT.email },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hours.value") },
  ];
  return (
    <>
      <PageHeader eyebrow={t("contact.title")} title="We are ready when you are." sub="Confidential enquiries welcomed. We respond within one business day." />
      <section className="container-page py-16 grid gap-12 lg:grid-cols-2">
        <div>
          <ul className="grid gap-6">
            {items.map((i) => (
              <li key={i.label} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-accent">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{i.label}</div>
                  <div className="font-medium text-foreground">{i.value}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</div>
            <p className="mt-2 text-sm text-muted-foreground">Start a chat directly from your phone.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {CONTACT.phones.map((p) => (
                <WhatsAppButton key={p} phone={p} />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-sm overflow-hidden border border-border aspect-[4/3]">
          <iframe
            title="Office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=38.75%2C8.98%2C38.82%2C9.03&layer=mapnik"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
