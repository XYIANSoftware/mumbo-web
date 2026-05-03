import { supabase } from './supabase'

export type Event = {
	id: string
	title: string
	description: string
	date: string
	location: string
	image_path?: string
	sort_order: number
	status: 'UPCOMING' | 'PAST' | 'CANCELLED'
	created_at: string
	updated_at: string
}

export type MusicLink = {
	id: string
	title: string
	url: string
	platform: string
	type: string
	image_path?: string
	description?: string
	sort_order: number
	created_at: string
	updated_at: string
}

export type GalleryItem = {
	id: string
	title: string
	description?: string
	image_path: string
	sort_order: number
	created_at: string
	updated_at: string
}

export type SocialLink = {
	id: string
	platform: string
	url: string
	icon: string
	username: string
	sort_order: number
	created_at: string
	updated_at: string
}

// Events CRUD
export async function getEvents() {
	const { data, error } = await supabase
		.from('events')
		.select('*')
		.order('sort_order', { ascending: true })
		.order('date', { ascending: true })

	if (error) throw error
	return data as Event[]
}

export async function createEvent(event: Omit<Event, 'id' | 'created_at' | 'updated_at'>) {
	const { data, error } = await supabase
		.from('events')
		.insert([event])
		.select()
		.single()

	if (error) throw error
	return data as Event
}

export async function updateEvent(id: string, event: Partial<Event>) {
	const { data, error } = await supabase
		.from('events')
		.update(event)
		.eq('id', id)
		.select()
		.single()

	if (error) throw error
	return data as Event
}

export async function deleteEvent(id: string) {
	const { error } = await supabase
		.from('events')
		.delete()
		.eq('id', id)

	if (error) throw error
	return true
}

// Music Links CRUD
export async function getMusicLinks() {
	const { data, error } = await supabase
		.from('music_links')
		.select('*')
		.order('sort_order', { ascending: true })

	if (error) throw error
	return data as MusicLink[]
}

export async function createMusicLink(link: Omit<MusicLink, 'id' | 'created_at' | 'updated_at'>) {
	const { data, error } = await supabase
		.from('music_links')
		.insert([link])
		.select()
		.single()

	if (error) throw error
	return data as MusicLink
}

export async function updateMusicLink(id: string, link: Partial<MusicLink>) {
	const { data, error } = await supabase
		.from('music_links')
		.update(link)
		.eq('id', id)
		.select()
		.single()

	if (error) throw error
	return data as MusicLink
}

export async function deleteMusicLink(id: string) {
	const { error } = await supabase
		.from('music_links')
		.delete()
		.eq('id', id)

	if (error) throw error
	return true
}

// Gallery Items CRUD
export async function getGalleryItems() {
	const { data, error } = await supabase
		.from('gallery_items')
		.select('*')
		.order('sort_order', { ascending: true })

	if (error) throw error
	return data as GalleryItem[]
}

export async function createGalleryItem(item: Omit<GalleryItem, 'id' | 'created_at' | 'updated_at'>) {
	const { data, error } = await supabase
		.from('gallery_items')
		.insert([item])
		.select()
		.single()

	if (error) throw error
	return data as GalleryItem
}

export async function updateGalleryItem(id: string, item: Partial<GalleryItem>) {
	const { data, error } = await supabase
		.from('gallery_items')
		.update(item)
		.eq('id', id)
		.select()
		.single()

	if (error) throw error
	return data as GalleryItem
}

export async function deleteGalleryItem(id: string) {
	const { error } = await supabase
		.from('gallery_items')
		.delete()
		.eq('id', id)

	if (error) throw error
	return true
}

// Social Links CRUD
export async function getSocialLinks() {
	const { data, error } = await supabase
		.from('social_links')
		.select('*')
		.order('sort_order', { ascending: true })

	if (error) throw error
	return data as SocialLink[]
}

export async function createSocialLink(link: Omit<SocialLink, 'id' | 'created_at' | 'updated_at'>) {
	const { data, error } = await supabase
		.from('social_links')
		.insert([link])
		.select()
		.single()

	if (error) throw error
	return data as SocialLink
}

export async function updateSocialLink(id: string, link: Partial<SocialLink>) {
	const { data, error } = await supabase
		.from('social_links')
		.update(link)
		.eq('id', id)
		.select()
		.single()

	if (error) throw error
	return data as SocialLink
}

export async function deleteSocialLink(id: string) {
	const { error } = await supabase
		.from('social_links')
		.delete()
		.eq('id', id)

	if (error) throw error
	return true
} 