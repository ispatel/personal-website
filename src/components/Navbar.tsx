"use client";

import { useEffect, useState } from "react";
import { links } from "@/config/links";
import { ThemeToggle } from "@/components/ThemeToggle";

const navTabs = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navTabs.map((t) => t.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg border-b border-edge">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Desktop tabs */}
        <ul className="hidden md:flex items-center gap-1">
          {navTabs.map((tab) => {
            const id = tab.href.slice(1);
            const isActive = active === id;
            return (
              <li key={tab.label}>
                <a
                  href={tab.href}
                  className={`relative px-3 py-1.5 text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-accent"
                      : "text-fg-muted hover:text-accent"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social links + theme toggle */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 text-xs font-semibold border border-edge text-fg-muted hover:bg-surface hover:text-fg transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden text-fg font-black text-xl leading-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-edge px-6 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navTabs.map((tab) => {
              const id = tab.href.slice(1);
              return (
                <li key={tab.label}>
                  <a
                    href={tab.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 text-sm font-semibold ${
                      active === id ? "text-accent" : "text-fg-muted"
                    }`}
                  >
                    {tab.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-edge">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-fg-muted underline"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
