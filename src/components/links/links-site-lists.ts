import { Link } from '@/types/content'
import type { GroupedLinks } from './grouped-links'

/**
 * Pinned “main” tiles on `/socials`. Shown first, then merged with `links.main`
 * from the API. Edit this array to add/remove pinned platforms.
 */
export const LINKS_MAIN_PINNED: Link[] = [
	{
		id: 'pinned-spotify',
		title: 'Spotify',
		description: 'Stream on Spotify',
		url: 'https://open.spotify.com/artist/0v4RYCckfkFu4dXWl35BXl?si=ygimJ6ejQfC4RkT7r5ZWHA',
		category: 'main',
		type: 'social',
		platform: 'SPOTIFY',
		sort_order: -4,
		created_at: '',
		updated_at: '',
	},
	{
		id: 'pinned-soundcloud',
		title: 'SoundCloud',
		description: 'All tracks & mixes',
		url: 'https://soundcloud.com/mumbobeatz',
		category: 'main',
		type: 'social',
		platform: 'SOUNDCLOUD',
		sort_order: -3,
		created_at: '',
		updated_at: '',
	},
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
