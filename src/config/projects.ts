import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Time-Series GAN for AML",
    tech: ["Python", "PyTorch", "GANs"],
    description:
      "Synthetic transaction data generator for stress-testing anti-money-laundering risk models.",
    github: new URL("https://github.com/ispatel/timeseries-gan"),
  },
  {
    name: "RAG Copilot",
    tech: ["TypeScript", "Postgres", "LLMs"],
    description:
      "Retrieval-augmented generation assistant powered by curated ground truths and semantic search.",
  },
];
