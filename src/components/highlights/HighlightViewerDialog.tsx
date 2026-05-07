'use client'

import { Dialog } from 'primereact/dialog'
import { Image } from 'primereact/image'
import { Button } from 'primereact/button'
import type { HighlightItem } from './highlight-model'

export interface HighlightViewerDialogProps {
	item: HighlightItem | null
	onHide: () => void
}

export function HighlightViewerDialog({ item, onHide }: HighlightViewerDialogProps) {
	const hasExtraDetails = item != null && item.details != null

	return (
		<Dialog
			visible={!!item}
			onHide={onHide}
			className='w-full max-w-4xl'
			header={item?.title}
			dismissableMask
			pt={{
				root: { className: 'bg-background-paper border-none' },
				header: { className: 'bg-background-paper border-none' },
				content: { className: 'bg-background-paper border-none' },
			}}
		>
			{item?.youtubeEmbedId ? (
				<div className='relative w-full aspect-video rounded-lg overflow-hidden bg-black'>
					<iframe
						title={item.title}
						src={`https://www.youtube.com/embed/${item.youtubeEmbedId}`}
						className='absolute inset-0 w-full h-full border-0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>
			) : item?.type === 'image' ? (
				<Image
					src={item.src}
					alt={item.title}
					preview
					pt={{
						image: { className: 'w-full h-auto rounded-lg' },
					}}
					downloadable={false}
				/>
			) : (
				<video src={item?.src} controls className='w-full h-auto rounded-lg' />
			)}
			{item?.description && (
				<p className='mt-4 text-color-secondary'>{item.description}</p>
			)}
			{hasExtraDetails && (
				<div className='mt-6 border-t border-background-secondary pt-4'>
					<h4 className='text-sm font-semibold text-color mb-3'>Details</h4>
					<div className='text-color-secondary text-sm space-y-2'>
						{item.details}
					</div>
				</div>
			)}
			{item?.instagramHighlightUrl && (
				<div className='mt-4'>
					<Button
						label='Open Instagram highlight'
						icon='pi pi-instagram'
						onClick={() => window.open(item.instagramHighlightUrl, '_blank')}
						pt={{
							root: { className: 'rounded-full' },
						}}
					/>
				</div>
			)}
		</Dialog>
	)
}
