import type { Link } from '@/types/content'

/** Links API shape: category key → list of links (e.g. `main`, `spotify`). */
export interface GroupedLinks {
	[key: string]: Link[]
}

/** Safe default when `/api/links` is unavailable or returns no categories. */
export const EMPTY_GROUPED_LINKS: GroupedLinks = { main: [] }
