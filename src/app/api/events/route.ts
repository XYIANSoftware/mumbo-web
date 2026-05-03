import { NextResponse } from 'next/server'
import { readData } from '@/lib/data-service'
import { isSupabaseConfigured } from '@/lib/supabase'
import { createClient } from '@/utils/supabase/server'

function cleanImageUrl(url: string | null | undefined): string | undefined {
	if (!url) return undefined

	try {
		// If it's a Next.js optimized URL, extract the original path
		if (url.includes('_next/image')) {
			const match = url.match(/url=([^&]+)/)
			if (match) {
				// URL decode the matched path
				return decodeURIComponent(match[1])
			}
		}

		// If it's already a direct URL to mumbobeatz.com/images, use it as is
		if (url.includes('mumbobeatz.com/images')) {
			return url
		}

		return url
	} catch (error) {
		console.error('Error cleaning image URL:', error)
		return undefined
	}
}

export async function GET() {
	try {
		if (!isSupabaseConfigured()) {
			const rows = await readData<{
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
			}>('events.json')
			const formattedData = (rows || []).map(event => {
				const cleanedImageUrl = cleanImageUrl(event.image_url)
				const stableId =
					event.id ??
					`local-${event.date}-${event.title}`.replace(/\s+/g, '-')
				return {
					id: stableId,
					title: event.title,
					description: event.description,
					date: event.date,
					time: event.time ?? '',
					location: event.location ?? '',
					image_url: cleanedImageUrl,
					image_path: cleanedImageUrl,
					ticket_url: event.ticket_url ?? undefined,
					price: event.price ?? undefined,
					status: (event.status ?? 'UPCOMING') as
						| 'UPCOMING'
						| 'PAST'
						| 'CANCELLED',
					sort_order: event.sort_order ?? undefined,
					created_at: event.created_at ?? undefined,
					updated_at: event.updated_at ?? undefined,
				}
			})
			return NextResponse.json(formattedData)
		}

		console.log('Creating Supabase client...')
		const supabase = await createClient()
		
		console.log('Fetching events...')
		const { data, error } = await supabase
			.from('events')
			.select('*')
			.order('date', { ascending: true })

		if (error) {
			console.error('Supabase query error:', error)
			throw error
		}

		if (!data) {
			console.error('No data returned from Supabase')
			throw new Error('No data returned from Supabase')
		}

		console.log('Raw events data:', JSON.stringify(data, null, 2))

		// Convert snake_case to camelCase for frontend and clean image URLs
		const formattedData = data.map(event => {
			const cleanedImageUrl = cleanImageUrl(event.image_url)
			const stableId =
				event.id ??
				`local-${event.date}-${event.title}`.replace(/\s+/g, '-')

			return {
				id: stableId,
				title: event.title,
				description: event.description,
				date: event.date,
				time: event.time,
				location: event.location,
				image_url: cleanedImageUrl,
				image_path: cleanedImageUrl, // Use the same cleaned URL for both
				ticket_url: event.ticket_url,
				price: event.price,
				status: event.status,
				sort_order: event.sort_order,
				created_at: event.created_at,
				updated_at: event.updated_at,
			}
		})

		console.log('Formatted events data:', JSON.stringify(formattedData, null, 2))

		return NextResponse.json(formattedData)
	} catch (error) {
		console.error('Error in events API route:', error)
		if (error instanceof Error) {
			console.error('Error details:', error.message)
			console.error('Error stack:', error.stack)
		}
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
