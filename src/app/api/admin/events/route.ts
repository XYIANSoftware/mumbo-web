import { NextResponse } from 'next/server'
import { checkAdminAuth } from '@/lib/api-auth'
import { supabase } from '@/lib/supabase'
import type { Event } from '@/types/events'

export async function GET() {
	try {
		const { data, error } = await supabase
			.from('events')
			.select('*')
			.order('date', { ascending: true })

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error fetching events:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch events' },
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
		const event: Event = await request.json()

		const { data, error } = await supabase
			.from('events')
			.insert([event])
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error creating event:', error)
		return NextResponse.json(
			{ error: 'Failed to create event' },
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
		const event: Event = await request.json()

		const { data, error } = await supabase
			.from('events')
			.update(event)
			.eq('id', event.id)
			.select()
			.single()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error updating event:', error)
		return NextResponse.json(
			{ error: 'Failed to update event' },
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
			.from('events')
			.delete()
			.eq('id', id)

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Error deleting event:', error)
		return NextResponse.json(
			{ error: 'Failed to delete event' },
			{ status: 500 }
		)
	}
}
