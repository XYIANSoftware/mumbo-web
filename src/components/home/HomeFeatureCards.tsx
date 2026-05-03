'use client'

import { motion } from 'framer-motion'
import { HomeFeatureCard } from './HomeFeatureCard'
import { homeFeatureCards } from './home-feature-cards-data'

export function HomeFeatureCards() {
	return (
		<motion.div
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			{homeFeatureCards.map(props => (
				<HomeFeatureCard key={props.href} {...props} />
			))}
		</motion.div>
	)
}
