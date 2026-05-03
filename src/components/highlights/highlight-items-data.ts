import type { HighlightItem } from './highlight-model'
import { SAMPLE_INSTAGRAM_HIGHLIGHT } from './highlight-model'

export const highlightItems: HighlightItem[] = [
	{
		id: 'ig-sample',
		title: 'Featured story highlight',
		type: 'image',
		src: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
		thumbnail: '/images/mumbo-assets/2024_0906-Bloom_047.jpeg',
		description: 'Tap “Instagram highlight” to open this reel on Instagram.',
		instagramHighlightUrl: SAMPLE_INSTAGRAM_HIGHLIGHT,
	},
	{
		id: '2',
		title: 'Behind the Decks',
		type: 'image',
		src: '/images/mumbo-assets/M_B04850-1-NR.jpg',
		thumbnail: '/images/mumbo-assets/M_B04850-1-NR.jpg',
		description: 'In the mix at a recent show',
	},
	{
		id: '3',
		title: 'Studio Session',
		type: 'image',
		src: '/images/mumbo-assets/M_B04851-1-NR.jpg',
		thumbnail: '/images/mumbo-assets/M_B04851-1-NR.jpg',
		description: 'Creating new beats in the studio',
	},
	{
		id: '4',
		title: 'Festival Vibes',
		type: 'image',
		src: '/images/mumbo-assets/M_B04855-1-NR.jpg',
		thumbnail: '/images/mumbo-assets/M_B04855-1-NR.jpg',
		description: 'Bringing the energy to the crowd',
	},
	{
		id: '5',
		title: 'Bloom Night',
		type: 'image',
		src: '/images/mumbo-assets/2024_0906-Bloom_046.jpeg',
		thumbnail: '/images/mumbo-assets/2024_0906-Bloom_046.jpeg',
		description: 'Live performance at Bloom',
	},
	{
		id: '6',
		title: 'Peak Moment',
		type: 'image',
		src: '/images/mumbo-assets/2024_0906-Bloom_049.jpeg',
		thumbnail: '/images/mumbo-assets/2024_0906-Bloom_049.jpeg',
		description: 'The crowd going wild at Bloom',
	},
	{
		id: '7',
		title: 'Crowd Moments',
		type: 'image',
		src: '/images/mumbo-assets/IMG_7891.JPG',
		thumbnail: '/images/mumbo-assets/IMG_7891.JPG',
		description: 'The crowd going wild during the set',
	},
	{
		id: '8',
		title: 'Stage Presence',
		type: 'image',
		src: '/images/mumbo-assets/IMG_7892.JPG',
		thumbnail: '/images/mumbo-assets/IMG_7892.JPG',
		description: 'Commanding the stage with energy',
	},
]

export function getHighlightStripItems(items: HighlightItem[]) {
	return items.filter(i => i.id !== 'ig-sample')
}
