"use client";

import { useEffect, useState } from "react";
import { links } from "@/config/links";

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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-black"
      style={{ boxShadow: "0 4px 0 #000" }}
    >
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
                      ? "text-accent-orange"
                      : "text-cream hover:text-accent-orange"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-orange" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social links */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 text-xs font-semibold border border-cream text-cream
                         hover:bg-cream hover:text-black transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden text-cream font-black text-xl leading-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t-2 border-cream/20 px-6 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navTabs.map((tab) => {
              const id = tab.href.slice(1);
              return (
                <li key={tab.label}>
                  <a
                    href={tab.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 text-sm font-semibold ${
                      active === id ? "text-accent-orange" : "text-cream"
                    }`}
                  >
                    {tab.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-3 mt-3 pt-3 border-t border-cream/20">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-cream underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
