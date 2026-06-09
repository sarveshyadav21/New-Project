/** Trim and lightly clean model output for chat UI */
export function formatChatReply(raw: string): string {
  let text = raw.trim();

  // Replace overly enthusiastic employer-loyalty phrases (bot-like) with a
  // neutral, human-sounding availability line.
  // Examples: "I love working at X", "I'm loving my role", "I love my job"
  text = text.replace(
    /\b(I\s+(love|really enjoy|am loving)\s+(working\s+at|my\s+(role|job)|this\s+role)[^.!?\n]{0,80})\b/gi,
    "I'm doing well — I'm currently exploring new opportunities.",
  );
  text = text.replace(
    /\b(loving my role|love my role|love my job)\b/gi,
    "I'm doing well — I'm currently exploring new opportunities.",
  );

  // Drop common robotic openers
  text = text.replace(/^(hi there!?|hello!?|hey there!?)\s*/i, "Hey! ");

  // Collapse excessive whitespace
  text = text.replace(/\n{3,}/g, "\n\n");

  // Hard cap ~120 words for chat bubbles
  const words = text.split(/\s+/);
  if (words.length > 120) {
    text = words.slice(0, 120).join(" ") + "…";
  }

  return text;
}
