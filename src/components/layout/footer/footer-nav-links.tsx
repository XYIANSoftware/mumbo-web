'use client'

import Link from 'next/link'
import type { SiteNavItem } from '@/constants/site-nav'

export interface FooterNavLinksProps {
	items: SiteNavItem[]
	className?: string
}

export function FooterNavLinks({ items, className = '' }: FooterNavLinksProps) {
	return (
		<div
			className={`flex flex-col items-center md:items-start ${className}`.trim()}
		>
			<h3 className='text-xl font-semibold text-color mb-4'>Quick Links</h3>
			<nav className='flex flex-col gap-2 items-center md:items-start'>
				{items.map(item => (
					<Link
						key={item.path}
						href={item.path}
						className='text-color-secondary hover:text-primary-light transition-colors'
					>
						{item.label}
					</Link>
				))}
			</nav>
		</div>
	)
}
