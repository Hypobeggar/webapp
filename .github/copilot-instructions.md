## Quick orientation — webapp (Vite + React + TypeScript)

This repository is a minimal Vite + React + TypeScript template. The app entry points and build workflow are intentionally simple — treat `src/` as the authoritative app code and `old/` as legacy static examples.

Key files to inspect
- `package.json` — dev/build/lint scripts (use `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`).
- `vite.config.ts` — Vite runtime config & plugins (React plugin used).
- `tsconfig.app.json`, `tsconfig.node.json` — TypeScript rules and project references. Note: build runs `tsc -b && vite build`.
- `src/main.tsx`, `src/App.tsx` — app entry and primary component.
 - `src/main.tsx`, `src/App.tsx` — app entry and primary component; main landing resume content is embedded in `src/App.tsx`.
 - `src/PlainResume.tsx` — printable / plain resume view (previously in `src/converted`).
 - `src/assets/app.css` — landing page styles adapted from `old/css/index.css`.
 - `src/assets/external.css` — fonts and plain resume styles adapted from `old/css/plain.css`.
 - `src/assets/external.css` — fonts and plain resume styles adapted from `old/css/plain.css`.
 - Tailwind/PostCSS: `tailwind.config.cjs` and `postcss.config.cjs` are present. After installing dev deps (`tailwindcss`, `postcss`, `autoprefixer`) the `@tailwind` directives in `src/index.css` are processed automatically by Vite.
- `index.html` — root HTML served by Vite.

Architecture & conventions (what matters for small edits)
- Single-page React app powered by Vite. HMR is supported by the React plugin, so small edits are expected to hot-reload in `npm run dev`.
- TypeScript is strict and configured with bundler-mode resolution — treat the `src` tree as type-checked by `tsconfig.app.json`.
- `vite.config.ts` is included in `tsconfig.node.json` so it gets type checking too.
- Static assets: `src/assets` for component-scoped assets, `public/` for root-level static files.
 - Static assets: `src/assets` for component-scoped assets (images moved into `src/assets/img`) and `public/` for root-level static files. The legacy `old/` folder contains the original static site.

Developer workflows (explicit commands)
- Dev server: `npm run dev` — starts Vite with HMR (default port 5173).
- Build: `npm run build` — runs `tsc -b` (build mode) then `vite build`.
- Preview: `npm run preview` — runs `vite preview` to locally preview the production build.
- Lint: `npm run lint` — runs ESLint over the repo.

Project-specific gotchas & tips for changes
- Type changes: because the repo uses `noEmit: true` and `tsc -b` during build, ensure new files are included in `tsconfig.app.json` or reachable from `src/` so `tsc` passes.
- Vite imports: absolute `/vite.svg` is supported in dev/production. Prefer relative imports for module-scoped assets (`./assets/...`) to keep tree-shaking predictable.
- Editing `vite.config.ts`: it's covered by separate tsconfig and must compile with `tsconfig.node.json`'s settings.
- There are no automatic tests configured — don't assume a test harness exists.

When you need to make a PR
- Keep changes small and focused; update `README.md` or add docs if behavior/guides change.
- Run `npm run lint` before committing to catch style issues.

If anything here seems wrong or out-of-date for this repository, ask for an example change you'd like me to inspect or we can iterate the instructions together.
