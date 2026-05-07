'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { HIGHLIGHT_CARD_SHELL_CLASS } from '@/constants/highlights-layout'
import type { HighlightItem } from './highlight-model'
import { HighlightCardMedia } from './HighlightCardMedia'

export interface HighlightGridCardProps {
	item: HighlightItem
	index: number
	onOpenDetails: (item: HighlightItem) => void
}

export function HighlightGridCard({
	item,
	index,
	onOpenDetails,
}: HighlightGridCardProps) {
	return (
		<motion.div
			className={HIGHLIGHT_CARD_SHELL_CLASS}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.05 }}
		>
			<Card
				pt={{
					root: {
						className:
							'bg-background-paper border-none hover:bg-background-secondary transition-colors rounded-lg overflow-hidden',
					},
					content: { className: 'p-0' },
				}}
				header={<HighlightCardMedia item={item} />}
			>
				<div className='p-4'>
					<h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
					{item.description && (
						<p className='text-color-secondary text-sm mb-3'>
							{item.description}
						</p>
					)}
					<div className='flex flex-wrap gap-2'>
						<Button
							label='Details'
							icon='pi pi-info-circle'
							size='small'
							onClick={() => onOpenDetails(item)}
							pt={{
								root: { className: 'rounded-full' },
							}}
						/>
						{item.instagramHighlightUrl && (
							<Button
								label='IG highlight'
								icon='pi pi-instagram'
								size='small'
								outlined
								onClick={() =>
									window.open(item.instagramHighlightUrl, '_blank')
								}
								pt={{
									root: { className: 'rounded-full' },
								}}
							/>
						)}
					</div>
				</div>
			</Card>
		</motion.div>
	)
}
