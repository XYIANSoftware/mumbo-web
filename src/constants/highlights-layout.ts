/**
 * Highlight grid layout — tweak media height / grid width in one place.
 */

/**
 * Wrapped flex row — `justify-center` keeps incomplete last rows centered
 * (CSS grid leaves orphans in column 1).
 */
export const HIGHLIGHT_GRID_SECTION_CLASS =
	'flex flex-wrap justify-center gap-6 max-w-6xl mx-auto w-full'

/** Per-card width (`max-w-sm` / 24rem), stable flex siblings. */
export const HIGHLIGHT_CARD_SHELL_CLASS =
	'w-[min(100%,24rem)] shrink-0 basis-[min(100%,24rem)]'

/**
 * Fixed-height media frame — images fill with `object-cover` (see
 * `HighlightCardMedia`).
 */
export const HIGHLIGHT_CARD_MEDIA_FRAME_CLASS =
	'relative w-full h-40 sm:h-44 md:h-48 rounded-t-lg overflow-hidden bg-background-secondary'
