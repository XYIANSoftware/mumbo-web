'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from 'primereact/button'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Skeleton } from '@/components/ui/Skeleton'

export function HomeHero() {
	const heroRef = useRef<HTMLDivElement>(null)
	const [heroImageLoaded, setHeroImageLoaded] = useState(false)
	const [profileImageLoaded, setProfileImageLoaded] = useState(false)

	const { scrollYProgress: heroScroll } = useScroll({
		target: heroRef,
		offset: ['start start', 'end start'],
	})

	const heroY = useTransform(heroScroll, [0, 1], ['0%', '50%'])

	return (
		<section
			ref={heroRef}
			className='relative h-[100dvh] flex items-start justify-center overflow-hidden'
		>
			<motion.div
				style={{ y: heroY }}
				className='absolute inset-0 z-0 h-[150%] top-0'
			>
				{!heroImageLoaded && (
					<div className='absolute inset-0 z-10'>
						<Skeleton className='w-full h-full' />
					</div>
				)}
				<Image
					src='/images/mumbo-assets/m_b06468.jpg'
					alt='Mumbo performing'
					fill
					className={`object-cover object-center hidden md:block transition-opacity duration-300 ${
						heroImageLoaded ? 'opacity-100' : 'opacity-0'
					}`}
					priority
					quality={100}
					onLoad={() => setHeroImageLoaded(true)}
				/>
				<Image
					src='/images/mumbo-assets/m_b06468.jpg'
					alt='Mumbo performing'
					fill
					className={`object-cover object-center md:hidden transition-opacity duration-300 ${
						heroImageLoaded ? 'opacity-100' : 'opacity-0'
					}`}
					priority
					quality={100}
					onLoad={() => setHeroImageLoaded(true)}
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-background-primary/80 via-background-primary/50 to-background-primary/80' />
			</motion.div>

			<div className='relative z-10 text-center px-4 pt-[20dvh]'>
				<motion.div
					className='mb-8'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					<div className='relative w-64 h-64 mx-auto'>
						<div className='relative w-full h-full rounded-full overflow-hidden'>
							{!profileImageLoaded && (
								<Skeleton circle className='w-full h-full' />
							)}
							<Image
								src='/images/mumbo-assets/IMG_6879.jpeg'
								alt='Mumbo'
								fill
								className={`object-cover transition-opacity duration-300 ${
									profileImageLoaded ? 'opacity-100' : 'opacity-0'
								}`}
								priority
								quality={100}
								onLoad={() => setProfileImageLoaded(true)}
							/>
						</div>
					</div>
				</motion.div>

				<motion.div
					className='flex flex-col sm:flex-row gap-4 justify-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<Link href='/events'>
						<Button
							label='Upcoming Events'
							icon='pi pi-calendar'
							className='p-button-lg w-full sm:w-auto p-3'
							raised
							size='large'
						/>
					</Link>
					<Link href='/music'>
						<Button
							label='Listen Now'
							icon='pi pi-play'
							className='p-button-lg w-full sm:w-auto p-3'
							severity='info'
							raised
							size='large'
						/>
					</Link>
				</motion.div>
			</div>

			<motion.div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			>
				<i className='pi pi-angle-down text-3xl text-color opacity-50' />
			</motion.div>
		</section>
	)
}
