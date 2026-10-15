AGENTS.md — AI Coding Agent Guidelines

1. Project Overview

A fast, minimalist personal portfolio and blog built for zero-cost static hosting.

Core Philosophy: Content-first, ultra-fast, zero bloat, high-contrast typography, generous whitespace.

Architecture: Static Site Generation (SSG). No backend databases, no runtime server requirements.

2. Tech Stack & Tooling

Framework: Astro (with TypeScript)

Styling: Tailwind CSS (using @tailwindcss/typography for blog posts)

Content: Markdown (.md) / MDX (.mdx) via Astro Content Collections

Math & Code: KaTeX for math rendering ($...$ and $$...$$), Shiki for syntax highlighting

Deployment Target: Static output (dist/) hosted on Cloudflare Pages / GitHub Pages / Vercel

3. Commands

Install dependencies: npm install

Start local dev server: npm run dev

Type-check & build for production: npm run build

Preview production build: npm run preview

4. Design & UI Principles (STRICT)

Layout: Single-column centered container (max-w-2xl / 65ch–75ch max width, mx-auto, px-4 sm:px-6).

Typography:

Body/Headings: Clean sans-serif (Inter, Geist, or system sans-serif).

Code, Dates, & Metadata: Crisp monospace (JetBrains Mono, Geist Mono, or system monospace).

Color Palette:

Strict monochrome base: Light mode (#fafafa bg, #171717 text) and Dark mode (#0a0a0a bg, #ededed text).

Exactly one subtle accent color for interactive links and focus states.

Anti-Bloat Rules:

Zero Client JS by default: Do not add React/Vue/Svelte client hydration (client:*) unless explicitly requested for an interactive widget.

No heavy animations: Avoid scroll-jacking, parallax, or heavy animation libraries (like GSAP/Framer Motion). Use subtle CSS transitions (transition-colors duration-150) only when necessary.

No bulky blog cards: Blog index lists must only display the publication date (in YYYY-MM-DD monospace format) and the post title—no stock cover images or clutter.

5. Directory Structure & Core Routes

Keep the routing flat and restricted to 4 core views:

src/pages/index.astro (/) — 3-sentence bio, social links, 2–3 featured projects, and 3 latest blog posts.

src/pages/projects.astro (/projects) — Clean list or 2-column grid of projects (title, 1-sentence summary, tech tags, repo/demo links).

src/pages/blog/index.astro (/blog) — Chronological list of posts grouped by year.

src/pages/blog/[...slug].astro (/blog/:slug) — Clean Markdown reading view with prose styling.

src/pages/about.astro (/about or /resume) — Background, core skills, and PDF resume link.

src/content/blog/ — Markdown blog posts validated by src/content/config.ts.

src/data/projects.json — Simple structured data file for portfolio projects.

6. Coding Standards & Conventions

Semantic HTML: Always use <header>, <main>, <article>, <section>, <nav>, and <time datetime="...">.

Accessibility (a11y): Ensure WCAG AA contrast ratios in both light and dark modes, visible :focus-visible outlines, and proper aria-label attributes on icon-only links.

Content Schema (src/content/config.ts):
Every blog post frontmatter must strictly adhere to:

---
title: "Post Title"
description: "Short 1-sentence summary for SEO and RSS."
pubDate: 2026-10-15
tags: ["topic"]
draft: false
---


Asset Optimization: Store images in src/assets/ and use Astro's <Image /> component to output .webp or .avif formats with explicit width, height, and alt attributes.

7. Agent Workflow & Boundaries

Before writing code: Check existing components in src/components/ and layouts in src/layouts/ to avoid duplicating styles.

Dependency Guardrail: NEVER install new npm packages without asking first. Prefer native Web APIs, standard CSS, and built-in Astro features.

Verification: Always run npm run build after making structural or schema changes to verify there are no broken links, TypeScript errors, or invalid frontmatter.