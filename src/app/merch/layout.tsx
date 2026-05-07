import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'Merch',
	description: 'Official Mumbo merchandise and upcoming drops',
	path: '/merch',
	imagePath: '/images/mumbo-assets/M_B04851-1-NR.jpg',
	imageAlt: 'Mumbo merch',
})

export default function MerchLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
