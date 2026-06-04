"use client";

import { GraduationCap, Award } from "lucide-react";
import { Section } from "./Section";
import { certifications, education } from "../../data/projects";

export function Education() {
  return (
    <Section id="education" subtitle="Background" title="Education & certifications">
      <div data-reveal-stagger className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.school}
            data-reveal-item
            className="rounded-2xl border border-border bg-surface/50 p-6"
          >
            <GraduationCap className="h-8 w-8 text-violet-400" />
            <h3 className="mt-3 font-semibold text-foreground">{item.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
            <p className="mt-2 text-xs text-muted-foreground">{item.period}</p>
          </div>
        ))}

        <div
          data-reveal-item
          className="rounded-2xl border border-border bg-surface/50 p-6"
        >
          <Award className="h-8 w-8 text-cyan-400" />
          <h3 className="mt-3 font-semibold text-foreground">Certifications</h3>
          <ul className="mt-4 space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm text-muted-foreground">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
