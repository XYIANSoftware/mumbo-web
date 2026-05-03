'use client'

import { useEffect, useMemo, useState } from 'react'
import { LINKS_PINNED_MAIN } from './links-pinned-data'
import { LinksCategorizedAccordion } from './LinksCategorizedAccordion'
import type { GroupedLinks } from './LinksCategorizedAccordion'
import { LinksDecorativeBackdrop } from './LinksDecorativeBackdrop'
import { LinksLoadingSkeleton } from './LinksLoadingSkeleton'
import { LinksMainGrid } from './LinksMainGrid'
import { LinksProfileHero } from './LinksProfileHero'

export function LinksPageView() {
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

	const mainLinksGrid = useMemo(() => {
		const rest = links.main ?? []
		return [...LINKS_PINNED_MAIN, ...rest].sort(
			(a, b) => a.sort_order - b.sort_order
		)
	}, [links.main])

	return (
		<div className='min-h-screen flex flex-col items-center px-4 py-4 max-w-6xl mx-auto relative overflow-hidden'>
			<LinksDecorativeBackdrop />
			<LinksProfileHero />

			{loading ? (
				<LinksLoadingSkeleton />
			) : (
				<>
					<LinksMainGrid links={mainLinksGrid} />
					<LinksCategorizedAccordion links={links} />
				</>
			)}
		</div>
	)
}
