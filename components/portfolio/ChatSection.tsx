"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PortfolioChatbot } from "../chat/PortfolioChatbot";
import { Section } from "./Section";

export function ChatSection() {
  return (
    <Section
      id="chat"
      subtitle="AI Assistant"
      title="Chat with me"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-8 text-muted-foreground">
            It&apos;s me — not a generic bot. Ask about my work at Sheshi, the
            Incident Intelligence Platform, or how to collaborate. I keep
            answers short and straight.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              Instant answers about skills & experience
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              Deep context on flagship AI projects
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              Ollama local AI with Gemini fallback when configured
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PortfolioChatbot variant="embedded" />
        </motion.div>
      </div>
    </Section>
  );
}
