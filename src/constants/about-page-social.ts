export interface AboutPageSocialLink {
	platform: string
	url: string
	icon: string
}

/** About page profile links (handles/URLs differ from footer shortcuts). */
export const ABOUT_PAGE_SOCIAL_LINKS: AboutPageSocialLink[] = [
	{
		platform: 'Spotify',
		url: 'https://open.spotify.com/artist/mumbobeatz',
		icon: 'pi pi-spotify',
	},
	{
		platform: 'SoundCloud',
		url: 'https://soundcloud.com/mumbobeatz',
		icon: 'pi pi-cloud',
	},
	{
		platform: 'YouTube',
		url: 'https://youtube.com/@mumbobeatz',
		icon: 'pi pi-youtube',
	},
	{
		platform: 'Instagram',
		url: 'https://instagram.com/mumbobeatz',
		icon: 'pi pi-instagram',
	},
	{
		platform: 'Twitter',
		url: 'https://twitter.com/mumbobeatz',
		icon: 'pi pi-twitter',
	},
	{
		platform: 'Facebook',
		url: 'https://www.facebook.com/profile.php?id=61575874555012',
		icon: 'pi pi-facebook',
	},
]
