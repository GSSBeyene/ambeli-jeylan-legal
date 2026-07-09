import { createFileRoute, Outlet, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, Briefcase, CheckSquare, FileText, LogOut, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin Panel — Ambeli Jeylan Law Office" }] }),
  component: AdminLayout,
});

function AdminLayout() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData.user?.id;
      setEmail(userData.user?.email ?? "");
      if (!uid) {
        navigate({ to: "/auth" });
        return;
      }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data && !error);
      setChecking(false);
    })();
  }, [navigate]);

  async function signOut() {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/auth" });
  }

  if (checking) {
    return <div className="p-12 text-center text-sm text-muted-foreground">Loading admin panel…</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md text-center rounded-sm border border-border bg-background p-8">
          <ShieldAlert className="mx-auto h-10 w-10 text-accent" />
          <h1 className="mt-4 font-serif text-2xl text-navy">Access restricted</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account ({email}) does not have admin access. Ask an administrator to grant your account
            the <code className="rounded bg-secondary px-1">admin</code> role.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Your user id: <code className="break-all">{}</code>
          </p>
          <button
            onClick={signOut}
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-input px-3 py-2 text-sm hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>
    );
  }

  const items = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/admin/cases", label: "Cases", icon: Briefcase, exact: false },
    { to: "/admin/tasks", label: "Tasks", icon: CheckSquare, exact: false },
    { to: "/admin/documents", label: "Notices & Judgments", icon: FileText, exact: false },
  ];

  return (
    <div className="min-h-screen bg-secondary/40">
      <div className="container-page py-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl text-navy">Admin Panel</h1>
            <p className="text-xs text-muted-foreground">Signed in as {email}</p>
          </div>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 rounded-sm border border-input bg-background px-3 py-2 text-xs hover:bg-secondary"
          >
            <LogOut className="h-3.5 w-3.5" /> Sign out
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-sm border border-border bg-background p-2 h-fit">
            <nav className="grid gap-0.5">
              {items.map((it) => {
                const active = it.exact ? pathname === it.to : pathname === it.to || pathname.startsWith(it.to + "/");
                return (
                  <Link
                    key={it.to}
                    to={it.to}
                    className={`flex items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors ${
                      active ? "bg-navy text-primary-foreground" : "text-foreground/80 hover:bg-secondary"
                    }`}
                  >
                    <it.icon className="h-4 w-4" />
                    {it.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
          <div className="rounded-sm border border-border bg-background p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
