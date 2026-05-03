import { NextResponse } from 'next/server'
import { readTableJson } from '@/lib/data-service'
import { checkAdminAuth } from '@/lib/api-auth'
import { isSupabaseConfigured, supabase } from '@/lib/supabase'

export async function GET() {
	if (!isSupabaseConfigured()) {
		const data = await readTableJson('community_posts')
		return NextResponse.json({ data })
	}
	try {
		const { data, error } = await supabase
			.from('community_posts')
			.select('*')
			.order('created_at', { ascending: false })

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error fetching community posts:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch community posts' },
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
		const post = await request.json()

		const { data, error } = await supabase
			.from('community_posts')
			.insert([post])
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error creating community post:', error)
		return NextResponse.json(
			{ error: 'Failed to create community post' },
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
		const post = await request.json()

		const { data, error } = await supabase
			.from('community_posts')
			.update(post)
			.eq('id', post.id)
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error updating community post:', error)
		return NextResponse.json(
			{ error: 'Failed to update community post' },
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
			.from('community_posts')
			.delete()
			.eq('id', id)

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Error deleting community post:', error)
		return NextResponse.json(
			{ error: 'Failed to delete community post' },
			{ status: 500 }
		)
	}
}
