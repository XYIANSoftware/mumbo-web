'use client'

import { motion } from 'framer-motion'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Skeleton } from 'primereact/skeleton'
import { Event as EventType } from '@/types/content'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export interface EventCardProps {
	event: EventType
	index?: number
	/** Past events use a compact layout and link to Highlights instead of tickets. */
	variant?: 'upcoming' | 'past'
}

export function EventCard({ event, index = 0, variant = 'upcoming' }: EventCardProps) {
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageError, setImageError] = useState(false)

	const handleImageLoad = () => {
		setImageLoaded(true)
		setImageError(false)
	}

	const handleImageError = () => {
		setImageError(true)
		setImageLoaded(false)
	}

	const imageBlock = (
		<div
			className={
				variant === 'past'
					? 'w-full sm:w-28 shrink-0 relative'
					: 'w-full md:w-1/3 relative'
			}
		>
			{event.image_url ? (
				<>
					<div
						className={`relative rounded-lg overflow-hidden ${
							variant === 'past'
								? 'aspect-square max-h-28 mx-auto sm:mx-0'
								: 'aspect-video md:aspect-square'
						} ${!imageLoaded ? 'hidden' : ''}`}
					>
						<Image
							src={event.image_url}
							alt={event.title}
							fill
							className='object-cover'
							onLoad={handleImageLoad}
							onError={handleImageError}
							sizes={
								variant === 'past'
									? '112px'
									: '(max-width: 768px) 100vw, 33vw'
							}
							priority={index < 2 && variant === 'upcoming'}
						/>
					</div>
					{!imageLoaded && !imageError && (
						<div
							className={
								variant === 'past'
									? 'aspect-square max-h-28'
									: 'aspect-video md:aspect-square'
							}
						>
							<Skeleton
								width='100%'
								height='100%'
								className='rounded-lg'
								pt={{
									root: { className: 'bg-background-secondary' },
								}}
							/>
						</div>
					)}
					{imageError && (
						<div
							className={`bg-background-secondary rounded-lg flex items-center justify-center text-color-secondary p-2 text-center text-sm ${
								variant === 'past'
									? 'aspect-square max-h-28'
									: 'aspect-video md:aspect-square'
							}`}
						>
							<i className='pi pi-image text-2xl' />
						</div>
					)}
				</>
			) : (
				<div
					className={`bg-background-secondary rounded-lg flex items-center justify-center text-color-secondary p-2 text-center text-sm ${
						variant === 'past'
							? 'aspect-square max-h-28'
							: 'aspect-video md:aspect-square'
					}`}
				>
					<i className='pi pi-image text-2xl' />
				</div>
			)}
		</div>
	)

	const body = (
		<div
			className={`flex-1 space-y-2 ${
				variant === 'past' ? 'min-w-0' : 'space-y-4'
			}`}
		>
			<h3
				className={
					variant === 'past'
						? 'text-lg font-semibold'
						: 'text-2xl font-semibold'
				}
			>
				{event.title}
			</h3>
			<div
				className={`flex flex-wrap gap-2 text-color-secondary ${
					variant === 'past' ? 'text-sm' : 'gap-4'
				}`}
			>
				<div className='flex items-center gap-2'>
					<i className='pi pi-calendar'></i>
					<span>
						{new Date(event.date).toLocaleDateString('en-US', {
							weekday: variant === 'past' ? undefined : 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</span>
				</div>
				{variant === 'upcoming' && (
					<>
						<div className='flex items-center gap-2'>
							<i className='pi pi-clock'></i>
							<span>{event.time}</span>
						</div>
						<div className='flex items-center gap-2'>
							<i className='pi pi-map-marker'></i>
							<span>{event.location}</span>
						</div>
					</>
				)}
			</div>
			{variant === 'upcoming' && (
				<p className='text-color-secondary'>{event.description}</p>
			)}
			{variant === 'upcoming' && event.ticket_url && (
				<Button
					label='Get Tickets'
					icon='pi pi-ticket'
					onClick={() => window.open(event.ticket_url, '_blank')}
					pt={{
						root: { className: 'rounded-full' },
					}}
				/>
			)}
			{variant === 'past' && (
				<Link href='/highlights' className='inline-block'>
					<Button
						label='Highlights'
						icon='pi pi-images'
						outlined
						size='small'
						pt={{
							root: { className: 'rounded-full' },
						}}
					/>
				</Link>
			)}
		</div>
	)

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
		>
			<Card
				pt={{
					root: { className: 'bg-background-paper border-none' },
					content: { className: variant === 'past' ? 'p-3' : 'p-4' },
				}}
			>
				<div
					className={
						variant === 'past'
							? 'flex flex-col sm:flex-row gap-4 items-start'
							: 'flex flex-col md:flex-row gap-6'
					}
				>
					{imageBlock}
					{body}
				</div>
			</Card>
		</motion.div>
	)
}
