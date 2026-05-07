'use client'

import { motion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from 'primereact/card'
import Image from 'next/image'
import { ABOUT_PAGE_SOCIAL_LINKS } from '@/constants/about-page-social'
import { PAGE_SHELL_CLASS } from '@/constants/page-shell'

export default function AboutPage() {
	return (
		<div className={PAGE_SHELL_CLASS}>
			<PageHeader title='About Mumbo' subtitle='The story behind the beats' />

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Card
						pt={{
							root: { className: 'bg-background-paper border-none' },
							content: { className: 'p-6' },
						}}
					>
						<div className='relative aspect-square rounded-lg overflow-hidden mb-6'>
							<Image
								src='/images/mumbo-assets/M_B04850-1-NR.jpg'
								alt='Mumbo'
								fill
								className='object-cover'
							/>
						</div>
						<div className='flex justify-center mb-6'>
							<div className='relative h-24 w-48'>
								<Image
									src='/images/logo.png'
									alt='Mumbo Logo'
									fill
									className='object-contain'
								/>
							</div>
						</div>
						<div className='flex flex-wrap gap-4 justify-center'>
							{ABOUT_PAGE_SOCIAL_LINKS.map(link => (
								<a
									key={link.platform}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-color-secondary hover:text-primary-light transition-colors'
									aria-label={link.platform}
								>
									<i className={`${link.icon} text-4xl`}></i>
								</a>
							))}
						</div>
					</Card>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Card
						pt={{
							root: { className: 'bg-background-paper border-none h-full' },
							content: { className: 'p-6' },
						}}
					>
						<div className='prose prose-invert max-w-none'>
							<h2 className='text-2xl font-semibold mb-6'>The Journey</h2>
							<p className='mb-4 text-color-secondary'>
								Mumbo is an innovative electronic music producer and artist,
								known for blending EDM with playful, cartoon-inspired elements.
								With releases like &quot;Feelin&apos; Pretty Suavé&quot; and
								&quot;Project Seismic&quot;, Mumbo has established a unique
								sound that bridges the gap between energetic dance music and
								nostalgic vibes.
							</p>
							<p className='mb-4 text-color-secondary'>
								Starting with the &quot;Mumbo Jumbo&quot; series, which has now
								reached its 6th episode, Mumbo has consistently pushed the
								boundaries of electronic music. Each release showcases a
								perfect fusion of hard-hitting beats and whimsical elements that
								set him apart in the EDM scene.
							</p>
							<p className='mb-4 text-color-secondary'>
								Recent projects include the successful &quot;Mumbo&apos;s
								Secret Stuff Vol. 1&quot; and notable remixes like the
								&quot;Satellite (Mumbo Flip)&quot; and &quot;Eat the Bass
								(Mumbo flip)&quot;, demonstrating versatility and innovation in
								production.
							</p>
							<h3 className='text-xl font-semibold mb-4 mt-8'>
								Latest Releases
							</h3>
							<ul className='list-disc pl-6 mb-6 text-color-secondary'>
								<li>Feelin&apos; Pretty Suavé</li>
								<li>Project Seismic</li>
								<li>Mumbo&apos;s Secret Stuff Vol. 1</li>
								<li>Satellite (Mumbo Flip)</li>
								<li>Eat the Bass (Mumbo flip)</li>
							</ul>
							<p className='text-color-secondary'>
								Catch Mumbo live at various venues and festivals, where the
								energy of his productions comes to life in dynamic,
								unforgettable performances.
							</p>
						</div>
					</Card>
				</motion.div>
			</div>
		</div>
	)
}
