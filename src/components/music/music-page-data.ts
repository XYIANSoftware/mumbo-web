/**
 * Music page catalogs — edit these arrays to change tracks/mixes shown on `/music`.
 * Rendering uses `MusicReleaseGrid` → `MusicReleaseCard` with `map()`.
 */
import type { MusicEntry } from './music-types'

export const MUSIC_PAGE_SONGS: MusicEntry[] = [
	{
		title: "Feelin' Pretty Suavé",
		image: '/images/mumbo-assets/M_B04850-1-NR.jpg',
		primaryUrl: 'https://open.spotify.com/track/your-track-id',
		spotifyUrl: 'https://open.spotify.com/track/your-track-id',
		appleMusicUrl: 'https://music.apple.com/us/artist/mumbo/1811034573',
	},
	{
		title: 'Satellite (Mumbo Flip)',
		image: '/images/mumbo-assets/M_B04851-1-NR.jpg',
		primaryUrl: 'https://soundcloud.com/mumbobeatz',
		soundcloudUrl: 'https://soundcloud.com/mumbobeatz',
		spotifyUrl: 'https://open.spotify.com/track/your-track-id',
	},
	{
		title: 'Project Seismic',
		image: '/images/mumbo-assets/M_B04855-1-NR.jpg',
		primaryUrl: 'https://open.spotify.com/track/your-track-id',
		spotifyUrl: 'https://open.spotify.com/track/your-track-id',
	},
	{
		title: 'Eat the Bass (Mumbo flip)',
		image: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
		primaryUrl: 'https://soundcloud.com/mumbobeatz',
		soundcloudUrl: 'https://soundcloud.com/mumbobeatz',
	},
]

export const MUSIC_PAGE_LIVE_SETS: MusicEntry[] = [
	{
		title: "Mumbo's Secret Stuff Vol. 1",
		image: '/images/mumbo-assets/2024_0906-Bloom_049.jpeg',
		primaryUrl: 'https://soundcloud.com/mumbobeatz',
		soundcloudUrl: 'https://soundcloud.com/mumbobeatz',
	},
	{
		title: 'Emorfik 1/25: Mumbo Live Set!',
		image: '/images/mumbo-assets/IMG_7892.JPG',
		primaryUrl: 'https://soundcloud.com/mumbobeatz',
		soundcloudUrl: 'https://soundcloud.com/mumbobeatz',
		youtubeUrl: 'https://www.youtube.com/@mumbobeatz',
	},
]

/**
 * Sections on `/music` — order, titles, copy, and which list to show.
 * Render with `map()` → `MusicCatalogSection`.
 */
export const MUSIC_CATALOG_SECTIONS: {
	title: string
	description: string
	items: MusicEntry[]
}[] = [
	{
		title: 'Songs',
		description:
			'Originals and flips — tap a card for the main link, or use the circles for Spotify, Apple Music, or SoundCloud.',
		items: MUSIC_PAGE_SONGS,
	},
	{
		title: 'Live sets / mixes',
		description:
			'Full recordings are on SoundCloud; select sets also have YouTube.',
		items: MUSIC_PAGE_LIVE_SETS,
	},
]
