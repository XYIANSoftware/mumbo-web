'use client'

import { useEffect, useMemo, useState } from 'react'
import type { GroupedLinks } from './grouped-links'
import { LinksCategorizedAccordion } from './LinksCategorizedAccordion'
import { LinksDecorativeBackdrop } from './LinksDecorativeBackdrop'
import { LinksLoadingSkeleton } from './LinksLoadingSkeleton'
import { LinksMainGrid } from './LinksMainGrid'
import { LinksProfileHero } from './LinksProfileHero'
import {
	mergeGroupedLinks,
	mergeMainLinkList,
} from './links-site-lists'

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

	const mainLinksGrid = useMemo(
		() => mergeMainLinkList(links.main),
		[links.main]
	)

	const groupedLinks = useMemo(
		() => mergeGroupedLinks(links),
		[links]
	)

	return (
		<div className='min-h-screen flex flex-col items-center px-4 py-4 max-w-6xl mx-auto relative overflow-hidden'>
			<LinksDecorativeBackdrop />
			<LinksProfileHero />

			{loading ? (
				<LinksLoadingSkeleton />
			) : (
				<>
					<LinksMainGrid links={mainLinksGrid} />
					<LinksCategorizedAccordion links={groupedLinks} />
				</>
			)}
		</div>
	)
}
