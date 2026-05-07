'use client'

import Link from 'next/link'

const DEFAULT_TAGLINE = 'Experience the fusion of EDM and playful vibes'

export interface FooterBrandProps {
	tagline?: string
	className?: string
}

export function FooterBrand({
	tagline = DEFAULT_TAGLINE,
	className = '',
}: FooterBrandProps) {
	return (
		<div
			className={`flex flex-col items-center md:items-start text-center md:text-left shrink-0 ${className}`.trim()}
		>
			<Link href='/' className='mb-4 inline-block max-w-full'>
				<img
					src='/images/mumbo-assets/Mumbo_logo.png'
					alt='Mumbo'
					className='h-[clamp(3.25rem,5vw+2rem,10rem)] w-auto max-w-[min(100%,22rem)] object-contain object-left'
				/>
			</Link>
			<p className='text-color-secondary max-w-xs'>{tagline}</p>
		</div>
	)
}
