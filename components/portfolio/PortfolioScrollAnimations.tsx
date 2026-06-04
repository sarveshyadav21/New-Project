"use client";

import { useGSAP } from "@gsap/react";

import { gsap, registerGsapPlugins, ScrollTrigger } from "../../lib/gsap/register";

export function PortfolioScrollAnimations() {
  useGSAP(() => {
    registerGsapPlugins();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    const revealTriggers: ScrollTrigger[] = [];

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const tween = gsap.from(el, {
        opacity: 0,
        y: 48,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
      if (tween.scrollTrigger) revealTriggers.push(tween.scrollTrigger);
    });

    gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
      const items = group.querySelectorAll("[data-reveal-item]");
      if (!items.length) return;

      const tween = gsap.from(items, {
        opacity: 0,
        y: 32,
        duration: 0.75,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      if (tween.scrollTrigger) revealTriggers.push(tween.scrollTrigger);
    });

    return () => {
      revealTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
