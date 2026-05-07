import eventsRaw from '@/data/events.json'
import type { Event } from '@/types/content'

/** Rows in `src/data/events.json` (same shape as former API / JSON file). */
interface EventJsonRow {
	id?: string
	title: string
	description?: string
	date: string
	time?: string
	location?: string
	image_url?: string | null
	image_path?: string | null
	ticket_url?: string | null
	price?: string | null
	status?: string | null
	sort_order?: number | null
	created_at?: string | null
	updated_at?: string | null
}

function mapRow(row: EventJsonRow): Event {
	const stableId =
		row.id ?? `local-${row.date}-${row.title}`.replace(/\s+/g, '-')
	const rawStatus = (row.status ?? 'UPCOMING').toUpperCase()
	const status: Event['status'] =
		rawStatus === 'PAST' || rawStatus === 'CANCELLED' || rawStatus === 'UPCOMING'
			? rawStatus
			: 'UPCOMING'

	const img = row.image_url ?? row.image_path ?? undefined

	return {
		id: stableId,
		title: row.title,
		description: row.description ?? '',
		date: row.date,
		time: row.time ?? '',
		location: row.location ?? '',
		image_url: img ?? undefined,
		image_path: img ?? undefined,
		ticket_url: row.ticket_url ?? undefined,
		price: row.price ?? undefined,
		status,
		sort_order: row.sort_order ?? undefined,
		created_at: row.created_at ?? undefined,
		updated_at: row.updated_at ?? undefined,
	}
}

/** Site events from static JSON — single source for `/events` and `/api/events`. */
export const SITE_EVENTS: Event[] = (eventsRaw as EventJsonRow[]).map(mapRow)
