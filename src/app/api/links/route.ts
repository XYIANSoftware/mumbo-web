import { NextResponse } from 'next/server'
import { SITE_GROUPED_LINKS } from '@/constants/site-links'

/**
 * Public links payload — same **`SITE_GROUPED_LINKS`** as **`/socials`** (no DB).
 */
export async function GET() {
	return NextResponse.json(SITE_GROUPED_LINKS)
}
