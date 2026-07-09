import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Download, FileText } from "lucide-react";
import { generateLegalPdf, type DocKind } from "@/lib/pdf-templates";

export const Route = createFileRoute("/_authenticated/admin/documents/")({
  component: DocumentsPage,
});

type CaseOpt = { id: string; case_number: string; title: string; client_name: string; court: string | null; assigned_lawyer: string | null };

function DocumentsPage() {
  const [cases, setCases] = useState<CaseOpt[]>([]);
  const [caseId, setCaseId] = useState<string>("");
  const [kind, setKind] = useState<DocKind>("notice");
  const [form, setForm] = useState({
    reference: "",
    recipient: "",
    address: "",
    subject: "",
    body: "",
    place: "Addis Ababa",
    date: new Date().toISOString().slice(0, 10),
    signatory: "",
    signatoryTitle: "Attorney-at-Law",
  });

  useEffect(() => {
    supabase.from("cases").select("id, case_number, title, client_name, court, assigned_lawyer").order("created_at", { ascending: false })
      .then(({ data }) => setCases((data as CaseOpt[]) ?? []));
  }, []);

  useEffect(() => {
    const c = cases.find((x) => x.id === caseId);
    if (c) {
      setForm((f) => ({
        ...f,
        reference: c.case_number,
        recipient: c.client_name,
        subject: c.title,
        signatory: c.assigned_lawyer ?? f.signatory,
      }));
    }
  }, [caseId, cases]);

  function download() {
    const selected = cases.find((c) => c.id === caseId);
    generateLegalPdf(kind, {
      firmName: "AMBELI JEYLAN LAW OFFICE",
      firmTagline: "Justice · Integrity · Excellence",
      caseNumber: selected?.case_number,
      court: selected?.court ?? undefined,
      ...form,
    });
  }

  const kindLabel = { notice: "Legal Notice", judgment: "Judgment / Ruling", letter: "Formal Letter" }[kind];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-xl text-navy">Notices & Judgments</h2>
        <p className="text-sm text-muted-foreground">Fill a template and download a formatted PDF.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Document type</label>
          <select value={kind} onChange={(e) => setKind(e.target.value as DocKind)}
            className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm">
            <option value="notice">Legal Notice</option>
            <option value="judgment">Judgment / Ruling</option>
            <option value="letter">Formal Letter</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Link to case (optional)</label>
          <select value={caseId} onChange={(e) => setCaseId(e.target.value)}
            className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm">
            <option value="">— No case —</option>
            {cases.map((c) => <option key={c.id} value={c.id}>{c.case_number} — {c.title}</option>)}
          </select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["reference", "Reference / Case number"],
          ["recipient", "Recipient / Party"],
          ["address", "Recipient address"],
          ["subject", "Subject / Matter"],
          ["place", "Place"],
          ["date", "Date", "date"],
          ["signatory", "Signatory name"],
          ["signatoryTitle", "Signatory title"],
        ].map(([k, label, type]) => (
          <div key={k as string}>
            <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
            <input
              type={(type as string) ?? "text"}
              value={(form as any)[k as string]}
              onChange={(e) => setForm({ ...form, [k as string]: e.target.value })}
              className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Body</label>
          <textarea
            rows={10}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            placeholder={`Write the ${kindLabel.toLowerCase()} content here. Blank lines create paragraph breaks.`}
            className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm font-mono"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-sm border border-border bg-secondary/40 p-4">
        <div className="flex items-center gap-2 text-sm">
          <FileText className="h-4 w-4 text-accent" />
          <span>Generates a formatted PDF ready to print or send.</span>
        </div>
        <button
          onClick={download}
          disabled={!form.recipient || !form.body}
          className="inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2 text-sm text-primary-foreground hover:bg-navy-deep disabled:opacity-50"
        >
          <Download className="h-4 w-4" /> Download {kindLabel} PDF
        </button>
      </div>
    </div>
  );
}
