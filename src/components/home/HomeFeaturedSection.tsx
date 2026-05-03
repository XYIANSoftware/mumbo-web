'use client'

import { HomeFeatureCards } from './HomeFeatureCards'
import { HomeManInTheHat } from './HomeManInTheHat'

export function HomeFeaturedSection() {
	return (
		<section className='py-20 bg-surface-section'>
			<div className='container mx-auto px-4'>
				<HomeManInTheHat />
				<HomeFeatureCards />
			</div>
		</section>
	)
}
