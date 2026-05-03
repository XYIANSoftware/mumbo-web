'use client'

import { motion } from 'framer-motion'
import {
	HomeFeatureCard,
	type HomeFeatureCardProps,
} from './HomeFeatureCard'
import { HOME_FEATURE_CARDS } from './home-feature-cards-data'

export interface HomeFeatureCardsProps {
	/** Defaults to `HOME_FEATURE_CARDS` from `home-feature-cards-data.ts`. */
	items?: HomeFeatureCardProps[]
}

export function HomeFeatureCards({ items = HOME_FEATURE_CARDS }: HomeFeatureCardsProps) {
	return (
		<motion.div
			className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			{items.map(props => (
				<HomeFeatureCard key={props.href} {...props} />
			))}
		</motion.div>
	)
}
