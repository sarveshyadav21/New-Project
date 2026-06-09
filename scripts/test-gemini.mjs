import fs from 'fs';
import path from 'path';

// Load .env manually (simple parser)
const envPath = path.resolve(process.cwd(), '.env');
let env = {};
if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, 'utf8');
  raw.split(/\n/).forEach((line) => {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) {
      let val = m[2];
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      env[m[1]] = val;
    }
  });
}

const apiKey = env.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;
if (!apiKey) {
  console.error('No GOOGLE_API_KEY found in .env or environment. Aborting.');
  process.exit(1);
}
// Export into process.env as some clients read the env internally
process.env.GOOGLE_API_KEY = apiKey;

// Print a masked preview of the key for verification (first/last 4 chars)
const masked = `${apiKey.slice(0, 4)}...${apiKey.slice(-4)}`;
console.log(`Using GOOGLE_API_KEY: ${masked}`);

// Dynamic import of the Google Generative AI client
const { GoogleGenerativeAI } = await import('@google/generative-ai');

// Build a simple prompt following the same persona rules
const sarveshBioChat = `Sarvesh Yadav — SDE, Full-Stack, Bangalore.
Contact: sarveshyadav5971@gmail.com | 7232092001 | github.com/sarveshyadav21

Current: SDE1 Full Stack @ Sheshi AI (Mar 2025–present). I work on Java (Spring Boot) and Node.js microservices — focusing on multi-tenant RBAC, Redis caching (≈40% fewer DB hits), WebSockets for real-time UIs, and AI microservices (OpenAI/Claude/Gemini). I also optimize Next.js performance (examples: 6s → 500ms).

Skills: Next.js, React, TypeScript, Java, Spring Boot, Node.js, NestJS, PostgreSQL, Redis, WebSocket/Socket.io, BullMQ, AWS, JWT/RBAC, Ollama, Gemini, Agile/JIRA.
`;

const profileAvailability = 'Open to opportunities';
const email = 'sarveshyadav5971@gmail.com';

const userMsg = 'Hi how are you';

const prompt = `You ARE Sarvesh Yadav. First person only ("I", "my"). Casual chat on your portfolio — like texting a recruiter.

PERSONA & VOICE:
- Speak like a friendly, natural person. Use contractions (I'm, I've), short sentences, and plain language.
- Be grounded and neutral about current work. Do NOT use enthusiastic employer-loyalty phrases like "loving my role".
- State availability clearly when relevant: "${profileAvailability}". If asked directly "How are you?", prefer: "I'm doing well, thanks — I'm currently exploring new opportunities."

RULES:
- 2-4 short sentences OR 2-3 bullets max. No long paragraphs.
- No "Hi there!", "happy to help", or corporate buzzwords.
- Answer only what they asked. Don't dump your whole resume.
- Unknown? Say "Not sure — email me at ${email}"

Facts:
${sarveshBioChat}

Recent chat:
None

Question: ${userMsg}

Short reply:`;

(async function main() {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL ?? 'gemini-2.0-flash' });

    console.log('Sending prompt to Gemini (truncated preview):\n');
    console.log(prompt.split('\n').slice(0, 40).join('\n'));
    console.log('\n---\nCalling Gemini...');

    const result = await model.generateContent(prompt);

    // result.response may have .text() helper
    const text = (result.response && typeof result.response.text === 'function') ? await result.response.text() : JSON.stringify(result);

    console.log('\nGemini reply:\n');
    console.log(text.trim());
  } catch (err) {
    console.error('Error calling Gemini:', err?.message || err);
    process.exitCode = 2;
  }
})();
