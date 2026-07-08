import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { PRACTICE_AREAS, LAWYERS, APPOINTMENT_TIMES } from "@/lib/site-data";
import { PageHeader } from "./about";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Ambeli Jeylan Law Office" },
      { name: "description", content: "Request a confidential consultation with one of our lawyers. We reply within one business day." },
      { property: "og:title", content: "Book a Consultation — Ambeli Jeylan Law Office" },
      { property: "og:description", content: "Schedule an in-person or virtual meeting with our counsel." },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const schema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(40),
  preferred_lawyer: z.string().max(120).optional().nullable(),
  service: z.string().min(1).max(120),
  preferred_date: z.string().min(1),
  preferred_time: z.string().min(1),
  message: z.string().max(2000).optional().nullable(),
});

function BookPage() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      full_name: String(fd.get("full_name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      preferred_lawyer: (fd.get("preferred_lawyer") as string) || null,
      service: String(fd.get("service") || ""),
      preferred_date: String(fd.get("preferred_date") || ""),
      preferred_time: String(fd.get("preferred_time") || ""),
      message: (fd.get("message") as string) || null,
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("appointments").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast.error(t("book.error"));
      return;
    }
    setDone(true);
    toast.success(t("book.success"));
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <PageHeader eyebrow={t("nav.book")} title={t("book.title")} sub={t("book.sub")} />
      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="grid gap-5 max-w-2xl">
            <Field label={t("book.field.name")} name="full_name" required />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("book.field.email")} name="email" type="email" required />
              <Field label={t("book.field.phone")} name="phone" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField label={t("book.field.lawyer")} name="preferred_lawyer">
                <option value="">{t("book.field.lawyer.any")}</option>
                {LAWYERS.map((l) => (
                  <option key={l.name} value={l.name}>{l.name} — {l.role}</option>
                ))}
              </SelectField>
              <SelectField label={t("book.field.service")} name="service" required>
                <option value="">—</option>
                {PRACTICE_AREAS.map((a) => (
                  <option key={a.title} value={a.title}>{a.title}</option>
                ))}
              </SelectField>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("book.field.date")} name="preferred_date" type="date" required />
              <SelectField label={t("book.field.time")} name="preferred_time" required>
                <option value="">—</option>
                {APPOINTMENT_TIMES.map((tm) => (
                  <option key={tm} value={tm}>{tm}</option>
                ))}
              </SelectField>
            </div>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("book.field.message")}</span>
              <textarea
                name="message" rows={5} maxLength={2000}
                className="rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
              />
            </label>

            <button
              type="submit" disabled={loading}
              className="mt-2 inline-flex justify-center items-center gap-2 rounded-sm bg-navy px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground hover:bg-navy-deep disabled:opacity-60"
            >
              {loading ? t("book.submitting") : t("book.submit")}
            </button>

            {done && (
              <p className="text-sm text-navy border-l-2 border-accent pl-4">{t("book.success")}</p>
            )}
          </form>

          <aside className="rounded-sm border border-border p-8 bg-secondary/40 h-fit">
            <h3 className="font-serif text-xl text-navy">What to expect</h3>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/80">
              <li>· Confidential intake reviewed by a senior lawyer.</li>
              <li>· Confirmation and calendar invite within one business day.</li>
              <li>· Option of in-person, Google Meet, Zoom or phone consultation.</li>
              <li>· Available in Amharic, English, Oromo, Tigrinya, Arabic and more.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        {...props}
        className="rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
      />
    </label>
  );
}
function SelectField({ label, children, ...props }: { label: string; children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <select
        {...props}
        className="rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
      >
        {children}
      </select>
    </label>
  );
}
