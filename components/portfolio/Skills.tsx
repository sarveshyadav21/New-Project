"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "../../data/projects";

export function Skills() {
  return (
    <Section id="skills" subtitle="Expertise" title="Skills & technologies">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.08 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-400">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-violet-500/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
