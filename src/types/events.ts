export type Event = {
	id?: string
	title: string
	description?: string
	date: string
	location?: string
	image_path?: string
	image_url?: string
	sort_order?: number
	status?: 'UPCOMING' | 'PAST' | 'CANCELLED'
	created_at?: string
	updated_at?: string
} 