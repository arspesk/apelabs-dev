export interface Project {
  title: string;
  icon: string;
  date: string;
  category: string;
  description: string;
  tech: string[];
  results: string[];
  skills: string[];
  image: string;
  imagePosition?: string;
  video?: string;
  featured?: boolean;
}

// Sorted newest → oldest
export const aiProjects: Project[] = [
  {
    title: "sur9e — AI Job-Hunt Toolkit",
    icon: "🎯",
    date: "Jun 2026",
    category: "AI / Open Source",
    description:
      "Free, self-hosted AI job-hunt toolkit that runs inside any AI coding agent (Claude Code, Codex, OpenCode). A two-stage pipeline screens roles cheap, evaluates the survivors deep, tailors a CV per role, and tracks every application in a local web UI. Never auto-submits.",
    tech: ["Next.js 16", "React 19", "TypeScript", "TanStack Query", "Zustand", "Radix UI", "TipTap", "Python"],
    results: [
      "Live at sur9e.com — open source (MIT)",
      "Configurable models per mode — cheap to screen, capable to evaluate",
      "100% local — no accounts, no telemetry",
      "Built and maintained solo, in the open",
    ],
    skills: ["Next.js", "React", "TypeScript", "Server Actions", "Open Source"],
    image: "/projects/sur9e.jpg",
    video: "/projects/sur9e-demo.mp4",
    featured: true,
  },
  {
    title: "Hotel Reputation Dashboard",
    icon: "🏨",
    date: "Feb 2026",
    category: "App",
    description:
      "Full-stack reputation monitoring platform aggregating hotel reviews from Google, TripAdvisor, Booking.com, and Expedia with normalized scoring and historical tracking.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "SerpAPI", "Vercel"],
    results: [
      "Built and deployed end-to-end in 3 days",
      "Real-time data from 4 review platforms",
      "Weighted average scoring system",
      "CSV import/export + historical snapshots",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "SerpAPI"],
    image: "/projects/hotel-reputation-dashboard.png",
    imagePosition: "bottom",
  },
  {
    title: "Customer Survey Automation",
    icon: "📊",
    date: "Jul 2025",
    category: "Automation/AI",
    description:
      "Automated post-transaction SMS survey system with AI-powered sentiment analysis and conditional branching flows.",
    tech: ["Python", "Twilio SMS", "Sentiment Analysis", "Grafana"],
    results: [
      "35% response rate (industry avg: 10-15%)",
      "Identified 3 major UX issues",
      "70% faster feedback-to-action cycle",
    ],
    skills: ["Python", "Twilio", "Microservices"],
    image: "/projects/customer-survey-automation.png",
  },
  {
    title: "Rehash AI Remarketing",
    icon: "📱",
    date: "May 2025",
    category: "Automation/AI",
    description:
      "ML-driven remarketing system that re-engages customers with stalled financing applications through personalized SMS campaigns.",
    tech: ["Python", "Twilio", "OpenAI NLP", "Snowflake", "A/B Testing"],
    results: [
      "Recovered 12% of stalled applications",
      "3x higher response rate vs generic campaigns",
      "40% reduction in manual follow-up",
      "ROI positive within first month",
    ],
    skills: ["Python", "Twilio", "NLP", "Microservices", "Prompt Engineering"],
    image: "/projects/rehash-ai-remarketing.png",
  },
  {
    title: "Internal Knowledge AI",
    icon: "🧠",
    date: "Mar 2025",
    category: "AI/ML",
    description:
      "Internal knowledge management system enabling employees to find answers across company docs using natural language queries via Slack.",
    tech: ["Python/FastAPI", "Pinecone", "OpenAI GPT-4", "Slack Bot", "Auto-ingestion"],
    results: [
      "60% reduction in time to find info",
      "Decreased repetitive questions to senior staff",
      "Foundation for future AI initiatives",
    ],
    skills: ["Python", "OpenAI APIs", "RAG Architecture", "Pinecone", "Semantic Search"],
    image: "/projects/internal-knowledge-ai.png",
  },
  {
    title: "AI Support Chat",
    icon: "💬",
    date: "Feb 2025",
    category: "App/AI",
    description:
      "AI-powered customer support chatbot deployed on finturf.com handling customer inquiries, qualifying leads, and reducing support ticket volume.",
    tech: ["Python/FastAPI", "OpenAI GPT-4", "Pinecone RAG", "Crisp API", "Docker/AWS"],
    results: [
      "15% increase in lead conversion",
      "25% reduction in support tickets",
      "Response time under 2 seconds",
      "85% customer satisfaction rating",
    ],
    skills: ["Python", "OpenAI APIs", "RAG Architecture", "Pinecone", "Crisp API", "Semantic Search", "Microservices"],
    image: "/projects/ai-support-chat.png",
    imagePosition: "top",
  },
];

