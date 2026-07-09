import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/tasks/")({
  component: TasksPage,
});

type Task = {
  id: string; title: string; description: string | null; due_date: string | null;
  assignee: string | null; status: string; case_id: string | null;
  cases: { case_number: string; title: string } | null;
};

function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "todo" | "doing" | "done">("all");
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("tasks")
      .select("id,title,description,due_date,assignee,status,case_id,cases(case_number,title)")
      .order("due_date", { ascending: true, nullsFirst: false });
    if (error) toast.error(error.message);
    setTasks((data as any as Task[]) ?? []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase.from("tasks").update({ status }).eq("id", id);
    if (error) toast.error(error.message); else load();
  }

  const shown = tasks.filter((t) => filter === "all" || t.status === filter);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-xl text-navy">All tasks</h2>
        <p className="text-sm text-muted-foreground">Firm-wide task list across all cases.</p>
      </div>

      <div className="flex gap-2">
        {(["all", "todo", "doing", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-sm px-3 py-1.5 text-xs uppercase tracking-wider ${
              filter === f ? "bg-navy text-primary-foreground" : "bg-secondary text-foreground/70"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-sm border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2">Task</th>
              <th className="px-3 py-2">Case</th>
              <th className="px-3 py-2">Assignee</th>
              <th className="px-3 py-2">Due</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {loading ? (
              <tr><td colSpan={5} className="px-3 py-6 text-center text-muted-foreground">Loading…</td></tr>
            ) : shown.length === 0 ? (
              <tr><td colSpan={5} className="px-3 py-6 text-center text-muted-foreground">No tasks.</td></tr>
            ) : shown.map((t) => (
              <tr key={t.id} className="hover:bg-secondary/40">
                <td className="px-3 py-2">
                  <div className="font-medium">{t.title}</div>
                  {t.description && <div className="text-xs text-muted-foreground">{t.description}</div>}
                </td>
                <td className="px-3 py-2">
                  {t.case_id && t.cases ? (
                    <Link to="/admin/cases/$caseId" params={{ caseId: t.case_id }} className="text-navy hover:underline">
                      {t.cases.case_number}
                    </Link>
                  ) : "—"}
                </td>
                <td className="px-3 py-2">{t.assignee ?? "—"}</td>
                <td className="px-3 py-2">{t.due_date ?? "—"}</td>
                <td className="px-3 py-2">
                  <select value={t.status} onChange={(e) => updateStatus(t.id, e.target.value)}
                    className="rounded-sm border border-input bg-background px-2 py-1 text-xs">
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
