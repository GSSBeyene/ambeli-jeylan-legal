import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Save, Trash2, Plus, CalendarClock, CheckSquare } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/cases/$caseId")({
  component: CaseDetail,
});

type CaseRow = {
  id: string; case_number: string; title: string; client_name: string; client_contact: string | null;
  case_type: string | null; court: string | null; status: string; assigned_lawyer: string | null; notes: string | null;
};
type Hearing = { id: string; hearing_date: string; hearing_time: string | null; court: string | null; purpose: string | null; notes: string | null };
type Task = { id: string; title: string; description: string | null; due_date: string | null; assignee: string | null; status: string };

function CaseDetail() {
  const { caseId } = Route.useParams();
  const navigate = useNavigate();
  const [c, setC] = useState<CaseRow | null>(null);
  const [hearings, setHearings] = useState<Hearing[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [saving, setSaving] = useState(false);
  const [newHearing, setNewHearing] = useState({ hearing_date: "", hearing_time: "", court: "", purpose: "", notes: "" });
  const [newTask, setNewTask] = useState({ title: "", description: "", due_date: "", assignee: "", status: "todo" });

  async function load() {
    const [{ data: caseData }, { data: hData }, { data: tData }] = await Promise.all([
      supabase.from("cases").select("*").eq("id", caseId).single(),
      supabase.from("court_dates").select("*").eq("case_id", caseId).order("hearing_date"),
      supabase.from("tasks").select("*").eq("case_id", caseId).order("created_at", { ascending: false }),
    ]);
    setC(caseData as CaseRow);
    setHearings((hData as Hearing[]) ?? []);
    setTasks((tData as Task[]) ?? []);
  }

  useEffect(() => { load(); }, [caseId]);

  async function saveCase() {
    if (!c) return;
    setSaving(true);
    const { error } = await supabase.from("cases").update({
      title: c.title, client_name: c.client_name, client_contact: c.client_contact,
      case_type: c.case_type, court: c.court, status: c.status, assigned_lawyer: c.assigned_lawyer, notes: c.notes,
    }).eq("id", c.id);
    setSaving(false);
    if (error) toast.error(error.message); else toast.success("Case updated");
  }

  async function deleteCase() {
    if (!confirm("Delete this case and all its hearings & tasks?")) return;
    const { error } = await supabase.from("cases").delete().eq("id", caseId);
    if (error) { toast.error(error.message); return; }
    toast.success("Case deleted");
    navigate({ to: "/admin/cases" });
  }

  async function addHearing(e: React.FormEvent) {
    e.preventDefault();
    if (!newHearing.hearing_date) return;
    const { error } = await supabase.from("court_dates").insert({ case_id: caseId, ...newHearing, hearing_time: newHearing.hearing_time || null, court: newHearing.court || null, purpose: newHearing.purpose || null, notes: newHearing.notes || null });
    if (error) return toast.error(error.message);
    setNewHearing({ hearing_date: "", hearing_time: "", court: "", purpose: "", notes: "" });
    load();
  }

  async function delHearing(id: string) {
    const { error } = await supabase.from("court_dates").delete().eq("id", id);
    if (error) toast.error(error.message); else load();
  }

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTask.title) return;
    const { data: userData } = await supabase.auth.getUser();
    const { error } = await supabase.from("tasks").insert({
      case_id: caseId, title: newTask.title, description: newTask.description || null,
      due_date: newTask.due_date || null, assignee: newTask.assignee || null, status: newTask.status,
      created_by: userData.user?.id,
    });
    if (error) return toast.error(error.message);
    setNewTask({ title: "", description: "", due_date: "", assignee: "", status: "todo" });
    load();
  }

  async function updateTaskStatus(id: string, status: string) {
    const { error } = await supabase.from("tasks").update({ status }).eq("id", id);
    if (error) toast.error(error.message); else load();
  }
  async function delTask(id: string) {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) toast.error(error.message); else load();
  }

  if (!c) return <div className="text-sm text-muted-foreground">Loading case…</div>;

  const field = (k: keyof CaseRow, label: string, opts: { textarea?: boolean } = {}) => (
    <div>
      <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      {opts.textarea ? (
        <textarea rows={3} value={(c[k] ?? "") as string} onChange={(e) => setC({ ...c, [k]: e.target.value })}
          className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm" />
      ) : (
        <input value={(c[k] ?? "") as string} onChange={(e) => setC({ ...c, [k]: e.target.value })}
          className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm" />
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      <Link to="/admin/cases" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-navy">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to cases
      </Link>

      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.case_number}</div>
            <h2 className="font-serif text-2xl text-navy">{c.title}</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={saveCase} disabled={saving} className="inline-flex items-center gap-1.5 rounded-sm bg-navy px-3 py-2 text-sm text-primary-foreground disabled:opacity-60">
              <Save className="h-4 w-4" /> {saving ? "Saving…" : "Save changes"}
            </button>
            <button onClick={deleteCase} className="inline-flex items-center gap-1.5 rounded-sm border border-destructive px-3 py-2 text-sm text-destructive hover:bg-destructive hover:text-destructive-foreground">
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {field("title", "Title")}
          {field("client_name", "Client name")}
          {field("client_contact", "Client contact")}
          {field("case_type", "Type")}
          {field("court", "Court")}
          {field("assigned_lawyer", "Assigned lawyer")}
          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Status</label>
            <select value={c.status} onChange={(e) => setC({ ...c, status: e.target.value })}
              className="w-full rounded-sm border border-input bg-background px-3 py-2 text-sm">
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="closed">Closed</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="sm:col-span-2">{field("notes", "Notes", { textarea: true })}</div>
        </div>
      </div>

      {/* Court dates */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <CalendarClock className="h-4 w-4 text-accent" />
          <h3 className="font-serif text-lg text-navy">Court dates</h3>
        </div>
        <div className="rounded-sm border border-border">
          {hearings.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">No hearings scheduled.</div>
          ) : (
            <ul className="divide-y divide-border">
              {hearings.map((h) => (
                <li key={h.id} className="flex flex-wrap items-center justify-between gap-2 p-3 text-sm">
                  <div>
                    <div className="font-medium">{h.hearing_date} {h.hearing_time && `· ${h.hearing_time}`}</div>
                    <div className="text-xs text-muted-foreground">{h.court} {h.purpose && `— ${h.purpose}`}</div>
                    {h.notes && <div className="text-xs text-muted-foreground mt-0.5">{h.notes}</div>}
                  </div>
                  <button onClick={() => delHearing(h.id)} className="text-xs text-destructive hover:underline">Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form onSubmit={addHearing} className="mt-3 grid gap-2 sm:grid-cols-6 rounded-sm border border-dashed border-border p-3">
          <input required type="date" value={newHearing.hearing_date} onChange={(e) => setNewHearing({ ...newHearing, hearing_date: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-1" />
          <input type="time" value={newHearing.hearing_time} onChange={(e) => setNewHearing({ ...newHearing, hearing_time: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-1" />
          <input placeholder="Court" value={newHearing.court} onChange={(e) => setNewHearing({ ...newHearing, court: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-1" />
          <input placeholder="Purpose" value={newHearing.purpose} onChange={(e) => setNewHearing({ ...newHearing, purpose: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-2" />
          <button className="inline-flex items-center justify-center gap-1 rounded-sm bg-navy px-3 py-1.5 text-sm text-primary-foreground sm:col-span-1"><Plus className="h-3.5 w-3.5" />Add</button>
        </form>
      </section>

      {/* Tasks */}
      <section>
        <div className="mb-3 flex items-center gap-2">
          <CheckSquare className="h-4 w-4 text-accent" />
          <h3 className="font-serif text-lg text-navy">Tasks</h3>
        </div>
        <div className="rounded-sm border border-border">
          {tasks.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">No tasks yet.</div>
          ) : (
            <ul className="divide-y divide-border">
              {tasks.map((t) => (
                <li key={t.id} className="flex flex-wrap items-center justify-between gap-2 p-3 text-sm">
                  <div className="min-w-0">
                    <div className="font-medium">{t.title}</div>
                    {t.description && <div className="text-xs text-muted-foreground">{t.description}</div>}
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {t.assignee && <>Assigned to <span className="font-medium">{t.assignee}</span> · </>}
                      {t.due_date && <>Due {t.due_date}</>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <select value={t.status} onChange={(e) => updateTaskStatus(t.id, e.target.value)} className="rounded-sm border border-input bg-background px-2 py-1 text-xs">
                      <option value="todo">To do</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>
                    <button onClick={() => delTask(t.id)} className="text-xs text-destructive hover:underline">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form onSubmit={addTask} className="mt-3 grid gap-2 sm:grid-cols-6 rounded-sm border border-dashed border-border p-3">
          <input required placeholder="Task title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-2" />
          <input placeholder="Assignee" value={newTask.assignee} onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-1" />
          <input type="date" value={newTask.due_date} onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-1" />
          <input placeholder="Description" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} className="rounded-sm border border-input px-2 py-1.5 text-sm sm:col-span-1" />
          <button className="inline-flex items-center justify-center gap-1 rounded-sm bg-navy px-3 py-1.5 text-sm text-primary-foreground sm:col-span-1"><Plus className="h-3.5 w-3.5" />Add</button>
        </form>
      </section>
    </div>
  );
}