// Sorted newest → oldest
export const infraProjects: Project[] = [
  {
    title: "Stripe Connect Payments Platform",
    icon: "💳",
    date: "Aug 2025",
    category: "Integration",
    description:
      "Marketplace payment infrastructure using Stripe Connect for merchant payments with split routing and compliance workflows.",
    tech: ["Stripe Connect", "Python/Node.js", "AWS Multi-Region", "PCI DSS"],
    results: [
      "New revenue stream via processing fees",
      "Improved merchant retention",
      "Reduced checkout friction",
    ],
    skills: ["Stripe Connect", "REST APIs", "Docker", "AWS"],
    image: "/projects/stripe-connect-payments.png",
  },
  {
    title: "SQL-based Grafana Dashboards",
    icon: "📈",
    date: "Apr 2025",
    category: "Infrastructure",
    description:
      "Self-service analytics platform with executive, operations, sales, and support dashboards enabling data-driven decisions.",
    tech: ["Grafana", "Snowflake", "Optimized SQL", "Materialized Views"],
    results: [
      "70% reduction in ad-hoc reporting",
      "Minutes instead of days to insights",
      "Empowered non-technical self-serve analytics",
    ],
    skills: ["SQL", "Grafana"],
    image: "/projects/grafana-dashboards.png",
  },
  {
    title: "External Partner API Design",
    icon: "🔌",
    date: "Jan – Dec 2024",
    category: "API Development",
    description:
      "Standardized RESTful API framework enabling rapid integration of new lending partners into the Finturf platform with OAuth 2.0 and auto-generated docs.",
    tech: ["Python/FastAPI", "OpenAPI/Swagger", "OAuth 2.0", "Docker", "AWS ECS"],
    results: [
      "40% reduction in partner integration time",
      "4+ lending partners onboarded",
      "Zero critical API incidents since launch",
      "99.9% uptime maintained",
    ],
    skills: ["REST APIs", "Docker", "AWS"],
    image: "/projects/external-partner-api.png",
  },
  {
    title: "SOC 2 Certification",
    icon: "🛡️",
    date: "Apr – Oct 2024",
    category: "Security",
    description:
      "Led SOC 2 Type II certification initiative — gap analysis, security control implementation, documentation, and audit coordination.",
    tech: ["Security Controls", "NetSpi", "Access Control", "Encryption"],
    results: [
      "80% of controls successfully closed",
      "Passed all technical-related controls",
      "Enabled enterprise client compliance requirements",
    ],
    skills: ["SOC 2", "NetSpi"],
    image: "/projects/soc2-certification.png",
  },
  {
    title: "Lending Platform Integration",
    icon: "🔗",
    date: "Mar 2024",
    category: "Integration",
    description:
      "Full integration between legacy Turns platform and ServiceTitan with bidirectional data sync and unified merchant experience.",
    tech: ["Retool", "Snowflake", "ServiceTitan API", "Real-time Sync"],
    results: [
      "45% increase in application volume",
      "Eliminated manual data entry",
      "50% faster merchant onboarding",
      "Zero data inconsistencies post-migration",
    ],
    skills: ["Retool", "Snowflake", "REST APIs"],
    image: "/projects/lending-platform-integration.png",
  },
];
