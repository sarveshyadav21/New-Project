"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Shield, Zap } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  {
    icon: Brain,
    title: "AI Systems",
    text: "Multi-agent orchestration, embeddings, and production LLM pipelines.",
  },
  {
    icon: Rocket,
    title: "Full Stack",
    text: "Next.js + NestJS monorepos that scale from MVP to enterprise.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Obsessed with sub-second UX — SSR, caching, and measured optimizations.",
  },
  {
    icon: Shield,
    title: "Security",
    text: "Auth, RBAC, tenant isolation, and session hardening in real SaaS.",
  },
];

export function About() {
  return (
    <Section id="about" subtitle="Introduction" title="Building the future of intelligent ops">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg leading-8 text-zinc-400"
        >
          I&apos;m a Full-Stack SDE with 2+ years across Java (Spring Boot),
          Node.js, and Next.js — based in Bangalore. I build{" "}
          <span className="text-white">multi-tenant SaaS</span>, real-time
          WebSocket systems, and AI microservices for 500+ organizations at
          Sheshi AI.
          <br />
          <br />
          My work sits at the intersection of{" "}
          <span className="text-violet-300">backend architecture</span>,{" "}
          <span className="text-cyan-300">real-time UX</span>, and{" "}
          <span className="text-fuchsia-300">applied machine learning</span>.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <item.icon className="h-8 w-8 text-violet-400" />
              <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
