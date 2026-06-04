"use client";

import { Section } from "./Section";
import { skills } from "../../data/projects";

export function Skills() {
  return (
    <Section id="skills" subtitle="Expertise" title="Skills & technologies">
      <div data-reveal-stagger className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            data-reveal-item
            className="rounded-2xl border border-border bg-gradient-to-br from-surface/80 to-background p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-400">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80 transition hover:border-violet-500/50 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
