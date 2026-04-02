import Navbar from "@/components/Navbar";
import { HeroName } from "@/components/HeroName";
import { TechBadge } from "@/components/TechBadge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/config/site";
import { projects } from "@/config/projects";
import { experience } from "@/config/experience";
import { skills } from "@/config/skills";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
      >
        {/* color glow layer */}
        <div className="hero-glow absolute inset-0 pointer-events-none" />
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
          <HeroName name={site.name} />
          {/* tagline fades in after the name resolves (~1.5 s) */}
          <p
            className="mt-5 text-lg sm:text-xl font-semibold text-fg-muted tracking-widest uppercase"
            style={{ opacity: 0, animation: "fadeInUp 1.1s cubic-bezier(0.16,1,0.3,1) 2.15s forwards" }}
          >
            {site.tagline}
          </p>
          {/* CTA fades in slightly after the tagline */}
          <a
            href="#about"
            className="mt-10 inline-block px-7 py-3 font-semibold text-sm border border-edge text-fg hover:bg-surface transition-colors duration-150"
            style={{ opacity: 0, animation: "fadeInUp 1.1s cubic-bezier(0.16,1,0.3,1) 2.5s forwards" }}
          >
            Learn more ↓
          </a>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading>About</SectionHeading>
            <p
              className="mt-6 text-base md:text-lg leading-relaxed text-fg-muted pl-4"
              style={{ borderLeft: '2px solid var(--accent-2)' }}
            >
              {site.bio}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading>Skills</SectionHeading>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <ScrollReveal key={group.category} delay={i * 75}>
                <div
                  className="p-5 border border-edge bg-surface h-full"
                  style={{ borderTop: `2px solid ${['var(--accent)', 'var(--accent-2)', 'var(--accent-3)'][i % 3]}` }}
                >
                  <h3 className="text-xs font-black uppercase tracking-widest text-fg-muted mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechBadge key={item} name={item} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading>Projects</SectionHeading>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 90}>
                <article
                  className="p-5 border border-edge bg-surface h-full"
                  style={{ borderTop: `2px solid ${i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)'}` }}
                >
                  <h3 className="text-lg font-black leading-tight text-fg">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechBadge key={t} name={t} />
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section id="experience" className="bg-bg border-t border-edge py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading>Experience</SectionHeading>
          </ScrollReveal>
          <div className="mt-8 space-y-6">
            {experience.map((job, i) => (
              <ScrollReveal key={`${job.role}-${job.company}`} delay={i * 90}>
                <div
                  className="p-5 border border-edge bg-surface"
                  style={{ borderLeft: `3px solid ${job.borderColor ?? ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)'][i % 3]}` }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-black text-fg">
                      {job.role}{" "}
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-accent hover:opacity-70 transition-opacity duration-150"
                        >
                          @ {job.company}
                        </a>
                      ) : (
                        <span className="font-semibold text-accent">@ {job.company}</span>
                      )}
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
              </ScrollReveal>
            ))}
          </div>
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
      <span className="block w-8 h-0.5 bg-accent mb-4" aria-hidden="true" />
      {children}
    </h2>
  );
}
