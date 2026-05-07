'use client'

import { useMemo } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { EventsSections } from '@/components/events/EventsSections'
import type { Event } from '@/types/content'
import { SITE_EVENTS } from '@/constants/events-data'
import { PAGE_SHELL_CLASS } from '@/constants/page-shell'

function sortPastEvents(a: Event, b: Event) {
	return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export default function EventsPage() {
	const { upcoming, past } = useMemo(() => {
		const up = SITE_EVENTS.filter(e => e.status === 'UPCOMING')
		const pa = SITE_EVENTS.filter(
			e => e.status === 'PAST' || e.status === 'CANCELLED'
		).sort(sortPastEvents)
		return { upcoming: up, past: pa }
	}, [])

	return (
		<div className={PAGE_SHELL_CLASS}>
			<PageHeader title='Events' subtitle='Catch DJ Mumbo live in action' />

			<EventsSections upcoming={upcoming} past={past} />
		</div>
	)
}
