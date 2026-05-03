import type { Link } from '@/types/content'

/** Links API shape: category key → list of links (e.g. `main`, `spotify`). */
export interface GroupedLinks {
	[key: string]: Link[]
}
