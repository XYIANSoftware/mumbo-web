import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'Events',
	description: 'Catch Mumbo live at upcoming shows and festivals',
	path: '/events',
	imagePath: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
	imageAlt: 'Mumbo live event',
})

export default function EventsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
