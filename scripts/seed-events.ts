import { supabase } from '../src/lib/supabase'

const events = [
	{
		id: crypto.randomUUID(),
		title: 'Summer Vibes Festival',
		date: '2024-07-15',
		time: '20:00',
		location: 'Beachfront Arena',
		description: 'Join DJ Mumbo for a night of summer beats and good vibes!',
		imageUrl: '/images/mumbo-assets/M_B04850-1-NR.jpg',
		status: 'UPCOMING',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		id: crypto.randomUUID(),
		title: 'Club Night Takeover',
		date: '2024-06-20',
		time: '22:00',
		location: 'The Grand Club',
		description:
			'DJ Mumbo takes over the decks for an unforgettable night of EDM!',
		imageUrl: '/images/mumbo-assets/M_B04855-1-NR.jpg',
		status: 'UPCOMING',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		id: crypto.randomUUID(),
		title: 'Rooftop Sunset Sessions',
		date: '2024-08-05',
		time: '19:00',
		location: 'Sky Lounge',
		description:
			'Experience the perfect blend of sunset views and electronic beats.',
		imageUrl: '/images/mumbo-assets/M_B04851-1-NR.jpg',
		status: 'UPCOMING',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		id: crypto.randomUUID(),
		title: 'Beach Party Extravaganza',
		date: '2024-08-20',
		time: '16:00',
		location: 'Ocean View Beach Club',
		description: 'Dance to the best beats as the sun sets over the ocean.',
		imageUrl: '/images/mumbo-assets/IMG_7892.JPG',
		status: 'UPCOMING',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
	{
		id: crypto.randomUUID(),
		title: 'Underground Warehouse Party',
		date: '2024-09-10',
		time: '23:00',
		location: 'The Secret Warehouse',
		description:
			'A night of deep house and techno in an exclusive underground venue.',
		imageUrl: '/images/mumbo-assets/IMG_7891.JPG',
		status: 'UPCOMING',
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
	},
]

async function seedEvents() {
	try {
		// First, delete all existing events
		const { error: deleteError } = await supabase
			.from('events')
			.delete()
			.neq('id', '0')

		if (deleteError) {
			throw deleteError
		}

		// Insert new events
		const { data, error } = await supabase.from('events').insert(events)

		if (error) {
			throw error
		}

		console.log('Successfully seeded events:', data)
	} catch (error) {
		console.error('Error seeding events:', error)
	}
}

seedEvents()
