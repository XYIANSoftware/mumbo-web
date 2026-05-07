'use client'

import { FOOTER_SOCIAL_LINKS } from '@/constants/footer-social'
import { FOOTER_NAV_ITEMS } from '@/constants/site-nav'
import { FooterBrand } from './footer/footer-brand'
import { FooterNavLinks } from './footer/footer-nav-links'
import { FooterSocialLinks } from './footer/footer-social-links'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-background-secondary py-12'>
			<div className='px-4 max-w-6xl mx-auto w-full'>
				<div className='flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-start gap-10'>
					<FooterBrand />
					<div className='flex flex-1 justify-center md:min-w-0 w-full md:w-auto'>
						<FooterNavLinks items={FOOTER_NAV_ITEMS} />
					</div>
					<FooterSocialLinks links={FOOTER_SOCIAL_LINKS} />
				</div>

				<div className='mt-8 pt-8 border-t border-background-paper text-center text-color-secondary'>
					<p>© {currentYear} DJ Mumbo. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
