export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Acme Corp",
    period: "Summer 2024",
    bullets: [
      "Built internal tooling that reduced manual data-review time by 40%.",
      "Designed and shipped a REST API consumed by three downstream services.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University AI Lab",
    period: "2023 – 2024",
    bullets: [
      "Trained GAN architectures on financial time-series data for AML stress testing.",
      "Co-authored a paper accepted to a workshop at NeurIPS 2024.",
    ],
  },
];
