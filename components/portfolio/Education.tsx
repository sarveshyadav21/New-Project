"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Section } from "./Section";
import { certifications, education } from "../../data/projects";

export function Education() {
  return (
    <Section id="education" subtitle="Background" title="Education & certifications">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
          >
            <GraduationCap className="h-8 w-8 text-violet-400" />
            <h3 className="mt-3 font-semibold text-white">{item.degree}</h3>
            <p className="mt-1 text-sm text-zinc-400">{item.school}</p>
            <p className="mt-2 text-xs text-zinc-500">{item.period}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
        >
          <Award className="h-8 w-8 text-cyan-400" />
          <h3 className="mt-3 font-semibold text-white">Certifications</h3>
          <ul className="mt-4 space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm text-zinc-400">
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
