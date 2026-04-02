/**
 * Single source of truth for all site content.
 *
 * Future scraper: write a `scripts/sync-profile.ts` that fetches from
 * LinkedIn / GitHub and overwrites the exported values in this file.
 * API field annotations are provided on each field below.
 */

import type { Project } from "@/types/project";

// ── Identity ────────────────────────────────────────────────────────────────

export const site = {
  // LinkedIn: profile.firstName + " " + profile.lastName
  // GitHub:   user.name
  name: "Ishan Patel",

  // <title> tag
  title: "Ishan Patel",

  // <meta name="description">
  metaDescription:
    "Ishan Patel — ML engineer and software developer specializing in deep learning, generative AI, and applied machine learning systems.",

  // LinkedIn: profile.headline
  tagline: "Machine Learning · Generative AI · Full-Stack Engineering",

  // LinkedIn: profile.summary
  bio: "I'm Ishan, a software engineer and ML researcher based in Raleigh, NC, pursuing my MS in Computer Science at NC State. My work sits at the intersection of applied machine learning and production engineering. At SAS Institute, I've built deep learning models for large-scale time-series synthesis, designed multi-agent generative AI systems for natural-language-to-SQL, and developed ML pipelines that run on Kubernetes at scale. On the research side, I'm developing MTS-GAN, a novel GAN for multivariate time series generation using a hybrid local-global attention mechanism, and building an ML evaluation framework to benchmark LLM prompting strategies for structured config generation using MLflow across a multi-machine setup. I'm passionate about building systems where rigorous ML research translates into real, measurable impact.",
};

// ── Social links ─────────────────────────────────────────────────────────────

export type Link = {
  label: string;
  href: string;
};

export const links: Link[] = [
  // GitHub: https://api.github.com/users/{username} → html_url
  { label: "GitHub", href: "https://github.com/ispatel" },

  // LinkedIn: https://www.linkedin.com/in/{vanityName}
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ishansp/" },
];

// ── Experience ───────────────────────────────────────────────────────────────

export type Experience = {
  // LinkedIn: position.title
  role: string;
  // LinkedIn: position.company.name
  company: string;
  companyUrl?: string;
  // Override for the left-border accent color on the experience card
  borderColor?: string;
  // LinkedIn: position.startDate / position.endDate  (formatted as "Mon YYYY – Mon YYYY")
  period: string;
  // LinkedIn: position.description  (split into bullet array)
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern (Year-Round)",
    company: "SAS Institute",
    companyUrl: "https://www.sas.com",
    borderColor: "#0067B9",
    period: "May 2023 – Present",
    bullets: [
      "Developed a deep learning model using TensorFlow to synthesize over 9 terabytes of time-series data for large-scale ML workloads.",
      "Designed a multi-agent Generative AI system in Python that converts natural-language requests into executable SQL.",
      "Prototyped an integrated ML model enabling financial institutions to rank customer risk levels 40% more effectively over the existing approach.",
      "Built scalable Python + SQL data pipelines and optimized model execution on Kubernetes, achieving 90% lower memory usage.",
      "Tested Go data streaming platform, increasing unit test coverage from 30% to 80%.",
    ],
  },
  {
    role: "Lead Python Teaching Assistant",
    company: "North Carolina State University",
    companyUrl: "https://www.ncsu.edu",
    borderColor: "#CC0000",
    period: "May 2023 – Dec 2023",
    bullets: [
      "Directed a team of 9 TAs overseeing grading for 190+ students across assignments, assessments, and projects.",
      "Automated the grading system using Python, reducing manual grading time by 70%.",
    ],
  },
  {
    role: "Python Teaching Assistant",
    company: "North Carolina State University",
    companyUrl: "https://www.ncsu.edu",
    borderColor: "#CC0000",
    period: "Jan 2023 – May 2023",
    bullets: [
      "Conducted weekly lab sessions for 30+ students with an emphasis on hands-on, interactive learning.",
      "Hosted weekly office hours, guiding an average of 20 students per session.",
    ],
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────

export type SkillCategory = {
  // Custom grouping label (not from LinkedIn directly)
  category: string;
  // LinkedIn: skills[].name  (grouped manually or via AI categorisation)
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "GANs", "LLMs", "Multi-Agent AI", "RAG", "Time-Series Modeling", "MLflow"],
  },
  {
    category: "Languages",
    items: ["Python", "Go", "JavaScript", "TypeScript", "SQL", "Java", "C", "C#"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "GitHub Actions", "GCP"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Razor"],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────

// GitHub: repos[] → name, description, topics (tech tags), html_url
export const projects: Project[] = [
  {
    name: "MTS-GAN",
    tech: ["Python", "PyTorch", "GANs", "Attention Mechanisms"],
    description:
      "Novel GAN for multivariate time series generation using a hybrid local-global attention mechanism (sliding window + ISAB) for improved autocorrelation capture.",
    github: new URL("https://github.com/ispatel/mts-gan"),
  },
  {
    name: "LLM Config Evaluation Framework",
    tech: ["Python", "MLflow", "LLMs"],
    description:
      "ML evaluation framework benchmarking LLM prompting strategies for structured YAML config generation, with experiment tracking across a multi-machine setup.",
  },
  {
    name: "BiteCode",
    tech: ["MongoDB", "Express", "React", "Node.js", "Docker", "Python"],
    description:
      "Full-stack gamified delivery platform with integrated Generative AI coding challenges and CI/CD pipelines via GitHub Actions.",
    github: new URL("https://github.com/ispatel/bitecode"),
  },
  {
    name: "Hitachi Energy Middleware API",
    tech: ["C#", ".NET", "Docker", "Razor"],
    description:
      "Middleware API supporting 3 industry-standard protocols for real-time monitoring of 100+ transformer devices, with a configuration UI that cut device onboarding time by 40%.",
  },
];
