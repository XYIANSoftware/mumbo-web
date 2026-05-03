'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/types/content'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { FaSpotify, FaSoundcloud, FaYoutube, FaInstagram } from 'react-icons/fa'

interface GroupedLinks {
	[key: string]: Link[]
}

function AnimatedShape({ className }: { className: string }) {
	return (
		<motion.div
			className={`absolute bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl ${className}`}
			animate={{
				scale: [1, 1.2, 1],
				rotate: [0, 90, 0],
			}}
			transition={{
				duration: 10,
				repeat: Infinity,
				ease: 'linear',
			}}
		/>
	)
}

// Helper function to get the appropriate icon component
function getPlatformIcon(platform: string | undefined, className: string = '') {
	if (!platform) return null

	switch (platform.toUpperCase()) {
		case 'SPOTIFY':
			return <FaSpotify className={`text-[#1DB954] ${className}`} />
		case 'SOUNDCLOUD':
			return <FaSoundcloud className={`text-[#FF3300] ${className}`} />
		case 'YOUTUBE':
			return <FaYoutube className={`text-[#FF0000] ${className}`} />
		case 'INSTAGRAM':
			return <FaInstagram className={`text-[#E4405F] ${className}`} />
		default:
			return null
	}
}

function LoadingSkeleton() {
	return (
		<div className='space-y-4'>
			{/* Profile Skeleton */}
			<div className='text-center mb-8'>
				<div className='w-24 h-24 bg-background-paper/50 rounded-full mx-auto mb-4 animate-pulse' />
				<div className='h-6 w-48 bg-background-paper/50 rounded mx-auto mb-2 animate-pulse' />
				<div className='h-4 w-32 bg-background-paper/50 rounded mx-auto animate-pulse' />
			</div>

			{/* Main Links Skeleton - Grid Layout */}
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

			{/* Accordion Skeleton */}
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

export default function LinksPage() {
	const [links, setLinks] = useState<GroupedLinks>({})
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchLinks() {
			try {
				const response = await fetch('/api/links')
				const data = await response.json()
				setLinks(data)
			} catch (error) {
				console.error('Error fetching links:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchLinks()
	}, [])

	// Function to capitalize first letter of each word
	const formatCategory = (category: string) => {
		return category
			.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	return (
		<div className='min-h-screen flex flex-col items-center px-4 py-4 max-w-6xl mx-auto relative overflow-hidden'>
			{/* Animated Background Shapes */}
			<AnimatedShape className='w-[400px] h-[400px] -bottom-20 -left-20 opacity-50' />
			<AnimatedShape className='w-[300px] h-[300px] -top-20 -right-20 opacity-50' />
			<AnimatedShape className='w-[200px] h-[200px] bottom-40 right-20 opacity-50' />

			{/* Profile Section */}
			<motion.div
				className='text-center mb-4 relative z-10'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{/* Commented out image section
				<div className='relative w-20 h-20 mx-auto mb-3'>
					<Image
						src='/images/mumbo-assets/Mumbo_Logo.png'
						alt='Mumbo Logo'
						fill
						className='object-contain'
						priority
					/>
				</div>
				*/}
				<h1 className='text-xl font-bold font-display mb-1'>
					<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light'>
						@mumbobeatz
					</span>
				</h1>
				<p className='text-gray-300 text-xs'>Do the things you love</p>
			</motion.div>

			{loading ? (
				<LoadingSkeleton />
			) : (
				<>
					{/* Main Links - Grid Layout */}
					<motion.div
						className='w-full mb-4 relative z-10'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
							{links.main?.map((link: Link) => (
								<Card
									key={link.id}
									pt={{
										root: {
											className:
												'bg-background-paper border-none hover:bg-background-secondary transition-colors cursor-pointer',
										},
										content: { className: 'p-0' },
									}}
									onClick={() => window.open(link.url, '_blank')}
								>
									<div className='flex items-center gap-4 p-4'>
										{getPlatformIcon(link.platform, 'text-5xl')}
										<div className='min-w-0 text-left'>
											<h2 className='text-base font-medium mb-1 text-white truncate'>
												{link.title}
											</h2>
											{link.description && (
												<p className='text-sm text-gray-200 truncate'>
													{link.description}
												</p>
											)}
										</div>
									</div>
								</Card>
							))}
						</div>
					</motion.div>

					{/* Categorized Links */}
					<motion.div
						className='w-full relative z-10'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Accordion>
							{Object.entries(links)
								.filter(([category]) => category !== 'main')
								.map(([category, categoryLinks]) => (
									<AccordionTab
										key={category}
										header={
											<div className='flex items-center gap-3'>
												{getPlatformIcon(category, 'text-2xl')}
												<span className='text-white'>
													{formatCategory(category)}
												</span>
												<span className='text-sm text-gray-200'>
													({categoryLinks.length})
												</span>
											</div>
										}
									>
										<div className='space-y-2 pt-2'>
											{categoryLinks.map((link: Link) => (
												<Button
													key={link.id}
													onClick={() => window.open(link.url, '_blank')}
													className='p-0 w-full'
													pt={{
														root: {
															className:
																'bg-background-paper hover:bg-background-secondary border-none',
														},
													}}
												>
													<div className='flex items-center gap-3 p-3'>
														{getPlatformIcon(link.platform, 'text-2xl')}
														<div className='text-left'>
															<h3 className='text-base font-medium mb-0.5 text-white'>
																{link.title}
															</h3>
															{link.description && (
																<p className='text-sm text-gray-200'>
																	{link.description}
																</p>
															)}
														</div>
													</div>
												</Button>
											))}
										</div>
									</AccordionTab>
								))}
						</Accordion>
					</motion.div>
				</>
			)}
		</div>
	)
}
