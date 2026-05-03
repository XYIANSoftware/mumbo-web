'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { EventsListSkeleton } from '@/components/events/EventsListSkeleton'
import { EventsSections } from '@/components/events/EventsSections'
import { Event } from '@/types/content'
import { Toast } from 'primereact/toast'

function sortPastEvents(a: Event, b: Event) {
	return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export default function EventsPage() {
	const [events, setEvents] = useState<Event[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const toast = useRef<Toast>(null)

	useEffect(() => {
		async function fetchEvents() {
			try {
				const response = await fetch('/api/events')
				if (!response.ok) throw new Error('Failed to fetch events')
				const eventData: Event[] = await response.json()
				setEvents(eventData)
			} catch (err) {
				console.error('Error fetching events:', err)
				setError('Failed to load events. Please try again later.')
				toast.current?.show({
					severity: 'error',
					summary: 'Error',
					detail: 'Failed to load events',
					life: 3000,
				})
			} finally {
				setLoading(false)
			}
		}

		fetchEvents()
	}, [])

	const { upcoming, past } = useMemo(() => {
		const up = events.filter(e => e.status === 'UPCOMING')
		const pa = events
			.filter(e => e.status === 'PAST' || e.status === 'CANCELLED')
			.sort(sortPastEvents)
		return { upcoming: up, past: pa }
	}, [events])

	return (
		<div className='container mx-auto px-4 py-12'>
			<Toast ref={toast} />
			<PageHeader title='Events' subtitle='Catch DJ Mumbo live in action' />

			{loading ? (
				<EventsListSkeleton />
			) : error ? (
				<div className='text-center py-8'>
					<p className='text-red-500'>{error}</p>
				</div>
			) : (
				<EventsSections upcoming={upcoming} past={past} />
			)}
		</div>
	)
}
