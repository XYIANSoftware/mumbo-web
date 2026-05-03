export interface HighlightItem {
	id: string
	title: string
	type: 'image' | 'video'
	/** Full-size media (image path or direct video file URL). */
	src: string
	thumbnail: string
	description?: string
	/** Optional reel opens in a new tab from the card actions. */
	instagramHighlightUrl?: string
	/** When set, dialog plays this YouTube embed instead of a video file. */
	youtubeEmbedId?: string
}

/** Example Instagram highlight reel (replace or add more per show). */
export const SAMPLE_INSTAGRAM_HIGHLIGHT =
	'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTAxNjYwNzg4NjU3ODEy?igsh=NTc4MTIwNjQ2YQ=='
