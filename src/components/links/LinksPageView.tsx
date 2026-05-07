'use client'

import { useMemo } from 'react'
import { SITE_GROUPED_LINKS } from '@/constants/site-links'
import { LinksCategorizedAccordion } from './LinksCategorizedAccordion'
import { LinksDecorativeBackdrop } from './LinksDecorativeBackdrop'
import { LinksMainGrid } from './LinksMainGrid'
import { LinksProfileHero } from './LinksProfileHero'
import {
	mergeGroupedLinks,
	mergeMainLinkList,
} from './links-site-lists'

export function LinksPageView() {
	const mainLinksGrid = useMemo(
		() => mergeMainLinkList(SITE_GROUPED_LINKS.main),
		[]
	)

	const groupedLinks = useMemo(
		() => mergeGroupedLinks(SITE_GROUPED_LINKS),
		[]
	)

	return (
		<div className='min-h-screen flex flex-col items-stretch px-4 py-4 max-w-6xl mx-auto relative overflow-hidden'>
			<LinksDecorativeBackdrop />
			<LinksProfileHero />

			<LinksMainGrid links={mainLinksGrid} />
			<LinksCategorizedAccordion links={groupedLinks} />
		</div>
	)
}
