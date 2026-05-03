# Changelog

## 2026-05-02 — Major stack (latest majors)

### Runtime

- **`.nvmrc`** set to **22.22.2** (meets ESLint / toolchain `>=22.13` expectations).
- **`package.json` `engines.node`**: `>=22.13.0` for Netlify and local **nvm**.

### Dependencies

- **Next.js** `^16.2.4` (Turbopack default for `dev` / `build`).
- **React** `^19.2` / **React DOM** `^19.2`, **`@types/react`** / **`@types/react-dom`**
  `^19.2`.
- **Tailwind CSS** `^4.2.4` with **`@tailwindcss/postcss`** (v4 PostCSS plugin).
- **PrimeFlex** `^4.0.0`, **PrimeIcons** `^7.0.0`, **PrimeReact** `^10.9.7`.
- **Framer Motion** `^12.38`, **react-hook-form** `^7.75`, **react-icons** `^5.6`.
- **@supabase/ssr** `^0.10.2`, **@supabase/supabase-js** `^2.105`.
- **ESLint** `^9.39` + **eslint-config-next** `16.2.4` (ships native **flat** config;
  no `FlatCompat` / `@eslint/eslintrc`).
- **TypeScript** `^5.9`, **@types/node** `^22`.
- Removed legacy PostCSS stack from **`package.json`** (**autoprefixer**,
  **postcss-preset-env**, **postcss-flexbugs-fixes**); Tailwind v4 handles
  prefixing. Deleted duplicate **`postcss.config.js`** (kept **`postcss.config.mjs`**).

### Breaking / conventions

- **`src/middleware.ts` → `src/proxy.ts`**: Next 16 renames the convention; export
  **`proxy`** instead of **`middleware`** (Supabase session refresh unchanged).
- **`globals.css`**: `@import 'tailwindcss'` + **`@config '../../tailwind.config.ts'`**
  (JS config is not auto-discovered in v4).
- **`next.config.mjs`**: dropped deprecated **`images.domains`**; added
  **`remotePatterns`** for **mumbobeatz.com** and **localhost**.
- **`ClientLayout`**: `flex-grow` → **`grow`** (Tailwind v4 utility rename path).
- **ESLint**: **`next lint`** removed from Next 16 CLI → **`"lint": "eslint ."`**.
  **`eslint.config.mjs`** imports **`eslint-config-next/core-web-vitals`** directly.
  **`react-hooks/set-state-in-effect`** disabled (false positives on async
  fetch-on-mount in admin editors).
- **Admin editors**: `fetchItems` declared before **`useEffect`**, effect calls
  **`void fetchItems()`** (satisfies **`react-hooks/immutability`**).

### Earlier same-day (carried forward)

- Static export removed (API routes). **`tsconfig`**: `jsx` **react-jsx** (Next 16),
  **`.next/dev/types`**, no **`out/types`**.
- Async **`cookies()`** in **`lib/api-auth`**, **`lib/auth`**, Supabase server client.
- **`AnimationProps`** in **`src/types/animation.ts`**, **`ANIMATION_CONFIG.ease`**
  **`as const`**, **`SocialLinksEditor`** / **`MusicLink`** typing, about page
  entities, **Browserslist** refresh.

## 2026-05-02 (initial pass)

See git history for the first ESLint 9 + Next 15.5 unblock before majors.
