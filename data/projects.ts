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
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "JWT"],
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
      "Node.js AI microservices",
      "Portfolio assistant with Ollama fallback",
      "Structured resume-grounded responses",
    ],
    tech: ["Node.js", "Ollama", "OpenAI", "Next.js"],
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
    items: ["Node.js", "NestJS", "Express", "Microservices"],
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
      "Built scalable multi-tenant SaaS applications using Node.js, React, Next.js & Redis",
      "Designed JWT/RBAC authentication and white-label architecture for 1,000+ organizations",
      "Implemented AI workflows, Redis Pub/Sub, Socket.io & AWS Lambda for scalable real-time systems",
      "Optimized Next.js performance (SSR/SSG, lazy loading), reducing page load from ~6s to <500ms",
    ],
  },
  {
    role: "Full-Stack Developer Training",
    company: "Masai",
    period: "Aug 2024 — Mar 2025",
    location: "Bengaluru",
    points: [
      "Built production-grade REST APIs using Node.js & Express.js",
      "Designed microservice-based applications with JWT, PostgreSQL & MongoDB",
      "Developed Next.js/React applications with performance optimization",
    ],
  }
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
