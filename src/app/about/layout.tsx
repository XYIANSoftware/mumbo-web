import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'About',
	description: 'The story behind Mumbo and the evolution of the sound',
	path: '/about',
	imagePath: '/images/mumbo-assets/M_B04850-1-NR.jpg',
	imageAlt: 'About Mumbo',
})

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
