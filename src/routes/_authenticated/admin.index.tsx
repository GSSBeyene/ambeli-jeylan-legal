import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Briefcase, CheckSquare, CalendarClock, FileText } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const [stats, setStats] = useState({ cases: 0, openCases: 0, tasks: 0, upcoming: 0 });
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [recent, setRecent] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const [{ count: cases }, { count: openCases }, { count: tasks }, hearings, recentCases] = await Promise.all([
        supabase.from("cases").select("*", { count: "exact", head: true }),
        supabase.from("cases").select("*", { count: "exact", head: true }).eq("status", "open"),
        supabase.from("tasks").select("*", { count: "exact", head: true }).neq("status", "done"),
        supabase
          .from("court_dates")
          .select("id, hearing_date, hearing_time, court, purpose, case_id, cases(case_number, title)")
          .gte("hearing_date", new Date().toISOString().slice(0, 10))
          .order("hearing_date")
          .limit(5),
        supabase.from("cases").select("id, case_number, title, status, created_at").order("created_at", { ascending: false }).limit(5),
      ]);
      setStats({ cases: cases ?? 0, openCases: openCases ?? 0, tasks: tasks ?? 0, upcoming: hearings.data?.length ?? 0 });
      setUpcoming(hearings.data ?? []);
      setRecent(recentCases.data ?? []);
    })();
  }, []);

  const cards = [
    { label: "Total cases", value: stats.cases, icon: Briefcase },
    { label: "Open cases", value: stats.openCases, icon: Briefcase },
    { label: "Open tasks", value: stats.tasks, icon: CheckSquare },
    { label: "Upcoming hearings", value: stats.upcoming, icon: CalendarClock },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-xl text-navy">Overview</h2>
        <p className="text-sm text-muted-foreground">Firm activity at a glance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-sm border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <c.icon className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-2 font-serif text-3xl text-navy">{c.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-sm border border-border p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-serif text-lg text-navy">Upcoming hearings</h3>
            <CalendarClock className="h-4 w-4 text-accent" />
          </div>
          {upcoming.length === 0 ? (
            <p className="text-sm text-muted-foreground">No upcoming hearings.</p>
          ) : (
            <ul className="divide-y divide-border">
              {upcoming.map((h) => (
                <li key={h.id} className="py-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">{h.cases?.case_number} — {h.cases?.title}</span>
                    <span className="text-muted-foreground">{h.hearing_date} {h.hearing_time ?? ""}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{h.court} · {h.purpose}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="rounded-sm border border-border p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-serif text-lg text-navy">Recent cases</h3>
            <Link to="/admin/cases" className="text-xs text-navy hover:underline">View all</Link>
          </div>
          {recent.length === 0 ? (
            <p className="text-sm text-muted-foreground">No cases yet. <Link to="/admin/cases" className="text-navy underline">Register the first one</Link>.</p>
          ) : (
            <ul className="divide-y divide-border">
              {recent.map((c) => (
                <li key={c.id} className="py-2 text-sm">
                  <Link to="/admin/cases/$caseId" params={{ caseId: c.id }} className="flex justify-between gap-4 hover:text-navy">
                    <span className="font-medium">{c.case_number} — {c.title}</span>
                    <span className="text-xs uppercase text-muted-foreground">{c.status}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="rounded-sm border border-border p-4 flex items-start gap-3 bg-secondary/40">
        <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
        <div className="text-sm">
          Generate formal <Link to="/admin/documents" className="text-navy underline">notices and judgments</Link> as PDFs from your case data.
        </div>
      </div>
    </div>
  );
}
