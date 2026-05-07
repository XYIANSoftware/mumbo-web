import type { Metadata } from 'next'

interface PageMetadataInput {
	title: string
	description: string
	path: string
	imagePath: string
	imageAlt: string
}

export function createPageMetadata({
	title,
	description,
	path,
	imagePath,
	imageAlt,
}: PageMetadataInput): Metadata {
	const url =
		path === '/' ? 'https://mumbobeatz.com' : `https://mumbobeatz.com${path}`

	return {
		title,
		description,
		alternates: {
			canonical: path,
		},
		openGraph: {
			title,
			description,
			url,
			siteName: 'Mumbo',
			locale: 'en_US',
			type: 'website',
			images: [
				{
					url: imagePath,
					width: 1200,
					height: 630,
					alt: imageAlt,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [imagePath],
		},
	}
}
