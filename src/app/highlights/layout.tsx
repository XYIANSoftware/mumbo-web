import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'Highlights',
	description: 'Photos, reels, and standout moments from Mumbo shows',
	path: '/highlights',
	imagePath: '/images/mumbo-assets/M_B04850-1-NR.jpg',
	imageAlt: 'Mumbo highlights',
})

export default function HighlightsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
