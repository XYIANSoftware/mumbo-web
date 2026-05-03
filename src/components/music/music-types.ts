export type PlatformKey = 'spotify' | 'soundcloud' | 'apple' | 'youtube'

export interface MusicEntry {
	title: string
	image: string
	/** Main card click opens this URL. */
	primaryUrl: string
	spotifyUrl?: string
	soundcloudUrl?: string
	appleMusicUrl?: string
	youtubeUrl?: string
}
