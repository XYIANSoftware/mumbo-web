'use client'

import type { KeyboardEvent } from 'react'
import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import type { MusicEntry } from './music-types'
import { MusicPlatformBubbles } from './MusicPlatformBubbles'

/** Cover art in the catalog grid (theme scales with root font size). */
const ART_REM = '7rem'

export interface MusicReleaseCardProps {
	entry: MusicEntry
}

export function MusicReleaseCard({ entry }: MusicReleaseCardProps) {
	function handleOpenPrimary() {
		window.open(entry.primaryUrl, '_blank')
	}

	function handleCardKeyDown(e: KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			handleOpenPrimary()
		}
	}

	const header = (
		<div className='flex justify-center p-2'>
			<Image
				src={entry.image}
				alt=''
				width={ART_REM}
				height={ART_REM}
				preview={false}
				pt={{
					root: { className: 'inline-flex' },
					image: {
						className:
							'border-round object-cover w-28 h-28 max-w-[7rem] max-h-[7rem]',
					},
				}}
			/>
		</div>
	)

	return (
		<Card
			header={header}
			title={entry.title}
			role='link'
			tabIndex={0}
			aria-label={`Open ${entry.title} on its primary streaming platform`}
			onClick={handleOpenPrimary}
			onKeyDown={handleCardKeyDown}
			pt={{
				root: {
					className:
						'h-full cursor-pointer border-round-xl overflow-hidden ' +
						'transition-shadow transition-duration-150 hover:shadow-md',
				},
				header: {
					className: 'bg-transparent border-none p-0 m-0',
				},
				body: { className: 'p-0' },
				title: {
					className: 'text-lg font-semibold line-clamp-2 px-3 pt-1 m-0',
				},
				content: {
					className: 'px-3 pb-3 pt-2',
				},
			}}
		>
			<MusicPlatformBubbles entry={entry} />
		</Card>
	)
}
