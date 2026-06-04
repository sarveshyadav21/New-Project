"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "../../lib/utils";

type Props = {
  role: "user" | "assistant";
  content: string;
};

export function ChatMessage({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <div className={cn("flex gap-2", isUser ? "flex-row-reverse" : "flex-row")}>
      {!isUser && (
        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-xs font-bold text-violet-300">
          SY
        </div>
      )}

      <div
        className={cn(
          "max-w-[88%] rounded-2xl px-3.5 py-2.5",
          isUser
            ? "rounded-br-md bg-violet-600 text-white"
            : "rounded-bl-md border border-white/10 bg-zinc-900/90 text-zinc-200",
        )}
      >
        {!isUser && (
          <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-violet-400/80">
            Sarvesh
          </p>
        )}

        <div
          className={cn(
            "chat-markdown text-[13px] leading-relaxed",
            isUser ? "text-white" : "text-zinc-300",
          )}
        >
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-2 last:mb-0">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="text-zinc-300">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-white">{children}</strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-violet-400 underline hover:text-violet-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
