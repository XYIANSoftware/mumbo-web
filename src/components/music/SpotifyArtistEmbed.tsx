'use client'

import { MUMBO_SPOTIFY_EMBED_SRC } from '@/constants/streaming'
import { MusicStreamingSection } from './music-streaming-section'

export function SpotifyArtistEmbed() {
	return (
		<MusicStreamingSection
			title='Listen on Spotify'
			ariaLabel='Spotify artist embed'
		>
			<iframe
				title='Mumbo on Spotify'
				src={MUMBO_SPOTIFY_EMBED_SRC}
				width='100%'
				height={352}
				className='border-0 w-full'
				allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
				loading='lazy'
			/>
		</MusicStreamingSection>
	)
}
