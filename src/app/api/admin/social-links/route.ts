import { NextResponse } from 'next/server'
import { readTableJson } from '@/lib/data-service'
import { checkAdminAuth } from '@/lib/api-auth'
import { isSupabaseConfigured, supabase } from '@/lib/supabase'
import type { SocialLink } from '@/types/social'

export async function GET() {
	if (!isSupabaseConfigured()) {
		const data = (await readTableJson<SocialLink>('social_links'))
			.slice()
			.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
		return NextResponse.json({ data })
	}
	try {
		const { data, error } = await supabase
			.from('social_links')
			.select('*')
			.order('sort_order', { ascending: true })

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error fetching social links:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch social links' },
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
		const link: SocialLink = await request.json()

		const { data, error } = await supabase
			.from('social_links')
			.insert([link])
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error creating social link:', error)
		return NextResponse.json(
			{ error: 'Failed to create social link' },
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
		const link: SocialLink = await request.json()

		const { data, error } = await supabase
			.from('social_links')
			.update(link)
			.eq('id', link.id)
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error updating social link:', error)
		return NextResponse.json(
			{ error: 'Failed to update social link' },
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
			.from('social_links')
			.delete()
			.eq('id', id)

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Error deleting social link:', error)
		return NextResponse.json(
			{ error: 'Failed to delete social link' },
			{ status: 500 }
		)
	}
}
