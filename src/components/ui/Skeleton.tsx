interface SkeletonProps {
	className?: string
	circle?: boolean
}

export function Skeleton({ className = '', circle = false }: SkeletonProps) {
	return (
		<div
			className={`animate-pulse bg-background-paper/50 ${
				circle ? 'rounded-full' : 'rounded-lg'
			} ${className}`}
		/>
	)
}
