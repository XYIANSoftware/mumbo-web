import type { IconType } from 'react-icons'
import { FaSpotify, FaSoundcloud, FaYoutube } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'
import type { PlatformKey } from './music-types'

export const musicPlatformMeta: Record<
	PlatformKey,
	{
		label: string
		iconClass: string
		Icon: IconType
	}
> = {
	spotify: {
		label: 'Spotify',
		iconClass: 'text-[#1DB954]',
		Icon: FaSpotify,
	},
	soundcloud: {
		label: 'SoundCloud',
		iconClass: 'text-[#FF3300]',
		Icon: FaSoundcloud,
	},
	apple: {
		label: 'Apple Music',
		iconClass: 'text-gray-200',
		Icon: SiApplemusic,
	},
	youtube: {
		label: 'YouTube',
		iconClass: 'text-[#FF0000]',
		Icon: FaYoutube,
	},
}
