'use client'

import type { MouseEvent } from 'react'
import { Button } from 'primereact/button'
import type { MusicEntry, PlatformKey } from './music-types'
import { musicPlatformMeta } from './music-platform-meta'

function stopBubble(e: MouseEvent) {
	e.stopPropagation()
}

export function MusicPlatformBubbles({ entry }: { entry: MusicEntry }) {
	const items: { key: PlatformKey; url: string }[] = []
	if (entry.spotifyUrl) {
		items.push({ key: 'spotify', url: entry.spotifyUrl })
	}
	if (entry.appleMusicUrl) {
		items.push({ key: 'apple', url: entry.appleMusicUrl })
	}
	if (entry.soundcloudUrl) {
		items.push({ key: 'soundcloud', url: entry.soundcloudUrl })
	}
	if (entry.youtubeUrl) {
		items.push({ key: 'youtube', url: entry.youtubeUrl })
	}

	if (items.length === 0) return null

	return (
		<div
			className='flex flex-wrap gap-2 mt-3'
			onClick={stopBubble}
			onKeyDown={e => e.stopPropagation()}
			role='group'
			aria-label='Open on other platforms'
		>
			{items.map(({ key, url }) => {
				const { Icon, label, iconClass } = musicPlatformMeta[key]
				return (
					<Button
						key={key}
						rounded
						outlined
						aria-label={label}
						onClick={() => window.open(url, '_blank')}
						pt={{
							root: {
								className: 'w-10 h-10 p-0',
							},
						}}
					>
						<Icon className={`text-xl ${iconClass}`} aria-hidden />
					</Button>
				)
			})}
		</div>
	)
}
