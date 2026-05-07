'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { use } from 'react'
import { PAGE_SHELL_CLASS } from '@/constants/page-shell'
import { findEventDetailBySlug } from '@/constants/event-details'

interface EventPageProps {
	params: Promise<{
		eventName: string
	}>
}

export default function EventPage({ params }: EventPageProps) {
	const { eventName } = use(params)
	const event = findEventDetailBySlug(eventName)

	if (!event) {
		return (
			<div className={PAGE_SHELL_CLASS}>
				<div className='text-center'>
					<h1 className='mb-4 text-4xl font-bold'>Event Not Found</h1>
					<p className='mb-8 text-color-secondary'>
						The event you&apos;re looking for doesn&apos;t exist.
					</p>
					<Link href='/events'>
						<Button
							label='Back to Events'
							icon='pi pi-arrow-left'
							className='p-button-rounded'
						/>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className={PAGE_SHELL_CLASS}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className='mb-8'>
					<Link href='/events'>
						<Button
							label='Back to Events'
							icon='pi pi-arrow-left'
							className='p-button-text p-button-rounded'
						/>
					</Link>
				</div>

				<Card className='overflow-hidden'>
					<div className='flex flex-col gap-8 lg:flex-row'>
						<div className='w-full lg:w-2/3'>
							<div className='relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[3/2]'>
								<Image
									src={event.imageUrl}
									alt={event.title}
									fill
									className='object-cover'
								/>
							</div>
						</div>

						<div className='flex w-full flex-col justify-center space-y-6 lg:w-1/3'>
							<div>
								<h1 className='mb-4 text-4xl font-bold'>{event.title}</h1>

								<div className='space-y-3 text-color-secondary'>
									<div className='flex items-center gap-3'>
										<i className='pi pi-calendar text-primary-light'></i>
										<span>{event.date}</span>
									</div>
									<div className='flex items-center gap-3'>
										<i className='pi pi-clock text-primary-light'></i>
										<span>{event.time}</span>
									</div>
									<div className='flex items-center gap-3'>
										<i className='pi pi-map-marker text-primary-light'></i>
										<span>{event.location}</span>
									</div>
								</div>
							</div>

							<div className='space-y-4'>
								<p className='text-lg leading-relaxed text-color-secondary'>
									{event.description}
								</p>

								<div className='rounded-lg bg-background-paper/80 p-4'>
									<h3 className='mb-2 text-lg font-semibold'>Event Details</h3>
									<ul className='space-y-2 text-color-secondary'>
										<li>• Doors open 30 minutes before show time</li>
										<li>• 21+ event with valid ID required</li>
										<li>• No outside food or beverages</li>
										<li>• Photography allowed (no flash)</li>
									</ul>
								</div>
							</div>

							<div className='flex gap-4'>
								{event.ticketUrl && (
									<Button
										label='Get Tickets'
										icon='pi pi-ticket'
										onClick={() => window.open(event.ticketUrl, '_blank')}
										className='p-button-rounded'
									/>
								)}
								<Button
									label='Share Event'
									icon='pi pi-share-alt'
									className='p-button-outlined p-button-rounded'
									onClick={() => {
										if (navigator.share) {
											navigator.share({
												title: event.title,
												text: event.description,
												url: window.location.href,
											})
										} else {
											navigator.clipboard.writeText(window.location.href)
										}
									}}
								/>
							</div>
						</div>
					</div>
				</Card>
			</motion.div>
		</div>
	)
}