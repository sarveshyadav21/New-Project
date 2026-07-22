"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { profile } from "../../data/bio";
import { gsap, registerGsapPlugins } from "../../lib/gsap/register";
import profilePic from "../../data/1000051084.png";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        scale: 0.92,
        duration: 0.65,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 56,
            duration: 0.85,
          },
          "-=0.35",
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 28,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".hero-tagline",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
          },
          "-=0.4",
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 18,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hero-social-link",
          {
            opacity: 0,
            scale: 0.75,
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.25",
        )
        .from(
          ".hero-avatar",
          {
            opacity: 0,
            scale: 0.7,
            duration: 0.7,
          },
          0,
        );

      gsap.to(".hero-avatar", {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-a", {
        x: 40,
        y: -24,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-b", {
        x: -32,
        y: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".hero-scroll-hint", {
        y: 10,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="hero-orb-a glow-orb absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600" />
      <div className="hero-orb-b glow-orb absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-600" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Profile photo */}
        <div className="hero-avatar mb-8 inline-block">
          <div
            className="relative h-36 w-36 rounded-full p-[3px]"
            style={{
              background:
                "conic-gradient(from 0deg, #a855f7, #e879f9, #22d3ee, #a855f7)",
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-background">
              <Image
                src={profilePic}
                alt="Sarvesh Yadav — profile photo"
                width={144}
                height={144}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-30 blur-lg"
              style={{
                background:
                  "conic-gradient(from 0deg, #a855f7, #e879f9, #22d3ee, #a855f7)",
              }}
            />
          </div>
        </div>

        <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.availability}
        </span>

        <h1 className="hero-title mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {profile.name.split(" ")[0]}
          </span>
        </h1>

        <p className="hero-subtitle mt-4 text-xl text-muted-foreground sm:text-2xl">
          {profile.title}
        </p>

        <p className="hero-tagline mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="hero-cta rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View my work
          </a>
          <a
            href="#chat"
            className="hero-cta rounded-2xl border border-border bg-surface/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-violet-500/50"
          >
            Chat with my AI
          </a>
          <a
            href={
              process.env.NEXT_PUBLIC_INCIDENT_PLATFORM_URL ??
              "http://localhost:3000"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            Live demo
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

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
              className="hero-social-link flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition hover:border-violet-500/50 hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll-hint absolute bottom-10 text-muted-foreground"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
