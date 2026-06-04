"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Section } from "./Section";
import { profile } from "../../data/bio";

export function Contact() {
  return (
    <Section id="contact" subtitle="Get in touch" title="Let's build something remarkable">
      <div
        data-reveal
        className="mx-auto max-w-2xl rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 p-10 text-center will-change-transform"
      >
        <p className="text-lg text-muted-foreground">
          Open to full-time roles, contract work, and interesting AI product
          collaborations.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            {profile.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-violet-400" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
