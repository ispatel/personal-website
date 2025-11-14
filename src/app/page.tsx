// src/app/page.tsx
import type {Project} from "@/types/project";

const projects: Project[] = [
  {
    name: "Time-Series GAN for AML",
    tech: ["Python", "PyTorch", "GANs"],
    description: "Synthetic transaction data for stress-testing risk models.",
    github: new URL("https://github.com/your-gan-repo")
  },
  {
    name: "RAG Copilot",
    tech: ["TypeScript", "Postgres", "LLMs"],
    description: "Retrieval-augmented assistant powered by curated ground truths.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-slate-950 text-slate-50">
      <section className="max-w-4xl mx-auto space-y-6">
        <header>
          <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">
            Ishan Patel
          </h1>
          <p className="mt-3 text-slate-300">
            I’m Ishan Patel, a developer with broad experience across full-stack engineering, backend systems, and applied AI. I love working at the intersection of software, data, and machine learning, whether that means building responsive apps, optimizing pipelines, or experimenting with new AI techniques. I enjoy learning new technologies and creating projects that solve real problems and deepen my understanding of how things work.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <h3 className="font-medium">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    className="mt-3 inline-block text-sm text-blue-400 hover:underline"
                    href={project.github.toString()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}