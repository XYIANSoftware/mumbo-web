'use client'

import type { ReactNode } from 'react'

/** Matches centered streaming embed width on the music page. */
export const MUSIC_PAGE_CONTENT_MAX_CLASS = 'max-w-3xl mx-auto w-full'

export interface MusicStreamingSectionProps {
	title: string
	children: ReactNode
	ariaLabel?: string
	/** Extra classes on the frame around the embed (e.g. SoundCloud chrome). */
	frameClassName?: string
	className?: string
	align?: 'center' | 'left'
}

export function MusicStreamingSection({
	title,
	children,
	ariaLabel,
	frameClassName,
	className = '',
	align = 'center',
}: MusicStreamingSectionProps) {
	const isCentered = align !== 'left'
	const sectionAlign = isCentered ? 'text-center' : 'text-left'
	const frameAlign = isCentered ? 'mx-auto' : ''

	const frameClasses = [
		'w-full',
		'max-w-3xl',
		'overflow-hidden',
		'rounded-xl',
		frameAlign,
		frameClassName,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<section
			className={`mb-12 ${sectionAlign} ${className}`.trim()}
			aria-label={ariaLabel}
		>
			<h2 className='text-2xl font-semibold text-color mb-4'>
				{title}
			</h2>
			<div className={frameClasses}>{children}</div>
		</section>
	)
}
