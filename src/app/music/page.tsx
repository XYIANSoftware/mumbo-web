'use client'

import { Fragment } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { MusicCatalogSection } from '@/components/music/MusicCatalogSection'
import { SoundCloudProfileEmbed } from '@/components/music/SoundCloudProfileEmbed'
import { SpotifyArtistEmbed } from '@/components/music/SpotifyArtistEmbed'
import { MUSIC_CATALOG_SECTIONS } from '@/components/music/music-page-data'
import { PAGE_SHELL_CLASS } from '@/constants/page-shell'
import { Divider } from 'primereact/divider'

export default function MusicPage() {
	return (
		<div className={PAGE_SHELL_CLASS}>
			<PageHeader
				title='Music'
				subtitle='Tracks, flips, and live sets — pick your platform'
			/>

			<SpotifyArtistEmbed />

			<SoundCloudProfileEmbed />

			{MUSIC_CATALOG_SECTIONS.map((section, index) => (
				<Fragment key={section.title}>
					{index > 0 && <Divider />}
					<div className={index === 0 ? 'mb-12' : 'mt-12'}>
						<MusicCatalogSection {...section} />
					</div>
				</Fragment>
			))}
		</div>
	)
}
