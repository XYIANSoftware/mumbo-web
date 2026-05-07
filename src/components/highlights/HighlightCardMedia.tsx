'use client'

import { Image } from 'primereact/image'
import type { HighlightItem } from './highlight-model'

export function HighlightCardMedia({ item }: { item: HighlightItem }) {
	return (
		<div className='relative aspect-square rounded-lg overflow-hidden'>
			<Image
				src={item.thumbnail}
				alt={item.title}
				preview
				pt={{
					image: {
						className:
							'object-cover w-full h-full transition-transform duration-300 hover:scale-110',
					},
				}}
				downloadable={false}
			/>
			{item.type === 'video' && (
				<div className='absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none'>
					<i className='pi pi-play text-4xl text-color' />
				</div>
			)}
		</div>
	)
}
