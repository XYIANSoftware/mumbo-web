'use client'

/**
 * Home page stats grid (years of experience, live shows, etc.).
 * Kept in the component library for reuse; not currently mounted on the home page.
 */
export function HomeStatsGrid() {
	return (
		<div className='grid grid-cols-2 gap-6'>
			<div>
				<h3 className='text-xl font-semibold mb-2 text-primary-light'>
					5+ Years
				</h3>
				<p className='text-color-secondary'>Of Experience</p>
			</div>
			<div>
				<h3 className='text-xl font-semibold mb-2 text-secondary-light'>
					200+
				</h3>
				<p className='text-color-secondary'>Live Shows</p>
			</div>
			<div>
				<h3 className='text-xl font-semibold mb-2 text-accent-light'>
					50+
				</h3>
				<p className='text-color-secondary'>Original Tracks</p>
			</div>
			<div>
				<h3 className='text-xl font-semibold mb-2 text-primary-light'>
					100K+
				</h3>
				<p className='text-color-secondary'>Happy Fans</p>
			</div>
		</div>
	)
}
