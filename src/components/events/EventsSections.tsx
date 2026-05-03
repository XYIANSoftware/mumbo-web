'use client'

import { EventCard } from '@/components/ui/EventCard'
import { Event } from '@/types/content'
import { Divider } from 'primereact/divider'

export interface EventsSectionsProps {
	upcoming: Event[]
	past: Event[]
}

export function EventsSections({ upcoming, past }: EventsSectionsProps) {
	return (
		<div className='space-y-12'>
			<section className='space-y-6'>
				<h2 className='text-2xl font-semibold text-white'>Upcoming events</h2>
				{upcoming.length === 0 ? (
					<p className='text-gray-400'>No upcoming events right now.</p>
				) : (
					<div className='space-y-8'>
						{upcoming.map((event, index) => (
							<EventCard
								key={event.id}
								event={event}
								index={index}
								variant='upcoming'
							/>
						))}
					</div>
				)}
			</section>

			<Divider />

			<section className='space-y-6'>
				<h2 className='text-2xl font-semibold text-white'>Past events</h2>
				<p className='text-gray-400 text-sm max-w-2xl'>
					Relive the energy — tap through to Highlights for photos and story
					reels.
				</p>
				{past.length === 0 ? (
					<p className='text-gray-400'>No past events listed yet.</p>
				) : (
					<div className='space-y-4'>
						{past.map((event, index) => (
							<EventCard
								key={event.id}
								event={event}
								index={index}
								variant='past'
							/>
						))}
					</div>
				)}
			</section>
		</div>
	)
}
