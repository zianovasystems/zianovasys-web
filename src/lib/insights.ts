export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  date: string; // ISO
  readingTimeMin: number;
  tags: string[];
};

export const insightsPosts: InsightPost[] = [
  {
    slug: "scoping-an-ai-poc-that-ships",
    title: "How to scope an AI proof-of-concept that actually ships",
    excerpt:
      "Most enterprise AI POCs fail not on the model — they fail at the boundaries. Here's the scoping discipline that separates pilots that survive from pilots that die in the lab.",
    author: "Zianova Engineering",
    role: "Editorial",
    date: "2026-04-15",
    readingTimeMin: 7,
    tags: ["AI strategy", "Enterprise", "Delivery"],
  },
  {
    slug: "choosing-the-right-llm-for-enterprise-workflows",
    title: "Choosing the right LLM for enterprise workflows",
    excerpt:
      "GPT-class isn't always the answer. We walk through the decision matrix we actually use — closed vs. open-weight, hosted vs. private, and how to think about cost, latency, and risk together.",
    author: "Zianova Engineering",
    role: "Editorial",
    date: "2026-04-08",
    readingTimeMin: 9,
    tags: ["LLM", "Architecture", "Cost"],
  },
  {
    slug: "hidden-costs-of-ai-adoption",
    title: "The hidden costs of AI adoption (and how to budget for them)",
    excerpt:
      "Inference is rarely the biggest line item. Eval infra, human review, vector storage, and observability are where AI projects quietly burn budget — here's how to plan for it.",
    author: "Zianova Engineering",
    role: "Editorial",
    date: "2026-03-29",
    readingTimeMin: 6,
    tags: ["AI strategy", "Cost", "Operations"],
  },
];

export function getInsight(slug: string) {
  return insightsPosts.find((p) => p.slug === slug);
}
