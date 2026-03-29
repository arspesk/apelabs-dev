export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI / ML",
    items: [
      "Agentic Workflows",
      "RAG Architecture",
      "OpenAI APIs",
      "LLM Integration",
      "Vector Search",
      "Pinecone",
      "Prompt Engineering",
      "AI Model Evaluation",
      "NLP",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
  {
    name: "Languages",
    items: ["Python", "TypeScript", "SQL", "JavaScript"],
  },
  {
    name: "Infrastructure",
    items: [
      "Stripe Connect",
      "Docker",
      "AWS",
      "Snowflake",
      "n8n",
      "Zapier",
      "Retool",
      "Node.js",
      "Git",
      "Grafana",
      "Microsoft Azure",
    ],
  },
  {
    name: "Solutions Engineering",
    items: [
      "Pre-Sales",
      "Technical Discovery",
      "POC Development",
      "API Integration",
    ],
  },
  {
    name: "QA",
    items: ["Manual Testing", "API Testing", "Automation"],
  },
];
