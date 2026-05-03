import { NextResponse } from 'next/server'
import { checkAdminAuth } from '@/lib/api-auth'
import { supabase } from '@/lib/supabase'
import type { MusicLink } from '@/types/music'

export async function GET() {
	try {
		const { data, error } = await supabase
			.from('music_links')
			.select('*')
			.eq('platform', 'spotify')
			.order('sort_order', { ascending: true })

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error fetching Spotify links:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch Spotify links' },
			{ status: 500 }
		)
	}
}

export async function POST(request: Request) {
	const isAdmin = await checkAdminAuth()
	if (!isAdmin) {
		return NextResponse.json(
			{ error: 'Unauthorized' },
			{ status: 401 }
		)
	}

	try {
		const link: MusicLink = await request.json()
		link.platform = 'spotify'

		const { data, error } = await supabase
			.from('music_links')
			.insert([link])
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error creating Spotify link:', error)
		return NextResponse.json(
			{ error: 'Failed to create Spotify link' },
			{ status: 500 }
		)
	}
}

export async function PUT(request: Request) {
	const isAdmin = await checkAdminAuth()
	if (!isAdmin) {
		return NextResponse.json(
			{ error: 'Unauthorized' },
			{ status: 401 }
		)
	}

	try {
		const link: MusicLink = await request.json()
		link.platform = 'spotify'

		const { data, error } = await supabase
			.from('music_links')
			.update(link)
			.eq('id', link.id)
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error updating Spotify link:', error)
		return NextResponse.json(
			{ error: 'Failed to update Spotify link' },
			{ status: 500 }
		)
	}
}

export async function DELETE(request: Request) {
	const isAdmin = await checkAdminAuth()
	if (!isAdmin) {
		return NextResponse.json(
			{ error: 'Unauthorized' },
			{ status: 401 }
		)
	}

	try {
		const { id } = await request.json()

		const { error } = await supabase
			.from('music_links')
			.delete()
			.eq('id', id)

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Error deleting Spotify link:', error)
		return NextResponse.json(
			{ error: 'Failed to delete Spotify link' },
			{ status: 500 }
		)
	}
}
