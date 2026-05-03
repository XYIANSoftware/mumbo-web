'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function LinksProfileHero() {
	return (
		<motion.div
			className='text-center mb-4 relative z-10'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4'>
				<Image
					src='/images/mumbo-assets/Mumbo_logo.png'
					alt='Mumbo'
					fill
					className='object-contain'
					priority
					sizes='(max-width: 640px) 160px, 192px'
				/>
			</div>
			<h1 className='text-xl font-bold font-display mb-1'>
				<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light'>
					@mumbobeatz
				</span>
			</h1>
			<p className='text-gray-300 text-xs'>Do the things you love</p>
		</motion.div>
	)
}
