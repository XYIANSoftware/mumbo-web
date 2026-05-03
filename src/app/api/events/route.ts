import { NextResponse } from 'next/server'
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
		console.log('Creating Supabase client...')
		const supabase = await createClient()
		
		console.log('Fetching events...')
		const { data, error } = await supabase
			.from('events')
			.select('*')
			.order('date', { ascending: true })
			.eq('status', 'UPCOMING')

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
			console.log(`Cleaned image URL for ${event.title}:`, {
				original: event.image_url,
				cleaned: cleanedImageUrl
			})

			return {
				id: event.id,
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
