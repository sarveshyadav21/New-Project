import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-provider";

export const metadata: Metadata = {
  title: "Sarvesh Yadav — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Sarvesh Yadav: multi-agent AI systems, Next.js, NestJS, and production SaaS engineering.",
  openGraph: {
    title: "Sarvesh Yadav — AI Engineer",
    description: "Building intelligent systems that ship.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
