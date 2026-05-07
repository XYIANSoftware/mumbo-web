import type { Metadata } from 'next'
import { findEventDetailBySlug } from '@/constants/event-details'
import { createPageMetadata } from '@/lib/metadata'

interface EventLayoutProps {
	children: React.ReactNode
	params: Promise<{
		eventName: string
	}>
}

export async function generateMetadata({
	params,
}: EventLayoutProps): Promise<Metadata> {
	const { eventName } = await params
	const event = findEventDetailBySlug(eventName)

	if (!event) {
		return {
			title: 'Event Not Found | Mumbo',
			description: 'This event could not be found. Browse all upcoming events.',
			alternates: { canonical: '/events' },
			openGraph: {
				title: 'Event Not Found | Mumbo',
				description:
					'This event could not be found. Browse all upcoming events.',
				url: 'https://mumbobeatz.com/events',
				type: 'website',
				images: [
					{
						url: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
						width: 1200,
						height: 630,
						alt: 'Mumbo events',
					},
				],
			},
			twitter: {
				card: 'summary_large_image',
				title: 'Event Not Found | Mumbo',
				description:
					'This event could not be found. Browse all upcoming events.',
				images: ['/images/mumbo-assets/2024_0906-Bloom_047.jpeg'],
			},
		}
	}

	const description = `${event.date} • ${event.location} • ${event.description}`
	const fullTitle = `${event.title} | Mumbo`

	return createPageMetadata({
		title: fullTitle,
		description,
		path: `/events/${event.eventName}`,
		imagePath: event.imageUrl,
		imageAlt: event.title,
	})
}

export default function EventDetailLayout({ children }: EventLayoutProps) {
	return children
}
