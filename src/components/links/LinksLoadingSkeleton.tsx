'use client'

export function LinksLoadingSkeleton() {
	return (
		<div className='space-y-4'>
			<div className='text-center mb-8'>
				<div className='w-24 h-24 bg-background-paper/50 rounded-full mx-auto mb-4 animate-pulse' />
				<div className='h-6 w-48 bg-background-paper/50 rounded mx-auto mb-2 animate-pulse' />
				<div className='h-4 w-32 bg-background-paper/50 rounded mx-auto animate-pulse' />
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6'>
				{Array(4)
					.fill(0)
					.map((_, i) => (
						<div key={i} className='bg-background-paper p-3 rounded-lg'>
							<div className='flex items-center gap-3'>
								<div className='w-10 h-10 rounded-full bg-background-paper/50 animate-pulse' />
								<div className='flex-1 min-w-0'>
									<div className='h-5 w-24 bg-background-paper/50 rounded mb-1 animate-pulse' />
									<div className='h-3 w-32 bg-background-paper/50 rounded animate-pulse' />
								</div>
							</div>
						</div>
					))}
			</div>

			{Array(3)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className='bg-background-paper/20 rounded-lg p-3 space-y-2'
					>
						<div className='flex items-center gap-2'>
							<div className='w-8 h-8 rounded-full bg-background-paper/50 animate-pulse' />
							<div className='h-5 w-24 bg-background-paper/50 rounded animate-pulse' />
						</div>
					</div>
				))}
		</div>
	)
}
