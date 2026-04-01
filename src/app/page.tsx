import Navbar from "@/components/Navbar";
import { site } from "@/config/site";
import { projects } from "@/config/projects";
import { experience } from "@/config/experience";
import { skills } from "@/config/skills";
import { contact } from "@/config/contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
      >
        {/* dot-grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--edge) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-6xl sm:text-8xl lg:text-[9rem] leading-none tracking-tight text-fg"
            style={{ fontFamily: "var(--font-dela)" }}
          >
            {site.name}
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-semibold text-fg-muted tracking-widest uppercase">
            {site.tagline}
          </p>
          <a
            href="#about"
            className="mt-10 inline-block px-7 py-3 font-semibold text-sm border border-edge text-fg
                       hover:bg-surface transition-colors duration-150"
          >
            Learn more ↓
          </a>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>About</SectionHeading>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-fg-muted">
            {site.bio}
          </p>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Skills</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 border border-edge bg-surface"
              >
                <h3 className="text-xs font-black uppercase tracking-widest text-fg-muted mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-xs font-semibold border border-edge text-fg-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="p-5 border border-edge bg-surface"
              >
                <h3 className="text-lg font-black leading-tight text-fg">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-semibold border border-edge text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-2 text-fg-muted hover:text-accent transition-colors duration-150"
                    href={project.github.toString()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section id="experience" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className="p-5 border border-edge bg-surface"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-black text-fg">
                    {job.role}{" "}
                    <span className="font-semibold text-accent">@ {job.company}</span>
                  </h3>
                  <span className="text-xs font-semibold border border-edge text-fg-muted px-2 py-0.5 bg-surface">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm leading-relaxed text-fg-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>{contact.heading}</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">{contact.body}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block px-7 py-3 font-semibold border border-edge bg-surface text-fg
                       hover:text-accent transition-colors duration-200"
          >
            {contact.email}
          </a>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-4xl md:text-5xl text-fg"
      style={{ fontFamily: "var(--font-dela)" }}
    >
      {children}
    </h2>
  );
}
