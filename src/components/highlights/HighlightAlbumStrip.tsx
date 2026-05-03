'use client'

import type { HighlightItem } from './highlight-model'

export interface HighlightAlbumStripProps {
	items: HighlightItem[]
	onSelect: (item: HighlightItem) => void
}

export function HighlightAlbumStrip({ items, onSelect }: HighlightAlbumStripProps) {
	return (
		<>
			<h2 className='text-lg font-semibold text-white mb-3'>Album strip</h2>
			<div className='overflow-x-auto pb-2 -mx-4 px-4'>
				<div className='flex gap-3 snap-x snap-mandatory min-w-min'>
					{items.map(item => (
						<button
							key={`strip-${item.id}`}
							type='button'
							onClick={() => onSelect(item)}
							className='snap-start shrink-0 w-36 sm:w-44 rounded-lg overflow-hidden border border-background-paper hover:border-primary-light/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light'
						>
							<div className='relative aspect-square w-36 sm:w-44'>
								<img
									src={item.thumbnail}
									alt=''
									className='object-cover w-full h-full'
								/>
							</div>
						</button>
					))}
				</div>
			</div>
		</>
	)
}
