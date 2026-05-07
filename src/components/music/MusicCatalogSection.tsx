'use client'

import { Panel } from 'primereact/panel'
import type { MusicEntry } from './music-types'
import { MUSIC_PAGE_CONTENT_MAX_CLASS } from './music-streaming-section'
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
		<div className={MUSIC_PAGE_CONTENT_MAX_CLASS}>
			<Panel
				header={title}
				pt={{
					title: {
						className: 'text-2xl font-semibold text-center',
					},
					content: { className: 'pt-2' },
				}}
			>
				<p className='text-color-secondary mb-6 line-height-3 text-center'>
					{description}
				</p>
				<MusicReleaseGrid items={items} />
			</Panel>
		</div>
	)
}
