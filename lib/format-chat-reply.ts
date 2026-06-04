/** Trim and lightly clean model output for chat UI */
export function formatChatReply(raw: string): string {
  let text = raw.trim();

  // Drop common robotic openers
  text = text.replace(
    /^(hi there!?|hello!?|hey there!?)\s*/i,
    "Hey! ",
  );

  // Collapse excessive whitespace
  text = text.replace(/\n{3,}/g, "\n\n");

  // Hard cap ~120 words for chat bubbles
  const words = text.split(/\s+/);
  if (words.length > 120) {
    text = words.slice(0, 120).join(" ") + "…";
  }

  return text;
}
