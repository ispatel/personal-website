export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "Redis", "REST APIs", "GraphQL"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "LLMs", "RAG", "GANs", "Hugging Face", "LangChain"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "GitHub Actions", "AWS", "Vercel"],
  },
];
