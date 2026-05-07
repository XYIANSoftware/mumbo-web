'use client'

import type { CardPassThroughOptions } from 'primereact/card'
import { Card } from 'primereact/card'
import type { Link } from '@/types/content'
import { LinksPlatformIcon } from './links-platform-icon'

function mergeClass(...parts: (string | undefined)[]): string {
	return parts.filter(Boolean).join(' ')
}

function resolvePtClass(
	pt: CardPassThroughOptions | undefined,
	slot: 'root' | 'content',
	fallback: string
): string {
	const slotPt = pt?.[slot]
	if (
		slotPt &&
		typeof slotPt === 'object' &&
		'className' in slotPt &&
		typeof slotPt.className === 'string'
	) {
		return mergeClass(fallback, slotPt.className)
	}
	return fallback
}

export interface LinksMainTileProps {
	link: Link
	/** Optional Prime `pt` merged onto defaults for one-off flair. */
	pt?: CardPassThroughOptions
}

/**
 * Uniform social “main” tile — centered grid, shared min-height, theme accent
 * border via `--social-link-*` in `globals.css`.
 */
export function LinksMainTile({ link, pt }: LinksMainTileProps) {
	const defaultRoot = mergeClass(
		'w-full h-full min-h-[140px] rounded-xl overflow-hidden',
		'bg-background-paper cursor-pointer transition-all duration-300',
		'border border-[color:var(--social-link-border)]',
		'shadow-[0_0_22px_var(--social-link-glow)]',
		'hover:bg-background-secondary hover:border-[color:var(--social-link-border-strong)]'
	)
	const defaultContent =
		'p-0 flex flex-col flex-1 justify-center items-center text-center px-4 py-5'

	const mergedPt: CardPassThroughOptions = {
		root: {
			className: resolvePtClass(pt, 'root', defaultRoot),
		},
		content: {
			className: resolvePtClass(pt, 'content', defaultContent),
		},
	}

	return (
		<Card
			pt={mergedPt}
			onClick={() => window.open(link.url, '_blank')}
		>
			<div className='flex flex-col items-center gap-3 w-full'>
				{LinksPlatformIcon(link.platform, 'text-5xl')}
				<div className='min-w-0 w-full'>
					<h2 className='text-base font-medium mb-1 text-color'>
						{link.title}
					</h2>
					{link.description && (
						<p className='text-sm text-color-secondary line-clamp-2'>
							{link.description}
						</p>
					)}
				</div>
			</div>
		</Card>
	)
}
