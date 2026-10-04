"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import {
  THEME_EVENT,
  ThemeMode,
  applyTheme,
  getStoredMode,
  setMode,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function useThemeMode(): ThemeMode {
  const mode = useSyncExternalStore<ThemeMode>(subscribe, getStoredMode, () => "auto");

  // In "auto", follow live OS preference changes.
  useEffect(() => {
    if (mode !== "auto") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("auto");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [mode]);

  return mode;
}

const LABELS: Record<ThemeMode, string> = {
  auto: "אוטומטי",
  light: "בהיר",
  dark: "כהה",
};

const NEXT: Record<ThemeMode, ThemeMode> = { auto: "light", light: "dark", dark: "auto" };

const ICONS = { auto: Monitor, light: Sun, dark: Moon };

/** Icon button for the navbar: cycles Auto -> Light -> Dark. */
export function ThemeToggle({ className }: { className?: string }) {
  const mode = useThemeMode();
  const Icon = ICONS[mode];
  return (
    <button
      type="button"
      onClick={() => setMode(NEXT[mode])}
      aria-label={`מצב תצוגה: ${LABELS[mode]}. לחצו כדי להחליף ל${LABELS[NEXT[mode]]}`}
      title={`מצב תצוגה: ${LABELS[mode]}`}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

/** Three-way segmented control for the footer. */
export function ThemeSegmented({ className }: { className?: string }) {
  const mode = useThemeMode();
  const options: ThemeMode[] = ["auto", "light", "dark"];
  return (
    <div className={className}>
      <div
        role="group"
        aria-label="מצב תצוגה"
        className="inline-flex overflow-hidden rounded-xl border border-slate-700"
      >
        {options.map((option) => {
          const Icon = ICONS[option];
          const active = mode === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setMode(option)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--color-brand-gold)]",
                active
                  ? "bg-[var(--color-brand-gold)] text-[#1B1405]"
                  : "text-slate-200 hover:bg-slate-800"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {LABELS[option]}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-slate-400">ברירת המחדל לפי הגדרות המכשיר</p>
    </div>
  );
}
