# Changelog

## 2026-05-06 — About page fix + PageHeader subtitle token

- **`/about`**: Replaced missing **`/images/logo.png`** with
  **`/images/mumbo-assets/Mumbo_logo.png`**; responsive logo sizing (**`clamp`** +
  **`max-w`**); **`max-w-6xl`** content grid with **`min-w-0`** columns; hero photo
  **`aspect-[4/3]`**; headings use **`text-color`** / **`text-color-secondary`**.
- **`PageHeader`**: Subtitle uses **`text-color-secondary`** (Prime/Lara) instead of
  **`text-text-secondary`** for readable contrast.

## 2026-05-06 — Highlights details dialog, Prime preview, contact cleanup

- **`HighlightCardMedia`**: PrimeReact **`Image`** with **`preview`** on grid thumbs.
- **`HighlightItem.details`**: optional **`ReactNode`**; dialog shows a **Details**
  section when set; primary action renamed **Details** (was **Gallery**).
- **`ClientLayout`**: flex column wrapper + **`main`** **`flex-1`** for layout /
  Framer scroll friendliness.
- **`package.json`**: **`"type": "module"`** — quiets Node **`MODULE_TYPELESS_PACKAGE_JSON`**
  warning when loading **`tailwind.config.ts`**.
- **`LinksLoadingSkeleton`**: removed (unused after static Socials).
- **`/contact`**: removed non-functional message form; copy points users to email +
  socials until outbound mail exists.

## 2026-05-06 — Static Socials (`SITE_GROUPED_LINKS`)

- **`src/constants/site-links.ts`**: **`SITE_GROUPED_LINKS`** — single source for
  **`/socials`** and **`GET /api/links`** (no client **`fetch`**, no Supabase on
  the public page).
- **`LinksPageView`**: renders from static data + existing **`mergeMainLinkList`**
  / **`mergeGroupedLinks`** (pinned tiles unchanged); removed loading skeleton
  for links fetch.
- **`GET /api/links`**: returns **`SITE_GROUPED_LINKS`** only.
- **Console triage**: Supabase/DNS noise on **`/socials`** is gone (no public
  fetch). Remaining dev-only Framer scroll hints / Cursor **`data-cursor-ref`**
  hydration diffs are environmental, not this route.

## 2026-05-06 — Static events, taller embeds, hero CTAs, links API hardening

- **`SITE_EVENTS`** from **`src/data/events.json`** via **`events-data.ts`**;
  **`/events`** uses static data only (no **`fetch('/api/events')`**).
- **`GET /api/events`** returns the same **`SITE_EVENTS`** list for any callers.
- **`streaming.ts`**: **`SPOTIFY_EMBED_HEIGHT_PX`** / **`SOUNDCLOUD_EMBED_HEIGHT_PX`**
  — taller Spotify / SoundCloud iframes on **`/music`**.
- **`HomeHero`**: **Listen Now** matches **Upcoming Events** button styling
  (removed **`severity='info'`**).
- **`/api/links`**: when Supabase is off or on error, returns **`{ main: [] }`**
  (**`EMPTY_GROUPED_LINKS`**) instead of **`{}`** or error-shaped JSON.
- **`LinksPageView`**: non-OK responses and malformed bodies fall back to empty
  grouped links; **`sanitizeGroupedLinks`** ensures array values per category.
- **`LinksCategorizedAccordion`**: **`Array.isArray`** guard before **`.map`**.

## 2026-05-06 — Page shell, theme tokens, shared social constants

- **Checkpoint**: commit `ce9dbf2` pushed to `development` before this pass (easy revert on Netlify).
- **`src/constants/page-shell.ts`**: **`PAGE_CONTAINER_CLASS`**, **`PAGE_SHELL_CLASS`** — marketing routes use one shell instead of repeating `container mx-auto px-4 py-12`.
- **Semantic text**: **`text-color`** / **`text-color-secondary`** (from globals / Lara) replace ad hoc **`text-gray-*`** / **`text-white`** on header nav, events (**`EventsSections`**, **`EventCard`**), highlights, links (**`/socials`** UI), home (**`HomeStatsGrid`**, **`HomeManInTheHat`**, **`HomeHero`** scroll hint), about/contact body copy, **`ContentCard`**.
- **`src/constants/about-page-social.ts`**, **`contact-page-social.ts`**: About and Contact social lists (distinct from footer **`footer-social.ts`**).
- **`events/[eventName]`**: “event not found” copy escapes apostrophes for ESLint; detail panel uses theme-friendly grays / **`bg-background-paper/80`** instead of raw **`gray-*`**.
- **Not in this pass**: merch, admin dashboard, `not-found`.

## 2026-05-06 — SoundCloud profile embed

