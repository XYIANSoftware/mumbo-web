'use client'

export function EventsListSkeleton() {
	return (
		<div className='space-y-8'>
			{Array(2)
				.fill(0)
				.map((_, index) => (
					<div key={index} className='animate-pulse'>
						<div className='flex flex-col md:flex-row gap-6'>
							<div className='w-full md:w-1/3'>
								<div className='bg-gray-700 rounded-lg aspect-video md:aspect-square' />
							</div>
							<div className='flex-1 space-y-4'>
								<div className='h-8 bg-gray-700 rounded w-3/4' />
								<div className='flex flex-wrap gap-4'>
									{Array(3)
										.fill(0)
										.map((_, i) => (
											<div
												key={i}
												className='h-6 bg-gray-700 rounded w-32'
											/>
										))}
								</div>
								<div className='h-20 bg-gray-700 rounded' />
								<div className='h-10 bg-gray-700 rounded w-32' />
							</div>
						</div>
					</div>
				))}
		</div>
	)
}
