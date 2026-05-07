'use client'

import { PAGE_CONTAINER_CLASS } from '@/constants/page-shell'
import { HomeFeatureCards } from './HomeFeatureCards'
import { HomeManInTheHat } from './HomeManInTheHat'

export function HomeFeaturedSection() {
	return (
		<section className='py-20 bg-surface-section'>
			<div className={PAGE_CONTAINER_CLASS}>
				<HomeManInTheHat />
				<HomeFeatureCards />
			</div>
		</section>
	)
}
