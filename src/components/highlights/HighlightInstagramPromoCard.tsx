'use client'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { SAMPLE_INSTAGRAM_HIGHLIGHT } from './highlight-model'

export function HighlightInstagramPromoCard() {
	return (
		<Card
			pt={{
				root: {
					className: 'bg-background-paper border-none mb-6',
				},
				content: { className: 'p-4 md:p-6' },
			}}
		>
			<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
				<div>
					<h2 className='text-xl font-semibold text-white mb-1'>
						Instagram highlights
					</h2>
					<p className='text-gray-400 text-sm max-w-xl'>
						Each big show gets a story highlight — jump straight to the reel on
						Instagram.
					</p>
				</div>
				<Button
					label='Open sample highlight'
					icon='pi pi-external-link'
					onClick={() => window.open(SAMPLE_INSTAGRAM_HIGHLIGHT, '_blank')}
					pt={{
						root: { className: 'rounded-full shrink-0' },
					}}
				/>
			</div>
		</Card>
	)
}
