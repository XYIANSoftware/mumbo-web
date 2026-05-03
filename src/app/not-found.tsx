'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-center'
			>
				<h1 className='mb-4 text-4xl font-bold'>404 - Page Not Found</h1>
				<p className='mb-8 text-lg text-gray-600'>
					The page you are looking for does not exist.
				</p>
				<Link
					href='/'
					className='rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark'
				>
					Go Home
				</Link>
			</motion.div>
		</div>
	)
}
