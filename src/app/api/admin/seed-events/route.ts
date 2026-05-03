import { NextResponse } from 'next/server'
import { checkAdminAuth } from '@/lib/api-auth'
import { supabase } from '@/lib/supabase'
import type { Event } from '@/types/events'

export async function POST(request: Request) {
	const isAdmin = await checkAdminAuth()
	if (!isAdmin) {
		return NextResponse.json(
			{ error: 'Unauthorized' },
			{ status: 401 }
		)
	}

	try {
		const events: Event[] = await request.json()

		// Insert all events
		const { data, error } = await supabase
			.from('events')
			.insert(events)
			.select()

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Error seeding events:', error)
		return NextResponse.json(
			{ error: 'Failed to seed events' },
			{ status: 500 }
		)
	}
}