- **`src/constants/streaming.ts`**: **`MUMBO_SOUNDCLOUD_PROFILE_URL`** + **`MUMBO_SOUNDCLOUD_EMBED_SRC`**
  (official [HTML5 widget](https://developers.soundcloud.com/docs/api/html5-widget), visual profile player).
- **`SoundCloudProfileEmbed`** on **`/music`** below Spotify; pinned SoundCloud tile uses the same profile URL.

## 2026-05-06 — Spotify artist URL + embed

- **`src/constants/streaming.ts`**: **`MUMBO_SPOTIFY_ARTIST_URL`** and **`MUMBO_SPOTIFY_EMBED_SRC`**
  ([artist profile](https://open.spotify.com/artist/0v4RYCckfkFu4dXWl35BXl)).
- **Pinned Spotify tile** uses the canonical artist URL (no tracking query params).
- **`SpotifyArtistEmbed`** on **`/music`** (iframe player from Spotify’s embed URL).

## 2026-05-03 — Socials route + pinned Spotify / SoundCloud

- **Route**: **`/socials`** replaces **`/links`** for the Socials page; **`/links`** → **`/socials`**
  redirect in **`next.config.mjs`**. Header, **`NAVIGATION`**, and Footer quick link updated.
- **`LINKS_MAIN_PINNED`**: restored **Spotify** and **SoundCloud** (with **mumbobeatz** SoundCloud URL;
  Spotify uses search until a canonical artist URL is set).

## 2026-05-03 — Dev console noise (Next Image + layout)

- **`next.config.mjs`**: **`images.qualities`** `[75, 90, 100]` so `<Image quality={90|100}>` matches
  Next 16 defaults (stops “unconfigured qualities” warnings).
- **`ClientLayout`**: **`main`** gets **`relative`** so Framer **`useScroll`** offset math has a
  non-static ancestor (reduces “container position” warnings).

## 2026-05-03 — List-driven content (const + map)

- **Convention**: editable lists use **`UPPER_SNAKE_CASE`** exports (`HOME_FEATURE_CARDS`,
  `MUSIC_PAGE_SONGS`, `MUSIC_PAGE_LIVE_SETS`, `MUSIC_CATALOG_SECTIONS`, `HIGHLIGHT_ITEMS`,
  `LINKS_MAIN_PINNED`,
  `LINK_GROUPS_FALLBACK`) with short file-level JSDoc — add/remove rows there; UI
  components only **`map()`** over props or those imports.
- **`HomeFeatureCards`** accepts optional **`items`** (defaults to `HOME_FEATURE_CARDS`).
- **Links**: **`links-site-lists.ts`** + **`grouped-links.ts`**; **`mergeMainLinkList`** /
  **`mergeGroupedLinks`** merge pinned + API + optional accordion fallbacks.

## 2026-05-03 — Page composition / reusable UI

### Component extraction

- **Home** (`src/app/page.tsx`): thin shell; **`HomeHero`**, **`HomeFeaturedSection`**,
  **`HomeManInTheHat`**, **`HomeFeatureCards`**, **`HomeFeatureCard`**, plus
  **`home-feature-cards-data`** under **`src/components/home/`**.
- **Music** (`src/app/music/page.tsx`): **`MusicCatalogSection`**, **`MusicReleaseGrid`**,
  **`MusicReleaseCard`**, **`MusicPlatformBubbles`**, **`music-page-data`**,
  **`music-platform-meta`**, **`music-types`** under **`src/components/music/`**.
- **Highlights** (`src/app/highlights/page.tsx`): **`HighlightsPageView`** composes
  **`HighlightInstagramPromoCard`**, **`HighlightAlbumStrip`**, **`HighlightGridCard`**,
  **`HighlightCardMedia`**, **`HighlightViewerDialog`**, and data/model modules under
  **`src/components/highlights/`**.
- **Events** (`src/app/events/page.tsx`): **`EventsListSkeleton`**, **`EventsSections`**
  under **`src/components/events/`**.
- **Links / Socials** (`src/app/links/page.tsx`): **`LinksPageView`** with backdrop,
  profile hero, main grid, accordion, skeleton, platform icons, and pinned link data
  under **`src/components/links/`**. Main link grid correctly merges **pinned** Apple
  Music + TikTok with API **`main`** links.

## 2026-05-02 — Build without Supabase (Netlify-safe)

### Data / config

- **`src/lib/supabase-config.ts`**: trim-aware **`isSupabaseConfigured`**, URL/key
  **resolvers**, and documented fallbacks so **`createClient` never sees an empty
  URL** (empty env strings are common in CI; `??` alone is not enough).
- **`src/lib/supabase.ts`**: no import-time throws; **`testSupabaseConnection`**
  no-ops when not configured.
- **`src/lib/data-service.ts`**: **`readTableJson`** / **`writeTableJson`** map
  legacy table names to **`src/data/*.json`**.
- **`src/lib/db-service.ts`**: when Supabase is not configured, read/write those
  JSON files instead of the network.
- **Admin API GET** handlers: return JSON from disk when not configured (sorted
  where the DB used **`sort_order`**).
- **`src/app/api/events/route.ts`** / **`src/app/api/links/route.ts`**: offline
  paths (events from **`events.json`**; links returns **`{}`**).
- **`src/app/api/spotify-links/route.ts`**: removed redundant Supabase ping
  before **`getSpotifyLinks`**.
- **`src/app/page.tsx`**: removed home-page Supabase connection **`useEffect`**.
- **`src/proxy.ts`**: skips Supabase session refresh when not configured.
- **`src/utils/supabase/server.ts`**, **`client.ts`**, **`lib/api-auth.ts`**,
  **`lib/auth.ts`**, **`app/lib/auth-client.ts`**, **`AuthProvider`**: use shared
  URL/key resolvers.

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
