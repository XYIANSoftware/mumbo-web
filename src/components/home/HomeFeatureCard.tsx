'use client'

import Link from 'next/link'

export interface HomeFeatureCardProps {
	href: string
	/** PrimeIcons class, e.g. `pi pi-music`. */
	icon: string
	title: string
	description: string
}

export function HomeFeatureCard({
	href,
	icon,
	title,
	description,
}: HomeFeatureCardProps) {
	return (
		<Link
			href={href}
			className='group block h-full no-underline text-inherit'
		>
			<div className='bg-surface-card shadow-lg p-6 rounded-xl h-full transition-shadow group-hover:shadow-xl border border-transparent group-hover:border-primary-light/20'>
				<i className={`${icon} text-4xl text-primary mb-4`} />
				<h3 className='text-xl font-semibold mb-2 text-primary'>{title}</h3>
				<p className='text-color-secondary'>{description}</p>
			</div>
		</Link>
	)
}
