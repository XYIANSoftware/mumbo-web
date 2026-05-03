'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import type { MusicEntry } from './music-types'
import { MusicPlatformBubbles } from './MusicPlatformBubbles'

export interface MusicReleaseCardProps {
	entry: MusicEntry
	index: number
}

export function MusicReleaseCard({ entry, index }: MusicReleaseCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.08 }}
		>
			<Card
				className='h-full cursor-pointer'
				onClick={() => window.open(entry.primaryUrl, '_blank')}
			>
				<div className='relative aspect-square mb-4 overflow-hidden rounded-lg'>
					<img
						src={entry.image}
						alt=''
						className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
					/>
				</div>
				<h3 className='text-xl font-semibold mb-1'>{entry.title}</h3>
				<MusicPlatformBubbles entry={entry} />
			</Card>
		</motion.div>
	)
}
