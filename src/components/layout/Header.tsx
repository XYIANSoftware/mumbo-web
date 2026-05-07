'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Toolbar } from 'primereact/toolbar'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import type { SidebarPassThroughOptions } from 'primereact/sidebar'
import { SITE_NAV_ITEMS } from '@/constants/site-nav'

const SIDEBAR_PT: SidebarPassThroughOptions = {
	mask: {
		className: 'liquid-glass-drawer-mask',
	},
	/* Hide Prime empty header row — custom chrome lives in children. */
	header: {
		className: 'hidden',
	},
	root: {
		className:
			'liquid-glass-sidebar-root border-none bg-transparent shadow-none',
	},
	content: {
		className:
			'liquid-glass-sidebar-content h-full min-h-0 p-0 border-none ' +
			'bg-transparent',
	},
}

export default function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false)
	const pathname = usePathname()

	const start = (
		<Link href='/' className='flex align-items-center gap-2 no-underline'>
			<img
				src='/images/mumbo-assets/Mumbo_logo.png'
				alt='Mumbo'
				className='h-10 w-auto'
			/>
		</Link>
	)

	const center = (
		<nav className='hidden md:flex gap-6'>
			{SITE_NAV_ITEMS.map(item => (
				<Link
					key={item.path}
					href={item.path}
					className={`text-color hover:text-primary-light transition-colors ${
						pathname === item.path ? 'text-primary-light font-semibold' : ''
					}`}
				>
					{item.label}
				</Link>
			))}
		</nav>
	)

	const end = (
		<div className='flex items-center'>
			<Button
				icon='pi pi-bars'
				onClick={() => setSidebarVisible(true)}
				className='liquid-glass-menu-btn md:!hidden'
				aria-label='Menu'
			/>
		</div>
	)

	return (
		<>
			<div className='sticky top-0 z-50 backdrop-blur-md bg-background-primary/80'>
				<Toolbar
					start={start}
					center={center}
					end={end}
					className='border-none bg-transparent px-4'
					style={{ minHeight: '4rem' }}
				/>
			</div>

			<Sidebar
				visible={sidebarVisible}
				position='right'
				showCloseIcon={false}
				className='border-none p-0'
				pt={SIDEBAR_PT}
				onHide={() => setSidebarVisible(false)}
			>
				<div className='liquid-glass-drawer flex h-full min-h-0 flex-col'>
					<div
						className='pointer-events-none absolute inset-0 overflow-hidden rounded-l-[1.75rem] sm:rounded-l-[2rem]'
						aria-hidden
					>
						<div className='liquid-glass-aura-tl absolute -right-10 -top-14 h-56 w-56 rounded-full blur-3xl' />
						<div className='liquid-glass-aura-bl absolute -bottom-12 -left-8 h-48 w-48 rounded-full blur-3xl' />
						<div className='liquid-glass-aura-mid absolute bottom-1/4 right-1/4 h-36 w-36 rounded-full blur-3xl' />
						<div className='liquid-glass-aura-edge absolute left-0 top-1/2 h-40 w-24 -translate-y-1/2' />
					</div>

					<div className='relative z-[1] flex min-h-0 flex-1 flex-col'>
						{/* Match main Toolbar: minHeight 4rem, px-4 — aligns hamburger + close */}
						<div
							className={
								'liquid-glass-drawer-head flex h-16 min-h-16 shrink-0 ' +
								'items-center justify-between gap-3 border-b ' +
								'border-white/20 px-4 backdrop-blur-[2px]'
							}
						>
							<span className='font-display text-lg liquid-glass-drawer-title'>
								VIBES
							</span>
							<Button
								icon='pi pi-times'
								onClick={() => setSidebarVisible(false)}
								className='liquid-glass-menu-btn shrink-0'
								aria-label='Close menu'
							/>
						</div>

						<nav
							className='flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 py-4'
							aria-label='Mobile'
						>
							{SITE_NAV_ITEMS.map(item => {
								const isActive = pathname === item.path
								return (
									<Link
										key={item.path}
										href={item.path}
										className={
											'liquid-glass-nav-link flex items-center ' +
											'justify-center px-4 py-3 text-center ' +
											'text-base font-medium'
										}
										data-active={isActive ? 'true' : 'false'}
										onClick={() => setSidebarVisible(false)}
									>
										{item.label}
									</Link>
								)
							})}
						</nav>

						<div className='liquid-glass-drawer-footer px-5 py-4'>
							<p className='text-center text-xs text-color-secondary'>
								DJ Mumbo · EDM & playful vibes
							</p>
						</div>
					</div>
				</div>
			</Sidebar>
		</>
	)
}
