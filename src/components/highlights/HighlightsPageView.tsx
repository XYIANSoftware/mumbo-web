'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'
import {
	getHighlightStripItems,
	HIGHLIGHT_ITEMS,
} from './highlight-items-data'
import { HighlightAlbumStrip } from './HighlightAlbumStrip'
import { HighlightGridCard } from './HighlightGridCard'
import { HighlightInstagramPromoCard } from './HighlightInstagramPromoCard'
import { HighlightViewerDialog } from './HighlightViewerDialog'
import type { HighlightItem } from './highlight-model'

export function HighlightsPageView() {
	const [selectedItem, setSelectedItem] = useState<HighlightItem | null>(null)

	const stripItems = useMemo(
		() => getHighlightStripItems(HIGHLIGHT_ITEMS),
		[]
	)

	return (
		<div className='container mx-auto px-4 py-12'>
			<PageHeader
				title='Highlights'
				subtitle='Photos, videos, and Instagram story reels from the biggest nights'
			/>

			<motion.section
				className='mb-10'
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.45 }}
			>
				<HighlightInstagramPromoCard />
				<HighlightAlbumStrip
					items={stripItems}
					onSelect={setSelectedItem}
				/>
			</motion.section>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{HIGHLIGHT_ITEMS.map((item, index) => (
					<HighlightGridCard
						key={item.id}
						item={item}
						index={index}
						onOpenGallery={setSelectedItem}
					/>
				))}
			</div>

			<HighlightViewerDialog
				item={selectedItem}
				onHide={() => setSelectedItem(null)}
			/>
		</div>
	)
}
