# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

Conversion / migration notes
- The old static site in `old/` was converted to React components. To reproduce the old visuals:
  - App landing page styling is now in `src/assets/app.css` and mirrors `old/css/index.css`.
  - The printable/plain resume styling is in `src/assets/external.css` (based on `old/css/plain.css`).
  - Images were moved to `src/assets/img` for bundling.

  Tailwind / PostCSS
  ------------------
  We added Tailwind and PostCSS configuration files (`tailwind.config.cjs`, `postcss.config.cjs`). To enable Tailwind locally, run either:

  ```bash
  # install dependencies listed in package.json
  npm install

  # or install manually if you prefer
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

  Notes: Vite will process Tailwind directives in `src/index.css` through PostCSS when you run `npm run dev` or `npm run build`. If your shell blocks npm in PowerShell, run the commands in cmd.exe or another shell.

  Status: Tailwind installed
  -------------------------
  Tailwind + PostCSS + Autoprefixer have been added to this project's devDependencies and a production build successfully completed during verification. If you pull this branch, run `npm install` and `npm run dev` to start the dev server — Vite will process the Tailwind directives automatically.


You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
