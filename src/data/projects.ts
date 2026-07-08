export const PROJECTS = [
  {
    id: "01",
    slug: "quantumos",
    title: "QuantumOS",
    type: "AI-Powered Enterprise OS & SaaS",
    tagline: "A spatial SaaS workspace and collaborative execution environment powered by custom natural-language AI agent pipelines.",
    context: "SaaS workspaces are often fragmented, separating project planning, task management, system configuration, and AI chat into disjointed tabs.",
    problem: "Needed a unified, immersive, and high-performance environment that integrates collaborative tasks with dynamic, state-mutating AI agents and a simulated spatial OS.",
    solution: "Architected a dual-architecture environment: a modern SaaS dashboard integrated with an interactive spatial desktop environment. Built a Spring Boot API with a custom natural language processor that mutates the live Neon.tech PostgreSQL database on standard chat prompts.",
    outcome: "Created a unified workspace hosting live taskboards, personalized settings, a secure, dynamic login flow, and a mock desktop OS featuring custom terminal shell and window managers.",
    architecture: "Enterprise-grade Spring Boot backend exposing security APIs and custom AI command endpoints, connected to a highly responsive React/Vite frontend with dynamic local storage cache and spring transactions.",
    features: ["Natural Language DB Mutation Agent", "Personalized Lock Screen & Desktop VFS", "ACID-compliant Live Project/Task Boards"],
    tech: ["Java", "Spring Boot", "React", "Vite", "Neon.tech", "PostgreSQL"],
    links: { live: "https://quantum-os-bzoj.vercel.app", source: "https://github.com/L-Nithish/QuantumOS" },
    technicalDecisions: "Pioneered a rule-based AI processing layer directly within backend services to bypass expensive, high-latency LLM polling for routine workspace mutations, driving response times to sub-50ms.",
    image: "/images/quantumos.png",
    domain: "workspace.quantumos.dev"
  },
  {
    id: "02",
    slug: "succession-ai",
    title: "Succession AI",
    type: "Real-Time AI Ecosystem",
    tagline: "An event-driven developer sandbox and real-time AI mock interview coaching workspace.",
    context: "Technical interview preparation often lacks real-time, context-aware, and dynamic feedback.",
    problem: "Standard HTTP request-response cycles are too slow for real-time interview coaching, breaking the conversational immersion.",
    solution: "Engineered a low-latency communication layer using WebSockets (STOMP brokers) and integrated the OpenAI Chat Completion API for dynamic resume parsing.",
    outcome: "Created a highly responsive mock interview ecosystem featuring an in-browser coding sandbox and comprehensive recruiter dashboards.",
    architecture: "Event-driven system design leveraging STOMP message brokers to manage bi-directional, full-duplex communication between Next.js and Spring Boot.",
    features: ["In-Browser Syntax Validation Sandbox", "Dynamic OpenAI Question Generation", "Live WebSocket Chat Ecosystem"],
    tech: ["Next.js", "Spring Boot", "WebSockets (STOMP)", "OpenAI API", "PostgreSQL"],
    links: { live: "https://succession-ai-s4hp.vercel.app", source: "https://github.com/l-nithish/succession-ai" },
    technicalDecisions: "Traditional HTTP polling is too slow for conversational AI. Implemented STOMP over WebSockets to maintain persistent full-duplex channels, dropping latency down to sub-100ms for coding sandbox execution.",
    image: "/images/succession_ai.png",
    domain: "succession-ai.nithish.dev"
  }
];

export const ARCHIVE = [
  {
    id: "03",
    title: "Movie Explorer",
    desc: "A masterclass in lightweight, dependency-free JavaScript execution. Engineered a highly optimized async/await engine to query external OMDb APIs without blocking the main thread.",
    tech: ["Vanilla JS", "REST APIs", "CSS3"],
    link: "https://l-nithish.github.io/movie-search-app/"
  }
];
