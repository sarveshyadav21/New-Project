"use client";

import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="will-change-transform">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            {subtitle}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
