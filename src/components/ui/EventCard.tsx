'use client'

import { motion } from 'framer-motion'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Skeleton } from 'primereact/skeleton'
import { Event as EventType } from '@/types/content'
import Image from 'next/image'
import { useState } from 'react'

interface EventCardProps {
	event: EventType
	index?: number
}

export function EventCard({ event, index = 0 }: EventCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	// Function to handle image loading
	const handleImageLoad = () => {
		console.log('Image loaded successfully:', event.image_url)
		setImageLoaded(true)
		setImageError(false)
	}

	// Function to handle image error
	const handleImageError = () => {
		console.error('Image load error for:', event.title, event.image_url)
		setImageError(true)
		setImageLoaded(false)
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
		>
			<Card
				pt={{
					root: { className: 'bg-background-paper border-none' },
					content: { className: 'p-4' }
				}}
			>
				<div className='flex flex-col md:flex-row gap-6'>
					<div className='w-full md:w-1/3 relative'>
						{event.image_url ? (
							<>
								<div
									className={`aspect-video md:aspect-square relative ${
										!imageLoaded ? 'hidden' : ''
									}`}
								>
									<Image
										src={event.image_url}
										alt={event.title}
										fill
										className='object-cover rounded-lg'
										onLoad={handleImageLoad}
										onError={handleImageError}
										sizes="(max-width: 768px) 100vw, 33vw"
										priority={index < 2}
									/>
								</div>
								{!imageLoaded && !imageError && (
									<div className='aspect-video md:aspect-square'>
										<Skeleton
											width='100%'
											height='100%'
											className='rounded-lg'
											pt={{
												root: { className: 'bg-background-secondary' }
											}}
										/>
									</div>
								)}
								{imageError && (
									<div className='aspect-video md:aspect-square bg-background-secondary rounded-lg flex items-center justify-center text-gray-400 p-4 text-center'>
										<div>
											<i className='pi pi-image text-3xl mb-2 block' />
											<span>Unable to load image</span>
										</div>
									</div>
								)}
							</>
						) : (
							<div className='aspect-video md:aspect-square bg-background-secondary rounded-lg flex items-center justify-center text-gray-400 p-4 text-center'>
								<div>
									<i className='pi pi-image text-3xl mb-2 block' />
									<span>No image available</span>
								</div>
							</div>
						)}
					</div>

					<div className='flex-1 space-y-4'>
						<h3 className='text-2xl font-semibold'>{event.title}</h3>
						<div className='flex flex-wrap gap-4 text-gray-300'>
							<div className='flex items-center gap-2'>
								<i className='pi pi-calendar'></i>
								<span>
									{new Date(event.date).toLocaleDateString('en-US', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<i className='pi pi-clock'></i>
								<span>{event.time}</span>
							</div>
							<div className='flex items-center gap-2'>
								<i className='pi pi-map-marker'></i>
								<span>{event.location}</span>
							</div>
						</div>
						<p className='text-gray-400'>{event.description}</p>
						{event.ticket_url && (
							<Button
								label='Get Tickets'
								icon='pi pi-ticket'
								onClick={() => window.open(event.ticket_url, '_blank')}
								pt={{
									root: { className: 'rounded-full' }
								}}
							/>
						)}
					</div>
				</div>
			</Card>
		</motion.div>
	)
}
