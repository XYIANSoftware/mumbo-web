'use client'

import { MUMBO_SOUNDCLOUD_EMBED_SRC } from '@/constants/streaming'
import { MusicStreamingSection } from './music-streaming-section'

/** SoundCloud’s official HTML5 widget (visual profile player). */
export function SoundCloudProfileEmbed() {
	return (
		<MusicStreamingSection
			title='Listen on SoundCloud'
			ariaLabel='SoundCloud profile embed'
			frameClassName='bg-black/20'
		>
			<iframe
				title='Mumbo on SoundCloud'
				src={MUMBO_SOUNDCLOUD_EMBED_SRC}
				width='100%'
				height={450}
				className='border-0 w-full'
				allow='autoplay'
				loading='lazy'
			/>
		</MusicStreamingSection>
	)
}
