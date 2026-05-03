'use client'

import type { MusicEntry } from './music-types'
import { MusicReleaseGrid } from './MusicReleaseGrid'

export interface MusicCatalogSectionProps {
	title: string
	description: string
	items: MusicEntry[]
}

export function MusicCatalogSection({
	title,
	description,
	items,
}: MusicCatalogSectionProps) {
	return (
		<section>
			<h2 className='text-2xl font-semibold text-white mb-6'>{title}</h2>
			<p className='text-gray-400 mb-6 max-w-2xl'>{description}</p>
			<MusicReleaseGrid items={items} />
		</section>
	)
}
