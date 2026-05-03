'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Skeleton } from '@/components/ui/Skeleton'

export interface HomeManInTheHatProps {
	imageSrc?: string
	imageAlt?: string
}

export function HomeManInTheHat({
	imageSrc = '/images/mumbo-assets/DV5A8712.jpeg',
	imageAlt = 'Mumbo in action',
}: HomeManInTheHatProps) {
	const [aboutImageLoaded, setAboutImageLoaded] = useState(false)

	return (
		<div className='flex flex-col lg:flex-row items-center gap-12 mb-16'>
			<motion.div
				className='flex-1 relative aspect-square max-w-lg rounded-2xl overflow-hidden'
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				style={{ minHeight: '400px', position: 'relative' }}
			>
				{!aboutImageLoaded && (
					<div className='absolute inset-0 z-10'>
						<Skeleton className='w-full h-full' />
					</div>
				)}
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className={`object-cover object-center transition-opacity duration-300 ${
						aboutImageLoaded ? 'opacity-100' : 'opacity-0'
					}`}
					quality={90}
					onLoad={() => setAboutImageLoaded(true)}
				/>
			</motion.div>
			<motion.div
				className='flex-1'
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<h2 className='text-3xl md:text-4xl font-bold mb-3'>
					Man in the Hat
				</h2>
				<p className='text-lg md:text-xl text-primary-light font-medium mb-6'>
					Behind the Decks 03 w/ Zombae Ft. Mumbo
				</p>
				<p className='text-lg text-gray-300'>
					Ryan, aka MUMBO, is all about versatility in his sets. Blending
					hard-hitting bass with funky, high-energy house music, he keeps the
					crowd on their toes. Every time he takes the stage, you can&apos;t
					help but move your body and smile, which is exactly what he aims to
					achieve with his music.
				</p>
			</motion.div>
		</div>
	)
}
