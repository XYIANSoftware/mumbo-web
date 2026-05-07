import { NextResponse } from 'next/server'
import { SITE_EVENTS } from '@/constants/events-data'

/**
 * Public events list — sourced from static JSON via `SITE_EVENTS`
 * (same data as `/events`). No Supabase in this build.
 */
export async function GET() {
	return NextResponse.json(SITE_EVENTS)
}
