import { Link } from '@/types/content'
import type { GroupedLinks } from './grouped-links'

/**
 * Pinned “main” tiles on `/links` (Socials). Shown first, then merged with
 * `links.main` from the API. Edit this array to add/remove pinned platforms.
 */
export const LINKS_MAIN_PINNED: Link[] = [
	{
		id: 'pinned-apple-music',
		title: 'Apple Music',
		description: 'Stream on Apple Music',
		url: 'https://music.apple.com/us/artist/mumbo/1811034573',
		category: 'main',
		type: 'social',
		platform: 'APPLE',
		sort_order: -2,
		created_at: '',
		updated_at: '',
	},
	{
		id: 'pinned-tiktok',
		title: 'TikTok',
		description: '@mumbobeatz',
		url: 'https://www.tiktok.com/@mumbobeatz',
		category: 'main',
		type: 'social',
		platform: 'TIKTOK',
		sort_order: -1,
		created_at: '',
		updated_at: '',
	},
]

/**
 * Optional accordion groups when the API returns nothing for a category.
 * Key = category slug (matches API / `Accordion` headers). Add `{ category: Link[] }`
 * rows here for static fallbacks; merged only if API has no links for that key.
 */
export const LINK_GROUPS_FALLBACK: GroupedLinks = {}

export function mergeMainLinkList(apiMain: Link[] | undefined): Link[] {
	const rest = apiMain ?? []
	return [...LINKS_MAIN_PINNED, ...rest].sort(
		(a, b) => a.sort_order - b.sort_order
	)
}

export function mergeGroupedLinks(
	api: GroupedLinks,
	fallback: GroupedLinks = LINK_GROUPS_FALLBACK
): GroupedLinks {
	const out: GroupedLinks = { ...api }
	for (const [key, value] of Object.entries(fallback)) {
		if (key === 'main') continue
		const existing = out[key]
		if (!existing?.length && value.length) {
			out[key] = value
		}
	}
	return out
}
