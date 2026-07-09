import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Search } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/cases/")({
  component: CasesList,
});

type Case = {
  id: string;
  case_number: string;
  title: string;
  client_name: string;
  case_type: string | null;
  court: string | null;
  status: string;
  assigned_lawyer: string | null;
  created_at: string;
};

function CasesList() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [showNew, setShowNew] = useState(false);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("cases").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setCases((data as Case[]) ?? []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  const filtered = cases.filter(
    (c) =>
      !q ||
      c.case_number.toLowerCase().includes(q.toLowerCase()) ||
      c.title.toLowerCase().includes(q.toLowerCase()) ||
      c.client_name.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-serif text-xl text-navy">Cases</h2>
          <p className="text-sm text-muted-foreground">Register and manage all firm cases.</p>
        </div>
        <button
          onClick={() => setShowNew(true)}
          className="inline-flex items-center gap-2 rounded-sm bg-navy px-3 py-2 text-sm text-primary-foreground hover:bg-navy-deep"
        >
          <Plus className="h-4 w-4" /> New case
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by number, title, or client"
          className="w-full rounded-sm border border-input bg-background pl-9 pr-3 py-2 text-sm"
        />
      </div>

      <div className="overflow-x-auto rounded-sm border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2">Number</th>
              <th className="px-3 py-2">Title</th>
              <th className="px-3 py-2">Client</th>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Court</th>
              <th className="px-3 py-2">Lawyer</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {loading ? (
              <tr><td colSpan={7} className="px-3 py-6 text-center text-muted-foreground">Loading…</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan={7} className="px-3 py-6 text-center text-muted-foreground">No cases yet.</td></tr>
            ) : (
              filtered.map((c) => (
                <tr key={c.id} className="hover:bg-secondary/40">
                  <td className="px-3 py-2 font-medium">
                    <Link to="/admin/cases/$caseId" params={{ caseId: c.id }} className="text-navy hover:underline">
                      {c.case_number}
                    </Link>
                  </td>
                  <td className="px-3 py-2">{c.title}</td>
                  <td className="px-3 py-2">{c.client_name}</td>
                  <td className="px-3 py-2">{c.case_type ?? "—"}</td>
                  <td className="px-3 py-2">{c.court ?? "—"}</td>
                  <td className="px-3 py-2">{c.assigned_lawyer ?? "—"}</td>
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs uppercase tracking-wider">
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showNew && <NewCaseDialog onClose={() => setShowNew(false)} onCreated={() => { setShowNew(false); load(); }} />}
    </div>
  );
}

function NewCaseDialog({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const [form, setForm] = useState({
    case_number: "",
    title: "",
    client_name: "",
    client_contact: "",
    case_type: "",
    court: "",
    assigned_lawyer: "",
    status: "open",
    notes: "",
  });
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("cases").insert({ ...form, created_by: userData.user?.id });
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Case registered");
    onCreated();
  }

  const field = (k: keyof typeof form, label: string, opts: { type?: string; textarea?: boolean } = {}) => (
    <div>
      <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      {opts.textarea ? (
        <textarea
          value={form[k]}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
          rows={3}
        />
      ) : (
        <input
          type={opts.type ?? "text"}
          value={form[k]}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
          className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-sm bg-background p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-serif text-xl text-navy">Register new case</h3>
        <form onSubmit={submit} className="mt-4 grid gap-3 sm:grid-cols-2">
          {field("case_number", "Case number *")}
          {field("title", "Title *")}
          {field("client_name", "Client name *")}
          {field("client_contact", "Client contact")}
          {field("case_type", "Type (civil, criminal, commercial…)")}
          {field("court", "Court")}
          {field("assigned_lawyer", "Assigned lawyer")}
          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="closed">Closed</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="sm:col-span-2">{field("notes", "Notes", { textarea: true })}</div>
          <div className="sm:col-span-2 flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-sm border border-input px-3 py-2 text-sm">Cancel</button>
            <button type="submit" disabled={saving} className="rounded-sm bg-navy px-4 py-2 text-sm text-primary-foreground disabled:opacity-60">
              {saving ? "Saving…" : "Register case"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
