"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "../../data/projects";

export function Experience() {
  return (
    <Section id="experience" subtitle="Career" title="Experience">
      <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-violet-500 before:to-transparent">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-violet-500 bg-[#030712]" />
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white">{job.role}</h3>
                  <p className="text-violet-300">{job.company}</p>
                </div>
                <span className="text-sm text-zinc-500">
                  {job.period} · {job.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-sm text-zinc-400">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
