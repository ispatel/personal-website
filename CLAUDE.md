# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start local dev server
npm run build    # production build (also runs type-check and lint)
npm run lint     # ESLint only
```

There are no tests. `npm run build` is the primary way to verify correctness — always run it after making changes.

## Architecture

**Static export** — `next.config.ts` sets `output: 'export'`, so this builds to a flat `out/` directory with no server runtime. No SSR per-request, no API routes.

**React Compiler** is enabled (`reactCompiler: true`). Manual memoisation (`useMemo`, `useCallback`) is not needed.

### Single source of truth for content

All site content lives in **`src/data/profile.ts`**. The files in `src/config/` are thin re-exports that preserve existing import paths:

```
src/data/profile.ts          ← edit content here
src/config/{site,experience,skills,projects,links}.ts  ← re-export only
```

`profile.ts` is annotated with LinkedIn/GitHub API field comments to support a future scraper (`scripts/sync-profile.ts`) that would overwrite it automatically.

### Theming

Dark mode uses a **CSS custom property** palette defined in `src/app/globals.css`:

```
:root  → light tokens   .dark  → dark tokens
--bg, --surface, --fg, --fg-muted, --edge, --accent
```

Tokens are exposed as Tailwind utilities via `@theme inline` (Tailwind v4 syntax). Always use `bg-bg`, `text-fg`, `border-edge`, etc. — never hardcode colors.

Dark mode is persisted to `localStorage`. An inline `<script>` in `<head>` (in `layout.tsx`) applies the `.dark` class before first paint to prevent flash-of-unstyled-content. `ThemeProvider` syncs React state with this on mount; `suppressHydrationWarning` on `<html>` suppresses the expected class mismatch.

The ESLint rule `react-hooks/set-state-in-effect` fires on `setState` calls inside `useEffect`. The project disables it inline with `// eslint-disable-next-line react-hooks/set-state-in-effect` or a file-level `/* eslint-disable */` when intentional (e.g. `ThemeProvider`, `HeroName`).

### Key components

- **`HeroName`** — "Signal Resolve" entrance animation. Characters scramble through random glyphs in accent color, then lock left-to-right. SSR-safe: initial state renders the real name to avoid hydration mismatch; scramble starts in `useEffect`.
- **`ScrollReveal`** — wraps any content with an Intersection Observer. Adds/removes `sr-visible` class as the element enters/leaves the viewport, creating bidirectional fade + slide animations. CSS classes `sr-hidden` / `sr-visible` are defined in `globals.css`.
- **`TechBadge`** — renders a technology tag with its official brand color (colored border + tinted background + colored text). Color map is in the component file; unmapped techs fall back to the default `border-edge` style.
- **`ThemeProvider`** / **`ThemeToggle`** — context-based dark mode with `useTheme()` hook.

### Fonts

Loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables:
- `--font-archivo` (Archivo) — body text
- `--font-dela` (Dela Gothic One) — display headings; apply with `style={{ fontFamily: "var(--font-dela)" }}`
