"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { profile } from "../../data/bio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      <div className="glow-orb absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600" />
      <div className="glow-orb absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-600" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </motion.span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {profile.name.split(" ")[0]}
          </span>
        </h1>

        <p className="mt-4 text-xl text-zinc-400 sm:text-2xl">{profile.title}</p>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
          {profile.tagline}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View my work
          </a>
          <a
            href="#chat"
            className="rounded-2xl border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-500/50"
          >
            Chat with my AI
          </a>
          <a
            href={process.env.NEXT_PUBLIC_INCIDENT_PLATFORM_URL ?? "http://localhost:3000"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Live demo
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-12 flex justify-center gap-4">
          {[
            { href: profile.github, icon: Github },
            { href: profile.linkedin, icon: Linkedin },
            { href: `mailto:${profile.email}`, icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition hover:border-violet-500/40 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-zinc-600"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
