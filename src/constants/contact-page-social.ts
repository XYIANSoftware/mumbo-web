export interface ContactPageSocialLink {
	platform: string
	url: string
	icon: string
	label: string
}

/** Contact page “Connect” list (labels + URLs for form adjacent column). */
export const CONTACT_PAGE_SOCIAL_LINKS: ContactPageSocialLink[] = [
	{
		platform: 'Instagram',
		url: 'https://instagram.com/mumbobeatz',
		icon: 'pi pi-instagram',
		label: '@mumbobeatz',
	},
	{
		platform: 'Twitter',
		url: 'https://twitter.com/Mumbobeatz',
		icon: 'pi pi-twitter',
		label: '@Mumbobeatz',
	},
	{
		platform: 'YouTube',
		url: 'https://youtube.com/@mumbobeatz',
		icon: 'pi pi-youtube',
		label: '@mumbobeatz',
	},
	{
		platform: 'Facebook',
		url: 'https://www.facebook.com/profile.php?id=61575874555012',
		icon: 'pi pi-facebook',
		label: 'DJ Mumbo',
	},
]
