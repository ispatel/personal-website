/**
 * TechBadge — renders a technology tag with its official brand color.
 * Uses a colored outline + subtle tint so it reads on both light and dark backgrounds.
 */

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

export function TechBadge({ name }: { name: string }) {
  const color = techColors[name];

  if (!color) {
    return (
      <span className="px-2 py-0.5 text-xs font-semibold border border-edge text-fg-muted">
        {name}
      </span>
    );
  }

  return (
    <span
      className="px-2 py-0.5 text-xs font-semibold"
      style={{
        border: `1px solid ${color}`,
        backgroundColor: `${color}18`,
        color,
      }}
    >
      {name}
    </span>
  );
}
