import {
	FaSpotify,
	FaSoundcloud,
	FaYoutube,
	FaInstagram,
	FaTiktok,
} from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'

export function LinksPlatformIcon(
	platform: string | undefined,
	className: string = ''
) {
	if (!platform) return null

	switch (platform.toUpperCase()) {
		case 'SPOTIFY':
			return <FaSpotify className={`text-[#1DB954] ${className}`} />
		case 'SOUNDCLOUD':
			return <FaSoundcloud className={`text-[#FF3300] ${className}`} />
		case 'YOUTUBE':
			return <FaYoutube className={`text-[#FF0000] ${className}`} />
		case 'INSTAGRAM':
			return <FaInstagram className={`text-[#E4405F] ${className}`} />
		case 'APPLE':
			return <SiApplemusic className={`text-gray-100 ${className}`} />
		case 'TIKTOK':
			return <FaTiktok className={`text-gray-100 ${className}`} />
		default:
			return null
	}
}
