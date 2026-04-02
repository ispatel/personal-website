/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&?!";

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

interface CharState {
  char: string;
  locked: boolean;
}

/**
 * HeroName — "Signal Resolve" entrance animation.
 *
 * Each character scrambles through random glyphs (accent color) then snaps to
 * its correct value left-to-right, like a signal resolving from noise.
 * SSR-safe: initial render shows the actual name to avoid hydration mismatch.
 */
export function HeroName({ name }: { name: string }) {
  const [states, setStates] = useState<CharState[]>(() =>
    // SSR + first client render: show real name so hydration matches
    name.split("").map((c) => ({ char: c, locked: true }))
  );

  useEffect(() => {
    const chars = name.split("");

    const STAGGER = 110;       // ms between each char beginning to lock
    const SCRAMBLE_TIME = 560; // ms each char scrambles before snapping
    const INITIAL_DELAY = 300; // brief pause before animation begins

    // Kick off scramble: replace all non-space chars with random glyphs
    setStates(chars.map((c) => ({ char: c === " " ? " " : randomGlyph(), locked: false })));

    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    chars.forEach((target, i) => {
      if (target === " ") {
        // Space resolves instantly at its stagger slot
        const t = setTimeout(() => {
          setStates((prev) =>
            prev.map((s, idx) => (idx === i ? { char: " ", locked: true } : s))
          );
        }, INITIAL_DELAY + i * STAGGER);
        timers.push(t);
        return;
      }

      // Continuously randomise this character until it locks
      const tick = setInterval(() => {
        setStates((prev) =>
          prev.map((s, idx) =>
            idx === i && !s.locked ? { ...s, char: randomGlyph() } : s
          )
        );
      }, 55);
      intervals.push(tick);

      // Lock the correct character after its stagger slot + scramble window
      const lock = setTimeout(() => {
        clearInterval(tick);
        setStates((prev) =>
          prev.map((s, idx) => (idx === i ? { char: target, locked: true } : s))
        );
      }, INITIAL_DELAY + i * STAGGER + SCRAMBLE_TIME);
      timers.push(lock);
    });

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, [name]);

  return (
    <h1
      className="text-6xl sm:text-8xl lg:text-[9rem] leading-none tracking-tight"
      style={{ fontFamily: "var(--font-dela)" }}
    >
      {states.map((s, i) =>
        s.char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className={`inline-block transition-colors duration-300 ${
              s.locked ? "text-fg" : "text-accent"
            }`}
          >
            {s.char}
          </span>
        )
      )}
    </h1>
  );
}
