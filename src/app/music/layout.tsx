import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'Music',
	description: 'Listen to Mumbo tracks, flips, and live sets',
	path: '/music',
	imagePath: '/images/mumbo-assets/IMG_6879.jpeg',
	imageAlt: 'Mumbo music page',
})

export default function MusicLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
