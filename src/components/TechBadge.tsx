"use client";

/**
 * TechBadge — renders a technology tag with its official brand color.
 * Hover: lift + brand-colored glow driven by JS state (avoids CSS cascade issues).
 * Links to the technology's official page when a URL is mapped.
 */

import { useState } from "react";

/** Maps a technology name to its hex brand color. */
const techColors: Record<string, string> = {
  // ── AI / ML ──────────────────────────────────────────────────────
  PyTorch: "#EE4C2C",
  TensorFlow: "#FF6F00",
  GANs: "#7C3AED",
  LLMs: "#7C3AED",
  "Multi-Agent AI": "#6D28D9",
  RAG: "#8B5CF6",
  "Time-Series Modeling": "#0891B2",
  MLflow: "#38BDF8",
  "Attention Mechanisms": "#A855F7",

  // ── Languages ────────────────────────────────────────────────────
  Python: "#4B8ED6",
  Go: "#00ADD8",
  JavaScript: "#F59E0B",
  TypeScript: "#60A5FA",
  SQL: "#E05252",
  Java: "#ED8B00",
  C: "#9CA3AF",
  "C#": "#A78BFA",

  // ── Backend & Data ───────────────────────────────────────────────
  "Node.js": "#4ADE80",
  "REST APIs": "#2DD4BF",
  PostgreSQL: "#5B9BD5",
  MongoDB: "#4EC74E",
  GraphQL: "#E879B0",
  Express: "#9CA3AF",

  // ── Infrastructure ───────────────────────────────────────────────
  Docker: "#2496ED",
  Kubernetes: "#6B8EE8",
  "GitHub Actions": "#58A6FF",
  GCP: "#5E9BF3",

  // ── Frontend ─────────────────────────────────────────────────────
  React: "#22D3EE",
  "Next.js": "#9CA3AF",
  "Tailwind CSS": "#06B6D4",
  "HTML/CSS": "#F87171",
  Razor: "#A78BFA",
  ".NET": "#A78BFA",
};

/** Maps a technology name to its official URL. */
const techUrls: Record<string, string> = {
  // ── AI / ML ──────────────────────────────────────────────────────
  PyTorch: "https://pytorch.org",
  TensorFlow: "https://www.tensorflow.org",
  GANs: "https://en.wikipedia.org/wiki/Generative_adversarial_network",
  LLMs: "https://en.wikipedia.org/wiki/Large_language_model",
  "Multi-Agent AI": "https://en.wikipedia.org/wiki/Multi-agent_system",
  RAG: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
  "Time-Series Modeling": "https://en.wikipedia.org/wiki/Time_series",
  MLflow: "https://mlflow.org",
  "Attention Mechanisms": "https://en.wikipedia.org/wiki/Attention_(machine_learning)",

  // ── Languages ────────────────────────────────────────────────────
  Python: "https://www.python.org",
  Go: "https://go.dev",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org",
  SQL: "https://en.wikipedia.org/wiki/SQL",
  Java: "https://www.java.com",
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  "C#": "https://learn.microsoft.com/en-us/dotnet/csharp/",

  // ── Backend & Data ───────────────────────────────────────────────
  "Node.js": "https://nodejs.org",
  "REST APIs": "https://restfulapi.net",
  PostgreSQL: "https://www.postgresql.org",
  MongoDB: "https://www.mongodb.com",
  GraphQL: "https://graphql.org",
  Express: "https://expressjs.com",

  // ── Infrastructure ───────────────────────────────────────────────
  Docker: "https://www.docker.com",
  Kubernetes: "https://kubernetes.io",
  "GitHub Actions": "https://github.com/features/actions",
  GCP: "https://cloud.google.com",

  // ── Frontend ─────────────────────────────────────────────────────
  React: "https://react.dev",
  "Next.js": "https://nextjs.org",
  "Tailwind CSS": "https://tailwindcss.com",
  "HTML/CSS": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  Razor: "https://learn.microsoft.com/en-us/aspnet/core/razor-pages/",
  ".NET": "https://dotnet.microsoft.com",
};

const BASE_STYLE: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  transition: "transform 120ms ease, box-shadow 120ms ease",
};

export function TechBadge({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);
  const color = techColors[name];
  const url = techUrls[name];

  const Tag = url ? "a" : "span";
  const linkProps = url
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : {};
  const hoverHandlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (!color) {
    return (
      <Tag
        {...linkProps}
        {...hoverHandlers}
        className="px-2 py-0.5 text-xs font-semibold border border-edge text-fg-muted"
        style={{
          ...BASE_STYLE,
          ...(hovered && {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
          }),
        }}
      >
        {name}
      </Tag>
    );
  }

  return (
    <Tag
      {...linkProps}
      {...hoverHandlers}
      className="tech-badge-colored px-2 py-0.5 text-xs font-semibold"
      style={{
        "--badge-color": color,
        border: `1px solid ${color}`,
        backgroundColor: `${color}18`,
        ...BASE_STYLE,
        ...(hovered && {
          transform: "translateY(-2px)",
          boxShadow: `0 5px 16px ${color}55`,
        }),
      } as React.CSSProperties}
    >
      {name}
    </Tag>
  );
}
