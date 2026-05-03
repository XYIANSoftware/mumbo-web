'use client'

import { PageHeader } from '@/components/ui/PageHeader'
import { MusicCatalogSection } from '@/components/music/MusicCatalogSection'
import {
	musicPageLiveSets,
	musicPageSongs,
} from '@/components/music/music-page-data'
import { Divider } from 'primereact/divider'

export default function MusicPage() {
	return (
		<div className='container mx-auto px-4 py-12'>
			<PageHeader
				title='Music'
				subtitle='Tracks, flips, and live sets — pick your platform'
			/>

			<div className='mb-12'>
				<MusicCatalogSection
					title='Songs'
					description='Originals and flips — tap a card for the main link, or use the circles for Spotify, Apple Music, or SoundCloud.'
					items={musicPageSongs}
				/>
			</div>

			<Divider />

			<div className='mt-12'>
				<MusicCatalogSection
					title='Live sets / mixes'
					description='Full recordings are on SoundCloud; select sets also have YouTube.'
					items={musicPageLiveSets}
				/>
			</div>
		</div>
	)
}
