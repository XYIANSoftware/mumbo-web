'use client'

import { motion } from 'framer-motion'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { CONTACT_PAGE_SOCIAL_LINKS } from '@/constants/contact-page-social'
import { PAGE_SHELL_CLASS } from '@/constants/page-shell'

export default function ContactPage() {
	return (
		<div className={PAGE_SHELL_CLASS}>
			<PageHeader
				title='Contact'
				subtitle='Bookings, collabs, and socials'
			/>

			<motion.div
				className='max-w-xl mx-auto'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Card className='h-full'>
					<h2 className='text-2xl font-semibold mb-6'>Connect</h2>
					<p className='text-color-secondary mb-6'>
						Follow DJ Mumbo for releases and shows. For bookings, email
						directly — a contact form will return when outbound mail is wired
						up.
					</p>
					<div className='space-y-4'>
						{CONTACT_PAGE_SOCIAL_LINKS.map(link => (
							<a
								key={link.platform}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-4 text-color-secondary hover:text-primary-light transition-colors p-4 rounded-lg hover:bg-background-paper/50'
							>
								<i className={`${link.icon} text-3xl`}></i>
								<div>
									<div className='font-semibold'>{link.platform}</div>
									<div className='text-sm'>{link.label}</div>
								</div>
							</a>
						))}
					</div>
					<div className='mt-8 pt-8 border-t border-background-paper'>
						<h3 className='text-xl font-semibold mb-4'>Booking</h3>
						<p className='text-color-secondary'>
							For booking inquiries, reach out at{' '}
							<a
								href='mailto:booking@djmumbo.com'
								className='text-primary-light hover:underline'
							>
								booking@djmumbo.com
							</a>
							.
						</p>
					</div>
				</Card>
			</motion.div>
		</div>
	)
}
