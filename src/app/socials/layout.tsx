import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
	title: 'Socials',
	description: 'Find Mumbo on all social platforms and stay connected',
	path: '/socials',
	imagePath: '/images/mumbo-assets/Mumbo_logo.png',
	imageAlt: 'Mumbo socials',
})

export default function SocialsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
