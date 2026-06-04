const OLLAMA_HOST = process.env.OLLAMA_HOST ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_CHAT_MODEL ?? "gemma:2b";
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS ?? 180_000);

export async function generateOllamaReply(prompt: string): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OLLAMA_TIMEOUT_MS);

  try {
    const response = await fetch(`${OLLAMA_HOST}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        keep_alive: "10m",
        options: {
          temperature: 0.65,
          num_predict: 150,
          top_p: 0.9,
          num_ctx: 2048,
        },
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Ollama ${response.status}: ${body.slice(0, 120)}`);
    }

    const data = (await response.json()) as { response?: string };
    const text = data.response?.trim();

    if (!text) {
      throw new Error("Empty response from Ollama");
    }

    return text;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(
        `Timed out after ${OLLAMA_TIMEOUT_MS / 1000}s. Try OLLAMA_CHAT_MODEL=gemma:2b and run: ollama pull gemma:2b`,
      );
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export async function isOllamaAvailable(): Promise<boolean> {
  try {
    const response = await fetch(`${OLLAMA_HOST}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function warmupOllamaModel(): Promise<void> {
  try {
    await fetch(`${OLLAMA_HOST}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt: "Hi",
        stream: false,
        options: { num_predict: 1 },
      }),
      signal: AbortSignal.timeout(120_000),
    });
  } catch {
    // warm-up is best-effort
  }
}
