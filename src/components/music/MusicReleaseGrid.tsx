'use client'

import type { MusicEntry } from './music-types'
import { MusicReleaseCard } from './MusicReleaseCard'

export function MusicReleaseGrid({ items }: { items: MusicEntry[] }) {
	return (
		<div className='grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 md:justify-items-stretch lg:grid-cols-3'>
			{items.map(entry => (
				<div key={entry.title} className='w-full max-w-sm md:max-w-none'>
					<MusicReleaseCard entry={entry} />
				</div>
			))}
		</div>
	)
}
