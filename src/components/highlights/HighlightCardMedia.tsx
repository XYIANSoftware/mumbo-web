'use client'

import { Image } from 'primereact/image'
import { HIGHLIGHT_CARD_MEDIA_FRAME_CLASS } from '@/constants/highlights-layout'
import type { HighlightItem } from './highlight-model'

export function HighlightCardMedia({ item }: { item: HighlightItem }) {
	return (
		<div
			className={`${HIGHLIGHT_CARD_MEDIA_FRAME_CLASS} [&_.p-image]:flex [&_.p-image]:h-full [&_.p-image]:min-h-0 [&_.p-image]:w-full`}
		>
			<Image
				src={item.thumbnail}
				alt={item.title}
				preview
				pt={{
					root: { className: 'block h-full min-h-0 w-full' },
					image: {
						className:
							'h-full min-h-0 w-full object-cover transition-transform duration-300 hover:scale-[1.03]',
					},
				}}
				downloadable={false}
			/>
			{item.type === 'video' && (
				<div className='absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none z-[1]'>
					<i className='pi pi-play text-4xl text-color' />
				</div>
			)}
		</div>
	)
}
