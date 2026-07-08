import { Globe } from "lucide-react";
import { LANGUAGES, useI18n, type LangCode } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const current = LANGUAGES.find((l) => l.code === lang);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-transparent px-3 py-2 text-xs font-medium tracking-wide uppercase text-foreground/80 hover:text-accent hover:border-accent transition-colors">
        <Globe className="h-3.5 w-3.5" />
        <span>{current?.native ?? "English"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-56">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code as LangCode)}
            className="flex items-center justify-between gap-4"
          >
            <span className="font-medium">{l.native}</span>
            <span className="text-xs text-muted-foreground">{l.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
