export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "incident-intelligence",
    title: "AI Incident Intelligence Platform",
    description:
      "Enterprise multi-agent incident analysis with real-time RCA, vector similarity, and executive reporting.",
    highlights: [
      "11 AI agents with Ollama model routing (phi3, mistral, llama3)",
      "BullMQ + Redis + WebSocket live progress",
      "Similar incidents, dependency graphs, auto postmortems",
    ],
    tech: ["NestJS", "Next.js", "Prisma", "pgvector", "BullMQ", "Ollama"],
    link: "http://localhost:3000",
    featured: true,
    gradient: "from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20",
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant Auth & Domain Routing",
    description:
      "RBAC-based multi-tenant login with Redis session caching across Java and Node.js services.",
    highlights: [
      "~40% reduction in auth DB queries",
      "500+ concurrent organizations",
      "JWT, secure cookies, tenant isolation",
    ],
    tech: ["Next.js", "Spring Boot", "Node.js", "PostgreSQL", "Redis", "JWT"],
    gradient: "from-blue-600/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    id: "realtime-ws",
    title: "Real-Time Collaboration (WebSocket + Redis)",
    description:
      "Live data sync via Socket.io and Redis Pub/Sub integrated into Next.js without polling.",
    highlights: [
      "Zero-polling live UI updates",
      "Event-driven architecture",
      "Node.js + Next.js full stack",
    ],
    tech: ["Node.js", "Socket.io", "Redis Pub/Sub", "Next.js"],
    gradient: "from-cyan-600/20 via-teal-500/10 to-emerald-500/20",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot & Data Automation",
    description:
      "Microservices for in-app chatbot and LLM pipelines using OpenAI, Claude, Gemini, and Ollama.",
    highlights: [
      "Java & Node.js AI microservices",
      "Portfolio assistant with Ollama fallback",
      "Structured resume-grounded responses",
    ],
    tech: ["Java", "Node.js", "Ollama", "OpenAI", "Next.js"],
    gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    id: "perf-optimization",
    title: "Frontend Performance Engineering",
    description: "12x load time improvement — 6 seconds to under 500ms.",
    highlights: [
      "SSR/SSG, lazy loading, code splitting",
      "Lighthouse score +40 points",
    ],
    tech: ["Next.js", "React", "Lighthouse", "Webpack"],
    gradient: "from-amber-600/20 via-orange-500/10 to-rose-500/20",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "Redux", "TypeScript", "TailwindCSS", "Socket.io"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "NestJS", "Express", "Microservices"],
  },
  {
    category: "AI & Cloud",
    items: ["Ollama", "OpenAI", "Gemini", "AWS Lambda", "CI/CD", "Prompt Engineering"],
  },
  {
    category: "Data & Realtime",
    items: ["PostgreSQL", "Redis", "MongoDB", "WebSocket", "pgvector", "BullMQ"],
  },
];

export const experience = [
  {
    role: "SDE1 – Full Stack",
    company: "Sheshi AI",
    period: "Mar 2025 — Present",
    location: "Bengaluru",
    points: [
      "Java Spring Boot + Node.js microservices across 5+ services",
      "Multi-tenant RBAC for 500+ organizations; Redis caching (−40% DB hits)",
      "WebSocket real-time features; AI microservices (OpenAI, Claude, Gemini)",
      "Next.js performance: 6s → <500ms; resolved critical auth vulnerabilities",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Masai",
    period: "Aug 2024 — Mar 2025",
    location: "Bengaluru",
    points: [
      "6+ production-grade Node.js/Express APIs",
      "Microservices, JWT auth, PostgreSQL/MongoDB optimization",
      "Next.js/React with Redux; Lighthouse +30%",
    ],
  },
  {
    role: "Associate (US Client)",
    company: "The Judge Group",
    period: "Jul 2022 — Aug 2023",
    location: "Noida",
    points: [
      "Java Spring Boot backend for 1,000+ concurrent users",
      "Client-facing dev for cross-functional team of 8+",
      "JIRA sprint management; zero critical post-release defects on releases",
    ],
  },
];

export const education = [
  {
    degree: "BTech – Electronics and Communications Engineering",
    school: "Poornima College of Engineering",
    period: "2018 — 2022",
  },
];

export const certifications = [
  "Full-Stack Development Certification (Java) — Samyak Computer Classes",
];
