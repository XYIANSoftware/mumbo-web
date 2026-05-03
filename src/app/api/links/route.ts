import { NextResponse } from 'next/server'
import { isSupabaseConfigured } from '@/lib/supabase'
import { createClient } from '@/utils/supabase/server'
import { Link } from '@/types/content'

export async function GET() {
	try {
		if (!isSupabaseConfigured()) {
			return NextResponse.json({})
		}

		console.log('Creating Supabase client...')
		const supabase = await createClient()
		
		console.log('Fetching links...')
		const { data, error } = await supabase
			.from('links')
			.select('*')
			.order('sort_order', { ascending: true })

		if (error) {
			console.error('Supabase query error:', error)
			throw error
		}

		if (!data) {
			console.error('No data returned from Supabase')
			throw new Error('No data returned from Supabase')
		}

		// Group links by category
		const groupedLinks = data.reduce((acc: { [key: string]: Link[] }, link: Link) => {
			const category = link.category || 'other'
			if (!acc[category]) {
				acc[category] = []
			}
			acc[category].push(link)
			return acc
		}, {})

		console.log('Grouped links data:', JSON.stringify(groupedLinks, null, 2))

		return NextResponse.json(groupedLinks)
	} catch (error) {
		console.error('Error in links API route:', error)
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