import type { HTMLMotionProps } from 'framer-motion'

/** Matches `motion.div` props used by PageHeader / useAnimation */
export type AnimationProps = Pick<
	HTMLMotionProps<'div'>,
	'initial' | 'animate' | 'exit' | 'transition'
>
