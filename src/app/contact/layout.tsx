import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'Contact',
	description: 'Bookings, collabs, and contact links for Mumbo',
	path: '/contact',
	imagePath: '/images/mumbo-assets/Mumbo_logo.png',
	imageAlt: 'Contact Mumbo',
})

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
