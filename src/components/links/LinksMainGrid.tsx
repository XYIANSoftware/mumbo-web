'use client'

import { motion } from 'framer-motion'
import { Link } from '@/types/content'
import { Card } from 'primereact/card'
import { LinksPlatformIcon } from './links-platform-icon'

export function LinksMainGrid({ links }: { links: Link[] }) {
	return (
		<motion.div
			className='w-full mb-4 relative z-10'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
				{links.map((link: Link) => (
					<Card
						key={link.id}
						pt={{
							root: {
								className:
									'bg-background-paper border-none hover:bg-background-secondary transition-colors cursor-pointer',
							},
							content: { className: 'p-0' },
						}}
						onClick={() => window.open(link.url, '_blank')}
					>
						<div className='flex items-center gap-4 p-4'>
							{LinksPlatformIcon(link.platform, 'text-5xl')}
							<div className='min-w-0 text-left'>
								<h2 className='text-base font-medium mb-1 text-color truncate'>
									{link.title}
								</h2>
								{link.description && (
									<p className='text-sm text-color-secondary truncate'>
										{link.description}
									</p>
								)}
							</div>
						</div>
					</Card>
				))}
			</div>
		</motion.div>
	)
}
