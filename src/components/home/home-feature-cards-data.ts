/**
 * Home page feature cards — edit this list to add, remove, or reorder cards.
 * Each entry is rendered via `HomeFeatureCard` inside `HomeFeatureCards`.
 */
import type { HomeFeatureCardProps } from './HomeFeatureCard'

export const HOME_FEATURE_CARDS: HomeFeatureCardProps[] = [
	{
		href: '/music',
		icon: 'pi pi-music',
		title: 'Music',
		description:
			'Blending EDM with nostalgic cartoon vibes for a one-of-a-kind experience',
	},
	{
		href: '/events',
		icon: 'pi pi-star',
		title: 'Events',
		description: 'High-energy shows that keep the crowd moving all night long',
	},
	{
		href: '/highlights',
		icon: 'pi pi-heart',
		title: 'Highlights',
		description: 'Photos, reels, and moments from the biggest shows',
	},
]
