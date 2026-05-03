'use client'

import { motion } from 'framer-motion'

function LinksBackdropOrb({ className }: { className: string }) {
	return (
		<motion.div
			className={`absolute bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl ${className}`}
			animate={{
				scale: [1, 1.2, 1],
				rotate: [0, 90, 0],
			}}
			transition={{
				duration: 10,
				repeat: Infinity,
				ease: 'linear',
			}}
		/>
	)
}

export function LinksDecorativeBackdrop() {
	return (
		<>
			<LinksBackdropOrb className='w-[400px] h-[400px] -bottom-20 -left-20 opacity-50' />
			<LinksBackdropOrb className='w-[300px] h-[300px] -top-20 -right-20 opacity-50' />
			<LinksBackdropOrb className='w-[200px] h-[200px] bottom-40 right-20 opacity-50' />
		</>
	)
}
