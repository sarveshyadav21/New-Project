"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-xl border border-border bg-surface ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center gap-0.5 rounded-xl border border-border bg-surface p-1 ${className}`}
      role="group"
      aria-label="Theme"
    >
      {(
        [
          { id: "light", icon: Sun, label: "Light" },
          { id: "dark", icon: Moon, label: "Dark" },
          { id: "system", icon: Monitor, label: "System" },
        ] as const
      ).map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          type="button"
          title={label}
          onClick={() => setTheme(id)}
          className={`rounded-lg p-2 transition ${
            (theme ?? "system") === id
              ? "bg-violet-500/20 text-violet-600 dark:text-violet-300"
              : "text-muted-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
          }`}
        >
          <Icon className="h-4 w-4" />
          <span className="sr-only">{label}</span>
        </button>
      ))}
      <span className="sr-only">Current: {resolvedTheme}</span>
    </div>
  );
}
