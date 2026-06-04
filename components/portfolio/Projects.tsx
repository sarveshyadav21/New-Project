"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects" subtitle="Portfolio" title="Featured projects">
      <div data-reveal-stagger className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            data-reveal-item
            className={`group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${project.gradient} p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5`}
          >
            {project.featured && (
              <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-1 text-xs font-medium text-violet-300">
                <Star className="h-3 w-3 fill-current" />
                Flagship
              </span>
            )}

            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-black/30 px-2 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition group-hover:text-foreground"
              >
                View live
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
