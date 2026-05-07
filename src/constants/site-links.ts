import type { GroupedLinks } from '@/components/links/grouped-links'

/**
 * Public Socials link groups — single source for **`/socials`** and **`GET /api/links`**.
 * Pinned main tiles come from **`LINKS_MAIN_PINNED`** via **`mergeMainLinkList`**.
 * Add keys here for static accordion categories when needed (e.g. **`instagram`**).
 */
export const SITE_GROUPED_LINKS: GroupedLinks = {
	main: [],
}
