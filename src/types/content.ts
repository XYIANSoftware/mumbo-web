export interface BaseContent {
	id: string
	title: string
	image_path?: string
	image_url?: string
	sort_order?: number
	created_at?: string
	updated_at?: string
}

export interface MusicLink extends BaseContent {
	url: string
	platform: 'spotify' | 'soundcloud' | 'youtube'
	type: 'track' | 'album' | 'playlist'
	description?: string
}

export interface Event extends BaseContent {
	date: string
	time: string
	location: string
	description: string
	ticket_url?: string
	price?: string
	status: 'UPCOMING' | 'PAST' | 'CANCELLED'
}

export interface SocialLink extends BaseContent {
	platform: string
	url: string
	icon: string
	username: string
}

export interface CommunityPost extends BaseContent {
	content: string
	type: 'UPDATE' | 'ANNOUNCEMENT' | 'RELEASE'
	link?: string
}

export interface Link {
	id: string
	title: string
	description?: string
	url: string
	image_url?: string
	icon?: string
	type: string
	category: string
	platform?: string
	sort_order: number
	created_at: string
	updated_at: string
}
