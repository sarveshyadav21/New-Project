"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects" subtitle="Portfolio" title="Featured projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} p-6 backdrop-blur-sm`}
          >
            {project.featured && (
              <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-1 text-xs font-medium text-violet-300">
                <Star className="h-3 w-3 fill-current" />
                Flagship
              </span>
            )}

            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-zinc-500"
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
                  className="rounded-lg bg-black/30 px-2 py-1 text-xs text-zinc-400"
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
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition group-hover:text-white"
              >
                View live
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
