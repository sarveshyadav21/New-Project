import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

import { buildPortfolioChatPrompt } from "../../../lib/chat-prompt";
import { formatChatReply } from "../../../lib/format-chat-reply";
import {
  generateOllamaReply,
  isOllamaAvailable,
} from "../../../lib/ollama-chat";

async function tryGemini(prompt: string): Promise<string | null> {
  const apiKey = process.env.GOOGLE_API_KEY?.trim();

  if (!apiKey) {
    return null;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL ?? "gemini-2.0-flash",
    });
    const result = await model.generateContent(prompt);
    const text = result.response.text()?.trim();

    return text || null;
  } catch (error) {
    console.warn(
      "Gemini skipped:",
      error instanceof Error ? error.message : "fetch failed",
    );
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userMsg = messages[messages.length - 1]?.content ?? "";

    if (!userMsg.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const history = messages
      .slice(0, -1)
      .map(
        (message: { role: string; content: string }) =>
          `${message.role === "user" ? "Visitor" : "Assistant"}: ${message.content}`,
      )
      .join("\n");

    // If the visitor explicitly asks for a resume/CV, return a PDF link instead
    const lower = userMsg.toLowerCase();
    if (
      /(resume|cv|curriculum vitae|send (my )?resume|share (my )?resume)/i.test(
        lower,
      )
    ) {
      const origin = new URL(req.url).origin;
      const resumeUrl = `${origin}/api/resume`;
      const resumeReply = `Sure — you can download my resume here: [Download PDF](${resumeUrl})`;

      return NextResponse.json({
        reply: formatChatReply(resumeReply),
        provider: null,
        fileUrl: resumeUrl,
      });
    }

    const prompt = buildPortfolioChatPrompt(userMsg, history);

    const useOllamaOnly =
      process.env.CHAT_PROVIDER === "ollama" ||
      process.env.USE_OLLAMA_ONLY === "true";

    let reply: string | null = null;
    let provider: "gemini" | "ollama" = "ollama";

    if (useOllamaOnly) {
      if (!(await isOllamaAvailable())) {
        return NextResponse.json(
          {
            error: "Ollama is not running. Start it with: ollama serve",
          },
          { status: 503 },
        );
      }

      reply = await generateOllamaReply(prompt);
    } else {
      reply = await tryGemini(prompt);

      if (reply) {
        provider = "gemini";
      } else {
        reply = await generateOllamaReply(prompt);
        provider = "ollama";
      }
    }

    return NextResponse.json({
      reply: formatChatReply(reply ?? ""),
      provider,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    const message =
      error instanceof Error && error.name === "AbortError"
        ? "Ollama timed out — use gemma:2b (faster): ollama pull gemma:2b"
        : error instanceof Error
          ? error.message
          : "Chat failed";

    return NextResponse.json(
      { error: `Could not reach AI. ${message}` },
      { status: 503 },
    );
  }
}
