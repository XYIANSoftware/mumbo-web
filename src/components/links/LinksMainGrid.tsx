'use client'

import { motion } from 'framer-motion'
import type { Link } from '@/types/content'
import { LinksMainTile } from './links-main-tile'

export function LinksMainGrid({ links }: { links: Link[] }) {
	return (
		<motion.div
			className='w-full mb-4 relative z-10'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			{/*
				Flex + wrap + justify-center so incomplete last rows stay centered
				(unlike CSS grid, where orphans stick to column 1).
			*/}
			<div className='flex flex-wrap justify-center gap-4 w-full'>
				{links.map((link: Link) => (
					<div
						key={link.id}
						className='w-[min(100%,17.5rem)] shrink-0 basis-[min(100%,17.5rem)]'
					>
						<LinksMainTile link={link} />
					</div>
				))}
			</div>
		</motion.div>
	)
}
