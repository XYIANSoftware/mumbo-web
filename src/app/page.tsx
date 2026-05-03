'use client'

import { HomeFeaturedSection } from '@/components/home/HomeFeaturedSection'
import { HomeHero } from '@/components/home/HomeHero'

export default function Home() {
	return (
		<div className='min-h-screen relative'>
			<HomeHero />
			<HomeFeaturedSection />
		</div>
	)
}
