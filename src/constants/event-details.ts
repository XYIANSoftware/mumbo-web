export interface EventDetail {
	id: string
	title: string
	date: string
	time: string
	location: string
	description: string
	imageUrl: string
	ticketUrl?: string
	eventName: string
}

export const EVENT_DETAILS: EventDetail[] = [
	{
		id: '1',
		title: 'Mumbo Jumbo Ep. 6: Bloom Debut',
		date: 'Sunday, April 14, 2024',
		time: '22:00',
		location: 'Bloom Nightclub, Downtown',
		description:
			'Experience the latest episode of Mumbo Jumbo live. Featuring new tracks and special guests.',
		imageUrl: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
		ticketUrl: 'https://example.com/tickets',
		eventName: 'mumbo-jumbo-ep-6-bloom-debut',
	},
	{
		id: '2',
		title: 'Project Seismic Launch Party',
		date: 'Tuesday, April 30, 2024',
		time: '21:00',
		location: 'Underground Bass Club',
		description:
			'Join us for the official launch of Project Seismic with special guest performances.',
		imageUrl: '/images/mumbo-assets/M_B04855-1-NR.jpg',
		ticketUrl: 'https://example.com/project-seismic',
		eventName: 'project-seismic-launch-party',
	},
]

export function findEventDetailBySlug(eventName: string) {
	return EVENT_DETAILS.find(event => event.eventName === eventName)
}
