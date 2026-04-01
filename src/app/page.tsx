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
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
      >
        {/* dot-grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* orange glow behind name */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-3xl bg-accent-orange pointer-events-none"
        />

        <div className="relative z-10 text-center px-6">
          <h1
            className="text-6xl sm:text-8xl lg:text-[9rem] leading-none tracking-tight text-cream"
            style={{ fontFamily: "var(--font-dela)" }}
          >
            {site.name}
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-semibold text-accent-orange tracking-widest uppercase">
            {site.tagline}
          </p>
          <a
            href="#about"
            className="mt-10 inline-block px-7 py-3 font-semibold text-sm border-2 border-cream text-cream
                       hover:bg-cream hover:text-black transition-colors duration-150"
            style={{ boxShadow: "4px 4px 0 #FF612F" }}
          >
            Learn more ↓
          </a>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className="bg-cream py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>About</SectionHeading>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            {site.bio}
          </p>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" className="bg-black py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading light>Skills</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 border-2 border-cream bg-black"
                style={{ boxShadow: "5px 5px 0 #FF612F" }}
              >
                <h3
                  className="text-sm font-black uppercase tracking-widest text-accent-orange mb-3"
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-xs font-semibold border border-cream text-cream"
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
      <section id="projects" className="bg-cream py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="p-5 border-2 border-black bg-cream"
                style={{ boxShadow: "6px 6px 0 #000" }}
              >
                <h3 className="text-lg font-black leading-tight">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-semibold border border-black bg-accent-purple"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-2 hover:text-accent-orange"
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
      <section id="experience" className="bg-black py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading light>Experience</SectionHeading>
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className="p-5 border-2 border-cream bg-black"
                style={{ boxShadow: "6px 6px 0 #FF612F" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-black text-cream">
                    {job.role}{" "}
                    <span className="font-semibold text-accent-orange">@ {job.company}</span>
                  </h3>
                  <span className="text-xs font-semibold border border-cream text-cream px-2 py-0.5 bg-accent-yellow text-black">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1 list-disc list-inside text-sm leading-relaxed text-cream/80">
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
      <section id="contact" className="bg-cream py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>{contact.heading}</SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed">{contact.body}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block px-7 py-3 font-semibold border-2 border-black bg-cream
                       hover:bg-accent-yellow transition-colors duration-150"
            style={{ boxShadow: "4px 4px 0 #000" }}
          >
            {contact.email}
          </a>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-4xl md:text-5xl ${light ? "text-cream" : "text-black"}`}
      style={{ fontFamily: "var(--font-dela)" }}
    >
      {children}
    </h2>
  );
}
