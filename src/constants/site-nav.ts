export interface SiteNavItem {
	label: string
	path: string
}

export const SITE_NAV_ITEMS: SiteNavItem[] = [
	{ label: 'Home', path: '/' },
	{ label: 'Events', path: '/events' },
	{ label: 'Music', path: '/music' },
	{ label: 'Highlights', path: '/highlights' },
	{ label: 'Socials', path: '/socials' },
	{ label: 'About', path: '/about' },
	{ label: 'Contact', path: '/contact' },
]

/** Same routes as the header minus Home (footer quick links). */
export const FOOTER_NAV_ITEMS: SiteNavItem[] = SITE_NAV_ITEMS.filter(
	item => item.path !== '/',
)
