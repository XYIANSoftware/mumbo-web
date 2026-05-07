'use client'

import type { FooterSocialLink } from '@/constants/footer-social'

export interface FooterSocialLinksProps {
	links: FooterSocialLink[]
	className?: string
}

export function FooterSocialLinks({
	links,
	className = '',
}: FooterSocialLinksProps) {
	return (
		<div
			className={`flex flex-col items-center md:items-end text-center md:text-right shrink-0 ${className}`.trim()}
		>
			<h3 className='text-xl font-semibold text-color mb-4 w-full md:w-auto'>
				Connect
			</h3>
			<div className='flex flex-wrap justify-center md:justify-end gap-4'>
				{links.map(link => (
					<a
						key={link.label}
						href={link.url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-color-secondary hover:text-primary-light transition-colors'
						aria-label={link.label}
					>
						<i className={`${link.icon} text-2xl`} />
					</a>
				))}
			</div>
		</div>
	)
}
