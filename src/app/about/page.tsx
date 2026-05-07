'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from 'primereact/card'
import { ABOUT_PAGE_SOCIAL_LINKS } from '@/constants/about-page-social'
import { PAGE_SHELL_CLASS } from '@/constants/page-shell'

export default function AboutPage() {
	return (
		<div className={PAGE_SHELL_CLASS}>
			<PageHeader title='About Mumbo' subtitle='The story behind the beats' />

			<div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start'>
				<motion.div
					className='w-full min-w-0'
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Card
						pt={{
							root: {
								className:
									'bg-background-paper border-none h-full',
							},
							content: { className: 'p-6 md:p-8' },
						}}
					>
						<div className='relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-xl'>
							<Image
								src='/images/mumbo-assets/M_B04850-1-NR.jpg'
								alt='Mumbo performing'
								fill
								className='object-cover'
								sizes='(max-width: 1024px) 100vw, 50vw'
								priority
							/>
						</div>
						<div className='relative mx-auto mb-8 flex h-[clamp(4rem,10vw,11rem)] w-full max-w-[22rem] justify-center'>
							<Image
								src='/images/mumbo-assets/Mumbo_logo.png'
								alt='Mumbo'
								fill
								className='object-contain object-center'
								sizes='(max-width: 1024px) 90vw, 22rem'
							/>
						</div>
						<div className='flex flex-wrap justify-center gap-6'>
							{ABOUT_PAGE_SOCIAL_LINKS.map(link => (
								<a
									key={link.platform}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-color-secondary transition-colors hover:text-primary-light'
									aria-label={link.platform}
								>
									<i className={`${link.icon} text-4xl`}></i>
								</a>
							))}
						</div>
					</Card>
				</motion.div>

				<motion.div
					className='w-full min-w-0'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
				>
					<Card
						pt={{
							root: {
								className:
									'bg-background-paper border-none h-full',
							},
							content: { className: 'p-6 md:p-8' },
						}}
					>
						<div className='max-w-none'>
							<h2 className='mb-6 text-2xl font-semibold text-color'>
								The Journey
							</h2>
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
							<h3 className='mb-4 mt-8 text-xl font-semibold text-color'>
								Latest Releases
							</h3>
							<ul className='mb-6 list-disc pl-6 text-color-secondary'>
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
