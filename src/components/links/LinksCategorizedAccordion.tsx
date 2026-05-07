'use client'

import { motion } from 'framer-motion'
import { Link } from '@/types/content'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button'
import type { GroupedLinks } from './grouped-links'
import { LinksPlatformIcon } from './links-platform-icon'

function formatCategory(category: string) {
	return category
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

export function LinksCategorizedAccordion({ links }: { links: GroupedLinks }) {
	return (
		<motion.div
			className='w-full relative z-10'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.4 }}
		>
			<Accordion>
				{Object.entries(links)
					.filter(([category]) => category !== 'main')
					.map(([category, categoryLinks]) => (
						<AccordionTab
							key={category}
							header={
								<div className='flex items-center gap-3'>
									{LinksPlatformIcon(category, 'text-2xl')}
									<span className='text-color'>
										{formatCategory(category)}
									</span>
									<span className='text-sm text-color-secondary'>
										({categoryLinks.length})
									</span>
								</div>
							}
						>
							<div className='space-y-2 pt-2'>
								{categoryLinks.map((link: Link) => (
									<Button
										key={link.id}
										onClick={() => window.open(link.url, '_blank')}
										className='p-0 w-full'
										pt={{
											root: {
												className:
													'bg-background-paper hover:bg-background-secondary border-none',
											},
										}}
									>
										<div className='flex items-center gap-3 p-3'>
											{LinksPlatformIcon(link.platform, 'text-2xl')}
											<div className='text-left'>
												<h3 className='text-base font-medium mb-0.5 text-color'>
													{link.title}
												</h3>
												{link.description && (
													<p className='text-sm text-color-secondary'>
														{link.description}
													</p>
												)}
											</div>
										</div>
									</Button>
								))}
							</div>
						</AccordionTab>
					))}
			</Accordion>
		</motion.div>
	)
}
