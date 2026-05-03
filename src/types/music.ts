export type MusicLink = {
	id?: string
	title: string
	url: string
	platform: 'spotify' | 'soundcloud' | 'youtube'
	type: 'track' | 'album' | 'playlist'
	image_path?: string
	description?: string
	sort_order?: number
	created_at?: string
	updated_at?: string
} 