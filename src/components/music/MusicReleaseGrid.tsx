'use client'

import type { MusicEntry } from './music-types'
import { MusicReleaseCard } from './MusicReleaseCard'

export function MusicReleaseGrid({ items }: { items: MusicEntry[] }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{items.map(entry => (
				<MusicReleaseCard key={entry.title} entry={entry} />
			))}
		</div>
	)
}
